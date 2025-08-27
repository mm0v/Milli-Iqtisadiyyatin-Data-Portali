import AccountSettingsNav from "@/components/AccountSettingsNav";
import Checkbox from "@/components/Checkbox";
import ProfileButton from "@/components/ProfileButton";
import { useState } from "react";

const reasons = [
  "Müvəqqəti fasilə vermək istəyirəm.",
  "İstədiyim funksiyaları tapa bilmirəm.",
  "Başqa bir hesab istifadə edirəm.",
  "Çoxlu bildiriş və ya spam alıram.",
  "Məlumatlarımın təhlükəsizliyi ilə bağlı narahatam.",
  "Digər",
];

const ProfileDeactivate = () => {

  const [selectedReason, setSelectedReason] = useState("");
  const [customReason, setCustomReason] = useState("");

  const handleSubmit = () => {
    const finalReason = selectedReason === "Digər" ? customReason : selectedReason;
    console.log("Sebeb", finalReason)
  }


  return (
    <div className="w-full h-screen">
      {/* <AccountSettingsNav /> */}
      <h3 className="text-white text-lg font-medium mb-14">Profiliniz və məzmununuz silinməyəcək, amma görünməz olacaq. Sonradan yenidən aktivləşdirə bilərsiniz. Zəhmət olmasa, səbəb seçin.</h3>

      <div className="deactive-form flex flex-col">
        {reasons.map((reason) => (
          <Checkbox reason={reason} selectedReason={selectedReason} setSelectedReason={setSelectedReason} />
        ))}

        {selectedReason === "Digər" && (

          <input
            type="text"
            placeholder="Səbəbi daxil edin..."
            value={customReason}
            onChange={(e) => setCustomReason(e.target.value)}
            className="mt-3 mb-8 w-xl px-4 py-2 bg-white text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        )}

        <ProfileButton value="Deaktiv et" width="w-xl" onClick={handleSubmit} />
      </div>


    </div>
  )
}

export default ProfileDeactivate