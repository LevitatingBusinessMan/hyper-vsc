const vscode = require('vscode');
const path_ = require('path');
const child_process = require('child_process');

exports.activate = context => {
    let command = vscode.commands.registerCommand('extension.openHyper', file => {
        console.log(file.path.substr(1));
        child_process.exec(`hyper "${file.path.substr(1)}"`, {}, err => {
            console.log('Launched Hyper Terminal');
            if (err) {
                console.log("Hyper error: " + err);
                vscode.window.showInformationMessage(err);
            }
        });
       
    });
    context.subscriptions.push(command)
};

exports.deactivate = function(){}
