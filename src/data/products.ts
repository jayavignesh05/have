export interface Product {
    id: number;
    name: string;
    price: string;
    image: string;
    badge?: string;
    category?: string;
    variants?: { size: string; quantity: number }[];
    selectedSize?: string;
    description?: string;
    material?: string;
}

export const products: Product[] = [
    {
        id: 1,
        name: "HAVE Mariner Knit Sweater",
        price: "$120.00 USD",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBsOl2OlRZIYloss4GeKvUaBzmLqUGAGsoylaOVnyY1hjKRVvhWj56_z2SGGmk2hJEfHo9JEmJ6Y3q-Gh4Tq9cAse285y3dCaBZp_C0E8rmG5VJieZp8B46izujfBOBFt1SeNdCZYKrIl3qdauyKM_yIq1iZIxeDRWftWo8xQwYnrH8_J6BGROXJqNs2jrLgET-O1lGAsxWHq43iCoMGoVAzvYvNByyw4YcT5Z03WNc_9wj7BwJSxLEMMn9wa4fq0n70iwN-5F2BcB3",
        badge: "Best Seller",
        category: "Tops"
    },
    {
        id: 3,
        name: "Axis Oblique Cardigan",
        price: "$220.00 USD",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDjkLDt_1TWPtvjUbaAcyLiwxzpn8WWkdS1IQ-5-9_6svTr3LWfCgZSDB1SHp1Re8b6WsZvvgRsLt-x7sWqt0QTvN8fQ-ecrpjN01KSM28d2fF4PrYiLUvjj-Xi6LFWrPaBheQw3kjm0ezq9A4q4PIYALAtD9ohChnuFIJ70Q0eEB3HyPqDzOkdDv-1smqmbABfi-2QP-VcqEhVIBwrq4SRH--g7KtKEJig2ttK-ek1O4tfbwlix1rCWF2cb1whd8BJld8uspzyh91E",
        badge: "Best Seller",
        category: "Tops"
    },
    {
        id: 5,
        name: "Drill Oversized Hooded Jacket",
        price: "$340.00 USD",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCSQpU1cjEAqdsz_BvUi39LJpvdFXlY1X87g9x9XYyhevbt6OpO1AvavOjwU3htq5QvjDHpBb77FNtk47QTqFLyR4AziLIrtuwO2BCVPvsgud1-nC1Uy91vfCIe3WGhUryRuM3Ij9j-BETlAgr7xc08QkWq-9mwcSTQbP2rpwpHK-KLFeoOeZEH6nLJSu3E8omJNydjoUo797EbYQjkMwk6BRGDgFbVyD8MX0fPvNOH27QQaSsCLAAZSKt21gGkd8_X5-Tmzd1PWv8I",
        badge: "Best Seller",
        category: "Outerwear"
    },
    {
        id: 6,
        name: "HAVE Statement Slogan T-Shirt",
        price: "$99.00 USD",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB4AIHy7ZFstjQuF4hjvKBcU_b36RE-3x6iM8uoAGJ3OLob2w2TDeFvABbaUbs1PjntbJe8U3UOZ3unPVdJJig-qxEvvH48WZMt76Dy9RhvkCb6JRi4D2WK_DqJcBmLh-NR3FSEYjKd0z5Ka9G-XihpU3O4YR2vGVofMPtMkqsdYyxKANjWU76bbTDGHs9sg6CQ9dW7__58-xUY-lziGBXNikGNObTTlR281bN0EL-0Q5uebmiwPiqHqB07TKRYQI4X2u79wPx60bpT",
        badge: "Best Seller",
        category: "Tops"
    },
    {
        id: 7,
        name: "HAVE Essential T-Shirt",
        price: "$60.00 USD",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAIp9lEcLayDh1qt5lmE1ojp1ys0zLGV95XJb4V7pAxkW5-u2Cvd2mfq0uqTAcvECnhwKXWb9wx1M3oAvIxwMQBhQIVcKGeEHNXlIhGqzB_vgHphOQvBxDuM3dgnE4u2SzlmVeqFwigJJdJTfFmdSrmTKs9DBz_Ld67S54UBMN4bxsGWfeUZPaB93Rd1JJEA5ukh_L1_owp4ywX4W9ke5cdb3ppupugH9iuFDzaF-N2IoUuK_YfsGcQLB_rM4vMR0rWGyCdLIRUyR6B",
        category: "Tops"
    },
    {
        id: 8,
        name: "HAVE Checkered Zip Shirt",
        price: "$170.00 USD",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDis71VA1AjDBCJJETacmXYiaZFvTD5P8w-T9-BCg5x3f3u9ygv9BQWbOpyE2PBJ0Hdf-d4mPszD-2gEr4uEOM-D7YUxuiHhaL3oXVzC7pvqORqi76OnVWogtzRPdMi61KuAQyTOph-7b1ZRBOAnXo2ndKgJ2buGdAwr9m5cLyPktJEml8HZoG9dKBT7UMlJ63ZG9ne-OtQnI5fD3zRjNHezBY2X7Z3DQRRnniCKmcZd_lJiQntoVDdeFKlM1nHKRv1iyNPlAqX94w3",
        category: "Tops"
    },
    {
        id: 9,
        name: "Oblique Hooded Jacket",
        price: "$280.00 USD",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAiOq1vYa_iP538kzDx66JyZ9UwoOPdefL76K_roJIaFbHUbacDcr1yTP5hmgGqr9mj0OC9pAKoAAHC3Bscncn0AbCsP6mJIekM5Kowo89YvV3buiMUTNg7r5K5gYvT52CYir6EJid4BRUbJdUwBbxtSPZqnQMH54PYPy91MRIKkviTaJIkbOe_s19mgtu4R8LmG90lqgrXErY8Uv9inUzmqTI3JyUVfn-Z07XVZ2JzUEOq5qP2l6XR7XwNAohFvm_K3SF5DtadV0Sk",
        category: "Outerwear"
    },

    // New Top Products (Oversized T-Shirts)
    {
        id: 10,
        name: "Archive Heavyweight Oversized Tee",
        price: "$85.00 USD",
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1780&auto=format&fit=crop",
        category: "Tops",
        badge: "New"
    },
    {
        id: 11,
        name: "Washed Black Boxy Tee",
        price: "$75.00 USD",
        image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=1887&auto=format&fit=crop",
        category: "Tops"
    },
    {
        id: 12,
        name: "Raw Hem Grunge T-Shirt",
        price: "$80.00 USD",
        image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1964&auto=format&fit=crop",
        category: "Tops"
    },
    {
        id: 13,
        name: "Studio Vintage Wash Tee",
        price: "$70.00 USD",
        image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=2070&auto=format&fit=crop",
        category: "Tops"
    },
    {
        id: 14,
        name: "Graphic Street Oversized Tee",
        price: "$95.00 USD",
        image: "https://images.unsplash.com/photo-1503341338985-c0477be52513?q=80&w=2070&auto=format&fit=crop",
        category: "Tops",
        badge: "Trending"
    },

    // More Tops
    {
        id: 15,
        name: "Premium Loopback Sweatshirt",
        price: "$140.00 USD",
        image: "https://images.unsplash.com/photo-1614975058789-41316d0e2e9c?q=80&w=1887&auto=format&fit=crop",
        category: "Tops"
    },
    {
        id: 16,
        name: "Merino Wool Crew Sweater",
        price: "$180.00 USD",
        image: "https://images.unsplash.com/photo-1610652492500-ded49ceeb378?q=80&w=1887&auto=format&fit=crop",
        category: "Tops"
    },

    // Bottoms (Cargo, Baggy Jeans, Italian Pants)
    {
        id: 17,
        name: "Tactical Tech Cargo Pants",
        price: "$210.00 USD",
        image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?q=80&w=2073&auto=format&fit=crop",
        category: "Bottoms",
        badge: "New"
    },
    {
        id: 18,
        name: "Utility Relaxed Cargo",
        price: "$190.00 USD",
        image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=1844&auto=format&fit=crop",
        category: "Bottoms"
    },
    {
        id: 19,
        name: "90s Stone Wash Baggy Jeans",
        price: "$160.00 USD",
        image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1887&auto=format&fit=crop",
        category: "Bottoms",
        badge: "Hot"
    },
    {
        id: 20,
        name: "Milan Tailored Pleated Trousers",
        price: "$240.00 USD",
        image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?q=80&w=1887&auto=format&fit=crop",
        category: "Bottoms"
    },
    {
        id: 21,
        name: "Florence Slim Wool Trousers",
        price: "$260.00 USD",
        image: "https://images.unsplash.com/photo-1507680436348-3162fb165fa8?q=80&w=1887&auto=format&fit=crop",
        category: "Bottoms"
    }
];

export const bestSellers = products.filter(p => p.badge === "Best Seller");
export const newIn = products.filter(p => !p.badge);
