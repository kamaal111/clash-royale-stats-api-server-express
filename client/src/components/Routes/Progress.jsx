import React from 'react';
import propTypes from 'prop-types';
import { Line } from 'react-chartjs-2';

const Progress = props => {
  let collection = [];

  if (props.allSets) {
    collection.push(props.allSets[0]);
    collection.push(props.allSets[1]);
    collection.push(props.allSets[2]);
  }

  // console.log(collection);

  const TROPHIES = () => {
    let liste = [];

    const startingTrophies = collection[0],
      trophyChange = collection[1];

    if (startingTrophies !== undefined) {
      for (let i = 0; i < startingTrophies.length; i++) {
        const sumUp = startingTrophies[i] + trophyChange[i];
        if (sumUp !== 0) liste.unshift(sumUp);
        else liste.unshift(undefined);
      }

      return liste;
    } else return [undefined];
  };

  let time = date => {
    const s = date.split('');

    const year = `${s.slice(0, 4).join('')}`,
      month = `${s.slice(4, 6).join('')}`,
      day = `${s.slice(6, 8).join('')}`;

    return `${day}-${month}-${year}`;
  };

  const TIMEFY = () => {
    let liste = [],
      battleTime = collection[2];

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

Progress.propTypes = {
  allSets: propTypes.array
};

export default Progress;
