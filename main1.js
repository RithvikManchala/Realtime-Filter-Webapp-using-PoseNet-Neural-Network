noseX = 0;
noseY = 0;

function preload()
{
  image_nose = loadImage('https://i.postimg.cc/7ZBcjDqp/clownnose.png')
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
   {console.log("nosex =" + results[0].pose.nose.x);
      noseX = results[0].pose.nose.x-15;
      noseY = results[0].pose.nose.y-15;
   }
}

function draw()
{
   image(video, 0, 0, 300, 300);
   console.log("image");
   image(image_nose, noseX, noseY, 30, 30);
}

function take_snapshot()
{
    save('image.png');
}