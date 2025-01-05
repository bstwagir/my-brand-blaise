const submitBtn = document.querySelector('.submit__btn')
const comment = document.querySelector('#comment')
const likeIcon = document.querySelector('.heart__icon')
const count = document.querySelector('.count')
const commentsCont = document.querySelector('.comments__container')

var messageDataCount = document.querySelector('#singlepost'),
 blog = JSON.parse(localStorage.getItem('currentBlog')),
 user= JSON.parse(localStorage.getItem('current_user'));
console.log(messageDataCount, blog, user)

console.log(blog[0]._id);

function addFeedback(data){
    console.log(data)
    console.log(messageDataCount)
if(data != null && data.length > 0){
    data.map((item) => {
        const div = document.createElement('div')
        div.classList = "container singlepost_container"

        div.innerHTML = `

        <h1 style="font-weight: 800; margin-bottom: 5%; text-align:center; color:black; font-size:40px">${item.title}</h1>
        <div class="singlepost_image">
                <img src="${item.image}" alt="">

                </div>
                <div>
                 <p>${item.content}</p>
                 </div>
     
             
             
         </div>
         `
         messageDataCount.insertAdjacentElement('beforeend', div)
    })
}}

addFeedback(blog)


likeIcon.addEventListener('click', likeVideo)
submitBtn.addEventListener('click', submitFeedback)

/**var myHeaders = new Headers();
    myHeaders.append("authorization", JSON.parse(localStorage.getItem('current_user')).accessToken);

var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch(`http://localhost:5000/server/posts/${blog[0]._id}/comments`, requestOptions)
    .then(response => response.text())
    .then(result => {console.log(result), localStorage.setItem('commentData', result)})
    .catch(error => console.log('error', error));

    var fetchData = JSON.parse(localStorage.getItem('blogData'));*/

feedbackArr = [{
    "userName": "Honore",
    "userComment": "That was impressive",
}]
let positiveFeedback = false
let likesCount = 0

var previousComment = {
    "userName": "Honore",
    "comment": "That was impressive",
    "typeOfFeedback": positiveFeedback
}
feedbackArr.push(previousComment)

function submitFeedback(e){
    // get user name
    // get feedback 
    if (user){
    const commentForm = comment.value 
    // if inputs are not empty
        // create new feedback
        newFeedback = {
            "userName": user.others.name,
            "userComment": commentForm,
            "typeOfFeedback": positiveFeedback
        }
        // add new feedback to array

        feedbackArr.push(newFeedback)
        // if liked add to count
        
        // clear inputs 
        resetForm()
        // add feedback to list
        addComment(newFeedback)

        var myHeaders = new Headers();
    myHeaders.append("authorization", JSON.parse(localStorage.getItem('current_user')).accessToken);
    myHeaders.append("Content-Type", "application/json");

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: JSON.stringify({
    comment : commentForm
  }),
  redirect: 'follow'
};

fetch(`http://localhost:5000/server/posts/${blog[0]._id}/comments`, requestOptions)
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
            
    
        
        }

else {
    location.href="../pages/LogIn.html"
}

    e.preventDefault()
}

function likeVideo(){
    //likeIcon.classList.toggle('liked')
    addLikes()
   
}

function addLikes(){
    likesCount++
    count.innerHTML = likesCount
}


function resetForm(){
    //userName.value = ''
    comment.value = ''
    //likeIcon.innerHTML = `<i class="far fa-heart"></i>`
    positiveFeedback = false
}

function addComment(item){
    // select first letter of the user name
    const letter = (item.userName)
    // create new div
    const div = document.createElement('div')
    // add class
    div.classList = 'comment__card'
    // add id
    // add html
    div.innerHTML = `
    <div class="pic center__display">
                  
                </div>
                <div class="comment__info">
                    <small class="nickname">
                        ${item.userName}
                    </small>
                    <p class="comment">
                        ${item.userComment}
                    </p>
                    <div class="comment__bottom">
                        <div class="heart__icon--comment">
                            ${item.typeOfFeedback ? `<i class="fas fa-heart positive"></i>` : `<i class="far fa-heart"></i>`}
                        </div>
                        <button onclick="deleteProduct(${--i});">
                            Delete
                        </button>
                    </div>
                </div>
    `
    // insert feedback into the list
    commentsCont.insertAdjacentElement('beforeend', div)
}
console.log(commentsCont)

deleteProduct = i => {
    if(confirm('Are you sure you want to delete this product?')){

        var myHeaders = new Headers();
    myHeaders.append("authorization", JSON.parse(localStorage.getItem('current_user')).accessToken);
    myHeaders.append("Content-Type", "application/json");

        var requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        redirect: 'follow'
        };
        

        fetch(`http://localhost:5000/server/posts/${blog[++i]._id}/comments/`, requestOptions)
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => console.log(error.message))
        .then(()=>location.reload());
        

        // remove the data from the data array
        data.splice(i, 1);
        // update the localStorage
        //localStorage.setItem('blogData', JSON.stringify(data));
        // fetch the data again
        //fetchProducts();
    }}