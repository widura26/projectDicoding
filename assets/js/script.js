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
