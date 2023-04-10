type SubHeaderProsps = {
  title: string;
};

export const SubHeader = ({ title }: SubHeaderProsps) => {
  return (
    <div className="general-bg flex items-center ">
      <h1 className="text-5xl lg:text-6xl font-bold text-slate-50 ml-8">
        {title}
      </h1>
    </div>
  );
};
