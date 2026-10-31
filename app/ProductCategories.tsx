"use client";

import { useState } from "react";
import type { TechDomain } from "./content";

export default function ProductCategories({ domains }: { domains: TechDomain[] }) {
  const [openNames, setOpenNames] = useState<Set<string>>(new Set());

  function toggle(name: string) {
    setOpenNames((prev) => {
      const next = new Set(prev);
      if (next.has(name)) next.delete(name);
      else next.add(name);
      return next;
    });
  }

  return (
    <div style={{ marginTop: 24 }}>
      {domains.map((domain, i) => {
        const isOpen = openNames.has(domain.name);
        const bodyId = `product-category-body-${i}`;
        return (
          <div className={`project${isOpen ? " open" : ""}`} key={domain.name}>
            <button
              type="button"
              className="project-trigger"
              aria-expanded={isOpen}
              aria-controls={bodyId}
              onClick={() => toggle(domain.name)}
            >
              <div className="heading">
                <span className="num">{String(i + 1).padStart(2, "0")}</span>
                <span className="title">
                  {domain.name}
                  {domain.vision && (
                    <span className="tag vision" style={{ marginLeft: 6 }}>
                      Vision
                    </span>
                  )}
                </span>
              </div>
              <span className="chev" aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </span>
            </button>
            <div className="project-body-wrap" id={bodyId}>
              <div className="project-body">
                <ul className="clean">
                  {domain.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
