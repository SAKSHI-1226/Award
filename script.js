const button=document.getElementById("listenBtn");

button.onclick=function(){

const speech=new SpeechSynthesisUtterance(

"Welcome. You are viewing the Excellence Award 2026. This award is proudly presented to Sakshi Rawat in recognition of outstanding leadership and dedication."

);

speech.rate=1;
speech.pitch=1;
speech.volume=1;

window.speechSynthesis.speak(speech);

}