import CustomizedAccordionsAcademic from "@/components/AccordionAcademicReports"
import { NavLink } from "react-router-dom"
import vector from '/report/vector.png';

const AcademicReports = () => {
    return (
        <div>
            <div className="absolute top-0 left-0 w-full object-cover -z-10"
                style={{ top: 0, left: 0, width: '100%', height: '100vh', backgroundColor: '#050412' }}>
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

            <div>
                <CustomizedAccordionsAcademic />
            </div>
        </div>
    )
}

export default AcademicReports