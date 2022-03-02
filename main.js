Webcam.snap({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90,
});
camera=document.getElementById("camera");
Webcam.attach('#camera');
function takesnapshot(){
   Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML='<img="capture_image" src="'+data_uri+'">';
   });
   
}
console.log('ml5 version:',ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/XcZuv68sv/model.json",modelLoaded);

function modelLoaded(){
    console.log("model is loaded");
}
function speak(){
    synth=window.speechSynthesis
    speak_data_1="the first prediction is"+Prediction_1;
    speak_data_2="And the second prediction is"+Prediction_2;
    utterthis=new SpeechSynthesisUtterance(speak_data_1+speak_data_2);
    utterthis.rate=0.5;
    synth.speak(utterthis);

}
function predict_emotion(){
    img=document.getElementById('capture_image');
    classifier.classify(img,gotResult);
}
function gotResult(error,results){
    if (error){
        console.error(error);
    }
    else 
    console.log(results);
    document.getElementById("result_emotion_name").innerHTML=results[0].label;
    document.getElementById("result_emotion_name1").innerHTML=results[1].label;
    Prediction_1=results[0].label;
    Prediction_2=results[1].label;
    speak();
    if(results[0].label=="Happy")
{
    document.getElementById("Emoji_result").innerHTML="&#128076;";
}
if(results[0].label=="Sad")
{
    document.getElementById("Emoji_result").innerHTML="&#128077;";
}
if(results[0].label=="Angry")
{
    document.getElementById("Emoji_result").innerHTML="&#9996;";
}

    if(results[1].label=="Happy")
{
    document.getElementById("Emoji_result1").innerHTML="&#128076;";
}
if(results[1].label=="Sad")
{
    document.getElementById("Emoji_result1").innerHTML="&#128077;";
}
if(results[1].label=="Angry")
{
    document.getElementById("Emoji_result1").innerHTML="&#9996;";
}
}