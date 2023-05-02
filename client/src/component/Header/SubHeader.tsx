type SubHeaderProsps = {
  title: string;
};

export const SubHeader = ({ title }: SubHeaderProsps) => {
  return (
    <div className="general-bg flex items-center ">
      <h1 className="ml-8 text-5xl font-bold text-slate-50 lg:text-6xl">
        {title}
      </h1>
    </div>
  );
};
