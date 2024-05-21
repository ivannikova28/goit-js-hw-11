import{a as u,i as n,S as m}from"./assets/vendor-6e0bf343.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();const f="https://pixabay.com/api/",g="39287667-f1a1553e63cd5dc6035e5c951",p={url:f,params:{key:g,q:"",image_type:"photo",orientation:"horizontal",page:1,per_page:20},getPhotos(o=this.params.q){return this.params.q=o,u.get(this.url,{params:this.params})}};function y(o){return o.map(h).join("")}function h(o){const{largeImageURL:s,webformatURL:l,tags:a,likes:e,views:t,comments:i,downloads:d}=o;return`<div class="gallery__item">
        <a class="gallery__link" href="${s}">
          <img class="gallery__image" src="${l}" alt="${a}" loading="lazy"/>
        </a>
        <div class="gallery__info">
          <p class="gallery__info-item">
            <b>Likes ${e}</b>
          </p>
          <p class="gallery__info-item">
            <b>Views ${t}</b>
          </p>
          <p class="gallery__info-item">
            <b>Comments ${i}</b>
          </p>
          <p class="gallery__info-item">
            <b>Downloads ${d}</b>
          </p>
        </div>
      </div>`}function b(o,s){o.insertAdjacentHTML("beforeend",s)}const r={gallery:document.querySelector(".gallery"),form:document.querySelector("form"),loadMoreBtn:document.querySelector(".load-more"),searchButton:document.querySelector("#search-form button")};c(r.loadMoreBtn,"visually-hidden");r.form.addEventListener("submit",_);async function _(o){o.preventDefault();const{searchQuery:s}=r.form.elements,l=s.value.trim();if(!l){n.info({message:"Pleace, enter data to search",position:"topRight"});return}r.searchButton.disabled=!0,r.loadMoreBtn.textContent="Loading....",L(r.loadMoreBtn,"visually-hidden");try{const{data:a}=await p.getPhotos(l);console.log(a);const{hits:e,totalHits:t}=a;if(console.log(e),console.log(t),!t){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}n.success({message:`Hooray! We found ${t} images.`,position:"topRight"});const i=y(e);b(r.gallery,i),r.searchButton.disabled=!1,new m(".gallery a",{}).refresh(),r.loadMoreBtn.textContent="Load more",c(r.loadMoreBtn,"visually-hidden")}catch(a){console.log("ERROR",a),n.error({message:"Sorry there was an error",position:"topRight"}),r.searchButton.disabled=!1,c(r.loadMoreBtn,"visually-hidden")}finally{r.searchButton.disabled=!1,c(r.loadMoreBtn,"visually-hidden")}}function c(o,s){o.classList.add(s)}function L(o,s){o.classList.remove(s)}
//# sourceMappingURL=commonHelpers.js.map
