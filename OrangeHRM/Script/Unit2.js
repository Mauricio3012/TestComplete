
function test_ResetIE() {

    var scenarioID = Project.Variables.SCENARIONAME;


//            Log.Message("Main");
//
//            Log.Message("BuiltIn.ParamCount(): "+BuiltIn.ParamCount());
//       
//
//            var env = BuiltIn.ParamCount() -2;
//
//            Log.Message("env: "+env);
//
//            
//            var environment = BuiltIn.ParamStr(env);

            var environment = "[SVT]";
            
            Log.Message("environment: "+environment);
            
           environment =  environment.replace("[","");
           environment =  environment.replace("]","");
         

//            Log.Message("Running tests for the "+environment+" configuration");
            
             switch (environment)
  {
    case "SVT":
      Log.Message("This environment is SVT configuration");
      // Simulate a user action over the debug version of the application
      break;
    case "PTST":
      Log.Message("This environment is PTST configuration");
      // Simulate a user action over the debug version of the application
      break;
  }
          

}

