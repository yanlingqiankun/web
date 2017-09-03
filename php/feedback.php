<?php
	$a='意见是：' . $_POST["yijian"];
	$b='联系方式是：' . $_POST["lianxi"];
	$c="
";
	$name = time();
	$fname = 'a' . $name;
	$fp = fopen("./feedback/$fname.txt",'w+');
	fputs($fp,$a);
	fprintf($fp,$c);
	fputs($fp,$b);
	echo('恭喜提交成功，请返回<a href="../index.html">首页</a>');
	?>