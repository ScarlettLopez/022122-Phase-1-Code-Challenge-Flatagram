// write your code here
// As a user, I can:

// See the image received from the server, including its title, likes and comments when the page loads. You will need to make a GET request to the following endpoint to retrieve the image data, along with its associated comments:

const puppyUrl = 'http://localhost:3000/images/1'
const imageContainer = document.getElementById('image-container')
const commentsDisplay = document.getElementById('comments-list')


fetch(puppyUrl)
.then(res => res.json()) //<--this is the only part that I successfully got to work (yay)
//.then(json => console.log(json));
.then(displayPuppyImage)


function displayPuppyImage(pupperObject) {
    //console.log(pupperObject)
    pupperObject.forEach(addPuppyToPage) //<-- this was supose to show the image of the cute coder dog but I realized that maybe it wasn't an array but an object and I think that forEach is only used on array's so this is where my code was saying pupperObject is not a function X_X
}

function addPuppyToPage(puppy) { //<-- this was suppose to be called in ^ that function in order to display the coder dog
    const puppyImage = document.createElement('img');
    puppyImage.src = puppy.image;

    //I know a click event is needed in this portion I just don't really know how to properly write it out

    imageContainer.append(puppyImage)
}

function displayPuppyDets(puppy) { //<--This was suppose to display the comments under the image when the Post button was clicked
    commentsDisplay.textContent = puppy.comments
}








//I know my code isn't going to work properly (I apologize about that) Im most likely going to end up having to retake it I feel like i just need to get a firm grasp on what is being asked of me in the question I tried my best but got extremely confused I am dissapointed that its been two weeks and I am still trying to understand how to use everything and what goes where but I am still hopeful