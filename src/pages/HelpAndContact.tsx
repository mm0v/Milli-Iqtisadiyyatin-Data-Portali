import HelpSidebar from "@/components/HelpSidebar";
import BackgroundVideo from "@/components/bg-video/BackgroundVideo";
import LinearButton from "@/components/ui/linearButton";
import { Outlet, useMatch } from "react-router-dom";

const HelpAndContact = () => {
    const isButton = useMatch("/contact");

    return (
        <div className="help-and-contact flex flex-col lg:flex-row">
            <div className="video-background">
                <BackgroundVideo videoSrc="/about/bg-about.mp4" />
            </div>

            {isButton ? (
                <div className="absolute top-[60px] md:right-10 grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-6 w-full lg:max-w-[800px] items-center justify-center p-10 md:p-[60px]">
                    <LinearButton title="Tez-tez verliən suallar" pageRouter="faq" />
                    <LinearButton title="İstifadəçi təlimatları" pageRouter="user_manual" />
                    <LinearButton title="Əlaqə forması" pageRouter="contact_form" />
                </div>
            ) : (
                <HelpSidebar/>
            )}

            <Outlet />
        </div>
    )
}

export default HelpAndContact;
