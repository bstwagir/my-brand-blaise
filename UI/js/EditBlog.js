// selecting the elements from the DOM
let data = localStorage.getItem('blogData'),
    form = document.querySelector('form'),
    btnSubmit = document.querySelector('[type="submit"]'),
    btnCancel = document.querySelector('[type="button"]'),
    title = document.querySelector('#title'),
    qty = document.querySelector('#qty'),
    cp = document.querySelector('#cp'),
    sp = document.querySelector('#sp'),
    //inputs = form.querySelectorAll('input'),
    tbody = document.querySelector('tbody'),
    tfoot = document.querySelector('tfoot'),
    btnClearData = document.querySelector('#btnClearData'),
    dataCount = document.querySelector('#dataCount'),
    search = document.querySelector('#search'),
    userCount = document.getElementsByClassName("user-count");
    let  blogUpdate=[]

/**const saveProduct = () => {
    data = data ?? [];
    if(data.findIndex(product => product.title === title.value) < 0){
        // getting and storing the values of the form(user input) in the data array using the *SPREAD method
        data = [...data, { title: title.value, qty: qty.value, cp: cp.value, sp: sp.value }];
        // checking the *DATA-ID attribute of the submit button to see if it is set or not and calling the appropriate function
        localStorage.setItem('products', JSON.stringify(data));
        // fetching the data(all products) upon saving
        fetchProducts();
        // clearing the form
        resetForm();
    } 
    else {
        alert('Product already exists');
        title.focus();
    }
},
resetForm = () => {
    // resetting the form to its default state using the *FOR...OF method
    form.reset();
    // resetting the background color and text of the submit button
    btnSubmit.style.background = 'dodgerblue';
    btnSubmit.textContent = 'Save';
    // remove the data-id attribute from the submit button used to update the data
    btnSubmit.removeAttribute('data-id');
    // setting the focus on the title input
    title.focus();
},
fetchProducts = () => {
    // empty the contents of the table
    tfoot.innerHTML = '';
    tbody.innerHTML = '';
    // reinitialize/reset/update the value of data array
    data = JSON.parse(localStorage.getItem('blogData'));
    console.log(data);
    // Displaying the total number of products 
    dataCount.textContent = data ? data.length : 0;
    userCount.textContent = data ? data.length : 0;
    // assert the data array is not empty
    if(data != null && data.length > 0){
        // loop through the data array and display the data in the table
        data.map((item, i) => {
            // displaying the data in the body of the table
            tbody.innerHTML += `<tr>
                <td>${++i}</td>
                <td>${item.title}</td>
                <td>${item.content}</td>
                <td>${item.category.toUpperCase()}</td>
                <td><img style="width:75px;height=75px" src="${item.image}"></td>
                <td style="width: 115px;">
                <button type="button" id="btnEditProduct" onclick="currentUpdate(${--i});">Edit</button>
                    <button type="button" id="btnDeleteProduct" onclick="deleteProduct(${--i});">Delete</button>
                </td>                
            </tr>`;
        });
    }
    else{
        // displaying to user that there is no data to show using the tfoot element
        tfoot.innerHTML = `<tr>
                    <td colspan="7"><h1 style="background: #f1f1f1; color: #f00; text-align: center; padding: 40px;">No data to show</h1></td>
                </tr>
        `;
    }
},
**/
currentUpdate = i => {
    console.log(i);
    console.log(data);
    console.log(data[i]);
    title = data[i].title
    content = data[i].content;
    category = data[i].category;
    image = data[i].image;
    id = i;
    
    blogUpdate.push({title, content, category, image, id});
    localStorage.setItem('currentData', JSON.stringify(blogUpdate));
    location.href = '../pages/AddBlog copy.html'
}

// Preview Image 

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.addEventListener("load", () => {
            localStorage.setItem("image", reader.result)
            console.log('image')
        }) 

        reader.addEventListener("load", () => {
            const imagPre =  localStorage.getItem("image");
            console.log('imagPre')
            document.querySelector('#blah').setAttribute('src', imagPre)
        }) 
        
        reader.readAsDataURL(input.files[0]);
    }
    return reader;
}
//let id= JSON.parse(localStorage.getItem('currentData')).[0].i
previewUpdate = () => {
    data = JSON.parse(localStorage.getItem('currentData'));
    // preview the data to be updated in the form
    title.value = data[0].title;
    content.value = data[0].content;
    category.value = data[0].category;
    let imagPreview =  data[0].image ;
    document.querySelector('#blah').setAttribute('src', imagPreview);
    
    
   
},
previewUpdate()

updateProduct = id => {


    // updating the values of the data array 
    data[id].title = title.value;
    data[id].category = category.value;
    data[id].content = content.value;
    if(localStorage.getItem('image')){
    data[id].image = localStorage.getItem('image');
}
    // update the localStorage
    location.href ="../pages/BlogDashboard.html"
    localStorage.setItem('blogData', JSON.stringify(data));
    localStorage.removeItem('image')
    location.href ="../pages/BlogDashboard.html"
},

updateBlog = () => {
    // preventing the default behaviour of the form
   // e.preventDefault();
    // saving the data to the localStorage
    console.log('success')
    console.log(data)
    datal = JSON.parse(localStorage.getItem('currentData'));
    data = JSON.parse(localStorage.getItem('blogData'))
    let newTitle = datal[0].title,
        newCategory = datal[0].category;
        console.log(newTitle)
        console.log(data[0].title)
        for ( let i = 0; i<data.length; i++){
            if(data[i].title == newTitle && data[i].category == newCategory){
                console.log(i)
                updateProduct(i)

            } console.log('failed')
        }

    console.log(datal)
    console.log(data)}
   // if(JSON.parse(localStorage.getItem('blogData')).some(item => item.title === datal[i].title && item.category === datal[i].category)){
   //     updateProduct(i)
 //       console.log(item)
 //    }else{
       // console.log('failed')
 //    }; 
//};

// searching the data when the user types in the search input
//search.addEventListener('input', e => searchProducts(e.target.value));

// cancel update and reset the form to its default state
//btnCancel.addEventListener('click', e => resetForm());

