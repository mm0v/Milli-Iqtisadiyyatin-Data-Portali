import LogoCard from "@/components/ui/LogoCard";

export default function AboutFooter() {
  return (
    <div className="flex px-8 gap-19 2xl:px-16 2xl:gap-40 mt-20">
      <LogoCard
        src="/logoMinistry/iqtisadiyyat.png"
        alt="four_center_logo"
        href="https://4sim.gov.az/az"
      />
      <LogoCard
        src="/logoMinistry/4SIM.png"
        alt="iqtisadiyyat_center_logo"
        href="https://www.economy.gov.az"
      />
      <LogoCard
        src="/logoMinistry/sim_center.png"
        alt="sim_center_logo"
        href="https://4sim.gov.az/az"
      />
      <LogoCard
        src="/logoMinistry/iqtisadiyyat.png"
        alt="four_center_logo"
        href="https://www.economy.gov.az"
      />
      <LogoCard
        src="/logoMinistry/4SIM.png"
        alt="iqtisadiyyat_center_logo"
        href="https://www.economy.gov.az"
      />
    </div>
  );
}
