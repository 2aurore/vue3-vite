import { useShowStore } from '@/stores/show';
import { storeToRefs } from 'pinia';

export const useShow = () => {
	const { show } = storeToRefs(useShowStore());
	const { vLogin, vLogout } = useShowStore();

	return {
		show,
		vLogin,
		vLogout,
	};
};
