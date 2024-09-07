export interface GRHeroProps {
    title: string | JSX.Element;
    body: string;
}

export default function GRHero(props:GRHeroProps) {
    return <section
        id="hero"
        className="h-max min-h-[70vh] bg-cover bg-center relative text-white"
        style={{
            backgroundImage: "url(/academia.jpg)",
        }}
    >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center p-6">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">{props.title}</h1>
                <p className="text-lg md:text-2xl">
                    {props.body}
                </p>
            </div>
        </div>
    </section>
}

