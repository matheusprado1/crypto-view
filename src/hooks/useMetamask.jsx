import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Web3 from "web3";
import { setAccount, setBalance, setIsConnected } from "../redux/metamaskSlice";

const useMetamask = () => {
  const dispatch = useDispatch();
  const { account, balance, isConnected } = useSelector((state) => state.metamask)

  useEffect(() => {
    const checkMetamask = async () => {
      if (window.ethereum) {
        try {
          const accounts = await window.ethereum.request({ method: "eth_accounts" });
          if (accounts.length > 0) {
            dispatch(setAccount(accounts[0]));
            dispatch(setIsConnected(true));
            const web3 = new Web3(window.ethereum);
            const balance = await web3.eth.getBalance(accounts[0]);
            dispatch(setBalance(web3.utils.fromWei(balance, "ether")));
          }
        } catch (error) {
          console.error("Falha ao conectar com a Metamask", error);
        }
      }
    }

    checkMetamask()
  }, [dispatch])

  const connectMetamask = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" })
        if (accounts.length > 0) {
          dispatch(setAccount(accounts[0]))
          dispatch(setIsConnected(true))
          const web3 = new Web3(window.ethereum)
          const balance = await web3.eth.getBalance(accounts[0])
          dispatch(setBalance(web3.utils.fromWei(balance, "ether")))
        }
      } catch (error) {
        console.error("Falha ao conectar com a Metamask", error)
      }
    } else {
      alert("Por favor, instale a extensão Metamask para continuar.")
    }
  }

  return { account, balance, isConnected, connectMetamask }
}

export default useMetamask
