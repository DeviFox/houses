<script lang="ts" src="./search.ts"/>


<template>
	<div class="search">
		<input class="search-input" type="search" @click="showSuggests =  true">
		<div class="search-suggests" ref="target">
			<div class="search-suggests__item" @click="onClickOutside" v-show="showSuggests" v-for="item in suggests">{{ item }}</div>
		</div>
	</div>
</template>

<style lang="scss">
.search {
	position:    relative;
	display:     flex;
	align-items: center;

	&-input {
		border-radius:    8px;
		height:           45px;
		width:            800px;
		border:           none;
		outline:          none;
		font-size:        20px;
		padding:          5px 15px;
		background-color: #6096ba;
		transition:       0.2s;

		&:focus {
			transition:       0.2s;
			background-color: #a3cef1;
		}
	}

	&-suggests {
		position:                   absolute;
		display:                    flex;
		flex-direction:             column;
		width:                      800px;
		height:                     auto;
		border-bottom-left-radius:  8px;
		border-bottom-right-radius: 8px;
		background-color:           #a3cef1;
		top:                        40px;
		transition:                 0.5s;


		&__item {
			padding:    8px 15px;
			display:    flex;
			font-size:  18px;
			cursor:     pointer;
			transition: 0.2s;

			&:last-child {
				border-bottom-left-radius:  8px;
				border-bottom-right-radius: 8px;
			}

			&:hover {
				transition:       0.5s;
				background-color: #6096ba;
			}
		}
	}
}
</style>
