// This will tell us if the file is even connected
console.log("Time Stream Connected!");

const historicalEvents = [
    // --- ANCIENT ERA (-3500 to 476) ---
       { title: "Gulf War Begins", year: 1991, category: "conflict", description: "Allied forces liberate Kuwait from Iraq." },
    { title: "Apartheid Ends", year: 1994, category: "culture", description: "South Africa holds its first multi-racial elections." },
    { title: "Dolly the Sheep Cloned", year: 1996, category: "science", description: "The first mammal cloned from an adult cell." },
    { title: "Hong Kong Handover", year: 1997, category: "culture", description: "The UK returns sovereignty of Hong Kong to China." },
    { title: "Good Friday Agreement", year: 1998, category: "culture", description: "Peace agreement in Northern Ireland." },
    { title: "Y2K Scare", year: 1999, category: "science", description: "Fears that computers would fail at the turn of the millennium." },


    // --- 2000s & RECENT (2000 to Present) ---
    { title: "Human Genome Mapped", year: 2000, category: "science", description: "The first draft of the human genetic code is completed." },
    { title: "September 11 Attacks", year: 2001, category: "conflict", description: "Terrorist attacks on the World Trade Center and Pentagon." },
    { title: "Euro Currency Launched", year: 2002, category: "culture", description: "Physical Euro notes and coins enter circulation." },
    { title: "Invasion of Iraq", year: 2003, category: "conflict", description: "US-led coalition overthrows Saddam Hussein." },
    { title: "Facebook Founded", year: 2004, category: "science", description: "The start of the modern social media era." },
    { title: "Indian Ocean Tsunami", year: 2004, category: "discovery", description: "A massive underwater earthquake kills over 230,000." },
    { title: "iPhone Released", year: 2007, category: "science", description: "The start of the smartphone revolution." },
    { title: "Global Financial Crisis", year: 2008, category: "culture", description: "The worst economic downturn since the Great Depression." },
    { title: "Election of Barack Obama", year: 2008, category: "culture", description: "The first African American US President." },
    { title: "Higgs Boson Discovered", year: 2012, category: "science", description: "The 'God Particle' is found at CERN." },
    { title: "Paris Agreement", year: 2015, category: "culture", description: "Global accord to fight climate change." },
    { title: "Gravitational Waves Detected", year: 2016, category: "science", description: "Proving Einstein's century-old prediction." },
    { title: "COVID-19 Pandemic Begins", year: 2020, category: "science", description: "A global health crisis changes modern life." },
    { title: "James Webb Telescope First Images", year: 2022, category: "discovery", description: "Deepest and sharpest infrared images of the early universe." },
    { title: "AI Revolution", year: 2023, category: "science", description: "Generative AI becomes mainstream." },


    // --- CONTINUING TO 200 (Selected fillers for density) ---
    { title: "First Vaccination for Polio", year: 1955, category: "science", description: "Jonas Salk develops the miracle vaccine." },
    { title: "Discovery of Pluto", year: 1930, category: "discovery", description: "Clyde Tombaugh finds the ninth (then) planet." },
    { title: "Opening of the Louvre", year: 1793, category: "culture", description: "The royal palace in Paris becomes a public museum." },
    { title: "Invention of the Microscope", year: 1590, category: "science", description: "Zacharias Janssen creates the first compound microscope." },
    { title: "Voyager 1 Leaves Solar System", year: 2012, category: "discovery", description: "The first man-made object to enter interstellar space." },
    { title: "Completion of the Transcontinental Railroad", year: 1869, category: "discovery", description: "Connecting the US from coast to coast." },
    { title: "Battle of Gettysburg", year: 1863, category: "conflict", description: "The turning point of the American Civil War." },
    { title: "Invention of the Battery", year: 1800, category: "science", description: "Alessandro Volta creates the first chemical battery." },
    { title: "California Gold Rush Begins", year: 1848, category: "discovery", description: "James Marshall finds gold at Sutter's Mill." },
    { title: "First Successful Heart Transplant", year: 1967, category: "science", description: "Christiaan Barnard performs the surgery in Cape Town." },
    { title: "Discovery of Insulin", year: 1921, category: "science", description: "Frederick Banting finds the life-saving hormone." },
    { title: "Assassination of Archduke Franz Ferdinand", year: 1914, category: "conflict", description: "The spark that ignited World War I." },
    { title: "Fall of the Aztec Empire", year: 1521, category: "conflict", description: "Hernan Cortes captures Tenochtitlan." },
    { title: "Discovery of Penicillin", year: 1928, category: "science", description: "Alexander Fleming notices mold killing bacteria." },
    { title: "First Modern Map of the World", year: 1570, category: "discovery", description: "Abraham Ortelius publishes the first modern atlas." },
    { title: "Battle of Midway", year: 1942, category: "conflict", description: "Major naval battle in the Pacific theater." },
    { title: "Chernobyl Disaster", year: 1986, category: "science", description: "A catastrophic nuclear accident in Ukraine." },
    { title: "Establishment of the Song Dynasty", year: 960, category: "culture", description: "A period of great cultural and scientific growth in China." },
    { title: "Founding of the Mongol Empire", year: 1206, category: "conflict", description: "Genghis Khan unifies the Mongol tribes." },
    { title: "First Successful Organ Transplant", year: 1954, category: "science", description: "A kidney transplant between identical twins." },
    { title: "Sinking of the Lusitania", year: 1915, category: "conflict", description: "A British ocean liner is sunk by a German U-boat." },
    { title: "The Dust Bowl", year: 1930, category: "discovery", description: "Severe dust storms damage the US prairies." },
    { title: "Invention of the Spinning Jenny", year: 1764, category: "science", description: "Revolutionizing the textile industry." },
    { title: "Discovery of Oxygen", year: 1774, category: "science", description: "Joseph Priestley isolates the element." },
    { title: "Boston Tea Party", year: 1773, category: "conflict", description: "American colonists protest British taxes." },
    { title: "Invention of the Radio", year: 1895, category: "science", description: "Guglielmo Marconi sends the first radio signals." },
    { title: "End of the Spanish Civil War", year: 1939, category: "conflict", description: "Francisco Franco begins his dictatorship." },
    { title: "Formation of the European Union", year: 1993, category: "culture", description: "The Maastricht Treaty creates the EU." },
    { title: "Discovery of Neptune", year: 1846, category: "discovery", description: "The planet is found through mathematical prediction." },
    { title: "Invention of the Diesel Engine", year: 1892, category: "science", description: "Rudolf Diesel patents his new engine." },
    { title: "Battle of the Bulge", year: 1944, category: "conflict", description: "The last major German offensive on the Western Front." },
    { title: "First Flight of the Concorde", year: 1969, category: "science", description: "The supersonic passenger jet takes to the skies." },
    { title: "Founding of Microsoft", year: 1975, category: "science", description: "Bill Gates and Paul Allen start the software company." },
    { title: "Invention of the World Wide Web", year: 1989, category: "science", description: "Tim Berners-Lee creates the web." },
    { title: "Discovery of the Terracotta Army", year: 1974, category: "discovery", description: "Farmers in China find the army of the first emperor." },
    { title: "Launch of the Hubble Space Telescope", year: 1990, category: "science", description: "The telescope is launched from the Discovery shuttle." },
    { title: "End of the Thirty Years' War", year: 1648, category: "conflict", description: "The Peace of Westphalia is signed." },
    { title: "The Great Fire of London", year: 1666, category: "discovery", description: "A massive fire destroys much of the city." },
    { title: "Discovery of the South Pole", year: 1911, category: "discovery", description: "Roald Amundsen reaches the pole." },
    { title: "First Successful Blood Transfusion", year: 1818, category: "science", description: "Performed by James Blundell in London." },
    { title: "Invention of the Barometer", year: 1643, category: "science", description: "Evangelista Torricelli invents the pressure gauge." },
    { title: "Founding of the Red Cross", year: 1863, category: "culture", description: "Henry Dunant organizes international relief." },
    { title: "Discovery of New Zealand", year: 1642, category: "discovery", description: "Abel Tasman is the first European to sight the islands." },
    { title: "Discovery of Vitamin C", year: 1932, category: "science", description: "Albert Szent-Györgyi isolates the nutrient." },
    { title: "Invention of the Laser", year: 1960, category: "science", description: "The first working laser is built by Theodore Maiman." },
    { title: "Founding of the Inca Empire", year: 1438, category: "culture", description: "Pachacuti begins the expansion of the empire." },
    { title: "Discovery of Electron", year: 1897, category: "science", description: "J.J. Thomson identifies the subatomic particle." },
    { title: "Invention of the Parachute", year: 1783, category: "science", description: "Louis-Sébastien Lenormand makes the first jump." },
    { title: "End of the Korean War", year: 1953, category: "conflict", description: "An armistice is signed." },
    { title: "Discovery of the Great Barrier Reef", year: 1770, category: "discovery", description: "James Cook runs aground on the reef." },
    { title: "Invention of the Submarine", year: 1620, category: "science", description: "Cornelius Drebbel builds the first navigable sub." },
    { title: "Founding of the Smithsonian", year: 1846, category: "culture", description: "Established by the US government." },
    { title: "Discovery of the North Pole", year: 1909, category: "discovery", description: "Robert Peary claims to have reached the pole." },
    { title: "Invention of the Microwave Oven", year: 1945, category: "science", description: "Percy Spencer discovers the cooking effect." },
    { title: "End of the American Revolution", year: 1783, category: "conflict", description: "The Treaty of Paris is signed." },
    { title: "Founding of Harvard University", year: 1636, category: "culture", description: "The oldest institution of higher learning in the US." },
    { title: "Discovery of Australia", year: 1770, category: "discovery", description: "James Cook charts the East Coast." },
    { title: "Invention of the Fountain Pen", year: 1884, category: "science", description: "Lewis Waterman patents the first practical model." },
    { title: "Discovery of the Source of the Nile", year: 1858, category: "discovery", description: "John Hanning Speke identifies Lake Victoria." },
    { title: "Invention of the Cotton Gin", year: 1793, category: "science", description: "Eli Whitney automates cotton processing." },
    { title: "Founding of the British Museum", year: 1753, category: "culture", description: "The world's first national public museum." },
    { title: "Discovery of Hawaii", year: 1778, category: "discovery", description: "James Cook is the first European to visit the islands." },
    { title: "Invention of the Bicycle", year: 1817, category: "science", description: "Karl von Drais invents the 'running machine'." },
    { title: "Discovery of the Giant Squid", year: 1873, category: "discovery", description: "A specimen is found in Newfoundland." },
    { title: "Invention of the Braille System", year: 1824, category: "culture", description: "Louis Braille develops the tactile writing system." },
    { title: "Founding of the University of Oxford", year: 1096, category: "culture", description: "Teaching began at Oxford in some form as early as 1096." },
    { title: "Discovery of the Structure of Benzene", year: 1865, category: "science", description: "August Kekulé discovers the ring structure." },
    { title: "Invention of the Match", year: 1826, category: "science", description: "John Walker invents the friction match." },
    { title: "Discovery of the Pacific Ocean", year: 1513, category: "discovery", description: "Vasco Núñez de Balboa crosses the Isthmus of Panama." },
    { title: "Invention of the Jet Engine", year: 1937, category: "science", description: "Frank Whittle tests the first jet engine." },
    { title: "Founding of the Society of Jesus", year: 1540, category: "culture", description: "The Jesuits are officially recognized." },
    { title: "Discovery of the Comstock Lode", year: 1859, category: "discovery", description: "Major silver deposit found in Nevada." },
    { title: "Invention of the Sewing Machine", year: 1846, category: "science", description: "Elias Howe patents the lockstitch machine." },
    { title: "Discovery of the Coelacanth", year: 1938, category: "discovery", description: "A living fossil fish is found off South Africa." },
    { title: "Invention of the Saxophone", year: 1846, category: "culture", description: "Adolphe Sax patents his new instrument." },
    { title: "Founding of the Bank of England", year: 1694, category: "culture", description: "The central bank of the United Kingdom is established." },
    { title: "Discovery of the Moons of Mars", year: 1877, category: "discovery", description: "Asaph Hall discovers Phobos and Deimos." },
    { title: "Invention of the Typewriter", year: 1868, category: "science", description: "Christopher Sholes patents the first practical typewriter." },
    { title: "Discovery of the Ruins of Troy", year: 1870, category: "discovery", description: "Heinrich Schliemann begins excavations." },
    { title: "Invention of the Dishwasher", year: 1886, category: "science", description: "Josephine Cochrane patents the first successful model." },
    { title: "Founding of the League of Nations", year: 1920, category: "culture", description: "The precursor to the United Nations." },
    { title: "Discovery of the Planet Uranus", year: 1781, category: "discovery", description: "William Herschel identifies the planet." },
    { title: "Invention of the Zipper", year: 1893, category: "science", description: "Whitcomb Judson patents the 'clasp locker'." },
    { title: "Discovery of the Victoria Falls", year: 1855, category: "discovery", description: "David Livingstone is the first European to see the falls." },
    { title: "Invention of the Air Conditioner", year: 1902, category: "science", description: "Willis Carrier builds the first system." },
    { title: "Founding of the National Geographic Society", year: 1888, category: "culture", description: "To increase and diffuse geographic knowledge." },
    { title: "Discovery of the Law of Refraction", year: 1621, category: "science", description: "Willebrord Snellius discovers the law." },
    { title: "Invention of the Vacuum Cleaner", year: 1901, category: "science", description: "Hubert Cecil Booth patents the powered vacuum." },
    { title: "Discovery of the Tomb of Philip II", year: 1977, category: "discovery", description: "Found in Vergina, Greece." },
    { title: "Invention of the Helicopter", year: 1939, category: "science", description: "Igor Sikorsky flies the first successful model." },
    { title: "Founding of the International Monetary Fund", year: 1944, category: "culture", description: "Created at the Bretton Woods Conference." },
    { title: "Discovery of the Planet Ceres", year: 1801, category: "discovery", description: "Giuseppe Piazzi finds the first asteroid/dwarf planet." },
    { title: "Invention of the Polaroid Camera", year: 1948, category: "science", description: "Edwin Land introduces instant photography." },
    { title: "Discovery of the Caves of Lascaux", year: 1940, category: "discovery", description: "Prehistoric cave paintings found in France." },
    { title: "Invention of the Credit Card", year: 1950, category: "culture", description: "The Diners Club card is introduced." },
    { title: "Founding of the World Health Organization", year: 1948, category: "culture", description: "A specialized agency of the UN for health." }
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

