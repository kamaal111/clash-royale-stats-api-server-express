import React from 'react';
import { Line } from 'react-chartjs-2';

const Progress = props => {
  let setters = props.playerChart[0];

  let { startingTrophies } = setters;
  let { battleTime } = setters;
  let { trophyChange } = setters;

  const TROPHIES = () => {
    let liste = [];
    for (let i = 0; i < startingTrophies.length; i++) {
      let sumUp = startingTrophies[i] + trophyChange[i];
      if (sumUp !== 0) liste.push(sumUp);
      else liste.push(undefined);
    }
    return liste;
  };

  let time = date => {
    let s = date.split('');

    let year = `${s.slice(0, 4).join('')}`;
    let month = `${s.slice(4, 6).join('')}`;
    let day = `${s.slice(6, 8).join('')}`;
    let hour = `${s.slice(9, 11).join('')}`;
    let minute = `${s.slice(11, 13).join('')}`;
    let second = `${s.slice(13, 15).join('')}`;

    return `${day}-${month}-${year} ${hour}:${minute}:${second}`;
  };

  const TIMEFY = () => {
    let liste = [];
    for (let i = 0; i < battleTime.length; i++) {
      let timefy = time(battleTime[i]);
      liste.push(timefy);
    }
    return liste;
  };

  let data = {
    labels: TIMEFY(),

    datasets: [
      {
        label: 'Trophy Progress',
        fill: true,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: TROPHIES()
      }
    ]
  };

  return (
    <div>
      <h4>
        <center>Trophy Progress</center>
      </h4>
      <Line data={data} />
    </div>
  );
};

export default Progress;
