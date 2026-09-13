import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Certifications | Shreya Soni",
};

const CERTIFICATIONS = [
  {
    icon: "📊",
    iconBg: "bg-softPink/60",
    iconText: "text-deepRose",
    title: "Data Analytics Essentials",
    issuer: "Cisco",
    description: "Comprehensive data analytics fundamentals, data cleaning, and core insights generation.",
  },
  {
    icon: "🐍",
    iconBg: "bg-lavender/60",
    iconText: "text-charcoalPlum",
    title: "Python Programming",
    issuer: "Tutedude",
    description: "Core data structures, object-oriented concepts, and algorithmic foundations in Python.",
  },
  {
    icon: "📗",
    iconBg: "bg-emerald-50",
    iconText: "text-emerald-700",
    title: "Excel: Basic to Advanced",
    issuer: "Jatan Shah / Skill Nation",
    description: "Complex formulas, Pivot Tables, data modeling, and business calculation pipelines.",
  },
  {
    icon: "🗄️",
    iconBg: "bg-amber-50",
    iconText: "text-amber-800",
    title: "SQL: Basic to Advanced",
    issuer: "Skill Nation by Jatan Shah",
    description: "Relational schemas, complex joins, subqueries, grouping, and aggregations.",
  },
  {
    icon: "📈",
    iconBg: "bg-yellow-50",
    iconText: "text-yellow-800",
    title: "Power BI",
    issuer: "Skill Nation by Jatan Shah",
    description: "Interactive dashboard design, DAX measures, and visual storytelling for data.",
  },
];

export default function CertificationsPage() {
  return (
    <section className="py-16 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-deepRose font-caveat text-2xl font-bold">Earned Credentials</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoalPlum mt-1 flex items-center justify-center gap-2">
            My Certifications 🏆
          </h2>
          <div className="w-16 h-1 bg-accentPink mx-auto mt-3 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="md:col-span-2 lg:col-span-3 bg-gradient-to-r from-warmCream via-white to-softPink/50 rounded-3xl p-6 sm:p-8 border-2 border-accentPink shadow-kawaii relative overflow-hidden">
            <div className="washi-tape-pink absolute -top-3 left-10 w-32 h-6 rounded-sm" />
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-extrabold flex items-center gap-1">
                    <span>⭐</span> ELITE + SILVER
                  </span>
                  <span className="px-3 py-1 rounded-full bg-deepRose text-white text-xs font-bold animate-pulse">
                    TOP 2% PARTICIPANT
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-charcoalPlum">
                  Introduction to Internet of Things
                </h3>
                <p className="text-base font-bold text-deepRose mt-0.5">NPTEL – IIT Madras</p>
                <p className="text-sm text-mutedPlum mt-2 max-w-xl">
                  Awarded Elite + Silver certificate with an outstanding score of 88%, placing in the Top 2% among
                  thousands of nationwide participants.
                </p>
              </div>
              <div className="bg-white border-2 border-accentPink/80 rounded-2xl p-4 text-center shrink-0 shadow-sm">
                <span className="text-xs font-bold text-mutedPlum uppercase block">Final Score</span>
                <span className="text-3xl font-extrabold text-deepRose">88%</span>
                <span className="text-[11px] text-emerald-700 font-bold block mt-0.5">Top 2% Ranked ✦</span>
              </div>
            </div>
          </div>

          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.title}
              className="bg-white rounded-3xl p-6 border-2 border-softPink shadow-card-soft hover:shadow-kawaii transition-all flex flex-col justify-between"
            >
              <div>
                <div className={`w-10 h-10 rounded-2xl ${cert.iconBg} ${cert.iconText} flex items-center justify-center text-lg mb-3`}>
                  {cert.icon}
                </div>
                <h3 className="text-lg font-bold text-charcoalPlum leading-snug">{cert.title}</h3>
                <p className="text-sm font-semibold text-deepRose mt-1">{cert.issuer}</p>
                <p className="text-xs text-mutedPlum mt-2">{cert.description}</p>
              </div>
              <div className="mt-4 pt-3 border-t border-softPink/40 text-[11px] font-bold text-mutedPlum flex items-center gap-1">
                <span>✓ Verified Credential</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
