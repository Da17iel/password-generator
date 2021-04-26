// Array so generate random passwords
var symbols = ["!",",",".","-","$","£","{","}","[","]","(",")","é","è","^","`","~","?","=","/","|","&","%","*","@","+","=","#",];
var numbers = ["1","2","3","4","5","6","7","8","9","0"];
var charactersSmall = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var charactersBig = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var PassArray = [];
var Password = "";

var symbolsChecked = true;
var numbersChecked = true;
var UpperCaseChecked = true;
var LowerCaseChecked = true;

var passwordLength = 10;

function ifchecked(id) {
    if (document.getElementById(id).checked) {
        switch (id) {
            case "symbols":
                console.log("symbols is true")
                symbolsChecked = true;
                return symbolsChecked;
                break;
            case "Numbers":
                console.log("Numbers is true")
                numbersChecked = true;
                return numbersChecked;
                break;
            case "Lowercase-Characters":
                console.log("Lower is true")
                LowerCaseChecked = true;
                return UpperCaseChecked;
                break;
            case "Uppercase-Characters":
                console.log("Upper is true")
                UpperCaseChecked = true;
                return LowerCaseChecked;
            break;
        }
    } else {
        switch (id) {
            case "symbols":
                symbolsChecked = false;
                return symbolsChecked;
                break;
            case "Numbers":
                numbersChecked = false;
                return numbersChecked;
                break;
            case "Lowercase-Characters":
                LowerCaseChecked = false;
                return UpperCaseChecked;
                break;
            case "Uppercase-Characters":
                UpperCaseChecked = false;
                return LowerCaseChecked;
            break;
        }
    }
}


function generate() {
    PassArray = [];
    passwordLength = Math.floor((Math.random() * 14) + 12);
    if (symbolsChecked == true) {
        PassArray = PassArray.concat(symbols);
    }
    if (numbersChecked == true) {
        PassArray = PassArray.concat(numbers);
    }
    if (UpperCaseChecked == true) {
        PassArray = PassArray.concat(charactersBig);
    }
    if (LowerCaseChecked == true) {
        PassArray = PassArray.concat(charactersSmall);
    }
    if (PassArray != []) {


        
        PasswordCreation()


        //PassArray = PassArray.toString();
        console.log(Password);
        document.getElementById("password-text").value = Password;
        Password = "";
    } else {
        document.getElementById("password-text").value = "Please check atleast one box";
    }
}

function PasswordCreation() {
    for (let i = 0; i < passwordLength; i++) {
        shuffleArray(PassArray);
        Password = Password + PassArray[1];
    }
    return Password;
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        
        // Generate random number
        var j = Math.floor(Math.random() * (i + 1));
                        
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
            
    return array;
}
    

function copy() {
    //select the element with the id "copyMe", must be a text box
    var textToCopy = document.getElementById("password-text");
    //select the text in the text box
    textToCopy.select();
    //copy the text to the clipboard
    document.execCommand("copy");
}