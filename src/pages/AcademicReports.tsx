import CustomizedAccordionsAcademic from "@/components/AccordionAcademicReports"
import { NavLink } from "react-router-dom"

const AcademicReports = () => {
    return (
        <div>
            <div className="video-background">
                <video autoPlay loop muted>
                    <source src="./about/bg-about.mov" type="video/mp4" />
                </video>
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
                <div className="mt-2 ml-4">
                    <NavLink
                        to="/academic_reports"
                        className={({ isActive }) =>
                            isActive ? "text-blue-500 flex" : "text-white flex"
                        }
                    >
                        <div>
                            Akademik nəşrlər
                        </div>
                    </NavLink>
                </div>
                <div className="mt-2 ml-4">
                    <NavLink
                        to="/academic_publications"
                        className={({ isActive }) =>
                            isActive ? "text-blue-500 flex" : "text-white flex"
                        }
                    >
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