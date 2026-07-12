import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader, SiteFooter } from "../src/components/SiteChrome";

export const metadata: Metadata = {
  title: "Sri Ganesh Exports",
  description: "Premium Sri Lankan marine products for international wholesale markets.",
  keywords: "seafood, seafood sri lanka, sea cucumber curry fish, sand fish, sea cucumber fish, sea cucumber, dried seafood, sustainable fish, sustainable seafood, cucumber seafood, shells seafood, sea cucumber seafood, seafood cucumber, cucumber in the sea, sea and seafood, apa itu sea cucumber, about sea cucumber, sea cucumber what is it, sea cucumber is, a sea cucumber, seafood export, sea cucumber brown, fish sea cucumber, sand fish sea cucumber, fish in sea cucumber, dried sea conch, seafood by the sea, seafood sea, brown sandfish sea cucumber, seafood of the sea, saltwater cucumber, sea seafood, preserved sea cucumber, sea cuke, curry fish sea cucumber, sea cucumber sand, sea cucumber sandfish, tiger sea cucumber, sea cucumber shell, seafood fish, holothuria scabra, lanka seafood, fish export companies, sand sea cucumber, seafood export company, seafood ltd, seafood and fish, sea shells seafood, brown sea cucumber, seashell seafood, by the sea seafood, seafood with a shell, seafood the shell, trepang fish, sandfish sea cucumber, by the sea food, sand cucumber, holothuria sea cucumber, kinds of sea cucumber, 3 seafood, the sea food, all about sea cucumbers, big sea cucumber, c cucumber, different types of sea cucumber, eat sea cucumber, holothuria, live sea cucumber, long sea cucumber, ocean sea cucumber, saltwater sea cucumber, sea cu, sea cucumber are, sea cucumber big, sea cucumber can you eat, sea cucumber good for, sea cucumber in shell, sea cucumber long, sea cucumber small, sea cucumber to eat, sea cucumber type, sea cucumber use, sea cucumber with shell, sea cucumbers types, sea gherkin, small sea cucumber, stichopus, tiny sea cucumber, sri lanka fish market, catching sea cucumber, sea cucumber eating fish, sea cucumber fishing, sea foods in sri lanka, sri lankan sea food, chinese dried seafood, dried seafood for soup, dried seafood products, dried seafood shop, dried seafood store, dried shellfish, seafood dry, sandfish fish, curry fish sea cucumber price, sea cucumber balck tiger, sea cucumber flower tiger",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" />
      </head>
      <body className="antialiased">
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
