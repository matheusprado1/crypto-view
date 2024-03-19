import HistoryChart from "../components/HistoryChart";
import CoinDetail from "../components/CoinDetail";

const CryptoDetail = () => {
  return (
    <div className="wrapper-container mt-10">
      <CoinDetail />
      <HistoryChart />
    </div>
  )
}

export default CryptoDetail
