import { GRNavbarProps } from "..";
import Link from "next/link";

export default function GRNavbar(props: GRNavbarProps) {
	const itens_center = props.itens.filter((a) => a.align === "center");
	const itens_right = props.itens.filter((a) => a.align === "right");

	return (
		<nav className="bg-gray-900 text-white p-4">
			<div className="max-w-screen-xl mx-auto flex items-center justify-between">
				<div className="flex-shrink-0">
					<Link href="/" className="text-xl font-bold">
						{props.title}
					</Link>
				</div>
				<div className="flex-grow flex justify-center">
					<ul className="flex space-x-6">
						{itens_center.map((it, i) => (
							<li key={i}>
								<Link
									href={it.href || "#"}
									className="hover:underline"
								>
									{it.label}
								</Link>
							</li>
						))}
					</ul>
				</div>
				<div className="flex-shrink-0">
					<ul className="flex space-x-6">
						{itens_right.map((it, i) => (
							<li key={i}>
								<Link
									href={it.href || "#"}
									className="hover:underline"
								>
									{it.label}
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	);
}
