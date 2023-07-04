import React, { useState, useEffect } from "react";
import { Select } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import exerciseService from "../features/exercises/exerciseService";

function DropDown() {
    const { user } = useSelector((state) => state.auth);
    const [exercises, setExercises] = useState();

    useEffect(() => {
        async function apiCall() {
            const apiResponse = await exerciseService.getExercises(user);
            console.log(apiResponse);
            setExercises(apiResponse);
        }
        apiCall();
    }, []);

    return (
        <div>
            <Select placeholder="Select option">
                {exercises &&
                    exercises.map((exercise) => (
                        <option key={exercise.name} value={exercise.name}>
                            {exercise.name}
                        </option>
                    ))}
            </Select>
        </div>
    );
}

export default DropDown;
