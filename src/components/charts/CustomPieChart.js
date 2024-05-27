import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';
import '../../App.css';
import {
	Chart as ChartJS,
	ArcElement,
	Tooltip,
	Legend,
} from 'chart.js';

ChartJS.register(
	ArcElement,
	Tooltip,
	
);

function CustomPieChart({labels, value }) {

	const data = {
		labels: labels,
		datasets: [
			{
				data: value,
				backgroundColor: [ '#205BC8', '#C61D23', '#FFCD44', '#1D2730', '#90EE90'],
				borderColor: '#fff',
			},
		],
	};

	return (
		<div className='stats_pieChart'>
			<Doughnut
				data={data}
				options={{
					maintainAspectRatio: false,
				}}
			/>
		</div>

	);
}

export default CustomPieChart;