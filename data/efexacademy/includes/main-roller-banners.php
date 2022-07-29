					<!-- Main -->
					<main role="main" class="w3-hide-large" id="main">
						
						<?php include 'includes/primarynav.html'; ?>
						
						<!-- Animate container -->
						<div class="w3-animate-left">
							<!-- Upper section -->
							<section class="upper-section">
								<p class="w3-center w3-padding-top w3-margin-bottom slogan">All your exhibition <span class="w3-hide-small">and display </span>requirements</p>

								<div class="banner">
									<img src="images/2.roller-banners/banner-small.png" alt="Large print">
								</div>
							</section> <!-- End upper section -->

							<!-- Section -->
							<section class="w3-row w3-white w3-container w3-margin-top main-container">
								<?php include 'views/content-roller-banners.html'; ?>
							</section> <!-- End section -->

							<!-- Stroke -->
							<img src="images/main/stroke.png" alt="" class="stroke">
							
							<!-- Lower section -->
							<div class="lower-section">
								<div class="w3-container">
									<div class="w3-margin-bottom">
										<img src="images/2.roller-banners/image2.jpg" alt="Roller banner base">
									</div>

									<div class="w3-col m12 s12" id="contact">
										<?php include 'views/content-contact.html'; ?>
									</div>

								</div>
							</div> <!-- End lower section -->
						</div> <!-- End animate container -->
                    </main> <!-- End main -->

					<!-- Large desktop -->
                    <div class="w3-hide-small w3-hide-medium" id="main-large">
                        <div class="w3-row">
                            <div class="w3-container" id="left-col">
                                <div class="w3-row" id="index-image">
                                    <div class="w3-col s12" id="nav-box">
                                        <div id="nav-left">
                                        <?php include 'includes/primarynav-large.html'; ?>
                                        </div>
                                        <div class="w3-display-container" id="image-right">
                                            <img src="images/2.roller-banners/banner-large.png" alt="Company roller banner" class="nav-image">
                                        </div>
                                    </div>
                                    <div class="w3-col m12 s12">
                                        <img src="images/2.roller-banners/image2.jpg" alt="Roller banner base">
                                    </div>
                                </div>
                            </div>
                            <div class="right-col">
                                <?php 
                                    include 'views/content-roller-banners-large.php';
                                ?>
                            </div>
                        </div>
                    </div> <!-- End large desktop -->