<?php
	include 'includes/head.html';
?>

	<body class="is-preload">

		<!-- Wrapper -->
			<div id="wrapper" class="fade-in">

				<!-- Header -->
					<header id="header">
						<h1 class="logo">Explore</h1>
					</header>

				<!-- Nav -->
					<nav id="nav">
						<ul class="links">
							<li><a href="index.php">Home</a></li>
							<li class="active"><a href="places.php">Places</a></li>
							<li><a href="transport.php">Transport</a></li>
							<li><a href="traveltip.php">Travel Tips</a></li>
						</ul>
						<?php include 'includes/icons.html'; ?>
					</nav>


				<?php include 'includes/places.html'; ?>
				<?php include 'includes/footer.html'; ?>
			</div>

			<?php include 'includes/scripts.html'; ?>
	</body>
</html>