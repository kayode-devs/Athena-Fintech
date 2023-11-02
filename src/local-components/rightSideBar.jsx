

const RightSideBar = () => {
    return (
      <div className="w-full h-full">
        <div className="bg-lime-500 flex justify-center items-center text-yellow-900 h-[49%] rounded-[40px] w-full my-1">
          <div className="h-[80%] w-[78%] flex flex-col justify-between items-center">
            <div className="w-full"><p className="">Investments status</p></div>
            <div className="grid grid-cols-2 text-center  font-light h-[80%] w-full place-content-start">
              <div className="p-4 border-b-[1px] border-b-yellow-900 ">
                <p className="w-fit"><span className="text-xs">Balance</span> <br /> <span className="text-2xl">$20.2</span></p>
              </div>
              <div className="p-4 border-l-[1px] border-l-yellow-900">
                <p className="w-fit"><span className="text-xs">Balance</span> <br /> <span className="text-2xl">$20.2</span></p>
              </div>
              <div className="p-5 ">
                <p className="w-fit"><span className="text-xs">Balance</span> <br /> <span className="text-2xl">$20.2</span></p>
              </div>
              <div className="p-5 border-t-[1px] border-t-yellow-900 border-l-[1px] border-l-yellow-900">
                <p className="w-fit"><span className="text-xs">Balance</span> <br /> <span className="text-2xl">$20.2</span></p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-yellow-800 h-[49%] w-full text-white rounded-[40px] my-2">
          <div className="p-5">
            <p className="font-bold">Spending Budget</p>
          </div>
        </div>
      </div>
    )
  }
  
  export default RightSideBar;
  