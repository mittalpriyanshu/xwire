import { refresh } from '../SaveAndLoad/SaveAndLoad.js'
import { Import } from '../SaveAndLoad/SaveAndLoad.js'

export function showAlert(msg) {
    let alertMsg = document.getElementById("alert-box").children[0].children[0];
    let alertBox = document.getElementById("alert-box");
    document.getElementById("alert-ok-btn").addEventListener("click", (e) => {
        alertBox.classList.toggle("hidden", true);
        // console.log("ok clicked");
    });
    alertMsg.innerHTML = `<span style="color: tomato;">Alert:</span> ${msg}`;
    alertBox.classList.toggle('hidden', false);
    [...document.getElementsByClassName("sidebox")].forEach(value => {
        if (value !== alertBox) {
            value.classList.toggle("hidden", true);
        }
        else {
            value.classList.toggle("hidden", false);
        }
    })
}

// <div style="font-size: 1.2rem; color: white; padding: 10px; margin-top: 10px; text-align: center"><span
//                     style="color: tomato;">Alert:</span> Current Scipt Will Be Lost Unless Exported</div>

export function prompRefreshOrStarter(type, stage) {
    let refreshBox = document.getElementById("refresh-box");
    let refBtn = document.getElementById("refresh-btn");
    let refCnclBtn = document.getElementById("refresh-cancel-btn");
    // console.log("refresh clicked");
    if (type == 'refresh') {
        refreshBox.children[0].children[1].innerHTML = 'Refresh'
        refreshBox.classList.toggle('hidden', false);
        [...document.getElementsByClassName("sidebox")].forEach(value => {
            if (value !== refreshBox) {
                value.classList.toggle("hidden", true);
            }
            else {
                value.classList.toggle("hidden", false);
            }
        });
        refBtn.addEventListener("click", (e) => {
            refresh(stage.findOne("#main_layer"), stage.findOne("#wireLayer"));
            refreshBox.classList.toggle('hidden', true);
        });
        refCnclBtn.addEventListener("click", (e) => {
            refreshBox.classList.toggle('hidden', true);
        });
    }
    if (type == 'starter') {
        refreshBox.children[0].children[1].innerHTML = 'Load';
        refreshBox.classList.toggle('hidden', false);
        [...document.getElementsByClassName("sidebox")].forEach(value => {
            if (value !== refreshBox) {
                value.classList.toggle("hidden", true);
            }
            else {
                value.classList.toggle("hidden", false);
            }
        });
        refBtn.addEventListener("click", (e) => {
            refreshBox.classList.toggle('hidden', true);
            vscriptOnLoad(stage);
        });
        refCnclBtn.addEventListener("click", (e) => {
            refreshBox.classList.toggle('hidden', true);
        });
    }
}
export function vscriptOnLoad(stage) {
    // stage.setScale({x: 0.5, y: 0.5});
    // const starterFile = { "variables": [{ "name": "coolStuff", "dataType": "String", "value": "'https://youtu.be/vTIIMJ9tUc8?t=105'" }], "nodesData": [{ "position": { "x": 285.76949478124993, "y": 160.00829895214838 }, "nodeDescription": { "nodeTitle": "Begin", "execIn": false, "pinExecInId": null, "execOut": { "execOut0": { "execOutTitle": null, "pinExecOutId": "10", "outOrder": 0 } }, "color": "Begin", "rows": 2, "colums": 10 } }, { "position": { "x": 501.3872296698097, "y": 161.2761797590843 }, "nodeDescription": { "nodeTitle": "Confirm", "execIn": true, "pinExecInId": "62", "execOut": { "execOut0": { "execOutTitle": null, "pinExecOutId": "63", "outOrder": 0 } }, "inputs": { "input0": { "inputTitle": "Message", "dataType": "String", "defValue": "'u wanna see some cool stuff ?'", "pinInId": "64" } }, "outputs": { "output0": { "outputTitle": "Ok?", "dataType": "Boolean", "pinOutId": "69", "outOrder": 1 } }, "color": "Print", "rows": 3, "colums": 12 } }, { "position": { "x": 1216.4116108593755, "y": 150.01528070898422 }, "nodeDescription": { "nodeTitle": "OpenWindow", "execIn": true, "pinExecInId": "16", "execOut": { "execOut0": { "execOutTitle": null, "pinExecOutId": "17", "outOrder": 0 } }, "inputs": { "input0": { "inputTitle": "URL", "dataType": "String", "defValue": "'link'", "pinInId": "18" } }, "outputs": { "output0": { "outputTitle": "Success?", "dataType": "Boolean", "pinOutId": "23", "outOrder": 1 } }, "color": "Func", "rows": 2, "colums": 12 } }, { "position": { "x": 1203.519704023151, "y": 382.23448287513907 }, "nodeDescription": { "nodeTitle": "Alert", "execIn": true, "pinExecInId": "101", "execOut": { "execOut0": { "execOutTitle": null, "pinExecOutId": "102", "outOrder": 0 } }, "inputs": { "input0": { "inputTitle": "Value", "dataType": "Data", "defValue": "'u missed some nice stuff'", "pinInId": "103" } }, "color": "Print", "rows": 3, "colums": 12 } }, { "position": { "x": 1202.448197106272, "y": 520.6776970135538 }, "nodeDescription": { "nodeTitle": "Alert", "execIn": true, "pinExecInId": "115", "execOut": { "execOut0": { "execOutTitle": null, "pinExecOutId": "116", "outOrder": 0 } }, "inputs": { "input0": { "inputTitle": "Value", "dataType": "Data", "defValue": "'After closing this dialog, right click on the editor to get bunch of new nodes and create your own scripts :)'", "pinInId": "117" } }, "color": "Print", "rows": 3, "colums": 12 } }, { "position": { "x": 773.9416135561129, "y": 211.52728595257065 }, "nodeDescription": { "nodeTitle": "If/Else", "execIn": true, "pinExecInId": "78", "execOut": { "execOut0": { "execOutTitle": "True", "pinExecOutId": "79", "outOrder": 0 }, "execOut1": { "execOutTitle": "False", "pinExecOutId": "81", "outOrder": 1 }, "execOut2": { "execOutTitle": "Done", "pinExecOutId": "83", "outOrder": 2 } }, "inputs": { "input0": { "inputTitle": "Bool", "dataType": "Boolean", "defValue": true, "pinInId": "85" } }, "color": "Logic", "rows": 3, "colums": 12 } }, { "position": { "x": 1162.8208273281257, "y": 280.7125038125001 }, "nodeDescription": { "nodeTitle": "Get coolStuff", "outputs": { "output0": { "outputTitle": "Value(Ref)", "dataType": "String", "pinOutId": "32", "outOrder": 0 } }, "color": "Get", "rows": 2, "colums": 10 } }], "wireData": [{ "srcId": "10", "destId": "62" }, { "srcId": "63", "destId": "78" }, { "srcId": "79", "destId": "16" }, { "srcId": "81", "destId": "101" }, { "srcId": "83", "destId": "115" }, { "srcId": "69", "destId": "85" }, { "srcId": "32", "destId": "18" }] };
    const starterFile = { "variables": [{ "name": "coolStuff", "dataType": "String", "value": "'https://youtu.be/vTIIMJ9tUc8?t=105'" }, { "name": "fib0", "dataType": "Number", "value": "0" }, { "name": "fib1", "dataType": "Number", "value": "1" }, { "name": "tmp", "dataType": "Number", "value": "0" }, { "name": "fibArray", "dataType": "Array", "value": "[]" }, { "name": "catFactsApi", "dataType": "String", "value": "'https://catfact.ninja/fact'" }], "nodesData": [{ "position": { "x": 640.1957355310791, "y": 1149.6123184434612 }, "nodeDescription": { "nodeTitle": "Confirm", "execIn": true, "pinExecInId": "62", "execOut": { "execOut0": { "execOutTitle": null, "pinExecOutId": "63", "outOrder": 0 } }, "inputs": { "input0": { "inputTitle": "Message", "dataType": "String", "defValue": "'u wanna see some cool stuff ?'", "pinInId": "64" } }, "outputs": { "output0": { "outputTitle": "Ok?", "dataType": "Boolean", "pinOutId": "69", "outOrder": 1 } }, "color": "Print", "rows": 3, "colums": 12 } }, { "position": { "x": 943.0808918774987, "y": 1154.2878748323233 }, "nodeDescription": { "nodeTitle": "If/Else", "execIn": true, "pinExecInId": "78", "execOut": { "execOut0": { "execOutTitle": "True", "pinExecOutId": "79", "outOrder": 0 }, "execOut1": { "execOutTitle": "False", "pinExecOutId": "81", "outOrder": 1 }, "execOut2": { "execOutTitle": "Done", "pinExecOutId": "83", "outOrder": 2 } }, "inputs": { "input0": { "inputTitle": "Bool", "dataType": "Boolean", "defValue": true, "pinInId": "85" } }, "color": "Logic", "rows": 3, "colums": 12 } }, { "position": { "x": 624.8490952267291, "y": 76.13062296509307 }, "nodeDescription": { "nodeTitle": "ForLoop", "pinExecInId": "168", "execIn": true, "execOut": { "execOut0": { "execOutTitle": "Loop Body", "pinExecOutId": "169", "outOrder": 0 }, "execOut1": { "execOutTitle": "Completed", "pinExecOutId": "171", "outOrder": 2 } }, "inputs": { "input0": { "inputTitle": "From", "dataType": "Number", "defValue": 0, "pinInId": "173" }, "input1": { "inputTitle": "To(Excl)", "dataType": "Number", "defValue": 10, "pinInId": "178" }, "input2": { "inputTitle": "Increment", "dataType": "Number", "defValue": 1, "pinInId": "183" } }, "outputs": { "output0": { "outputTitle": "Index", "dataType": "Number", "pinOutId": "188", "outOrder": 1 } }, "color": "Logic", "rows": 2, "colums": 12 } }, { "position": { "x": 1062.358745795078, "y": 9.64809972519835 }, "nodeDescription": { "nodeTitle": "Print", "execIn": true, "pinExecInId": "197", "execOut": { "execOut0": { "execOutTitle": null, "pinExecOutId": "198", "outOrder": 0 } }, "inputs": { "input0": { "inputTitle": "Value", "dataType": "Data", "defValue": "'hello'", "pinInId": "199" } }, "color": "Print", "rows": 3, "colums": 12 } }, { "position": { "x": 882.7650007538189, "y": 159.85163279515638 }, "nodeDescription": { "nodeTitle": "Get fib0", "outputs": { "output0": { "outputTitle": "Value(Ref)", "dataType": "Number", "pinOutId": "161", "outOrder": 0 } }, "color": "Get", "rows": 2, "colums": 10 } }, { "position": { "x": 1236.2691694516263, "y": 163.34281389620685 }, "nodeDescription": { "nodeTitle": "Add", "inputs": { "input0": { "inputTitle": "ValueA", "dataType": "Number", "defValue": 0, "pinInId": "240" }, "input1": { "inputTitle": "ValueB", "dataType": "Number", "defValue": 0, "pinInId": "245" } }, "outputs": { "output0": { "outputTitle": "Result", "dataType": "Number", "pinOutId": "250", "outOrder": 0 } }, "color": "Math", "rows": 2, "colums": 10 } }, { "position": { "x": 935.1522585885414, "y": 253.74975644182052 }, "nodeDescription": { "nodeTitle": "Get fib1", "outputs": { "output0": { "outputTitle": "Value(Ref)", "dataType": "Number", "pinOutId": "231", "outOrder": 0 } }, "color": "Get", "rows": 2, "colums": 10 } }, { "position": { "x": 1296.8417070314447, "y": 16.433630516210982 }, "nodeDescription": { "nodeTitle": "Set tmp", "execIn": true, "pinExecInId": "213", "execOut": { "execOut0": { "execOutTitle": null, "pinExecOutId": "214", "outOrder": 0 } }, "inputs": { "input0": { "inputTitle": "Value", "dataType": "Number", "defValue": 0, "pinInId": "215" } }, "outputs": { "output0": { "outputTitle": "Value(Ref)", "dataType": "Number", "pinOutId": "220", "outOrder": 1 } }, "color": "Func", "rows": 2, "colums": 12 } }, { "position": { "x": 1833.5365239733978, "y": 18.884241374940608 }, "nodeDescription": { "nodeTitle": "Set fib1", "execIn": true, "pinExecInId": "288", "execOut": { "execOut0": { "execOutTitle": null, "pinExecOutId": "289", "outOrder": 0 } }, "inputs": { "input0": { "inputTitle": "Value", "dataType": "Number", "defValue": 0, "pinInId": "290" } }, "outputs": { "output0": { "outputTitle": "Value(Ref)", "dataType": "Number", "pinOutId": "295", "outOrder": 1 } }, "color": "Func", "rows": 2, "colums": 12 } }, { "position": { "x": 1547.3197219286844, "y": -149.4043843715472 }, "nodeDescription": { "nodeTitle": "Set fib0", "execIn": true, "pinExecInId": "263", "execOut": { "execOut0": { "execOutTitle": null, "pinExecOutId": "264", "outOrder": 0 } }, "inputs": { "input0": { "inputTitle": "Value", "dataType": "Number", "defValue": 0, "pinInId": "265" } }, "outputs": { "output0": { "outputTitle": "Value(Ref)", "dataType": "Number", "pinOutId": "270", "outOrder": 1 } }, "color": "Func", "rows": 2, "colums": 12 } }, { "position": { "x": 360.3458171820312, "y": 74.17517317011703 }, "nodeDescription": { "nodeTitle": "Begin", "execIn": false, "pinExecInId": null, "execOut": { "execOut0": { "execOutTitle": null, "pinExecOutId": "10", "outOrder": 0 } }, "color": "Begin", "rows": 2, "colums": 10 } }, { "position": { "x": 1551.216765448137, "y": 5.548682440772666 }, "nodeDescription": { "nodeTitle": "Get fib1", "outputs": { "output0": { "outputTitle": "Value(Ref)", "dataType": "Number", "pinOutId": "279", "outOrder": 0 } }, "color": "Get", "rows": 2, "colums": 10 } }, { "position": { "x": 1512.771776695504, "y": 1416.9201863915812 }, "nodeDescription": { "nodeTitle": "Alert", "execIn": true, "pinExecInId": "115", "execOut": { "execOut0": { "execOutTitle": null, "pinExecOutId": "116", "outOrder": 0 } }, "inputs": { "input0": { "inputTitle": "Value", "dataType": "Data", "defValue": "'After closing this dialog, right click on the editor to get bunch of new nodes and create your own scripts :)'", "pinInId": "117" } }, "color": "Print", "rows": 3, "colums": 12 } }, { "position": { "x": 1561.0501231968399, "y": 1251.0411440014332 }, "nodeDescription": { "nodeTitle": "Alert", "execIn": true, "pinExecInId": "101", "execOut": { "execOut0": { "execOutTitle": null, "pinExecOutId": "102", "outOrder": 0 } }, "inputs": { "input0": { "inputTitle": "Value", "dataType": "Data", "defValue": "'u missed some nice stuff'", "pinInId": "103" } }, "color": "Print", "rows": 3, "colums": 12 } }, { "position": { "x": 1821.096442061649, "y": 1241.9167263753077 }, "nodeDescription": { "nodeTitle": "Get coolStuff", "outputs": { "output0": { "outputTitle": "Value(Ref)", "dataType": "String", "pinOutId": "32", "outOrder": 0 } }, "color": "Get", "rows": 2, "colums": 10 } }, { "position": { "x": 1902.6031409132486, "y": 1076.0798713887261 }, "nodeDescription": { "nodeTitle": "OpenWindow", "execIn": true, "pinExecInId": "16", "execOut": { "execOut0": { "execOutTitle": null, "pinExecOutId": "17", "outOrder": 0 } }, "inputs": { "input0": { "inputTitle": "URL", "dataType": "String", "defValue": "'link'", "pinInId": "18" } }, "outputs": { "output0": { "outputTitle": "Success?", "dataType": "Boolean", "pinOutId": "23", "outOrder": 1 } }, "color": "Func", "rows": 2, "colums": 12 } }, { "position": { "x": 1338.2444748633134, "y": 543.136740532748 }, "nodeDescription": { "nodeTitle": "Print", "execIn": true, "pinExecInId": "334", "execOut": { "execOut0": { "execOutTitle": null, "pinExecOutId": "335", "outOrder": 0 } }, "inputs": { "input0": { "inputTitle": "Value", "dataType": "Data", "defValue": "'hello'", "pinInId": "336" } }, "color": "Print", "rows": 3, "colums": 12 } }, { "position": { "x": 669.8079691212556, "y": 560.617817270978 }, "nodeDescription": { "nodeTitle": "HttpRequest", "execIn": true, "pinExecInId": "306", "execOut": { "execOut0": { "execOutTitle": "OnSuccess", "pinExecOutId": "307", "outOrder": 0 }, "execOut1": { "execOutTitle": "OnFail", "pinExecOutId": "309", "outOrder": 2 }, "execOut2": { "execOutTitle": "Continue", "pinExecOutId": "311", "outOrder": 3 } }, "inputs": { "input0": { "inputTitle": "URL", "dataType": "String", "defValue": "'link'", "pinInId": "313" } }, "outputs": { "output0": { "outputTitle": "JSON", "dataType": "Data", "pinOutId": "318", "outOrder": 1 } }, "color": "Func", "rows": 2, "colums": 12 } }, { "position": { "x": 445.32242406433573, "y": 657.8024685377316 }, "nodeDescription": { "nodeTitle": "Get catFactsApi", "outputs": { "output0": { "outputTitle": "Value(Ref)", "dataType": "String", "pinOutId": "325", "outOrder": 0 } }, "color": "Get", "rows": 2, "colums": 10 } }, { "position": { "x": 1355.211745865666, "y": 786.6439536440772 }, "nodeDescription": { "nodeTitle": "Print", "execIn": true, "pinExecInId": "352", "execOut": { "execOut0": { "execOutTitle": null, "pinExecOutId": "353", "outOrder": 0 } }, "inputs": { "input0": { "inputTitle": "Value", "dataType": "Data", "defValue": "'API REQUEST UNSUCCESSFUL'", "pinInId": "354" } }, "color": "Print", "rows": 3, "colums": 12 } }, { "position": { "x": 1096.6222103758923, "y": 617.8530961704762 }, "nodeDescription": { "nodeTitle": "GetByName(JSON)", "inputs": { "input0": { "inputTitle": "JSON", "dataType": "Data", "isInputBoxRequired": false, "pinInId": "368" }, "input1": { "inputTitle": "Name", "dataType": "String", "defValue": "'fact'", "pinInId": "370" } }, "outputs": { "output0": { "outputTitle": "Data", "dataType": "Data", "pinOutId": "375", "outOrder": 0 } }, "color": "Get", "rows": 2, "colums": 12 } }, { "position": { "x": 3719.492065534509, "y": 45.67011863451796 }, "nodeDescription": { "nodeTitle": "If/Else", "execIn": true, "pinExecInId": "407", "execOut": { "execOut0": { "execOutTitle": "True", "pinExecOutId": "408", "outOrder": 0 }, "execOut1": { "execOutTitle": "False", "pinExecOutId": "410", "outOrder": 1 }, "execOut2": { "execOutTitle": "Done", "pinExecOutId": "412", "outOrder": 2 } }, "inputs": { "input0": { "inputTitle": "Bool", "dataType": "Boolean", "defValue": true, "pinInId": "414" } }, "color": "Logic", "rows": 3, "colums": 12 } }, { "position": { "x": 3497.0899677450816, "y": 121.65556858361023 }, "nodeDescription": { "nodeTitle": "ForEachLoop", "pinExecInId": "442", "execIn": true, "execOut": { "execOut0": { "execOutTitle": "Loop Body", "pinExecOutId": "443", "outOrder": 0 }, "execOut1": { "execOutTitle": "Completed", "pinExecOutId": "445", "outOrder": 4 } }, "inputs": { "input0": { "inputTitle": "Array", "dataType": "Array", "isInputBoxRequired": false, "pinInId": "447" } }, "outputs": { "output0": { "outputTitle": "Value", "dataType": "Data", "pinOutId": "449", "outOrder": 1 }, "output1": { "outputTitle": "Index", "dataType": "Number", "pinOutId": "451", "outOrder": 2 }, "output2": { "outputTitle": "Array", "dataType": "Array", "pinOutId": "453", "outOrder": 3 } }, "color": "Logic", "rows": 2, "colums": 12 } }, { "position": { "x": 3755.240342745082, "y": 248.99431858361027 }, "nodeDescription": { "nodeTitle": "BinarySearch(Num)", "inputs": { "input0": { "inputTitle": "Value", "dataType": "Number", "defValue": 0, "pinInId": "424" }, "input1": { "inputTitle": "Array", "dataType": "Array", "isInputBoxRequired": false, "pinInId": "429" } }, "outputs": { "output0": { "outputTitle": "Exist", "dataType": "Boolean", "pinOutId": "431", "outOrder": 0 }, "output1": { "outputTitle": "Lower Bound", "dataType": "Number", "pinOutId": "433", "outOrder": 1 }, "output2": { "outputTitle": "Upper Bound", "dataType": "Number", "pinOutId": "435", "outOrder": 2 } }, "color": "Func", "rows": 2, "colums": 13 } }, { "position": { "x": 4023.809342745082, "y": 103.13356858361016 }, "nodeDescription": { "nodeTitle": "Continue", "execIn": true, "pinExecInId": "460", "color": "Logic", "rows": 2, "colums": 10 } }, { "position": { "x": 4030.755092745082, "y": 188.79781858361025 }, "nodeDescription": { "nodeTitle": "Break", "execIn": true, "pinExecInId": "466", "color": "Logic", "rows": 2, "colums": 10 } }, { "position": { "x": 4043.538201260707, "y": 288.14623690444165 }, "nodeDescription": { "nodeTitle": "Random", "outputs": { "output0": { "outputTitle": "Random[0,1)", "dataType": "Number", "pinOutId": "472", "outOrder": 0 } }, "color": "Math", "rows": 2, "colums": 10 } }, { "position": { "x": 4047.9482012607077, "y": 365.32127055007163 }, "nodeDescription": { "nodeTitle": "Swap", "execIn": true, "pinExecInId": "479", "execOut": { "execOut0": { "execOutTitle": null, "pinExecOutId": "480", "outOrder": 0 } }, "inputs": { "input0": { "inputTitle": "Ref1", "dataType": "Data", "isInputBoxRequired": false, "pinInId": "481" }, "input1": { "inputTitle": "Ref2", "dataType": "Data", "isInputBoxRequired": false, "pinInId": "483" } }, "outputs": { "output0": { "outputTitle": "Ref1", "dataType": "Data", "pinOutId": "485", "outOrder": 1 }, "output1": { "outputTitle": "Ref2", "dataType": "Data", "pinOutId": "487", "outOrder": 2 } }, "color": "Func", "rows": 2, "colums": 12 } }], "wireData": [{ "srcId": "10", "destId": "168" }, { "srcId": "63", "destId": "78" }, { "srcId": "69", "destId": "85" }, { "srcId": "169", "destId": "197" }, { "srcId": "161", "destId": "199" }, { "srcId": "161", "destId": "240" }, { "srcId": "231", "destId": "245" }, { "srcId": "198", "destId": "213" }, { "srcId": "250", "destId": "215" }, { "srcId": "220", "destId": "290" }, { "srcId": "214", "destId": "263" }, { "srcId": "264", "destId": "288" }, { "srcId": "279", "destId": "265" }, { "srcId": "83", "destId": "115" }, { "srcId": "81", "destId": "101" }, { "srcId": "79", "destId": "16" }, { "srcId": "32", "destId": "18" }, { "srcId": "307", "destId": "334" }, { "srcId": "325", "destId": "313" }, { "srcId": "309", "destId": "352" }, { "srcId": "318", "destId": "368" }, { "srcId": "375", "destId": "336" }] }
    let starterJSON = JSON.stringify(starterFile);
    new Import(stage, stage.findOne("#main_layer"), stage.findOne("#wireLayer"), starterJSON);
}

