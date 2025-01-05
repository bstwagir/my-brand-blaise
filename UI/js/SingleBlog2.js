
/**var postCont = document.getElementsByClassName("singlepost"),
    data = JSON.parse(localStorage.getItem('currentBlog'));
    console.log( 'failed')

function addFeedback(data){
    console.log(data)
    console.log('hello')
    console.log(postCont)
if(data != null && data.length > 0){
    // loop through the data array and display the data in the table
    data.map((item, i) => {
        // displaying the data in the body of the table
    const div = document.createElement('div')
    // add class
    div.classList = "container singlepost_container"
    // add id
    //div.id = item.id 
    // add html

    div.innerHTML += `
    <h2>${item.title}</h2>
    <div class="singlepost_image">
        <img src="${item.image}"" alt="">

    </div>
    <div>
    <p>
    ${item.content}
    </p>
    </div>
       `
        postCont.insertAdjacentElement('beforeend', div)
    })
}
else{ console.log( 'failed')
    // displaying to user that there is no data to show using the tfoot element
    

}}

addFeedback(data)**/

const submitBtn = document.querySelector('.submit__btn')
const comment = document.querySelector('#comment')
const likeIcon = document.querySelector('.heart__icon')
const count = document.querySelector('.count')
const commentsCont = document.querySelector('.comments__container')
var blogCont = document.querySelector('#singlepost'),
    data = JSON.parse(localStorage.getItem('currentBlog'));

    function addFeedback(data){
        console.log('hello')
        console.log(blogCont)
    if(data != null && data.length > 0){
        // loop through the data array and display the data in the table
        data.map((item, i) => {
            // displaying the data in the body of the table
        const div = document.createElement('div')
        // add class
        div.classList = 'container singlepost_container'
        // add id
        //div.id = item.id 
        // add html

        div.innerHTML += `

        <h1 style="font-weight: 800; margin-bottom: 5%; color:#0A79B8">${item.title}</h1>
        <div class="singlepost_image">
                <img src=${item.image}alt="">

                </div>
                <div>
                 <p>${item.content}</p>
                 </div>
     
             
             
         </div>
         `
         blogCont.insertAdjacentElement('beforeend', div)

        })}}

addFeedback(data)
         
//likeIcon.addEventListener('click', likeVideo)
//submitBtn.addEventListener('click', submitFeedback)


feedbackArr = []
let positiveFeedback = false
let likesCount = 0

function submitFeedback(e){
    // get user name
    const userForm = userName.value 
    // get feedback
    const commentForm = comment.value 
    // if inputs are not empty
    if(userForm && commentForm !== ''){
        // create new feedback
        newFeedback = {
            "id": Math.floor((Math.random() * 1000)+ 1),
            "userName": userForm,
            "userComment": commentForm,
            "typeOfFeedback": positiveFeedback
        }
        // add new feedback to array
        feedbackArr.push(newFeedback)
        // if liked add to count
        if(positiveFeedback === true){
            addLikes()
        }
        // clear inputs 
        resetForm()
        // add feedback to list
        addFeedback(newFeedback)
    }


    e.preventDefault()
}

function likeVideo(){
    likeIcon.classList.toggle('liked')

    if(likeIcon.classList.contains('liked')){
        likeIcon.innerHTML = `<i class="fas fa-heart"></i>`
        // set feedback to liked
        positiveFeedback = true
    } else {
        likeIcon.innerHTML = `<i class="far fa-heart"></i>`
        // set feedback to not liked
        positiveFeedback = false
    }
}

function addLikes(){
    likesCount++
    count.innerHTML = likesCount
}

function resetForm(){
    userName.value = ''
    comment.value = ''
    likeIcon.innerHTML = `<i class="far fa-heart"></i>`
    positiveFeedback = false
}

/**function addFeedback(item){
    // select first letter of the user name
    const letter = (item.userName).charAt(0)
    // create new div
    const div = document.createElement('div')
    // add class
    div.classList = 'comment__card'
    // add id
    div.id = item.id 
    // add html
    div.innerHTML = `
    <div class="pic center__display">
                    ${letter}
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
                        <button>
                            Reply
                        </button>
                    </div>
                </div>
    `
    // insert feedback into the list
    commentsCont.insertAdjacentElement('beforeend', div)
}*/