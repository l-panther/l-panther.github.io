<?php 

// Set which template(s) to use
$layout = 'templates/venue/layout.php';
$hero = 'templates/venue/hero.html';
$welcome = 'templates/venue/welcome.html';
$form = 'templates/venue/form.html';

// Load the contents of the template files
$tpl_layout = file_get_contents($layout);

$tpl_hero = file_get_contents($hero);
$tpl_welcome = file_get_contents($welcome);

$tpl_form = file_get_contents($form);

$main = parseTemplate($tpl_layout, array( 
    '{{ hero }}' => $tpl_hero,
    '{{ welcome }}' => section("hero", $tpl_welcome),
    '{{ form }}' => section("hire-form", $tpl_form),
));
                      
// Populate content
$content = $main;

// Render HTML
echo $content;
?>