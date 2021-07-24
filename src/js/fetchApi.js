export default { fetchApi };

import axios from 'axios'



// async function fetchApi(name) {
//     const page = 1;
//     const perPage = 40;
//     const API_KEY = '22579303-973b9b71134c76d3c38c0933d';
//     const URL = `https://pixabay.com/api/?key=${API_KEY}&q=${name}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`;

//     return await axios.get(URL).then(res => res.data)
// }



async function fetchApi(name) {
    const page = 1;
    const perPage = 40;
    const API_KEY = '22579303-973b9b71134c76d3c38c0933d';
    const URL = `https://pixabay.com/api/?key=${API_KEY}&q=${name}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`;

    return await axios.get(URL).then(res => res.data)
}





