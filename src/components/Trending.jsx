import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTrendingCoins } from "../redux/coinsSlice";
import CoinTrending from "./CoinTrending";
import Skeleton from "./Skeleton";

const Trending = () => {
  const dispatch = useDispatch()
  const trendingCoins = useSelector(state => state.coins.trendingCoins.coins)
  const status = useSelector(state => state.coins.status)

  useEffect(() => {
    dispatch(fetchTrendingCoins());
  }, [dispatch])

  if (status === "loading") {
    return <div className="wrapper-container mt-8">
      <Skeleton className="h-8 w-32" />
      <Skeleton className="h-8 w-full mt-2" />
      <Skeleton className="h-8 w-full mt-2" />
      <Skeleton className="h-8 w-full mt-2" />
      <Skeleton className="h-8 w-full mt-2" />
    </div>
  }

  return (
    <div className="mt-8">
      <h1 className="text-xl mb-2 pb-4 font-bold">Criptomoedas em alta</h1>
      {trendingCoins && trendingCoins.map(coin => <CoinTrending key={coin.item.id} coin={coin.item} />)}
    </div>
  )
}

export default Trending
