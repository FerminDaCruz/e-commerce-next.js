import Link from "next/link";

export default function Home() {
    return (
        <div className="main-page">
            <div className="hero-section">
                <h2>Bienvenido a nuestra tienda Gym-commerce</h2>
                <p>
                    Donde puedes encontrar todos los productos de gimnasio en el
                    mismo lugar.
                </p>
                <Link className="ver-catalogo" href={"/catalogo/todos"}>
                    ver catálogo
                </Link>
            </div>
        </div>
    );
}
