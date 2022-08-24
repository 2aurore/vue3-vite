<template>
	<header>
		<nav class="navbar navbar-expand-sm navbar-dark bg-primary">
			<div class="container-fluid">
				<a class="navbar-brand" href="#">TLC</a>
				<button
					class="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarNav">
					<ul class="navbar-nav">
						<li class="nav-item">
							<router-link class="nav-link" active-class="active" to="/"
								>Login</router-link
							>
						</li>
						<li class="nav-item">
							<router-link class="nav-link" active-class="active" to="/posts"
								>Posts</router-link
							>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	</header>
</template>

<script></script>

<style scoped></style>
