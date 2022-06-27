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
  let _statusBarItemBack: StatusBarItem;
  let _statusBarItemFwd: StatusBarItem;
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

  this._statusBarItemBack.tooltip = "Navigate back";
  this._statusBarItemFwd.tooltip = "Navigate forward";

  this._statusBarItemBack.text = "$(arrow-left)";
  this._statusBarItemFwd.text = "$(arrow-right)";

  if (this.navigateForwardStatusBar) {
    this._statusBarItemFwd.show();
  }
  if (this.navigateBackStatusBar) {
    this._statusBarItemBack.show();
  }

  context.subscriptions.push(_statusBarItemFwd);
  context.subscriptions.push(_statusBarItemBack);
}

export function deactivate() {}
