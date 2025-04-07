import Navbar from "@/layout/Navbar"
import "../assets/sass/about.scss"

const Analytics = () => {
    return (
        <div>
            <div>
                <video
                    autoPlay
                    loop
                    muted
                    className="absolute top-0 left-0 w-full h-full object-cover -z-10 bg-[#1d071e]"
                    style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }}
                >
                    {/* <source src="./about/bg-about.mp4" type="video/mp4" /> */}
                    {/* Your browser does not support the video tag. */}
                </video>
                <div className="absolute bottom-0">
                    <Navbar />
                </div>
            </div>
        </div>
    )
}

export default Analytics