import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import moment from "moment";
import { fetchCoinChart } from "../redux/coinDetailSlice";
import Skeleton from "./Skeleton";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const HistoryChart = () => {
  const dispatch = useDispatch()
  const { id } = useParams()
  const chart = useSelector(state => state.coinDetail.chart)

  useEffect(() => {
    dispatch(fetchCoinChart(id));
  }, [dispatch, id])

  if (!chart) {
    return <div className="wrapper-container mt-8">
      <Skeleton className="h-72 w-full mb-10" />
    </div>
  }

  const coinCharData = chart.prices.map(value => ({ x: value[0], y: value[1].toFixed(2) }))

  const options = {
    responsive: true,
  }

  const data = {
    labels: coinCharData.map(value => moment(value.x).format("DD/MMM")),
    datasets: [
      {
        fill: true,
        label: id,
        data: coinCharData.map(val => val.y),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      }
    ]
  }

  return (
    <div className="lg:w-2/3 mt-8">
      <h2 className="text-center text-sm font-semibold">Gráfico de preço dos últimos 7 dias</h2>
      <Line options={options} data={data} />
    </div>
  )

}

export default HistoryChart
