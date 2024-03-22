import { Link } from "react-router-dom"

const CoinTrending = ({ coin }) => {
  return (
    <div className="pb-2">
      <Link to={`/coin/${coin.id}`}>
        <div className="font-light p-2 border-gray-200 border-2 rounded hover:bg-gray-800 cursor-pointer">
          <div className="flex items-center gap-2">
            <span className="font-semibold">{coin.score + 1}.</span>
            <img className="w-6" src={coin.small} alt={coin.name} />
            <p className="font-semibold">{coin.name}</p>
            <small className="text-xs">({coin.symbol})</small>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default CoinTrending
