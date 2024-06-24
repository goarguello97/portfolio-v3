import { motion } from "framer-motion";
import githubImage from "../assets/networks/github-original.svg";
const ProjectItem = ({
  image,
  title,
  description,
  variants,
  link,
  github,
}: {
  description: string;
  title: string;
  image: string;
  variants: {};
  link: string;
  github: string;
}) => {
  return (
    <a href={link} target="blank">
      <motion.div className="flex flex-col gap-3 p-1 pb-3" variants={variants}>
        <motion.div
          className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
          style={{ backgroundImage: `url(${image})` }}
          whileHover={{ scale: 1.5, rotate: 0 }}
        ></motion.div>
        <div className="hover:bg-gradient-to-b from-[#293038] hover:rounded-xl p-1">
          <p className="text-white text-base font-medium leading-normal">
            {title}
          </p>
          <p className="text-[#9dabb8] text-sm font-normal leading-normal h-[64px] overflow-auto no-scroll">
            {description}
          </p>
          <motion.a
            className="bg-[#293038] hover:bg-[#333b43] mx-auto mt-[10px] w-[40px] h-[40px] rounded-full flex justify-center items-center"
            target="blank"
            whileHover={{ scale: 1.1, rotate: 0 }}
            href={github}
          >
            <img src={githubImage} alt="" className="w-[35px]" />
          </motion.a>
        </div>
      </motion.div>
    </a>
  );
};

export default ProjectItem;
