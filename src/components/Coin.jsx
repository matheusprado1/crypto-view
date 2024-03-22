import { Link } from "react-router-dom"
import { TrendingDown, TrendingUp } from "../icons/icons"
import { formatBRLCurrency } from "../utils/formatCurrency"

const Coin = ({ coin }) => {
  return (
    <Link to={`/coin/${coin.id}`}>
      <div className="grid grid-cols-2 sm:grid-cols-3 p-2 rounded border-gray-200 border-b hover:bg-gray-800">
        <div className="flex item-center gap-2 w-full">
          <span className="font-semibold">{coin.market_cap_rank}.</span>
          <img className="w-8 h-8" src={coin.image} alt={coin.name} />
          <p className="font-semibold">{coin.name}</p>
          <span className="text-xs uppercase">({coin.symbol})</span>
        </div>
        <div className="hidden sm:block">
          <span className="text-sm font-semibold">Alta/Baixa 24h</span>
          <span className={`flex gap-2 font-semibold ${coin.price_change_percentage_24h < 0 ? "text-red-400" : "text-green-400"}`}>
            {coin.price_change_percentage_24h < 0 ? <TrendingDown /> : <TrendingUp />}
            {coin.price_change_percentage_24h}
            %</span>
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
