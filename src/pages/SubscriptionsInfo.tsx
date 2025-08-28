import React, { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

type Plan = {
  title: string;
  price: string;
  period: string;
  features: string[];
};

type LocationState = Plan & { planId?: string };

const planOrder = ["free", "standard", "premium"] as const;

const plansData: Record<typeof planOrder[number], Plan> = {
  free: { title: "Pulsuz Paket", price: "0", period: "Aylıq", features: [] },
  standard: {
    title: "Standart Paket",
    price: "10",
    period: "Aylıq",
    features: [
      "Əlavə analitik imkanlar və hesabat yükləmək",
      "PDF və Excel formatında sənədləri yükləmək",
      "Daha geniş axtarış və filtr funksiyaları",
      "E-poçta yenilik bildirişləri almaq",
    ],
  },
  premium: {
    title: "Premium Paket",
    price: "25",
    period: "Aylıq",
    features: [
      "Əlavə analitik imkanlar və hesabat yükləmək",
      "PDF və Excel formatında sənədləri yükləmək",
      "Daha geniş axtarış və filtr funksiyaları",
      "E-poçta yenilik bildirişləri almaq",
      "Data yükləmə və paylaşma",
      "Eksklüziv dashboardlara çıxış",
      "Sürətli dəstək (priority support)",
    ],
  },
};

function formatDate(date: Date): string {
  const d = date.getDate().toString().padStart(2, "0");
  const m = (date.getMonth() + 1).toString().padStart(2, "0");
  const y = date.getFullYear();
  const h = date.getHours().toString().padStart(2, "0");
  const min = date.getMinutes().toString().padStart(2, "0");
  return `${d}.${m}.${y} ${h}:${min}`;
}

const SubscriptionInfo: React.FC = () => {
  const { state } = useLocation() as { state?: LocationState };
  const navigate = useNavigate();
  const { planId } = useParams<{ planId: string }>();

  const plan: Plan = state || (planId && plansData[planId as keyof typeof plansData]) || {
    title: "Unknown",
    price: "-",
    period: "-",
    features: [],
  };

  let endDate = "";
  if (planId !== "free") {
    const now = new Date();
    now.setMonth(now.getMonth() + 1);
    endDate = formatDate(now);
  }

  const [upgradeMode, setUpgradeMode] = useState(false);

  const handleUpgrade = () => {
    const currentIndex = planOrder.indexOf(planId as typeof planOrder[number]);
    const nextPlanId = planOrder[currentIndex + 1];
    if (nextPlanId) {
      navigate(`/profile/settings/subscriptions/${nextPlanId}`, {
        state: plansData[nextPlanId],
      });
      setUpgradeMode(true);
    }
  };

  // Always send to payment page, even for free plan
  const handleBuy = () => {
    navigate(`/profile/settings/subscriptions/${planId}/payment`, {
      state: {
        planId,
        price: plan.price,
        title: plan.title.replace(" Paket", ""),
      },
    });
  };


  return (
    <div className="min-h-screen text-white p-4 sm:p-6 relative overflow-x-hidden">
      <div className="flex justify-center min-h-screen">
        <div className="w-full max-w-5xl flex flex-col px-2 sm:px-4">
          <div className="bg-[#070618CC]/85 p-6 sm:p-10 md:p-16 rounded-xl space-y-6">
            <h1 className="text-2xl sm:text-3xl font-medium text-center mb-10 sm:mb-20 text-[#F9F9F9]">
              Abunəliyin məlumatları
            </h1>

            <div className="w-full max-w-2xl mx-auto">
              <div className="border border-[#66666659] p-6 sm:p-8 rounded-md space-y-4">
                <div className="text-lg sm:text-xl mb-4">
                  {plan.title.replace(" Paket", "")}
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white">{plan.period}</span>
                  <span className="text-white">{plan.price}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white">Valuta</span>
                  <span className="text-white">AZN</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white">Bitmə tarixi</span>
                  <span className="text-white">{planId !== "free" ? endDate : "-"}</span>
                </div>

                <div className="pt-4 text-right space-y-1 text-sm mt-6">
                  <div
                    onClick={planId === "premium" ? undefined : handleUpgrade}
                    className={`${planId === "premium"
                        ? "text-[#94A3B8] cursor-default"
                        : "text-[#FFDB00] cursor-pointer"
                      }`}
                  >
                    Planı təkminləşdirmək
                  </div>
                  <div
                    onClick={() => {
                      localStorage.setItem("currentPlanId", "free");
                      navigate("/profile/settings/subscriptions");
                    }}
                    className="text-[#EF4042] cursor-pointer"
                  >
                    Abunəliyi ləğv etmək
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-3 mt-10">
                <input
                  type="checkbox"
                  id="autoRenewal"
                  className="w-4 h-4 accent-white border border-gray-600 rounded"
                />
                <label htmlFor="autoRenewal" className="text-gray-300 text-sm">
                  Mən robot deyiləm
                </label>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <button
                  onClick={handleBuy}
                  className={`${upgradeMode ? "flex-1" : "w-full"
                    } bg-[#3460DC] text-white py-3 px-4 rounded-lg font-medium transition-colors hover:bg-[#2a50ba] cursor-pointer`}
                >
                  Almaq
                </button>
                {upgradeMode && (
                  <button
                    onClick={() => navigate("/profile/settings/subscriptions")}
                    className="flex-1 bg-[#DC3434] hover:bg-[#bb2c2c] text-white py-3 px-4 rounded-lg font-medium transition-colors cursor-pointer"
                  >
                    Ləğv Etmək
                  </button>
                )}
              </div>
            </div>
          </div>
          <div className="flex-1 mb-4"></div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionInfo;
