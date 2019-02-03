

tool={}
tool.words= "Here are some good reasons as to why I should be chosen as the next junior developer for your company.One: coding is my passion. Whenever I get the chance I try to either do some code-war puzzle, read a book about coding, learn what's new in the tech industry or go on company pages and look at their code. two: I love to learn. Being a junior developer, my role is not only to take intitiative and work hard but to listen to others. To aply what they teach me, so I can better my skill. As my mentor once said, you can be good at coding, but that does not mean you're a good developer! Three:I love video games, I grew up playing videos games. To this day, some of my close friends are made because we would play super smash brothers together. During my coding course, when we were assigned our first javascript program, I immediately decided to make a game and I loved it! Hopefully you enjoyed looking over my code!";
tool.emojisArrayOne= `\u{1F9EE} \u{1F39F} \u{1F429} \u{1F429} \u{1F45D} \u{1F934} \u{1F97C} \u{1F97C} \u{1F3F4} \u{1F5D1} \u{1F5D1} \u{1F6D1} \u{1F4B0} \u{1F911} \u{1F4B8} \u{1F4A9} \u{1F48A} \u{1F38D} \u{1F34D} \u{1F5C3} \u{1F1F1} \u{1F1F7} \u{1F485} \u{1F91F} \u{1F3A7} \u{1F97C} \u{1F1FA} \u{1F1F2} \u{1F6B1} \u{1F91D} \u{1F91E} \u{1F9D1} \u{1F36D} \u{1F1E8}\u{1F1E6} \u{1F64B} \u{1F973} \u{265F} \u{2663} \u{23EE}\u{260E} \u{2049} \u{1F926} \u{1F637} \u{1F602} \u{1F920} \u{1F483} \u{1F432} \u{1F95F} \u{1F9EE} \u{1F680} \u{1F9FB}`.split(" ");
tool.emojisArrayTwo =`\u{1F9EE} \u{1F39F} \u{1F429} \u{1F429} \u{1F45D} \u{1F934} \u{1F97C} \u{1F97C} \u{1F3F4} \u{1F5D1} \u{1F5D1} \u{1F6D1} \u{1F4B0} \u{1F911} \u{1F4B8} \u{1F4A9} \u{1F48A} \u{1F38D} \u{1F34D} \u{1F5C3} \u{1F1F1} \u{1F1F7} \u{1F485} \u{1F91F} \u{1F3A7} \u{1F97C} \u{1F1FA} \u{1F1F2} \u{1F6B1} \u{1F91D} \u{1F91E} \u{1F9D1} \u{1F36D} \u{1F1E8}\u{1F1E6} \u{1F64B} \u{1F973} \u{265F} \u{2663} \u{23EE}\u{260E} \u{2049} \u{1F926} \u{1F637} \u{1F602} \u{1F920} \u{1F483} \u{1F432} \u{1F95F} \u{1F9EE} \u{1F680} \u{1F9FB}`.split(" ");
tool.emojisArrayThree = `\u{1F9EE} \u{1F39F} \u{1F429} \u{1F429} \u{1F45D} \u{1F934} \u{1F97C} \u{1F97C} \u{1F3F4} \u{1F5D1} \u{1F5D1} \u{1F6D1} \u{1F4B0} \u{1F911} \u{1F4B8} \u{1F4A9} \u{1F48A} \u{1F38D} \u{1F34D} \u{1F5C3} \u{1F1F1} \u{1F1F7} \u{1F485} \u{1F91F} \u{1F3A7} \u{1F97C} \u{1F1FA} \u{1F1F2} \u{1F6B1} \u{1F91D} \u{1F91E} \u{1F9D1} \u{1F36D} \u{1F1E8}\u{1F1E6} \u{1F64B} \u{1F973} \u{265F} \u{2663} \u{23EE}\u{260E} \u{2049} \u{1F926} \u{1F637} \u{1F602} \u{1F920} \u{1F483} \u{1F432} \u{1F95F} \u{1F9EE} \u{1F680} \u{1F9FB}`.split(" ");
tool.emojisArrayFour = tool.emojisArrayTwo = `\u{1F9EE} \u{1F39F} \u{1F429} \u{1F429} \u{1F45D} \u{1F934} \u{1F97C} \u{1F97C} \u{1F3F4} \u{1F5D1} \u{1F5D1} \u{1F6D1} \u{1F4B0} \u{1F911} \u{1F4B8} \u{1F4A9} \u{1F48A} \u{1F38D} \u{1F34D} \u{1F5C3} \u{1F1F1} \u{1F1F7} \u{1F485} \u{1F91F} \u{1F3A7} \u{1F97C} \u{1F1FA} \u{1F1F2} \u{1F6B1} \u{1F91D} \u{1F91E} \u{1F9D1} \u{1F36D} \u{1F1E8}\u{1F1E6} \u{1F64B} \u{1F973} \u{265F}`.split(" ");
tool.wordsArray= tool.words.split(" ");
tool.finalEmojisArray = [...tool.emojisArrayOne, ...tool.emojisArrayTwo,...tool.emojisArrayThree, ...tool.emojisArrayFour ]
tool.contentForRandomGenerator = [tool.finalEmojisArray , tool.wordsArray ]
tool.pageText= document.getElementById("text-area")
tool.randomNumber= Math.floor(Math.random() * 187)

tool.randomOutPut=()=>{
  return `${tool.contentForRandomGenerator[Math.floor(Math.random() * 2)][Math.floor(Math.random() * 175)]}`;
}
tool.clearText=()=>{
  return tool.pageText
}
tool.joinText = ()=>{
  randomAmountOfText = Math.floor(Math.random() * 100) + 1;
  textArray=[]
  for(i=0; i < randomAmountOfText; i++){
    textArray.push(tool.randomOutPut())
  }
  let message = textArray.join(" ")
  return message
};
//function calls itself to keep the random numbers random and to keep the text appearing each time
(function infiniteTextDisplay() {
  const randomSec = Math.round(Math.random() * (5000 - 500)) + 500;
  
  setTimeout(function () {
    infiniteTextDisplay();
    tool.pageText.innerHTML=`<div style="font-size:${Math.floor(Math.random() * 70) + 10}px">${tool.joinText()}<div>`
  
  }, 1000);

}());


