import{S as c,i as l}from"./assets/vendor-7659544d.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();class u{constructor(){this.BASE_URL="https://pixabay.com/api/",this.API_KEY="42471914-569b5fe5af65bb61df6e415c6"}getImages(o){const s=new URLSearchParams({key:this.API_KEY,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}),i=`${this.BASE_URL}?${s}`;return fetch(i).then(e=>e.json())}}const f=document.querySelector(".gallery"),h=new c(".gallery a",{captionsData:"alt",captionDelay:250});function d({webformatURL:t,largeImageURL:o,tags:s,likes:i,views:e,comments:r,downloads:a}){return`      
      <li class="card">
        <a href ="${o}">
        <img class="card-img" src="${t}" alt="${s}" >
        <ul class="card-data">
          <li><h3>Likes</h3><p>${i}</p></li>
          <li><h3>Views</h3><p>${e}</p></li>
          <li><h3>Comments</h3><p>${r}</p></li>
          <li><h3>Downloads</h3><p>${a}</p></li>
        </ul>
      </li>`}function p(t){return t.map(d).join("")}function m(t){f.innerHTML=p(t),h.refresh()}const g=new u,y=document.querySelector(".search-form"),L=document.querySelector(".gallery"),b=document.querySelector(".loader");y.addEventListener("submit",S);function S(t){t.preventDefault(),L.innerHTML="",n(),g.getImages(t.target.query.value).then(o=>{const s=o.hits;if(!s.length)throw new Error("Sorry, there are no images matching your search query. Please try again!");m(s)}).catch(o=>P(o)).finally(n),t.target.reset()}function P(t){l.error({pauseOnHover:!1,position:"topRight",message:t.message})}function n(){b.classList.toggle("hidden")}
//# sourceMappingURL=commonHelpers.js.map
