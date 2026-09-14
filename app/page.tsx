import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  GraduationCap,
  MapPin,
  PawPrint,
  ArrowRight,
  Heart,
  ClipboardList,
  Code2,
  BookOpen,
  Brain,
  Wrench,
  BarChart3,
  Bot,
  Dna,
  Eye,
  TrendingUp,
  Trophy,
  BookMarked,
  Database,
  Star,
  MessageCircle,
  Mail,
} from "lucide-react";

const SKILL_CATEGORIES = [
  {
    icon: Code2,
    iconBg: "bg-softPink",
    iconText: "text-rosePink",
    title: "Programming Languages",
    subtitle: "Core coding & scripting technologies",
    border: "border-softPink",
    tagBorder: "border-accentPink/60",
    tags: ["Python", "R", "SQL", "Deluge Scripting"],
  },
  {
    icon: BookOpen,
    iconBg: "bg-lavender",
    iconText: "text-charcoalPlum",
    title: "Libraries",
    subtitle: "Data analysis, computation & CV stacks",
    border: "border-lavenderDeep/40",
    tagBorder: "border-lavenderDeep/60",
    tags: ["NumPy", "Pandas", "Matplotlib", "OpenCV", "Scikit-learn"],
  },
  {
    icon: Brain,
    iconBg: "bg-softPeach",
    iconText: "text-deepRose",
    title: "Core Concepts",
    subtitle: "Theoretical & algorithmic domains",
    border: "border-softPeach",
    tagBorder: "border-accentPink/60",
    tags: ["Machine Learning", "Computer Vision", "Data Analysis", "API Integration & Automation", "CRM Workflow Automation"],
  },
  {
    icon: Wrench,
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
  { icon: BarChart3, bg: "bg-softPink", border: "border-softPink", title: "Data Science", subtitle: "Patterns & Insights" },
  { icon: Bot, bg: "bg-lavender", border: "border-lavenderDeep/40", title: "Artificial Intelligence", subtitle: "Smart Systems" },
  { icon: Dna, bg: "bg-softPeach", border: "border-softPeach", title: "Machine Learning", subtitle: "Predictive Models" },
  { icon: Eye, bg: "bg-softPink", border: "border-softPink", title: "Computer Vision", subtitle: "Image Recognition" },
  { icon: TrendingUp, bg: "bg-amber-100", border: "border-amber-200", title: "Data Analysis", subtitle: "Actionable Intelligence" },
];

const CERTIFICATIONS = [
  {
    icon: BarChart3,
    iconBg: "bg-softPink/60",
    iconText: "text-deepRose",
    title: "Data Analytics Essentials",
    issuer: "Cisco",
    description: "Comprehensive data analytics fundamentals, data cleaning, and core insights generation.",
  },
  {
    icon: Code2,
    iconBg: "bg-lavender/60",
    iconText: "text-charcoalPlum",
    title: "Python Programming",
    issuer: "Tutedude",
    description: "Core data structures, object-oriented concepts, and algorithmic foundations in Python.",
  },
  {
    icon: BookMarked,
    iconBg: "bg-emerald-50",
    iconText: "text-emerald-700",
    title: "Excel: Basic to Advanced",
    issuer: "Jatan Shah / Skill Nation",
    description: "Complex formulas, Pivot Tables, data modeling, and business calculation pipelines.",
  },
  {
    icon: Database,
    iconBg: "bg-amber-50",
    iconText: "text-amber-800",
    title: "SQL: Basic to Advanced",
    issuer: "Skill Nation by Jatan Shah",
    description: "Relational schemas, complex joins, subqueries, grouping, and aggregations.",
  },
  {
    icon: TrendingUp,
    iconBg: "bg-yellow-50",
    iconText: "text-yellow-800",
    title: "Power BI",
    issuer: "Skill Nation by Jatan Shah",
    description: "Interactive dashboard design, DAX measures, and visual storytelling for data.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section id="home" className="relative pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            <div className="lg:col-span-7 flex flex-col items-start z-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-softPink/80 border border-accentPink text-deepRose text-xs sm:text-sm font-semibold tracking-wide shadow-sm mb-6 animate-pulse">
                <Sparkles className="w-4 h-4" />
                <span>Welcome to my creative corner</span>
                <Sparkles className="w-4 h-4" />
              </div>

              <div className="space-y-1 mb-4">
                <p className="font-caveat text-3xl sm:text-4xl text-deepRose font-bold flex items-center gap-2">
                  Hello! I&apos;m <Heart className="w-6 h-6 fill-deepRose text-deepRose" />
                </p>
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-charcoalPlum leading-[1.1]">
                  SHREYA{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-rosePink to-accentPink">
                    SONI
                  </span>
                </h1>
              </div>

              <div className="flex flex-wrap gap-2.5 my-4">
                <span className="px-3.5 py-1.5 rounded-xl bg-warmCream border-2 border-softPink text-charcoalPlum text-xs sm:text-sm font-bold shadow-sm flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4" /> B.Tech Computer Science Student
                </span>
                <span className="px-3.5 py-1.5 rounded-xl bg-lavender/60 border-2 border-lavenderDeep/40 text-charcoalPlum text-xs sm:text-sm font-bold shadow-sm flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4" /> AI &amp; Data Science Enthusiast
                </span>
              </div>

              <p className="text-base sm:text-lg text-mutedPlum max-w-xl font-medium leading-relaxed mt-2 mb-8 bg-white/60 p-4 rounded-2xl border border-softPink/40 backdrop-blur-sm shadow-card-soft">
                &ldquo;Passionate about Artificial Intelligence, Machine Learning, Computer Vision and Data Analysis.
                Dedicated to transforming real-world challenges into practical, automated intelligent
                solutions.&rdquo;
              </p>

              <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
                <Link
                  className="px-7 py-3.5 rounded-full bg-gradient-to-r from-deepRose to-rosePink text-white font-bold text-sm tracking-wider uppercase shadow-kawaii hover:shadow-lg hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
                  href="/projects"
                >
                  <span>VIEW MY WORK</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  className="px-7 py-3.5 rounded-full bg-white border-2 border-accentPink text-deepRose font-bold text-sm tracking-wider uppercase hover:bg-softPink hover:border-deepRose shadow-sm hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
                  href="mailto:shreyasoniii28@gmail.com"
                >
                  <span>LET&apos;S CONNECT</span>
                  <Heart className="w-4 h-4 fill-deepRose" />
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10 w-full max-w-lg">
                <div className="relative bg-[#FFF9D2] p-5 rounded-2xl shadow-md transform -rotate-2 hover:rotate-0 transition-transform duration-300 border border-amber-200">
                  <div className="washi-tape-pink absolute -top-3 left-10 w-20 h-6 -rotate-3 z-10 opacity-80" />
                  <p className="font-caveat text-xl sm:text-2xl text-amber-900 font-bold leading-tight">
                    Build
                    <br />
                    Learn
                    <br />
                    Grow
                    <br />
                    Repeat
                  </p>
                  <div className="text-right text-xs text-amber-700 font-bold mt-1">OPJU · 4th Year</div>
                </div>
                <div className="relative bg-softPeach p-5 rounded-2xl shadow-md transform rotate-2 hover:rotate-0 transition-transform duration-300 border border-accentPink/40">
                  <div className="washi-tape-lavender absolute -top-3 right-8 w-20 h-6 rotate-2 z-10 opacity-80" />
                  <p className="font-caveat text-xl sm:text-2xl text-deepRose font-bold leading-tight">
                    &quot;Good code, brighter days&quot;
                  </p>
                  <div className="flex items-center gap-1.5 mt-3 text-xs text-mutedPlum font-semibold">
                    <PawPrint className="w-4 h-4" /> Desk cozy vibes &amp; coffee
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center relative">
              <div className="absolute -inset-2 bg-gradient-to-tr from-accentPink/30 via-lavender/40 to-softPink/50 rounded-3xl blur-2xl -z-10" />
              <div className="relative bg-white p-4 sm:p-5 rounded-3xl shadow-kawaii border-4 border-softPink/80 max-w-md w-full">
                <div className="washi-tape-pink absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-7 rounded-sm shadow-sm z-20 flex items-center justify-center text-[10px] tracking-widest text-deepRose/70 uppercase font-bold">
                  study session
                </div>
                <div className="absolute -top-4 -right-4 bg-white border-2 border-accentPink rounded-full px-3 py-1 shadow-md z-20 flex items-center gap-1 text-xs font-bold text-charcoalPlum transform rotate-6">
                  <PawPrint className="w-3.5 h-3.5" />
                  <span>Mimi is napping</span>
                </div>
                <div className="overflow-hidden rounded-2xl border border-softPink/60 relative group">
                  <Image
                    alt="Cute anime illustration of Shreya Soni studying at a cozy pastel desk with laptop, Python ML code, books, tea and sleepy calico cat"
                    className="w-full h-auto object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    src="/images/hero-illustration.jpg"
                    width={512}
                    height={512}
                    priority
                  />
                  <div className="absolute bottom-3 left-3 bg-warmCream/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-accentPink/50 text-[11px] font-bold text-charcoalPlum flex items-center gap-2 shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-ping" />
                    <span>Currently building with Python &amp; OpenCV</span>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-softPink/40 flex items-center justify-between text-xs text-mutedPlum">
                  <div className="flex items-center gap-1 font-semibold">
                    <MapPin className="w-3.5 h-3.5" /> Raigarh, Chhattisgarh
                  </div>
                  <div className="font-caveat text-base text-deepRose font-bold">B.Tech CSE &apos;27</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-16 relative scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-deepRose font-caveat text-2xl font-bold tracking-wide">Get to know me</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoalPlum mt-1 flex items-center justify-center gap-2">
              About Me <Heart className="w-6 h-6 text-rosePink fill-rosePink" />
            </h2>
            <div className="w-16 h-1 bg-accentPink mx-auto mt-3 rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-7 bg-warmCream rounded-3xl p-6 sm:p-8 border-2 border-softPink shadow-card-soft relative flex flex-col justify-between">
              <div className="washi-tape-lavender absolute -top-3 left-8 w-28 h-6 rotate-1 rounded-sm" />
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="p-2 rounded-xl bg-softPink text-rosePink">
                    <Sparkles className="w-5 h-5" />
                  </span>
                  <h3 className="text-xl font-bold text-charcoalPlum">Summary &amp; Professional Aspirations</h3>
                </div>
                <p className="text-mutedPlum text-base leading-relaxed mb-4">
                  Fourth-year Computer Science student with hands-on experience in Python, APIs, and data handling
                  gained through Zoho CRM development. Built a computer vision-based checkout system using OpenCV,
                  applying object detection to automate real-world billing.
                </p>
                <p className="text-mutedPlum text-base leading-relaxed">
                  Passionate about applying AI and Machine Learning to solve practical problems and drive efficiency
                  at scale. Always eager to explore cutting-edge intelligent algorithms and data pipelines that make
                  technology intuitive and accessible.
                </p>
              </div>
              <div className="mt-6 p-4 rounded-2xl bg-pastelPink/60 border border-accentPink/50 flex items-center gap-3">
                <Sparkles className="w-6 h-6 text-deepRose shrink-0" />
                <p className="font-caveat text-xl sm:text-2xl text-deepRose font-bold">
                  &quot;Learning today for a brighter tomorrow&quot;
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border-2 border-lavenderDeep/40 shadow-card-soft flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <h3 className="text-lg font-bold text-charcoalPlum flex items-center gap-2">
                    <ClipboardList className="w-5 h-5" /> Quick Facts Sheet
                  </h3>
                  <span className="px-2.5 py-0.5 rounded-full bg-softPink text-deepRose text-xs font-bold font-mono">
                    2023-2027
                  </span>
                </div>
                <div className="space-y-3.5 text-sm">
                  <div className="flex justify-between items-center py-2 border-b border-softPink/40">
                    <span className="text-mutedPlum font-medium">Education</span>
                    <span className="font-bold text-charcoalPlum text-right">B.Tech in CSE</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-softPink/40">
                    <span className="text-mutedPlum font-medium">University</span>
                    <span className="font-bold text-charcoalPlum text-right">OP Jindal University</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-softPink/40">
                    <span className="text-mutedPlum font-medium">Academic Year</span>
                    <span className="font-bold text-deepRose px-2 py-0.5 bg-softPink rounded-md">4th Year</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-softPink/40">
                    <span className="text-mutedPlum font-medium">Current CGPA</span>
                    <span className="font-bold text-charcoalPlum text-base bg-amber-100 text-amber-900 px-2.5 py-0.5 rounded-full border border-amber-300">
                      8.65
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-softPink/40">
                    <span className="text-mutedPlum font-medium">Location</span>
                    <span className="font-bold text-charcoalPlum text-right">Raigarh, Chhattisgarh</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-mutedPlum font-medium">Expected Graduation</span>
                    <span className="font-bold text-charcoalPlum">June 2027</span>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-dashed border-softPink flex items-center gap-2 text-xs text-mutedPlum">
                <Star className="w-4 h-4 text-rosePink" />
                <span>All details strictly verified from official resume records.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-16 relative scroll-mt-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-deepRose font-caveat text-2xl font-bold">Academic Journey</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoalPlum mt-1 flex items-center justify-center gap-2">
              <GraduationCap className="w-8 h-8" /> My Education
            </h2>
            <div className="w-16 h-1 bg-accentPink mx-auto mt-3 rounded-full" />
          </div>

          <div className="relative pl-6 sm:pl-10 border-l-4 border-accentPink/60 space-y-12 ml-4 sm:ml-12">
            <div className="relative group">
              <div className="absolute -left-[35px] sm:-left-[51px] top-1 w-10 h-10 rounded-full bg-softPink border-4 border-white shadow-md flex items-center justify-center text-rosePink group-hover:scale-110 transition-transform">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div className="bg-white rounded-3xl p-6 sm:p-7 border-2 border-softPink shadow-card-soft hover:shadow-kawaii transition-all duration-300 relative">
                <div className="washi-tape-pink absolute -top-3 right-6 w-24 h-5 rounded-sm opacity-70" />
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="px-3 py-1 rounded-full bg-softPink/60 text-deepRose text-xs font-bold">
                    August 2023 – June 2027 (Expected)
                  </span>
                  <span className="px-3 py-1 rounded-full bg-lavender/60 text-charcoalPlum text-xs font-bold border border-lavenderDeep/30">
                    4th Year Student
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-charcoalPlum">
                  B.Tech in Computer Science Engineering
                </h3>
                <p className="text-sm sm:text-base font-semibold text-deepRose mt-0.5">
                  OP Jindal University, Punjipathra, Chhattisgarh
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-3">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-50 rounded-xl border border-amber-200 text-amber-900 text-sm font-bold">
                    <Trophy className="w-4 h-4" /> CGPA: 8.65
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-warmCream rounded-xl border border-softPink text-mutedPlum text-sm font-semibold">
                    <BookOpen className="w-4 h-4" /> Core Focus: Machine Learning, Computer Vision &amp; Data Structures
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -left-[35px] sm:-left-[51px] top-1 w-10 h-10 rounded-full bg-lavender border-4 border-white shadow-md flex items-center justify-center text-charcoalPlum group-hover:scale-110 transition-transform">
                <Sparkles className="w-5 h-5" />
              </div>
              <div className="bg-white rounded-3xl p-6 sm:p-7 border-2 border-lavenderDeep/30 shadow-card-soft hover:shadow-kawaii transition-all duration-300">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="px-3 py-1 rounded-full bg-lavender/50 text-charcoalPlum text-xs font-bold">
                    Completed in 2022
                  </span>
                  <span className="px-3 py-1 rounded-full bg-softPink/60 text-deepRose text-xs font-bold">
                    CBSE Board
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-charcoalPlum">Senior Secondary (Class XII)</h3>
                <p className="text-sm sm:text-base font-semibold text-mutedPlum mt-0.5">
                  St. Teresa Convent School, Raigarh, Chhattisgarh
                </p>
                <div className="mt-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-rose-50 rounded-xl border border-accentPink/50 text-deepRose text-sm font-bold">
                    <Star className="w-4 h-4" /> Final Score: 84%
                  </span>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -left-[35px] sm:-left-[51px] top-1 w-10 h-10 rounded-full bg-softPeach border-4 border-white shadow-md flex items-center justify-center text-rosePink group-hover:scale-110 transition-transform">
                <Sparkles className="w-5 h-5" />
              </div>
              <div className="bg-white rounded-3xl p-6 sm:p-7 border-2 border-softPink/80 shadow-card-soft hover:shadow-kawaii transition-all duration-300">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="px-3 py-1 rounded-full bg-softPeach text-deepRose text-xs font-bold">
                    Completed in 2020
                  </span>
                  <span className="px-3 py-1 rounded-full bg-softPink/60 text-deepRose text-xs font-bold">
                    CBSE Board
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-charcoalPlum">Secondary (Class X)</h3>
                <p className="text-sm sm:text-base font-semibold text-mutedPlum mt-0.5">
                  St. Teresa Convent School, Raigarh, Chhattisgarh
                </p>
                <div className="mt-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-50 rounded-xl border border-amber-200 text-amber-900 text-sm font-bold">
                    <Trophy className="w-4 h-4" /> Final Score: 92%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-16 relative scroll-mt-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-deepRose font-caveat text-2xl font-bold">Capabilities &amp; Toolkit</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoalPlum mt-1 flex items-center justify-center gap-2">
              <Sparkles className="w-8 h-8" /> My Skills
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
                  <span className={`w-10 h-10 rounded-2xl ${cat.iconBg} flex items-center justify-center ${cat.iconText}`}>
                    <cat.icon className="w-5 h-5" />
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

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-16 border-t border-softPink/40">
          <div className="text-center mb-12">
            <span className="text-deepRose font-caveat text-2xl font-bold">Curiosity &amp; Passion</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoalPlum mt-1 flex items-center justify-center gap-2">
              Things I Love to Learn <Heart className="w-7 h-7 text-rosePink fill-rosePink" />
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
                <div className={`w-14 h-14 rounded-2xl ${interest.bg} flex items-center justify-center mb-3 shadow-inner`}>
                  <interest.icon className="w-6 h-6" />
                </div>
                <h3 className="text-sm font-bold text-charcoalPlum">{interest.title}</h3>
                <p className="text-[11px] text-mutedPlum mt-1">{interest.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="py-16 relative scroll-mt-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-deepRose font-caveat text-2xl font-bold">Earned Credentials</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoalPlum mt-1 flex items-center justify-center gap-2">
              <Trophy className="w-8 h-8" /> My Certifications
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
                      <Star className="w-3.5 h-3.5" /> ELITE + SILVER
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
                  <span className="text-[11px] text-emerald-700 font-bold block mt-0.5">Top 2% Ranked</span>
                </div>
              </div>
            </div>

            {CERTIFICATIONS.map((cert) => (
              <div
                key={cert.title}
                className="bg-white rounded-3xl p-6 border-2 border-softPink shadow-card-soft hover:shadow-kawaii transition-all flex flex-col justify-between"
              >
                <div>
                  <div className={`w-10 h-10 rounded-2xl ${cert.iconBg} ${cert.iconText} flex items-center justify-center mb-3`}>
                    <cert.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-charcoalPlum leading-snug">{cert.title}</h3>
                  <p className="text-sm font-semibold text-deepRose mt-1">{cert.issuer}</p>
                  <p className="text-xs text-mutedPlum mt-2">{cert.description}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-softPink/40 text-[11px] font-bold text-mutedPlum flex items-center gap-1">
                  <span>Verified Credential</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-14 relative scroll-mt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-deepRose font-caveat text-2xl font-bold">Communication</span>
            <h2 className="text-3xl font-extrabold text-charcoalPlum mt-0.5 flex items-center justify-center gap-2">
              Languages
            </h2>
            <div className="w-12 h-1 bg-accentPink mx-auto mt-2 rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="bg-white rounded-3xl p-6 border-2 border-softPink shadow-card-soft relative flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-softPink flex items-center justify-center shrink-0">
                <MessageCircle className="w-6 h-6 text-deepRose" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-charcoalPlum">English</h3>
                <p className="text-xs font-semibold text-deepRose">Professional Working Proficiency</p>
                <p className="text-[11px] text-mutedPlum mt-0.5">
                  Fluent in technical documentation &amp; collaborative discussions.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-3xl p-6 border-2 border-lavenderDeep/40 shadow-card-soft relative flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-lavender flex items-center justify-center shrink-0">
                <Sparkles className="w-6 h-6 text-charcoalPlum" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-charcoalPlum">Hindi</h3>
                <p className="text-xs font-semibold text-deepRose">Native Proficiency</p>
                <p className="text-[11px] text-mutedPlum mt-0.5">Mother tongue with full oral and written fluency.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-16 border-t border-softPink/40">
          <div className="text-center mb-12">
            <span className="text-deepRose font-caveat text-2xl font-bold">Say Hello</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoalPlum mt-1 flex items-center justify-center gap-2">
              Let&apos;s Connect <Mail className="w-8 h-8 text-deepRose" />
            </h2>
            <div className="w-16 h-1 bg-accentPink mx-auto mt-3 rounded-full" />
            <p className="text-sm text-mutedPlum mt-2">
              Have an internship opening, ML project collaboration, or just want to discuss data science?
            </p>
          </div>

          <div className="bg-warmCream rounded-3xl border-2 border-accentPink p-6 sm:p-10 shadow-kawaii relative">
            <div className="washi-tape-pink absolute -top-3 left-1/2 -translate-x-1/2 w-36 h-6 rounded-sm opacity-90" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-5">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-deepRose">Candidate Details</span>
                  <h3 className="text-2xl font-extrabold text-charcoalPlum">Shreya Soni</h3>
                  <p className="text-xs text-mutedPlum font-medium">
                    B.Tech CSE Student · 4th Year · OP Jindal University
                  </p>
                </div>
                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-softPink">
                  <Mail className="w-5 h-5 text-deepRose shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <span className="font-bold text-mutedPlum block">Official Email:</span>
                    <a
                      className="text-deepRose font-bold hover:underline text-sm break-all"
                      href="mailto:shreyasoniii28@gmail.com"
                    >
                      shreyasoniii28@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-softPink">
                  <MapPin className="w-5 h-5 text-deepRose shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <span className="font-bold text-mutedPlum block">Current City:</span>
                    <span className="text-charcoalPlum font-semibold text-sm">Raigarh, Chhattisgarh, India</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center text-center p-6 bg-softPink/30 rounded-3xl border border-accentPink/40">
                <div className="w-16 h-16 rounded-full bg-softPink flex items-center justify-center shadow-sm mb-3">
                  <Mail className="w-8 h-8 text-deepRose" />
                </div>
                <p className="font-caveat text-2xl text-deepRose font-bold">&quot;Direct Reach Out&quot;</p>
                <p className="text-xs text-mutedPlum mt-1 mb-6">Click below to start an email conversation.</p>
                <div className="w-full space-y-3">
                  <a
                    className="w-full py-3 px-5 rounded-full bg-deepRose hover:bg-rosePink text-white font-bold text-xs uppercase tracking-wider shadow-md hover:scale-102 transition-all flex items-center justify-center gap-2"
                    href="mailto:shreyasoniii28@gmail.com"
                  >
                    <span>SEND AN EMAIL</span>
                    <Heart className="w-4 h-4 fill-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
