import CustomizedAccordions from "@/components/AccordionMUI"
import "../assets/sass/about.scss"
import Navbar from "@/layout/Navbar"
import LogoCarousel from "@/components/LogoCarousel"
// import iqtisadiyyat from "/logoMinistry/iqtisadiyyat.png";
// import sim_center from "/logoMinistry/sim_center.png";
// import four_center from "/logoMinistry/4SIM.png";

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
                        <source src="./about/bg-about.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>

                <div>
                    <CustomizedAccordions />
                </div>
                {/* <div>
                    <div className="pt-4 ">
                        <div className="flex justify-around items-center flex-wrap">
                            <div className="p-6">
                                <a href="https://www.economy.gov.az" target="_blank" rel="noreferrer noopener">
                                    <img className="w-[110px]" src={iqtisadiyyat} alt="iqtisadiyyat_center_logo" />
                                </a>
                            </div>
                            <div className="p-6">
                                <a href="https://4sim.gov.az/az" target="_blank" rel="noreferrer noopener">
                                    <img className="w-[110px]" src={four_center} alt="iqtisadiyyat_center_logo" />
                                </a>
                            </div>
                            <div className="p-6">
                                <a href="https://4sim.gov.az/az" target="_blank" rel="noreferrer noopener">
                                    <img className="w-[110px]" src={sim_center} alt="sim_center_logo" />
                                </a>
                            </div>
                            <div className="p-6">
                                <a href="https://www.economy.gov.az" target="_blank" rel="noreferrer noopener">
                                    <img className="w-[110px]" src={iqtisadiyyat} alt="iqtisadiyyat_center_logo" />
                                </a>
                            </div>
                            <div className="p-6">
                                <a href="https://4sim.gov.az/az" target="_blank" rel="noreferrer noopener">
                                    <img className="w-[110px]" src={four_center} alt="iqtisadiyyat_center_logo" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div>
                    <LogoCarousel />
                    
                </div>
                <div className="absolute bottom-0">
                    <Navbar />
                </div>

            </div>
        </div>
    )
}

export default About