<?php
				include 'includes/admin-banner.php'; # Banner.
				include 'includes/admin-nav-mini.php';
?>

				<!-- Account main -->
                <div class="w3-row account-main">
                    
					<!-- Menu -->
					<div class="w3-col s12 m3 l3 w3-left w3-hide-small w3-hide-medium side_menu side_menu_admin">
						<?php 
							include 'includes/admin-nav.php';
						?>
					</div>
					
					<div class="w3-container w3-col s12 m12 l7 w3-animate-right quick_access">
						<div id="admin-stat">

							<?php
								include 'includes/admin-stat.php'; # Banner.
							?>

						</div>

						<div id="view-staffList">
							<?php
								include 'includes/view-staff.php'; # Banner.
							?>
=
						</div>
						
						<div id="add-staffList">
							<?php
								include 'includes/add-staff.php'; # Banner.
							?>

						</div>

					</div>
				</div> <!-- End account main -->
