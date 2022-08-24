<template>
	<h2 class="mb-3">게시글 수정</h2>
	<div class="card">
		<div class="card-body">
			<div class="mb-3">
				<input
					type="text"
					class="form-control"
					id="createTitle"
					placeholder=""
				/>
			</div>
			<div class="mb-3">
				<textarea
					class="form-control"
					id="exampleFormControlTextarea1"
					rows="10"
				></textarea>
			</div>
		</div>
		<div class="postseq invisible"></div>
		<div class="row">
			<div class="col mb-3 me-3" style="text-align: right">
				<button class="btn btn-outline-danger me-3">취소</button>
				<button class="btn btn-primary">저장</button>
			</div>
		</div>
	</div>
</template>

<script setup></script>

<style scoped>
@import '@/assets/main.css';
</style>
