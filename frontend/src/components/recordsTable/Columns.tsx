import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { createColumnHelper } from "@tanstack/react-table";
import { DataTable } from "./DataTable";

export type Record = {
    exercise: string;
    weight: string;
    reps: number;
};

const columnHelper = createColumnHelper<Record>();

export const columns = [
    columnHelper.accessor("exercise", {
        cell: (info) => info.getValue(),
        header: "Exercise",
    }),
    columnHelper.accessor("weight", {
        cell: (info) => info.getValue(),
        header: "Weight",
        meta: {
            isNumeric: true,
        },
    }),
    columnHelper.accessor("reps", {
        cell: (info) => info.getValue(),
        header: "Repetitions",
        meta: {
            isNumeric: true,
        },
    }),
];