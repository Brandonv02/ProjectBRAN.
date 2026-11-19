/**
 * Maqueta del producto estrella de BRAN.: sistema de ventas e inventario
 * en navegador de escritorio + teléfono.
 *
 * Es una DEMO del producto, no un cliente real: la identidad va entre
 * corchetes a propósito (`[ TU NEGOCIO ]`, `[ Ventas ]`) y no hay cifras.
 *
 * Se dibuja a tamaño intrínseco 620×430 y se escala con `transform` dentro
 * de un contenedor de altura fija por breakpoint, así nunca se rompe ni
 * provoca scroll horizontal.
 */

const stats = [
  { label: "[ Ventas ]", hint: "Hoy" },
  { label: "[ Stock ]", hint: "En tiempo real" },
  { label: "[ Ganancia ]", hint: "Del mes" },
];

function MiniSite() {
  return (
    <div className="flex flex-col bg-carbon">
      {/* Barra del sistema */}
      <div className="flex h-9 items-center justify-between border-b border-line-soft px-5">
        <div className="flex items-center gap-1.5">
          <span className="size-3.5 rounded-full bg-accent" />
          <span className="font-label text-[8.5px] tracking-[0.16em] text-ink">
            [ TU NEGOCIO ]
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-[8.5px] text-muted">Ventas</span>
          <span className="text-[8.5px] text-muted">Inventario</span>
          <span className="text-[8.5px] text-muted">Reportes</span>

          <span className="rounded-full bg-accent-solid px-2.5 py-[5px] text-[8.5px] font-semibold text-carbon">
            Nueva venta
          </span>
        </div>
      </div>

      {/* Encabezado */}
      <div className="grid grid-cols-[1fr_176px] gap-4 px-5 pb-5 pt-6">
        <div className="flex flex-col gap-[9px] pt-1.5">
          <span className="font-label text-[7.5px] uppercase tracking-[0.2em] text-accent-bright">
            Ventas e inventario
          </span>
          <p className="font-display text-[21px] font-bold leading-[1.08] tracking-[-0.035em] text-ink">
            Tu inventario, sin cuaderno.
          </p>
          <p className="max-w-[200px] text-[9.5px] leading-[1.6] text-silver">
            Stock, ventas y ganancias en un solo lugar, tan fácil de usar como
            tu celular.
          </p>
          <div className="mt-1.5 flex items-center gap-2">
            <span className="rounded-full bg-accent-solid px-3.5 py-2 text-[9px] font-semibold text-carbon">
              Ver el stock
            </span>
            <span className="rounded-full border border-line-strong px-3.5 py-2 text-[9px] font-semibold text-ink">
              Registrar venta
            </span>
          </div>
        </div>

        {/* Gráfica abstracta (sin cifras) */}
        <div className="relative flex h-[152px] items-end gap-2 overflow-hidden rounded-[18px] border border-line bg-surface px-4 pb-4">
          {[38, 56, 44, 72, 62, 90].map((h, i) => (
            <span
              key={h}
              className={
                i === 5
                  ? "w-full rounded-full bg-accent"
                  : "w-full rounded-full bg-line-strong"
              }
              style={{ height: `${h}%` }}
            />
          ))}
          <span className="absolute left-3 top-2.5 font-label text-[7.5px] tracking-[0.14em] text-muted">
            [ GRÁFICA ]
          </span>
        </div>
      </div>

      {/* Indicadores */}
      <div className="grid grid-cols-3 gap-3 px-5 pb-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col gap-[7px] rounded-[16px] border border-line-soft bg-surface-deep px-3 py-3"
          >
            <span className="size-5 rounded-full border border-accent/30 bg-accent/15" />
            <span className="font-display text-[10px] font-bold text-ink">
              {stat.label}
            </span>
            <span className="text-[8.5px] leading-[1.5] text-muted">{stat.hint}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function DeliverableMockup() {
  return (
    <div
      aria-hidden="true"
      className="relative h-[250px] w-full sm:h-[330px] md:h-[400px] lg:h-[360px] xl:h-[460px]"
    >
      <div
        className={[
          "absolute top-0 w-[620px] origin-top",
          "left-1/2 -translate-x-1/2 lg:left-auto lg:right-0 lg:translate-x-0 lg:origin-top-right",
          "scale-[0.52] sm:scale-[0.7] md:scale-[0.86] lg:scale-[0.72] xl:scale-100",
        ].join(" ")}
      >
        {/* Navegador */}
        <div className="ml-[120px] w-[500px] overflow-hidden rounded-[24px] border border-line bg-surface-deep shadow-[0_40px_90px_-30px_rgba(0,0,0,0.95)]">
          <div className="flex h-9 items-center gap-3.5 border-b border-line bg-surface px-3.5">
            <div className="flex items-center gap-1.5">
              <span className="size-2 rounded-full bg-line-strong" />
              <span className="size-2 rounded-full bg-line-strong" />
              <span className="size-2 rounded-full bg-line-strong" />
            </div>
            <div className="flex grow justify-center">
              <div className="flex h-[22px] items-center gap-[7px] rounded-full border border-line-soft bg-carbon px-3.5">
                <svg
                  viewBox="0 0 24 24"
                  width={10}
                  height={10}
                  fill="none"
                  stroke="#FF8431"
                  strokeWidth={2.2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="5" y="11" width="14" height="10" rx="2" />
                  <path d="M8 11V7a4 4 0 0 1 8 0v4" />
                </svg>
                <span className="font-label text-[10px] text-muted">
                  [ tunegocio.com ]
                </span>
              </div>
            </div>
            <div className="w-10" />
          </div>
          <MiniSite />
        </div>

        {/* Teléfono superpuesto */}
        <div className="absolute -bottom-4 left-0 h-[280px] w-[136px] rounded-[28px] bg-elevated p-1.5 shadow-[0_34px_70px_-22px_rgba(0,0,0,1)]">
          <div className="flex h-full w-full flex-col overflow-hidden rounded-[23px] border border-line bg-carbon">
            <div className="flex h-[30px] items-center justify-between border-b border-line-soft px-3">
              <div className="flex items-center gap-1.5">
                <span className="size-[11px] rounded-full bg-accent" />
                <span className="font-label text-[6.5px] tracking-[0.14em] text-ink">
                  [ TU NEGOCIO ]
                </span>
              </div>
              <svg
                viewBox="0 0 24 24"
                width={11}
                height={11}
                fill="none"
                stroke="#8C9096"
                strokeWidth={2}
                strokeLinecap="round"
              >
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </div>
            <div className="flex flex-col gap-2 px-3 py-4">
              <span className="font-label text-[6px] uppercase tracking-[0.2em] text-accent-bright">
                Ventas e inventario
              </span>
              <p className="font-display text-[15px] font-bold leading-[1.08] tracking-[-0.035em] text-ink">
                Tu inventario, sin cuaderno.
              </p>
              <span className="text-[8px] leading-[1.55] text-silver">
                Stock y ventas en tu celular.
              </span>
              <span className="mt-1 rounded-full bg-accent-solid py-2.5 text-center text-[8.5px] font-semibold text-carbon">
                Registrar venta
              </span>
            </div>
            <div className="relative mx-3 mb-3 flex grow items-end gap-1.5 overflow-hidden rounded-[16px] border border-line bg-surface px-2.5 pb-2.5">
              {[40, 62, 48, 80].map((h, i) => (
                <span
                  key={h}
                  className={
                    i === 3
                      ? "w-full rounded-full bg-accent"
                      : "w-full rounded-full bg-line-strong"
                  }
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
