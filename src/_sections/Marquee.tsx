import { CLIENTS } from "./data";

export default function Marquee() {
  const items = [...CLIENTS, ...CLIENTS];
  return (
    <div className="bg-stone-900 border-y border-stone-800 py-5 overflow-hidden">
      <div className="mq-track" aria-hidden="true">
        {items.map((c, i) => (
          <div key={i} className="flex items-center gap-8 pr-8">
            <span
              className="f-sans text-[10px] font-medium tracking-[.2em] uppercase whitespace-nowrap"
              style={{ color: "var(--gl)" }}
            >
              {c.name}
            </span>
            <span className="block w-1 h-1 rounded-full bg-stone-700" />
          </div>
        ))}
      </div>
    </div>
  );
}