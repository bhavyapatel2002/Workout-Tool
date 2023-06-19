import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getRecords, reset } from "../features/records/recordSlice";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

function ChartTest() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { user } = useSelector((state) => state.auth);
    const { records, isLoading, isError, message } = useSelector(
        (state) => state.records
    );

    useEffect(() => {
        if (isError) {
            console.log(message);
        }

        if (!user) {
            navigate("/login");
        }

        dispatch(getRecords());

        return () => {
            dispatch(reset);
        };
    }, [user, navigate, isError, message, dispatch]);

    const data = {
        labels: ["Mon", "Tue", "Wed"],
        datasets: [
            {
                label: 'My Balance',
                fill: false,
                lineTension: 0.5,
                backgroundColor: '#db86b2',
                borderColor: '#B57295',
                borderCapStyle: 'butt',
                borderDashOffset: 0.0,
                borderJoinStyle: '#B57295',
                pointBorderColor: '#B57295',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: '#B57295',
                pointHoverBorderColor: '#B57295',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [500, 300, 400],
            }
        ]
    };

    const options = {
        scales: {
            x: {
                grid: {
                    display: false,
                },
            },
            y: {
                grid: {
                    borderDash: [3, 3],
                },
                // beginAtZero: true, // this works
            },
        },
        plugins: {
            legend: {
                display: false
            }
        }
    };

    return <Line data={data} options={options} />;
}

export default ChartTest;
