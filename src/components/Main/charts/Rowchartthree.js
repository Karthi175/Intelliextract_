import React from 'react'
import Chart from 'chart.js/auto'

import { Doughnut} from 'react-chartjs-2';

const data = {
  labels: [],
datasets: [
{
label: 'Rainfall',
backgroundColor: [
'#B21F00',
'#C9DE00',
'#2FDE00',
'#00A6B4',
'#6800B4'
],
hoverBackgroundColor: [
'#501800',
'#4B5000',
'#175000',
'#003350',
'#35014F'
],
data: [65, 59, 80, 81, 56]
}
]
  };

const Rowchartthree = () => {
    
  return (
    <Doughnut data={data} />
  )
}

export default Rowchartthree