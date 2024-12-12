import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const Graph = () => {
    const data = {
        labels: [10, 20, 30, 40, 50, 60],
        datasets: [{
            label: '姿勢',
            data: [0, 0, 2, 3, 1, 3],
            fill: false,
            tension: 0.1,
            borderColor: 'rgb(255, 255, 255)',
        }],
    };
    const options = {
        responsive : true,
        scales: {
            x: {
                title: { display: true, text: '時間' },
                grid: { color: 'rgb(255, 255, 255)' }
            },
            y: {
                title: { display: true, text: '姿勢' },
                grid: { color: 'rgb(255, 255, 255)' }
            },
        },  
    };
    return (
        <div className="p-4 bg-black rounded-lg shadow-md w-full">
            <Line data={data} options={options} />
        </div>
    )
};

export default Graph;