<?php 

// Set which template(s) to use
$layout = 'templates/about/layout.php';
$hero = 'templates/about/hero.html';
$welcome = 'templates/about/welcome.html';
$usage = 'templates/about/usage.html';
$todo = 'templates/about/todo.html';
$register = 'templates/about/register.html';
$trustees = 'templates/about/trustees.html';
$safeguarding = 'templates/about/safeguarding.html';
$sponsors = 'templates/index/sponsors.html';
$history = 'templates/about/history.html';

// Load the contents of the template files
$tpl_layout = file_get_contents($layout);
$tpl_hero = file_get_contents($hero);
$tpl_welcome = file_get_contents($welcome);
$tpl_usage = file_get_contents($usage);
$tpl_todo = file_get_contents($todo);
$tpl_register = file_get_contents($register);
$tpl_trustees = file_get_contents($trustees);
$tpl_safeguarding = file_get_contents($safeguarding);
$tpl_sponsors = file_get_contents($sponsors);
$tpl_history = file_get_contents($history);
$output = "";
    
/* Instants */
$trustee_list = array(
  "Katharina Bielenberg, Chair",
  "Renata Funari, Secretary",
  "Tom Stabler, Treasurer",
  "Jamie Bulloch",
  "Michaela Carmichael",
  "Jonty Edwards",
  "Rebecca Jarvis",
  "Gilly Johnson-Hill",
  "Janis Marsh",
  "Olga Muniz",
);
/* Instants */
$grants_list = array(
  "Awards for All",
  "Children in Need",
  "Fressport Fund",
  "Garfield Weston",
  "Gregg’s",
  "Haberdashers",
  "Hedley Trust",
  "Hibbert Trust",
  "Hindon Trust",
  "Lambeth Council",
  "LCHN",
  "Lord Mayor’s Green City Fund",
  "Longfield Sgapveilia",
  "OBE Foundation",
  "Pinebridge Global Funds",
  "Play England",
  "Power to Change Trust",
  "Sainsbury’s",
  "St Matthew’s Church, Brixton",
  "Social Investment Bank",
  "Southwark Council",
  "Stockwell Park Residents Association (SPRA)",
  "Stockwell Revolving Dinner",
  "Tesco",
  "The Peter Minet Trust",
  "Waitrose",
  "Walcot Foundation",
  "Woodward Trust",
  "Woodward Education",
  "Young Lambeth CO-OP",
);
/* Instants */
$volunters_partners_list = array(
  "Architectural Association",
  "Aviva",
  "Bank of America",
  "Bee Urban",
  "Karen Sorab, Beyond Autism",
  "BUPA",
  "Churchman Landscape Architects",
  "Danone",
  "Dasl",
  "Daylesford Organic",
  "Deutsche Bank",
  "Equals Consulting",
  "Friends of Slade Gardens",
  "Fluro Finance Platform",
  "Goldsmiths College",
  "Jam Jar Flowers",
  "London Play Design",
  "Maremma Restaurant",
  "Max Architects",
  "Pinebridge",
  "Price Waterhouse Cooper",
  "QBE",
  "Ricoh",
  "Santander",
  "Urban Growth",
  "Whitby Ward",
  "XCO2",
"and those that have left us a legacy in their will or donated gifts in kind"
);
//
$trustee_list_output = article("trustees", $trustee_list, "Trustees");
$grants_list_output = article("grants", $grants_list, "Grants");
$volunters_partners_list_output = article("volunters-partners", $volunters_partners_list, "volunters &amp; partners");

//
$trusteeList = parseTemplate($tpl_trustees, array( 
  '{{ trustees }}' => $trustee_list_output,
));
                    
//
$main = parseTemplate($tpl_layout, array( 
  '{{ hero }}' => $tpl_hero,
  '{{ welcome }}' =>section("welcome", $tpl_welcome),
  '{{ usage }}' => section("usage", $tpl_usage),
  '{{ todo }}' => section("todo", $tpl_todo),
  '{{ register }}' => section("register", $tpl_register),
  '{{ trustees }}' => section("trustees", $trusteeList),
  '{{ safeguarding }}' => section("safeguarding", $tpl_safeguarding),
  '{{ sponsors }}' => section("sponsors", $tpl_sponsors),
  '{{ grants }}' => section("grants", $grants_list_output),
  '{{ volunteers }}' => section("sponsors", $volunters_partners_list_output),
  '{{ history }}' => section("history", $tpl_history),
));
                    
// Populate content
$content = $main;

// Render HTML
echo $content;
?>