<?php 

// Set which template(s) to use
$layout = 'templates/community/layout.php';
$hero = 'templates/community/hero.html';
$welcome = 'templates/community/welcome.html';
$services = 'templates/community/services.html';
$letter = 'templates/community/letter.html';


// Load the contents of the template files
$tpl_layout = file_get_contents($layout);
$tpl_hero = file_get_contents($hero);
$tpl_welcome = file_get_contents($welcome);
$tpl_services = file_get_contents($services);
$tpl_letter = file_get_contents($letter);
    
$main = parseTemplate($tpl_layout, array( 
    '{{ hero }}' => $tpl_hero,
    '{{ welcome }}' => section("welcome", $tpl_welcome),
    '{{ latest }}' => section("latest-news", $tpl_services),
    '{{ letter }}' => section("letter", $tpl_letter),
));
                      
// Populate content
$content = $main;

// Render HTML
echo $content;
?>