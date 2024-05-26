<?php 

// Set which template(s) to use
$layout = 'templates/involved/layout.php';
$hero = 'templates/involved/hero.html';
$community = 'templates/involved/community.html';
$friend = 'templates/involved/friend.html';
$join = 'templates/involved/join.html';
$volunteers = 'templates/involved/volunteers.html';
$upcoming = 'templates/involved/upcoming.html';
$partners = 'templates/involved/partners.html';
$involved = 'templates/involved/involved.html';

// Load the contents of the template files
$tpl_layout = file_get_contents($layout);
$tpl_hero = file_get_contents($hero);
$tpl_community = file_get_contents($community);
$tpl_friend = file_get_contents($friend);
$tpl_join = file_get_contents($join);
$tpl_volunteers = file_get_contents($volunteers);
$tpl_upcoming = file_get_contents($upcoming);
$tpl_partners = file_get_contents($partners);
$tpl_involved = file_get_contents($involved);
$output = "";
   
$main = parseTemplate($tpl_layout, array( 
    '{{ hero }}' => $tpl_hero,
    '{{ community }}' => section("community", $tpl_community),
    '{{ friend }}' => section("friend", $tpl_friend),
    '{{ join }}' => section("join", $tpl_join),
    '{{ volunteers }}' => section("sponsors", $tpl_volunteers),
    '{{ upcoming }}' => section("upcoming", $tpl_upcoming),
    '{{ partners }}' => section("partners", $tpl_partners),
    '{{ involved }}' => section("involved", $tpl_involved),
));
                      
// Populate content
$content = $main;

// Render HTML
echo $content;
?>