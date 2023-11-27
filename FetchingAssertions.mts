const API_URL = "https://api.github.com/search/repositories?=javascript"
const response = await fetch(API_URL)

if (!response.ok) {
    throw new Error('Request failed')
}

const data =await response.json()

const repos = data.items.map(repo => {
    console.log(repo);
})