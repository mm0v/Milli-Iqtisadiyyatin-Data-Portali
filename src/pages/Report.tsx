import firstReportImage from "/report/1.svg";
import secondReportImage from "/report/2.svg";
import Navbar from "@/layout/Navbar";
import { useNavigate } from "react-router-dom";

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
            <div className="absolute top-0 left-0 w-full h-full object-cover -z-10"
                style={{ top: 0, left: 0, width: '100%', height: '105vh', backgroundColor: '#050412' }}>
            </div>

            {/* <div className="video-background">
                <video autoPlay loop muted>
                    <source src="./bg/2.mp4" type="video/mp4" />
                    <source src="./bg/1.mp4" type="video/mp4" />
                </video>
            </div> */}
            
            <div className="flex justify-end p-4 flex-wrap">
                <div onClick={handleClickAcademicReport} className="m-1">
                    <div className="border-1 pt-12 pb-12 pl-32 pr-24 cursor-pointer mb-4 mt-20 rounded-[8px]" style={{ border: '1px solid #373641' }}  // Border əlavə edilir
                    >

                        <div>
                            <img src={firstReportImage} alt="firstReportImage" />
                        </div>
                        <div>
                            <p className="text-white text-center text-xl mt-2">Akademik nəşrlər</p>
                        </div>
                    </div>
                </div>

                <div onClick={handleClickAcademicPublications} className="m-1">
                    <div className="border-1 pt-12 pb-12 pl-32 pr-32 cursor-pointer mb-4 mt-20 rounded-[8px]" style={{ border: '1px solid #373641' }}  // Border əlavə edilir
                    >
                        <div>
                            <img src={secondReportImage} alt="secondReportImage" />
                        </div>
                        <div>
                            <p className="text-white text-center text-xl mt-2">Hesabatlar</p>
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