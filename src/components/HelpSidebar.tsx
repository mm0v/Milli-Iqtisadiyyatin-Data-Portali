import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { NavLink, useLocation } from "react-router-dom";

const HelpSidebar: React.FC = () => {
  const location = useLocation();
  const path = location.pathname;

  const [isOpen, setIsOpen] = useState(false);
  const togglePanel = () => setIsOpen(!isOpen);

  interface MenuItem {
    label: string;
    route: string;
    subItems?: MenuItem[];
  }

  const menuItems: MenuItem[] = [
    { label: "Ana Səhifə", route: "/" },
    { label: "Haqqımızda", route: "/about" },
    { label: "Analitika", route: "/analytics" },
    { label: "Araşdırma və hesabatlar", route: "/report" },
    {
      label: "Dəstək",
      route: "/contact",
      subItems: [
        { label: "Tez-tez verilən suallar", route: "/contact/faq" },
        { label: "İstifadəçi təlimatları", route: "/contact/user_manual" },
        { label: "Əlaqə forması", route: "/contact/contact_form" },
      ],
    },
  ];

  const renderMenu = (items: MenuItem[]) => {
    return items.map((item, index) => {
      const isActive = path.startsWith(item.route);

      return (
        <div key={index} className="mt-4">
          <NavLink
            to={item.route}
            className={({ isActive: active }) =>
              `transition-all duration-200 ${
                active || isActive ? "text-blue-500" : "text-white"
              }`
            }
            onClick={togglePanel}
          >
            {item.label}
          </NavLink>

          {item.subItems && isActive && (
            <div className="ml-6 mt-2 flex flex-col gap-2">
              {renderMenu(item.subItems)}
            </div>
          )}
        </div>
      );
    });
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed lg:hidden top-0 left-0 w-full h-full bg-[rgba(29,7,22,0.5)] z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={togglePanel}
      />

      {/* Sidebar */}
      <aside
        className={`fixed top-21 left-0 h-full w-64 bg-[#180718] z-50 shadow-xl transform transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 lg:shadow-none lg:bg-transparent
          ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="p-4 flex justify-end lg:hidden">
          <FiX
            size={24}
            onClick={togglePanel}
            className="text-white cursor-pointer hover:text-red-400 transition-colors"
          />
        </div>

        <div className="px-6 space-y-2">{renderMenu(menuItems)}</div>
      </aside>

      {/* Menu button */}
      <button
        onClick={togglePanel}
        className="pt-15 pl-5 flex lg:hidden text-white"
      >
        <FiMenu size={24} />
      </button>
    </>
  );
};

export default HelpSidebar;
