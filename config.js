
getId('PlayNow').addEventListener('click',()=>{

showElementById('Playground')
HideElementById('Home');
startGame();


});


function PlayAgain(){

HideElementById('End');
showElementById('Playground');
setInnerText('Life',5);
setInnerText('score',0)

}