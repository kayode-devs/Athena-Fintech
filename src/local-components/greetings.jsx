import AccountBalance from "./accountBalance"

const Greetings = () => {
  return (
    <div className="flex justify-between items-center">
      <p className="text-stone-400 flex self-start">Good Morning, <span className="text-white font-bold">Gift</span></p>
      <AccountBalance />
    </div>
  )
}

export default Greetings
