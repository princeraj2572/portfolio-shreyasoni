import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Shreya Soni",
};

export default function AboutPage() {
  return (
    <section className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-deepRose font-caveat text-2xl font-bold tracking-wide">Get to know me</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoalPlum mt-1 flex items-center justify-center gap-2">
            About Me <span className="text-rosePink">♡</span>
          </h2>
          <div className="w-16 h-1 bg-accentPink mx-auto mt-3 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-7 bg-warmCream rounded-3xl p-6 sm:p-8 border-2 border-softPink shadow-card-soft relative flex flex-col justify-between">
            <div className="washi-tape-lavender absolute -top-3 left-8 w-28 h-6 rotate-1 rounded-sm" />
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="p-2 rounded-xl bg-softPink text-rosePink text-lg">🌸</span>
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
              <span className="text-2xl">✨</span>
              <p className="font-caveat text-xl sm:text-2xl text-deepRose font-bold">
                &quot;Learning today for a brighter tomorrow ♡&quot;
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border-2 border-lavenderDeep/40 shadow-card-soft flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-lg font-bold text-charcoalPlum flex items-center gap-2">
                  <span>📋</span> Quick Facts Sheet
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
              <span className="text-rosePink">★</span>
              <span>All details strictly verified from official resume records.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
