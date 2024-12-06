import FieldWrapper from "@/Components/UI/Wrappers/Fields";

export default function Home() {
	return (
		<div className="flex flex-col gap-4 p-10">
			<FieldWrapper
				title={
					"Explain in a single sentence, why are you the best fit for this role?"
				}
				description={"Which front-end framework do you prefer working with?"}
				placeholder={""}
				isRequired={false}
				maxLength={0}
			/>
		</div>
	);
}
