import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getRecords, reset } from "../features/records/recordSlice";
import { Record, columns } from "../components/recordsTable/Columns";
import { DataTable } from "../components/recordsTable/DataTable";
import { Flex, Box, useColorModeValue } from "@chakra-ui/react";

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

    return (
        <Flex
            minH="calc(100vh - 60px)"
            align={"center"}
            justify={"center"}
            bgGradient="linear(to-l, #FC5C7D, #6A82FB)"
        >
            <Box
                h="80vh"
                w="80vh"
                rounded={"lg"}
                bg={useColorModeValue("white", "gray.700")}
                boxShadow={"lg"}
                p={4}
            >
                <DataTable columns={columns} data={records} />
            </Box>
        </Flex>
    );
}

export default Records;
