                <section class="w3-animate-right">
					<!-- Back navigation -->
					<div id="backnav">
						<!-- Back button-->
						<a href="admin.php" title="Go back" class="w3-hide-small">Home</a>
						<a href="admin.php" title="Go back" class="w3-hide-medium w3-hide-large"><i class="w3-text-white fa fa-home"></i></a>   
					</div> <!-- End back navigation -->

					<h2><b>View Staff</b></h2>

					<a href="#view-staff" onclick="w3.show('#add-staffList'), w3.hide('#view-staffList')" class="w3-btn w3-block" id="addStaffBtn">Add Staff</a>
					<?php

						$staff = readStaffFile();
						echo $staff[0];
					?>

				</section> <!-- End quick access -->
