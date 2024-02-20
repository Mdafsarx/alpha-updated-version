
getId('PlayNow').addEventListener('click',()=>{

showElementById('Playground')
HideElementById('Home');
startGame();
isGameOn=true;

});


function PlayAgain(){

HideElementById('End');
showElementById('Playground');
setInnerText('Life',5);
setInnerText('score',0);
isGameOn=true;

}