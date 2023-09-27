prediction1 = ""
prediction2 = ""
function preload() {
}

function setup() {
  canvas = createCanvas(300, 300);
  //canvas.center();
  video = createCapture(VIDEO);
  video.size(300, 300);
  video.hide();
  classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/WCK7BI4p-/model.json',modelLoaded);
  classifier.classify(video, gotResult);

}
     

function modelLoaded() {
  console.log('Model Loaded!');
  console.log('ml5 version:', ml5.version); 
}

function takeSnapshot(){    
  classifier.classify(video, gotResult);
}

function gotResult(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    document.getElementById("resultnName").innerHTML = results[0].label;
    prediction1 = results[0].label;
  }
}

function draw() {
  image(video, 0, 0, 300, 300);
  classifier.classify(video, gotResult);
}