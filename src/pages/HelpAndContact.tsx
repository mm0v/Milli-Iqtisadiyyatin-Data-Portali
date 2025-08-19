import BackgroundVideo from "@/components/bg-video/BackgroundVideo";
import LinearButton from "@/components/ui/linearButton";
import { NavLink, Outlet, useMatch } from "react-router-dom";

const HelpAndContact = () => {
    const isButton = useMatch("/contact");

    return (
        <div className="help-and-contact">
            <div className="video-background">
                <BackgroundVideo videoSrc="/about/bg-about.mp4" />
            </div>

            {isButton ? (
                <div className="absolute top-[60px] right-10 flex flex-wrap gap-6 max-w-[800px] pt-[60px]">
                    <LinearButton title="Tez-tez verliən suallar" pageRouter="faq" />
                    <LinearButton title="İstifadəçi təlimatları" pageRouter="user_manual" />
                    <LinearButton title="Əlaqə forması" pageRouter="contact_form" />
                </div>
            ) : (
                <div className="absolute top-30 left-10 z-10 wayOfReportsAndPublications">
                    <div>
                        <NavLink to="/contact" className={({ isActive }) => (isActive ? "text-blue-500" : "text-white")}>
                            Analitika
                        </NavLink>
                    </div>
                    <div className="mt-4 ml-4">
                        <NavLink to="/contact/faq" className={({ isActive }) => (isActive ? "text-blue-500 flex" : "text-white flex")}>
                            Tez-tez verlən suallar
                        </NavLink>
                    </div>
                    <div className="mt-4 ml-4">
                        <NavLink to="/contact/user_manual" className={({ isActive }) => (isActive ? "text-blue-500 flex" : "text-white flex")}>
                            İstifadəçi təlimatlaarı
                        </NavLink>
                    </div>
                    <div className="mt-4 ml-4">
                        <NavLink to="/contact/contact_form" className={({ isActive }) => (isActive ? "text-blue-500 flex" : "text-white flex")}>
                            Əlaqə forması
                        </NavLink>
                    </div>
                </div>
            )}

            <Outlet />
        </div>
    )
}

export default HelpAndContact;
