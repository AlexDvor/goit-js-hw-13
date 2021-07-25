
import axios from 'axios'

export default class FetchApi {
    constructor() {
        this.searchQuery = '';
        this.page = 1;
        this.perPage = 40;
    }

async getApiService() {
    // console.log(this)
    
    const API_KEY = '22579303-973b9b71134c76d3c38c0933d';
    const URL = `https://pixabay.com/api/?key=${API_KEY}&q=${this.searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&page=${this.page}&per_page=${this.perPage}`;
    
    return await axios.get(URL).then(res => res.data).then(this.incrementPage());
    }


    get query () {
        return this.searchQuery;
    }

    set query(newQuery) {
        this.searchQuery = newQuery;
    }
    
     resetPage() {
        this.page = 1
    }

    incrementPage() {
        this.page += 1;
    }

}




// async function fetchApi(name) {
//     const page = 1;
//     const perPage = 40;
//     const API_KEY = '22579303-973b9b71134c76d3c38c0933d';
//     const URL = `https://pixabay.com/api/?key=${API_KEY}&q=${name}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`;

//     return await axios.get(URL).then(res => res.data)
// }
