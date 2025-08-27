import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/SubscriptionCard";

const Subscriptions = () => {
  const navigate = useNavigate();

  const [currentPlanId, setCurrentPlanId] = useState(() =>
    localStorage.getItem("currentPlanId") || "free"
  );

  useEffect(() => {
    const stored = localStorage.getItem("currentPlanId");
    setCurrentPlanId(stored || "free");
  }, []);

  const plans = [
    {
      id: "free",
      title: "Pulsuz Paket",
      price: "0",
      period: "",
      isCurrent: currentPlanId === "free",
      features: [
        "Əsas portaldan açıq məlumatlara giriş",
        "İctimai dashboardlara baxış",
        "Açıq məlumatların oxunması",
        "Məhdud axtarış funksiyalar",
      ],
    },
    {
      id: "standard",
      title: "Standart Paket",
      price: "10",
      originalPrice: "96",
      period: "Aylıq / İllik",
      isCurrent: currentPlanId === "standard",
      features: [
        "Əlavə analitik imkanlar və hesabat yükləmək",
        "PDF və Excel formatında senədləri yükləmək",
        "Daha geniş axtarış və filtr funksiyaları",
        "E-poçta yenilik bildirişləri almaq",
      ],
    },
    {
      id: "premium",
      title: "Premium Paket",
      price: "25",
      originalPrice: "240",
      period: "Aylıq / İllik",
      isCurrent: currentPlanId === "premium",
      features: [
        "Əlavə analitik imkanlar və hesabat yükləmək",
        "PDF və Excel formatında senadləri yükləmək",
        "Daha geniş axtarış və filtr funksiyaları",
        "E-poçta yenillik bildirişləri almaq",
        "Data yükləmə və paylaşma",
        "Eksklüziv dashboardlara çıxış",
        "Sürətli dəstək (priority support)",
      ],
    },
  ];

  const handleClick = (plan) => {
    navigate(`/profile/settings/subscriptions/${plan.id}`, { state: plan });
  };

  return (
    <div className="min-h-screen relative">

      <div className="flex justify-end md:pr-8 pt-8 min-h-screen">
        <div className="w-full max-w-[900px] flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 cursor-pointer">
            {plans.map((plan) => (
              <div
                key={plan.id}
                onClick={() => handleClick(plan)}
                className="w-full flex justify-center"
              >
                <Card {...plan} />
              </div>
            ))}
          </div>
          <div className="flex-1 mb-16"></div>
        </div>
      </div>
    </div>
  );
};

export default Subscriptions;
