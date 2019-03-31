import React from 'react';
import { Line } from 'react-chartjs-2';

const Progress = props => {
  let checks = (allSets, firstSet, secondSet, thirdSet) => {
    let chartSetter = allSets;

    if (chartSetter) {
      return [
        // Starting Trophies
        chartSetter[firstSet],
        // Time
        chartSetter[secondSet],
        // Trophy Change
        chartSetter[thirdSet]
      ];
    } else return [undefined, undefined, undefined];
  };

  let collection = checks(
    props.allSets[0],
    props.firstSet,
    props.secondSet,
    props.thirdSet
  );

  const TROPHIES = () => {
    let liste = [],
      startingTrophies = collection[0],
      trophyChange = collection[2];

    if (startingTrophies !== undefined) {
      for (let i = 0; i < startingTrophies.length; i++) {
        let sumUp = startingTrophies[i] + trophyChange[i];
        if (sumUp !== 0) liste.unshift(sumUp);
        else liste.unshift(undefined);
      }

      return liste;
    } else return [undefined];
  };

  let time = date => {
    let s = date.split('');

    let year = `${s.slice(0, 4).join('')}`;
    let month = `${s.slice(4, 6).join('')}`;
    let day = `${s.slice(6, 8).join('')}`;

    return `${day}-${month}-${year}`;
  };

  const TIMEFY = () => {
    let liste = [],
      battleTime = collection[1];

    if (battleTime !== undefined) {
      for (let i = 0; i < battleTime.length; i++) {
        let timefy = time(battleTime[i]);
        liste.unshift(timefy);
      }
      return liste;
    } else return [undefined];
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
