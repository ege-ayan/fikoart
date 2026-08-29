import type { ReactNode } from "react";

import { software } from "@/content/resume";

const chipClassName =
  "flex cursor-default select-none items-center gap-2.5 border border-line bg-surface px-3 py-2.5 text-[13px] [-webkit-tap-highlight-color:transparent]";

function Mark({ label }: { label: string }) {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" aria-hidden>
      <rect width="24" height="24" rx="4" fill="currentColor" />
      <text
        x="12"
        y="16"
        textAnchor="middle"
        fill="#ffffff"
        fontSize="8"
        fontWeight="700"
        fontFamily="ui-sans-serif, system-ui, sans-serif"
      >
        {label}
      </text>
    </svg>
  );
}

function Glyph({ children }: { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5 shrink-0 fill-current"
      aria-hidden
    >
      {children}
    </svg>
  );
}

const icons: Record<(typeof software)[number], ReactNode> = {
  "Clip Studio Paint": <Mark label="CSP" />,
  "Adobe Animate": <Mark label="An" />,
  "After Effects": <Mark label="Ae" />,
  Photoshop: <Mark label="Ps" />,
  Illustrator: <Mark label="Ai" />,
  Blender: (
    <Glyph>
      <path d="M12.6 2.2c-2.8 2.2-3.7 6.1-2.2 9.2 1.6-2 4-3.2 6.6-3.1 1.4-3.5-.8-7.4-4.4-6.1zm-1.2 8.6C8 12.2 5.8 15.4 6.2 19c2.6-.3 4.9-2 6.1-4.4-1.4-1.1-2.3-2.8-2.9-3.8zm3.7 1.3c-1.5 2.6-1.6 5.8-.2 8.5 2.8-1.1 4.7-3.8 4.8-6.8-1.4-.8-3.1-1.3-4.6-1.7z" />
    </Glyph>
  ),
  OpenToonz: <Mark label="OT" />,
  DragonFrame: (
    <Glyph>
      <path d="M4.5 7.2h15v10.6h-15zm1.6 1.6v7.4h11.8V8.8zm8.9-3.1 2.3 1.5H14z" />
    </Glyph>
  ),
  "DaVinci Resolve": <Mark label="Dv" />,
  "Premiere Pro": <Mark label="Pr" />,
  Procreate: (
    <Glyph>
      <path d="M15.8 3.4 4.2 15l-.9 5.7 5.7-.9L20.6 8.2a2.4 2.4 0 0 0 0-3.4l-1.4-1.4a2.4 2.4 0 0 0-3.4 0zM6.1 15.6 15.2 6.5l2.3 2.3-9.1 9.1z" />
    </Glyph>
  ),
};

export function SoftwareStack() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
      {software.map((name) => (
        <div key={name} className={chipClassName}>
          {icons[name]}
          <span>{name}</span>
        </div>
      ))}
    </div>
  );
}
