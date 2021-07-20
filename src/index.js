import './sass/main.scss';
import API from './js/fetchApi';
import { debounce } from 'lodash';
import imgCardTpl from './templates/card.hbs';
import { func } from 'assert-plus';


const DEBOUNCE_DELAY = 300;

const refs = {
    inputValue: document.querySelector('.search-form'),
    gallery: document.querySelector('.gallery'),
}



refs.inputValue.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY))


function onSearch(e) {
        const inputValue = e.target.value;
        // API.fetchApi(inputValue)
        API.fetchApi(inputValue).then(item=>item.hits).then(renderCard)
   
}




function renderCard(obj) {
    const card = imgCardTpl(obj);
    console.log(card)
     refs.gallery.innerHTML = card;

}