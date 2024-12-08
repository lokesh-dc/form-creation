let backendFormData = {};

export const publishForm = (details) => {
	backendFormData = {
		...backendFormData,
		[details?.id]: details,
	};
};
