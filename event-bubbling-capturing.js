// By default the "useCapture" flag is false which means the Event will Bubble up.
// In case of false, if the parent is clicked, then the parent's handler will be called out.
// and, if the child is clicked then their parent's / ancestor's event handlers will also be called out. 
// When true : even if the child is clicked, event propogation - TOP to BOTTOM. Grand-parent, Parent, Child.
document.querySelector("#grand-parent").addEventListener('click', (event)=>{
    console.log("grand parent clicked!");
    // event.stopPropagation();
}, true);

document.querySelector("#parent").addEventListener('click', (event)=>{
    console.log("parent clicked!");
    // event.stopPropagation(); // at this point of time, the code stops & the parent's handler won't run.
}, true);

document.querySelector("#child").addEventListener('click', (event)=>{
    console.log("child clicked!");
    // event.stopPropagation(); // at this point of time, the code stops & the parent's handler won't run.
}, true);

// In case of True, false, True - Capturing, Bubbling, capturing | Output : Grand-parent, Child, Parent 
// because, The events first Trickle down & then bubble up as per W3C and the grand-parent is given as True, hence 
// it will be captured, parent - false so it won't be handled in the TRICKLING phase, Child - TRUE : hence it'll be handled second
// At last, the events will bubble up, so PARENT will be handled in the bubbling phase.

document.querySelector('#grand-child').addEventListener('click', (event)=>{
    console.log("handler 1 garnd child");
    // event.stopPropagation();
    event.stopImmediatePropagation();
});

document.querySelector('#grand-child').addEventListener('click', (event)=>{
    console.log("handler 2 garnd child");
});

document.querySelector('#grand-child').addEventListener('click', (event)=>{
    console.log("handler 3 garnd child");
});