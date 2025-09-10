import { Link, Outlet, useLocation } from 'react-router-dom';
import eye from '../../public/profile/eye.svg'

const PaymentHistory = () => {
  const location = useLocation();
  const isReceipt = location.pathname.endsWith('/receipt');

  const payments = [
    { tarix: "2025-08-01", paket: "Pro Plan", mebleg: "50 AZN", status: "Ödənildi" },
    { tarix: "2025-08-05", paket: "Basic Plan", mebleg: "20 AZN", status: "Uğursuz oldu" },
    { tarix: "2025-08-10", paket: "Premium Plan", mebleg: "100 AZN", status: "Ödənildi" },
  ];

  return (
    <section className="flex flex-col w-full text-white">
      <h3 className="text-white text-4xl font-semibold mb-8">Ödəniş Tarixi</h3>
      {!isReceipt && (
        <>
          <div className='w-full md:w-[500px] flex justify-between border border-color-white rounded-md px-3 py-2'>
            <p>Növbəti ödəniş tarixi</p>
            <p className='text-[#B1B1B1]'>25.06.2025</p>
          </div>
          <div className="overflow-x-auto w-full py-5 mt-9 rounded-2xl bg-[#0706186E]">
            <table className="w-full border-separate border-spacing-y-4">
              <thead>
                <tr className="text-left">
                  <th className="px-4 py-2">Tarix</th>
                  <th className="px-4 py-2">Paket</th>
                  <th className="px-4 py-2">Məbləğ</th>
                  <th className="px-4 py-2">Status</th>
                  <th className="px-4 py-2">Qəbz</th>
                </tr>
              </thead>

              <tbody>
                {payments.map((p, index) => (
                  <tr key={index} className="border-y border-gray-600">
                    <td className="px-4 py-3">{p.tarix}</td>
                    <td className="px-4 py-3">{p.paket}</td>
                    <td className="px-4 py-3">{p.mebleg}</td>
                    <td className="px-4 py-3 flex items-center gap-2">
                      <span
                        className={`w-3 h-3 rounded-full ${p.status === "Ödənildi" ? "bg-green-400" : "bg-red-400"}`}
                      ></span>
                      <span>{p.status}</span>
                    </td>
                    <td className="px-4 py-3">
                      <Link to="receipt" className="px-3 py-1 rounded flex items-center gap-1">
                        <img src={eye} alt="View Receipt" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
      <Outlet />
    </section>
  );
};

export default PaymentHistory;
