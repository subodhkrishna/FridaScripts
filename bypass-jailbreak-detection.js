if (ObjC.available)
{
    try
    {
        //Your class name here
        var className = "ANSMetadata";
        //Your function name here
        var funcName = "- isJailbroken";
        var hook = eval('ObjC.classes.' + className + '["' + funcName + '"]');

        Interceptor.attach(hook.implementation, {
          onLeave: function(retval) {
            console.log("[*] Class Name: " + className);
            console.log("[*] Method Name: " + funcName);
        console.log("\t[-] Return Value: " + retval);
            

        //For modifying the return value
            var newretval = ptr("0x0") //your new return value here
            retval.replace(newretval)
            console.log("\t[-] New Return Value: " + newretval)
          }
        });

        var funcName1 = "- computeIsJailbroken"
        var hook1 = eval('ObjC.classes.' + className + '["' + funcName1 + '"]');
        
        Interceptor.attach(hook1.implementation, {
          onLeave: function(retval) {
            console.log("[*] Class Name: " + className);
            console.log("[*] Method Name: " + funcName1);
        console.log("\t[-] Return Value: " + retval);
            

        //For modifying the return value
            var newretval1 = ptr("0x0") //your new return value here
            retval.replace(newretval1)
            console.log("\t[-] New Return Value: " + newretval1)
          }
        });        

        var className1 = "UIDevice"
        var funcName2 = "+ isJailbroken"
        var hook2 = eval('ObjC.classes.' + className1 + '["' + funcName2 + '"]');
        
        Interceptor.attach(hook2.implementation, {
          onLeave: function(retval) {
            console.log("[*] Class Name: " + className1);
            console.log("[*] Method Name: " + funcName2);
        console.log("\t[-] Return Value: " + retval);
            

        //For modifying the return value
            var newretval2 = ptr("0x0") //your new return value here
            retval.replace(newretval2)
            console.log("\t[-] New Return Value: " + newretval2)
          }
        });
    }
    catch(err)
    {
        console.log("[!] Exception2: " + err.message);
    }
}
else
{
    console.log("Objective-C Runtime is not available!");
}
