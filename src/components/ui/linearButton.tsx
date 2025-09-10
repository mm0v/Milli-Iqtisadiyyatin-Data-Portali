"use client";
import { Link } from "react-router-dom";
interface LinearButtonProps {
  title: string;
  pageRouter: string;
}

const LinearButton: React.FC<LinearButtonProps> = ({ title, pageRouter }) => {
  return (
    <div className="w-full flex items-center justify-center">
      <Link
        className="relative w-[360px] min-h-[270px] p-6 rounded-2xl 
        bg-[#1D0416] text-white flex flex-col justify-between
        border border-[#FFFFFF] transition-all duration-100 group
        hover:bg-gradient-to-br hover:from-[#1D0416] hover:to-[#315eda5c]
        hover:border-[#3460DC] hover:shadow-[0px_0px_65px_#3460DC40]"
        to={pageRouter}
      >
        <img className="self-end" src="/Analytics/Icon1.svg" alt={title} />
        <div className="text-white text-[30px] h-[80px] font-medium font-poppins max-w-[250px]">
        {title}
      </div>
      </Link>
    </div>
  );
};

export default LinearButton;