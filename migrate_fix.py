import os
import shutil
import re

def replace_imports(content):
    content = content.replace("import { Link } from 'react-router-dom'", "import Link from 'next/link'")
    content = content.replace("import { Link, NavLink } from 'react-router-dom'", "import Link from 'next/link'")
    content = re.sub(r"import \{ SiteFooter, SiteHeader \} from '\.\./components/SiteChrome'.*\n", "", content)
    content = content.replace("<SiteHeader overlay />", "")
    content = content.replace("<SiteHeader />", "")
    content = content.replace("<SiteFooter />", "")
    content = content.replace("<Link to=", "<Link href=")
    return content

pages_map = {
    'src/pages/HomePage.tsx': 'app/page.tsx',
    'src/pages/ProductsPage.tsx': 'app/products/page.tsx',
    'src/pages/ProcessPage.tsx': 'app/process/page.tsx',
    'src/pages/ContactPage.tsx': 'app/contact/page.tsx',
}

for src_path, dest_path in pages_map.items():
    if os.path.exists(src_path):
        with open(src_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        content = replace_imports(content)
        
        if 'framer-motion' in content:
            content = '"use client";\n' + content
            
        content = re.sub(r"export function ([A-Za-z0-9_]+)", r"export default function \1", content)
        
        with open(dest_path, 'w', encoding='utf-8') as f:
            f.write(content)

# Refactor SiteChrome
site_chrome_path = 'src/components/SiteChrome.tsx'
if os.path.exists(site_chrome_path):
    with open(site_chrome_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    content = '"use client";\n' + content
    content = content.replace("import { Link, NavLink } from 'react-router-dom'", "import Link from 'next/link'\nimport { usePathname } from 'next/navigation'")
    
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
    content = content.replace("<Link to=", "<Link href=")
    
    with open(site_chrome_path, 'w', encoding='utf-8') as f:
        f.write(content)

# Refactor ContactForm
contact_form_path = 'src/components/ContactForm.tsx'
if os.path.exists(contact_form_path):
    with open(contact_form_path, 'r', encoding='utf-8') as f:
        content = f.read()
    content = '"use client";\n' + content
    with open(contact_form_path, 'w', encoding='utf-8') as f:
        f.write(content)
        
for file in ['src/components/PageHero.tsx']:
    if os.path.exists(file):
        with open(file, 'r', encoding='utf-8') as f:
            content = f.read()
        content = content.replace("<Link to=", "<Link href=")
        with open(file, 'w', encoding='utf-8') as f:
            f.write(content)
