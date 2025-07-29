const accessKey = "api";
const  searchForm = document.getElementById("serach-form")
const  searchBox = document.getElementById("serach-box")
const  searchResult = document.getElementById("search-result")
const  showMoreBtn = document.getElementById("show-more-btn")
// Link: <>; rel="first", <https://api.unsplash.com/search/photos?page=1&query=office>; rel="prev", <https://api.unsplash.com/search/photos?page=3&query=office>; rel="last", <https://api.unsplash.com/search/photos?page=3&query=office>; rel="next"
// X-Ratelimit-Limit: 1000
// X-Ratelimit-Remaining: 9994

let keyword = ""
let page = 1;
async function searchImage () {keyword
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}$client_id=${accessKey}&per_page=12`;

    const response = await fetch(url);
    const data = await response.json();
    if(page === 1){
        searchResult.innerHTML = ""   
    }
    const results = data.results;
    results.map((result) => {
        const image = document.createElement("img")
        image.src = result.urls.small;   
        const imageLink = document.createElement('a')
        imageLink.href = result.link.html;  
        imageLink.target = "_blank";  
        
        imageLink.appendChild(image);
        searchResult.appendChild(imageLink)
    })
    showMoreBtn.style.display = "block";


    
}

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    page = 1;
    searchImage();
})

showMoreBtn.addEventListener("click", (e)=> {
    page++;
    searchImage()
})