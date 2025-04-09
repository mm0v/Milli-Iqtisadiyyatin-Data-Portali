import CustomizedAccordions from "@/components/AccordionMUI"
import "../assets/sass/about.scss"
import Navbar from "@/layout/Navbar"
import LogoMinsitry from "@/components/LogoMinsitry"

const About = () => {
    return (
        <div className="aboutPage  h-[110vh]">
            <div>
                <div className="absolute top-0 left-0 w-full h-full object-cover -z-10"
                    style={{ top: 0, left: 0, width: '100%', height: '100%', backgroundColor: '#050412' }}>

                </div>

                {/* <div className="video-background">
                    <video autoPlay loop muted>
                        <source src="./bg/1.mp4" type="video/mp4" />
                    </video>
                </div> */}

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