

<!-- The Modal -->
<div class="modal fade w3-round-xlarge" data-backdrop="static" data-keyboard="false" id="bmiModal">
  <div class="modal-dialog">
    <div class="modal-content">

      <!-- Modal Header -->
      <div class="modal-header">
		  
        
		  <h2>BMI Test</h2>
		  <div class="w3-text-white">
			  <button type="button" onclick="w3.hide('#risks'), w3.hide('.question'), w3.hide('#contact-form')" class="close" data-dismiss="modal" title="Close BMI test"><i class="fa fa-remove"></i></button>
		  </div>
      </div>

      <!-- Modal body -->
      <div class="modal-body">
		  
		<!--  * BMI Tool: id[bmi_tool]: Start *  -->
		<form method="post" action="#" class="w3-form bmi-tool">

		  <!-- Feildset : Start -->
		  <fieldset id="bmi-container" class="w3-white w3-text-black">
			<!-- Row -->
			<div class="form-container">
			  
			  <!-- Question 1 -->
			  <div class="w3-animate-opacity question" id="question1">
				<h2 class="sr-only">Question 1</h2>
				<h3>How old are you?</h3>

				<div class="w3-col l12">
				  <input
					type="radio"
					id="age_ans1"
					name="age"
					value="0"
					checked
				  />
				  <label for="age_ans1">1 - 25</label>
				</div>

				<div class="w3-col l12">
				  <input
					type="radio"
					id="age_ans2"
					name="age"
					value="5"
				  />
				  <label for="age_ans2">26 - 40</label>
				</div>

				<div class="w3-col l12">
				  <input
					type="radio"
					id="age_ans3"
					name="age"
					value="8"
				  />
				  <label for="age_ans3">41 - 60</label>
				</div>

				<div class="w3-col l12">
				  <input
					type="radio"
					id="age_ans4"
					name="age"
					value="10"
				  />
				  <label for="age_ans4">60+</label>
				</div>

				<a
				  href="#question2"
				  onclick="w3.hide('#question1'), w3.show('#question2')"
				  class="w3-col l12 w3-right nextBtn"
				>
				  Next
				</a>
			  </div>
			  <!-- End question 1 -->

			  <!-- Question 2 -->
			  <div class="w3-animate-opacity question" id="question2">
				<h2 class="sr-only">Question 2</h2>
				<h3>What is your BMI?</h3>

				<div class="w3-col l12">
				  <input
					type="radio"
					id="bmi_ans1"
					name="bmi"
					value="0"
					checked
				  />
				  <label for="bmi_ans1">0 - 25</label>
				</div>

				<div class="w3-col l12">
				  <input
					type="radio"
					id="bmi_ans2"
					name="bmi"
					value="0"
				  />
				  <label for="bmi_ans2">26 - 30</label>
				</div>

				<div class="w3-col l12">
				  <input
					type="radio"
					id="bmi_ans3"
					name="bmi"
					value="9"
				  />
				  <label for="bmi_ans3">31 - 35</label>
				</div>

				<div class="w3-col l12">
				  <input
					type="radio"
					id="bmi_ans4"
					name="bmi"
					value="10"
				  />
				  <label for="bmi_ans4">35 +</label>
				</div>

				<div
				  onclick="w3.hide('#question2'), w3.show('#question3')"
				  class="w3-col l12 w3-right nextBtn"
				>
				  <p>Next</p>
				</div>
			  </div>
			  <!-- End question 2 -->

			  <!-- Question 3 -->
			  <div class="w3-animate-opacity question" id="question3">
				<h2 class="sr-only">Question 3</h2>
				<h3>Does your family have diabetes?</h3>

				<div class="w3-col l12">
				  <input
					type="radio"
					id="family_ans1"
					name="family"
					value="0"
					checked
				  />
				  <label for="family_ans1">No</label>
				</div>

				<div class="w3-col l12">
				  <input
					type="radio"
					id="family_ans2"
					name="family"
					value="7"
				  />
				  <label for="family_ans2">Grandparent</label>
				</div>

				<div class="w3-col l12">
				  <input
					type="radio"
					id="family_ans3"
					name="family"
					value="15"
				  />
				  <label for="family_ans3">Sibling</label>
				</div>

				<div class="w3-col l12">
				  <input
					type="radio"
					id="family_ans4"
					name="family"
					value="15"
				  />
				  <label for="family_ans4">Parent</label>
				</div>

				<a href="#question"
				  onclick="w3.hide('#question3'), w3.show('#question4')"
				  class="w3-col l12 w3-right nextBtn"
				>
				  <p>Next</p>
				</a>
			  </div>
			  <!-- End question 3 -->

			  <!-- Question 4 -->
			  <div class="w3-animate-opacity question" id="question4">
				<h2 class="sr-only">Question 4</h2>
				<h3>Describe your diet</h3>

				<div class="w3-col l12">
				  <input
					type="radio"
					id="diet_ans1"
					name="diet"
					value="0"
					checked
				  />
				  <label for="diet_ans1">Low sugar</label>
				</div>

				<div class="w3-col l12">
				  <input
					type="radio"
					id="diet_ans2"
					name="diet"
					value="0"
				  />
				  <label for="diet_ans2">Normal sugar</label>
				</div>

				<div class="w3-col l12">
				  <input
					type="radio"
					id="diet_ans3"
					name="diet"
					value="7"
				  />
				  <label for="diet_ans3">Quite high sugar</label>
				</div>

				<div class="w3-col l12 w3-margin-bottom">
				  <input
					type="radio"
					id="diet_ans4"
					name="diet"
					value="10"
				  />
				  <label for="diet_ans4">High sugar</label>
				</div>

				<!-- Calculate button -->
				<div
				  onclick="w3.hide('.bmi-tool'), w3.show('#risks')"
				>
				  <input
					class="calculate theme-color"
					id="calculate"
					name="calculate"
					value="Calculate"
					type="submit"
				  />
				</div>
			  </div>
			  <!-- End question 4 -->
			</div> 
			<!-- End row -->
		  </fieldset>
		  <!-- End fieldset -->
			<!-- <img src="images/main/sugarcubes.png" alt="A pile of sugar cubes" class="sugarcubes" id="sugarcubes1"> -->
		</form>
		<!-- End form -->
		  
		  <?php include 'includes/risks.html'; ?>
		  <?php include 'includes/contact.html'; ?>
	  </div>
	</div>
  </div>
</div>