<?php

php_info()

$fh = fopen('filename.txt','r');
while ($line = fgets($fh)) {
	echo($line);
}
fclose($fh);
?>