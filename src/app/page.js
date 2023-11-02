// import { UserButton } from '@clerk/nextjs'
import Link from "next/link";
import AccountBalance from "@/local-components/accountBalance";
import Greetings from "@/local-components/greetings";
import LastestTransactions from "@/local-components/lastestTransactions";
import {Fahkwang} from 'next/font/google'


const michroma = Fahkwang({subsets: ['latin'], weight: '700'})


const Home = () => {
  return (
    <div className="w-full  ">
      <Greetings/>
      <h1 className={`font-black ${michroma.className} hero-h1 text-[2.5rem] md:text-[3rem]`} >START <br /> <span className="text-lime-500">INVESTING</span></h1>
      <div className="mt-5">
        <h3 className="py-2 font-bold">Your Funds value</h3>
        <div className="h-52 flex justify-center items-center p-2 bg-stone-700 w-full">A graph</div>
      </div>
      <div className="mt-6">
        <p className="flex justify-between">Latest Transactions <span className="text-lime-500 text-xs mr-5"><Link href="#">see all</Link></span></p>
        <LastestTransactions />
        <LastestTransactions />
      </div>
    </div>
  );
};

export default Home;
// <UserButton afterSwitchSessionUrl='/'/>
