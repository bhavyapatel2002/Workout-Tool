import React from "react";
import {
    Box,
    Heading,
    Container,
    Text,
    Button,
    Stack,
    Icon,
    useColorModeValue,
    createIcon,
    Flex,
    Divider,
} from "@chakra-ui/react";

function Hero() {
    return (
        <Flex
            minH="calc(100vh - 60px)"
            align={"center"}
            justify={"center"}
            bgGradient="linear(to-l, #FC5C7D, #6A82FB)"
        >
            <Container maxW={"3xl"}>
                <Stack
                    as={Box}
                    textAlign={"center"}
                    spacing={{ base: 8, md: 14 }}
                    py={{ base: 20, md: 36 }}
                >
                    <Heading
                        fontWeight={600}
                        fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
                        lineHeight={"110%"}
                        color={"white"}
                    >
                        True Strength Tracker <br />
                        <Text as={"span"} color={"white"}>
                            Workout Tool
                        </Text>
                    </Heading>
                    <Text color={"#ffffff"} fontSize={"2xl"}>
                        Log your exercises, track your true strength.
                    </Text>
                    <Stack
                        direction={"column"}
                        spacing={3}
                        align={"center"}
                        alignSelf={"center"}
                        position={"relative"}
                    >
                        <Button
                            px={6}
                            bg={"blue.400"}
                            color={"white"}
                            _hover={{
                                bg: "blue.500",
                            }}
                            size={"lg"}

                        >
                            Create an Account
                        </Button>
                        
                        <Button
                            variant={"link"}
                            color={"white"}
                            size={"sm"}
                        >
                            Log into existing account
                        </Button>
                    </Stack>
                </Stack>
            </Container>
        </Flex>
    );
}

export default Hero;
