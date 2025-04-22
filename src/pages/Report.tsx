import Navbar from "@/layout/Navbar";
import { useNavigate } from "react-router-dom";
import IconAccordion from "/report/IconAccordion.png"


const Report = () => {
    const navigate = useNavigate();

    const handleClickAcademicReport = () => {
        navigate('/academic_reports');
    };

    const handleClickAcademicPublications = () => {
        navigate('/academic_publications');
    };

    return (
        <div>

            <div className="video-background">
                <video autoPlay loop muted>
                    <source src="./about/bg-about.mov" type="video/mp4" />
                </video>
            </div>

            <div className="flex justify-end p-4 flex-wrap">
                <div onClick={handleClickAcademicReport} className="m-1 w-84">
                    <div className=" cursor-pointer mb-4 mt-20 rounded-[8px]"
                    >
                        <div className="relative">
                            <div className="w-full">
                                <video autoPlay loop muted>
                                    <source src="./report/akademic.mp4" type="video/mp4" />
                                </video>
                            </div>
                            <div className="absolute bottom-4">
                                <p className="text-white text-2xl mt-2 ml-2">Akademik <br /> nəşrlər</p>
                            </div>
                            <div className="absolute top-0 right-0 rotate-270 p-2">
                                <img className='w-7' src={IconAccordion} alt="IconAccordion" />
                            </div>
                        </div>
                    </div>
                </div>

                <div onClick={handleClickAcademicPublications} className="m-1 w-84">
                    <div className=" cursor-pointer mb-4 mt-20 rounded-[8px]"
                    >
                        <div className="relative">
                            <div className="w-full">
                                <video autoPlay loop muted>
                                    <source src="./report/akademic.mp4" type="video/mp4" />
                                </video>
                            </div>
                            <div className="absolute bottom-4">
                                <p className="text-white text-2xl mt-2 ml-2">Hesabatlar</p>
                            </div>
                            <div className="absolute top-0 right-0 rotate-270 p-2">
                                <img className='w-7' src={IconAccordion} alt="IconAccordion" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0">
                <Navbar />
            </div>
        </div>
    );
};

export default Report;