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


refs.searchForm.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', onLoadMore);


function onSearch(e) {
    e.preventDefault()
    fetchApi.query = e.currentTarget.elements.searchQuery.value

    if (fetchApi.query === '') {
        clearCard()
        return 
    }


    // FetchApi.getApiService(FetchApi.searchQuery).then(item => item.hits).then(renderCard).catch(error => {console.log(error)})
    fetchApi.getApiService().then(item => item.hits).then(renderCard).catch(error => {console.log(error)})
   
}




function renderCard(obj) {
    const card = imgCardTpl(obj);
    // console.log(card)
     refs.gallery.innerHTML = card;

}



function clearCard() {
     refs.gallery.innerHTML = '';
}


function onLoadMore() {
    
}