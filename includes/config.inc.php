<?php

/**
 * Database connection credentials
 * Change these to suit the database you are working on
 */
$config['db_host'] = 'localhost';
$config['db_name'] = '';
$config['db_user'] = 'root';
$config['db_pass'] = '';

/**
 * Set the default timezone as we are using some date/time functions and the 
 * server time zone may not be what we want/expect
 * To see what time zone the server uses: echo date_default_timezone_get();
 */
date_default_timezone_set('Europe/London');

/**
* Set the default language
*/
$config['language'] = 'en';

/**
* Set the home directory 
*/
$config['directory'] = 'c://wamp64/www/server/';

/**
* Set the company name 
*/
$config['company_firstname'] = 'Cristian';
$config['company_lastname'] = 'Salas';
$config['company_fullname'] = 'Cristian Salas';

/**
* Set the company slolgan 
*/
$config['company_slogan'] = 'Portfolio of video and creative design';

/**
* Set the company telephone 1 
*/
$config['company_telephone'] = '0207 123 5555';

/**
* Set the company email 
*/
$config['company_email'] = 'someone@mail.com';

/**
* Set the company address 
*/
$config['company_address'] = 'London';


?>
