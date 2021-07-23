export default { fetchApi };

import axios from 'axios'



async function fetchApi(name) {

    const API_KEY = '22579303-973b9b71134c76d3c38c0933d';
    const URL = `https://pixabay.com/api/?key=${API_KEY}&q=${name}&image_type=photo&orientation=horizontal&safesearch=true`;

    return await axios.get(URL).then(res => res.data)
}


