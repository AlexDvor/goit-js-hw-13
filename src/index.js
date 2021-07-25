import './sass/main.scss';
import FetchApi from './js/fetchApi';
import imgCardTpl from './templates/card.hbs';
import { func } from 'assert-plus';
const fetchApi = new FetchApi()

// const DEBOUNCE_DELAY = 300;


const refs = {
    searchForm: document.querySelector('.search-form'),
    gallery: document.querySelector('.gallery'),
    loadMoreBtn: document.querySelector('.load-more')
}

console.log(refs.loadMoreBtn)

refs.searchForm.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', onLoadMore);
refs.loadMoreBtn.classList.add('is-hidden')


function onSearch(e) {
    
    e.preventDefault()
    fetchApi.query = e.currentTarget.elements.searchQuery.value
    fetchApi.resetPage()
    clearArticleList()
    refs.loadMoreBtn.classList.remove('is-hidden')
    
    if (fetchApi.query === '') {
        refs.loadMoreBtn.classList.add('is-hidden')
        return 
    }


    // FetchApi.getApiService(FetchApi.searchQuery).then(item => item.hits).then(renderCard).catch(error => {console.log(error)})
    fetchApi.getApiService().then(renderCard).catch(error =>{ console.log(error)})
   
}




function renderCard(obj) {
    const card = imgCardTpl(obj);
    refs.gallery.insertAdjacentHTML('beforeend', card);

}



function clearArticleList() {
     refs.gallery.innerHTML = '';
}


function onLoadMore() {
  

    fetchApi
        .getApiService()
        .then(renderCard)
        .catch(error => { console.log(error)})
}