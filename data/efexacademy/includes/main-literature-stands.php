					<!-- Main -->
                    <main role="main" class="w3-hide-large" id="main">
						
						<?php include 'includes/primarynav.html'; ?>
						
						<!-- Animate container -->
						<div class="w3-animate-left">
							<!-- Upper section -->
							<section class="upper-section">
								<p class="w3-center w3-padding-top w3-margin-bottom slogan">All your exhibition <span class="w3-hide-small">and display </span>requirements</p>
								
								<div class="banner">
									<img src="images/5.literature/banner-small.png" alt="Large print"></div>
							</section> <!-- End upper section -->

							<!-- Section -->
							<section class="w3-white w3-container w3-margin-top">
								<?php include 'views/content-literature-stands.html'; ?>
							</section> <!-- End section -->

							<!-- Stroke -->
							<img src="images/main/stroke.png" alt="" class="stroke">
							
							<!-- Lower section -->
							<div class="lower-section">
								<div class="w3-row-padding">
									<div class="w3-col l4 m6 s6">
										<img src="images/5.literature/image1.png" alt="Literature stand 1" id="stand1">
									</div>
									<div class="w3-col l4 m6 s6 w3-margin-bottom">
										<img src="images/5.literature/image2.png" alt="Literature stand 2" id="stand2">
									</div>

									<div class="w3-container">
										<div class="w3-col m12 s12" id="contact">
											<?php include 'views/content-contact.html' ?>
										</div>
									</div>
								</div> 
							</div> <!-- End lower section -->
						</div> <!-- End animate container -->
                    </main> <!-- End main -->

					<!-- Large desktop -->
                    <div class="w3-hide-small w3-hide-medium" id="main-large">
                        <div class="w3-row">
                            <div id="left-col">
                                <div class="w3-row-padding" id="index-image">
                                    <div class="w3-col s12" id="nav-box">
                                        <div id="nav-left">
                                        <?php include 'includes/primarynav-large.html'; ?>
                                        </div>
                                        <div class="w3-display-container" id="image-right">
                                            <img src="images/5.literature/banner-large.png" alt="Literature stand" class="image1">
                                        </div>
                                    </div>
                                   <div class="w3-col l6 m4 s4">
									<img src="images/5.literature/image1.png" alt="Literature stand 1">
								</div>
								<div class="w3-col l6 m4 s4 w3-margin-bottom">
									<img src="images/5.literature/image2.png" alt="Literature stand 2">
								</div>
								
                                </div>
                            </div>
                            <div class="right-col">
                                <?php 
                                    include 'views/content-literature-stands-large.php';
                                ?>
                            </div>
                        </div>
                    </div> <!-- End large desktop -->