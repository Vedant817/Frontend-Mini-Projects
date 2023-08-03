let currentQuery = "sports"
let currentPage = 1;
const fetchNews = async (page, q) => {
    console.log('Fetching News....');
    var url = 'https://newsapi.org/v2/everything?' +
        'q=' + q +
        '&from=2023-08-03&' +
        '&language=en&' +
        'pageSize=20&' +
        'page=' + page +
        'sortBy=popularity&' +
        'apiKey=fd8c4b4f1b0f4987afa22b6ef40d2a95';

    var req = new Request(url);

    let a = await fetch(req);
    let response = await a.json();
    console.log(JSON.stringify(response));
    console.log(response);

    let str = ""
    resultCount.innerHTML = response.totalResults
    for (let item of response.article) {
        str = str + `<div class="row content">
        <div class="card my-4 mx-2" style="width: 18rem;">
            <img height="184 src="${item.urlToImage}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${item.title.slice}</h5>
                <p class="card-text">${item.description.slice(0,70)}...</p>
                <a href="${item.url}"target="_blank" class="btn btn-primary">Read More</a>
            </div>
        </div>
    </div>`
    }
    document.querySelector('content').innerHTML = str
}
fetchNews(1, currentQuery)

let search = document.getElementById('search')
let input = document.getElementById('searchInput')
let Previous = document.getElementById('Previous')
let Next = document.getElementById('Next')
search.addEventListener('click', (e) => {
    e.preventDefault()
    let query = input.value;
    currentQuery = query
    fetchNews(1, query)
})
Previous.addEventListener('click', (e) => {
    e.preventDefault()
    if (currentPage > 1) {
        currentPage=currentPage-1;
        fetchNews(currentPage, currentQuery);
    }
})
search.addEventListener('click', (e) => {
    e.preventDefault()
    currentPage=currentPage+1;
    fetchNews(currentPage, currentQuery);
})