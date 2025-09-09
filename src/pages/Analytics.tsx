import BackgroundVideo from "@/components/bg-video/BackgroundVideo";
import LinearButton from "@/components/ui/linearButton";
import { NavLink } from "react-router-dom";
import { useMatch } from "react-router-dom";
import { Outlet } from "react-router-dom";

const Analytics = () => {
  const isButton = useMatch("/analytics");
  const isEconomic = useMatch("/analytics/economic_indicators");

  return (
    <div className="analytics">
      <div className="video-background">
        <BackgroundVideo videoSrc="/about/bg-about.mp4" />
      </div>

      {isButton ? (
        <div className="absolute top-[60px] right-10 flex flex-wrap gap-6 max-w-[800px] pt-[60px]">
          <LinearButton title="Iqtisadi Göstəricilər" pageRouter="economic_indicators" />
          <LinearButton title="Beynəlxalq Göstəricilər" pageRouter="international_demonstrators" />
          <LinearButton title="Açıq İnformasiya Bazası" pageRouter="open_infobase" />
        </div>
      ) : (
        <div className="absolute top-30 left-10 ">
          <div>
            <NavLink to="/analytics" className={({ isActive }) => (isActive ? "text-blue-500" : "text-white")}>
              Analitika
            </NavLink>
          </div>
          <div className="mt-4 ml-4">
            <NavLink to="/analytics/economic_indicators" className={({ isActive }) => (isActive ? "text-blue-500 flex" : "text-white flex")}>
              Iqtisadi Göstəricilər
            </NavLink>
            {isEconomic ? (
              <div></div>
            ) : (
              <div className="ml-6 mt-2 flex flex-col gap-4">
                <NavLink to="/analytics/economic_indicators/macro" className={({ isActive }) => (isActive ? "text-blue-400" : "text-white")}>
                  Makro və mikro iqtisadi göstəricilər
                </NavLink>
                <NavLink to="/analytics/economic_indicators/sector" className={({ isActive }) => (isActive ? "text-blue-400" : "text-white")}>
                  Sektorlar üzrə iqtisadi göstəricilər
                </NavLink>
                <NavLink to="/analytics/economic_indicators/demo" className={({ isActive }) => (isActive ? "text-blue-400" : "text-white")}>
                  Demoqrafik göstəricilər
                </NavLink>
                <NavLink to="/analytics/economic_indicators/state_services" className={({ isActive }) => (isActive ? "text-blue-400" : "text-white")}>
                  Dövlət xidmətləri üzrə göstəricilər
                </NavLink>
                <NavLink to="/analytics/economic_indicators/crimes" className={({ isActive }) => (isActive ? "text-blue-400" : "text-white")}>
                  Cinayətkarlıq və hüquqpozmalar üzrə göstəricilər
                </NavLink>
                <NavLink to="/analytics/economic_indicators/labor_market" className={({ isActive }) => (isActive ? "text-blue-400" : "text-white")}>
                  Əmək bazarı üzrə göstəricilər
                </NavLink>
              </div>
            )}
          </div>
          <div className="mt-4 ml-4">
            <NavLink to="/analytics/international_demonstrators" className={({ isActive }) => (isActive ? "text-blue-500 flex" : "text-white flex")}>
              Beynəlxalq Göstəricilər
            </NavLink>
          </div>
          <div className="mt-4 ml-4">
            <NavLink to="/analytics/open_info" className={({ isActive }) => (isActive ? "text-blue-500 flex" : "text-white flex")}>
              Açıq İnformasiya Bazası
            </NavLink>
            {isEconomic ? (
              <div></div>
            ) : (
              <div className="ml-6 mt-2 flex flex-col gap-4">
                <NavLink to="/analytics/open_info/all_data" className={({ isActive }) => (isActive ? "text-blue-400" : "text-white")}>
                Bütün datalar
                </NavLink>
                <NavLink to="/analytics/open_info/health" className={({ isActive }) => (isActive ? "text-blue-400" : "text-white")}>
                Səhiyyə
                </NavLink>
                <NavLink to="/analytics/open_info/tourism" className={({ isActive }) => (isActive ? "text-blue-400" : "text-white")}>
                Turizm
                </NavLink>
                <NavLink to="/analytics/open_info/energy" className={({ isActive }) => (isActive ? "text-blue-400" : "text-white")}>
                Enerji
                </NavLink>
                <NavLink to="/analytics/open_info/demographic_indicators" className={({ isActive }) => (isActive ? "text-blue-400" : "text-white")}>
                Demoqrafik göstəricilər
                </NavLink>
                <NavLink to="/analytics/open_info/agriculture" className={({ isActive }) => (isActive ? "text-blue-400" : "text-white")}>
                Kənd təsərrüfatı
                </NavLink>
              </div>
            )}
          </div>
        </div>
      )}

      <Outlet />
    </div>
  );
};

export default Analytics;