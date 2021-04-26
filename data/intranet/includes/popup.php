				<!-- Confirm dialog -->
                <div id="popup-confirm">  
                    <h3><?php echo "$popupTitle"; ?></h3>
                    <div>
                        <p><?php echo "$popupMessage"; ?></p>
                        <p class="bold_text"><?php echo "$popupPrompt"; ?></p>
                        <div id="confirm-option">
                            <!-- Yes button-->
                            <a href="add_staff.php" title="Add staff" id="confirm-yes">Yes</a> 
                            <!-- No button-->
                            <a href="admin_login.php" title="Go back" id="confirm-no">No</a>     
                        </div>
                    </div>

					<!-- Image -->
					<div id="popup-image">
						<!-- Image taken from: https://cdn2.iconfinder.com/data/icons/color-svg-vector-icons-part-2/512/ok_check_yes_tick_accept_success-512.png -->
						<img class="popupImg" src="images/icons/<?php echo "$imageName"; ?>" alt="">
					</div>
				</div>
            