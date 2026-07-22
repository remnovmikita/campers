"use client"

import Image from "next/image";
import Link from "next/link";
import css from "./Header.module.css"
import { usePathname } from "next/navigation";


export default function Header() {

    const patchname = usePathname();

  return (
    <header>
        <div className={css.container}>
        <Image
          src="/Logo.svg"
          alt="Next.js logo"
          width={136}
          height={16}
          className={css.logo}
          priority
        />
      <ul className={css.nav}>
        <li>
            <Link href="/" className={patchname === "/" ? css.check : css.normal}>Home</Link>
        </li>
        <li>
            <Link href="/catalog" className={patchname === "/catalog" ? css.check : css.normal}>Catalog</Link>
        </li>
      </ul>
      </div>
    </header>
  );
}