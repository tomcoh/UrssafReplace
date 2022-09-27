function finalToShow(){
    var fileContent = document.getElementById("input").value;
    let sirets = ['ERREUR', 75357004300012, 78877877700011, 53513821800016, 75356054900010, 79471473300019, 75375957000017, 79512003900016, 31457202500307, 31519076900028, 31402496900029, 31463548300014, 47928171900019, 75285582500010, 78299314100038, 79507010100014, 79511834800015, 78861779300013, 75366412700010, 75391952100017, 75333448100011, 53514650000017, 75367340900011, 79448723100019, 53510475600015, 75366327700014, 75364415200013, 79484650100011];
let codes = ['ERREUR',427,727,837,257,267,537,247,971,973,972,976,974,217,200,437,237,117,917,747,417,737,317,937,527,227,547,827];

/*const fs = require("fs");
const buffer = fs.readFileSync("DemandeExemple.TXT");
const fileContent = buffer.toString();
console.log(fileContent);*/

let codePostal = fileContent.match(/(?<=^.{464}\n.{464}\n.{310})([0-9]{5})/)[0];
let dep = codePostal.match(/[0-9]{2}/)[0];
console.log(dep);
let siret ='';
let siretReplaced ='';
let code;
let codeReplaced;

function siretReplace(dep) {
    if (dep == 67 || dep == 68) {
        siret = sirets[1]
    }
    else if (dep == 24 || dep == 33 || dep == 40 || dep == 47 || dep == 64) {
        siret = sirets[2]
    }
    else if (dep == 03 || dep == 15 || dep == 43 || dep == 63) {
        siret = sirets[3]
    }
    else if (dep == 14 || dep ==50 || dep == 61) {
        siret = sirets[4]
    }
    else if (dep == 21 || dep == 58 || dep == 71 || dep == 89) {
        siret = sirets[5]
    }
    else if (dep == 22 || dep == 29 || dep == 35 || dep == 56) {
        siret = sirets[6]
    }
    else if (dep == 18 || dep ==28 || dep == 36 || dep == 37 || dep == 41 || dep == 45) {
        siret = sirets[7]
    }
    else if (dep == 971) {
        siret = sirets[8]
    }
    else if (dep == 973) {
        siret = sirets[9]
    }
    else if (dep == 972) {
        siret = sirets[10]
    }
    else if (dep == 976) {
        siret = sirets[11]
    }
    else if (dep == 974) {
        siret = sirets[12]
    }
    else if (dep == 08 || dep == 10 || dep == 51 || dep == 52) {
        siret = sirets[13]
    }
    else if (dep == 20) {
        siret = sirets[14]
    }
    else if (dep == 25 || dep ==39 || dep == 70 || dep == 90) {
        siret = sirets[15]
    }
    else if (dep == 27 || dep ==76) {
        siret = sirets[16]
    }
    else if (dep == 75 || dep ==77 || dep == 78 || dep == 91 || dep == 92 || dep == 93 || dep == 94 || dep == 95) {
        siret = sirets[17]
    }
    else if (dep == 11 || dep ==30 || dep == 34 || dep == 48 || dep == 66) {
        siret = sirets[18]
    }
    else if (dep == 19 || dep == 23 || dep == 87) {
        siret = sirets[19]
    }
    else if (dep == 54 || dep == 55 || dep == 57 || dep == 88) {
        siret = sirets[20]
    }
    else if (dep == 09 || dep == 12 || dep == 31 || dep == 32 || dep == 46 || dep == 65 || dep == 81 || dep == 82) {
        siret = sirets[21]
    }
    else if (dep == 59 || dep == 62) {
        siret = sirets[22]
    }
    else if (dep == 04 || dep == 05 || dep == 06 || dep == 13 || dep == 83 || dep == 84) {
        siret = sirets[23]
    }
    else if (dep == 44 || dep == 49 || dep == 53 || dep == 72 || dep == 85) {
        siret = sirets[24]
    }
    else if (dep == 02 || dep == 60 || dep == 80) {
        siret = sirets[25]
    }
    else if (dep == 16 || dep == 17 || dep == 79 || dep == 86) {
        siret = sirets[26]
    }
    else if (dep == 01 || dep == 07 || dep == 26 || dep == 38 || dep == 42 || dep == 69 || dep == 73 || dep == 74) {
        siret = sirets[27]
    }
    return siret;
}

function siretAdd(dep,toReplace){
    siret = siretReplace(dep);
    siretReplaced = toReplace.replace(/(?<=^.{464}\n.{464}\n.{81})(\s{14})/, siret);
    siretReplaced = siretReplaced.replace(/(?<=^.{464}\n.{464}\n.{464}\n.{81})(\s{14})/, siret);
    return siretReplaced;
}

function codeReplace(dep){
    if (dep == 67 || dep == 68) {
        code = codes[1]
    }
    else if (dep == 24 || dep == 33 || dep == 40 || dep == 47 || dep == 64) {
        code = codes[2]
    }
    else if (dep == 03 || dep == 15 || dep == 43 || dep == 63) {
        code = codes[3]
    }
    else if (dep == 14 || dep ==50 || dep == 61) {
        code = codes[4]
    }
    else if (dep == 21 || dep == 58 || dep == 71 || dep == 89) {
        code = codes[5]
    }
    else if (dep == 22 || dep == 29 || dep == 35 || dep == 56) {
        code = codes[6]
    }
    else if (dep == 18 || dep ==28 || dep == 36 || dep == 37 || dep == 41 || dep == 45) {
        code = codes[7]
    }
    else if (dep == 971) {
        code = codes[8]
    }
    else if (dep == 973) {
        code = codes[9]
    }
    else if (dep == 972) {
        code = codes[10]
    }
    else if (dep == 976) {
        code = codes[11]
    }
    else if (dep == 974) {
        code = codes[12]
    }
    else if (dep == 08 || dep == 10 || dep == 51 || dep == 52) {
        code = codes[13]
    }
    else if (dep == 20) {
        code = codes[14]
    }
    else if (dep == 25 || dep ==39 || dep == 70 || dep == 90) {
        code = codes[15]
    }
    else if (dep == 27 || dep ==76) {
        code = codes[16]
    }
    else if (dep == 75 || dep ==77 || dep == 78 || dep == 91 || dep == 92 || dep == 93 || dep == 94 || dep == 95) {
        code = codes[17]
    }
    else if (dep == 11 || dep ==30 || dep == 34 || dep == 48 || dep == 66) {
        code = codes[18]
    }
    else if (dep == 19 || dep == 23 || dep == 87) {
        code = codes[19]
    }
    else if (dep == 54 || dep == 55 || dep == 57 || dep == 88) {
        code = codes[20]
    }
    else if (dep == 09 || dep == 12 || dep == 31 || dep == 32 || dep == 46 || dep == 65 || dep == 81 || dep == 82) {
        code = codes[21]
    }
    else if (dep == 59 || dep == 62) {
        code = codes[22]
    }
    else if (dep == 04 || dep == 05 || dep == 06 || dep == 13 || dep == 83 || dep == 84) {
        code = codes[23]
    }
    else if (dep == 44 || dep == 49 || dep == 53 || dep == 72 || dep == 85) {
        code = codes[24]
    }
    else if (dep == 02 || dep == 60 || dep == 80) {
        code = codes[25]
    }
    else if (dep == 16 || dep == 17 || dep == 79 || dep == 86) {
        code = codes[26]
    }
    else if (dep == 01 || dep == 07 || dep == 26 || dep == 38 || dep == 42 || dep == 69 || dep == 73 || dep == 74) {
        code = codes[27]
    }
    return code;
}

function codeAdd(dep){
    code = codeReplace(dep);
    codeReplaced = fileContent.replace(/(?<=^.{464}\n.{464}\n.{95})([0-9]{3})/, code);
    codeReplaced = codeReplaced.replace(/(?<=^.{464}\n.{464}\n.{464}\n.{95})([0-9]{3})/, code);
    return codeReplaced;
}

function finalTxt(fileContent){
    codePostal = fileContent.match(/(?<=^.{464}\n.{464}\n.{310})([0-9]{5})/)[0];
    depfinal = codePostal.match(/[0-9]{2}/)[0];
    toReplace = codeAdd(depfinal);
    final = siretAdd(depfinal,toReplace);
    return final;
}

final = finalTxt(fileContent);
let dlName = codePostal;

//fs.writeFileSync('./done/ok.txt', final);

document.getElementById("output").innerHTML = final;
document.getElementById("downloadlink").href = 'data:text/plain;charset=utf-8,' + encodeURIComponent(final);
document.getElementById("downloadlink").download = `${dlName.toLowerCase()}.txt`;
}
function zeeee() {
    var x = document.getElementById("input").value;
    document.getElementById("output").innerHTML = final;
  }
