import Link from "next/link";



export const navlinks = [
  {
    href: "",
    icon: "",
    text: "Home",
  },
  {
    href: "",
    icon: "",
    text: "Invest",
  },
  {
    href: "",
    icon: "",
    text: "Withdraw",
  },
  {
    href: "",
    icon: "",
    text: "Deposit",
  },
  {
    href: "",
    icon: "",
    text: "History",
  },
];

export const NavOnMd = () => {
  return (
    <div className="flex flex-col mt-10 text-center text-zinc-400">
      {navlinks.map(({ href, icon, text }, index) => {
        return (
          <Link href="" key={index} className="p-2 text-sm w-full my-1">
            <p>{text}</p>
            {console.log(text)}
          </Link>
        );
      })}
    </div>
  );
};

export const MobileNav = () => {
  return <div className="fixed bottom-0">This should be the bottom navBar</div>;
};
