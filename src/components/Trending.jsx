import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTrendingCoins } from "../redux/coinsSlice";
import CoinTrending from "./CoinTrending";

const Trending = () => {
  const dispatch = useDispatch();
  const trendingCoins = useSelector(state => state.coins.trendingCoins.coins);
  // console.log(trendingCoins)
  // const status = useSelector(state => state.coins.status);
  const error = useSelector(state => state.coins.error);

  useEffect(() => {

    dispatch(fetchTrendingCoins());

  }, [dispatch]);

  // if (status === "loading") {
  //   return <div>Carregando...</div>;
  // }

  if (error) {
    return <div>Erro: {error}</div>;
  }

  return (
    <div className="mt-8">
      <h1 className="text-2xl mb-2">Em alta</h1>
      {trendingCoins && trendingCoins.map(coin => <CoinTrending key={coin.item.id} coin={coin.item} />)}
    </div>
  );
};

export default Trending;
