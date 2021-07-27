import './sass/main.scss';
import FetchApi from './js/fetchApi';
import imgCardTpl from './templates/card.hbs';
import { func } from 'assert-plus';
const fetchApi = new FetchApi()
import { Notify } from "notiflix";
import simpleLightbox from './js/simple-lightbox'


const refs = {
    searchForm: document.querySelector('.search-form'),
    gallery: document.querySelector('.gallery'),
    loadMoreBtn: document.querySelector('.load-more'),
}



refs.searchForm.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', onLoadMore);



async function onSearch(e) {
    
    e.preventDefault()
    fetchApi.query = e.currentTarget.elements.searchQuery.value
    fetchApi.resetPage()
    clearArticleList()
    
    if (fetchApi.query === '') {
        removeIsVisibleClass()
        return 
    }

    try {
        const response = await fetchApi.getApiService()
        // console.log(response)
        renderCard(response)
        simpleLightbox()
        notification(response)
    } catch (error) {
        console.log(error)
    }   
}

async function onLoadMore() {

    try {
        const response = await fetchApi.getApiService()
        if (refs.gallery.childElementCount === response.totalHits) {
            
            Notify.warning("We're sorry, but you've reached the end of search results.");  
            refs.loadMoreBtn.style.display = 'none'
        }
        renderCard(response)
        simpleLightbox()
        // console.log(refs.gallery.childElementCount)

    } catch (error) {
        console.log(error)
    }
}

function renderCard(response) {

    if (response.totalHits > fetchApi.perPage) {
        addIsVisibleClass()
    } else {
        removeIsVisibleClass()
    }
    
    const cards = imgCardTpl(response.hits);
    refs.gallery.insertAdjacentHTML('beforeend', cards);
}

function clearArticleList() {
     refs.gallery.innerHTML = '';
}

function removeIsVisibleClass() {
     refs.loadMoreBtn.classList.remove('is-visible')
    
}

function addIsVisibleClass() {
     refs.loadMoreBtn.classList.add('is-visible')
    
}

function notification(res) {

    if (res.total === 0) {
        return  Notify.failure("Sorry, there are no images matching your search query. Please try again.");
    }

    if (res.total >= 1) {
        return Notify.success(`Hooray! We found ${res.totalHits} images.`)
    }

   

}
