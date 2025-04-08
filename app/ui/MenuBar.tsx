"use client";

import Link from "next/link";

export default function MenuBar() {
  return (
    <div id="menuBar">
      <Link href="/"id="erp-it-logo">erp-it</Link>
      <section id="menuBar-btns">
        <Link id="blog-btn" href="/blog">Blog</Link>
        <Link id="contact-btn" href="/contact">Contact</Link>
        <Link href="https://github.com/mariusErpenbach" target="_blank" rel="noopener noreferrer">Projects</Link>
        <Link href="https://www.linkedin.com/in/marius-erpenbach-292107297/" target="_blank" rel="noopener noreferrer">About me</Link>
      </section>
    </div>
  );
}
