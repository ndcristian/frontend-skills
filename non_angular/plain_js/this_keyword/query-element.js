const div = document.querySelector(".clickable")
console.log(div)
const collection = document.getElementsByClassName("clickable");
console.log(collection)

// replace it with a normal function to see the difference
document.querySelector('.clickable').addEventListener('click', (e)=>{
    console.log("THIS on click:",this)
    console.log("SELECTOR:",e)
})