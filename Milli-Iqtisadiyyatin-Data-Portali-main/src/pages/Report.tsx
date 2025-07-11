import { useNavigate } from "react-router-dom";
import IconAccordion from "/report/IconAccordion.png"
import BackgroundVideo from "@/components/bg-video/BackgroundVideo";
import { useTranslation } from "react-i18next";


const Report = () => {
    const { t } = useTranslation()

    const navigate = useNavigate();

    const handleClickAcademicReport = () => {
        navigate('/academic_reports');
    };

    const handleClickAcademicPublications = () => {
        navigate('/academic_publications');
    };

    return (
        <div className="relative">
            <div className="video-background">
                <BackgroundVideo videoSrc="/about/bg-about.mp4" />
            </div>

            <div className="relative">
                <div className="flex justify-end p-4 flex-wrap">
                    <div onClick={handleClickAcademicReport} className="m-1 w-84">
                        <div className=" cursor-pointer mb-4 mt-20 rounded-[8px]"
                        >
                            <div className="relative">
                                <div className="w-full">
                                    <BackgroundVideo videoSrc="/report/akademic.mp4" />
                                </div>
                                <div className="absolute bottom-4">
                                    <p className="text-white text-2xl mt-2 ml-2">{t('report.publications')}</p>
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
                                    <BackgroundVideo videoSrc="/report/akademic.mp4" />
                                </div>
                                <div className="absolute bottom-4">
                                    <p className="text-white text-2xl mt-2 ml-2">{t('report.reports')}</p>
                                </div>
                                <div className="absolute top-0 right-0 rotate-270 p-2">
                                    <img className='w-7' src={IconAccordion} alt="IconAccordion" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Report;