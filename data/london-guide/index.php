<?php
	include 'includes/head.html';
?>

	<body class="is-preload">

		<!-- Wrapper -->
			<div id="wrapper" class="fade-in">

				<!-- Intro -->
					<div id="intro">
						<h1>London<br />
						Guide</h1>
						<p>Welcome to London Guide, your official guide to London, England.</p>
						<ul class="actions">
							<li><a href="#header" class="button icon solid solo fa-arrow-down scrolly"><span class="w3-hide">Continue</span></a></li>
						</ul>
					</div>

				<!-- Header -->
					<header id="header">
						<h1 class="logo">Discovery</h1>
					</header>

				<!-- Nav -->
					<nav id="nav">
						<ul class="links">
							<li class="active"><a href="index.php">Home</a></li>
							<li><a href="places.php">Places</a></li>
							<li><a href="transport.php">Transport</a></li>
							<li><a href="traveltip.php">Travel Tips</a></li>
						</ul>
						<?php include 'includes/icons.html'; ?>
					</nav>


				<?php include 'includes/index.html'; ?>
				<?php include 'includes/footer.html'; ?>
			</div>

			<?php include 'includes/scripts.html'; ?>
	</body>
</html>