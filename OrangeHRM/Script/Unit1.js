//@TestScript
function LoginPage()
{
  //Launches the specified browser and opens the specified URL in it.
  Browsers.Item(btChrome).Run("https://opensource-demo.orangehrmlive.com/index.php/auth/login");
  //Sets the text 'Admin' in the 'textboxTxtusername' text editor.
  Aliases.browser.pageOrangehrm2.formFrmlogin.textboxTxtusername.SetText("Admin");
  //Sets the text 'admin123' in the 'passwordboxTxtpassword' text editor.
  Aliases.browser.pageOrangehrm2.formFrmlogin.passwordboxTxtpassword.SetText("admin123");
  //Clicks the 'submitbuttonLogin' button.
  Aliases.browser.pageOrangehrm2.formFrmlogin.submitbuttonLogin.ClickButton();
  //Checks whether the 'contentText' property of the Aliases.browser.pageOrangehrm.panelBranding.linkWelcome object equals 'Welcome Paul'.
  aqObject.CheckProperty(Aliases.browser.pageOrangehrm.panelBranding.linkWelcome, "contentText", cmpEqual, "Welcome Paul");
  //Closes the 'Item' window.
  Aliases.browser.Item.Close();
}

//@TestParameters
function Main()
{
  processCommandLineArguments();
}

//@TestParameters
function processCommandLineArguments()
{
  for (var i = 0; i < BuiltIn.ParamCount(); i++)
  {
    processCommandLineArgument(BuiltIn.ParamStr(i))
  }
}

//@TestParameters
function processCommandLineArgument(arg)
{
  var items = arg.split("=");

  if (items.length != 2)
  {
    return;
  }

  var item = aqString.ToLower(aqString.Replace(aqString.Trim(items[0]), "/", ""));
  if (item == "config")
  {
    // Run the Test routine with the parameter value
    Test(items[1]);
  }
}

//@TestParameters
function Test(config)
{
  switch (aqString.ToLower(aqString.Trim(config)))
  {
    case "SVT":
      Log.Message("Running tests for the SVT configuration");
      // Simulate a user action over the debug version of the application
      break;
    case "PTST":
      Log.Message("Running tests for the PTST configuration");
      // Simulate a user action over the debug version of the application
      break;
  }
}