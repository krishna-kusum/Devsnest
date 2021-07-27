const input = document.querySelector(".input")
const submit = document.querySelector(".submit")
const article = document.querySelector("article")


function fetchQuotes() {
    fetch(`https:api.quotable.io/random/`)
        .then(res => res.json())
        .then(data => {
            getResponce(data)
        })
}

function getResponce(data) {

    //console.log(JSON.stringify(data))

    let quote = document.createElement("div");
    quote.className = "quotes";
    quote.innerHTML = `${data.content}`
    article.append(quote)

}

fetchQuotes()