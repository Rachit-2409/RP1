let left = document.getElementById('left');
let right = document.getElementById('right');
let box = document.getElementsByClassName('project');
let count = 1;
let val = -350;
let Limit = 3500;
console.log(Limit)
left.addEventListener('click',()=>{
    if(val*count < -Limit){
       console.log("Limit Reached")
    }
    else{
        count++;
        for(let x of box){
             x.style.transform = `translateX(${val*count}px)`
             console.log(`translateX(${val * count}px)`)
         }
    }
   
   
    console.log(count, val)
});
right.addEventListener('click',()=>{
    if (count > 0) {  // Prevent going right indefinitely
        count--;  // Decrement the count
        for (let x of box) {
            x.style.transform = `translateX(${val * count}px)`;  // Move right (reverse)
            console.log(`Right Click: translateX(${val * count}px)`);
        }}
})
