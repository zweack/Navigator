"use strict";

import {
  window,
  commands,
  Disposable,
  ExtensionContext,
  StatusBarAlignment,
  StatusBarItem,
} from "vscode";

export function activate(context: ExtensionContext) {
  let commandArray = [
    ["Navigator.navigateBack", "workbench.action.navigateBack"],
    ["Navigator.navigateForward", "workbench.action.navigateForward"],
  ];
  let disposableCommandsArray: Disposable[] = [];
  commandArray.forEach((command) => {
    disposableCommandsArray.push(
      commands.registerCommand(command[0], () => {
        commands.executeCommand(command[1]).then(function () {});
      })
    );
  });
  let _statusBarItemBack: StatusBarItem;

  let _statusBarItemFwd: StatusBarItem;

  if (!this._statusBarItemBack) {
    this._statusBarItemBack = window.createStatusBarItem(
      StatusBarAlignment.Left
    );
  }

  if (!this._statusBarItemFwd) {
    this._statusBarItemFwd = window.createStatusBarItem(
      StatusBarAlignment.Left
    );
  }

  this._statusBarItemBack.command = "workbench.action.navigateBack";
  this._statusBarItemFwd.command = "workbench.action.navigateForward";
  this._statusBarItemBack.tooltip = "Back";
  this._statusBarItemFwd.tooltip = "Forward";

  this._statusBarItemBack.text = "$(arrow-left)";

  this._statusBarItemFwd.text = "$(arrow-right)";
  this._statusBarItemBack.show();

  this._statusBarItemFwd.show();

  context.subscriptions.push(_statusBarItemFwd);
  context.subscriptions.push(_statusBarItemBack);
}

export function deactivate() {}