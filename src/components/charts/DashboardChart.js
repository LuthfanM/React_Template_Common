import React, { useState, useEffect } from 'react';
import Chart from "react-apexcharts";
import DataChart from "../../helpers/datacolumn/dashboard-linechart.json";
import { TRIPLE_WIDTH } from '../../utils/constants';

const DashboardChart=(props)=> {

    const dataChart = DataChart;

    return (
        <Chart
            options={dataChart.options}
            series={dataChart.series}
            type={props.type}
            width={TRIPLE_WIDTH}
        />
    );
}

export default DashboardChart;