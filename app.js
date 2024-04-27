let wordsresult = 0;

function counter(){
    const words = document.getElementById("text").value; 
    const countbutton =  document.getElementById("countbutton");

    if (words !== " "){

        for(let i = 0; i < words.length; i++){
            console.log(words[i])
            if(words[i] == " "){
                wordsresult++;
            }
        }

        document.getElementById("words").innerText = wordsresult + 1;
        document.getElementById("char").innerText = words.length;
    }  
    wordsresult = 0;
    console.log(wordsresult);
}
