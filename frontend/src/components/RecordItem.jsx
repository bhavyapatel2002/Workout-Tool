import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteRecord } from '../features/records/recordSlice'

function RecordItem({ record }) {
    const dispatch = useDispatch()

    return (
        <div className="record">
            <div>
                {new Date(record.createdAt).toLocaleString('en-US')}
            </div>
            <h4>{record.exercise}</h4>
            <h4>{record.reps} reps of {record.weight}</h4>
            <button onClick={() => dispatch(deleteRecord(record._id))} className='close'>
                X
            </button>
        </div>
    )
}

export default RecordItem