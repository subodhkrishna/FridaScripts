import frida
import sys

APP_NAME = ""

js_code = """

setTimeout(function() { // avoid java.lang.ClassNotFoundException

	Java.perform(function() {

		// Debug some methods

		var CertificatePinner = Java.use("okhttp3.CertificatePinner");
		console.log("info: hooking class okhttp3.CertificatePinner");

		CertificatePinner.check.overload("java.lang.String","java.util.List").implementation = function(arg0,arg1) {
			console.log("info: bypassing check okhttp3.CertificatePinner");
			return;
		}

	});   

}, 0);

"""

device = frida.get_usb_device()
pid = device.spawn([APP_NAME])
device.resume(pid)
session = device.attach(pid)
script = session.create_script(js_code)
script.load()
sys.stdin.read()

