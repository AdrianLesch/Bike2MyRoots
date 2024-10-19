let previousEntries = [];

async function fetchNews() {
    try {
        let jsonData = await fetch("/Mockdata.json");
        let data = await jsonData.json();

        // Log the fetched data for debugging
        console.log("Fetched data:", data);
        
        updateNews(data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}


function updateNews(data) {
    const newsbox = document.getElementById("newsbox");

    // Clear previous content in the newsbox to avoid duplicates
    newsbox.innerHTML = "";

    // Loop through each key in the data object and treat it as a new entry
    for (let key in data) {
        if (data.hasOwnProperty(key)) {
            let entry = data[key]; // Get the entry (e.g., newMessage, newMessageTwo, etc.)

            // Create a new paragraph element for the message
            const messageElement = document.createElement("p");
            messageElement.innerText = entry.message;

            // Optionally display the image if needed
            const imageElement = document.createElement("img");
            imageElement.src = entry.picture;
            imageElement.alt = "News Image";
            imageElement.style.width = "100px"; // Example styling

            // Append the message and image to the newsbox
            newsbox.appendChild(messageElement);
            newsbox.appendChild(imageElement);
        }
    }
}
/*
function updateNews(data) {
    const newsbox = document.getElementById("newsbox");

    let entries = [];

 
    if (data.newMessage) {
        entries.push(data.newMessage);
    }
    if (data.newMessageTwo) {
        entries.push(data.newMessageTwo);
    }
 

    // Log the entries for debugging
    console.log("Entries to display:", entries);

    // Compare the new data with previous entries and append only new ones
    entries.forEach(entry => {
        if (!previousEntries.some(prev => prev.message === entry.message)) {
            // If this entry is new, append it to the newsbox
            const messageElement = document.createElement("p");
            messageElement.innerText = entry.message;

            // Append the new message to the newsbox
            newsbox.appendChild(messageElement);

            // Add the new entry to previousEntries
            previousEntries.push(entry);
        }
    });
}
*/

// Poll for new data every 5 seconds
setInterval(fetchNews, 5000);

// Initial fetch when the page loads
fetchNews();
