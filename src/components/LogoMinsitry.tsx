import iqtisadiyyat from "/logoMinistry/iqtisadiyyat.png";
import sim_center from "/logoMinistry/sim_center.png";
import four_center from "/logoMinistry/4SIM.png";

const LogoMinsitry = () => {
    return (
        <div className="p-4">
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
    )
}

export default LogoMinsitry