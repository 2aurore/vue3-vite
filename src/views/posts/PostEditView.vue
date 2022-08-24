<template>
	<div class="card">
		<div class="card-body">
			<div v-if="show" class="mb-3 row">
				<h2>{{ postObject.title }}</h2>
			</div>

			<div v-if="show" class="mb-3">
				<textarea
					class="form-control"
					id=""
					rows="10"
					v-model="postObject.content"
					readonly
				></textarea>
			</div>
			<div class="postseq invisible"></div>
			<div class="row">
				<div class="col"></div>
				<div class="col-5"></div>
				<div class="col" style="text-align: right">
					<router-link to="/posts">
						<button class="btn btn-primary">목록</button>
					</router-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup></script>

<style scoped>
@import '@/assets/main.css';
</style>
