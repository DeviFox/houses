<script lang="ts" src="./app.ts"/>

<template>
	<div class="container">
		<Header/>
		<div class="catalog">
			<ProductCard/>
		</div>
	</div>
</template>

<style lang="scss">
body {
	background-color: #e7ecef;
}

.container {
	max-width: 1280px;
	margin:    0 auto;
}
</style>
