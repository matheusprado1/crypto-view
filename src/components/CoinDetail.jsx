import { useParams } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import { formatBRLCurrency } from "../utils/formatCurrency";
import { TrendingUp } from "../icons/icons";
import { TrendingDown } from "../icons/icons";

const CoinDetail = () => {
  const { id } = useParams();

  const { response } = useAxios(`/coins/${id}?localization=false&tickers=false&market_data=true&community_data=false&sparkline=false`);
  // console.log(response)

  if (!response) {
    return <div>Carregando...</div>
  }

  return (
    <div className="m-6">
      <div className="flex flex-col gap-2 items-start">
        <div className="flex gap-2 items-center">
          <img src={response.image.small} alt={response.name} />
          <div className="flex item-center gap-1 w-full">
            <h1 className="text-2xl mb-2 capitalize font-bold">{response.name}
            </h1>
            <span className="text-xl">({response.symbol})</span>
          </div>
        </div>
        <div>
          <span className="font-semibold">Preço Atual: </span>
          <span>
            {formatBRLCurrency(response.market_data.current_price.brl)}
          </span>
        </div>
        <div className="flex item-center gap-5 w-full">
          <span className="text-green-400">Alta em 24Hrs: <TrendingUp />{formatBRLCurrency(response.market_data.high_24h.brl)}</span>
          <span className="text-red-500">Baixa em 24Hrs: <TrendingDown />{formatBRLCurrency(response.market_data.low_24h.brl)}</span>
        </div>
        <div>
          <span className="font-semibold">Volume de Mercado: </span>
          <span>{formatBRLCurrency(response.market_data.total_volume.brl)}</span>
        </div>
      </div>

    </div >
  )
}

export default CoinDetail
