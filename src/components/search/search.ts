import {reactive, ref} from 'vue';
import { onClickOutside } from '@vueuse/core'

export default {
	setup() {
		/** Is need to show suggests list */
		const showSuggests = ref(false);

		/** Suggests for search */
		const suggests     = reactive(['wooden house', 'super house', 'extra house', 'summer house']);
		const target = ref(null)

		onClickOutside(target, () =>  {
			showSuggests.value = false;
		})


		return {
			suggests,
			showSuggests,
			target,
			onClickOutside,
		}
	}
}
