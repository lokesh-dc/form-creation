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

export const getFormSubmissions = async (id) => {
	console.log(
		`${process.env.NEXT_PUBLIC_API_BASELINK}/api/form/${id}/submissions`
	);
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_API_BASELINK}/api/form/${id}/submissions`
	)
		.then((res) => res.json())
		.then((res) => res)
		.catch((err) => console.log(err));

	if (res) {
		return res;
	}
	return {};
};
