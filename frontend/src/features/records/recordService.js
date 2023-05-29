import axios from 'axios'

const API_URL = '/api/records/'

// create new record
const createRecord = async (recordData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.post(API_URL, recordData, config)

    return response.data
}

// get user records
const getRecords = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.get(API_URL, config)

    return response.data
}

// delete record
const deleteRecord = async (goalId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.delete(API_URL + goalId, config)

    return response.data
}

const recordService = {
    createRecord, getRecords, deleteRecord
}

export default recordService