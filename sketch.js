var hr, mn, sc,hrAng,mnAng,scAng;


function setup() {
  createCanvas(400,400);
  angleMode(DEGREES)

}

function draw() {
  background(0);
  translate(200,200);  
  rotate(-90);
  hr=hour();
  hrAng=map(hr%12,0,12,0,360);
mn=minute();
mnAng=map(mn,0,60,0,360);
sc=second();
scAng=map(sc,0,60,0,360);

push ();
rotate (mnAng);
stroke (0,255,0);
strokeWeight (7);
line (0,0,60,0);
pop ();
noFill();
stroke (0,255,0);
strokeWeight(7);
arc (0,0,260,260,0,mnAng);

push ();
rotate (hrAng);
stroke (0,0,255);
strokeWeight (7);
line (0,0,50,0);
pop ();
noFill();
stroke (0,0,255);
strokeWeight(7);
arc (0,0,240,240,0,hrAng);

push ();
rotate (scAng);
stroke (255,0,0);
strokeWeight (7);
line (0,0,70,0);
pop ();
noFill();
stroke (255,0,0);
strokeWeight(7);
arc (0,0,280,280,0,scAng)
}