import { motion } from "framer-motion";

const ProjectItem = ({
  image,
  title,
  description,
  variants,
}: {
  description: string;
  title: string;
  image: string;
  variants: {};
}) => {
  return (
    <motion.div className="flex flex-col gap-3 pb-3" variants={variants}>
      <motion.div
        className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
        style={{ backgroundImage: `url(${image})` }}
        whileHover={{ scale: 1.5, rotate: 0 }}
      ></motion.div>
      <div>
        <p className="text-white text-base font-medium leading-normal">
          {title}
        </p>
        <p className="text-[#9dabb8] text-sm font-normal leading-normal h-[64px] overflow-auto no-scroll">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default ProjectItem;
