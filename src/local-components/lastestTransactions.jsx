
const LastestTransactions = () => {
  return (
    <div className="w-full my-2">
    <Transaction />
    <Transaction />
    </div>
  )
}

export default LastestTransactions

const Transaction = () => {
    return(
        <div className="p-2 w-full flex items-center  ">
        <div className="rounded-md bg-stone-800 min-w-[40px] max-w-[50px] w-[10%] h-[40px] md:h-[50px]"></div>
        <div className="flex justify-between w-[90%] text-xs md:text-base p-2">
            <div>
                <p className="text-stone-500">Bought <span className="font bold text-white">Apple Stock</span></p>
            </div>
            <div>
            <p>+$380.00</p>
            </div>
        </div>
      </div>
        
    )
}