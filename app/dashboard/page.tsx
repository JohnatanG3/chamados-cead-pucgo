import { Bell, ChevronDown, LogOut, Plus, Search, User } from "lucide-react";
import { redirect } from "next/navigation";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";

export default function DashboardPage() {
	async function handleSubmitTicket(formData: FormData) {
		"use server";
		// Em um sistema real, aqui seria feito o processamento do chamado
		// Por enquanto, apenas redirecionamos para a mesma página
		redirect("/dashboard?success=true");
	}

	return (
		<div className="flex min-h-screen flex-col">
			<header className="sticky top-0 z-10 border-b bg-background">
				<div className="container flex h-16 items-center justify-between px-4 md:px-6">
					<div className="flex items-center gap-2">
						<img
							src="/puc-goias.svg"
							alt="Logo CEAD PUC GO"
							className="h-8 w-8"
						/>
						<span className="text-lg font-semibold">CEAD - PUC GO</span>
					</div>
					<div className="flex items-center gap-4">
						<Button variant="ghost" size="icon">
							<Bell className="h-5 w-5" />
							<span className="sr-only">Notificações</span>
						</Button>
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<Button variant="ghost" className="flex items-center gap-2">
									<Avatar className="h-8 w-8">
										<AvatarImage
											src="/placeholder.svg?height=32&width=32"
											alt="Avatar"
										/>
										<AvatarFallback>CG</AvatarFallback>
									</Avatar>
									<span className="hidden md:inline-flex">Coordenador</span>
									<ChevronDown className="h-4 w-4" />
								</Button>
							</DropdownMenuTrigger>
							<DropdownMenuContent align="end">
								<DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
								<DropdownMenuSeparator />
								<DropdownMenuItem>
									<User className="mr-2 h-4 w-4" />
									Perfil
								</DropdownMenuItem>
								<DropdownMenuItem>
									<LogOut className="mr-2 h-4 w-4" />
									Sair
								</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					</div>
				</div>
			</header>
			<main className="flex-1 p-4 md:p-6">
				<div className="container mx-auto grid gap-6">
					<div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
						<div>
							<h1 className="text-2xl font-bold">Sistema de Chamados</h1>
							<p className="text-muted-foreground">
								Abra e acompanhe seus chamados para o setor de apoio.
							</p>
						</div>
						<div className="flex items-center gap-2">
							<div className="relative w-full md:w-64">
								<Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
								<Input
									type="search"
									placeholder="Buscar chamados..."
									className="w-full pl-8"
								/>
							</div>
							<Button>
								<Plus className="mr-2 h-4 w-4" />
								Novo Chamado
							</Button>
						</div>
					</div>
					<Separator />
					<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
						<Card>
							<CardHeader>
								<CardTitle>Abrir Novo Chamado</CardTitle>
								<CardDescription>
									Preencha o formulário para solicitar suporte.
								</CardDescription>
							</CardHeader>
							<form action={handleSubmitTicket} encType="multipart/form-data">
								<CardContent className="space-y-4">
									<div className="space-y-2">
										<Label htmlFor="title">Título</Label>
										<Input
											id="title"
											name="title"
											placeholder="Resumo do problema"
											required
										/>
									</div>
									<div className="space-y-2">
										<Label htmlFor="category">Categoria</Label>
										<Select name="category" required>
											<SelectTrigger>
												<SelectValue placeholder="Selecione uma categoria" />
											</SelectTrigger>
											<SelectContent>
												<SelectItem value="academic_programming">
													Programação Acadêmica
												</SelectItem>
												<SelectItem value="student_enrollment">
													Matrícula Aluno
												</SelectItem>
												<SelectItem value="monitoring_regime">
													Regime de Acampamento
												</SelectItem>
											</SelectContent>
										</Select>
									</div>
									<div className="space-y-2">
										<Label htmlFor="priority">Prioridade</Label>
										<Select name="priority" required>
											<SelectTrigger>
												<SelectValue placeholder="Selecione a prioridade" />
											</SelectTrigger>
											<SelectContent>
												<SelectItem value="low">Baixa</SelectItem>
												<SelectItem value="medium">Média</SelectItem>
												<SelectItem value="high">Alta</SelectItem>
												<SelectItem value="urgent">Urgente</SelectItem>
											</SelectContent>
										</Select>
									</div>
									<div className="space-y-2">
										<Label htmlFor="description">Descrição</Label>
										<Textarea
											id="description"
											name="description"
											placeholder="Descreva detalhadamente o problema ou solicitação"
											rows={5}
											required
										/>
									</div>
									<div className="space-y-2">
										<Label htmlFor="attachment">Anexar Arquivo</Label>
										<div className="flex items-center gap-2">
											<Input
												id="attachment"
												name="attachment"
												type="file"
												className="flex-1"
											/>
											<Button type="button" variant="outline" size="sm">
												Adicionar
											</Button>
										</div>
										<p className="text-xs text-muted-foreground">
											Formatos aceitos: PDF, DOC, DOCX, JPG, PNG (máx. 5MB)
										</p>
									</div>
								</CardContent>
								<CardFooter>
									<Button type="submit" className="w-full">
										Enviar Chamado
									</Button>
								</CardFooter>
							</form>
						</Card>
						<Card>
							<CardHeader>
								<CardTitle>Chamados Recentes</CardTitle>
								<CardDescription>Seus últimos chamados abertos</CardDescription>
							</CardHeader>
							<CardContent className="space-y-4">
								<div className="space-y-4">
									<div className="rounded-lg border p-3">
										<div className="flex items-center justify-between">
											<div className="font-medium">
												Problema com acesso ao AVA
											</div>
											<Badge>Em andamento</Badge>
										</div>
										<div className="mt-1 text-sm text-muted-foreground">
											Aberto em 22/03/2025
										</div>
									</div>
									<div className="rounded-lg border p-3">
										<div className="flex items-center justify-between">
											<div className="font-medium">
												Atualização de material didático
											</div>
											<Badge variant="outline">Concluído</Badge>
										</div>
										<div className="mt-1 text-sm text-muted-foreground">
											Aberto em 15/03/2025
										</div>
									</div>
									<div className="rounded-lg border p-3">
										<div className="flex items-center justify-between">
											<div className="font-medium">
												Configuração de nova turma
											</div>
											<Badge variant="destructive">Pendente</Badge>
										</div>
										<div className="mt-1 text-sm text-muted-foreground">
											Aberto em 10/03/2025
										</div>
									</div>
								</div>
							</CardContent>
							<CardFooter>
								<Button variant="outline" className="w-full">
									Ver Todos os Chamados
								</Button>
							</CardFooter>
						</Card>
						<Card>
							<CardHeader>
								<CardTitle>Informações Úteis</CardTitle>
								<CardDescription>
									Recursos e contatos importantes
								</CardDescription>
							</CardHeader>
							<CardContent className="space-y-4">
								<div className="rounded-lg bg-muted p-3">
									<h3 className="font-medium">Horário de Atendimento</h3>
									<p className="text-sm text-muted-foreground">
										Segunda a Sexta: 8h às 18h
									</p>
								</div>
								<div className="rounded-lg bg-muted p-3">
									<h3 className="font-medium">Contato Direto</h3>
									<p className="text-sm text-muted-foreground">
										cead@pucgoias.edu.br
									</p>
									<p className="text-sm text-muted-foreground">
										(62) 3946-1000
									</p>
								</div>
								<div className="rounded-lg bg-muted p-3">
									<h3 className="font-medium">Links Rápidos</h3>
									<ul className="mt-1 space-y-1 text-sm text-muted-foreground">
										<li>
											<a
												href="/manual-coordenador"
												className="text-primary hover:underline"
											>
												Manual do Coordenador
											</a>
										</li>
										<li>
											<a
												href="/tutoriais-plataforma"
												className="text-primary hover:underline"
											>
												Tutoriais da Plataforma
											</a>
										</li>
										<li>
											<a
												href="/calendario-academico"
												className="text-primary hover:underline"
											>
												Calendário Acadêmico
											</a>
										</li>
									</ul>
								</div>
							</CardContent>
						</Card>
					</div>
				</div>
			</main>
			<footer className="border-t py-4">
				<div className="container flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-6">
					<p className="text-center text-sm text-muted-foreground">
						&copy; {new Date().getFullYear()} CEAD - Coordenação de Educação a
						Distância - PUC GO. Todos os direitos reservados.
					</p>
					<div className="flex items-center gap-4">
						<a
							href="/termo-de-uso"
							className="text-sm text-muted-foreground hover:underline"
						>
							Termos de Uso
						</a>
						<a
							href="/politica-de-privacidade"
							className="text-sm text-muted-foreground hover:underline"
						>
							Política de Privacidade
						</a>
					</div>
				</div>
			</footer>
		</div>
	);
}
