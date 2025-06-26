import React from "react";
import { Link } from "react-router-dom";

const AccountSettingsNav = ({ activeTab }) => {
  const tabs = [
    { id: "language", label: "Dil seçimi", href: "/account/language" },
    { id: "subscriptions", label: "Abunəliklərim", href: "/account/subscriptions" },
    { id: "deactivate", label: "Deaktiv et", href: "/account/deactivate" },
  ];

  return (
    <div className="mb-12 text-[#F9F9F9] font-['Poppins']">
      {/* Heading */}
      <div className="w-68 h-11 mb-8">
        <h1 className="text-3xl font-semibold text-white text-left">Hesab ayarları</h1>
      </div>

      {/* Navigation Tabs */}
      <div className="relative">
        {/* Underline */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-500 opacity-60"></div>

        <div className="flex justify-between relative w-full max-w-3xl text-m">
          {tabs.map((tab) => (
            <div key={tab.id} className="relative">
              <Link to={tab.href} className="block pb-2 font-semibold hover:text-white">
                <span className={activeTab === tab.id ? "text-[#3460DC]" : "text-white"}>
                  {tab.label}
                </span>
              </Link>
              {activeTab === tab.id && (
                <div className="absolute bottom-0 -left-4 -right-4 h-0.5 bg-white"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AccountSettingsNav;

