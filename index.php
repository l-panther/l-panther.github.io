<!DOCTYPE html>
<!--
	Massively by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
-->
<html lang="en-US">
	
<?php
    require_once("includes/config.php");
    require_once("includes/head.php");
?>

	<body class="is-preload">	
		<!-- Wrapper -->
		<div id="wrapper" class="fade-in">

			<!-- Intro -->
			<div id="intro">
				<h1>Discover <br />
				<span>great</span> food</h1>
				<p>Looking for the right place to eat? Explore the great places to eat in London.</p>
				<ul class="actions">
					<li><a href="#header" class="button icon solid solo fa-arrow-down scrolly"><span class="w3-hide">Continue</span></a></li>
				</ul>
			</div>

			<!-- Header -->
			<header id="header">
				<div class="logo"><img src="images/logo/logo.png" alt="Company logo"></div>
			</header>

			<!-- Nav -->
			<nav id="nav">
				<ul class="links">
					
					<li class="active"><a href="#cafes">Cafes</a></li>
					<li><a href="#map">Map</a></li>
				</ul>
				<?php include 'includes/icons.html'; ?>
			</nav>

			<?php include 'includes/index.html'; ?>
			<?php include 'includes/footer.php'; ?>
		</div>
		<?php include 'includes/scripts.html'; ?>
	</body>
</html>