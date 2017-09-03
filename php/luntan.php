<html>
	<head>
		<style type="text/css">
			div{
				left:0px;
				background:image(back.png);
				background-size: cover;
				width:100%;
				height: auto;
			}
		</style>
	</head>
	<body>
		<? php 
			$db=mysqli_connect('root','localhost','','taolun');
			if(!mysqli_connect_errno()){
				echo('数据库连接失败，请过会重试');
				exit(0);
			}
			$yu1='select max(id) from taolun';
			$count=mysql_query($db,$yu1)+1;
			$txt=$_POST['txt'];
			$yu3='insert into taolun(id,hua) values('.$count.','.$txt.')';
			for ($i=1;$i<=$count;$i=$i+1)
			{
				$yu2='select hua from taolun where id='.$i;
				$hua=mysql_query($db,$yu2);
				echo('<div>'.$i.'楼:</br>'.$hua.'</div>');
			}
		?>
		<form>
			<input type="text" name="txt" action="luntan.php" method="post" />
		</form>
	</body>
</html>
	