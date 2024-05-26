<?php

class Event {

  protected $title;
  protected $image;
  protected $alt;
  protected $description;

  public function __construct($title, $image, $alt, $description) {
    $this->title = $title;
    $this->image = $image;
    $this->alt = $alt;
    $this->description = $description;
}

 
      public function getCard() {
      // Display ouput as a card on html page

        $output = '
        <div class="col-3">
        <div class="card event">
          <img src="assets/images/events/' . $this->image . '.jpg" alt="' . $this->alt. '"/>
         
          <div class="card-content p-2">
                <h3 class="pt-3">' . $this->title . '</h3>
            
            <p>' . $this->description . '</p>
          
            <div class="btn">Read more</div>
          </div>
          
        </div>
      </div>';

        return $output;
      }
    }
?>