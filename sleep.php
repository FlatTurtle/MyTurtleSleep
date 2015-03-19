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

        <div class='container'>
            <h1>Your FlatTurtle is asleep.</h1>
          If you can see this page, it means the display didn't turn off correctly.<br />
          Please get in touch with the FlatTurtle helpdesk.<br /><br /><br />
          <footer>
            <ul>
              <li>Helpdesk: <span>+32 (0) 2 669 09 99</span></li>
              <li>E-mail: <span>help@FlatTurtle.com</span></li>
              <li>Web: <span>http://FlatTurtle.com</span></li>
            </ul>
          </footer>
            <img src='img/ft_logo.jpg' alt='logo FlatTurtle' />
        </div>

        <script src="js/jquery.js?<?php echo $rand; ?>"></script>
        <script src="js/later.js?<?php echo $rand; ?>"></script>
        <script src="js/script.js?<?php echo $rand; ?>"></script>

        <script>
            <?php 
                if(isset($_GET['noCron']) && $_GET['noCron']){
                    echo "loadConfig('" . $alias . ".json?" . $rand . "', true);\n"; 
                }else{
                    echo "loadConfig('" . $alias . ".json?" . $rand . "', false);\n"; 
                }
            ?>
            window.setTimeout(function(){
                if (typeof application == "object")
                    application.enableScreen(false);
            },3000); // after 3 seconds
        </script>

        <?php include_once("ga.php") ?>
    </body>
</html>
