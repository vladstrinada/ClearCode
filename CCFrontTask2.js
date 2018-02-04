

exports.generateRunicWords = length => {
    //validation
if(length < 1) {
		return("Input must be > 0");
	} else if (!length){
		return("Input cannot be empty");
	} else if (isNaN(length)){
		return("Input must be a number");
        
    const p = [{ name: 'El', power: 28, cantBeLinkedWith: 'Ort' }, 
    { name: 'Eld', power: 33, cantBeLinkedWith: 'Sur' }, 
    { name: 'Tir', power: 9, cantBeLinkedWith: 'Eth' }, 
    { name: 'Nef', power: 7, cantBeLinkedWith: 'Ist' }, 
    { name: 'Eth', power: 31, cantBeLinkedWith: 'Tir' }, 
    { name: 'Ith', power: 22, cantBeLinkedWith: 'Pul' }, 
    { name: 'Tal', power: 8, cantBeLinkedWith: 'Io' }, 
    { name: 'Ral', power: 25, cantBeLinkedWith: 'Um' }, 
    { name: 'Ort', power: 18, cantBeLinkedWith: 'El' }, 
    { name: 'Thul', power: 13, cantBeLinkedWith: 'Sol' }, 
    { name: 'Amn', power: 6, cantBeLinkedWith: 'Fal' }, 
    { name: 'Sol', power: 10, cantBeLinkedWith: 'Thul' }, 
    { name: 'Shael', power: 17, cantBeLinkedWith: 'Lem' }, 
    { name: 'Dol', power: 11, cantBeLinkedWith: 'Hel' }, 
    { name: 'Hel', power: 12, cantBeLinkedWith: 'Dol' }, 
    { name: 'Io', power: 20, cantBeLinkedWith: 'Tal' }, 
    { name: 'Lum', power: 32, cantBeLinkedWith: 'Gul' }, 
    { name: 'Ko', power: 27, cantBeLinkedWith: 'Mal' }, 
    { name: 'Fal', power: 14, cantBeLinkedWith: 'Amn' }, 
    { name: 'Lem', power: 26, cantBeLinkedWith: 'Shall' }, 
    { name: 'Pul', power: 15, cantBeLinkedWith: 'Ith' }, 
    { name: 'Um', power: 16, cantBeLinkedWith: 'Ral' }, 
    { name: 'Mal', power: 21, cantBeLinkedWith: 'Ko' }, 
    { name: 'Ist', power: 4, cantBeLinkedWith: 'Nef' }, 
    { name: 'Gul', power: 23, cantBeLinkedWith: 'Lum' }, 
    { name: 'Vex', power: 24, cantBeLinkedWith: 'Ohm' }, 
    { name: 'Ohm', power: 1, cantBeLinkedWith: 'Vex' }, 
    { name: 'Lo', power: 2, cantBeLinkedWith: 'Cham' }, 
    { name: 'Sur', power: 30, cantBeLinkedWith: 'Eld' }, 
    { name: 'Ber', power: 3, cantBeLinkedWith: '' }, 
    { name: 'Jah', power: 3, cantBeLinkedWith: 'Zod' }, 
    { name: 'Cham', power: 29, cantBeLinkedWith: 'Lo' }, 
    { name: 'Zod', power: 19, cantBeLinkedWith: 'Jah' }
    ];
//sorting by power
    p.sort(function (a, b) {
        return b.power - a.power
    })

    var runicWords = [];
    var runsLength=0;
    if(length>10){
        runsLength=10;
    }
    else{
        runsLength=length;
    }

    for(var i=2; i<runsLength+2; i++){
        var word="Eld";
        var power=0;
        var checkNames = [];
        power=33-1;
        checkNames.push("Eld");
        var count=1;
        for(var j=1; j<p.length && count<i; j++){
            var cantBeLinkedWith=false;
            for(var k=0; k<checkNames.length; k++){
                //checking if names doesnt match
                if(p[j].cantBeLinkedWith == checkNames[k]){
                    
                    cantBeLinkedWith=true;
                }
            }
//push to array
            if(!cantBeLinkedWith){
                word=word+"-"+p[j].name;
                power+=p[j].power-1;
                checkNames.push(p[j].name);
                count++;
            }
        } 

        var preparedObject = {word,power}
        if(JSON.stringify(runicWords[runicWords.length-1])!==JSON.stringify(preparedObject)){
            runicWords.push(preparedObject);
        }
    }
    
    return runicWords;
}


exports.checkRunicWord = runicWord => {
    //run the function if runic word doesnt empty
    
    if (runicWord != "") {
        var size = runicWord.split("-").length;
        var runicWords = exports.generateRunicWords(size - 1);
        var lastRunicWord = runicWords[runicWords.length - 1];
        var runicWordObject;
        if (runicWord == lastRunicWord.word) {
            runicWordObject = lastRunicWord.power;
        } else {
            runicWordObject = "Error format";
        }
    }
    else{
        runicWordObject = "Input cannot be empty";
    }
    
    
    return runicWordObject;
} 
