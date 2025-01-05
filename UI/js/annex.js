

    var blogCont = document.getElementById('#work'),
     data = JSON.parse(localStorage.getItem('currentBlog'));

    function addFeedback(data){
        console.log('hello')
        console.log(data)
        console.log(blogCont)
    if(data != null && data.length > 0){
        // loop through the data array and display the data in the table
        data.map((item) => {
            // displaying the data in the body of the table
        const div = document.createElement('div')
        // add class
        div.classList = 'container'
        // add id
        //div.id = item.id 
        // add html

        div.innerHTML = `

        <h1 style="font-weight: 800; margin-bottom: 5%; color:#0A79B8">${item.title}</h1>
        <div class="singlepost_image">
                <img src="" alt="">

                </div>
                <div>
                 <p>${item.content}</p>
                 </div>
     
             
             
         </div>
         `

        })}}

addFeedback(data)