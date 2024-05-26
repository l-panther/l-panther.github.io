<?php 

// Set which template(s) to use
$layout = 'templates/index/layout.php';
$hero = 'templates/index/hero.html';
$welcome = 'templates/index/welcome.html';
$services = 'templates/index/services.html';
$opening_times = 'templates/index/opening-times.html';
$sponsors = 'templates/index/sponsors.html';

// Load the contents of the template files
$tpl_layout = file_get_contents($layout);
$tpl_hero = file_get_contents($hero);
$tpl_welcome = file_get_contents($welcome);
$tpl_services = file_get_contents($services);
$tpl_opening_times = file_get_contents($opening_times);
$tpl_sponsors = file_get_contents($sponsors);


$output = "";
    /* Instants */
    $mainSponsors = array(
      "lambeth",
      "southwark",
      "playengland",
      "bbc",
      "lottery",
      "pwc",
      "usa",
      "deutsche",
      "santander",
      "sainsbury",
      "tesco",
      "waitrose",
);
    
    $mainSponsors2 = array(
      "qbe",
      "ricoh",
      "aviva",
      "headley",
      "max",
      "goldsmiths",
    );
    
    $extraSponsors = array(
      "nevada",
      "fortune",
    );
    $output = "";
    $events = "";
   
    // constructor parameters: $title, $date, $image, $alt, $description
    $basic = new Event(
      "Spring Half Term", 
      "spring", 
      "Poster for Lambeth's Spring of food and fun 2024", 
      "Hey, we will be open for the upcoming half term! Tuesday 2nd -Friday 12th April 10am-5pm. Free lunch daily for those registered for free school meals. All our activities are free. New users must..."
    );
    $extra = new Event(
      "NEW PROJECT: YOUTH AMBASSADORS",  
      "ambassador", 
      "Youth Ambassador poster", 
      "Looking for youth people interested in being a voice for the young people of Lambeth. Do you want to address the issues affecting you? Join our new project."
    );
    $relaxer = new Event(
      "Living wage employer", 
      "living-wage", 
      "We are a Living Wage employer inside a transparent blue circle with a yellow and orange circle below and a big green tick  to the right. ", 
      "We're proud to share the news that at the end of 2023, Slade Gardens Adventure Playground became an accredited Living Wage Employer, committed to paying a wage based on the cost of living to our team!"
    );
   

    foreach($mainSponsors as $x_value) {
      $output .= ' <div class="col-2 ion-hide-md-down ion-padding">   
      <img src="assets/images/sponsors/' . $x_value . '.png" alt="' . $x_value . ' logo"}/>
    </div>';
  }
  
    foreach($mainSponsors as $x_valu) {
      $output2 = '<ion-col size="12" size-md="6" size-lg="4" className="ion-padding">
      <ion-card className="event">
        <img src={getEventImg(event.image)} alt={event.alt}/>
        <ion-card-header className="ion-padding">
          <ion-card-title><h3>{event.name}</h3></ion-card-title>
          <ion-card-subtitle><h4>{event.date}</h4></ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>
          <p></p>
        </ion-card-content>
      </ion-card>
    </ion-col>';
  }

 
   $serviceList = array($basic, $extra, $relaxer); // Variables
   for ($i = 0; $i < count($serviceList); $i++) { // For length of variable, output service
    
   $events .= $serviceList[$i]->getCard();
   }
    

// Parse template
$service_list = parseTemplate($tpl_services, array( 
  '{{ serviceList }}' => $events,
));
$sponsor_list = parseTemplate($tpl_sponsors, array( 
  '{{ sponsors }}' => $output,
));

$main = parseTemplate($tpl_layout, array( 
    '{{ hero }}' => $tpl_hero,
    '{{ welcome }}' => section("welcome", $tpl_welcome),
    '{{ services }}' => section("events", $service_list),
    '{{ opening_times }}' => section("opening-times", $tpl_opening_times),
    '{{ sponsors }}' => section("sponsors", $sponsor_list),
));
                      
// Populate content
$content = $main;

// Render HTML
echo $content;
?>