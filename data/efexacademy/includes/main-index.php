					<!-- Main --> 
                    <main role="main" class="w3-hide-large" id="main">
						
						<?php include 'includes/primarynav.html'; ?>
						
						<!-- Animate container -->
				
                        <!-- Upper section -->
                        <section class="w3-row w3-animate-top upper-section">

                           <p class="w3-center w3-padding-top w3-margin-bottom slogan">All your exhibition <span class="w3-hide-small">and display </span>requirements</p>
							
							<div class="banner">
								<img src="images/1.index/banners/roller-banners.png" alt="Company stand" class="image1 indexSlide1">
								<img src="images/1.index/banners/banner-stands.png" alt="Company stand" class="image1 indexSlide1">
								<img src="images/1.index/banners/popup-stands.png" alt="Company stand" class="image1 indexSlide1">
								<img src="images/1.index/banners/literature-stands.png" alt="Company stand" class="image1 indexSlide1">
								<img src="images/1.index/banners/exhibition-stands.png" alt="Company stand" class="image1 indexSlide1">
								<img src="images/1.index/banners/lite-stands.png" alt="Company stand" class="image1 indexSlide1">
								<img src="images/1.index/banners/design.png" alt="Company stand" class="image1 indexSlide1">
								<img src="images/1.index/banners/print.png" alt="Company stand" class="image1 indexSlide1">
							</div>
							
                        </section> <!-- End upper sectiion -->

                        <!-- Section-->
                        <section class="w3-white w3-container w3-margin-top w3-animate-bottom">
                            <?php include 'views/content-index.html'; ?>
                        </section> <!-- End section -->

						<!-- Stroke -->
						<img src="images/main/stroke.png" alt="" class="stroke">
						
                        <!-- Lower section -->
                        <div class="lower-section">

                            <!-- Left -->
                            <div class="w3-row-padding w3-animate-bottom">
                                <div class="w3-col m6 s6">
                                    <img src="images/1.index/image1.jpg" alt="Neon green company stand">
                                </div>
                                <div class="w3-col m6 s6">
                                    <img src="images/1.index/image2.jpg" alt="Conference hall">
                                </div>

                                <!-- Right section -->
                                <div class="w3-row w3-col m12 s12 mt-4">

                                    <div class="w3-col m12 s12 w3-margin-top w3-margin-bottom" id="testimonial-container">
                                        <h2 class="w3-medium w3-padding w3-center w3-text-white">Testimonials</h2>
										
										<div class="w3-white">
                                            <!-- Marquee -->
                                            <?php include 'views/testimonials.html'; ?>
										</div>
                                    </div>

                                    <!-- Contact -->
                                    <div class="w3-col m12 s12 w3-center" id="contact">
                                        <?php include 'views/content-contact.html'; ?>
                                    </div> <!-- End contact-->
                                </div>

                            </div>	
                        </div> <!-- End lower section -->
                    </main> <!-- End main-->

					<!-- Large desktop -->
                    <div class="w3-row w3-hide-small w3-hide-medium" id="main-large">
						
						<div id="left-col">
							<div class="w3-row-padding w3-animate-left" id="index-image">
								<div class="w3-col s12" id="nav-box">
									<div id="nav-left">
									<?php include 'includes/primarynav-large.html'; ?>
									</div>
									<div class="w3-display-container" id="image-right">
										<img src="images/1.index/banners-large/roller-banners.png" alt="Company stand" class="image1 indexSlide2">
										<img src="images/1.index/banners-large/banner-stands.png" alt="Company stand" class="image1 indexSlide2">
										<img src="images/1.index/banners-large/popup-stands.png" alt="Company stand" class="image1 indexSlide2">
										<img src="images/1.index/banners-large/literature-stands.png" alt="Company stand" class="image1 indexSlide2">
										<img src="images/1.index/banners-large/exhibition-stands.png" alt="Company stand" class="image1 indexSlide2">
										<img src="images/1.index/banners-large/lite-stands.png" alt="Company stand" class="image1 indexSlide2">
										<img src="images/1.index/banners-large/design.png" alt="Company stand" class="image1 indexSlide2">
										<img src="images/1.index/banners-large/print.png" alt="Company stand" class="image1 indexSlide2">
									</div>
								</div>
								
								<div class="w3-col m6 s6 w3">
									<img src="images/1.index/image1.jpg" alt="Neon green company stand">
								</div>
								<div class="w3-col m6 s6">
									<img src="images/1.index/image2.jpg" alt="Conference hall">
								</div>
								
							</div>
						</div>
						<div class="right-col w3-animate-right">
							<?php 
								include 'views/content-index-large.php';
							?>
						</div>
                    </div> <!-- End large desktop-->

					<?php 
						include 'includes/main-register-form.php'; # Registration form
					?>
