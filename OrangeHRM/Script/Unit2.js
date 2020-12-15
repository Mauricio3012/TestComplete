
function test_ResetIE() {

    var scenarioID = Project.Variables.SCENARIONAME;


            Log.Message("Main");

            Log.Message("BuiltIn.ParamCount(): "+BuiltIn.ParamCount());
       

            var env = BuiltIn.ParamCount() -2;

            Log.Message("env: "+env);

            
            var environment = BuiltIn.ParamStr(env);

            Log.Message("environment: "+environment);
         

            Log.Message("Running tests for the "+environment+" configuration");
          

}

