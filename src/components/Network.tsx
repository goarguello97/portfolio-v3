const Network = ({
  network,
  logo,
  title,
  link,
}: {
  network: string;
  logo: string;
  title: string;
  link: string;
}) => {
  return (
    <div>
      <a
        href={link}
        className="flex items-center gap-4 bg-[#111418] hover:bg-[#2c333b] hover:rounded-xl max-w-[300px] px-4 min-h-[72px] py-2" target="blank"
      >
        <div
          className="text-white flex items-center justify-center rounded-lg bg-[#293038] shrink-0 size-12"
          data-icon="EnvelopeOpen"
          data-size="24px"
          data-weight="regular"
        >
          <img src={logo} alt="" className="w-[24px]" />
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-white text-base font-medium leading-normal line-clamp-1">
            {network}
          </p>
          <p className="text-[#9dabb8] text-sm font-normal leading-normal line-clamp-2">
            {title}
          </p>
        </div>
      </a>
    </div>
  );
};

export default Network;
