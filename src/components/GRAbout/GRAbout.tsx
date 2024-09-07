import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

export interface GRAboutItem {
  title?: string;
  body: string;
  align: "left" | "right" | "client";
  image?: string | StaticImport;
}

export interface GRAboutProps {
  itens: GRAboutItem[];
}

export default function GRAbout({ itens }: GRAboutProps) {
  return (
    <section id="about" className="p-10 bg-gray-100 flex flex-col">
      {itens.map((item, i) => (
        <div
          key={i}
          className={`bg-white mx-auto rounded-xl w-2/3 p-6 my-6 shadow-md ${
            item.align === "client" ? "text-center" : ""
          }`}
        >
          {item.title && <h2 className="text-3xl font-bold ">{item.title}</h2>}

          {item.align === "client" ? (
            <p className="text-lg text-gray-700">{item.body}</p>
          ) : (
            <div
              className={`flex w-full ${
                item.align === "left" ? "flex-row" : "flex-row-reverse"
              }`}
            >
              <div className="w-1/2 flex justify-center items-center">
                <Image
                  src={item.image || "/700x500.png"}
                  width={300}
                  height={200}
                  className="rounded-lg object-cover"
                  alt="imagem sobre"
                />
              </div>
              <div className="w-1/2 p-4 flex items-center">
                <p className="text-lg text-gray-700">{item.body}</p>
              </div>
            </div>
          )}
        </div>
      ))}
    </section>
  );
}
