import { ReactNode } from "react";
type AboutCardProps = {
  title: string;
  description: string;
  Icon: ReactNode;
};

const AboutCard = ({ title, description, Icon }: AboutCardProps) => {
  return (
    <div className="card-item flex flex-col cursor-pointer gap-3 bg-white justify-center py-6 px-10 text-center items-center mt-12 shadow-2xl hover:text-white">
      <p className="text-2xl font-bold uppercase">{title}</p>
      {Icon}
      <p className="text-xl">{description}</p>
    </div>
  );
};

export default AboutCard;
