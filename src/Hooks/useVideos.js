import {useState, useEffect} from 'react';
import youtube from '../apis/youtube';

const useVideos = (defaultSearchTerm)=>{
    const [videos, setVideos] = useState([]);

    useEffect(()=>{
        search(defaultSearchTerm);
    },[]);

    const search = async (term) => {
        console.log(term);
        const response = await youtube.get('/search',{
            params:{
                q:term
            }
        });
         
        setVideos(response.data.items);
    };
    // returns a list of videos and a function to update those list of videos
    return [videos, search];
}

export default useVideos;