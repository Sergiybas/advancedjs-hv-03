(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const u="https://api.thecatapi.com/v1/breeds",d="live_amR3jnds0mGQH8PwUCOhfMQ6LomPPLV2bVbdHP3dN8rejmbHEEQUDnPQt7DN0YuQ";fetch(u,{headers:{"x-api-key":d}}).then(r=>r.json()).then(r=>{const n=r.map(o=>{const{name:c,image:e,description:t}=o;return{name:c,image:e,descr:t}});f(n),p.addEventListener("input",o=>g(o,n))}).catch(r=>{console.log("Error:",r)});const i=document.querySelector(".js-details"),p=document.querySelector(".js-input"),m=document.querySelector(".card");function f(r){i.innerHTML=r.map(n=>`<option class="option" value="${n.name}"></option>`).join(""),console.log(i),console.log(r)}function g(r,n){const o=r.currentTarget.value,e=n.filter(t=>t.name.includes(o)).map(t=>{const{name:s,image:a,descr:l}=t;return`
      <li class="card-cat">
        <img src="${a.url}" alt="${s}" width=400px>
        <p>${l}</p>
      </li>
    `}).join("");m.innerHTML=e,r.currentTarget.value=""}
//# sourceMappingURL=commonHelpers.js.map