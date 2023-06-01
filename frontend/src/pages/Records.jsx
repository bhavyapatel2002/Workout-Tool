import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getRecords, reset } from "../features/records/recordSlice";
import { Record, columns } from "../components/recordsTable/Columns";
import { DataTable } from "../components/recordsTable/DataTable";

function Records() {
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

    return (
        <DataTable columns={columns} data={records} />
    )
}

export default Records;
