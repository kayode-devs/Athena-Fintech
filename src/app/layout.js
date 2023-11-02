import RightSideBar from "@/local-components/rightSideBar";
import "./globals.css";
import LeftSideBar from "@/local-components/leftSideBar";
// import { ClerkProvider } from "@clerk/nextjs";
import {Poppins} from 'next/font/google'


export const metadata = {
  title: "Athena",
  description: "Start investing today!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en"> 
      <body className="bg-stone-900 text-white">
        <main className="flex w-full p-2 h-[100vh]">
          <div className="hidden md:block md:w-[25%] lg:w-[17%]">
            <LeftSideBar />
          </div>
          <div className="w-full h-[95%] mt-6 lg:w-[63%] md:w-[73%] overflow-scroll  px-2 md:px-[3rem]">{children}</div>
          
          <div className="w-[20%]  hidden lg:block">
            <RightSideBar />
          </div>
        </main>
      </body>
    </html>
  );
}
