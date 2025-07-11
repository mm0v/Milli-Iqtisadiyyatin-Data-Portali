import { Link } from 'react-router-dom';
import IconAccordion from "/report/IconAccordion.png"

export default function CustomizedAccordionsAcademic() {

    return (
        <div className=''>
            <div className="px-4 lg:px-8 xl:px-10 py-6 flex justify-end items-center">
                <div className="w-[830px]">
                    <div className="mb-8">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold text-center md:text-left">
                            Akademik nəşrlər
                        </h1>
                    </div>

                    {/* Filter Buttons */}
                    {/* <div className="flex flex-wrap gap-2 mb-8">
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

                    {/* Accordions */}
                    <div className="text-white">
                        <Link to={"/academic_reports/economic_reports"}>
                            <div className='flex justify-between items-center mt-6 border-1 rounded-[8px] p-5' style={{ borderColor: '#373641' }}>
                                <div>
                                    <h1>İqtisadi Tədqiqatları</h1>
                                </div>
                                <div>
                                    <img className='w-7' src={IconAccordion} alt="IconAccordion" />
                                </div>
                            </div>
                        </Link>
                        <Link to={"/academic_reports/financial_reports"}>
                            <div className='flex justify-between items-center mt-6 border-1 rounded-[8px] p-5' style={{ borderColor: '#373641' }}>
                                <div>
                                    <h1>Maliyyə Tədqiqatları</h1>
                                </div>
                                <div>
                                    <img className='w-7' src={IconAccordion} alt="IconAccordion" />
                                </div>
                            </div>
                        </Link>
                        <Link to={"/academic_reports/science_reports"}>
                            <div className='flex justify-between items-center mt-6 border-1 rounded-[8px] p-5' style={{ borderColor: '#373641' }}>
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
        </div >
    );
}