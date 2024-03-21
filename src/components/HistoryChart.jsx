import { useParams } from "react-router-dom";
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
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCoinChart } from "../redux/coinDetailSlice";


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
  const dispatch = useDispatch();
  const { id } = useParams();
  const chart = useSelector(state => state.coinDetail.chart);
  console.log(chart);

  useEffect(() => {
    dispatch(fetchCoinChart(id));
  }, [dispatch, id])

  if (!chart) {
    return <div>Carregando Gráfico...</div>
  }

  const coinCharData = chart.prices.map(value => ({ x: value[0], y: value[1].toFixed(2) }));
  // console.log(coinCharData)

  const options = {
    responsive: true,
  }

  const data = {
    labels: coinCharData.map(value => moment(value.x).format("MMMDD")),
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
    <div>
      <h2>Gráfico de preço dos últimos 7 Dias</h2>
      <Line options={options} data={data} />
    </div>
  )

}

export default HistoryChart
