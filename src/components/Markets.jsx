import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMarketCoins } from "../redux/coinsSlice";
import Coin from "./Coin";

const Markets = () => {
  const dispatch = useDispatch();
  const marketCoins = useSelector(state => state.coins.marketCoins);
  const status = useSelector(state => state.coins.status);
  // const error = useSelector(state => state.coins.error);

  useEffect(() => {

    if (marketCoins.length === 0 && status !== "loading") {

      dispatch(fetchMarketCoins());
    }

  }, [dispatch, marketCoins, status]);

  if (status === "loading") {
    return <div>Carregando...</div>;
  }

  // if (error) {
  //   return <div>Erro: {error}</div>;
  // }

  return (
    <section className="mt-8">
      <h1 className="text-2xl pb-8">Top 10 criptomoedas por capitalização de mercado</h1>
      {marketCoins.map(coin => <Coin key={coin.id} coin={coin} />)}
    </section>
  );
};

export default Markets;
