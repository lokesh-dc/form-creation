import PrimaryButton from "@/Components/Buttons/PrimaryButton";
import NextImage from "@/Components/Wrappers/Images";
import { fieldTypes } from "@/Constants/Fields";
import { questionTypeProps } from "@/Constants/Typescript";
import React, { ReactElement, useState } from "react";

const QuestionsType: React.FC<questionTypeProps> = ({
	buttonTitle = "",
	buttonIconSrc = "",
	handleFieldAddition,
}): ReactElement => {
	const [isMenuVisible, toggleMenuVisibility] = useState(false);
	return (
		<div className="relative">
			<PrimaryButton
				title={buttonTitle}
				actionOnClick={() => toggleMenuVisibility(!isMenuVisible)}
				buttonType={"secondary"}
				leftIcon={buttonIconSrc}
				classes="w-[200px]"
			/>

			<div
				className={`absolute p-2 rounded-xl top-[110%] ${
					isMenuVisible ? "flex flex-col gap-1" : "hidden"
				} bg-white shadow-md w-full cursor-pointer border border-gray-200`}
			>
				<div className="bg-gray-100 rounded-md p-1 px-2">Input Types</div>
				{fieldTypes?.map(({ label, icon, type }) => (
					<button
						onClick={() => {
							handleFieldAddition({ type });
							toggleMenuVisibility(!isMenuVisible);
						}}
						className="flex gap-2 p-1 rounded-md hover:bg-gray-100"
					>
						<NextImage src={icon} height={20} width={20} alt="" />
						{label}
					</button>
				))}
			</div>
		</div>
	);
};

export default QuestionsType;
