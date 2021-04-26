					<section class="w3-animate-right">
                        <h2>Statistics</h2>
					
						<div class="w3-row-padding w3-center statistics">

							<div class="w3-col s12 m4 l4 stat-container">		
								
								<div class="stat">
									
									<ul>
										<li><img src="images/main/staff.png" alt="Staff icon" title="Staff" class="stat-icon"><br><span class="w3-hide-small"></span></li>
										<li>
											<?php 
												$count = readStaffFile();
												echo $count[1];
											?>
										</li>
										
									</ul>
									<div class="w3-btn">
										<a href="#view-staff" onclick="w3.show('#view-staffList'), w3.hide('#admin-stat')" title="View staff">View more</a>
									</div>
								</div>

							</div>
							<div class="w3-col s12 m4 l4 w3-disabled stat-container">
								<div class="stat w3-disable">
									
									<ul>
										<li><img src="images/main/student.png" alt="Student icon" class="stat-icon"><br><span class="w3-hide-small"></span></li>
										<li>
											0
										</li>
										
									</ul>
									<div class="w3-btn">
										<a href="#">View more</a>
									</div>
								</div>

							</div>
							<div class="w3-col s12 m4 l4 w3-disabled stat-container">
								<div class="stat w3-disable">
									
									<ul>
										<li><img src="images/main/module.png" alt="Modules icon" class="stat-icon"><br> <span class="w3-hide-small"></span></li>
										<li>
											0
										</li>
										
									</ul>
									<div class="w3-btn w3-center">
										<a href="#">View more</a>
									</div>
								</div>
							</div>
						</div>

						
						<div id="performance-staff" >
							<h2>Student Performance</h2>

							<div id="bar-container" class="row">

								<div class="col-lg-12">
								<div class="w3-container">
									<img src="images/main/graph.jpg" alt="Graph of student performance">
								</div>
								</div>
							</div>
						</div>
				 </section> <!-- End quick access -->

          