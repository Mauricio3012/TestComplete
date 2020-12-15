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
  aqObject.CheckProperty(Aliases.browser.pageOrangehrm.panelBranding.linkWelcome, "contentText", cmpEqual, "Welcome Lee");
  //Closes the 'Item' window.
  Aliases.browser.Item.Close();
}