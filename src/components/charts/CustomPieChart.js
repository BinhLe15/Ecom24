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

function CustomPieChart({labels, value, colors }) {

	const data = {
		labels: labels,
		datasets: [
			{
				data: value,
				backgroundColor: colors,
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