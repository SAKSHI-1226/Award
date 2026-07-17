document.getElementById("title").innerHTML = award.title;

document.getElementById("awardImage").src = award.image;

document.getElementById("summary").innerHTML = award.summary;

const details=document.getElementById("details");

award.details.forEach(item=>{

details.innerHTML += `
<div class="detail">

<div class="label">${item.label}</div>

<div>${item.value}</div>

</div>
`;

});

document.getElementById("listenBtn").onclick=function(){

const speech=new SpeechSynthesisUtterance(award.summary);

speech.rate=1;

speech.pitch=1;

window.speechSynthesis.speak(speech);

}
