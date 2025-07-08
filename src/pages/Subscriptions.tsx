// import Card from "../components/SubscriptionCard";

import AccountSettingsNav from "@/components/AccountSettingsNav";

const Subscriptions = () => {
  // const plans = [
  //   {
  //     title: "Pulsuz Paket",
  //     price: "0",
  //     period: "",
  //     isCurrent: true,
  //     features: [
  //       "Əsas portaldan açıq məlumatlara giriş",
  //       "İctimai dashboardlara baxış",
  //       "Açıq məlumatların oxunması",
  //       "Məhdud axtarış funksiyalar",
  //     ],
  //   },
  //   {
  //     title: "Standart Paket",
  //     price: "10",
  //     originalPrice: "96",
  //     period: "Aylıq / İllik",
  //     features: [
  //       "Əlavə analitik imkanlar və hesabat yükləmək",
  //       "PDF və Excel formatında senədləri yükləmək",
  //       "Daha geniş axtarış və filtr funksiyaları",
  //       "E-poçta yenilik bildirişləri almaq",
  //     ],
  //   },
  //   {
  //     title: "Premium Paket",
  //     price: "25",
  //     originalPrice: "240",
  //     period: "Aylıq / İllik",
  //     features: [
  //       "Əlavə analitik imkanlar və hesabat yükləmək",
  //       "PDF və Excel formatında senadləri yükləmək",
  //       "Daha geniş axtarış və filtr funksiyaları",
  //       "E-poçta yenillik bildirişləri almaq",
  //       "Data yükləmə və paylaşma",
  //       "Eksklüziv dashboardlara çıxış",
  //       "Sürətli dəstək (priority support)",
  //     ],
  //   },
  // ];

  return (
    <div className="min-h-screen w-full relative ">

      <div className="flex justify-end pr-8 pt-8 min-h-screen w-full">
        <div className="w-full max-w-[900px] flex flex-col">
          <AccountSettingsNav activeTab="subscriptions" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 cursor-pointer">
            {/* {plans.map((plan, index) => (
              <Card
                key={index}
                title={plan.title}
                price={plan.price}
                originalPrice={plan.originalPrice}
                period={plan.period}
                features={plan.features}
                isCurrent={plan.isCurrent}
              />
            ))} */}
          </div>

          <div className="flex-1 mb-16"></div>
        </div>
      </div>

      <div className="absolute bottom-0">
              {/* Profile Side bar */}
      </div>
    </div>
  );
};

export default Subscriptions;
