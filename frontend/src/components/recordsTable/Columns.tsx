import * as React from "react";
import { Button, ChakraProvider } from "@chakra-ui/react";
import { createColumnHelper } from "@tanstack/react-table";
import DeleteRecordButton from "./DeleteRecordButton";
import AddRecordButton from "./AddRecordButton";

export type Record = {
    _id: string,
    date: Date,
    exercise: string;
    weight: string;
    reps: number;
    delete: typeof Button;
};

const columnHelper = createColumnHelper<Record>();

export const columns = [
    columnHelper.accessor("date", {
        cell: props => <>{new Date(props.getValue()).toLocaleDateString()}</>,
        header: "Date",
    }),
    columnHelper.accessor("exercise", {
        cell: props => props.getValue(),
        header: "Exercise",
    }),
    columnHelper.accessor("weight", {
        cell: props => <div>{props.getValue()}</div>,
        header: "Weight",
    }),
    columnHelper.accessor("reps", {
        cell: props => <div>{props.getValue()}</div>,
        header: "Repetitions",
    }),
    columnHelper.accessor("_id", {
        cell: props => <DeleteRecordButton id={props.getValue()} />,
        header: '',
        meta: {
            isNumeric: true,
        },
    }),
];