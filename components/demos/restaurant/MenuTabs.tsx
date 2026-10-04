"use client";

import { useId, useState } from "react";
import { cn } from "@/lib/utils";
import type { MenuCategory } from "./data";

/**
 * Selector de categorías del menú. Interacción puramente de cliente (useState),
 * sin base de datos: todas las categorías ya están en el HTML servido, solo
 * se alterna cuál panel queda visible — por eso es el único componente de
 * esta demo que necesita "use client".
 */
export function MenuTabs({ categories }: { categories: MenuCategory[] }) {
  const [activeId, setActiveId] = useState(categories[0]?.id);
  const baseId = useId();
  const active = categories.find((category) => category.id === activeId) ?? categories[0];

  return (
    <div>
      <div role="tablist" aria-label="Categorías del menú" className="flex flex-wrap gap-x-8 gap-y-3 border-b border-[#241c15]/10 pb-4">
        {categories.map((category) => {
          const selected = category.id === active?.id;
          return (
            <button
              key={category.id}
              type="button"
              role="tab"
              id={`${baseId}-tab-${category.id}`}
              aria-selected={selected}
              aria-controls={`${baseId}-panel-${category.id}`}
              onClick={() => setActiveId(category.id)}
              className={cn(
                "relative pb-2 text-sm font-semibold uppercase tracking-[0.12em] transition-colors duration-200 ease-eleva focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c1603c]",
                selected ? "text-[#241c15]" : "text-[#8a7461] hover:text-[#241c15]",
              )}
            >
              {category.label}
              <span
                aria-hidden="true"
                className={cn(
                  "absolute inset-x-0 bottom-0 h-[2px] bg-[#c1603c] transition-opacity duration-200 ease-eleva",
                  selected ? "opacity-100" : "opacity-0",
                )}
              />
            </button>
          );
        })}
      </div>

      {categories.map((category) => {
        const selected = category.id === active?.id;
        return (
          <div
            key={category.id}
            role="tabpanel"
            id={`${baseId}-panel-${category.id}`}
            aria-labelledby={`${baseId}-tab-${category.id}`}
            hidden={!selected}
            className="mt-8 divide-y divide-[#241c15]/10 border-y border-[#241c15]/10"
          >
            {category.items.map((item, index) => (
              <article key={item.name} className="flex flex-col gap-3 py-6 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
                <div className="flex gap-5 sm:gap-6">
                  <span className="pt-1 font-mono text-xs text-[#a89378]">{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="text-lg font-medium text-[#241c15]">{item.name}</h3>
                    <p className="mt-1 max-w-md text-sm text-[#5c4b3a]">{item.description}</p>
                  </div>
                </div>
                <p className="pl-10 text-sm font-medium text-[#9c4a2e] sm:pl-0">
                  {item.price} <span className="ml-1 text-[10px] font-normal uppercase tracking-widest text-[#8a7461]">COP · precio demo</span>
                </p>
              </article>
            ))}
          </div>
        );
      })}
    </div>
  );
}
