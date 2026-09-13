import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills | Shreya Soni",
};

const SKILL_CATEGORIES = [
  {
    icon: "💻",
    iconBg: "bg-softPink",
    iconText: "text-rosePink",
    title: "Programming Languages",
    subtitle: "Core coding & scripting technologies",
    border: "border-softPink",
    tagBorder: "border-accentPink/60",
    tags: ["Python", "R", "SQL", "Deluge Scripting"],
  },
  {
    icon: "📚",
    iconBg: "bg-lavender",
    iconText: "text-charcoalPlum",
    title: "Libraries",
    subtitle: "Data analysis, computation & CV stacks",
    border: "border-lavenderDeep/40",
    tagBorder: "border-lavenderDeep/60",
    tags: ["NumPy", "Pandas", "Matplotlib", "OpenCV", "Scikit-learn"],
  },
  {
    icon: "🧠",
    iconBg: "bg-softPeach",
    iconText: "text-deepRose",
    title: "Core Concepts",
    subtitle: "Theoretical & algorithmic domains",
    border: "border-softPeach",
    tagBorder: "border-accentPink/60",
    tags: ["Machine Learning", "Computer Vision", "Data Analysis", "API Integration & Automation", "CRM Workflow Automation"],
  },
  {
    icon: "🛠️",
    iconBg: "bg-amber-100",
    iconText: "text-amber-800",
    title: "Tools & Platforms",
    subtitle: "Environments & analytical software",
    border: "border-softPink",
    tagBorder: "border-amber-300",
    tags: ["Zoho CRM", "Jupyter Notebook", "Google Colab", "SQL", "Power BI", "Excel"],
  },
];

const INTERESTS = [
  { icon: "📊", bg: "bg-softPink", border: "border-softPink", title: "Data Science", subtitle: "Patterns & Insights" },
  { icon: "🤖", bg: "bg-lavender", border: "border-lavenderDeep/40", title: "Artificial Intelligence", subtitle: "Smart Systems" },
  { icon: "🧬", bg: "bg-softPeach", border: "border-softPeach", title: "Machine Learning", subtitle: "Predictive Models" },
  { icon: "👁️", bg: "bg-softPink", border: "border-softPink", title: "Computer Vision", subtitle: "Image Recognition" },
  { icon: "📈", bg: "bg-amber-100", border: "border-amber-200", title: "Data Analysis", subtitle: "Actionable Intelligence" },
];

export default function SkillsPage() {
  return (
    <>
      <section className="py-16 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-deepRose font-caveat text-2xl font-bold">Capabilities &amp; Toolkit</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoalPlum mt-1 flex items-center justify-center gap-2">
              My Skills ✨
            </h2>
            <div className="w-16 h-1 bg-accentPink mx-auto mt-3 rounded-full" />
            <p className="text-sm text-mutedPlum mt-3 max-w-md mx-auto">
              Categorized technical abilities strictly sourced from my academic and practical development work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SKILL_CATEGORIES.map((cat) => (
              <div
                key={cat.title}
                className={`bg-warmCream rounded-3xl p-6 sm:p-7 border-2 ${cat.border} shadow-card-soft hover:shadow-kawaii transition-all`}
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className={`w-10 h-10 rounded-2xl ${cat.iconBg} flex items-center justify-center ${cat.iconText} text-xl`}>
                    {cat.icon}
                  </span>
                  <div>
                    <h3 className="text-lg font-extrabold text-charcoalPlum">{cat.title}</h3>
                    <p className="text-xs text-mutedPlum">{cat.subtitle}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {cat.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-4 py-2 bg-white rounded-2xl border ${cat.tagBorder} text-sm font-bold text-charcoalPlum shadow-sm hover:border-deepRose hover:text-deepRose transition-colors`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white/70 border-y border-softPink/40 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-deepRose font-caveat text-2xl font-bold">Curiosity &amp; Passion</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoalPlum mt-1 flex items-center justify-center gap-2">
              Things I Love to Learn ♡
            </h2>
            <div className="w-16 h-1 bg-accentPink mx-auto mt-3 rounded-full" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 text-center">
            {INTERESTS.map((interest, i) => (
              <div
                key={interest.title}
                className={`bg-warmCream rounded-3xl p-5 border-2 ${interest.border} shadow-card-soft hover:scale-105 transition-transform flex flex-col items-center ${
                  i === INTERESTS.length - 1 ? "col-span-2 sm:col-span-1" : ""
                }`}
              >
                <div className={`w-14 h-14 rounded-2xl ${interest.bg} flex items-center justify-center text-2xl mb-3 shadow-inner`}>
                  {interest.icon}
                </div>
                <h3 className="text-sm font-bold text-charcoalPlum">{interest.title}</h3>
                <p className="text-[11px] text-mutedPlum mt-1">{interest.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
