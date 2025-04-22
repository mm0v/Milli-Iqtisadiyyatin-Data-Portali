import CustomizedAccordions from "@/components/AccordionMUI"
import "../assets/sass/about.scss"
import Navbar from "@/layout/Navbar"
import LogoMinsitry from "@/components/LogoMinsitry"

const About = () => {
    return (
        <div className="aboutPage  h-[114vh]">
            <div>
                {/* <div className="absolute top-0 left-0 w-full h-full object-cover -z-10"
                    style={{ top: 0, left: 0, width: '100%', height: '100%', backgroundColor: '#050412' }}>

                </div> */}

                <div className="fixed inset-0 -z-10">
                    <video
                        autoPlay
                        loop
                        muted
                        className="w-full h-full object-cover"
                    >
                        <source src="./about/bg-about.mov" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>

                <div>
                    <CustomizedAccordions />
                </div>
                <div className="absolute bottom-0">
                    <Navbar />
                </div>
                <div>
                    <LogoMinsitry />
                </div>
            </div>
        </div>
    )
}

export default About