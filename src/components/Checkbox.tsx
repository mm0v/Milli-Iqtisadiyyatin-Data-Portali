
import styled from 'styled-components';

interface reasonsType {
    reason: string;
    selectedReason: string;
    setSelectedReason: (reason: string) => void;
}


const Checkbox = ({reason,selectedReason,setSelectedReason} : reasonsType) => {

    const isChecked = selectedReason === reason;

  return (
    <StyledWrapper>
      <label key={reason} className="container flex justify-between w-xl mb-5">
        <span className='text-white text-lg font-semibold'>{reason}</span>
        <input 
            type="checkbox"
            value={reason}
            checked={selectedReason===reason}
            onChange={() => setSelectedReason(reason)}
            />
        <svg viewBox="0 0 64 64" height="1.2em" width="1.2em">
          <path d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16" pathLength="575.0541381835938" className="path" />
        </svg>
      </label>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .container {
    cursor: pointer;
  }

  .container input {
    display: none;
  }

  .container svg {
    overflow: visible;
  }

  .path {
    fill: none;
    stroke: white;
    stroke-width: 6;
    stroke-linecap: round;
    stroke-linejoin: round;
    transition: stroke-dasharray 0.5s ease;
    stroke-dasharray: 0 0 240 9999999;
    stroke-dashoffset: 1;
    scale: -1 1;
    transform-origin: center;
    animation: hi 0.5s;
  }

  .container input:checked ~ svg .path {
    stroke-dasharray: 0 262 70 9999999;
    transition-delay: 0s;
    scale: 1 1;
    animation: none;
  }

  @keyframes hi {
    0% {
      stroke-dashoffset: 20;
    }
    to {
      stroke-dashoffset: 1;
    }
  }`;

export default Checkbox;
