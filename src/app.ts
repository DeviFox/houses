import {reactive} from 'vue';
import ProductCard from './components/product-card/product-card.vue';
import Header from './components/header/header.vue';

export default {
	components: {
		Header,
		ProductCard,
	},
	setup() {
		const products = reactive([
			{
				'id':       '1241af-e32e',
				'title':    'Base House',
				'img':      'https://www.ruumtinyhouses.com/img/og.png',
				'category': 'ground',
				'price':     10000,
				'animals':  ['fox', 'hear', 'wolf'],
			},
			{
				'id':       '33rds-e32e',
				'title':    'Second House',
				'img':      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEge51PbMyf_ss9gMRAq1gZyvOLFNXo6WkkLYSbcyOE6XaJl0Ie1SfGCE9QDRzgwyfYJ7Kdwt7VeWC3uwPR8AQbEl9AOfBY4NsaM6C4XYOdWR7FRD94psJvyh-4z2djEpPSSj64fqsTXkcFEfKJA-RD04dhIsfCZ6aZwLYvdRZf65FFwmgneyQfIYB7CNfvG/s1200/Willow%20Treehouse%201.jpg',
				'category': 'tree',
				'price':    20000,
				'animals':  ['sparrow', 'woodpecker', 'starling'],
			}
		])
		return {
			products
		};
	}
}
