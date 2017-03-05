var wordSign = document.getElementById('sign-words');

function mainFunc (index) {
	if(index == 200) {return;}
	setTimeout(function(){
		readText('wordLog.txt');
		mainFunc(index++);
	},700);
}

function readText(file)
{
	//this would be so much easier if i knew jquery smh
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var readWord = rawFile.responseText;
                wordSign.innerHTML = readWord;
				console.log('Writing this word: ' + readWord);
            }
        }
    }
    rawFile.send(null);
}
