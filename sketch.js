/*

Officer: 8663444
CaseNum: 101-3-33976599-8663444

Case 101 - The Case of Lina Lovelace
Stage 4 - The Plaza Hotel

Okay this place is more Lina’s style. Now’s our chance to find out the root of all
of this. Lets see who is Lina meeting.

Identify Lina by drawing a cyan filled rectangle with a yellow outline.
She’s the woman in the red dress of course.

Identify the man with the monocle smoking the cigar green filled
rectangle with a red outline around him.

Identify the man reading the newspaper by drawing a red filled rectangle
with a cyan outline around him.

Identify the woman with the dog by drawing a red filled rectangle with a
green outline around her. Make sure you include the dog too.

The rectangles should cover the targets as accurately as possible without
including anything else.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  rect()
  fill() Use only 255 or 0 for r,g,b values. Set alpha to 100 for some opacity.
	stroke() Use only 255 or 0 for r,g,b values.

*/

var img;

function preload()
{
	img = loadImage('img.jpg');
}

function setup()
{
	createCanvas(img.width,img.height);
	strokeWeight(2);
    //noFill();
}

function draw()
{
	image(img,0,0);

	//Write your code below here ...
    //lina
    stroke(255,255,0);
    fill(0,255,255);
    rect(290,64,201,410);
    
    //man with newspaper
    stroke(0,255,255);
    fill(255,0,0);
    rect(973,104,180,352);

    //man with monocole
    stroke(255,0,0);
    fill(0,255,0);
    rect(20,42,95,139);
    
    //woman with dog
    stroke(0,255,0);
    fill(255,0,0);
    rect(1319,38,236,509);

}
