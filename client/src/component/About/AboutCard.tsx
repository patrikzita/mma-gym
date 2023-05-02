import { ReactNode } from "react";
type AboutCardProps = {
  title: string;
  description: string;
  Icon: ReactNode;
};

const AboutCard = ({ title, description, Icon }: AboutCardProps) => {
  return (
    <div className="card-item mt-12 flex cursor-pointer flex-col items-center justify-center gap-3 bg-white py-6 px-10 text-center shadow-2xl hover:text-white">
      <p className="text-2xl font-bold uppercase">{title}</p>
      {Icon}
      <p className="text-xl">{description}</p>
    </div>
  );
};

export default AboutCard;
