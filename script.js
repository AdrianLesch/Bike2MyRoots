let previousEntries = [];

async function fetchNews() {
    try {
        let jsonData = await fetch("/Mockdata.json"); // Use the absolute path if it's in the root folder
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

    // Check if the newsbox element exists
    if (!newsbox) {
        console.error("Error: 'newsbox' element not found in the DOM.");
        return;
    }

    // Initialize entries as an empty array
    let entries = [];

    /*
    // Collect the entries from data (newMessage, newMessageTwo, etc.)
    if (data.newMessage) {
        entries.push(data.newMessage);
    }
    if (data.newMessageTwo) {
        entries.push(data.newMessageTwo);
    }
    */

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

// Poll for new data every 5 seconds
setInterval(fetchNews, 5000);

// Initial fetch when the page loads
fetchNews();
