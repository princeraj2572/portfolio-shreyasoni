import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Shreya Soni",
};

export default function ContactPage() {
  return (
    <>
      <section className="py-14 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-deepRose font-caveat text-2xl font-bold">Communication</span>
            <h2 className="text-3xl font-extrabold text-charcoalPlum mt-0.5 flex items-center justify-center gap-2">
              Languages 🌸
            </h2>
            <div className="w-12 h-1 bg-accentPink mx-auto mt-2 rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="bg-white rounded-3xl p-6 border-2 border-softPink shadow-card-soft relative flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-softPink flex items-center justify-center text-2xl shrink-0">
                💬
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
              <div className="w-12 h-12 rounded-2xl bg-lavender flex items-center justify-center text-2xl shrink-0">
                🌸
              </div>
              <div>
                <h3 className="text-lg font-bold text-charcoalPlum">Hindi</h3>
                <p className="text-xs font-semibold text-deepRose">Native Proficiency</p>
                <p className="text-[11px] text-mutedPlum mt-0.5">Mother tongue with full oral and written fluency.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white/90 border-t border-softPink/40 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-deepRose font-caveat text-2xl font-bold">Say Hello</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoalPlum mt-1 flex items-center justify-center gap-2">
              Let&apos;s Connect 💌
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
                  <span className="text-xl">📧</span>
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
                  <span className="text-xl">📍</span>
                  <div className="text-xs">
                    <span className="font-bold text-mutedPlum block">Current City:</span>
                    <span className="text-charcoalPlum font-semibold text-sm">Raigarh, Chhattisgarh, India</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center text-center p-6 bg-softPink/30 rounded-3xl border border-accentPink/40">
                <div className="w-16 h-16 rounded-full bg-softPink flex items-center justify-center text-3xl shadow-sm mb-3">
                  💌
                </div>
                <p className="font-caveat text-2xl text-deepRose font-bold">&quot;Direct Reach Out ♡&quot;</p>
                <p className="text-xs text-mutedPlum mt-1 mb-6">Click below to start an email conversation.</p>
                <div className="w-full space-y-3">
                  <a
                    className="w-full py-3 px-5 rounded-full bg-deepRose hover:bg-rosePink text-white font-bold text-xs uppercase tracking-wider shadow-md hover:scale-102 transition-all flex items-center justify-center gap-2"
                    href="mailto:shreyasoniii28@gmail.com"
                  >
                    <span>SEND AN EMAIL</span>
                    <span>♡</span>
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
