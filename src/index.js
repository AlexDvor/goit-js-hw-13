import './sass/main.scss';
import API from './js/fetchApi';
import { debounce } from 'lodash';
import imgCardTpl from './templates/card.hbs';
import { func } from 'assert-plus';


const refs = {
    inputValue: document.querySelector('.search-form'),
    gallery: document.querySelector('.gallery'),
}



refs.inputValue.addEventListener('input', debounce(onSearch, 300))


function onSearch(e) {
        const inputValue = e.target.value;
        API.fetchApi(inputValue).then(console.log)
   
}




function renderCard(obj) {
    const card = imgCardTpl(obj);
    console.log(card)
    return refs.gallery.innerHTML = card;

}