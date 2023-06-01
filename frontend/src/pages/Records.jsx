import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getRecords, reset } from "../features/records/recordSlice";
import { Record, columns } from "../components/recordsTable/Columns";
import { DataTable } from "../components/recordsTable/DataTable";
import {
    Flex,
    Box,
    Center,
    useColorModeValue,
    Heading,
    VStack,
} from "@chakra-ui/react";
import Header from "../components/Header";

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
                h="calc(100vh - 60px)"
                w="100%"
                bg={useColorModeValue("white", "gray.700")}
                boxShadow={"lg"}
                p={4}
            >
                <VStack>
                    <Heading
                        fontSize={"3xl"}
                        bgGradient="linear(to-l, #FF0080, #7928CA)"
                        bgClip="text"
                    >
                        <Center>{user.name}'s Records</Center>
                    </Heading>
                    <DataTable columns={columns} data={records} />
                </VStack>
            </Box>
        </Flex>
    );
}

export default Records;
