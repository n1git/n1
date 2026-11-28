"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { withBasePath } from "./base-path";

export default function NavLink({ href, children }: { href: string; children: ReactNode }) {
  const pathname = usePathname() ?? "";
  const current = pathname.replace(/\/$/, "") === href;
  return (
    <a className="nav__link" href={withBasePath(href)} aria-current={current ? "page" : undefined}>
      {children}
    </a>
  );
}
