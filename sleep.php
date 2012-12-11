<?php $rand = rand(); ?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<title>InfoScreen in Sleep</title>

		<link rel="stylesheet" href="css/style.css?<?php echo $rand; ?>">
   		<link type="text/css" rel="stylesheet" href="//fast.fonts.com/cssapi/66253153-9c89-413c-814d-60d3ba0d6ac2.css"/>
	</head>
	<body>
		<!--[if lt IE 7]>
			<p class="chromeframe">You are using an outdated browser. <a href="http://browsehappy.com/">Upgrade your browser today</a> or <a href="http://www.google.com/chromeframe/?redirect=true">install Google Chrome Frame</a> to better experience this site.</p>
		<![endif]-->

		<div class='container'>
			<h1>Your screen is vast asleep!</h1>
			<img src='img/ft_logo.jpg'/>
		</div>

		<script src="js/jquery.js?<?php echo $rand; ?>"></script>
		<script src="js/later.js?<?php echo $rand; ?>"></script>

		<script src="js/script.js?<?php echo $rand; ?>"></script>

		<script>
			loadConfig('<?php echo $alias; ?>.json?<?php echo $rand; ?>');
		</script>

	</body>
</html>