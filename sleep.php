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
			<h1>Your screen is fast asleep!</h1>

          If you can see this page, it means the display didn't turn off correctly.<br />
          Please get in touch with the FlatTurtle helpdesk.<br /><br /><br />
          <footer>
          	<ul>
              <li>Helpdesk: <span style="color:#0075bf;">+32 (0) 2 669 09 99</span></li>
              <li>E-mail: <span style="color:#0075bf;">help@flatturtle.com</span></li>
              <li>Web: <span style="color:#0075bf;">http://flatturtle.com</span></li>
            </ul>
          </footer>

			<img src='img/ft_logo.jpg' alt='logo FlatTurtle' />
		</div>

		<script src="js/jquery.js?<?php echo $rand; ?>"></script>
		<script src="js/later.js?<?php echo $rand; ?>"></script>

		<script src="js/script.js?<?php echo $rand; ?>"></script>

		<script>
			loadConfig('<?php echo $alias; ?>.json?<?php echo $rand; ?>');
		</script>

	</body>
</html>
