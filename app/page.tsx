import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <section className="relative pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Biography, Badges & Sticky Notes */}
          <div className="lg:col-span-7 flex flex-col items-start z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-softPink/80 border border-accentPink text-deepRose text-xs sm:text-sm font-semibold tracking-wide shadow-sm mb-6 animate-pulse">
              <span>🌸</span>
              <span>Welcome to my creative corner</span>
              <span>✦</span>
            </div>

            <div className="space-y-1 mb-4">
              <p className="font-caveat text-3xl sm:text-4xl text-deepRose font-bold">Hello! I&apos;m ♡</p>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-charcoalPlum leading-[1.1]">
                SHREYA{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rosePink to-accentPink">
                  SONI
                </span>
              </h1>
            </div>

            <div className="flex flex-wrap gap-2.5 my-4">
              <span className="px-3.5 py-1.5 rounded-xl bg-warmCream border-2 border-softPink text-charcoalPlum text-xs sm:text-sm font-bold shadow-sm flex items-center gap-1.5">
                <span>🎓</span> B.Tech Computer Science Student
              </span>
              <span className="px-3.5 py-1.5 rounded-xl bg-lavender/60 border-2 border-lavenderDeep/40 text-charcoalPlum text-xs sm:text-sm font-bold shadow-sm flex items-center gap-1.5">
                <span>✨</span> AI &amp; Data Science Enthusiast
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
                <span className="text-base">→</span>
              </Link>
              <a
                className="px-7 py-3.5 rounded-full bg-white border-2 border-accentPink text-deepRose font-bold text-sm tracking-wider uppercase hover:bg-softPink hover:border-deepRose shadow-sm hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
                href="mailto:shreyasoniii28@gmail.com"
              >
                <span>LET&apos;S CONNECT</span>
                <span className="text-base">♡</span>
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
                  Repeat ♡
                </p>
                <div className="text-right text-xs text-amber-700 font-bold mt-1">✦ OPJU · 4th Year</div>
              </div>
              <div className="relative bg-softPeach p-5 rounded-2xl shadow-md transform rotate-2 hover:rotate-0 transition-transform duration-300 border border-accentPink/40">
                <div className="washi-tape-lavender absolute -top-3 right-8 w-20 h-6 rotate-2 z-10 opacity-80" />
                <p className="font-caveat text-xl sm:text-2xl text-deepRose font-bold leading-tight">
                  &quot;Good code, brighter days ♡&quot;
                </p>
                <div className="flex items-center gap-1.5 mt-3 text-xs text-mutedPlum font-semibold">
                  <span>🐾</span> Desk cozy vibes &amp; coffee
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Anime Illustration & Decorative Stickers Frame */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="absolute -inset-2 bg-gradient-to-tr from-accentPink/30 via-lavender/40 to-softPink/50 rounded-3xl blur-2xl -z-10" />
            <div className="relative bg-white p-4 sm:p-5 rounded-3xl shadow-kawaii border-4 border-softPink/80 max-w-md w-full">
              <div className="washi-tape-pink absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-7 rounded-sm shadow-sm z-20 flex items-center justify-center text-[10px] tracking-widest text-deepRose/70 uppercase font-bold">
                study session ♡
              </div>
              <div className="absolute -top-4 -right-4 bg-white border-2 border-accentPink rounded-full px-3 py-1 shadow-md z-20 flex items-center gap-1 text-xs font-bold text-charcoalPlum transform rotate-6">
                <span>🐱</span>
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
                  <span>Currently building with Python &amp; OpenCV ✦</span>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-softPink/40 flex items-center justify-between text-xs text-mutedPlum">
                <div className="flex items-center gap-1 font-semibold">
                  <span>📍</span> Raigarh, Chhattisgarh
                </div>
                <div className="font-caveat text-base text-deepRose font-bold">B.Tech CSE &apos;27 🌸</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
