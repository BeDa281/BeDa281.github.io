function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6fV6ZLIpFoc":
        Script1();
        break;
  }
}

function Script1()
{
  var p=GetPlayer();
var name = parent.getName();
if (name!=='')
{
p.SetVar("myname",name);
}
else
{
p.SetVar("myname","Hero");
}
}

