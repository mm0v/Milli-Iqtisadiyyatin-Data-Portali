import BackgroundVideo from "@/components/bg-video/BackgroundVideo";
import "../assets/sass/about.scss";
import LinearButton from "@/components/ui/linearButton";
import { useTranslation } from "react-i18next";
const Analytics = () => {
  const { t } = useTranslation()

  return (
    <div>
      <div className="video-background">
        <BackgroundVideo videoSrc="/about/bg-about.mp4" />

      </div>
      <div className="absolute top-[60px] right-10 flex flex-wrap gap-6 max-w-[800px] pt-[60px]">
        <LinearButton title={t('analytic.indicators')} pageRouter="/economic_Indicators" />
        <LinearButton title={t('analytic.demonstrators')} pageRouter="/international_demonstrators" />
        <LinearButton title={t('analytic.infobase')} pageRouter="/open_infobase" />
      </div>
    </div>
  );
};

export default Analytics;
