import Image from "next/image";

const User = () => {
  return (
    <div className="flex flex-col justify-center items-center">
    <div className="border--2 border--2 border-t-[3px] rounded-full p-3 border-b-none border-l-lime-500 border-r-lime-500 border-t-lime-500   border-dotted">
      <button className="rounded-full w-[70px] flex justify-center h-[70px] overflow-clip">
        <Image src="/assets/profile.jpg" alt='Profile Image' width={70} height={50}/>
      </button>
      </div>
      <p className="">Gift Okeoghene</p>
    </div>
  );
};

export default User;
