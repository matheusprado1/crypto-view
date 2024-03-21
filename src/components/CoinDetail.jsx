import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { formatBRLCurrency } from "../utils/formatCurrency";
import { fetchCoinDetail } from "../redux/coinDetailSlice";
import { TrendingUp, TrendingDown } from "../icons/icons";

const CoinDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const coin = useSelector(state => state.coinDetail.coin);
  // const status = useSelector(state => state.coinDetail.status);
  // const error = useSelector(state => state.coinDetail.error);
  console.log

  useEffect(() => {
    dispatch(fetchCoinDetail(id));
  }, [dispatch, id]);

  // if (status === "loading") {
  //   return <div>Carregando detalhes da moeda...</div>;
  // }

  // if (error) {
  //   return <div>Erro: {error}</div>;
  // }

  if (!coin) {
    return <div>Não foi possível carregar os detalhes da moeda.</div>;
  }

  return (
    <div className="m-6">
      <div className="flex flex-col gap-2 items-start">
        <div className="flex gap-2 items-center">
          <img src={coin.image.small} alt={coin.name} />
          <div className="flex item-center gap-1 w-full">
            <h1 className="text-2xl mb-2 capitalize font-bold">{coin.name}</h1>
            <span className="text-xl">({coin.symbol})</span>
          </div>
        </div>
        <div>
          <span className="font-semibold">Preço Atual: </span>
          <span>{formatBRLCurrency(coin.market_data.current_price.brl)}</span>
        </div>
        <div className="flex item-center gap-5 w-full">
          <span className="text-green-400">
            Alta em 24Hrs: <TrendingUp />{formatBRLCurrency(coin.market_data.high_24h.brl)}
          </span>
          <span className="text-red-500">
            Baixa em 24Hrs: <TrendingDown />{formatBRLCurrency(coin.market_data.low_24h.brl)}
          </span>
        </div>
        <div>
          <span className="font-semibold">Volume de Mercado: </span>
          <span>{formatBRLCurrency(coin.market_data.total_volume.brl)}</span>
        </div>
      </div>
    </div>
  );
};

export default CoinDetail;
