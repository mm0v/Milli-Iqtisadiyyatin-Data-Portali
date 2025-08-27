import React from "react";

type CardProps = {
  title: string;
  price: number | string;
  originalPrice?: number | string;
  period?: string;
  features: string[];
  isCurrent?: boolean;
};

const Card:React.FC<CardProps> = ({
  title,
  price,
  originalPrice,
  period,
  features,
  isCurrent = false
}) => {
  const planColors:Record<string,string> = {
    "Pulsuz Paket": "#5D80E3",
    "Standart Paket": "#2F57C8",
    "Premium Paket": "#1D3579",
  };

  return (
    <div className="relative bg-gray-800 rounded-2xl overflow-hidden text-white flex flex-col h-[410px] max-w-[260px]">
      <div
        className="relative w-full"
        style={{ backgroundColor: planColors[title], height: "28%" }}
      >
        {isCurrent && (
          <div className="absolute top-0 left-0 w-full bg-[#D4145A] text-center text-white text-xs font-medium flex items-center justify-center" style={{ height: "22%" }}>
            Cari abunə
          </div>
        )}
        <div className="absolute bottom-1/2 left-4 right-4 transform translate-y-1/2">
          <h3 className="text-lg font-semibold text-[#F9F9F9]">{title}</h3>
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-center px-6 py-2">
        <div className="space-y-1 text-left">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-2">
              <div className="w-1 h-1 bg-[#E6E6E6] rounded-full mt-1 flex-shrink-0"></div>
              <span className="text-xs text-gray-300 leading-snug">
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center pb-6 px-4 h-[60px] flex flex-col justify-end">
        <div className="mb-2">
          <span className="text-xl font-bold text-blue-400">{price} Azn</span>
          {originalPrice && (
            <span className="text-xl font-bold text-blue-400">&nbsp;/ {originalPrice} Azn</span>
          )}
        </div>

        <div className="text-[#E6E6E6] text-xs h-4 flex items-center justify-center">
          {period || "\u00A0"}
        </div>
      </div>
    </div>
  );
};

export default Card;