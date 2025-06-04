"use client";
import Link from "next/link";
import { useLanguage } from "./LanguageContext";

export default function MenuBar() {
  const { lang, setLang, t } = useLanguage();
  return (
    <div id="menuBar">
      <Link href="/" id="erp-it-logo">erp-it</Link>
      <section id="menuBar-btns">
        <Link id="blog-btn" href="/blog">{t.blog}</Link>
        {/* <Link id="contact-btn" href="/contact">Contact</Link> */}
        <Link href="https://github.com/mariusErpenbach" target="_blank" rel="noopener noreferrer">{t.projekte}</Link>
        <Link href="/aboutme">{t.about}</Link>
        <select
          className="menuBar-lang-select"
          aria-label={t.language}
          value={lang}
          onChange={e => setLang(e.target.value as "de" | "en")}
        >
          <option value="de">🇩🇪 DE</option>
          <option value="en">🇬🇧 EN</option>
        </select>
      </section>
    </div>
  );
}
