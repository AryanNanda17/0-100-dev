export default function RevenueCard({
    title, 
    orderCount, 
    amount 
}){
    
    return <div className="bg-white rounded shadow-md p-4"> 
        <div className="text-gray-700">
            {title}
        </div>
        <div className="flex justify-between">
            <div className="font-bold">{amount}</div>
            <div>{orderCount?
                <div className="flex text-blue-500 cursor-pointer underline font-medium">
                    {orderCount} order(s)
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                </div>: null}
            </div>
        </div>
    </div> 
}