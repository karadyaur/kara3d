"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { CompanyLogo } from "@/components/ui/CompanyLogo";

const MIN_MS = 1400;

export function Preloader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t0 = Date.now();

    const hide = () => {
      const elapsed = Date.now() - t0;
      setTimeout(() => setVisible(false), Math.max(0, MIN_MS - elapsed));
    };

    if (document.readyState === "complete") {
      hide();
    } else {
      window.addEventListener("load", hide, { once: true });
    }
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="preloader"
          exit={{ y: "-100%", transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[200] bg-malachite-darker flex flex-col items-center justify-center gap-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 0.03, 0.26, 1], delay: 0.1 }}
          >
            <CompanyLogo alternate />
          </motion.div>

          {/* Progress line */}
          <div className="w-12 h-px bg-white/20 overflow-hidden">
            <motion.div
              className="h-full bg-white"
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{
                duration: MIN_MS / 1000 - 0.3,
                ease: [0.4, 0, 0.6, 1],
                delay: 0.2,
              }}
            />
          </div>

          {/* Codebridge credit */}
          <motion.a
            href="https://codebridge.agency"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="absolute bottom-8 flex items-center gap-2 opacity-40 hover:opacity-70 transition-opacity"
          >
            <span className="font-sans font-normal text-tiny text-white leading-none">
              Developed by
            </span>
            <Image
              src="/codebridge.png"
              alt="Codebridge"
              height={14}
              width={32}
              className="object-contain brightness-0 invert"
            />
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
