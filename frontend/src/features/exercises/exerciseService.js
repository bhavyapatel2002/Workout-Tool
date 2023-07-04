import axios from 'axios'

const API_URL = '/api/exercises/'

// get user exercises
const getExercises = async (user) => {
    //console.log('hererererer')
    //console.log(user._id)
    const response = await axios.get(API_URL, {
        params: {
            user: user._id
        }
    })

    return response.data
}

const exerciseService = {
    getExercises
}

export default exerciseService