import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginPage() {
	async function handleLogin(formData: FormData) {
		"use server";
		// Em um sistema real, aqui seria feita a autenticação
		// Por enquanto, apenas redirecionamos para a página de chamados
		redirect("/dashboard");
	}

	return (
		<div className="flex min-h-screen flex-col items-center justify-center bg-slate-50">
			<div className="mb-8 flex flex-col items-center">
				<img
					src="/puc-goias.svg"
					alt="Logo CEAD PUC GO"
					className="h-20 w-20 mb-4"
				/>
				<h1 className="text-2xl font-bold text-slate-900">CEAD - PUC GO</h1>
				<p className="text-slate-600">Sistema de Abertura de Chamados</p>
			</div>

			<Card className="w-full max-w-md">
				<CardHeader>
					<CardTitle className="text-xl">Acesso ao Sistema</CardTitle>
					<CardDescription>
						Entre com suas credenciais para acessar o sistema de chamados.
					</CardDescription>
				</CardHeader>
				<form action={handleLogin}>
					<CardContent className="space-y-4">
						<div className="space-y-2">
							<Label htmlFor="email">E-mail</Label>
							<Input
								id="email"
								name="email"
								type="email"
								placeholder="seu.email@pucgoias.edu.br"
								required
							/>
						</div>
						<div className="space-y-2">
							<div className="flex items-center justify-between">
								<Label htmlFor="password">Senha</Label>
								<Link href="#" className="text-sm text-primary hover:underline">
									Esqueceu a senha?
								</Link>
							</div>
							<Input id="password" name="password" type="password" required />
						</div>
					</CardContent>
					<CardFooter>
						<Button type="submit" className="w-full">
							Entrar <ArrowRight className="ml-2 h-4 w-4" />
						</Button>
					</CardFooter>
				</form>
			</Card>
		</div>
	);
}
