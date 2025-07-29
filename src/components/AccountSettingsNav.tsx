import { Link, useLocation } from "react-router-dom";

const AccountSettingsNav = () => {
  const location = useLocation();
  const pathname = location.pathname; // full path string

  const tabs = [
    { id: "language", label: "Dil seçimi", href: "language" },
    { id: "subscriptions", label: "Abunəliklərim", href: "subscriptions" },
    { id: "deactivate", label: "Deaktiv et", href: "deactivate" },
  ];

  return (
    <div className="mb-12 text-[#F9F9F9] font-['Poppins']">
      <div className="w-68 h-11 mb-8">
        <h1 className="text-3xl font-semibold text-white text-left">
          Hesab ayarları
        </h1>
      </div>

      <div className="relative">
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-500 opacity-60"></div>

        <div className="flex justify-between relative w-full max-w-3xl text-m">
          {tabs.map((tab) => {
            // For subscriptions, check if "subscriptions" is anywhere in the pathname
            const isActive =
              tab.id === "subscriptions"
                ? pathname.includes("/subscriptions")
                : // For other tabs, check if last segment equals the tab id OR the path ends with it
                  pathname.endsWith(`/${tab.href}`) ||
                  pathname.endsWith(`/${tab.id}`) ||
                  (pathname === "/profile/settings" && tab.id === "language");

            return (
              <div key={tab.id} className="relative">
                <Link
                  to={tab.href}
                  className="block pb-2 font-semibold hover:text-white"
                >
                  <span className={isActive ? "text-[#3460DC]" : "text-white"}>
                    {tab.label}
                  </span>
                </Link>
                {isActive && (
                  <div className="absolute bottom-0 -left-4 -right-4 h-0.5 bg-white"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AccountSettingsNav;




