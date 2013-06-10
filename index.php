<?php
/*
 * --------------------------------------------------------------------
 * HERE WE GO!
 * --------------------------------------------------------------------
 */


define('ENVIRONMENT', 'production');

if (defined('ENVIRONMENT'))
{
    switch (ENVIRONMENT)
    {
        case 'development':
            $alias = 'https://s.flatturtle.com/hub';
        break;

        case 'testing':
        case 'production':
            $alias = '/'.$_GET['alias'];
        break;

        default:
            exit('The application environment is not set correctly.');
    }
}

require_once 'sleep.php';