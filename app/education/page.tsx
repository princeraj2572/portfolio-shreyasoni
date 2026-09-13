import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Education | Shreya Soni",
};

export default function EducationPage() {
  return (
    <section className="py-16 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-deepRose font-caveat text-2xl font-bold">Academic Journey</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoalPlum mt-1 flex items-center justify-center gap-2">
            My Education 🎓
          </h2>
          <div className="w-16 h-1 bg-accentPink mx-auto mt-3 rounded-full" />
        </div>

        <div className="relative pl-6 sm:pl-10 border-l-4 border-accentPink/60 space-y-12 ml-4 sm:ml-12">
          <div className="relative group">
            <div className="absolute -left-[35px] sm:-left-[51px] top-1 w-10 h-10 rounded-full bg-softPink border-4 border-white shadow-md flex items-center justify-center text-rosePink text-lg group-hover:scale-110 transition-transform">
              🎓
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
                  <span>🏆</span> CGPA: 8.65
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-warmCream rounded-xl border border-softPink text-mutedPlum text-sm font-semibold">
                  <span>📚</span> Core Focus: Machine Learning, Computer Vision &amp; Data Structures
                </div>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -left-[35px] sm:-left-[51px] top-1 w-10 h-10 rounded-full bg-lavender border-4 border-white shadow-md flex items-center justify-center text-charcoalPlum text-lg group-hover:scale-110 transition-transform">
              🌸
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
                  <span>★</span> Final Score: 84%
                </span>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -left-[35px] sm:-left-[51px] top-1 w-10 h-10 rounded-full bg-softPeach border-4 border-white shadow-md flex items-center justify-center text-rosePink text-lg group-hover:scale-110 transition-transform">
              ✨
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
                  <span>🌟</span> Final Score: 92%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
