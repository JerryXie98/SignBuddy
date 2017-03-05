var signWords = document.getElementById('sign-words');

function mainFunc (index) {
	console.log('hi');
	if(index == 200) {return;}
	setTimeout(function(){
		//readText('wordLog.txt');
		readPHP();
		mainFunc(index++);
	},1000);
}
/*
function readText(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                alert(allText);
            }
        }
    }
    rawFile.send(null);
}
*/
function readPHP() {
	var word = '<?php echo $line; ?>';
	
}

mainFunc(0);