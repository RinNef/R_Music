let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");
let searchBtn = document.querySelector(".bx-search-alt");

btn.onclick = function()
{
    sidebar.classList.toggle("active");

}
searchBtn.onclick = function(){
    sidebar.classList.toggle("active");
}

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$('.tab_item');
const panes = $$('.tab_pane');

tabs.forEach((tabs, index) => {
    const pane = panes[index];
    tabs.onclick = function()
    {
        $('.tab_item.active').classList.remove("active");
        $('.tab_pane.active').classList.remove("active");
        this.classList.add("active");
        pane.classList.add("active");
    }
});