<?php

function classAutoloader() {
  include 'classes/parees.php';
}

spl_autoload_register('classAutoloader');

/**
 * Function to parse a template and populate it with values 
 * as a UK price
 * @tpl string the template
 * @placeholders array associative array of placeholders and values
 */

function parseTemplate($tpl, $placeholders) {
    $pass = $tpl;
    $content = '';
    foreach ($placeholders as $key => $val) {
        $pass = str_replace($key, $val, $pass);
    }
    // Remove any missed/misspelled tags
    $pass = preg_replace('/{{.*}}/','', $pass, 1);
    $content .= $pass;
    return $content;
}

function section($elemId, $tpl) {
 
    // Remove any missed/misspelled tags
    $content = '<section id="' . $elemId . '" class="section">
    <div class="main-content">' . $tpl. '
    </div>
    </section>';
    return $content;
}

function article($elemId, $array, $title) {
 
    // Remove any missed/misspelled tags
 
    $output = '<article id="' . $elemId .'"><h2>' . $title . '</h2><ul>';
    foreach($array as $trustee) {   
      $output .= '<li>' . $trustee . '</li>';
    }
  $output .= '</ul></article>';

    return $output;
}
?>
