import os
import json
import shutil
import re

# 1. Update package.json
with open('package.json', 'r', encoding='utf-8') as f:
    pkg = json.load(f)

pkg['scripts'] = {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
}

if 'react-router-dom' in pkg.get('dependencies', {}):
    del pkg['dependencies']['react-router-dom']
pkg['dependencies']['next'] = "14.2.5"

if '@vitejs/plugin-react' in pkg.get('devDependencies', {}):
    del pkg['devDependencies']['@vitejs/plugin-react']
if 'vite' in pkg.get('devDependencies', {}):
    del pkg['devDependencies']['vite']

with open('package.json', 'w', encoding='utf-8') as f:
    json.dump(pkg, f, indent=2)

# 2. Create app directory and move global css
os.makedirs('app', exist_ok=True)
os.makedirs('app/about', exist_ok=True)
os.makedirs('app/products', exist_ok=True)
os.makedirs('app/process', exist_ok=True)
os.makedirs('app/contact', exist_ok=True)

if os.path.exists('src/index.css'):
    shutil.move('src/index.css', 'app/globals.css')

# 3. Create app/layout.tsx
layout_content = """import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader, SiteFooter } from "../src/components/SiteChrome";

export const metadata: Metadata = {
  title: "Sri Ganesh Exports",
  description: "Premium Sri Lankan marine products for international wholesale markets.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
"""
with open('app/layout.tsx', 'w', encoding='utf-8') as f:
    f.write(layout_content)

# 4. Refactor pages and components
def replace_imports(content):
    # Replace react-router-dom Link with next/link
    content = re.sub(r"import\s+\{([^}]*)Link([^}]*)\}\s+from\s+['\"]react-router-dom['\"]", r"import \1 \2 from 'react-router-dom';\nimport Link from 'next/link'", content)
    # If there's only Link, it might leave an empty import, let's just do a simpler replace:
    content = content.replace("import { Link } from 'react-router-dom'", "import Link from 'next/link'")
    content = content.replace("import { Link, NavLink } from 'react-router-dom'", "import Link from 'next/link'")
    # Remove SiteChrome imports from pages because we put them in layout.tsx
    content = re.sub(r"import \{ SiteFooter, SiteHeader \} from '\.\./components/SiteChrome'.*\n", "", content)
    content = content.replace("<SiteHeader overlay />", "")
    content = content.replace("<SiteHeader />", "")
    content = content.replace("<SiteFooter />", "")
    return content

pages_map = {
    'src/pages/HomePage.tsx': 'app/page.tsx',
    'src/pages/AboutPage.tsx': 'app/about/page.tsx',
    'src/pages/ProductsPage.tsx': 'app/products/page.tsx',
    'src/pages/ProcessPage.tsx': 'app/process/page.tsx',
    'src/pages/ContactPage.tsx': 'app/contact/page.tsx',
}

for src_path, dest_path in pages_map.items():
    if os.path.exists(src_path):
        with open(src_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        content = replace_imports(content)
        
        # Add use client if framer motion is used
        if 'framer-motion' in content:
            content = '"use client";\n' + content
        
        # Export default for Next.js pages
        content = re.sub(r"export function ([A-Za-z0-9_]+)", r"export default function \1", content)
        
        with open(dest_path, 'w', encoding='utf-8') as f:
            f.write(content)

# 5. Refactor SiteChrome and ContactForm
site_chrome_path = 'src/components/SiteChrome.tsx'
if os.path.exists(site_chrome_path):
    with open(site_chrome_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    content = '"use client";\n' + content
    content = content.replace("import { Link, NavLink } from 'react-router-dom'", "import Link from 'next/link'\nimport { usePathname } from 'next/navigation'")
    
    # Replace NavLink with a custom implementation using usePathname
    navlink_replacement = """
function NavLink({ to, children, end, onClick, className }: any) {
  const pathname = usePathname()
  const isActive = end ? pathname === to : pathname.startsWith(to)
  return (
    <Link href={to} onClick={onClick} className={className({ isActive })}>
      {children}
    </Link>
  )
}
"""
    content = content.replace("const navigation =", navlink_replacement + "\nconst navigation =")
    # Change "to=" in Link to "href="
    content = content.replace("<Link to=", "<Link href=")
    content = content.replace("<NavLink to=", "<NavLink to=") # NavLink still uses 'to' in our custom wrapper
    
    with open(site_chrome_path, 'w', encoding='utf-8') as f:
        f.write(content)

contact_form_path = 'src/components/ContactForm.tsx'
if os.path.exists(contact_form_path):
    with open(contact_form_path, 'r', encoding='utf-8') as f:
        content = f.read()
    content = '"use client";\n' + content
    with open(contact_form_path, 'w', encoding='utf-8') as f:
        f.write(content)
        
# Fix any remaining Link to href in components
for file in ['src/components/PageHero.tsx', 'src/components/SiteChrome.tsx']:
    if os.path.exists(file):
        with open(file, 'r', encoding='utf-8') as f:
            content = f.read()
        content = content.replace("<Link to=", "<Link href=")
        with open(file, 'w', encoding='utf-8') as f:
            f.write(content)

# 6. Delete obsolete files
obsolete_files = [
    'vite.config.ts',
    'index.html',
    'src/index.tsx',
    'src/App.tsx'
]
for file in obsolete_files:
    if os.path.exists(file):
        os.remove(file)
if os.path.exists('src/pages'):
    shutil.rmtree('src/pages')

print("Migration script completed successfully.")
