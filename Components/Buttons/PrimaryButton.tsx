"use client";
import { ButtonProps, buttonTypes } from "@/Constants/Typescript";
import React, { ReactElement } from "react";
import NextImage from "../Wrappers/Images";

const PrimaryButton: React.FC<ButtonProps> = ({
	title = "",
	buttonType = "secondary",
	actionOnClick = () => {},
	rightIcon,
}): ReactElement => {
	const buttonStyles: buttonTypes = {
		primary: "bg-black text-white",
		secondary: "",
	};

	return (
		<>
			<button
				onClick={(event: React.MouseEvent) => {
					actionOnClick();
					event.preventDefault();
				}}
				className={`flex gap-1 items-center py-1 px-2 border border-gray-200 rounded-xl ${buttonStyles[buttonType]}`}
			>
				{title}
				{rightIcon ? (
					<NextImage src={rightIcon} height={10} width={10} />
				) : null}
			</button>
		</>
	);
};

export default PrimaryButton;
