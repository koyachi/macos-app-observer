#!/usr/bin/env osascript -l JavaScript

console.stdoutLog = function() {
    ObjC.import('Foundation');
    for (argument of arguments) {
        $.NSFileHandle.fileHandleWithStandardOutput.writeData($.NSString.alloc.initWithString(String(argument) + "\n").dataUsingEncoding($.NSNEXTSTEPStringEncoding));
    }
}

function observeFrontmostApp() {
    const frontmost_app_name = Application('System Events').applicationProcesses.where({ frontmost: true }).name()[0];
    var d = new Date();
    var result = d.toISOString() + "\t" + frontmost_app_name;
    console.stdoutLog(result);
}

/*
var waitSec = 60;
while (true) {
observeFrontmostApp();
    delay(waitSec);
}
*/
observeFrontmostApp();
