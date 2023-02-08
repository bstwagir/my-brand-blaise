
let userData = JSON.parse(localStorage.getItem('signupData')),
      userDataCount = document.querySelector('#userDataCount');

      userDataCount.textContent = userData ? userData.length : 0;

      let messageData = JSON.parse(localStorage.getItem('contactData')),
      messageDataCount = document.querySelector('#messageDataCount');
      messageDataCount.textContent = messageData ? messageData.length : 0
      messageAtaCount = document.querySelector('#message-count');
      messageAtaCount.textContent = messageData ? messageData.length : 0;
      
      let blogData = JSON.parse(localStorage.getItem('blogData')),
      blogDataCount = document.querySelector('#blogDataCount');

      blogDataCount.textContent = blogData ? blogData.length : 0;
// Executes when document is loaded
document.addEventListener("DOMContentLoaded", (ev) => {
    // Recent Orders Data
    document.getElementById("recent-orders--table").appendChild(buildTableBody());
  
    // Updates Data
    document
      .getElementsByClassName("recent-updates")
      .item(0)
      .appendChild(buildUpdatesList());
  
    // Sales Analytics
    const salesAnalytics = document.getElementById("analytics");
    buildSalesAnalytics(salesAnalytics);
  });
  
  // Document Builder
  const buildTableBody = () => {
   // const recentOrderData = RECENT_ORDER_DATA;
  
    const tbody = document.createElement("tbody");
  let i = 1;
    let bodyContent = "";
    for (const row of userData) {
      bodyContent += `
        <tr>
          <td>${i++}</td>
          <td>${row.name}</td>
          <td>${row.email}</td>
          
          <td class="primary">Details</td>
        </tr>
      `;
    }
  
    tbody.innerHTML = bodyContent;
  
    return tbody;
  };
  
  const buildUpdatesList = () => {
    const updateData = UPDATE_DATA;
  
    const div = document.createElement("div");
    div.classList.add("updates");
  
    let updateContent = "";
    for (const update of updateData) {
      updateContent += `
        <div class="update">
          <div class="profile-photo">
            <img src="${update.imgSrc}" />
          </div>
          <div class="message">
            <p><b>${update.profileName}</b> ${update.message}</p>
            <small class="text-muted">${update.updatedTime}</small>
          </div>
        </div>
      `;
    }
  
    div.innerHTML = updateContent;
  
    return div;
  };
  
  const buildSalesAnalytics = (element) => {
    const salesAnalyticsData = SALES_ANALYTICS_DATA;
  
    for (const analytic of salesAnalyticsData) {
      const item = document.createElement("div");
      item.classList.add("item");
      item.classList.add(analytic.itemClass);
  
      const itemHtml = `
        <div class="icon">
          <span class="material-icons-sharp"> ${analytic.icon} </span>
        </div>
        <div class="right">
          <div class="info">
            <h3>${analytic.title}</h3>
            <small class="text-muted"> Last 24 Hours </small>
          </div>
          <h5 class="${analytic.colorClass}">${analytic.percentage}%</h5>
          <h3>${analytic.sales}</h3>
        </div>
      `;
  
      item.innerHTML = itemHtml;
  
      element.appendChild(item);
    }
  };
  
  // Document operation functions
  const sideMenu = document.querySelector("aside");
  const menuBtn = document.querySelector("#menu-btn");
  const closeBtn = document.querySelector("#close-btn");
  const themeToggler = document.querySelector(".theme-toggler");
  
  // Show Sidebar
  menuBtn.addEventListener("click", () => {
    sideMenu.style.display = "block";
  });
  
  // Hide Sidebar
  closeBtn.addEventListener("click", () => {
    sideMenu.style.display = "none";
  });
  
  // Change Theme
  themeToggler.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme-variables");
  
    themeToggler.querySelector("span:nth-child(1)").classList.toggle("active");
    themeToggler.querySelector("span:nth-child(2)").classList.toggle("active");
  });

  /**let userData = JSON.parse(localStorage.getItem('signupData')),
      userDataCount = document.querySelector('#userDataCount');

      console.log(userData)
      userDataCount.textContent = userData ? userData.length : 0;**/