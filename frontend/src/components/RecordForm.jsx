import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createRecord } from "../features/records/recordSlice";

function RecordForm() {
    const initialState = {
        date: "",
        exercise: "",
        weight: "",
        reps: "",
    };

    const [formData, setFormData] = useState(initialState);

    const { date, exercise, weight, reps } = formData;

    const dispatch = useDispatch();

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const onSubmit = (e) => {
        e.preventDefault();

        dispatch(createRecord({ date, exercise, weight, reps }));
        setFormData(initialState);
    };

    return (
        <section className="form">
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="exercise">Date</label>
                    <input
                        type="date"
                        name="date"
                        id="date"
                        value={date}
                        onChange={onChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="exercise">Exercise Name</label>
                    <input
                        type="text"
                        name="exercise"
                        id="exercise"
                        value={exercise}
                        onChange={onChange}
                        placeholder="Please enter an exercise name"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="weight">Weight</label>
                    <input
                        type="text"
                        name="weight"
                        id="weight"
                        value={weight}
                        onChange={onChange}
                        placeholder="0"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="reps">Repetitions</label>
                    <input
                        type="text"
                        name="reps"
                        id="reps"
                        value={reps}
                        onChange={onChange}
                        placeholder="0"
                    />
                </div>
                <div className="form-group">
                    <button className="btn btn-block" type="submit">
                        Add Record
                    </button>
                </div>
            </form>
        </section>
    );
}

export default RecordForm;
