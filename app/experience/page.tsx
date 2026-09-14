import type { Metadata } from "next";
import { Briefcase, Building2, Sparkle } from "lucide-react";

export const metadata: Metadata = {
  title: "Experience | Shreya Soni",
};

export default function ExperiencePage() {
  return (
    <section className="py-16 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-deepRose font-caveat text-2xl font-bold">Hands-on Industry Work</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoalPlum mt-1 flex items-center justify-center gap-2">
            <Briefcase className="w-8 h-8" /> My Experience
          </h2>
          <div className="w-16 h-1 bg-accentPink mx-auto mt-3 rounded-full" />
        </div>

        <div className="bg-warmCream rounded-3xl border-2 border-accentPink/60 p-6 sm:p-10 shadow-kawaii relative overflow-hidden">
          <div className="washi-tape-pink absolute -top-3 left-14 w-32 h-6 rounded-sm opacity-80" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="flex flex-wrap items-center gap-2.5 mb-3">
                <span className="px-3.5 py-1 rounded-full bg-softPink text-deepRose text-xs font-extrabold tracking-wide uppercase">
                  Internship
                </span>
                <span className="px-3 py-1 rounded-full bg-lavender/60 text-charcoalPlum text-xs font-bold">
                  March 2026 – June 2026
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-charcoalPlum">Zoho CRM Developer Intern</h3>
              <p className="text-lg font-bold text-deepRose mt-1 flex items-center gap-2">
                <Building2 className="w-5 h-5" /> Muxlet
              </p>
              <ul className="mt-6 space-y-3.5 text-sm sm:text-base text-mutedPlum">
                <li className="flex items-start gap-2.5">
                  <Sparkle className="w-4 h-4 text-deepRose mt-1 shrink-0" />
                  <span>
                    <strong>Deluge Scripting &amp; Customization:</strong> Customized Zoho CRM modules and automated
                    complex workflows using Deluge scripting to streamline operations.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Sparkle className="w-4 h-4 text-deepRose mt-1 shrink-0" />
                  <span>
                    <strong>Real-time Business Data:</strong> Worked directly with real-time business data to
                    optimize data handling pipelines and enhance overall system efficiency.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Sparkle className="w-4 h-4 text-deepRose mt-1 shrink-0" />
                  <span>
                    <strong>API Integration:</strong> Assisted in seamless third-party API integrations and
                    end-to-end automation of critical CRM processes.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Sparkle className="w-4 h-4 text-deepRose mt-1 shrink-0" />
                  <span>
                    <strong>Manual Work Reduction:</strong> Slashed repetitive manual data tasks through tailored,
                    reliable automation solutions.
                  </span>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-4">
              <div className="bg-[#2E1F27] text-white p-5 rounded-2xl shadow-md border-2 border-softPink font-mono text-xs leading-relaxed relative">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-[11px] text-pink-200">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-400 inline-block" />
                    <span className="ml-2">zoho_automation.deluge</span>
                  </span>
                  <span>Zoho CRM</span>
                </div>
                <div className="space-y-1 text-slate-300">
                  <p>
                    <span className="text-pink-400">{"// Workflow Automation"}</span>
                  </p>
                  <p>
                    <span className="text-purple-300">recordMap</span> = Map();
                  </p>
                  <p>
                    recordMap.put(<span className="text-emerald-300">&quot;Status&quot;</span>,{" "}
                    <span className="text-emerald-300">&quot;Processed&quot;</span>);
                  </p>
                  <p>
                    <span className="text-blue-300">response</span> = zoho.crm.updateRecord(
                  </p>
                  <p className="pl-4">
                    <span className="text-emerald-300">&quot;Deals&quot;</span>, dealId, recordMap
                  </p>
                  <p>);</p>
                  <p>
                    <span className="text-yellow-300">info</span>{" "}
                    <span className="text-pink-300">&quot;API sync completed&quot;</span>;
                  </p>
                </div>
              </div>
              <div className="bg-[#FFF9D2] p-4 rounded-2xl shadow-sm border border-amber-200 text-center transform rotate-1">
                <p className="font-caveat text-xl sm:text-2xl text-amber-900 font-bold">
                  &quot;Small automations. Big impact&quot;
                </p>
                <span className="text-[11px] font-semibold text-amber-700">
                  Deluge · API Integrations · CRM Workflows
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
