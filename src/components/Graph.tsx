import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const Graph = () => {
    const data = {
        labels: [120, 110, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 0],
        datasets: [{
            label: '姿勢',
            data: [0, 4, 2, 3, 1, 5, 6, 1, 0, 2, 1, 4, 3],
            fill: false,
            tension: 0.1,
            borderColor: 'rgb(255, 255, 255)',
        }],
    };
    const options = {
        responsive : true,
        scales: {
            x: {
                title: { display: true, text: '時間(分前)' },
                grid: { color: 'rgb(255, 255, 255)' }
            },
            y: {
                title: { display: true, text: '姿勢(6段階)' },
                grid: { color: 'rgb(255, 255, 255)' }
            },
        },  
    };
    return (
        <div className="p-4 bg-black rounded-lg w-full h-[400px] flex justify-center">
            <Line data={data} options={options} />
        </div>
    )
};

export default Graph;