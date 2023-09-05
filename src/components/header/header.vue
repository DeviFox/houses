<script lang="ts" src="./header.ts"/>

<template>
	<div class="header-container">
		<div class="header-title">TreeHouses</div>
		<Search/>
	</div>
</template>

<style lang="scss">
.header {
	&-container {
		width:            100%;
		display:          flex;
		background-color: #274c77;
		border-radius:    10px;
		padding:          8px 15px;
		height:           60px;
		margin-bottom:    60px;
	}

	&-title {
		display:         flex;
		font-size:       28px;
		color:           #6096ba;
		cursor:          pointer;
		margin-right:    80px;
		align-items:     center;
		justify-content: center;
		transition:      0.2s;

		&:hover {
			transition: 0.2s;
			color:      #e7ecef;
		}
	}
}

</style>
