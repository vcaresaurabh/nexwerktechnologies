import { TECH_STACK } from "@/constants/data";

export default function TechMarquee() {
  return (
    <div className="py-10 bg-slate-50 border-y border-slate-100 overflow-hidden">
      <p className="text-center text-xs font-semibold text-slate-400 tracking-widest uppercase mb-5">
        Technologies We Work With
      </p>
      <div className="relative overflow-hidden">
        {/* Single animated track containing two identical lists — seamless loop */}
        <div className="marquee-track">
          {[0, 1].map((i) => (
            <ul
              key={i}
              className="flex items-center gap-6 px-3 whitespace-nowrap"
              aria-hidden={i === 1}
            >
              {TECH_STACK.map((tech) => (
                <li
                  key={tech}
                  className="px-4 py-2 rounded-full bg-white border border-slate-200 text-sm font-medium text-slate-600 hover:border-blue-300 hover:text-blue-600 transition-colors duration-200 cursor-default select-none"
                >
                  {tech}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}
