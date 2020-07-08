import React from 'react';
import {Bar,Line} from 'react-chartjs-2';

const state = {
  labels: ['January', 'February', 'March',
           'April', 'May','june','july'],
  datasets: [
    {
      label: 'Rainfall',
      backgroundColor: 'rgb(232, 116, 141)',
      borderColor: 'black',
      borderWidth: 2,
      data: [65, 59, 80, 81, 56,1,100]
    }
  ]
}

export default class Lines extends React.Component {
  render() {
    return (
      <div style={{width:"500px",height:"200px"}}>
        <Line
          data={state}
          options={{
            title:{
              display:true,
              text:'Line Graphs',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
    );
  }
}