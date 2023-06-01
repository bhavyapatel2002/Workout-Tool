import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
} from "@chakra-ui/react";
import { PasswordField } from "../components/PasswordField";
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { login, reset } from '../features/auth/authSlice'

export default function Login() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })

    const { email, password } = formData

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth)

    useEffect(() => {
        if (isError) {
            toast.error(message)
        }

        if (isSuccess || user) {
            navigate('/')
        }

        dispatch(reset())

    }, [user, isError, isSuccess, message, navigate, dispatch])

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()

        console.log()

        const userData = {
            email,
            password
        }

        dispatch(login(userData))
    }

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
                            Sign in to your account
                        </Heading>
                        <FormControl id="emailField">
                            <Input type="email" name="email" id="email" value={email} placeholder="Email Address" onChange={onChange} />
                        </FormControl>
                        <PasswordField name="password" id="password" value={password} onChange={onChange} />
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
                                onClick={onSubmit}
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
