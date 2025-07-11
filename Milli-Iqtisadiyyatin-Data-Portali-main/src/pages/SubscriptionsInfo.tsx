import React, { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import AccountSettingsNav from "@/components/AccountSettingsNav";

const planOrder = ["free", "standard", "premium"];

const SubscriptionInfo = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { planId } = useParams();

  const plan = state || {
    title: "Unknown",
    price: "-",
    period: "-",
    features: [],
    isCurrent: false,
  };
  console.log(plan.isCurrent);
  const [upgradeMode, setUpgradeMode] = useState(false);

  const handleUpgrade = () => {
    const currentIndex = planOrder.indexOf(planId);
    const nextPlanId = planOrder[currentIndex + 1];
    if (nextPlanId) {
      navigate(`/subscriptions/${nextPlanId}`, {
        state:
          nextPlanId === "standard"
            ? {
                title: "Standart Paket",
                price: "10",
                period: "Aylıq",
                features: [
                  "Əlavə analitik imkanlar və hesabat yükləmək",
                  "PDF və Excel formatında senədləri yükləmək",
                  "Daha geniş axtarış və filtr funksiyaları",
                  "E-poçta yenilik bildirişləri almaq",
                ],
              }
            : {
                title: "Premium Paket",
                price: "25",
                period: "Aylıq",
                features: [
                  "Əlavə analitik imkanlar və hesabat yükləmək",
                  "PDF və Excel formatında senədləri yükləmək",
                  "Daha geniş axtarış və filtr funksiyaları",
                  "E-poçta yenillik bildirişləri almaq",
                  "Data yükləmə və paylaşma",
                  "Eksklüziv dashboardlara çıxış",
                  "Sürətli dəstək (priority support)",
                ],
              },
      });
    }
    setUpgradeMode(true);
  };

  const handleBuy = () => {
    if (planId === "free") {
      //   alert("Pulsuz paket aktiv edildi!");
      localStorage.setItem("currentPlanId", "free");
      navigate("/subscriptions");
    } else {
      navigate("/payment", {
        state: {
          planId,
          price: plan.price,
          title: plan.title.replace(" Paket", ""),
        },
      });
    }
  };

  return (
    <div className="min-h-screen text-white p-6 relative">
      <div className="fixed inset-0 -z-10">
        <video autoPlay loop muted className="w-full h-full object-cover">
          <source src="/about/bg-about.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="flex justify-end pr-8 pt-8 min-h-screen">
        <div className="w-full max-w-[900px] flex flex-col">
          <AccountSettingsNav activeTab="subscriptions" />
          <div className="bg-[#070618CC]/85 p-16 rounded-xl space-y-6">
            <h1 className="text-3xl font-medium text-center mb-20 text-[#F9F9F9]">
              Abunəliyin məlumatları
            </h1>

            <div className="w-[700px] mx-auto">
              <div className="border border-[#66666659] p-8 rounded-md space-y-4">
                <div className="text-xl mb-4">
                  {plan.title.replace(" Paket", "")}
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white">Aylıq</span>
                  <span className="text-white">{plan.price}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white">Valuta</span>
                  <span className="text-white">AZN</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white">Bitmə tarixi</span>
                  <span className="text-white">30.05.2025 16:00</span>
                </div>

                <div className="pt-4 text-right space-y-1 text-sm mt-6">
                  <div
                    onClick={planId === "premium" ? undefined : handleUpgrade}
                    className={`${
                      planId === "premium"
                        ? "text-[#94A3B8] cursor-default"
                        : "text-[#FFDB00] cursor-pointer"
                    }`}
                  >
                    Planı təkminləşdirmək
                  </div>
                  <div
                    onClick={() => navigate("/subscriptions")}
                    // className={`${
                    //   plan.isCurrent && planId !== "free"
                    //     ? "text-[#EF4042] cursor-pointer"
                    //     : "text-[#94A3B8] cursor-default"
                    // }`}
                    className="text-[#EF4042] cursor-pointer"
                  >
                    Abunəliyi ləğv etmək
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-3 mt-16">
                <input
                  type="checkbox"
                  id="autoRenewal"
                  className="w-4 h-4 accent-white border border-gray-600 rounded"
                />
                <label htmlFor="autoRenewal" className="text-gray-300 text-sm">
                  Mən robot deyiləm
                </label>
              </div>

              <div className="flex space-x-4 mt-6">
                <button
                  onClick={!plan.isCurrent ? handleBuy : undefined}
                  disabled={plan.isCurrent}
                  className={`${
                    upgradeMode ? "flex-1" : "w-full"
                  } bg-[#3460DC] text-white py-3 px-4 rounded-lg font-medium transition-colors ${
                    plan.isCurrent
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:bg-[#2a50ba] cursor-pointer"
                  }`}
                >
                  Almaq
                </button>
                {upgradeMode && (
                  <button
                    onClick={() => navigate("/subscriptions")}
                    className="flex-1 bg-[#DC3434] hover:bg-[#bb2c2c] text-white py-3 px-4 rounded-lg font-medium transition-colors"
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

      {/* <div className="absolute bottom-0"></div> */}
    </div>
  );
};

export default SubscriptionInfo;
