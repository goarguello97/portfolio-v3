import profileImage from "../assets/profile-image.jpg";

const Profile = () => {
  return (
    <div className="flex p-4">
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
        <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#293038] hover:bg-[#38414b] text-white text-sm font-bold leading-normal tracking-[0.015em] w-full max-w-[480px] sm:w-auto">
          <a
            href="https://drive.google.com/file/d/1fUnU7e6EGDNxyJzxKKKQbo46hS_9vcaX/view?usp=sharing"
            target="blank"
          >
            <span className="truncate">Descargar</span>
          </a>
        </button>
      </section>
    </div>
  );
};

export default Profile;