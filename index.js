import{a as d,S as p,i}from"./assets/vendor-MgecxatS.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();function f(s){const o="53528183-124d750022db572161729f08a",t="https://pixabay.com/api/",a={key:o,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40};return d.get(t,{params:a}).then(e=>e.data)}const l=document.querySelector(".gallery"),u=document.querySelector("#loader"),m=new p(".gallery a",{captionsData:"alt",captionDelay:250});function g(s){const o=s.map(t=>`
      <li class="photo-card">
        <a href="${t.largeImageURL}">
          <img src="${t.webformatURL}" alt="${t.tags}" loading="lazy"/>
        </a>
        <div class="info">
          <p><b>Likes:</b> ${t.likes}</p>
          <p><b>Views:</b> ${t.views}</p>
          <p><b>Comments:</b> ${t.comments}</p>
          <p><b>Downloads:</b> ${t.downloads}</p>
        </div>
      </li>
    `).join("");l.insertAdjacentHTML("beforeend",o),m.refresh()}function h(){l.innerHTML=""}function y(){u.classList.add("visible")}function b(){u.classList.remove("visible")}const c=document.querySelector(".form");c.addEventListener("submit",s=>{s.preventDefault();const o=s.currentTarget.elements["search-text"].value.trim();if(!o){i.warning({title:"Warning",message:"Please enter a search term!",position:"topRight"});return}h(),y(),f(o).then(t=>{const a=t.hits;if(a.length===0){i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}g(a)}).catch(t=>{console.error(t),i.error({title:"Error",message:"Something went wrong. Please try again later!",position:"topRight"})}).finally(()=>{b(),c.reset()})});
//# sourceMappingURL=index.js.map
