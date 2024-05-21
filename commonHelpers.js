import{a as u,i as n,S as m}from"./assets/vendor-6e0bf343.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const f="https://pixabay.com/api/",g="39287667-f1a1553e63cd5dc6035e5c951",y={url:f,params:{key:g,q:"",image_type:"photo",orientation:"horizontal",page:1,per_page:20},getPhotos(r=this.params.q){return this.params.q=r,u.get(this.url,{params:this.params})}};function p(r){return r.map(h).join("")}function h(r){const{largeImageURL:s,webformatURL:i,tags:a,likes:e,views:t,comments:l,downloads:d}=r;return`<div class="gallery__item">
        <a class="gallery__link" href="${s}">
          <img class="gallery__image" src="${i}" alt="${a}" loading="lazy"/>
        </a>
        <div class="gallery__info">
          <p class="gallery__info-item">
            <b>Likes ${e}</b>
          </p>
          <p class="gallery__info-item">
            <b>Views ${t}</b>
          </p>
          <p class="gallery__info-item">
            <b>Comments ${l}</b>
          </p>
          <p class="gallery__info-item">
            <b>Downloads ${d}</b>
          </p>
        </div>
      </div>`}function b(r,s){r.insertAdjacentHTML("beforeend",s)}const o={gallery:document.querySelector(".gallery"),form:document.querySelector("form"),loadMoreBtn:document.querySelector(".load-more"),searchButton:document.querySelector("#search-form button")};c(o.loadMoreBtn,"visually-hidden");o.form.addEventListener("submit",_);async function _(r){r.preventDefault();const{searchQuery:s}=o.form.elements,i=s.value.trim();if(!i){n.info({message:"Pleace, enter data to search",position:"topRight"});return}o.searchButton.disabled=!0,o.loadMoreBtn.textContent="Loading....",L(o.loadMoreBtn,"visually-hidden"),o.gallery.innerHTML="";try{const{data:a}=await y.getPhotos(i);console.log(a);const{hits:e,totalHits:t}=a;if(console.log(e),console.log(t),!t){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}n.success({message:`Hooray! We found ${t} images.`,position:"topRight"});const l=p(e);b(o.gallery,l),o.searchButton.disabled=!1,new m(".gallery a",{}).refresh(),o.loadMoreBtn.textContent="Load more",c(o.loadMoreBtn,"visually-hidden")}catch(a){console.log("ERROR",a),n.error({message:"Sorry there was an error",position:"topRight"}),o.searchButton.disabled=!1,c(o.loadMoreBtn,"visually-hidden")}finally{o.searchButton.disabled=!1,c(o.loadMoreBtn,"visually-hidden")}}function c(r,s){r.classList.add(s)}function L(r,s){r.classList.remove(s)}
//# sourceMappingURL=commonHelpers.js.map
