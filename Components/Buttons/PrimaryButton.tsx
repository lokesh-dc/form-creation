"use client";
import { ButtonProps, buttonTypes } from "@/Constants/Typescript";
import React, { ReactElement } from "react";
import NextImage from "../Wrappers/Images";

const PrimaryButton: React.FC<ButtonProps> = ({
	title = "",
	buttonType = "secondary",
	actionOnClick = () => {},
	rightIcon,
	leftIcon,
	classes = "",
}): ReactElement => {
	const buttonStyles: buttonTypes = {
		primary: "bg-black text-white",
		secondary: "hover:bg-gray-200",
	};

	return (
		<>
			<button
				onClick={(event: React.MouseEvent) => {
					actionOnClick();
					event.preventDefault();
				}}
				className={`font-semibold flex gap-1 items-center py-1 px-2 border border-gray-200 rounded-xl ${buttonStyles[buttonType]} ${classes}`}
			>
				{leftIcon ? <NextImage src={leftIcon} height={10} width={10} /> : null}
				{title}
				{rightIcon ? (
					<NextImage src={rightIcon} height={10} width={10} />
				) : null}
			</button>
		</>
	);
};

export default PrimaryButton;
