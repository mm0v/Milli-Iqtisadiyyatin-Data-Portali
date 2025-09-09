import "../assets/sass/home.scss";
import { useTranslation } from "react-i18next";
import Chatbot from "../components/Chatbot"; // Adjust the path as needed
import AccessibilityMenu from "@/components/AccessibilityMenu";
import BackgroundVideo from "@/components/bg-video/BackgroundVideo";

const Home = () => {
  const { t } = useTranslation();

  const handleDarkModeChange = (enabled: boolean) => {
    console.log("Dark mode:", enabled);
  };

  const handleVoiceAccessChange = (enabled: boolean) => {
    console.log("Voice access:", enabled);
  };

  const handleMagnifierChange = (enabled: boolean) => {
    console.log("Magnifier:", enabled);
  };

  const handleLanguageChange = (language: string) => {
    console.log("Language changed to:", language);
  };

  return (
    <div className="homePage">
      {/* Video Background */}
      <div className="video-background">
        <BackgroundVideo videoSrc="/header/bg-video-header.mp4" />
      </div>

      <div className="mainWord">
        <h1 className="font-bold texth1">
          <span dangerouslySetInnerHTML={{ __html: t('data-portal') }} />
        </h1>
        <h6 className="texth6 mt-2">
          <span dangerouslySetInnerHTML={{ __html: t('data-world') }} />
        </h6>
      </div>

      {/* Add accessibility menu component */}
      <AccessibilityMenu
        onDarkModeChange={handleDarkModeChange}
        onVoiceAccessChange={handleVoiceAccessChange}
        onMagnifierChange={handleMagnifierChange}
        onLanguageChange={handleLanguageChange}
      />

      <Chatbot />
    </div>
  );
};

export default Home;