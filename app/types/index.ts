export interface Product {
    id: number;
    image: string;
    title: string;
    description: string;
    price: number;
    category: string;
    stock: number;
    rating: number;
    reviews: number;
    features: string[];
}
export interface CartItem extends Product {
    quantity: number;
}

export interface CartContextType {
    cart: CartItem[];
    addToCart: (product: Product, quantity: number) => void;
    removeFromCart: (productId: number) => void;
    clearCart: () => void;
    updateCartItemQuantity: (productId: number, quantity: number) => void;
}

export const products: Product[] = [
    {
        id: 1,
        image: "https://imgs.search.brave.com/do0ih_aUTwKwlkG85TpKKKkyXra191wE01oKgdz59Eo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yZXNp/emUuc3ByaW50ZXJj/ZG4uY29tL2YvMTQ0/MHgxNDQwL3Byb2R1/Y3RzL2EwNGYzZGYz/Njc2ODQ5ZDE4YzAy/MWZhYjNjMGY5Mzhi/L2hhbHRlcmVzLWFq/dXN0YXZlaXMtbHVs/bGF4LW5lbzIwLTIt/aGFsdGVyZXMtZGUt/MjAta2dfYTA0ZjNk/ZjM2NzY4NDlkMThj/MDIxZmFiM2MwZjkz/OGJfMzY1MjI4OTE1/Ny5qcGc_dz0xNDQw/JnE9NzU",
        title: "Mancuernas Ajustables 20kg",
        description:
            "Juego de mancuernas ajustables ideal para entrenamientos en casa y gimnasio.",
        price: 14999,
        category: "equipamiento",
        stock: 20,
        rating: 4.8,
        reviews: 152,
        features: [
            "Incluye discos de 1.25kg, 2.5kg y 5kg",
            "Barra de acero con agarre antideslizante",
            "Fácil ajuste para diferentes niveles de peso",
        ],
    },
    {
        id: 2,
        image: "https://imgs.search.brave.com/3mfRAx3XMo32yTlukl7uBw6OB_6jkmRiz_IwZqJsuJg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9oaXBz/LmhlYXJzdGFwcHMu/Y29tL3ZhZGVyLXBy/b2QuczMuYW1hem9u/YXdzLmNvbS8xNjQ2/MjMzNTQ0LTQxMUtF/ek1IWk5MLl9TTDUw/MF8uanBnP2Nyb3A9/MXh3OjF4aDtjZW50/ZXIsdG9wJnJlc2l6/ZT05ODA6Kg",
        title: "Bandas de Resistencia (Set de 5)",
        description:
            "Bandas de diferentes niveles de resistencia, perfectas para entrenamientos funcionales.",
        price: 3499,
        category: "accesorios",
        stock: 50,
        rating: 4.6,
        reviews: 98,
        features: [
            "Fabricadas con látex natural duradero",
            "Incluye niveles: Extra Ligero, Ligero, Medio, Fuerte, Extra Fuerte",
            "Bolsa de transporte incluida",
        ],
    },
    {
        id: 3,
        image: "https://imgs.search.brave.com/Q_OYH-tFN5kAhzoAuhB8Ha_yIoEP9s3ZzYVvOFVRvWc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YTIuc29sb2RlcG9y/dGVzLmNvbS5hci9t/ZWRpYS9jYXRhbG9n/L3Byb2R1Y3QvY2Fj/aGUvZmFhZTJjMzdh/YjFkMzE1ZTRiNjk3/YTdmNjJiNDIxYjcv/Yy9vL2NvbGNob25l/dGEtZGUteW9nYS1t/YXQtYXRsZXRpYy1n/b2ZyYWRvLTZtbS12/ZXJkZS0xMjEwNDAw/MGcyMzIwMTAtMS5q/cGc",
        title: "Colchoneta para Yoga y Entrenamiento",
        description:
            "Colchoneta antideslizante para ejercicios de piso como yoga, pilates o estiramientos.",
        price: 5499,
        category: "equipamiento",
        stock: 30,
        rating: 4.7,
        reviews: 67,
        features: [
            "Material de alta densidad para mayor comodidad",
            "Dimensiones: 183 x 61 cm",
            "Resistente al sudor y fácil de limpiar",
        ],
    },
    {
        id: 4,
        image: "https://imgs.search.brave.com/lkMkhmuiawlqddoX5faUBeTM_OFeWBdoGoFubLpgU_c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NDFTZWZjMUxBMUwu/anBn",
        title: "Shaker Proteinero 700ml",
        description:
            "Botella mezcladora para batidos de proteínas con compartimento para suplementos.",
        price: 1999,
        category: "accesorios",
        stock: 100,
        rating: 4.5,
        reviews: 120,
        features: [
            "Incluye una bola mezcladora de acero inoxidable",
            "Compartimento inferior desmontable para polvos o cápsulas",
            "Material libre de BPA",
        ],
    },
    {
        id: 5,
        image: "https://imgs.search.brave.com/S-pT00C7Wecaidbh276m7UN-G-XEBb_0s9ArU-wLYz0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9oaXBz/LmhlYXJzdGFwcHMu/Y29tL3ZhZGVyLXBy/b2QuczMuYW1hem9u/YXdzLmNvbS8xNjg3/ODgzOTQwLTgxcTQw/RWZCaEdMLmpwZz9j/cm9wPTF4dzoxeGg7/Y2VudGVyLHRvcCZy/ZXNpemU9OTgwOio",
        title: "Cinturón de Levantamiento de Pesas",
        description:
            "Cinturón de cuero ajustable para soporte lumbar en ejercicios de fuerza.",
        price: 7499,
        category: "accesorios",
        stock: 15,
        rating: 4.9,
        reviews: 54,
        features: [
            "Hecho de cuero genuino para mayor durabilidad",
            "Hebilla de doble prong para ajuste seguro",
            "Ideal para sentadillas, peso muerto y más",
        ],
    },
];
