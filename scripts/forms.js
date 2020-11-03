let userId = 0;
// This function takes the value of the given HTML element and places it into an object which is then passed into an array.
function saveReview(event) {
    let comment = document.getElementById("exampleFormControlTextarea1").value
    let name = document.getElementById("exampleFormControlInput1").value
    let starRating = document.getElementById("exampleFormControlSelect1").value
	event.preventDefault();
	const comments = [];
	let text = {
		id: userId++,
		comment, 
		name, 
		starRating, 
    };
	comments.push(text);
	let reviews = document.createElement("div");
    reviews.innerHTML = renderComments(comments);
    // Writing to DataBase
    writeUserData(
        userId,
        name,
        comment,
        starRating
    );
    userId++;
}
// This function takes in the comments array and maps over it to return another array that is then passed into the rendered card.
function renderComments(comments) {
	let commentsReview = comments
		.map((review) => {
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
		})
		.join("");
	return commentsReview;
}
// Get a reference to the database service
var database = firebase.database();
const events = database.ref();
const query = events.child("Shop-Reviews");
query.on("value", snap => {
    document.getElementById("comments").innerHTML = snap.val().map(review => {
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
    }).join("");
});
//Write to DataBase
function writeUserData(userId, name, comment, starRating) {
    // Adding data to the userId node
	database.ref("Shop-Reviews/" + userId).set({
		name,
		comment,
		starRating
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

window.onload = function() {
    let reviewHTML = document.getElementById('review');
    let tempForm = renderForms()
    let reviewButton = document.getElementsByClassName('reviewButton');
    for (let i = 0; i < reviewButton.length; i++) {
        reviewButton[i].addEventListener('click', () => {
            reviewHTML.innerHTML = tempForm;
            document.getElementById('submitButton').addEventListener('click', saveReview);
        });
    };
};
