import Link from "next/link";

export interface GRNavbarItem {
  label: string;
  href?: string;
  align: "center" | "right";
}

export interface GRNavbarProps {
  title: string;
  itens: GRNavbarItem[];
}

export default function GRNavbar(props: GRNavbarProps) {
  const itens_center = props.itens.filter((a) => a.align === "center");
  const itens_right = props.itens.filter((a) => a.align === "right");
  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          {props.title}
        </Link>
        <ul className="flex flex-1 justify-center space-x-6">
          {itens_center.map((it, i) => (
            <li key={i}>
              <Link href={it.href || "#"} className="hover:underline">
                {it.label}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="flex space-x-6">
          {itens_right.map((it, i) => (
            <li key={i}>
              <Link href={it.href || "#"} className="hover:underline">
                {it.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
