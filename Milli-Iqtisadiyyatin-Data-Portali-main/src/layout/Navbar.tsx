import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../../src/assets/sass/navbar.scss";

const Navbar = () => {
    const { t } = useTranslation();

    return (
        <div className="navbar">
            <div className="p-6 flex flex-col items-center">
                <nav className="space-y-7 ">
                    <NavLink to="/" className="nav-link mt-3">
                        {t("home")}
                    </NavLink>
                    <NavLink to="/about" className="nav-link mt-3">
                        {t("aboutUs")}
                    </NavLink>
                    <NavLink to="/analytics" className="nav-link mt-3">
                        {t("analytics")}
                    </NavLink>
                    <NavLink to="/report" className="nav-link mt-3">
                        {t("reports")}
                    </NavLink>
                    <NavLink to="/contact" className="nav-link mt-3">
                        {t("help")}
                    </NavLink>
                    {/* <Link to={"/contact"}>
                            <p className={`nav-link mt-3 ${location.pathname === "/contact" ? "text-blue-500" : "text-white"}`}>
                                {t('help')}
                            </p>
                        </Link> */}
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
