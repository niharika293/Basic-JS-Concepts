document.querySelector("#category").addEventListener('click', (event)=>{
    console.log("Category Parent Clicked! ", event.target);
    if(event.target.dataset.uppercase !== undefined){
        console.log(event.target.textContent);
        event.target.textContent = event.target.textContent.toUpperCase();
    }
})