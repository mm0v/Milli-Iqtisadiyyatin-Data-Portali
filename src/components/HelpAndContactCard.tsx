import "../assets/sass/helpandcontactcard.scss";
import Arrow from "../../public/helpAndContact/top-right-arrow.svg";
interface HelpCardProps {
  title: string;
  to: any;
}

function HelpAndContactCard({ title, to }: HelpCardProps) {
  return (
    <button className="help-card-main">
      <span className="help-card-main-title">{title}</span>
      <span className="help-card-main-arrow-div">
        <img src={Arrow} alt="arrrow" />
      </span>
    </button>
  );
}

export default HelpAndContactCard;
