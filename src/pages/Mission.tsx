import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Mission() {
  const { t } = useTranslation();
  return (
    <div className="inline-flex flex-col w-full">
      <Link
        to="/about"
        className="flex justify-between items-center p-2 w-full"
      >
        <h2 className="text-[#F9F9F9] poppins text-4xl font-normal">
          {t("about.mission.title")}
        </h2>
        <img src="\about\minus_icon.svg" alt="collapse" />
      </Link>
      <div className="h-[302px] mt-4">
        <img
          src="\about\mission.jpg"
          alt="purpose"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="mt-6">
        <p className="poppins text-[#E6E6E7] font-normal">
          {t("about.mission.description")}
        </p>
      </div>
      <div>
        <Link to="/about/purpose" className="mt-3 mb-16 flex justify-between">
          <h2 className="poppins font-normal text-4xl text-[#E6E6E7]">
            {t("about.goal.title")}
          </h2>
          <img src="\about\link_icon.svg" alt="link"></img>
        </Link>
      </div>
    </div>
  );
}
