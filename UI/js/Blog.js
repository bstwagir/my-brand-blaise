
var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("http://localhost:5000/server/posts", requestOptions)
    .then(response => response.text())
    .then(result => {console.log(result), localStorage.setItem('blogData', result)})
    .catch(error => console.log('error', error));

var blogCont = document.querySelector('#articles'),
    data = JSON.parse(localStorage.getItem('blogData'));
console.log(blogCont)

function addFeedback(data){
    console.log('hello')
    console.log(blogCont)
if(data != null && data.length > 0){
    // loop through the data array and display the data in the table
    data.map((item, i) => {
        // displaying the data in the body of the table
    const div = document.createElement('div')
    // add class
    div.classList = 'services'
    // add id
    //div.id = item.id 
    // add html
    
    div.style.backgroundImage = "url(${item.image})"

    div.innerHTML += `
    <img src="${item.image}" style="border-radius:2%; margin-bottom:5%; flex-shrink: 0;
    min-width: 100%; max-height: 90%">
    <div class="blog-text" onclick="currentBlog(${--i})"> 
        <div style="color: black; font-size: 15px; font-weight: 700; margin-bottom: -2%">
            ${item.title}
        </div></br>
        <span style="font-size: 13px;font-weight: 300; display: -webkit-box;
        -webkit-line-clamp: 2; /* number of lines to show */
                line-clamp: 2; 
        -webkit-box-orient: vertical;
     }">${item.content}</div>
     <button type="button"  id="btnEditProduct" style=" cursor: pointer; border:1px solid black; padding: 5%; background-color:transparent; margin-bottom:5%" onclick="currentBlog(${++i});">Read more</button> 
        </div>
       `
        blogCont.insertAdjacentElement('beforeend', div)
    })
}
else{
    // displaying to user that there is no data to show using the tfoot element
    

}}

addFeedback(data)


currentBlog = i => {
    let  blogUpdate =[]
    console.log(i);
    console.log(data);
    console.log(data[i]);
    title = data[i].title
    content = data[i].content;
    categories = data[i].categories;
    image = data[i].image;
    _id = data[i]._id;
    userId = data[i].userId
    
    blogUpdate.push({title, content, categories, image, _id, userId});
    localStorage.setItem('currentBlog', JSON.stringify(blogUpdate));
    location.href = '../pages/newhtml.html'
}