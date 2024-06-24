import { motion } from "framer-motion";

const Skill = ({ skill }: { skill: string }) => {
  return (
    <motion.button
      className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#293038] hover:bg-[#38414b] px-4"
      whileHover={{ scale: 1.2, rotate: 1 }}
    >
      <p className="text-white text-sm font-medium leading-normal">{skill}</p>
    </motion.button>
  );
};

export default Skill;
