import './sass/main.scss';
import API from './js/fetchApi';
import { debounce } from 'lodash';
import imgCardTpl from './templates/card.hbs';
import { func } from 'assert-plus';

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
    const searchQuery = e.currentTarget.elements.searchQuery.value

    if (searchQuery === '') {
        clearCard()
        return 
    }


    API.fetchApi(searchQuery).then(item => item.hits).then(renderCard).catch(error => {console.log(error)})
   
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