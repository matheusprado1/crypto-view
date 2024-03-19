import useAxios from "../hooks/useAxios"
import CoinTrending from "./CoinTrending";

const Trending = () => {
  const { response } = useAxios("/search/trending");
  console.log(response)

  const limitedCoins = response && response.coins.slice(0, 10);

  return (
    <div className="mt-8">
      <h1 className="text-2xl mb-2">Trending</h1>
      {limitedCoins && limitedCoins.map(coin => <CoinTrending key={coin.item.id} coin={coin.item} />)}
    </div>
  )
}

export default Trending