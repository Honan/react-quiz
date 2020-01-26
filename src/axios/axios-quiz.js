import axios from 'axios';

export default axios.create({
    baseURL: 'https://react-quiz-8073e.firebaseio.com/'
})