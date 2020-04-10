if (ObjC.available) { 

try { var className = "ANSMetadata"; 
var funcName = "- computeIsJailbroken"; 
var hook = eval('ObjC.classes.' + className + '["' + funcName + '"]');

Interceptor.attach(hook.implementation, { 
    onLeave: function(retval) { console.log("[*] Class Name: " + className);
    console.log("[*] Method Name: " + funcName); 
    console.log("\t[-] Type of return value: " + typeof retval);
    console.log('Type of retval -> ' + new ObjC.Object(retval).$className)
    console.log("\t[-] Return Value: " + retval); } }); } 
catch(err) { console.log("[!] Exception2: " + err.message); } } 

else { console.log("Objective-C Runtime is not available!"); }