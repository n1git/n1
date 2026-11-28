import type { ReactNode } from "react";
import { withBasePath } from "./base-path";

export function SubBack({ href = "/", label = "Beranda" }: { href?: string; label?: string }) {
  return (
    <a className="sub-back" href={withBasePath(href)}>
      <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
        <path d="M12 7H2m4-4L2 7l4 4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      {label}
    </a>
  );
}

export function SubHero({
  label,
  title,
  lead,
  tall,
  children,
}: {
  label: string;
  title: ReactNode;
  lead?: ReactNode;
  tall?: boolean;
  children?: ReactNode;
}) {
  return (
    <header className={`sub-hero${tall ? " sub-hero--tall" : ""}`}>
      <span className="sub-label">{label}</span>
      <h1>{title}</h1>
      {lead && <p className="sub-lead">{lead}</p>}
      {children}
    </header>
  );
}

export function SubSec({
  id,
  label,
  title,
  children,
}: {
  id: string;
  label: string;
  title: ReactNode;
  children: ReactNode;
}) {
  return (
    <section className="sub-sec" id={id} aria-labelledby={`${id}-h`}>
      <div className="sub-side">
        <span className="sub-label">{label}</span>
        <h2 id={`${id}-h`}>{title}</h2>
      </div>
      <div className="sub-body">{children}</div>
    </section>
  );
}

export function Tag({ kind }: { kind: "existing" | "vision" }) {
  return (
    <span className={`sub-tag${kind === "vision" ? " sub-tag--vision" : ""}`}>
      {kind === "vision" ? "Future vision" : "Existing capability"}
    </span>
  );
}
