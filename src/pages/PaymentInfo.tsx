import AccountSettingsNav from "@/components/AccountSettingsNav";
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const PaymentInfo = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { planId, title, price } = location.state || {};

  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    cardNumber: "",
    expiryMonth: "",
    expiryYear: "",
    cvv: "",
    saveCard: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const [paymentCompleted, setPaymentCompleted] = useState(false);

  const handlePayment = () => {
    // console.log("Payment data:", formData);
    localStorage.setItem("currentPlanId", planId);
    setPaymentCompleted(true);
  };

  return (
    <div className="min-h-screen text-white p-6 relative">
      <div className="fixed inset-0 -z-10">
        <video autoPlay loop muted className="w-full h-full object-cover">
          <source src="/about/bg-about.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-black/60"></div>

      <div className="flex justify-end pr-8 pt-8 min-h-screen">
        <div className="w-full max-w-[900px] flex flex-col">
          <AccountSettingsNav activeTab="subscriptions" />
          <div
            className={`bg-[#070618CC]/85 p-16 rounded-xl space-y-6 ${
              paymentCompleted ? "w-[600px] mx-auto" : ""
            }`}
          >
            {!paymentCompleted ? (
              <>
                <h1 className="text-3xl font-medium text-center mb-20 text-[#F9F9F9]">
                  Ödəniş məlumatları
                </h1>

                <div className="w-[700px] mx-auto">
                  {/* Name Field */}
                  <div className="mb-6">
                    <label className="block text-[#F9F9F9] text-sm mb-2">
                      Ad
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-transparent border border-[#66666659] rounded-md p-3 text-white focus:border-[#3460DC] focus:outline-none"
                    />
                  </div>

                  <div className="mb-6">
                    <label className="block text-[#F9F9F9] text-sm mb-2">
                      Soyad
                    </label>
                    <input
                      type="text"
                      name="surname"
                      value={formData.surname}
                      onChange={handleInputChange}
                      className="w-full bg-transparent border border-[#66666659] rounded-md p-3 text-white focus:border-[#3460DC] focus:outline-none"
                    />
                  </div>

                  <div className="mb-6">
                    <label className="block text-[#F9F9F9] text-sm mb-2">
                      Kartın nömrəsi
                    </label>
                    <input
                      type="text"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                      className="w-full bg-transparent border border-[#66666659] rounded-md p-3 text-white focus:border-[#3460DC] focus:outline-none"
                    />
                  </div>

                  <div className="flex gap-1 items-center mb-6">
                    <div>
                      <label className="block text-[#F9F9F9] text-sm mb-2">
                        Ay / İl
                      </label>
                      <div className="flex items-center gap-1">
                        <input
                          type="text"
                          name="expiryDate"
                          value={formData.expiryDate}
                          onChange={(e) => {
                            let input = e.target.value;

                            let digits = input.replace(/\D/g, "");

                            if (digits.length > 4) digits = digits.slice(0, 4);

                            let formatted = digits;
                            if (digits.length > 2) {
                              formatted =
                                digits.slice(0, 2) + " / " + digits.slice(2);
                            } else if (
                              digits.length === 2 &&
                              !input.includes("/")
                            ) {
                              formatted = digits.slice(0, 2) + " / ";
                            }

                            setFormData((prev) => ({
                              ...prev,
                              expiryDate: formatted,
                            }));
                          }}
                          placeholder="AA / İİ"
                          maxLength={7}
                          className="w-30 border border-[#373641] rounded-md p-3 text-[#7C88AA] text-left placeholder-gray-500 focus:border-[#3460DC] focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="ml-6">
                      <label className="block text-[#F9F9F9] text-sm mb-2">
                        CVV
                      </label>
                      <input
                        type="text"
                        name="cvv"
                        value={formData.cvv}
                        onChange={handleInputChange}
                        placeholder="***"
                        maxLength="3"
                        className="w-30 border border-[#373641] rounded-md p-3 text-left text-[#7C88AA] placeholder-gray-500 focus:border-[#3460DC] focus:outline-none text-center"
                      />
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 mt-16">
                    <input
                      type="checkbox"
                      id="saveCard"
                      name="saveCard"
                      checked={formData.saveCard}
                      onChange={handleInputChange}
                      className="w-4 h-4 accent-white border border-gray-600 rounded"
                    />
                    <label
                      htmlFor="saveCard"
                      className="text-[#E6E6E7] text-sm"
                    >
                      Kartı yadda saxla
                    </label>
                  </div>

                  <div className="flex space-x-4 mt-6">
                    <button
                      onClick={handlePayment}
                      className="w-full bg-[#3460DC] hover:bg-[#2a50ba] text-white py-3 px-4 rounded-lg font-medium transition-colors cursor-pointer"
                    >
                      Ödəniş etmək
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <div className="text-center space-y-10">
                <h1 className="text-3xl font-medium">Ödəniş tamamlandı</h1>

                <div className="flex justify-center">
                  <div className="relative">
                    <img
                      src="./click.svg"
                      alt="Confirmation checkmark"
                      className="w-20 h-20 mx-auto mt-2"
                    />
                  </div>
                </div>

                <button
                  onClick={() => navigate("/subscriptions")}
                  className="w-full bg-[#3460DC] hover:bg-[#2a50ba] text-white py-3 px-4 rounded-lg font-medium transition-colors cursor-pointer"
                >
                  Bağla
                </button>
              </div>
            )}
          </div>
          <div
            className={`flex-1 ${paymentCompleted ? "mb-12" : "mb-4"}`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default PaymentInfo;
