import React from "react";
import { Button } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { deleteRecord } from "../../features/records/recordSlice";

function DeleteRecordButton({ id }) {
    const dispatch = useDispatch();

    const onClick = () => {
        console.log(id);
        dispatch(deleteRecord(id))
    };

    return <Button onClick={onClick}>Delete</Button>;
}

export default DeleteRecordButton;
