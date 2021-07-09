import React from "react";
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'


const options: Highcharts.Options = {
  title: {
      text: 'My chart'
  },
  series: [{
      type: 'line',
      data: [1, 2, 3]
  }]
}

const Charts = (props: HighchartsReact.Props) => <div>
    <HighchartsReact
        highcharts={Highcharts}
        options={options}
        {...props}
    />
</div>

export default Charts;
