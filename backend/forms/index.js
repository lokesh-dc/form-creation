export const publishForm = async (details) => {
	const request = new Request(
		`${process.env.NEXT_PUBLIC_API_BASELINK}/api/form/create`,
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

export const getFormDetails = async (id) => {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_API_BASELINK}/api/form/${id}`
	)
		.then((res) => res.json())
		.then((res) => res)
		.catch((err) => console.log(err));

	if (res) {
		return res;
	}
	return {};
};

export const getUserForms = async () => {
	const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASELINK}/api/form/`)
		.then((res) => res.json())
		.then((res) => res)
		.catch((err) => console.log(err));

	if (res) {
		return res;
	}
	return [];
};
