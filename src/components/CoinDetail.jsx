import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { formatBRLCurrency } from "../utils/formatCurrency";
import { fetchCoinDetail } from "../redux/coinDetailSlice";
import { TrendingUp, TrendingDown } from "../icons/icons";
import Skeleton from "./Skeleton";

const CoinDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const coin = useSelector(state => state.coinDetail.coin);
  console.log(coin)

  useEffect(() => {
    dispatch(fetchCoinDetail(id))
  }, [dispatch, id])

  if (!coin || coin.id !== id) {
    return <div className="wrapper-container mt-8">
      <Skeleton className="h-72 w-full mb-10" />
    </div>
  }

  return (
    <div className="rounded-lg bg-gray-700 shadow-md overflow-hidden m-6">
      <div className="flex items-center justify-start p-3 gap-1 bg-gray-800">
        <img className="h-12 w-12" src={coin.image.small} alt={coin.name} />
        <h2 className="font-bold sm:text-xl">{coin.name}</h2>
        <span className="text-sm text-gray-700 bg-gray-400 font-bold rounded-lg px-2">#{coin.market_cap_rank}</span>
      </div>
      <div className="flex-col px-4 py-2">
        <div className="flex justify-between items-center mb-4 relative">
          <p className="font-bold sm:text-xl uppercase">{coin.symbol}</p>
          <p className="text-xl font-semi">
            <span className="font-semibold"> {formatBRLCurrency(coin.market_data.current_price.brl)} </span>
            <small className={`text-xs font-semibold ${coin.market_data.price_change_percentage_24h_in_currency.brl >= 0 ? 'text-green-500' : 'text-red-500'}`}>
              {coin.market_data.price_change_percentage_24h_in_currency.brl.toFixed(2)}%
            </small>
          </p>
        </div>
        <div className="flex justify-between items-center mb-4">
          <span className="text-green-500 font-semibold">
            Alta 24h <TrendingUp />{formatBRLCurrency(coin.market_data.high_24h.brl)}
          </span>
          <span className="text-red-500 font-semibold">
            Baixa 24h <TrendingDown />{formatBRLCurrency(coin.market_data.low_24h.brl)}
          </span>
        </div>
        <div className="overflow-auto scrollbar">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-800">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider whitespace-nowrap">Volume de Mercado</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider whitespace-nowrap">Valor de Mercado</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider whitespace-nowrap">Fornecimento Total</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">{formatBRLCurrency(coin.market_data.total_volume.brl)}</td>
                <td className="px-6 py-4 whitespace-nowrap">{formatBRLCurrency(coin.market_data.market_cap.brl)}</td>
                <td className="px-6 py-4 whitespace-nowrap">{coin.market_data.total_supply}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default CoinDetail;
