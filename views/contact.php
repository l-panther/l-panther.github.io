<?php 

// Set which template(s) to use
$layout = 'templates/contact/layout.php';
$hero = 'templates/contact/hero.html';
$welcome = 'templates/contact/welcome.html';
$form = 'templates/contact/form.html';

// Load the contents of the template files
$tpl_layout = file_get_contents($layout);

$tpl_hero = file_get_contents($hero);
$tpl_welcome = file_get_contents($welcome);

$tpl_form = file_get_contents($form);

$main = parseTemplate($tpl_layout, array( 
    '{{ hero }}' => "",
    '{{ welcome }}' => section("hero", $tpl_welcome),
    '{{ form }}' => section("contact-form", $tpl_form),
));
                      
// Populate content
$content = $main;

// Render HTML
echo $content;
?>