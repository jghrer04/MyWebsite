// This will tell us if the file is even connected
console.log("Time Stream Connected!");

const historyEvents = [
    { title: "Test Event", year: "2026" },
    { title: "Moon Landing", year: "1969" },
    { title: "Fall of Rome", year: "476" }
    // Once this works, you can add your 200 events below this line
];

const triggerBtn = document.getElementById('trigger-btn');
const displayArea = document.getElementById('event-display');

if (triggerBtn) {
    triggerBtn.addEventListener('click', function() {
        console.log("Button clicked!");
        
        // Pick a random event from the list
        const randomEvent = historyEvents[Math.floor(Math.random() * historyEvents.length)];
        
        // Inject the HTML into the display area
        displayArea.innerHTML = `
            <h2 style="color: #238636; margin-top: 20px;">${randomEvent.title}</h2>
            <p style="color: #ffa500; font-weight: bold; font-family: monospace;">YEAR: ${randomEvent.year}</p>
        `;
    });
} else {
    console.log("Error: Could not find trigger-btn");
}

