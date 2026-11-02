// Select Category Buttons
const categoryButtons = document.querySelectorAll(".category-btn");

// Select Country Dropdown
const countryDropdown = document.getElementById("countries");

// Selected Values
let selectedCountry = "all";

// Category Button Click Event
categoryButtons.forEach(function (button) {
    button.addEventListener("click", function () {

        // Remove active class from all buttons
        categoryButtons.forEach(function (btn) {
            btn.classList.remove("active");
        });

        // Add active class to clicked button
        button.classList.add("active");

        // Get selected category
        selectedCategory = button.dataset.category;
        console.log("Category:", selectedCategory);

    });

});

// Country Dropdown Change Event
countryDropdown.addEventListener("change", function () {
    selectedCountry = countryDropdown.value;
    console.log("Country:", selectedCountry);

});

// Get HTML Elements

const searchInput = document.getElementById("search");
const searchBtn = document.getElementById("searchBtn");
const countrySelect = document.getElementById("Countries");
const destinationContainer = document.getElementById("destination-container");
const noResults = document.getElementById("no-results");
const destinationCards = document.querySelectorAll(".destination-card");

// Store Selected Category

let selectedCategory = "All";

// MAIN FILTER FUNCTION //

function applyFilters() {

    // Get Search Value

    const searchValue = searchInput.value.toLowerCase().trim();

    // Get Selected Country

    const selectedCountry = countrySelect.value;

    let visibleCount = 0;

    // Check Every Destination Card

    destinationCards.forEach(function (card) {
        const title = card.querySelector("h3").textContent.toLowerCase();
        const description = card.querySelector("p").textContent.toLowerCase();
        const country = card.dataset.country;
        const category = card.dataset.category;

        // Search Filter

        const matchesSearch =
            title.includes(searchValue) 
            description.includes(searchValue) 
            country.toLowerCase().includes(searchValue);

        // Country Filter

        const matchesCountry =
            selectedCountry === ""
            country === selectedCountry;

        // Category Filter

        const matchesCategory =
            selectedCategory === "All"
            category === selectedCategory;

        // Final Result

        if (matchesSearch && matchesCountry && matchesCategory) {
            card.style.display = "block";
            visibleCount++;

        } else {

            card.style.display = "none";

        }

    });


    // No Results Message

    if (visibleCount === 0) {
        noResults.style.display = "block";
    } else {
        noResults.style.display = "none";

    }

}

//  CATEGORY FILTER FUNCTIONS
function goNature() {
    selectedCategory = "Nature";
    applyFilters();

}

function goHistory() {
    selectedCategory = "History";
    applyFilters();

}

function goFamousLandmark() {
    selectedCategory = "Famous Landmark";
    applyFilters();

}

function goWildlife() {
    selectedCategory = "Wildlife";
    applyFilters();

}

function goBuildings() {
    selectedCategory = "Buildings";
    applyFilters();

}

function goFestivals() {
    selectedCategory = "Festivals";
    applyFilters();

}

function goExperience() {
    selectedCategory = "Experience";
    applyFilters();

}

//  SEARCH FUNCTION //
searchInput.addEventListener("input", function () {
    applyFilters();

});

searchBtn.addEventListener("click", function () {
    applyFilters();

});

// COUNTRY FILTER //

countrySelect.addEventListener("change", function () {
    applyFilters();

});

// INITIAL DISPLAY //

applyFilters();