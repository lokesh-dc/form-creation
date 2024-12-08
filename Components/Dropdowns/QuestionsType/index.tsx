import PrimaryButton from "@/Components/Buttons/PrimaryButton";
import NextImage from "@/Components/Wrappers/Images";
import { fieldTypeDetails } from "@/Constants/Fields";
import { questionTypeProps } from "@/Constants/Typescript";
import React, { ReactElement, useState } from "react";

const QuestionsType: React.FC<questionTypeProps> = ({
	buttonTitle = "",
	buttonIconSrc = "",
	buttonRightIcon = "",
	handleDropdownSelection,
	buttonSizes = {},
	isButtonNoBorderVariant = false,
}): ReactElement => {
	const [isMenuVisible, toggleMenuVisibility] = useState(false);
	return (
		<div className="relative">
			<PrimaryButton
				title={buttonTitle}
				actionOnClick={() => toggleMenuVisibility(!isMenuVisible)}
				buttonType={"secondary"}
				leftIcon={buttonIconSrc}
				rightIcon={buttonRightIcon}
				classes={`${buttonTitle ? "w-[200px]" : ""}`}
				buttonSizes={buttonSizes}
				isNoBorderVariant={isButtonNoBorderVariant}
			/>

			<div
				className={`absolute p-2 rounded-xl z-2000 min-w-[200px] top-[110%] right-0 ${
					isMenuVisible ? "flex flex-col gap-1" : "hidden"
				} bg-white shadow-md w-full cursor-pointer border border-gray-200`}
			>
				<div className="bg-gray-100 rounded-md p-1 px-2">Input Types</div>
				{Object.values(fieldTypeDetails)?.map(({ label, icon, type }) => (
					<button
						onClick={() => {
							handleDropdownSelection({ type });
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
