var lastHref="";
var currentLesson=0;






 
///////////////////////////////////////////////////////////////// 
 
var bHash = new Array();
var iMax = 100;
var jMax = 4;

for (i=0;i<iMax;i++) {
 bHash[i]=new Array();
 for (j=0;j<jMax;j++) {
  bHash[i][j]="";
 }
}
 
var test = 1;
var cnt=0;

var locked = new Array();
for (i=0;i<100;i++)
{
locked[i]=new Array(0);
}

locked[15][0] = 0;
locked[15][1]="";
locked[15][2]=4;
locked[15][3]="Ordinary World";


locked[4][0] = 1;
locked[4][1]="Ordinary World";
locked[4][2]=5;
locked[4][3]="Call to Adventure";

locked[5][0] = 1;
locked[5][1]="Call to Adventure";
locked[5][2]=6;
locked[5][3]="All the rest of the stages!!!";






var sArray = new Array();
var iMax = 6;
var jMax = 4;

for (i=0;i<iMax;i++) {
 sArray[i]=new Array();
 for (j=0;j<jMax;j++) {
  sArray[i][j]="";
 }
}

sArray[1][0]="Attitude";
sArray[1][1]="Cautiously Optimistic";
sArray[1][2]="Go with Flow";
sArray[1][3]="Bring it on!";

var pArray = new Array();
var iMax = 6;
var jMax = 4;

for (i=0;i<iMax;i++) {
 pArray[i]=new Array();
 for (j=0;j<jMax;j++) {
  pArray[i][j]="";
 }
}

var pCount=0;
pArray["attitude"]=[0];
pArray["test"]= [0];


$( document ).ready(function() {
	//$("h2").html("<b>CHANGED</b>");
	 $(".block-text").html("<div><iframe src=\"hero/password/story.html\" height=\"800\" width=\"100%\" allowfullscreen=\"\" frameborder=\"0\" scrolling=\"no\"> </iframe></div>");
var hash=location.hash;
var core;
if (hash.indexOf("/list/")>0)
{
	core = hash.split("#");
	location.href=core[0];
}
else
{
	
lastHref=location.href;


	
	$('a').each(function(){
        if (this.href.indexOf("javascript")>-1)
		{	
		this.href = this.href.replace('http://javascript:', 'javascript:');
		this.href = this.href.replace(';/', ';');
		bHash[getID(this.href),0]=0;
		
		
		
		
		cnt++;
		}
    });
	
	
	
	if (pName!=="Guest")
	{	
	zomagix("_zomagix:pname_",pName);
	zomagix("zomagix_intro1",pName+"! With your "+pArray["attitude"][2]+" attitude, are you ready for a challenge?");
	}
	else
	{
	askName();	
	}
	
}


	
	
	
});

function getName()
{
	return pName;
}



function askName()
{
	swal({
  title: "Welcome to the eLearning Hero's Journey!",
  text: "What's your hero name?",
  type: "input",
  showCancelButton: false,
  closeOnConfirm: false,
  animation: "slide-from-top",
  inputPlaceholder: "Guest"
},

function(inputValue){
  if (inputValue === false) return false;
  
  if (inputValue === "") {
    swal.showInputError("I need a name!");
    return false
  }
  
  swal("Nice!", "Welcome to the eLearning Hero's Journey, " + inputValue+"!", "success");
  pName =  inputValue;
  zomagix("_zomagix:pname_",pName);
  $(".overview__title").html(pName+": A Hero's Journey");

  });
}

var pName="Guest";

function getID(href)
{
var str=href.split(",");
var id = str[0].split("(");
return id[1];
	

}

function getNum(href)
{
var str=href.split(",");
var num = str[1].split(")");
return num[0];
	
}

$( document ).ready(function() {
	
});

$(window).on('hashchange', function(e){
 // Your Code goes here
cnt = 0; 




var hash = location.hash.replace( /^#/, '' );
 
 
 
 $(".embed__description").html("");
 
if (hash.indexOf("/list/")>-1)
{
	
var lnum= location.hash.split("/list/");
var lesson = lnum[1].split("?")[0];
currentLesson = lesson;
if (currentLesson==7)
 {
 $(".block-text").html("<div><iframe src=\"hero/password/story.html\" height=\"800\" width=\"100%\" allowfullscreen=\"\" frameborder=\"0\" scrolling=\"no\"> </iframe></div>");
 }
 
 zomagix("_zomagix:embed_","<div><iframe src=\"http://rabbitoreg.com/elhdemingo/story.html\" height=\"800\" width=\"100%\" allowfullscreen=\"\" frameborder=\"0\" scrolling=\"no\"> </iframe></div>");
 
if (locked[lesson][0]>0)
{
	showLocked(lesson);
	
}
else
{
	lastHref=location.href;
}

	
if (pName!=="Guest")
	{	
	zomagix("_zomagix:pname_",pName);
	zomagix("zomagix_intro1",pName+"! With your "+pArray["attitude"][2]+" attitude, are you ready for a challenge?");
	zomagix("_zomagix:embed_","<div><iframe src=\"http://rabbitoreg.com/elhdemingo/story.html\" height=\"800\" width=\"100%\" allowfullscreen=\"\" frameborder=\"0\" scrolling=\"no\"> </iframe></div>")
	}
	else
	{
	askName();	
	}
 
 $('a').each(function(){
        if (this.href.indexOf("javascript")>-1)
		{	
		this.href = this.href.replace('http://javascript:', 'javascript:');
		this.href = this.href.replace(';/', ';');
		this.href = this.href.replaceAll('&quot;', '"');
		
		if (this.href.indexOf("javascript:action(")>-1)
		{	
		if ((bHash[getID(this.href),0]>0) && (bHash[getID(this.href),0]!=getNum(this.href)))
		{
			this.href="javascript:noAction(1,1)";
			this.text="Disabled";
				this.style="background-color: rgb(211,211,211);";
		}	
		}
		
		
		
		cnt++;
		}
    });
	
}
 });
 
 String.prototype.replaceAll = function(str1, str2, ignore) 
{
    return this.replace(new RegExp(str1.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g,"\\$&"),(ignore?"gi":"g")),(typeof(str2)=="string")?str2.replace(/\$/g,"$$$$"):str2);
} 
 
 function callThis(x)
 {
	 test = test + 1;
	 swal({
  title: "Error!",
  text: "Now"+test,
  type: "warning",
  timer: 5000,
  confirmButtonText: "Cool"
});
 }

 function loaded(x)
 {
	
	var sc  = window.frames[0].frameElement.contentWindow.setProgress(test); 
 }

function action(id,num)
{
	
	removeOptions(id,num);
	
}
 


function noAction(id,num)
{
	 swal({
  title: pName+"!",
  text: "Already selected: "+pArray["attitude"][2],
  type: "error",
  timer: 5000,
  confirmButtonText: "Cool"
});
}

function noGift(id,num)
{
	 swal({
  title: pName+"!",
  text: "Already selected a gift!",
  type: "error",
  timer: 5000,
  confirmButtonText: "Cool"
});
}


function removeOptions(id,num)
{
	
	$('a').each(function(){
        
		if (this.href.indexOf("javascript:action("+id+",")>-1)
		{	
		if (this.href.indexOf("javascript:action("+id+","+num)==-1)
		{			
		this.text="Disabled";
		this.href="javascript:noAction("+id+","+num+")";
		this.style="background-color: rgb(211,211,211);";
		}
		else
		{
			this.text="SELECTED";
		this.href="javascript:noAction("+id+","+num+")";
		
			bHash[id,0]=num;
			bHash[id,1]="attitude";
			pArray["attitude"]=[id,num,sArray[id][num]];
			sendMessage("success","Got it, "+pName+"! "+ pArray["attitude"][2],3000);
			
				
		}
		}
		
		
		
		
		
		
    });

}



function unLock(lesson)
{
	locked[lesson][0]=0;
	
	swal({
  title: "Unlocked!",
  text: pName+"! You've unlocked a new stage!",
  type: "success",
  animation: "slide-from-top",
  
  timer: 4000
},

function(){
  
  }
  
  
  );
	
}

function showLocked(lesson)
{
	swal({
  title: "Locked!",
  text: pName+"! You need to complete "+locked[lesson][1]+" first!",
  
  animation: "slide-from-top",
  imageUrl: "rpg/locked.png",
  timer: 4000
},

function(){
  location.href=lastHref;
  }
  
  
  );
	
}

function selectGift(id,num)
{
	var world ="javascript:selectGift(\""+id+"\""; 
	
	$('a').each(function(){
		
        
		if (this.href.indexOf(world)>-1)
		{
			
		if (this.href.indexOf("javascript:selectGift(\""+id+"\","+num)==-1)
		{			
		this.text="Gift Left Behind";
		this.href="javascript:noGift(\""+id+"\","+num+")";
		this.style="background-color: rgb(211,211,211);";
		}
		else
		{
			this.text="Gift Selected";
		this.href="javascript:noGift(\""+id+"\","+num+")";
		
			
			sendMessage("success","Got it, "+pName+"! You've unlocked "+ locked[locked[currentLesson][2]][3],3000);
			
				
		}
		}
		
		
		
		
		
		
    });
	
	locked[locked[currentLesson][2]][0]=0;
	
	if (currentLesson==5)
	{
		for (i=5;i<12;i++)
		{	
		locked[[i][2]][0]=0;
		}
	}
	
}

function sendMessage(type,textme, time)
{
	swal({
  title: "Hero's WORL&D Message!",
  text: textme,
  type: type,
  timer: time,
  confirmButtonText: "Continue"
	});
}

function zomagix(code,replace)
{
	$('p').each(function(){
        	
		
		$(this).html($(this).html().replace(code,replace));

		
		
    });
	
	$('h3').each(function(){
        	
		
		$(this).html($(this).html().replace(code,replace));

		
		
    });
}