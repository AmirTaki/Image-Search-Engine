const  searchForm = document.getElementById("serach-form")
const  searchBox = document.getElementById("serach-box")
const  searchResult = document.getElementById("search-result")
const  showMoreBtn = document.getElementById("show-more-btn")
// Link: <https://api.unsplash.com/search/photos?page=1&query=office>; rel="first", <https://api.unsplash.com/search/photos?page=1&query=office>; rel="prev", <https://api.unsplash.com/search/photos?page=3&query=office>; rel="last", <https://api.unsplash.com/search/photos?page=3&query=office>; rel="next"
// X-Ratelimit-Limit: 1000
// X-Ratelimit-Remaining: 9994

let keyword = ""
let page = 1;
async function searchImage () {
    
}