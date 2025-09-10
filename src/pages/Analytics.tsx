import AnalyticsSidebar from "@/components/AnalyticsSidebar";
import BackgroundVideo from "@/components/bg-video/BackgroundVideo";
import LinearButton from "@/components/ui/linearButton";
import { useTranslation } from "react-i18next";
import { useMatch } from "react-router-dom";
import { Outlet } from "react-router-dom";

const Analytics = () => {
  const { t } = useTranslation();
  const isButton = useMatch("/analytics");


  return (
 <div className="analytics">
      <div className="video-background">
        <BackgroundVideo videoSrc="/about/bg-about.mp4" />
      </div>
      <div className="">
        {isButton ? (
          <div className="absolute top-[60px] md:right-10 grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-6 w-full lg:max-w-[800px] items-center justify-center p-10 md:p-[60px]">
            <LinearButton title={t('analytic.indicators')} pageRouter="economic_indicators" />
            <LinearButton title={t('analytic.demonstrators')} pageRouter="international_demonstrators" />
            <LinearButton title={t('analytic.infobase')} pageRouter="open_infobase" />
          </div>
        ) : (
          <AnalyticsSidebar />
        )}

        <Outlet />
      </div>
    </div>
  );
};

export default Analytics;