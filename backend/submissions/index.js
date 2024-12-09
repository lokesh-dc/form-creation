export const submitForm = async (details) => {
	const request = new Request(
		`${process.env.NEXT_PUBLIC_API_BASELINK}/api/form/submit`,
		{
			method: "POST",
			body: JSON.stringify(details),
		}
	);

	const res = await fetch(request);
	if (res?.status) {
		return {
			status: true,
		};
	}

	return {
		status: false,
	};
};
