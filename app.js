//function to calculate today's date
let today = new Date().toISOString().slice(0, 10)
console.log(today);
const boxesWrapper = document.querySelector('.boxesWrapper');
const xyz = fetch(`https://api.nasa.gov/planetary/apod?api_key=LU0Dt0Gh8DGGBLLKYvU1GXR7LXC3ClYgdNxnPDpx&date=${today}`)
.then(xyz =>{
    return xyz.json();
})
.then(z =>{
const newBox = document.createElement('div')
newBox.setAttribute('class','box');
 //to fetch HD image and explanation
newBox.innerHTML = `<img src="${z.hdurl}" alt="WAITING FOR NASA SERVER TO LOAD THE IMAGE">                                   
                    <div class="texts">                                
                        <a href="https://en.wikipedia.org/wiki/Astronomy_Picture_of_the_Day">
                        <h1 class="title1">Astronomy picture of the day</h1></a>
                        <h2 class="title2">${z.title}</h2>                  
                           <p class="desc">${z.explanation}</p></div>
                           
                           <div class="footer">
                           This site is developed to view<a href="https://www.nasa.gov/">NASA</a>'s astronomy picture of the day. 
                           <br> 
                           <a href="mailto:sri@blk.ink"><img class="mailLogo" src="gmail.png"></a>      
                       </div>`
boxesWrapper.appendChild(newBox);
})
