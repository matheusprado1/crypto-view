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

  useEffect(() => {
    dispatch(fetchCoinDetail(id));
  }, [dispatch, id]);

  if (!coin || coin.id !== id) {
    return <div className="wrapper-container mt-8">
      <Skeleton className="h-8 w-80 mb-4" />
      <Skeleton className="h-72 w-80 mb-10" />
    </div>;
  }

  return (
    <div className="max-w-s rounded-lg bg-gray-700 shadow-md overflow-hidden m-6">
      <div className="flex items-center justify-center p-1 bg-gray-800">
        <img className="h-12 w-12" src={coin.image.small} alt={coin.name} />
      </div>
      <div className="flex-col px-4 py-2">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <div className="font-bold sm:text-xl mr-2 uppercase">{coin.name}</div>
            <div className="font-bold sm:text-xl mr-2 uppercase">({coin.symbol})</div>
          </div>
          <p className="text-xl text-gray-300">
            <span>{formatBRLCurrency(coin.market_data.current_price.brl)}</span>
          </p>
        </div>
        <div className="flex justify-between items-center mb-4">
          <span className="text-green-500">
            Alta em 24Hrs <TrendingUp />{formatBRLCurrency(coin.market_data.high_24h.brl)}
          </span>
          <span className="text-red-500">
            Baixa em 24Hrs <TrendingDown />{formatBRLCurrency(coin.market_data.low_24h.brl)}
          </span>
        </div>
        <p className="text-base">
          <span className="font-semibold">Volume de Mercado: </span>
          <span>{formatBRLCurrency(coin.market_data.total_volume.brl)}</span>
        </p>
      </div>
    </div>
  );
};

export default CoinDetail;
