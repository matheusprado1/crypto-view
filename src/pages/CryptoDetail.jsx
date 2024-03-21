import HistoryChart from "../components/HistoryChart";
import CoinDetail from "../components/CoinDetail";

const CryptoDetail = () => {
  return (
    <div className="wrapper-container sm:flex">
      <CoinDetail />
      <HistoryChart />
    </div>
  )
}

export default CryptoDetail
