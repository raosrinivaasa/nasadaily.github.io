var prevDay;
//function to calculate today's date
var today = new Date().toISOString().slice(0, 10);

function fetchData(day) {
  console.log(day);
  const boxesWrapper = document.querySelector(".boxesWrapper");
  const xyz = fetch(
    `https://api.nasa.gov/planetary/apod?api_key=LU0Dt0Gh8DGGBLLKYvU1GXR7LXC3ClYgdNxnPDpx&date=${day}`
  )
    .then((xyz) => {
      return xyz.json();
    })
    .then((z) => {
      const newBox = document.createElement("div");
      newBox.setAttribute("class", "box");
      //to fetch HD image and explanation
      newBox.innerHTML = `
                    <img class="mp8" src="${z.url}" alt="WAITING FOR NASA SERVER TO LOAD THE IMAGE">                                   
                    <div class="texts mp8">                                
                        <a href="https://en.wikipedia.org/wiki/Astronomy_Picture_of_the_Day"> 
                        <h1 class="title1 mp8">Astronomy picture of the day</h1> </a>
                        <h2 class="title2 mp8">${z.title}</h2>                  
                        <p class="desc mp8">${z.explanation}</p>
                    </div>`;
      boxesWrapper.appendChild(newBox);
    });
}
fetchData(today);


console.log("Outside previous function" + today);
var i = 1;
 function previousDay(today, i){
  var today1 = today[9] - i;
  prevDay = today.slice(0, 9) + today1;
  console.log(`Inside previousDay${prevDay}`);
  fetchData(prevDay);
  i = i+1;
}
const yesBtn = document.getElementById("yesBtn");  
      yesBtn.onclick = function (){ 
        previousDay(today, i)
      }