import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Sistema de Chamados CEAD - PUC GO",
	description: "Sistema de abertura de chamados para a CEAD da PUC GO",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="pt-BR">
			<head>
				<link rel="icon" href="/faviconV2.png" sizes="any" />
				<link rel="icon" href="/faviconV2.png" type="image/svg+xml" />
				<link rel="apple-touch-icon" href="/apple-icon.png" />
      		</head>
			<body>{children}</body>
		</html>
	);
}
