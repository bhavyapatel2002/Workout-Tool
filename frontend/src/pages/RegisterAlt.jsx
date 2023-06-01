import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Center,
  Text,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { PasswordField } from "../components/PasswordField";

export default function SignupCard() {
  return (
    <Flex
      minH="calc(100vh - 60px)"
      align={"center"}
      justify={"center"}
      bgGradient="linear(to-l, #FC5C7D, #6A82FB)"
    >
      <Stack spacing={4} mx={"auto"} maxW={"xl"} py={12} px={6}>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <Heading
              fontSize={"3xl"}
              bgGradient="linear(to-l, #FF0080, #7928CA)"
              bgClip="text"
            >
              <Center>Create a new account</Center>
            </Heading>
            <HStack>
              <FormControl id="firstName" isRequired>
                <Input type="text" placeholder="First Name" />
              </FormControl>
              <FormControl id="lastName">
                <Input type="text" placeholder="Last Name" />
              </FormControl>
            </HStack>
            <FormControl id="email">
              <Input type="email" placeholder="Email Address" />
            </FormControl>
            <PasswordField />
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Link color={"blue.400"}>Forgot password?</Link>
              </Stack>
              <Button
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
