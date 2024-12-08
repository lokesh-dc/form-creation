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
	buttonSizes,
	isNoBorderVariant = false,
	disabled = "",
}): ReactElement => {
	const buttonStyles: buttonTypes = {
		primary: "bg-black text-white",
		secondary: "hover:bg-gray-200",
	};

	return (
		<>
			<button
				disabled={disabled ? true : false}
				onClick={(event: React.MouseEvent) => {
					actionOnClick();
					event.preventDefault();
				}}
				className={`disabled:bg-gray-100 disabled:cursor-not-allowed font-semibold flex gap-1 justify-center items-center ${
					isNoBorderVariant ? "p-1" : "border border-gray-200 py-1 px-2"
				} rounded-xl ${buttonStyles[buttonType]} ${classes}`}
			>
				{leftIcon ? (
					<NextImage
						src={leftIcon}
						height={buttonSizes?.height || 10}
						width={buttonSizes?.width || 10}
					/>
				) : null}
				{title}
				{rightIcon ? (
					<NextImage
						src={rightIcon}
						height={buttonSizes?.height || 10}
						width={buttonSizes?.width || 10}
					/>
				) : null}
			</button>
		</>
	);
};

export default PrimaryButton;
