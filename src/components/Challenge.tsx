import { useState } from "react";
import { motion } from "motion/react";
import { CHALLENGE_ITEMS } from "../data";

export default function Challenge() {
  // Initialize state tracking for the hovered item index
  const [activeChallenge, setActiveChallenge] = useState<number | null>(null);

  return (
    <section className="bg-white py-24 md:py-32 relative">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* Left Content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1.5px] w-6 bg-gold-500" />
              <span className="font-sans text-[0.7rem] tracking-[0.3em] text-gold-600 font-bold uppercase">
                THE CHALLENGE
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-green-950 tracking-wide leading-tight">
              Every Club Owner Faces <br className="hidden md:block" />
              the Same{" "}
              <span className="text-gold-500 italic pr-2 font-normal">
                Invisible Ceiling
              </span>
            </h2>

            <p className="mt-6 font-sans text-base text-green-900/80 tracking-wide leading-relaxed font-light">
              You built something with real potential. The space is right, the
              location is good, the equipment is there. But the results never
              quite match the vision. There's a gap — between what your club is,
              and what it could be.
            </p>

            {/* Challenge Interactive Numbered List */}
            <div className="mt-10 space-y-4">
              {CHALLENGE_ITEMS.map((challenge, idx) => {
                const itemIndex = idx + 1;
                const isActive = activeChallenge === itemIndex;
                
                return (
                  <div
                    key={idx}
                    onMouseEnter={() => setActiveChallenge(itemIndex)}
                    onMouseLeave={() => setActiveChallenge(null)}
                    className={`flex items-start gap-5 p-5 border-b border-gold-200/20 transition-all duration-300 group cursor-default ${
                      isActive
                        ? "bg-gold-50/40 translate-x-1"
                        : "bg-transparent"
                    }`}
                  >
                    <div className="relative pt-1">
                      {/* Gold vertical bar */}
                      <div
                        className={`absolute left-0 top-0 bottom-0 w-[2px] transition-all duration-300 ${
                          isActive
                            ? "bg-gold-400 h-fullScale"
                            : "bg-transparent h-0"
                        }`}
                      />
                      
                      {/* Generates dynamic numbers like 01, 02, etc. directly from the loop index */}
                      <span className="font-serif text-sm font-semibold text-gold-500 tracking-wider">
                        {itemIndex < 10 ? `0${itemIndex}` : itemIndex}
                      </span>
                    </div>
                    <p className="font-sans text-sm sm:text-base text-green-950 font-medium tracking-wide group-hover:text-gold-600 transition-colors">
                      {challenge.text}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Bottom Callout */}
            <p className="mt-10 font-serif text-lg text-gold-500 italic">
              Sound familiar? You are not alone — and there is a solution.
            </p>
          </div>

          {/* Right Premium Frame */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-[4/5] bg-green-900 double-border overflow-hidden group">
              {/* Fallback pattern */}
              <div className="absolute inset-0 bg-gradient-to-tr from-green-950 to-green-900 flex flex-col justify-between p-8 text-gold-50 z-0">
                <div className="border-t border-l border-gold-400/30 w-12 h-12" />
                <div className="flex flex-col gap-2">
                  <span className="font-serif text-2xl text-gold-300">
                    EXCELLENCE
                  </span>
                  <span className="text-xs tracking-[0.2em] uppercase text-white/50">
                    Horizon Fitness Management
                  </span>
                </div>
                <div className="self-end border-b border-r border-gold-400/30 w-12 h-12" />
              </div>

              {/* Badli hui image yahan hai */}
              <img
                src="/challenge.jpeg"
                alt="Club Challenges"
                className="absolute inset-0 w-full h-full object-cover grayscale brightness-90 group-hover:scale-105 transition-transform duration-700 ease-out z-10"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />

              {/* Overlay vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-green-950/80 via-transparent to-green-950/20 z-20 pointer-events-none" />

              {/* Border Accent Overlay */}
              <div className="absolute inset-4 border border-gold-400/20 z-20 pointer-events-none group-hover:inset-3 transition-all duration-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}