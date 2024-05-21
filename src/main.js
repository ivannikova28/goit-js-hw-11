// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";


// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";


import { apiService } from "./pixabay-api";
import { renderGallery, templateGallery } from "./render-functions";


const refs = {
    gallery : document.querySelector('.gallery'),
    form: document.querySelector('form'),
    loadMoreBtn: document.querySelector('.load-more'),
    searchButton: document.querySelector('#search-form button'),

}

// refs.loadMoreBtn.classList.add("visually-hidden");
addClassList(refs.loadMoreBtn, "visually-hidden")

refs.form.addEventListener('submit',handlerSubmitForm)

async function handlerSubmitForm (event){
    event.preventDefault()

    const {searchQuery} = refs.form.elements

    const searchQueryValue = searchQuery.value.trim()

    if(!searchQueryValue) {
        iziToast.info({
            message: `Pleace, enter data to search` ,
            position: "topRight"
        })
        return
    }

    refs.searchButton.disabled = true;
        
    refs.loadMoreBtn.textContent = "Loading...."
    // refs.loadMoreBtn.classList.remove("visually-hidden")
    removeClassList(refs.loadMoreBtn, "visually-hidden")

    refs.gallery.innerHTML = "";

    try {
        const { data } = await apiService.getPhotos(searchQueryValue)
        console.log(data)

        const {hits, totalHits} = data;
        console.log(hits)
        console.log(totalHits)

        if(!totalHits){
            iziToast.error({
                message: `Sorry, there are no images matching your search query. Please try again!`,
                position: "topRight"
                
            })
            return

        }


        iziToast.success({
            message: `Hooray! We found ${totalHits} images.`,
            position:"topRight"
        })

        const galleryHTML = templateGallery(hits)
        renderGallery(refs.gallery, galleryHTML);

        refs.searchButton.disabled = false;

        const  lightbox = new SimpleLightbox('.gallery a', { /* options */ });
        lightbox.refresh()

        refs.loadMoreBtn.textContent = "Load more"
        // refs.loadMoreBtn.classList.add("visually-hidden")
        addClassList(refs.loadMoreBtn, "visually-hidden")

    } catch (error) {
        console.log("ERROR", error)

        iziToast.error({
            message: `Sorry there was an error`,
            position:"topRight"
        })


        refs.searchButton.disabled = false;
        // refs.loadMoreBtn.classList.add("visually-hidden")
        addClassList(refs.loadMoreBtn, "visually-hidden")
    } finally{
        refs.searchButton.disabled = false;
        // refs.loadMoreBtn.classList.add("visually-hidden")
        addClassList(refs.loadMoreBtn, "visually-hidden")
    }

}


function addClassList(element, className) {
    element.classList.add(className)
}
function removeClassList(element, className) {
    element.classList.remove(className)
}