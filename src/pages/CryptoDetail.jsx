import CoinDetail from "../components/CoinDetail";
import HistoryChart from "../components/HistoryChart";

const CryptoDetail = () => {
  return (
    <div className="wrapper-container lg:flex">
      <CoinDetail />
      <HistoryChart />
    </div>
  )
}

export default CryptoDetail
