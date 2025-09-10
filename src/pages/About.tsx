import "../assets/sass/about.scss";
import BackgroundVideo from "@/components/bg-video/BackgroundVideo";
import AboutFooter from "@/layout/AboutFooter";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const About = () => {
  const { t } = useTranslation();
  return (
    <div className="aboutPage">
      <div className="flex flex-col h-[90vh] justify-between">
        <div className="video-background">
          <BackgroundVideo videoSrc="/about/bg-about.mp4" />
        </div>

        <div className="self-end flex flex-col max-w-[872px] mt-20">
          <h1 className="text-6xl text-[#8994D7] font-semibold poppins">
            {t("about.heroTitle")}
          </h1>
          <div className="flex flex-col justify-between w-[40vw] mr-8 h-[55vh]">
            <p className="mt-5 text-[#E6E6E7] text-lg font-normal">
              {t("about.paragraph")}
            </p>
            <div className="poppins font-normal text-4xl text-[#E6E6E7]">
              <Link to="purpose" className="flex justify-between">
                <h2>{t("about.goal.title")}</h2>
                <img src="about\link_icon.svg" alt="link"></img>
              </Link>
              <Link to="mission" className="mt-3 flex justify-between">
                <h2>{t("about.mission.title")}</h2>
                <img src="about\link_icon.svg" alt="link"></img>
              </Link>
            </div>
          </div>
        </div>
        <AboutFooter />
      </div>
    </div>
  );
};

export default About;
