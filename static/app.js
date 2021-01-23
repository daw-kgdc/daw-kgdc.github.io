let sheetButton = document.getElementById('openDPRSheet');
let kmlToolButton = document.getElementById('kmlTool');

let spreadsheetURL = 'https://docs.google.com/spreadsheets/d/1TZFi3_2h0TOHIPgY_PjV7xUTPnHlJ00bvv-tN-Qy_bw/edit#gid=0';

const openDPRSheet = function () {
    window.open(spreadsheetURL);
}

const downloadKMLTool = function () {
    alert('Coming Soon');
}

sheetButton.onclick = openDPRSheet;
kmlToolButton.onclick = downloadKMLTool;