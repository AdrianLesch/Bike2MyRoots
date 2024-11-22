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

            // Create the news card
            const card = document.createElement("div");
            card.classList.add("card", "mb-4");
            card.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)";

            // Add card header for the title
            const cardHeader = document.createElement("h5");
            cardHeader.classList.add("card-header");
            cardHeader.innerText = entry.title; // Use the title from the data

            // Create card body
            const cardBody = document.createElement("div");
            cardBody.classList.add("card-body");

            // Create the message element
            const messageElement = document.createElement("p");
            messageElement.classList.add("card-text");
            messageElement.innerText = entry.message; // Message from the data

            // Create the image element
            const imageElement = document.createElement("img");
            imageElement.src = entry.picture; // Image from the data
            imageElement.alt = "News Image";
            imageElement.classList.add("img-fluid", "rounded", "shadow-sm");

            // Limit the image size
            imageElement.style.maxWidth = "100%";  // Ensures the image is responsive
            imageElement.style.height = "auto";    // Maintain aspect ratio
            
            // Append image, message, and card body to the card
            cardBody.appendChild(imageElement);
            cardBody.appendChild(messageElement);
            card.appendChild(cardHeader);
            card.appendChild(cardBody);

            // Append the card to the newsbox
            newsbox.appendChild(card);
        }
    }
}


// Poll for new data every 5 seconds
setInterval(fetchNews, 5000);

// Initial fetch when the page loads
fetchNews();



