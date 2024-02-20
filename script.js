const heading = document.querySelector("#heading");
const para = document.querySelector("#para");
const closeIcon = document.querySelector("#close-icon");
const internetBox = document.querySelector(".internet-box");

window.onload = () => {
        function ajax() {
            var xhttp = new XMLHttpRequest();
            xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
            xhttp.onload = () => {
                  if(xhttp.status == 200 && xhttp.status < 300){
                    heading.innerHTML = "You're online now !";
                    para.innerHTML = "Hurray ! Internet is connected.";
                    internetBox.classList.remove("active");
                  }else{
                    offline();
                  }
            }
            xhttp.onerror = () => {
                offline();
            }
    
            function offline(){
                heading.innerHTML = "You're offline now !";
                para.innerHTML = "Oops ! You'r internet is disconncted.";
                internetBox.classList.add("active");
            }
            xhttp.send();
        }
    
        closeIcon.addEventListener("click", () => {
            internetBox.classList.add("close");
        });

setInterval(() => {
    ajax();
}, 100);




}
