 
                        <ul>
                            <li class="w3-center w3-black"><img src="images/main/profile.png" alt="Profile picture of admin" /></li>
							
							<li class="w3-black w3-center">Hello <?php echo $userName; ?></li>
                            <li><a href="#view-staff" onclick="w3.show('#view-staffList'), w3.hide('#admin-stat'), w3.hide('#add-staffList')">Staff</a><i class="fa fa-chevron-right"></i></li>
                            <li>Students<i class="fa fa-chevron-right"></i></li>
                            <li>Modules<i class="fa fa-chevron-right"></i></li>
                            <li>Library<i class="fa fa-chevron-right"></i></li>
                            <li>Forms<i class="fa fa-chevron-right"></i></li>
                            <li>Messgaes<span class="menu-icon menu-icon-admin-messages">16</span></li>
                            <li>Reports<span class="menu-icon menu-icon-reports icon_reports">37</span></li>
                            <li>Issues<span class="menu-icon menu-icon-issues">5</span></li>
							<li>
								<a href="logout.php" title="Logout" id="drop-logout">Logout <i class="fa fa-sign-out"></i></a>
								
							</li>
                        </ul>