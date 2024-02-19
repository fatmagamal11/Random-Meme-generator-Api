const generateMemeBtn=document.querySelector(".meme-generator .generate-meme-btn");
const memeImage=document.querySelector(".meme-generator img");
const memeTitle=document.querySelector(".meme-generator .meme-title");
const memeAuthor=document.querySelector(".meme-generator .meme-author");

function updateDetails(URL,Title,Author){
    memeImage.src=URL;
    memeTitle.innerHTML=Title;
    memeAuthor.innerHTML=`Meme by ${Author} ☺`;

}
function generateMeme(){
fetch("https://meme-api.com/gimme/wholesomememes").
then(response=>response.json()).then(data=>{
    updateDetails(data.url,data.title,data.author);
    console.log(data.url);
})
}
generateMemeBtn.addEventListener("click",generateMeme)

