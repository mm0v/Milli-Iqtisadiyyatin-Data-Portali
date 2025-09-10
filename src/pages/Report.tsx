import { useMatch } from "react-router-dom";
import BackgroundVideo from "@/components/bg-video/BackgroundVideo";
import { useTranslation } from "react-i18next";
import LinearButton from "@/components/ui/linearButton";
import HelpSidebar from "@/components/HelpSidebar";

const Report = () => {
  const { t } = useTranslation();
  const isButton = useMatch("/report");

  return (
    <div className="help-and-contact flex flex-col lg:flex-row">
      <div className="video-background">
        <BackgroundVideo videoSrc="/about/bg-about.mp4" />
      </div>

      {isButton ? (
        <div className="absolute top-[60px] md:right-10 grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-6 w-full lg:max-w-[800px] items-center justify-center p-10 md:p-[60px]">
          <LinearButton
            title={t("report.publications")}
            pageRouter="/academic_reports"
          />
          <LinearButton
            title={t("report.reports")}
            pageRouter="/academic_publications"
          />
        </div>
      ) : (
        <HelpSidebar />
      )}
    </div>
  );
};

export default Report;
