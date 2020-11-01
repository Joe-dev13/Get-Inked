let userId = 0;

// This function takes the value of the given HTML element and places it into an object which is then passed into an array.
function saveReview(event) {
	// Stops the elemnet from refreshing once clicked.
	event.preventDefault();
	// An emtey  array for the object to be added to.
	const comments = [];
	// An object that contains the values of the HTML elements.
	let text = {
		id: userId++,
		comment: document.getElementById("exampleFormControlTextarea1").value,
		name: document.getElementById("exampleFormControlInput1").value,
		starRating: document.getElementById("exampleFormControlSelect1").value,
	};
	// Adding the text object to the comments array.
	comments.push(text);
	// Setting the HTML of the comments div equal to the result of the renderComments function.
	let reviews = document.createElement("div");
	document.getElementById("comments").appendChild(reviews);
	reviews.innerHTML = renderComments(comments);
}
// This function takes in the comments array and maps over it to return another array that is then passed into the rendered card.
function renderComments(comments) {
	// Built in map function used to inject the data from the comments array in to the card.
	let commentsReview = comments
		.map((review) => {
			writeUserData(
				`${review.name}`,
				`${review.comment}`,
				`${review.starRating}`
			);
			// Returning the rendered card with the data add through templet literal's.
			return `
        <div id="card-wrapper">
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${review.name}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${review.starRating} star's</h6>
                    <p class="card-text">${review.comment}</p>
                </div>
            </div>
        </div>
        `;
			// Joining the different indexs together.
		})
		.join("");
	// Returning the new array
	return commentsReview;
}
// Get a reference to the database service
var database = firebase.database();
const events = database.ref("Shop-Reviews");
const query = events.orderByChild("Joeseph Epherson");
query.on("value", (snap) => {
	console.log(snap, "snapped on em");
});
function writeUserData(userId, name, comment, starRating) {
	database.ref("Shop-Reviews/" + userId).push({
		name: document.getElementById("exampleFormControlInput1").value,
		comment: document.getElementById("exampleFormControlTextarea1").value,
		starRating: document.getElementById("exampleFormControlSelect1").value,
	});
	return firebase
		.database()
		.ref("/Shop-Reviews/" + userId)
		.once("value")
		.then(function (snapshot) {
			var username =
				(snapshot.val() && snapshot.val().username) || "Anonymous";
			console.log(snapshot.val());
		});
}
// This Function renders the form that is filled out to the DOM.
function renderForms() {
	return `
    <div class = "form">
        <form>
            <div class="form-group">
            <label for="exampleFormControlInput1">Full Name</label>
            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Full Name">
            </div>
            <div class="form-group">
            <label for="exampleFormControlSelect1">Star Rating</label>
                <select class="form-control" id="exampleFormControlSelect1">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
            </div> 
            <div class="form-group">
                <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Leave a Review"></textarea>
            </div>
            <div>
            <button id="submitButton" type="submit" class="btn btn-dark">Submit Review</button>
            </div>
        </form>
    </div>
    `;
}
// Setting the HTML of the forms div equal to the result of the renderForms() function
document.getElementById("review").innerHTML = renderForms();
document.getElementById("submitButton").addEventListener("click", saveReview);

// window.onload = function () {
// 	//let reviewButton = document.getElementById("reviewButton");
// 	//let reviewHTML = document.getElementById("review");
// 	//let tempForm = renderForms();
// 	//reviewButton.addEventListener("click", () => {
// 		//reviewHTML.innerHTML = tempForm;
// 		document
// 			.getElementById("submitButton")
// 			.addEventListener("click", saveReview);
// 	});
// };

// Taking the submitButton and adding a click event listener to it that runs the saveReview() once the event has happened.
