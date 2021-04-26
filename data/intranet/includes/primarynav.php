			<!-- Header -->
			<header role="banner" id="header">
				
				<!-- Secondary navigation -->
				<nav role="navigation" id="secondarynav" class="w3-navbar"> 

					<!-- Container -->
					<div class="w3-row w3-white">

						<!-- Title and Logo -->
						<h1 class="w3-col s12 m12 l10">Department of <br><span id="subtitle">Computer Science and Information Systems</span></h1>
						
						<div id="secondarynav-link">
						<!-- Link 1 -->
							<a href="admin.php" class="w3-col l2 m2 w3-right w3-hide-small w3-hide-medium w3-hover-none">Administratror</a>
						</div>

					</div> <!-- End container -->
				</nav> <!-- End secondary navigation -->
			
				<!-- Primary navigation -->
				<nav role="navigation" id="primarynav" class="w3-navbar w3-padding-8"> 

					<!-- Container -->
					<div id="nav-container" class="w3-navbar w3-center">

						<!-- Link 1 -->
						<a href="#" class="w3-bar w3-btn w3-hide-small w3-hide-medium w3-mobile w3-hover-none">HOME</a>
						
						<!-- Link 2 -->
						<a href="#" class="w3-bar w3-btn w3-hide-small w3-hide-medium w3-mobile w3-disabled">RESEARCH</a>
						
						<!-- Link 3 -->
						<a href="#" class="w3-bar w3-btn w3-hide-small w3-hide-medium w3-mobile w3-disabled" >SEMINARS</a>
						
						<!-- Link 4 -->
						<a href="#" class="w3-bar w3-btn w3-hide-small w3-hide-medium w3-mobile w3-disabled">STUDENTS</a>
						
						<!-- Link 5 -->
						<a href="#" class="w3-bar w3-btn w3-hide-small w3-hide-medium w3-mobile w3-disabled">NEWS</a>
						
					</div> <!-- End container -->
					
					<!-- Small navigation icons -->
					<div class="w3-hide-large w3-container" id="small-nav">

						<!-- Menu icon -->
						<a href="javascript:void(0)" title="Menu" id="mini-nav" class="w3-navbar w3-left w3-hide-large w3-xlarge">&#9776;</a>
						
						<a href="admin.php" title="Admin" class="w3-right w3-hide-large w3-padding-top w3-xlarge"><i class="fa fa-user"></i></a>
						
						<!-- Mini navigation -->
				
					</div> <!-- End small navigation icons -->
					
					<div id="navbar" class="w3-navbar w3-block w3-hide w3-hide-large w3-left">
					
						<!-- Link 1 -->
						<a href="#" class="w3-bar-ietm w3-block">HOME</a>

						<!-- Link 2 -->
						<a href="#" class="w3-bar-ietm w3-block w3-disabled">RESEARCH</a>

						<!-- Link 3 -->
						<a href="#" class="w3-bar-ietm w3-block w3-disabled">STUDENTS</a>				

						<a href="#" class="w3-bar-item w3-block w3-disabled">NEWS</a>
					</div> <!-- End mini navigation -->
				</nav> <!-- End primary navigation -->
				
				<?php 
				include 'includes/intranetlink.php'; 
                ?>
			</header> <!-- End header -->
