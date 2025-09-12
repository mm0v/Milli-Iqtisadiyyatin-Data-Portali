import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { NavLink, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const AnalyticsSidebar = () => {
    const { t } = useTranslation();
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
        {
            label: t("analytics"),
            route: "/analytics",
            subItems: [
                {
                    label: t("analytic.indicators"),
                    route: "/analytics/economic_indicators",
                    subItems: [
                        { label: t("analytic.macro"), route: "/analytics/economic_indicators/macro" },
                        { label: t("analytic.sectors"), route: "/analytics/economic_indicators/sector" },
                        { label: t("analytic.demo"), route: "/analytics/economic_indicators/demo" },
                        { label: t("analytic.state"), route: "/analytics/economic_indicators/state_services" },
                        { label: t("analytic.crime"), route: "/analytics/economic_indicators/crimes" },
                        { label: t("analytic.market"), route: "/analytics/economic_indicators/labor_market" },
                    ],
                },
                {
                    label: t("analytic.demonstrators"),
                    route: "/analytics/international_demonstrators",
                    subItems: [
                        { label: t("analytic.global"), route: "/analytics/international_demonstrators/global_innovation" },
                        { label: t("analytic.aiIndex"), route: "/analytics/international_demonstrators/ai_readness" },
                        { label: t("analytic.eGov"), route: "/analytics/international_demonstrators/e_gov" },
                    ],
                },
                {   label: t("analytic.infobase"), 
                    route: "/analytics/open_info",
                    subItems: [ 
                        { label: t("analytic.allData"), route: "/analytics/open_info/all_data" },
                        { label: t("analytic.health"), route: "/analytics/open_info/health" },
                        { label: t("analytic.tourism"), route: "/analytics/open_info/tourism" },
                        { label: t("analytic.energy"), route: "/analytics/open_info/energy" },
                        { label: t("analytic.demographic_indicators"), route: "/analytics/open_info/demographic_indicators" },
                        { label: t("analytic.agriculture"), route: "/analytics/open_info/agriculture" },
                        {label: t("analytic.economic_map"), route: "/analytics/open_info/economic_map"},
                        {label: t("analytic.statistical_calendar"), route: "/analytics/open_info/statistical_calendar"},
                        {label: t("analytic.open_data_policy"), route: "/analytics/open_info/open_data_policy"},
                        {label: t("analytic.data_request"), route: "/analytics/open_info/data_request"},
                    ]
                },
            ],
        },
    ];

    const renderMenu = (items: typeof menuItems) => {
        return items.map((item, index) => {
            const isActive = path.startsWith(item.route);

            return (
                <div key={index} className="mt-4 float-left">
                    <NavLink
                        to={item.route}
                        className={({ isActive: active }) =>
                            `font-medium transition-all duration-200 ${active || isActive ? "text-blue-500" : "text-white"}`
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
                className={`fixed lg:hidden top-0 left-0 w-full h-full bg-[rgba(29,7,22,0.5)] z-40 transition-opacity duration-300 
                    ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
                onClick={togglePanel}
            />

            {/* Sidebar */}
            <aside className={`fixed top-21 left-0 h-full w-80 bg-[#180718] z-50 shadow-xl transform transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 lg:shadow-none lg:bg-transparent
                            ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
                <div className="p-4 flex justify-end lg:hidden">
                    <FiX size={24} onClick={togglePanel} className="text-white cursor-pointer hover:text-red-400 transition-colors" />
                </div>

                <div className="px-6 space-y-2">{renderMenu(menuItems)}</div>
            </aside>

            {/* Menu button */}
            <button
                onClick={togglePanel}
                className="z-50 pt-15 pl-5 flex lg:hidden text-white"
            >
                <FiMenu size={24} />
            </button>
        </>
    );
};

export default AnalyticsSidebar;