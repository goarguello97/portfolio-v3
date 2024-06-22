const ProjectItem = ({
  image,
  title,
  description,
}: {
  description: string;
  title: string;
  image: string;
}) => {
  return (
    <div className="flex flex-col gap-3 pb-3">
      <div
        className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div>
        <p className="text-white text-base font-medium leading-normal">
          {title}
        </p>
        <p className="text-[#9dabb8] text-sm font-normal leading-normal h-[64px] overflow-auto no-scroll" >
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProjectItem;
