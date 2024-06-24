import { motion } from "framer-motion";
import profileImage from "../assets/profile-image.jpg";

const Profile = () => {
  return (
    <motion.div
      className="flex p-4"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <section className="flex w-full gap-4 sm:flex-row sm:justify-between items-center">
        <div className="flex gap-4">
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-32 w-32"
            style={{ backgroundImage: `url(${profileImage})` }}
          ></div>
          <div className="flex flex-col justify-center">
            <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em]">
              Hey!
            </h2>
            <p className="text-[#9dabb8] text-base font-normal leading-normal">
              Descarga mi CV
            </p>
          </div>
        </div>
        <motion.button
          className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#293038] hover:bg-[#38414b] text-white text-sm font-bold leading-normal tracking-[0.015em] w-full max-w-[480px] sm:w-auto"
          whileHover={{ scale: 1.2, rotate: -5 }}
          whileTap={{
            scale: 0.8,
            rotate: -10,
          }}
        >
          <a
            href="https://drive.google.com/file/d/1fUnU7e6EGDNxyJzxKKKQbo46hS_9vcaX/view?usp=sharing"
            target="blank"
          >
            <span className="truncate">Descargar</span>
          </a>
        </motion.button>
      </section>
    </motion.div>
  );
};

export default Profile;
