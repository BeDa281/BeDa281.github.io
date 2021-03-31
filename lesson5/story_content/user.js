function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5ru1L47aPlO":
        Script1();
        break;
  }
}

function Script1()
{
  window.ReactNativeWebView.postMessage("CMD_CLOSELESSON");
}

