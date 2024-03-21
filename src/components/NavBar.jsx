import { LogoIcon, Wallet } from "../icons/icons";
import { useNavigate } from "react-router-dom";
import useMetamask from "../hooks/useMetamask";

const NavBar = () => {
  const { balance, isConnected, account, connectMetamask, isConnecting } = useMetamask();
  const navigate = useNavigate();

  return (
    <div className="bg-gray-800 h-20 flex items-center justify-between">
      <div className="wrapper-container w-full flex justify-between">
        <div className="flex items-center gap-1 cursor-pointer" onClick={() => navigate("/")}>
          <LogoIcon />
          <p className="font-semibold text-xl cursor-pointer"><span className="text-yellow-500">C</span>rypto<span className="text-yellow-500">V</span>iew</p>
        </div>
        <div className="flex items-center gap-4">
          {!isConnected && (
            <button onClick={connectMetamask} className={`bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded ${isConnecting ? "opacity-50 cursor-not-allowed" : ""}`} disabled={isConnecting}>
              <Wallet />
            </button>
          )}
          {isConnected && (
            <div className="flex-col">
              <p><span className="text-green-500 text-xs">{account}</span></p>
              <p className="text-xs"><span className="font-semibold">Saldo:</span> {balance} ETH</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default NavBar;
