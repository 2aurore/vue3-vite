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
					<ul class="navbar-nav me-auto">
						<li class="nav-item">
							<router-link class="nav-link" active-class="active" to="/posts"
								>Posts</router-link
							>
						</li>
					</ul>
					<div
						v-for="({ loginFlag, logoutFlag }, index) in show"
						:key="index"
						class="d-flex"
					>
						<button
							v-if="loginFlag"
							class="btn btn-outline-light"
							type="button"
							@click="goLogin"
						>
							Login
						</button>
						<button
							v-if="logoutFlag"
							class="btn btn-outline-light"
							type="button"
							@click="goLogout"
						>
							LogOut
						</button>
					</div>
				</div>
			</div>
		</nav>
	</header>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useShow } from '@/compossable/show';
import { goLogout } from '@/api/logout';

const { show } = useShow();

const router = useRouter();
const goLogin = () => {
	router.push('/');
};
</script>

<style scoped></style>
