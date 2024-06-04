import React from 'react';
import { Chart } from 'primereact/chart';
import { useTranslation } from 'next-i18next';

const Doughnut = ({ labels, data, bgClr, hvrClr, type }) => {
    const { t } = useTranslation('translation');

    const chartData = {
        labels,
        datasets: [
            {
                data: data, // Set a minimum value of 0.1 for data points
                backgroundColor: bgClr, // Generate colors based on data length
                hoverBackgroundColor: hvrClr
            }]
    };
    const options = {
        plugins: {
            tooltip: {
                callbacks: {
                    title: () => null,
                    label: function (context) {
                        let val = context.raw || '';
                        return context.label + " " + val;
                    }
                }
            },
            legend: {
                position: "bottom",
                align: "center",
                labels: {
                    usePointStyle: true,
                    pointStyle: "rect",
                    color: '#495057',
                }
            },

        },
        maintainAspectRatio: false, // This prevents the chart from maintaining a constant aspect ratio
        responsive: true,
        aspectRatio: 1,
        animation: {
            animateRotate: false // Disable rotation animation
        }
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '440px' }}>
            {data && data.every(value => value === 0) ? (
                <div>{t('no_data_available')}</div>
            ) : (
                <Chart type={type || "doughnut"} data={chartData} options={options} style={{ minHeight: "440px" }} />
            )}
        </div>
    );
}

export default Doughnut;
