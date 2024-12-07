import React, { ReactElement } from "react";
import Image from "next/image";

import { imageProps } from "@/Constants/Typescript";

const NextImage: React.FC<imageProps> = ({
	src = "",
	height = 30,
	width = 30,
	alt = "",
}): ReactElement => {
	return (
		<Image unoptimized height={height} width={width} src={src} alt={alt} />
	);
};

export default NextImage;
