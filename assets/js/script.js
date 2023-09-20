function clock(){
    const currentDate = new Date();
    
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const day = currentDate.getDate();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();
    
    const dateTime = document.querySelector('.date p');
    dateTime.innerHTML = `${hours} : ${minutes} : ${seconds} WIB`;
}

clock();
setInterval(clock, 1000);

function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
  }

function getCookie(name) {
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookies = decodedCookie.split(';');
    for (let cookie of cookies) {
      let [cookieName, cookieValue] = cookie.split('=');
      cookieName = cookieName.trim();
      if (cookieName === name) {
        return cookieValue;
      }
    }
    return "";
}

function updateVisitorCount() {
    let count = parseInt(getCookie("visitorCount")) || 0;
    count++;
    setCookie("visitorCount", count, 30);  // Cookie will expire in 30 days
    const visitors = document.querySelector('#visitors .visitors #count');
    visitors.textContent = count;
}

// Load the initial visitor count
window.onload = function() {
    updateVisitorCount();
};


