<!DOCTYPE html>
<html lang="en-US">
	
	<?php include 'includes/head.html'; ?>

	<body>
	  
		<!--Skiplink -->
		<a href="#main" title="Skip to main" class="skiplink skiplink-nav">Skip to main</a>

		<!--  * Page: Start *  -->
		<div data-role="page" id="page">
			<?php include 'includes/navigation.html'; ?>
			<!--Skiplink -->
			<a href="#bmi_tool" title="Skip to bmi tool" class="skiplink">Skip to BMI tool</a>
		
			<!-- Main Content: Start  -->
			<main data-role="main" role="main">
				<div id="index">
					<?php include 'includes/banner.html'; ?>
					
					<!-- Section: id[introduction]: Start -->
					<div class="main-content">

						<!-- Confirm -->
						<div class="w3-panel" id="submitConfirm">
							<p>Form submitted successfully.</p>
						</div>

						<div class="section w3-animate-bottom">
							<?php include 'includes/about.html'; ?>
						</div>
						
						<div class="w3-animate-zoom">
							<?php include 'includes/bmiModal.php'; ?>
						</div>

						<div class="section w3-animate-left">
							<?php include 'includes/diabetes.html'; ?>
						</div>
						
						<div class="section w3-animate-left">
							<?php include 'includes/doctors.html'; ?>
						</div>
					</div>
				</div>

			<!-- End section -->
		  </main>
		  <!-- End main -->

			<?php include 'includes/footer.html'; ?>
		</div>
		<!-- End page -->
	</body>
	<!-- End body -->
</html>
<!-- End html -->
