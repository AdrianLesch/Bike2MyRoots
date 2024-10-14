//This is the main-script for some of the special functions like asyncronous operations

console.log("Hello");

async function fetchNews() {
    try {
        let jsonData = await fetch("Mockdata.json");
        let data = await jsonData.json();

        displayData(data);
        console.log(data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

function displayData(data) {
    document.getElementById("newsbox").innerText = data.text;
}

fetchNews();

