import React from "react";
import { motion } from "framer-motion";

const SkeletonLoader = () => {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-[#0b0e14]">
      {/* Background Simulating App Skeleton */}
      <div className="absolute inset-0 flex flex-col p-8 gap-6 opacity-20 pointer-events-none">
        {/* Mock Top Nav */}
        <div className="h-10 w-full bg-slate-700/50 rounded-md animate-pulse" />
        <div className="flex flex-1 gap-6 w-full">
          {/* Mock Sidebar */}
          <div className="w-1/4 h-full bg-slate-700/50 rounded-md animate-pulse hidden md:block" />
          {/* Mock Main Content */}
          <div className="flex-1 flex flex-col gap-4 h-full">
            <div className="h-2/5 w-full bg-slate-700/50 rounded-md animate-pulse" />
            <div className="h-1/5 w-3/4 bg-slate-700/50 rounded-md animate-pulse" />
            <div className="h-1/5 w-1/2 bg-slate-700/50 rounded-md animate-pulse" />
          </div>
        </div>
      </div>

      {/* Central Spinner & Progress Info */}
      <div className="relative z-10 flex flex-col items-center gap-4 text-center">
        <div className="relative w-12 h-12">
          {/* Outer glowing ring */}
          <div className="absolute inset-0 rounded-full border-2 border-slate-800" />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            className="absolute inset-0 rounded-full border-2 border-t-transparent"
            style={{ borderTopColor: "var(--blue)" }}
          />
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-sm font-semibold tracking-wide" style={{ color: "var(--text)" }}>
            Loading Live Preview...
          </p>
          <p className="text-xs" style={{ color: "var(--text-muted)" }}>
            Establishing secure sandbox environment
          </p>
        </div>
      </div>
    </div>
  );
};

export default SkeletonLoader;
