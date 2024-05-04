
// Define the endpoint for fetching fee details
const feeEndpoint = 'http://localhost:3000/FeeDetails';
console.log(feeEndpoint);// Log the endpoint to the console for verification


// Wait for the DOM content to be loaded before executing the script
document.addEventListener("DOMContentLoaded", () => {
    // Select all elements with the class "btn" and attach an event listener to each
    const searchButton = document.getElementsByClassName("btn");
    Array.from(searchButton).forEach(button => {
        button.addEventListener('click', getStudentDetails);// Listen for click events on buttons
    });
    // Function to handle fetching student details
    function getStudentDetails() {
        // Fetch data from the defined endpoint
    }
    fetch(feeEndpoint)
        .then(response => response.json())
        .then(data => {
            // Handle the retrieved data
            console.log(data); // Log the data to the console
        })
        .catch(error => {
            // Catch any errors that occurred during the fetch process
            console.error('Error fetching fee data: ', error);

        });
})

document.getElementById('people-btn').addEventListener('click', function () {
    alert("The following is only a display of the students in the system, for more information click on the search bar and enter your name");

    const names = ['Gerald Kisilu', 'Edwin Mwangi', 'Abdi Shukri', 'Grace Gitau', 'Brian Onduso', 'Valeria Wabwire',
        'Ernest Musau', 'Emmanuel Waseth', 'Brian Omondi', 'Sharon Bygeon'];
    const namesContainer = document.getElementById('namesContainer');
    namesContainer.innerHTML = '';
    names.forEach(name => {
        const p = document.createElement('p');
        p.textContent = name;
        namesContainer.appendChild(p);
    });

    namesContainer.style.display = 'block';

    // Stop propagation to prevent the document click handler from hiding the container 
    event.stopPropagation();
});

// Event listener to hide the container when clicking outside of it
document.addEventListener('click', function (event) {
    const namesContainer = document.getElementById('namesContainer');
    // Check if the click is outside the namesContainer
    if (!namesContainer.contains(event.target)) {
        namesContainer.style.display = 'none';
    }
});

//Stop propagation for clicks inside the namesContainer
document.getElementById('namesContainer').addEventListener('click', function (event) {
    event.stopPropagation();
});

// Add an event listener to display the details of the students 
document.querySelector('.searchbtn').addEventListener('click', function (event) {
    // Prevent submission of a form and handle the click event
    event.preventDefault();
    const inputName = document.querySelector('[name="enter name"]').value.toLowerCase();
    const resultsContainer = document.getElementById('searchResults');
    resultsContainer.innerHTML = '';
    // Array of the details provided in the db.json
    const feeDetails = [
        { id: "1", FirstName: "Gerald", LastName: "Kisilu", FeePaid: "ksh153,000", FeeBalance: "ksh47,000" },
        { id: "2", FirstName: "Edwin", LastName: "Mwangi", FeePaid: "ksh200,000", FeeBalance: "ksh0.00" },
        { id: "3", FirstName: "Abdi", LastName: "Shukri", FeePaid: "ksh50,000", FeeBalance: "ksh150,000" },
        { id: "4", FirstName: "Grace", LastName: "Gitau", FeePaid: "ksh100,000", FeeBalance: "ksh100,000" },
        { id: "5", FirstName: "Brian", LastName: "Onduso", FeePaid: "ksh145,000", FeeBalance: "ksh55,000" },
        { id: "6", FirstName: "Valeria", LastName: "Wabwire", FeePaid: "ksh200,000", FeeBalance: "ksh0.00" },
        { id: "7", FirstName: "Ernest", LastName: "Musau", FeePaid: "ksh77,000", FeeBalance: "ksh123,000" },
        { id: "8", FirstName: "Emmanuel", LastName: "Waseth", FeePaid: "ksh123,000", FeeBalance: "ksh77,000" },
        { id: "9", FirstName: "Brian", LastName: "Omondi", FeePaid: "ksh15,000", FeeBalance: "ksh185,000" },
        { id: "10", FirstName: "Sharon", LastName: "Bygeon", FeePaid: "ksh200,000", FeeBalance: "ksh0.00" }
    ];

    // Filter details according to the name searched
    const filteredResults = feeDetails.filter(person =>
        person.FirstName.toLowerCase().includes(inputName) || person.LastName.toLowerCase().includes(inputName)
    );
    // Display the results of the search
    if (filteredResults.length > 0) {
        filteredResults.forEach(person => {
            // Create a division for each person and match colors with status of thier fee payments
            const personDiv = document.createElement('div');
            const backgroundColor = person.FeeBalance === "ksh0.00" ? 'green' : 'red';
            personDiv.style.backgroundColor = backgroundColor;
            // Format for apperance of the details
            personDiv.innerHTML = `
                <strong>${person.FirstName} ${person.LastName}</strong><br>
                Fee Paid: ${person.FeePaid}<br>
                Fee Balance: ${person.FeeBalance}
            `;
            resultsContainer.appendChild(personDiv);
        });
        // Make the details container visible
        resultsContainer.classList.remove('hidden');
    } else {
        // Display a message if the results for the search are not found
        resultsContainer.innerHTML = 'No results found';
      
    }
});

// Add an event listener to the notification icon
const notification = document.getElementsByClassName('icon-button')[0];
notification.addEventListener('click', function () {
    // Display the following alerts when the icon is clicked
    alert("This is a reminder to check on your payment dates for the stipulated installments in the table provided for you");
    alert("If your status is on red, kindly remember to clear your balance before the given period ends, otherwise disregard this notification if you have cleared(green)");
});

// Add an event listener ti display a report 
document.addEventListener("DOMContentLoaded", () => {
    // Get the button element as it is in HTML
    const button = document.getElementById('show-announcements-btn');
    // The the message to popover when the report button is clicked
    const popover = document.getElementById('popover-content');

    button.addEventListener('click', () => {
        // Loop to toggle popover to be visibile
        if (popover.style.display === 'none') {
            // If it is hidden, display it
            popover.style.display = 'block';
            const rect = button.getBoundingClientRect();
            // If it is visible, hide it
        } else {
            popover.style.display = 'none';
        }
    });

    // Hide popover when clicking outside
    document.addEventListener('click', function (event) {
        const isClickInside = button.contains(event.target) || popover.contains(event.target);
        if (!isClickInside) {
            popover.style.display = 'none';
        }
    });
});

//Addd an event listener to show the courses when the button is clicked
document.getElementById('courses-btn').addEventListener('click', function () {
    var courses = document.getElementById('courses');
    courses.style.display = (courses.style.display == 'block') ? 'none' : 'block';
});

//Adding an event listener to hide the courses displayed
document.addEventListener('click', function (event) {
    var courses = document.getElementById('courses');
    //Loop to hide the courses
    if (!courses.contains(event.target) && event.target !== document.getElementById('courses-btn')) {
        courses.style.display = 'none';
    }
});

// Adding an event listener to the calendar button
document.getElementById('calendar-btn').addEventListener('click', function (event) {
    //Declaring a variable to display the calendar 
    const calendar = document.getElementById('calendar');
    // A loop to display the calendar
    if (calendar.style.display === 'block') {
        // Hide the calendar once displayed
        calendar.style.display = 'none';
    } else {
        // Display the calendar if it is hidden
        calendar.style.display = 'block';
        generateCalendar();
    }
    event.stopPropagation();
});
// Add event listener to hide calendar when it is clicked outside
document.addEventListener('click', function (event) {
    const calendar = document.getElementById('calendar');
    if (!calendar.contains(event.target) && event.target !== document.getElementById('calendar-btn')) {
        calendar.style.display = 'none';
    }
});

// Created a function to generate a calendar when the calendar button is clicked
function generateCalendar() {
    const calendar = document.getElementById('calendar');
    calendar.innerHTML = '';
    //Declaring a variable to display at least a month for the calendar
    const month = "January 2021";
    // A variable for an array
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    // A variable for the first day of the month
    let date = 1;
    // A variable to display the calendar in a table, using let to create a loop for the iterables
    let output = `<div>${month}</div><table><tr>`;
    // Create a loop for each day and add table headers
    for (let day of days) {
        output += `<th>${day}</th>`;
    }
    // Close the row for the first week
    output += `</tr><tr>`;
    // Loop through 31 days
    for (let i = 0; i < 31; i++) { 
        // If it is a new week start a new row
        if (i % 7 === 0 && i !== 0) {
            // Close the row and start a new one 
            output += `</tr><tr>`;
        }
        output += `<td>${date++}</td>`;
    }
    // Close the last row and the table as well
    output += `</tr></table>`;
    calendar.innerHTML = output;
};
console.log(generateCalendar);