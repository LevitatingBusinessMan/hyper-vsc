const vscode = require('vscode');
const path_ = require('path');
const child_process = require('child_process');

exports.activate = context => {
    let command = vscode.commands.registerCommand('extension.openHyper', file => {

        child_process.exec(`hyper "${file ? file.path.charAt(1).toUpperCase() + file.path.substring(2) : ''}"`, {
            cwd: require('os').homedir()
        }, err => {
            if (err) {
                console.log("Hyper error: " + err);
                vscode.window.showInformationMessage(err);
            }
        });
       
    });
    context.subscriptions.push(command)
};

exports.deactivate = function(){}
