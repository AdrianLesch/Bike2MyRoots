//This is the main-script for some of the special functions like asyncronous operations
async function fetchNews() {
    try {
        let jsonData = await fetch("Mockdata.json");
        let data = await jsonData.json();

        displayData(data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

function displayData(data) {
    const newsbox = document.getElementById("newsbox");
    newsbox.innerText = `${data.newMessage.message}\n${data.newMessageTwo.message}`;
}

fetchNews();

