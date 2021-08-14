function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5ePv3nLOkbE":
        Script1();
        break;
      case "5r2FLvbplv0":
        Script2();
        break;
  }
}

function Script1()
{
  // get interaction start time
window.interactionStart = new Date().getTime();
// get the player
var player = GetPlayer();
// get  interaction ID
var id = player.GetVar('id').replace(/ /g,'_').replace(/\W/g, '').substring(0, 254);
// get the SCORM comments
var comments = "";
try{
    comments = parent.parent.SCORM_GetComments();
}catch(e){
    comments = "";
}
// search string
var opentag = '['+id+']';
// see if ID is already set
if(comments.indexOf(opentag) !== -1) 
{
    // closing tag
    var closetag = '[/'+id+']';
    // start string
    var start = comments.lastIndexOf(opentag);
    // end string
    var end = comments.lastIndexOf(closetag);
    // set the input var
    if(start !== -1 && end !== -1)
    {
        player.SetVar('input', comments.substring(start + opentag.length, end));
    }
    // mark as already completed
    player.SetVar("completed",true);
}else{
    // get character count
    var charactercount = Number(player.GetVar("charactercount"));
    // get all textareas
    var txts = document.getElementsByTagName('textarea');
    for (var i = 0; i < txts.length; i++) {
        txts[i].addEventListener('input', function (event) {
            var val = event.target.value;
            player.SetVar("enable",val.length >= charactercount);
        }, false);
        txts[i].addEventListener('focus', function (event) {
            player.SetVar("focus",true);
        }, false);
        txts[i].addEventListener('blur', function (event) {
            player.SetVar("focus",false);
        }, false);
    }
}
}

function Script2()
{
  // set-up vars
var player = GetPlayer();
var blnCorrect = "neutral";
var dtmTime = new Date();
var response = player.GetVar('input');
var id = player.GetVar('id').replace(/ /g,'_').replace(/\W/g, '').substring(0, 254);
var objid = 0;
var latency = (new Date().getTime() - window.interactionStart);
// not used
var description = "";
var correctresponse = null;
var weighting = null;
// call the SCORM function in Rise
parent.parent.SCORM_RecordFillInInteraction(id, response, blnCorrect, correctresponse, description, weighting, latency, objid, dtmTime)
// write comment to LMS
parent.parent.SCORM_WriteComment('['+id+']'+response+'[/'+id+']');
}

