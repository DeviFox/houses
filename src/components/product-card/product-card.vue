<script lang="ts" src="./product-card.ts"/>

<template>
	<div class="product-card">
		<img class="product-card__img" :src="product.img"/>
		<div class="product-card__title">{{ product.title }}</div>
		<div class="product-card__price">Price: {{ product.price }}</div>
	</div>
</template>

<style lang="scss">
.product-card {
	display:          flex;
	flex-direction:   column;
	align-items:      center;
	padding:          15px 5px;
	width:            280px;
	height:           440px;
	background-color: #f8f8f8;
	border-radius:    8px;
	margin:           0 16px 16px 0;
	flex-wrap:        wrap;

	&__img {
		width:         200px;
		height:        200px;
		margin-top:    50px;
		margin-bottom: 15px;
	}

	&__title {
		font-size: 20px;
	}

	&__price {

	}
}
</style>
