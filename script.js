/**
 * Historical Events Dataset
 * Total: 200 Events
 * Categories: 'science', 'conflict', 'discovery', 'culture'
 */
// A list of Historical Events
const historicalEvents = [
    // --- ANCIENT ERA (-3500 to 476) ---
    { title: "Invention of Writing", year: -3500, category: "culture", description: "Sumerians develop Cuneiform, marking the transition from prehistory to history." },
    { title: "First Egyptian Dynasty", year: -3100, category: "culture", description: "Narmer unifies Upper and Lower Egypt." },
    { title: "Stonehenge Phase I", year: -3000, category: "culture", description: "The first structures of the prehistoric monument are built in England." },
    { title: "The Epic of Gilgamesh", year: -2100, category: "culture", description: "One of the earliest known works of literary fiction is written." },
    { title: "Code of Hammurabi", year: -1754, category: "culture", description: "One of the earliest and most complete written legal codes." },
    { title: "Trojan War", year: -1250, category: "conflict", description: "Legendary conflict between the Greeks and the city of Troy." },
    { title: "Founding of Rome", year: -753, category: "culture", description: "The legendary founding by Romulus and Remus." },
    { title: "Babylonian Captivity", year: -586, category: "conflict", description: "The Kingdom of Judah is conquered by Babylon." },
    { title: "Battle of Marathon", year: -490, category: "conflict", description: "Greeks defeat the Persians, securing the future of Western culture." },
    { title: "Parthenon Completed", year: -432, category: "culture", description: "The pinnacle of Greek Doric architecture is finished in Athens." },
    { title: "Death of Socrates", year: -399, category: "culture", description: "The father of Western philosophy is executed by the state." },
    { title: "Alexander the Great Takes Egypt", year: -332, category: "discovery", description: "Alexander founds the city of Alexandria." },
    { title: "Punic Wars Begin", year: -264, category: "conflict", description: "The start of the long struggle between Rome and Carthage." },
    { title: "Great Wall of China Construction", year: -221, category: "discovery", description: "The Qin Dynasty begins connecting walls for defense." },
    { title: "Rosetta Stone Created", year: -196, category: "culture", description: "A decree that would eventually unlock the mystery of hieroglyphs." },
    { title: "Assassination of Julius Caesar", year: -44, category: "conflict", description: "The Roman Republic begins its shift into the Roman Empire." },
    { title: "Crucifixion of Jesus", year: 33, category: "culture", description: "A central event in the founding of Christianity." },
    { title: "Eruption of Mt. Vesuvius", year: 79, category: "discovery", description: "The cities of Pompeii and Herculaneum are buried in ash." },
    { title: "Paper Invented in China", year: 105, category: "science", description: "Ts'ai Lun invents the modern papermaking process." },
    { title: "Hadrian's Wall Built", year: 122, category: "conflict", description: "The Roman Empire marks its northern boundary in Britain." },
    { title: "Constantinople Founded", year: 330, category: "culture", description: "Constantine the Great moves the Roman capital to the East." },
    { title: "Fall of the Western Roman Empire", year: 476, category: "conflict", description: "The last Roman Emperor is deposed, ending antiquity." },

    // --- MIDDLE AGES (500 to 1400) ---
    { title: "Justinian's Plague", year: 541, category: "science", description: "One of the first recorded major bubonic plague outbreaks." },
    { title: "Hegira of Muhammad", year: 622, category: "culture", description: "The journey from Mecca to Medina; Year 1 of the Islamic calendar." },
    { title: "Battle of Tours", year: 732, category: "conflict", description: "Charles Martel halts the Umayyad advance into France." },
    { title: "Vikings Raid Lindisfarne", year: 793, category: "conflict", description: "The start of the Viking Age in Europe." },
    { title: "Charlemagne Crowned", year: 800, category: "culture", description: "The founding of the Holy Roman Empire." },
    { title: "Invention of Gunpowder", year: 850, category: "science", description: "Chinese alchemists accidentally discover the explosive powder." },
    { title: "Schism of 1054", year: 1054, category: "culture", description: "The permanent split between the Catholic and Orthodox churches." },
    { title: "Battle of Hastings", year: 1066, category: "conflict", description: "William the Conqueror begins Norman rule in England." },
    { title: "The First Crusade", year: 1096, category: "conflict", description: "Christian forces capture Jerusalem." },
    { title: "Magna Carta Signed", year: 1215, category: "culture", description: "The foundation of constitutional law in the Western world." },
    { title: "Mongols Conquer Baghdad", year: 1258, category: "conflict", description: "The end of the Islamic Golden Age." },
    { title: "Black Death Hits Europe", year: 1347, category: "science", description: "The plague kills nearly half of the European population." },
    { title: "Battle of Agincourt", year: 1415, category: "conflict", description: "English longbows secure a massive victory over the French." },
    { title: "Invention of the Printing Press", year: 1440, category: "science", description: "Gutenberg begins the Information Age." },

    // --- RENAISSANCE & EARLY MODERN (1450 to 1800) ---
    { title: "Fall of Constantinople", year: 1453, category: "conflict", description: "The Ottoman Empire takes the city, ending the Byzantine Empire." },
    { title: "Leonardo da Vinci Born", year: 1452, category: "culture", description: "The birth of the ultimate Renaissance man." },
    { title: "Columbus Reaches Americas", year: 1492, category: "discovery", description: "The start of transatlantic contact between Europe and the Americas." },
    { title: "Mona Lisa Painted", year: 1503, category: "culture", description: "Leonardo begins his most famous portrait." },
    { title: "95 Theses Posted", year: 1517, category: "culture", description: "Martin Luther begins the Protestant Reformation." },
    { title: "Magellan's Circumnavigation", year: 1522, category: "discovery", description: "The first voyage to sail around the entire world." },
    { title: "Heliocentrism Proposed", year: 1543, category: "science", description: "Copernicus argues that the Earth orbits the Sun." },
    { title: "Battle of Lepanto", year: 1571, category: "conflict", description: "Naval victory halts Ottoman expansion in the Mediterranean." },
    { title: "Spanish Armada Defeated", year: 1588, category: "conflict", description: "England becomes a major naval power." },
    { title: "Edict of Nantes", year: 1598, category: "culture", description: "Religious tolerance is granted to French Protestants." },
    { title: "Jamestown Founded", year: 1607, category: "discovery", description: "The first permanent English settlement in North America." },
    { title: "Galileo’s Telescope", year: 1610, category: "science", description: "Galileo discovers the moons of Jupiter." },
    { title: "Mayflower Compact", year: 1620, category: "culture", description: "The first governing document of Plymouth Colony." },
    { title: "Harvey Discovers Blood Circulation", year: 1628, category: "science", description: "A major breakthrough in human anatomy." },
    { title: "Taj Mahal Construction Begins", year: 1632, category: "culture", description: "Shah Jahan builds a monument to his late wife." },
    { title: "Newton Publishes Principia", year: 1687, category: "science", description: "Newton outlines the laws of gravity and motion." },
    { title: "Steam Engine Patented", year: 1698, category: "science", description: "Thomas Savery invents a machine to pump water from mines." },
    { title: "Declaration of Independence", year: 1776, category: "culture", description: "The United States declares freedom from Britain." },
    { title: "French Revolution Begins", year: 1789, category: "conflict", description: "The Storming of the Bastille in Paris." },
    { title: "First Smallpox Vaccine", year: 1796, category: "science", description: "Edward Jenner creates the first vaccine." },
    { title: "Rosetta Stone Discovered", year: 1799, category: "discovery", description: "French soldiers find the stone in Egypt." },

    // --- 19TH CENTURY (1801 to 1900) ---
    { title: "Battle of Trafalgar", year: 1805, category: "conflict", description: "Lord Nelson defeats the French and Spanish fleets." },
    { title: "Lewis and Clark Expedition", year: 1804, category: "discovery", description: "Exploration of the newly purchased Louisiana Territory." },
    { title: "Battle of Waterloo", year: 1815, category: "conflict", description: "Napoleon's final defeat." },
    { title: "First Photograph", year: 1826, category: "science", description: "Nicéphore Niépce produces the first permanent image." },
    { title: "Abolition of Slavery (UK)", year: 1833, category: "culture", description: "Slavery is abolished throughout the British Empire." },
    { title: "Telegraph Invented", year: 1837, category: "science", description: "Morse and Wheatstone revolutionize communication." },
    { title: "Mexican-American War", year: 1846, category: "conflict", description: "Conflict results in the US gaining massive territory." },
    { title: "Communist Manifesto Published", year: 1848, category: "culture", description: "Marx and Engels outline their political theory." },
    { title: "Origin of Species", year: 1859, category: "science", description: "Darwin introduces the theory of natural selection." },
    { title: "American Civil War Begins", year: 1861, category: "conflict", description: "The North and South fight over slavery and states' rights." },
    { title: "Emancipation Proclamation", year: 1863, category: "culture", description: "Lincoln declares all slaves in rebel states free." },
    { title: "Suez Canal Opens", year: 1869, category: "discovery", description: "A vital waterway connecting the Mediterranean to the Red Sea." },
    { title: "Telephone Patented", year: 1876, category: "science", description: "Alexander Graham Bell changes communication forever." },
    { title: "Light Bulb Invented", year: 1879, category: "science", description: "Edison creates a practical incandescent bulb." },
    { title: "Berlin Conference", year: 1884, category: "conflict", description: "European powers divide Africa among themselves." },
    { title: "Statue of Liberty Dedicated", year: 1886, category: "culture", description: "A gift from France to the United States." },
    { title: "Eiffel Tower Completed", year: 1889, category: "culture", description: "Built as the entrance to the 1889 World's Fair." },
    { title: "Discovery of X-rays", year: 1895, category: "science", description: "Wilhelm Röntgen discovers electromagnetic radiation." },
    { title: "Modern Olympics Revived", year: 1896, category: "culture", description: "The first modern games are held in Athens." },
    { title: "Discovery of Radium", year: 1898, category: "science", description: "Marie and Pierre Curie discover the radioactive element." },

    // --- 20TH CENTURY (1901 to 1950) ---
    { title: "Wright Brothers' Flight", year: 1903, category: "science", description: "The first powered, controlled flight at Kitty Hawk." },
    { title: "San Francisco Earthquake", year: 1906, category: "discovery", description: "A massive quake and fire destroy much of the city." },
    { title: "Sinking of the Titanic", year: 1912, category: "discovery", description: "The world's largest ship sinks on its maiden voyage." },
    { title: "World War I Begins", year: 1914, category: "conflict", description: "Global conflict triggered by the assassination of Archduke Franz Ferdinand." },
    { title: "Panama Canal Opens", year: 1914, category: "discovery", description: "Connecting the Atlantic and Pacific Oceans." },
    { title: "Russian Revolution", year: 1917, category: "conflict", description: "The Bolsheviks take power, leading to the Soviet Union." },
    { title: "Treaty of Versailles", year: 1919, category: "culture", description: "The official end of World War I." },
    { title: "Insulin Discovered", year: 1921, category: "science", description: "Banting and Best discover a treatment for diabetes." },
    { title: "Tutankhamun's Tomb Found", year: 1922, category: "discovery", description: "Howard Carter finds the boy king's intact tomb." },
    { title: "First Television Broadcast", year: 1927, category: "science", description: "Philo Farnsworth demonstrates electronic television." },
    { title: "Discovery of Penicillin", year: 1928, category: "science", description: "Alexander Fleming finds the first antibiotic." },
    { title: "Wall Street Crash", year: 1929, category: "culture", description: "The start of the Great Depression." },
    { title: "Hindenburg Disaster", year: 1937, category: "discovery", description: "The end of the era of passenger airships." },
    { title: "World War II Begins", year: 1939, category: "conflict", description: "Germany invades Poland." },
    { title: "Pearl Harbor Attacked", year: 1941, category: "conflict", description: "The US enters World War II after a surprise attack by Japan." },
    { title: "D-Day Landings", year: 1944, category: "conflict", description: "Allied forces invade Normandy." },
    { title: "Hiroshima and Nagasaki", year: 1945, category: "conflict", description: "The first and only use of nuclear weapons in war." },
    { title: "United Nations Founded", year: 1945, category: "culture", description: "Established to maintain international peace." },
    { title: "First Electronic Computer", year: 1946, category: "science", description: "ENIAC is completed at the University of Pennsylvania." },
    { title: "India Gains Independence", year: 1947, category: "culture", description: "India becomes free from British rule." },
    { title: "State of Israel Founded", year: 1948, category: "culture", description: "The establishment of a Jewish homeland." },
    { title: "NATO Formed", year: 1949, category: "conflict", description: "A military alliance to counter Soviet expansion." },

    // --- 20TH CENTURY (1951 to 1999) ---
    { title: "DNA Structure Discovered", year: 1953, category: "science", description: "Watson and Crick describe the double helix." },
    { title: "Korean War Ends", year: 1953, category: "conflict", description: "An armistice is signed, splitting the peninsula." },
    { title: "Sputnik Launch", year: 1957, category: "science", description: "The first artificial satellite is sent into space by the USSR." },
    { title: "NASA Founded", year: 1958, category: "science", description: "The US creates the National Aeronautics and Space Administration." },
    { title: "First Human in Space", year: 1961, category: "discovery", description: "Yuri Gagarin orbits the Earth." },
    { title: "Cuban Missile Crisis", year: 1962, category: "conflict", description: "The closest the world came to nuclear war." },
    { title: "I Have a Dream Speech", year: 1963, category: "culture", description: "Martin Luther King Jr. leads the March on Washington." },
    { title: "JFK Assassinated", year: 1963, category: "conflict", description: "President John F. Kennedy is killed in Dallas." },
    { title: "Civil Rights Act (US)", year: 1964, category: "culture", description: "Landmark legislation outlawing discrimination." },
    { title: "Vietnam War Escalation", year: 1965, category: "conflict", description: "Massive deployment of US troops to Vietnam." },
    { title: "Apollo 11 Moon Landing", year: 1969, category: "discovery", description: "Neil Armstrong becomes the first human on the moon." },
    { title: "Woodstock Festival", year: 1969, category: "culture", description: "The defining moment of the 1960s counterculture." },
    { title: "First Microprocessor", year: 1971, category: "science", description: "Intel releases the 4004 chip." },
    { title: "Munich Olympics Massacre", year: 1972, category: "conflict", description: "Terrorist attack on Israeli athletes." },
    { title: "Watergate Resignation", year: 1974, category: "culture", description: "Richard Nixon becomes the first US president to resign." },
    { title: "Fall of Saigon", year: 1975, category: "conflict", description: "The end of the Vietnam War." },
    { title: "Star Wars Released", year: 1977, category: "culture", description: "A film that revolutionizes cinema and pop culture." },
    { title: "Islamic Revolution in Iran", year: 1979, category: "culture", description: "The Shah is overthrown and replaced by a theocracy." },
    { title: "CD Technology Introduced", year: 1982, category: "science", description: "Compact discs begin to replace vinyl records." },
    { title: "Chernobyl Disaster", year: 1986, category: "science", description: "The world's worst nuclear power plant accident." },
    { title: "Berlin Wall Falls", year: 1989, category: "culture", description: "The symbolic end of the Cold War." },
    { title: "World Wide Web Invented", year: 1989, category: "science", description: "Tim Berners-Lee creates the system for the modern internet." },
    { title: "Hubble Telescope Launched", year: 1990, category: "science", description: "A telescope launched into orbit to see deep into the universe." },
    { title: "Nelson Mandela Released", year: 1990, category: "culture", description: "Ending 27 years of imprisonment." },
    { title: "Soviet Union Dissolves", year: 1991, category: "conflict", description: "The Cold War officially ends." },
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

console.log(`Successfully loaded ${historicalEvents.length} events!`);
// Function to calculate the precise time difference
function updateLiveCounter(eventYear) {
    const counterElement = document.getElementById('live-counter');
    if (!counterElement) return;

    const update = () => {
        const now = new Date();
        // Handle BCE years (negative) vs CE years
        const eventDate = new Date(eventYear, 0, 1);
        
        let diff = now.getTime() - eventDate.getTime();
        
        // Basic conversion math
        const msPerDay = 1000 * 60 * 60 * 24;
        const msPerMonth = msPerDay * 30.44; // Average month length
        const msPerYear = msPerDay * 365.25;

        const years = Math.floor(diff / msPerYear);
        diff %= msPerYear;
        const months = Math.floor(diff / msPerMonth);
        diff %= msPerMonth;
        const days = Math.floor(diff / msPerDay);

        counterElement.innerText = `${years} Years, ${months} Months, and ${days} Days ago`;
    };

    // Run immediately and then every 24 hours (since days are our smallest unit)
    update();
    setInterval(update, 86400000); 
}

// The main Randomizer Function
function randomizeEvent() {
    const randomIndex = Math.floor(Math.random() * historicalEvents.length);
    const selectedEvent = historicalEvents[randomIndex];

    // 1. Update the UI
    displayEvent(selectedEvent);

    // 2. Save to localStorage
    localStorage.setItem('savedBearsEvent', JSON.stringify(selectedEvent));
}

// Function to render the event to the DOM
function displayEvent(event) {
    const container = document.querySelector('.container');
    
    // Clear previous or update specific elements
    container.innerHTML = `
        <h1 style="font-size: 2.5rem;">${event.title}</h1>
        <p style="color: var(--bears-orange); font-weight: bold;">${event.year < 0 ? Math.abs(event.year) + ' BCE' : event.year}</p>
        <p>${event.description}</p>
        <div id="live-counter" style="margin-top: 20px; font-family: monospace; background: rgba(200, 56, 3, 0.2); padding: 10px; border-radius: 8px;"></div>
        <button id="random-btn" style="margin-top: 20px; padding: 10px 20px; background: var(--bears-orange); color: white; border: none; border-radius: 5px; cursor: pointer;">RANDOMIZE</button>
    `;

    // Re-attach listener to the new button
    document.getElementById('random-btn').addEventListener('click', randomizeEvent);
    
    // Start the counter
    updateLiveCounter(event.year);
}

// --- ON PAGE LOAD ---
window.addEventListener('DOMContentLoaded', () => {
    const savedData = localStorage.getItem('savedBearsEvent');
    
    if (savedData) {
        // If the user was here before, show their last event
        displayEvent(JSON.parse(savedData));
    } else {
        // Otherwise, show a default or trigger the first random one
        randomizeEvent();
    }
});