const app = {};
app.sonic = document.getElementById("sonic");
app.sonicProp = {
  x: sonic.x,
  y: sonic.y
};
app.stackOne = document.querySelector(".stack-one");

//the actual event listener to start the program
app.startButton = document.getElementById("start").addEventListener("submit",(e)=>{
  e.preventDefault();
  app.startTransition();
})

//this function will start the action tansfer of the sprites when the listener is active
app.startTransition=()=>{
    app.startTransfer();
}

//this function will call itself when the component loads 
//it will produce the stack of 144 sprites
(
  (app.displaySonic = () => {
    const fragment = document.createDocumentFragment();
    img = document.createElement("img");
    img.setAttribute("src", "./assets/sonic-sprite.png");
    //    img.setAttribute("class", "100px");
    img.setAttribute("height", "100px");
    img.setAttribute("style", "position:absolute;");
    fragment.appendChild(img);
    for (i = 0; i < 144; i++) {
      let sonicY = app.sonicProp.y++;
      img.setAttribute("id", `${i}`);
      img.setAttribute(
        "style",
        `position:absolute;bottom:${sonicY}px;left:20%;`
      );
      app.stackOne.appendChild(img.cloneNode(true));
    }
  })
)();

//this function will start the transfer of the sonic sprites to move over in reverse order

app.startTransfer=()=>{
  for(let i = 143; i >= 0 ; i--){
      let id = 143 - i
      let sonicImg = document.getElementById(`${id}`)
      setTimeout(function(){
        console.log(app.sonicProp.y);
        sonicImg.setAttribute("class","transition-to-stack-two");
        sonicImg.setAttribute("style", `position:absolute;bottom:${(app.sonicProp.y - 143) + i}px;left:60%;z-index:${i};`);
      }, 1000 * i);
  }
}


