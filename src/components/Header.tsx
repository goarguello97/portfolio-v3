import headerImage from "../assets/wallpaper-header.jpg";

const Header = () => {
  return (
    <header
      className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat sm:gap-8 sm:rounded-xl items-start justify-end px-4 pb-10 sm:px-10"
      style={{ backgroundImage: `url(${headerImage})` }}
    >
      <div className="flex flex-col gap-2 text-left">
        <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] sm:text-5xl sm:font-black sm:leading-tight sm:tracking-[-0.033em]">
          Hola, soy Gonzalo
        </h1>
        <p className="text-white text-sm font-nomral leading-normal sm:text-base sm:font-normal sm:leading-normal">
          Soy una persona apasionada y dedicada al desarrollo backend y
          frontend, con una curiosidad insaciable que me impulsa a investigar y
          aprender constantemente. Disfruto adquiriendo conocimientos profundos
          y prácticos, lo que me ha permitido construir una sólida base en ambas
          áreas.
        </p>
      </div>
      <label className="flex flex-col items-center min-w-40 h-14 w-full max-w-[480px] sm:h-16 sm:items-start">
        <button className="flex min-w-[84px] max-w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 sm:h-12 sm:px-5 bg-[#1980e6] hover:bg-[#368ee5] text-white text-sm font-bold leading-normal tracking-[0.015em] sm:text-base sm:font-bold sm:leading-normal sm:tracking-[0.015em]">
          <a href="mailto:arguellogonzalo97@gmail.com">
            <span className="truncate">Contactame</span>
          </a>
        </button>
      </label>
    </header>
  );
};

export default Header;
