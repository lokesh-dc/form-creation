import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "Form Builder",
	description: "Project by Lokesh Choudhary",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,400,500,600,700&display=swap"
					rel="stylesheet"
				/>
			</head>
			<body className={`antialiased`}>{children}</body>
		</html>
	);
}
