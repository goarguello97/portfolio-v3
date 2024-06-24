import { useRef } from "react";
import headerImage from "../assets/wallpaper-header.jpg";
import { motion, useScroll, useTransform } from "framer-motion";

const Header = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.2]);
  const scaleY = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const typingEffect = {
    hidden: { opacity: 0, x: 50 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.2, // Retraso escalonado para cada letra
        duration: 0.5,
        ease: "easeInOut",
      },
    }),
  };
  const h2 = "Hola, soy Gonzalo";
  const p = "Full Stack Developer";
  return (
    <header
      className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat sm:gap-8 sm:rounded-xl items-start justify-end px-4 pb-10 sm:px-10"
      style={{ backgroundImage: `url(${headerImage})` }}
    >
      <motion.div
        className="flex flex-col gap-2 text-left"
        style={{ scale, y }}
      >
        <motion.h2
          className="text-white text-4xl font-black leading-tight tracking-[-0.033em] sm:text-5xl sm:font-black sm:leading-tight sm:tracking-[-0.033em]"
          style={{ opacity, scaleY }}
        >
          {h2.split("").map((char, index) => (
            <motion.span
              key={index}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={typingEffect}
              className="inline-block text-white text-4xl font-black leading-tight tracking-[-0.033em] sm:text-5xl sm:font-black sm:leading-tight sm:tracking-[-0.033em]"
              style={{ marginRight: char === " " ? "0.5ch" : 0 }}
            >
              {char}
            </motion.span>
          ))}
        </motion.h2>
        <motion.p
          className="text-white text-sm font-nomral leading-normal sm:text-base sm:font-normal sm:leading-normal"
          style={{ opacity, scaleY }}
        >
          {p.split("").map((char, index) => (
            <motion.span
              key={index}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={typingEffect}
              className="inline-block text-white text-xl sm:text-2xl"
              style={{ marginRight: char === " " ? "0.5ch" : 0 }}
            >
              {char}
            </motion.span>
          ))}
        </motion.p>
      </motion.div>
      <motion.label
        className="flex flex-col items-center min-w-40 h-14 w-full max-w-[480px] sm:h-16 sm:items-start"
        style={{ scale, y }}
      >
        <motion.button
          className="flex min-w-[84px] max-w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 sm:h-12 sm:px-5 bg-[#1980e6] hover:bg-[#368ee5] text-white text-sm font-bold leading-normal tracking-[0.015em] sm:text-base sm:font-bold sm:leading-normal sm:tracking-[0.015em]"
          style={{ opacity, y }}
        >
          <a href="mailto:arguellogonzalo97@gmail.com">
            <span className="truncate">Contactame</span>
          </a>
        </motion.button>
      </motion.label>
    </header>
  );
};

export default Header;
