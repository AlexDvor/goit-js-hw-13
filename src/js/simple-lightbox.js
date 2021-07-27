import SimpleLightbox from "simplelightbox";
import '../../node_modules/simplelightbox/dist/simple-lightbox.css'


export default function simpleLightbox() {
    let gallery = new SimpleLightbox('.img-wrapper a');
    gallery.refresh('show.simplelightbox', function () {

    });
  
}

