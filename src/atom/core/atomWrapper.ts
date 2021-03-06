/// <reference path="../../../typings/main.d.ts" />
export class Workspace {
    onDidChangeActivePaneItem(callback:(arg:any) => void):void {
        return (<any>atom.workspace).onDidChangeActivePaneItem(callback);
    }

    addModalPanel(arg:AddModalPanelArg):any {
        return atom.workspace.addModalPanel(arg);
    }

    getActiveTextEditor(): ITextEditor {
        return atom.workspace.getActiveTextEditor();
    }

    getActivePane(): IPane {
        return atom.workspace.getActivePane();
    }

    getActiveEditor(): IEditor {
        return atom.workspace.getActiveEditor();
    }

    addRightPanel(arg: any) {
        return (<any>atom.workspace).addRightPanel(arg);
    }

    paneForItem(arg: any) {
        return (<any>atom.workspace).paneForItem(arg);
    }
    getPaneItems() {
        return (<any> atom.workspace).getPaneItems();
    }
    onDidAddPaneItem(callback: (event: { item: any; pane: IPane; index: number }) => void) {
        return (<any> atom.workspace).onDidAddPaneItem(callback);
    }
    onDidDestroyPane(callback: (event: { pane: IPane }) => void) {
        return (<any> atom.workspace).onDidDestroyPane(callback);
    }
    open(path, args) {
        atom.workspace.open(path, args);
    }

    getCenter() {
        return (<any>atom).workspace.getCenter();
    }
}

export function open(pathsToOpen) {
    (<any>atom).open(pathsToOpen);
}

interface IPane {
    splitUp(arg:any): IPane;

    splitDown(arg:any): IPane;

    splitLeft(arg:any): IPane;

    splitRight(arg:any): IPane;

    addItem(item:any, index:number);

    activateItemAtIndex(arg: any);
    
    moveItemToPane(item:any, pane:IPane, index:number):void;
}

interface Point{
    row:number;
    column:number;
}

interface Range {
    start:Point;
    end:Point;
}

export  interface  ICursor {
    getBufferPosition(): Point;
}

export interface  IBuffer {
    positionForCharacterIndex(indexOf:any): Point;

    rangeForRow(any): Range;

    setText(text);
}

export interface  ITextEditor {
    getText(): string;

    getPath(): string;

    getLastCursor(): ICursor;

    getBuffer(): IBuffer;

    setText(text);

    getCursorBufferPosition();
}

export interface  IEditor {
    getBuffer(): IBuffer;

    setSelectedBufferRange(range: any, arg: any);
}

export interface AddModalPanelArg {
    item: any;
}

export var workspace:Workspace = new Workspace();

export interface ICommandManager {
    add(selector: string, type: string, callback: () => void): AtomCore.Disposable;
}

export class CommandManager {
    add(selector: string, type: string, callback: () => void) {
        return atom.commands.add(selector, type, callback);
    }
}

export var commands = new CommandManager();