import{a as i,S as l,i as d}from"./assets/vendor-0c7b7ddd.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();i.defaults.headers.common["x-api-key"]="live_YGiFEHjPi1lBCUuzNbWelyd7J1oPEfn9W20OXOYFFrZcwqF6HuW05CNOxCFEtTY7";async function u(){return await i.get("https://api.thecatapi.com/v1/breeds").then(r=>r.data)}async function y(r){return await i.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${r}`).then(s=>s.data)}const a={selects:document.querySelector(".select"),card:document.querySelector(".cat-card"),load:document.querySelector(".loader"),error:document.querySelector(".error")},p=new l({select:a.selects});a.load.style.display="none";a.error.style.display="none";a.card.style.display="none";async function f(){try{await u().then(r=>{const s=r.map(({id:c,name:o})=>({value:c,text:o}));p.setData(s),a.selects.addEventListener("change",m)})}catch{a.error.style.display="block",d.show({message:"Щось пішло не так! Перезавантажте сторінку та спроьуйте ще раз!"})}}f();async function m(){a.card.style.display="none",a.load.style.display="block";const r=a.selects.value;console.log("nameCat::: ",r);const s=await y(r);console.log("data::: ",s),h(s)}async function h(r){a.card.innerHTML=r.map(({url:s,breeds:c})=>{const[{description:o,temperament:e,name:t}]=c;return`
      <h2 class="name" >${t}</h2>
    <img src="${s}" alt="${t}">
    <h3 class="temperament">Характер: ${e}</h3>
    <p class="description">Опис: ${o}</p>
    `}).join(""),a.load.style.display="none",a.card.style.display="block"}
//# sourceMappingURL=commonHelpers.js.map
