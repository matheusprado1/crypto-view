import { useState, useEffect } from "react";
import Web3 from "web3";

const useMetamask = () => {
  const [account, setAccount] = useState(null);
  const [balance, setBalance] = useState(null);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const checkMetamask = async () => {
      if (window.ethereum) {
        try {
          const accounts = await window.ethereum.request({ method: "eth_accounts" });
          if (accounts.length > 0) {
            setAccount(accounts[0]);
            setIsConnected(true);
            const web3 = new Web3(window.ethereum);
            const balance = await web3.eth.getBalance(accounts[0]);
            setBalance(web3.utils.fromWei(balance, "ether"));
          }
        } catch (error) {
          console.error("Falha ao conectar com a Metamask", error);
        }
      }
    };

    checkMetamask();
  }, []);

  const connectMetamask = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        if (accounts.length > 0) {
          setAccount(accounts[0]);
          setIsConnected(true);
          const web3 = new Web3(window.ethereum);
          const balance = await web3.eth.getBalance(accounts[0]);
          setBalance(web3.utils.fromWei(balance, "ether"));
        }
      } catch (error) {
        console.error("Falha ao conectar com a Metamask", error);
      }
    } else {
      alert("Por favor, instale a extensão Metamask para continuar.");
    }
  };

  return { account, balance, isConnected, connectMetamask };
};

export default useMetamask;