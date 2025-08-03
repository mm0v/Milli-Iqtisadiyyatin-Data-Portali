import Navbar from "@/layout/Navbar";
import "../assets/sass/helpandcontact.scss";
import bgVideo from "../../public/helpAndContact/bg-helpandcontact.mp4";
import HelpAndContactCard from "@/components/HelpAndContactCard";
import { useTranslation } from "react-i18next";

const HelpAndContact = () => {
  const { t } = useTranslation();
  return (
    <div className="">
      <div className="fixed inset-0 -z-10">
        <video
          className="w-full h-full object-cover bg-video"
          autoPlay
          loop
          muted
        >
          <source src={bgVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[#1D0416] opacity-80" />
      </div>
      <div className="absolute bottom-0">
        <Navbar />
      </div>
      <div className="absolute right-0 top-30 right-10 flex gap-10.5">
        <HelpAndContactCard title={t("faq")} to={null} />
        <HelpAndContactCard title={t("user_instructions")} to={null} />
        <HelpAndContactCard title={t("contact_form")} to={null} />
      </div>
    </div>
  );
};

export default HelpAndContact;
