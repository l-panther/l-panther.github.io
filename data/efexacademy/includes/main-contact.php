					<!-- Main -->
					<main role="main" class="w3-hide-large" id="main">
						<?php include 'includes/primarynav.html'; ?>

						<!-- Animate container -->
						<div class="w3-animate-left">
							<!-- Upper section -->
							<section class="upper-section">
								<p class="w3-center w3-padding-top w3-margin-bottom slogan">All your exhibition <span class="w3-hide-small">and display </span>requirements</p>

								<div class="banner">
									<img src="images/11.contact/banner-small.png" alt="Large print">
							</div>
							</section> <!-- End upper section -->

							<!-- Section -->
							<section>
								<h2 class="w3-center w3-margin-top">Contact Us </h2>
								<p class="w3-padding-top w3-center">Feel free to email or give us a call if you have any enquiries.</p>
							</section>
								
							
							<!-- Section -->
							<section class="w3-margin-top">
								<h2 class="w3-center">Call Us</h2>
								<div class="w3-container">
									<div class="w3-center" id="contact">
										<ul class="w3-text-white">
											<li class="w3-padding-top w3-text-white">
                                                <a href="tel:+02086527754" class="w3-text-white">
                                                    <div class="w3-badge" id="phone1"><i class="fa fa-phone"></i></div>
                                                    <span aria-labelledby="phone1">020 8652 7754</span>
                                                </a>
                                            </li>
                                            <li class="w3-padding-top w3-text-white">
                                                <a href="tel:+02087732207" class="w3-text-white">
                                                    <div class="w3-badge" id="phone2"><i class="fa fa-phone"></i></div>
                                                    <span aria-labelledby="phone2">020 8773 2207</span>
                                                </a>
                                            </li>
                                            <li class="w3-padding-bottom">
                                                <a href="mailto:info@efexacademy.com" class="w3-text-white" id="info">
                                                    <div class="w3-badge" id="envelope"><i class="fa fa-envelope"></i></div>
                                                    <span aria-labelledby="envelope">info@efexacademy.com</span>
                                                </a>
                                            </li>
                                        </ul>
									</div>
								</div>
							</section>

							<!-- Stroke -->
							<img src="images/main/stroke.png" alt="" class="stroke">
							
							<div class="w3-row-padding lower-section ">
								<div class="w3-col s12 m6">
									<?php include 'includes/contact-form.php'; ?> 
								</div>

								<section class="w3-col s12 m6 w3-hide-large">


									<h2 class="w3-center w3-margin-bottom">Locate Us</h2>
									<!-- Map container -->
									<div id="map-container">
										<!-- Map -->
										<div class="w3-margin-bottom w3-margin-top" id="map-canvas"></div>
										<p id="nogeolocation"></p>
									</div>
								</section> <!-- End lower section -->	
							</div>
						</div> <!-- End nimate container -->
                    </main> <!-- End main -->

					<!-- Large desktop -->
                    <div class="w3-row w3-hide-small w3-hide-medium" id="main-large">
						
						<div class="w3-container" id="left-col">
							<div class="w3-row" id="index-image">
								<div class="w3-col s12" id="nav-box-contact">
									<div id="nav-left">
									<?php include 'includes/primarynav-large.html'; ?>
									</div>
									<div class="w3-display-container" id="image-right">
										<img src="images/11.contact/banner-large.png" alt="Phone">
									</div>
								</div>
								<div class="w3-col m12 s12">
									
									<!-- Map container -->
									<div id="map-container2">
										<div class="w3-margin-top" id="map-canvas2"></div>
										<p id="nogeolocation2"></p>

									</div>

								</div>
							</div>
						</div>
						<div class="right-col">
							<?php 
								include 'views/content-contact-large.php';
							?>
						</div>
					</div> <!-- End large main -->
