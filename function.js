
const getId=(id)=>{

const element=document.getElementById(id);
return element;

}

function showElementById(id){

getId(id).classList.remove('hidden')

};

function HideElementById(id){

    getId(id).classList.add('hidden')

}

function setInnerText(id,value){

    getId(id).innerText=value

}

function getInnerText(id){

    const text=getId(id).innerText;
    return text;

}

function setBgColor(id){
    getId(id).style.background='red'
}

function removeBg(id){
    getId(id).style.background='';
}






function startGame(){
    

const alphabet=RandomAlpha();
setInnerText('Display',alphabet.toUpperCase());
setBgColor(alphabet)



}

function RandomAlpha(){


    let alphabet='abcdefghijklmnopqrstuvwxyz';
alphabet=alphabet.split('');

const random=Math.round(Math.random()*25);
const RandomAlphabet=alphabet[random];
return RandomAlphabet


}
const audio=new Audio();
const success='success.mp3'
const error='error2.mp3';


let isGameOn=false;

document.addEventListener('keyup',(event)=>{
    if(isGameOn===false){return}
    if(event.key===getInnerText('Display').toLowerCase())
    { startGame()
removeBg(event.key)
const score=parseInt(getInnerText('score'));
const UpdatedScore=score+1;
setInnerText('score',UpdatedScore); 
audio.src=success;
audio.play()
}

else{

    const Life=parseInt(getInnerText('Life'));
    const updatedLife=Life-1;
    if(updatedLife===0)
    {
        HideElementById('Playground')
        showElementById('End')
        setInnerText('EndScore',parseInt(getInnerText('score')))
        isGameOn=false;
}
const opacityParcent=(updatedLife/5)*100;
console.log(opacityParcent)

getId('artboard').style.background=(`linear-gradient(#ffffffB3 ${opacityParcent}%,red)`)

audio.src=error;
audio.play()

setInnerText('Life',updatedLife);


}
});




