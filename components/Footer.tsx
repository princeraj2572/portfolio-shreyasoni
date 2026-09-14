import { Flower2, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-warmCream border-t-2 border-softPink/60 py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-block p-4 rounded-3xl bg-softPink/50 border border-accentPink/60 mb-6 shadow-sm">
          <p className="font-caveat text-3xl sm:text-4xl text-deepRose font-bold">
            &quot;Same Girl... Bigger Dreams&quot;
          </p>
        </div>
        <p className="text-sm font-semibold text-mutedPlum flex items-center justify-center gap-1.5">
          Thank you for visiting my digital corner <Flower2 className="w-4 h-4 text-rosePink" />
        </p>
        <div className="flex items-center justify-center gap-2 text-xs font-bold text-charcoalPlum mt-4">
          <span>Made with</span>
          <Heart className="w-3.5 h-3.5 fill-rosePink text-rosePink animate-pulse" />
          <span>by Shreya Soni · B.Tech Computer Science Engineering</span>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-softPink via-accentPink to-lavenderDeep" />
    </footer>
  );
}
