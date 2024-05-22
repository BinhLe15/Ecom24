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
	Legend,
);

function CustomPieChart({ }) {

	const data = {
		labels: ['Food', 'Transportation', 'Rent', 'Utilities', 'Other'],
		datasets: [
			{
				data: [30, 15, 25, 10, 20],
				backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#FFEA8A', '#90EE90'],
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