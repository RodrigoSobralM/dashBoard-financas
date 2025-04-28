import { Chart as ChartJS, ArcElement, Tooltip, Plugin } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import { CustomChartProps } from '@/types'

ChartJS.register(ArcElement, Tooltip)

const CustomChart = (props: CustomChartProps) => {
  const { data, labels, backgroundColor, centerTextMain, centerTextSub, type } =
    props

  const chartData = {
    labels,
    datasets: [
      {
        data,
        backgroundColor,
      },
    ],
  }

  const centerTextPlugin: Plugin<'doughnut'> = {
    id: 'centerTextPlugin',
    beforeDatasetsDraw(chart) {
      const { ctx } = chart
      const meta = chart.getDatasetMeta(0)

      if (!meta || !meta.data || !meta.data[0]) return
      const { x, y } = meta.data[0]

      ctx.save()
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'

      // Texto principal
      ctx.font = 'bold 32px "Public Sans", sans-serif'
      ctx.fillStyle = '#201F24'
      ctx.fillText(centerTextMain, x, y - 10)

      // Texto secundário
      ctx.font = '12px "Public Sans", sans-serif'
      ctx.fillStyle = '#696868'
      ctx.fillText(centerTextSub, x, y + 20)

      ctx.restore()
    },
  }

  const options = {
    borderWidth: 0,
    responsive: true,
    maintainAspectRatio: false,
    cutout: '75%',
  }

  return type === 'doughnut' ? (
    <Doughnut options={options} data={chartData} plugins={[centerTextPlugin]} />
  ) : null
}

export default CustomChart
