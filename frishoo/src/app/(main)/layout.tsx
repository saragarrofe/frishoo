import React from "react";
import Link from "next/link";
import "./main.css";

// /Users/saragarrofe/Desktop/Code/frishoo/frishoo/src/app/(main)/layout.tsx

type Props = { children: React.ReactNode };

export default function MainLayout({ children }: Props) {
  return (
    <div className="main-layout">
      <a href="#content" className="skip-link">
        Skip to content
      </a>

      <header className="site-header">
        <div className="container">
          <h1 className="brand">
            <Link href="/">Frishoo</Link>
          </h1>

          <nav aria-label="Primary navigation" className="nav">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
      </header>

      <main id="content" className="site-main">
        {children}
      </main>

      <footer className="site-footer">
        <div className="container">© {new Date().getFullYear()} Frishoo</div>
      </footer>
    </div>
  );
}
