import download from '../../public/profile/download.svg'

const receipt = [
    {
        receiptId: "#5345",
        date: "14.02.2023",
        subscribtion: "Premium",
        payment: "BirBank",
        price: "25",
    }, {
        receiptId: "#5345",
        date: "14.02.2023",
        subscribtion: "Premium",
        payment: "BirBank",
        price: "25",
    }, {
        receiptId: "#5345",
        date: "14.02.2023",
        subscribtion: "Premium",
        payment: "BirBank",
        price: "25",
    }, {
        receiptId: "#5345",
        date: "14.02.2023",
        subscribtion: "Premium",
        payment: "BirBank",
        price: "25",
    }, {
        receiptId: "#5345",
        date: "14.02.2023",
        subscribtion: "Premium",
        payment: "BirBank",
        price: "25",
    }, {
        receiptId: "#5345",
        date: "14.02.2023",
        subscribtion: "Premium",
        payment: "BirBank",
        price: "25",
    },
]

const ReceiptDetails = () => {
    return (
        <div className="overflow-x-auto w-full py-5 mt-9 rounded-2xl bg-[#0706186E]">
            <table className="w-full border-separate border-spacing-y-4">
                <thead>
                    <tr className="text-left">
                        <th className="px-4 py-2">Ödənişin ID</th>
                        <th className="px-4 py-2">Abunelik</th>
                        <th className="px-4 py-2">Ödəniş</th>
                        <th className="px-4 py-2">Qiymət</th>
                        <th className="px-4 py-2">İnvoys</th>
                    </tr>
                </thead>

                <tbody>
                    {receipt.map((item, i) => (
                        <tr key={i} className="border-y border-gray-600">
                            <td className="px-4 py-3">{item.receiptId}</td>
                            <td className="px-4 py-3">{item.subscribtion}</td>
                            <td className="px-4 py-3">{item.payment}</td>
                            <td className="px-4 py-3">{item.price}</td>
                            <td className="px-4 py-3"><img src={download} /></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ReceiptDetails