function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5aJtAWctBKc":
        Script1();
        break;
  }
}

function Script1()
{
  parent.loaded(1);
}

function setProgress(x)
{
	var p = GetPlayer();
	p.SetVar("Progress",x);
}
