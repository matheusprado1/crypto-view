import useAxios from "../hooks/useAxios"
import Coin from "./Coin";

const Markets = () => {
  const { response } = useAxios("/coins/markets?vs_currency=brl&order=market_cap_desc&per_page=10&page=1&sparkline=false");
  // console.log(response)

  return (
    <section className="mt-8">
      <h1 className="text-2xl">Markets</h1>
      {response && response.map(coin => <Coin key={coin.id} coin={coin} />)}
    </section>
  )
}

export default Markets
