import { GRButtonProps } from "../index";
import clsx from "clsx";

export default function GRButton({
	children,
	className,
	disabled,
	...rest
}: GRButtonProps) {
	return (
		<button
			{...rest}
			disabled={disabled}
			className={clsx(
				"w-full py-2 px-4 rounded-lg transition-all duration-200",
				"focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
				disabled
					? "bg-gray-400 cursor-not-allowed"
					: "bg-blue-500 text-white hover:bg-blue-600",
				className // Permite estender a classe com customizações adicionais
			)}
		>
			{children}
		</button>
	);
}
