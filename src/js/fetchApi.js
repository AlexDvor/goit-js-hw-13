export default { fetchApi };

const axios = require('axios');


// fetch(URL).then(data => data.json()).then(console.log).catch(error => console.log("Error", error))

async function fetchApi(name) {

    const API_KEY = '22579303-973b9b71134c76d3c38c0933d';
    const URL = `https://pixabay.com/api/?key=${API_KEY}&q=${name}&image_type=photo&orientation=horizontal&safesearch=true`;

    return await axios.get(URL).then(res => res.data)
    // return await axios.get(URL).then(item=>{console.log(item)})
    // return await fetch(URL).then(data => data.json()).then(console.log)
}


