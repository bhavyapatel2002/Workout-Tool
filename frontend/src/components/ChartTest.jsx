import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getRecords, reset } from "../features/records/recordSlice";
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip,
    TimeScale
} from "chart.js";
import 'chartjs-adapter-date-fns';
import { Line } from "react-chartjs-2";

ChartJS.register(LineElement, LinearScale, TimeScale, PointElement, Tooltip);

function ChartTest() {
    let dates = null
    let values = null
    
    const extractMonths = (records) => {
        let tempRecords = records   // use filter or something else here to only include options of whatever exercise the user selected
        dates = tempRecords.map((record) => (record.date));
        values = tempRecords.map((record) => (record.weight));  // over here I need to look at the weight and reps and map it into projected 1RM
        // better approach to above idea might be to store the projected 1RM in the database at the time the record is created
    }
    // line chart is going to be messed up until its dates array is sorted in chronological order (and values as well)

    
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

    console.log(records)
    extractMonths(records)
    console.log(dates)
    console.log(values)

    const data = {
        labels: dates,
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
                data: values,
            }
        ]
    };

    const options = {
        scales: {
            x: {
                grid: {
                    display: false,
                },
                type: 'time',
                time: {
                    unit: 'day'
                }
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
