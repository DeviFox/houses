<script lang="ts" src="./app.ts"/>

<template>
	<div class="container">
		<Header/>
		<div class="catalog">
			<ProductCard
					v-for="item in products"
					:product="item"
			/>
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

.catalog {
	width:   100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;

}
</style>
