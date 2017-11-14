import completeBodyUI = require("./actions/completeBody/ui")
import newResponseUI = require("./actions/newResponse/ui")

interface ActionUI {
    run(initialState?: any): Promise<any>;
}

export function getUICode(actionID: string): ActionUI {
    if(actionID == "completeBody") {
        return completeBodyUI;
    }

    if(actionID == "Create new Response") {
        return newResponseUI;
    }
    
    return null;
}