"use strict";

/*---------- ハンバーガーメニュー ----------*/
const ham = document.querySelector(".js_hamburger");
const nav = document.querySelector(".js_navigation");
const body = document.querySelector(".js_body");
const list = document.querySelector(".l_header-nav_list");

ham.addEventListener("click", () => {
  ham.classList.toggle("is-active");
  nav.classList.toggle("is-active");
  body.classList.toggle("is-active");
});

list.addEventListener("click", () => {
  ham.classList.remove("is-active");
  nav.classList.remove("is-active");
  body.classList.add("is-active");
});

/*---------- kv切り替え ----------*/
const kvbtn = document.querySelector(".top_kv-tapbtn-wrapper");
const kv = document.querySelector(".top_kv");
const kvBg = document.querySelector(".top_kv-bg");

kvbtn.addEventListener("click", () => {
  kv.classList.add("none");
  body.classList.add("is-active");
  kvBg.classList.add("is-active");
});

function webStorage() {
  if (sessionStorage.getItem("access")) {
    //2回目以降アクセス時の処理には関数を実行しない
    kv.classList.add("none");
    body.classList.add("is-active");
  } else {
    //初回アクセス時の処理
    sessionStorage.setItem("access", 0);
    kv.classList.remove("none");
    // OpeningAnime();
  }
}
webStorage();

/*---------- スキルバー ----------*/

const graph = document.querySelectorAll(".top_skil_bar-graph");
// console.log(graph);

//オプション設定
const options = {
  root: null,
  rootMargin: "0px -50%",
  threshold: 0,
};

//Intersection Observerの呼び出し
const observer = new IntersectionObserver(callback, options);
graph.forEach((tgt) => {
  observer.observe(tgt);
});

//要素が交差したときの指示
function callback(entries) {
  entries.forEach((entry) => {
    const target = entry.target;
    if (entry.isIntersecting) {
      target.classList.add("is-active");
    }
  });
}
