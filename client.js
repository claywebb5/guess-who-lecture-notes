console.log("Here are all the available people:", people);

let guessingName;

// run main function when jquery is ready
$(main);

function main() {
	console.log("JQuery is loaded");
	addPictures();
	addRandomName();
	$("#pictures").on("click", ".correctImage", correctPerson);
}

// This will append the pictures on the DOM on page load
function addPictures() {
	console.log("In addPictures");
	for (let person of people) {
		$("#pictures").append(`
            <img class="correctImage" data-name="${person.name}" src="https://github.com/${person.githubUsername}.png?size=250" alt="Profile image of ${person.name}">
        `);
	}
} // End addPictures function

function randomNumber(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);
}

function addRandomName() {
	guessingName = people[randomNumber(0, people.length - 1)].name;
	console.log("Here is the name:", guessingName);
	$("#nameContainer").text(guessingName);
}

function correctPerson() {
	console.log($(this));
	if ($(this).data().name === guessingName) {
		alert("Correct");
        addRandomName();
	} else {
		alert("Try again");
	}
}

// console.log('persons at', people[0]);

// console.log("person at", people[randomNumber(0, people.length -1)]);
