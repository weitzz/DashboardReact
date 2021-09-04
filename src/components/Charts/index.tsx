import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const options: Highcharts.Options = {
  chart: {
    backgroundColor: '#272A33',
    type: 'column',
    width: 800,
  },
  series: [
    {
      type: 'line',
      data: [1, 2, 3, 4, 5],
    },
  ],
};

const Charts = (props: HighchartsReact.Props) => (
  <div>
    <HighchartsReact highcharts={Highcharts} options={options} {...props} />
  </div>
);

export default Charts;
