import type { Metadata } from "next";
import { Laptop } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "Projects | Shreya Soni",
};

export default function ProjectsPage() {
  return (
    <section className="py-16 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-deepRose font-caveat text-2xl font-bold">Real-World Innovation</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoalPlum mt-1 flex items-center justify-center gap-2">
            <Laptop className="w-8 h-8" /> Featured Project
          </h2>
          <div className="w-16 h-1 bg-accentPink mx-auto mt-3 rounded-full" />
        </div>

        <ProjectCard />
      </div>
    </section>
  );
}
