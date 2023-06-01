import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import RecordForm from "../components/RecordForm";
import RecordItem from "../components/RecordItem";
import Spinner from "../components/Spinner";
import { getRecords, reset } from "../features/records/recordSlice";

function Dashboard() {
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

    if (isLoading) {
        return <Spinner />;
    }

    return (
        <>
            <section className="heading">
                <h1>Welcome {user && user.name}</h1>
                <p>Records</p>
            </section>

            <RecordForm />

            <section className="content">
                {records.length > 0 ? (
                    <div className="records">
                        {records.map((record) => (
                            <RecordItem key={record._id} record={record} />
                        ))}
                    </div>
                ) : (
                    <h3>No records</h3>
                )}
            </section>
        </>
    );
}

export default Dashboard;
