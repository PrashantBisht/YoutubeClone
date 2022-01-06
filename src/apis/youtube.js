import axios from 'axios'
const KEY = 'AIzaSyDHmLviZ8kVoJ2g8pLoHrNNlzQo1w7eQyI';

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
})