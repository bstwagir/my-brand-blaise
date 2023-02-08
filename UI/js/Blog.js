
var blogCont = document.querySelector('#articles'),
    data = JSON.parse(localStorage.getItem('blogData'));


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
    min-width: 100%; max-height: 100%">
    <div class="blog-text" onclick="currentBlog(${--i})> 
        <div style="color: black; font-size: 30px; font-weight: 900; padding-top:;">
            ${item.title}
        </span></br>
        <span style="font-size: 13px;font-weight: 300; display: -webkit-box;
        -webkit-line-clamp: 2; /* number of lines to show */
                line-clamp: 2; 
        -webkit-box-orient: vertical;
     }">${item.content}</div>
     <button type="button"  id="btnEditProduct" style=" cursor: pointer; border:1px solid black; padding: 5%; background-color:transparent" onclick="currentBlog(${++i});">Read more</button> 
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
    category = data[i].category;
    image = data[i].image;
    
    blogUpdate.push({title, content, category, image,});
    localStorage.setItem('currentBlog', JSON.stringify(blogUpdate));
    location.href = '../pages/SingleBlog.html'
}