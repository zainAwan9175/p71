let snacks=document.querySelectorAll(".snacks")
let diner=document.querySelectorAll(".diner")
let lunch=document.querySelectorAll(".lunch")
let dd=document.querySelector(".dd")
let ll=document.querySelector(".ll")
let ss=document.querySelector(".ss")
let all=document.querySelector(".all")
dd.addEventListener("click",()=>{
    snacks.forEach((e)=>{
        e.style.display="block"
    })
    diner.forEach((e)=>{
        e.style.display="block"
    })
    lunch.forEach((e)=>{
        e.style.display="block"
    })
    lunch.forEach((e)=>{
        e.style.display="none"
    })
    snacks.forEach((e)=>{
        e.style.display="none"
    })
  
})
ss.addEventListener("click",()=>{
    snacks.forEach((e)=>{
        e.style.display="block"
    })
    diner.forEach((e)=>{
        e.style.display="block"
    })
    lunch.forEach((e)=>{
        e.style.display="block"
    })
    lunch.forEach((e)=>{
        e.style.display="none"
    })
    diner.forEach((e)=>{
        e.style.display="none"
    })
  
})
ll.addEventListener("click",()=>{
    snacks.forEach((e)=>{
        e.style.display="block"
    })
    diner.forEach((e)=>{
        e.style.display="block"
    })
    lunch.forEach((e)=>{
        e.style.display="block"
    })
    snacks.forEach((e)=>{
        e.style.display="none"
    })
    diner.forEach((e)=>{
        e.style.display="none"
    })
  
})
all.addEventListener("click",()=>{
    snacks.forEach((e)=>{
        e.style.display="block"
    })
    diner.forEach((e)=>{
        e.style.display="block"
    })
    lunch.forEach((e)=>{
        e.style.display="block"
    })
  
})
// let snacks = document.querySelectorAll(".snacks");
// let diner = document.querySelectorAll(".diner");
// let lunch = document.querySelectorAll(".lunch");
// let dd = document.querySelector(".dd");
// let ll = document.querySelector(".ll");
// let ss = document.querySelector(".ss");
// let all = document.querySelector(".all");

// // Add event listener to hide lunch and snacks when the "dd" element is clicked
// dd.addEventListener("click", () => {
//     // Hide each lunch element
//     lunch.forEach(item => {
//         item.style.display = "none";
//     });
//     // Hide each snacks element
//     snacks.forEach(item => {
//         item.style.display = "none";
//     });
// });
