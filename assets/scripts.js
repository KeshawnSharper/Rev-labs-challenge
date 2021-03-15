

//   window.addEventListener('load', function () {
//     console.log(document.querySelectorAll("div")[8].children[0])
//     if (document.querySelectorAll("div").length < 20){
//         document.outerHTML = "<h3>Header Changed!</h3>";
//     }
//     if (document.querySelectorAll("div").length == 20){
//         console.log(document.querySelector("div .menu-item"))
//     //     document.querySelectorAll(".menu-item").addEventListener("click", function(){
//     // document.querySelector(".drawer").classList.toggle("normal")
//     //     }
//     // )}
    
//     }
// })
setTimeout(function () {
    console.log(document.querySelector("div.drawer"))
    menu = document.querySelectorAll("div.menu-item")
    menu.forEach(element => {
        element.addEventListener("click",() =>{
            console.log(document.querySelector("div.drawer"))
            if (document.querySelector("div.drawer").style.display === "none"){
                document.querySelector("div.drawer").style.display = "block"
            }
            else{
                document.querySelector("div.drawer").style.display = "none";
            }
            
    }
        )
    });
}, 5000);