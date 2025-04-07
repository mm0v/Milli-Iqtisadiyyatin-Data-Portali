import image3 from '/report/3.png';
import installImage from '/report/install.png';
import PDFIqtisadi from '/report/İqtisadi_Tədqiqatlar.pdf';
import vector from '/report/vector.png';
import { Link, NavLink } from 'react-router-dom';
import IconAccordion from "/report/IconAccordion.png"

const PublicationEconomic = () => {

    return (
        <div className='p-5 mr-2'>
            <div className="absolute top-0 left-0 w-full h-full object-cover -z-10"
                style={{ top: 0, left: 0, width: '100%', height: '250vh', backgroundColor: '#050412' }}>
            </div>
            <div className="absolute top-30 left-10 wayOfReportsAndPublications">
                <div>
                    <NavLink
                        to="/report"
                        className={({ isActive }) =>
                            isActive ? "text-blue-500" : "text-white"
                        }
                    >
                        Araşdırma və Hesabatlar
                    </NavLink>
                </div>
                <div className="mt-2">
                    <NavLink
                        to="/academic_reports"
                        className={({ isActive }) =>
                            isActive ? "text-blue-500 flex" : "text-white flex"
                        }
                    >
                        <div>
                            <img className="w-5 mr-2" src={vector} alt="vector" />
                        </div>
                        <div>
                            Akademik nəşrlər
                        </div>
                    </NavLink>
                </div>
                <div className="mt-2">
                    <NavLink
                        to="/academic_publications"
                        className={({ isActive }) =>
                            isActive ? "text-blue-500 flex" : "text-white flex"
                        }
                    >
                        <div>
                            <img className="w-5 mr-2" src={vector} alt="vector" />
                        </div>
                        <div>
                            Hesabatlar
                        </div>
                    </NavLink>
                </div>
            </div>
            <div className='flex justify-end'>
                <div className='w-[830px]'>
                    <div className='flex items-center justify-between'>
                        <div>
                            <h1 className='text-white text-4xl font-bold'>İqtisadi Tədqiqatlar - Hesabatlar</h1>
                        </div>
                        <div>
                            <a
                                href={PDFIqtisadi}
                                download
                                aria-label="Download PDF"
                            >
                                <img
                                    className="w-6 h-6 md:w-8 md:h-8"
                                    src={installImage}
                                    alt="Download"
                                />
                            </a>
                        </div>
                    </div>
                    <div>
                        <img src={image3} className='mt-4 mb-3' alt="image3" />
                    </div>
                    <div>
                        <p className='text-white mb-4'>
                            Müasir data analitika metodları və rəqəmsal texnologiyalar əsasında milli iqtisadiyyata dair açıq və sistemli məlumat mühitini formalaşdırmaqdır. Portal, məlumatların vahid platformada toplanmasını, vizuallaşdırılmasını və analitik imkanların genişləndirilməsini təmin edərək, iqtisadi proseslərin daha dərin və dəqiq anlaşılmasına töhfə verəcək.
                        </p>
                    </div>
                    <div className='h-[0.5px] bg-amber-50 mb-3'></div>
                </div>
            </div>

            <div className='flex justify-end mt-8'>
                <div className="space-y-6 w-[830px]">
                    <div>
                        <h1 className='text-white text-3xl font-bold'>Digər akademik nəşrlər - Hesabatlar</h1>
                    </div>
                    {/* <div className="flex justify-start flex-wrap gap-2 mb-8">
                        {['Sektor', 'Tarix', 'Müəllif', 'Açıq Giriş', 'Məhdud Giriş'].map((btn) => (
                            <button
                                key={btn}
                                className="bg-[#212330] hover:bg-[#373641] text-white px-3 py-2 rounded 
                         text-sm md:text-base transition-colors duration-200 flex items-center"
                            >
                                {btn}
                            </button>
                        ))}
                    </div> */}

                    <div className="text-white">
                        <Link to={"/academic_publications/financial_publication"}>
                            <div className='flex justify-between items-center mt-6 border-1 p-5 rounded-[8px]' style={{ borderColor: '#373641' }}>
                                <div>
                                    <h1>Maliyyə Tədqiqatları</h1>
                                </div>
                                <div>
                                    <img className='w-7' src={IconAccordion} alt="IconAccordion" />
                                </div>
                            </div>
                        </Link>
                        <Link to={"/academic_publications/science_publication"}>
                            <div className='flex justify-between items-center mt-6 border-1 p-5 rounded-[8px]' style={{ borderColor: '#373641' }}>
                                <div>
                                    <h1>Elmi Tədqiqatlar</h1>
                                </div>
                                <div>
                                    <img className='w-7' src={IconAccordion} alt="IconAccordion" />
                                </div>
                            </div>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default PublicationEconomic