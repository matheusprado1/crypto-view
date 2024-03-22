import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMarketCoins } from "../redux/coinsSlice";
import Coin from "./Coin";
import Skeleton from "./Skeleton";

const Markets = () => {
  const dispatch = useDispatch()
  const marketCoins = useSelector(state => state.coins.marketCoins)
  const status = useSelector(state => state.coins.status)

  useEffect(() => {
    if (marketCoins.length === 0 && status !== "loading") {
      dispatch(fetchMarketCoins())
    }
  }, [dispatch, marketCoins, status])

  if (status === "loading") {
    return <div className="wrapper-container mt-8">
      <Skeleton className="h-8 w-32" />
      <Skeleton className="h-8 w-full mt-2" />
      <Skeleton className="h-8 w-full mt-2" />
      <Skeleton className="h-8 w-full mt-2" />
      <Skeleton className="h-8 w-full mt-2" />
      <Skeleton className="h-8 w-full mt-2" />
      <Skeleton className="h-8 w-full mt-2" />
      <Skeleton className="h-8 w-full mt-2" />
      <Skeleton className="h-8 w-full mt-2" />
    </div>
  }

  return (
    <section className="mt-8">
      <h2 className="text-xl pb-4 font-bold">Top 10 criptomoedas por capitalização de mercado</h2>
      {marketCoins.map(coin => <Coin key={coin.id} coin={coin} />)}
    </section>
  )
}

export default Markets;
