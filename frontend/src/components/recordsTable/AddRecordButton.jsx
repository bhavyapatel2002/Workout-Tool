import React from "react";
import { Button } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { addRecord } from "../../features/records/recordSlice";

function AddRecordButton({ id }) {
    const dispatch = useDispatch();

    const onClick = () => {
        console.log('testing')
    }

    return <Button onClick={onClick}>Add Record</Button>;
}

export default AddRecordButton;