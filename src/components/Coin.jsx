import { Link } from "react-router-dom"
import { TrendingDown, TrendingUp } from "../icons/icons"
import { formatBRLCurrency } from "../utils/formatCurrency"

const Coin = ({ coin }) => {
  // console.log(coin)
  return (
    <Link to={`/coin/${coin.id}`}>
      <div className="grid grid-cols-2 sm:grid-cols-4 font-light p-2 rounded border-gray-200 border-b hover:bg-gray-200">
        <div className="flex item-center gap-2 w-full">
          <span className="font-semibold">{coin.market_cap_rank}.</span>
          <img className="w-8 h-8" src={coin.image} alt={coin.name} />
          <p>{coin.name}</p>
          <span className="text-xs">({coin.symbol})</span>
        </div>
        <div className="hidden sm:block">
          <span className="w-full text-center">{formatBRLCurrency(coin.current_price)}</span>
        </div>
        <div className="hidden sm:block">
          <span className={`flex gap-2 ${coin.price_change_percentage_24h < 0 ? "text-red-400" : "text-green-400"}`}>
            {coin.price_change_percentage_24h < 0 ? <TrendingDown /> : <TrendingUp />}
            {coin.price_change_percentage_24h}
          </span>
        </div>
        <div className="ml-7">
          <p className="font-semibold">Preço Atual</p>
          <span>{formatBRLCurrency(coin.current_price)}</span>
        </div>
      </div>
    </Link>
  )
}

export default Coin
