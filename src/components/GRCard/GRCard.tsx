import Image from "next/image";

export interface GRCardProps {
  title: string;
  description: string;
  tags: string[];
  image?: string;
}

export default function GRCard({
  title,
  description,
  image,
  tags,
}: GRCardProps) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      {image && (
        <Image
          src={image || "/400x250.png"}
          alt={title}
          width={400}
          height={250}
          className="w-full object-cover"
        />
      )}
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
}
