noseX = 0;
noseY = 0;

function preload()
{
  img = loadImage('https://postlmg.cc/phzdt1rP');
}

function setup()
{
   canvas = createCanvas(300, 300);
   canvas.center();

   video = createCapture(VIDEO);
   video.size(300, 300);
   video.hide();

   poseNet = ml5.poseNet(video, modelLoaded);
   poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
   console.log("model has loaded");
}

function gotPoses(results)
{
   if(results.length > 0)
   {
       noseX = results[0].pose.nose.x;
       noseY = results[0].pose.nose.y;
   }
}

function draw()
{
   image(video, 0, 0, 300, 300);
   image(img, noseX, noseY, 50, 20);
}

function take_snapshot()
{
    save('image.png');
}