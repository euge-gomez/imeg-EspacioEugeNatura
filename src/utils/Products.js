
const Productos = [
    {
        id: 1,
        title: "Agua Micelar Chronos",
        img: ['https://http2.mlstatic.com/D_NQ_NP_2X_989175-MLA43386144327_092020-F.webp'],
        descrip: "El Agua Micelar Purificante une la eficacia de un desmaquillante a la suavidad y pureza del agua, removiendo hasta 98% del maquillaje, sin necesidad de enjuagar o frotar. Elimina las partículas de polución, residuos de suciedad y oleosidad, y mantiene la piel hidratada hasta por 8 horas.",
        quantity: '150 ml',
        price: 1500,
        stock: 6,
        categoryId: 2,
        category: {
            name: 'Belleza',
            id: 2
        }
    },
    {
        id: 2,
        title: "Deo Roll On Todo día Invisible",
        img: ['https://http2.mlstatic.com/D_NQ_NP_2X_898567-MLA43734882585_102020-F.webp'],
        descrip: "Invisible sin perfume. Complejo vitaminico e hidratante con Vitamina E. Protección prolongada, protección por 48hs contra los efectos del sudor. No deja residuos blancos en los tejidos oscuros, ni manchas amarillentas en los tejidos blancos",
        quantity: '70 ml',
        price: 400,
        stock: 2,
        categoryId: 3,
        category: {
            name: 'Cuidados Diarios',
            id: 3
        }
    },
    {
        id: 3,
        title: "Deo Spray Humor Propio",
        img: ['https://http2.mlstatic.com/D_NQ_NP_2X_797740-MLA47768051901_102021-F.webp'],
        descrip: "Desodorante femenino 100% vegetal y más fragancia. Puede ser utilizado en todo el cuerpo y reaplicado a lo largo del día. El frasco transparente permite saber cuándo el producto se está acabando. Posee una traba en la tapa, lo que lo hace ideal para llevar en la cartera o mochila, ya que no se derrama.",
        quantity: "70 ml",
        price: 300,
        stock: 3,
        categoryId: 3,
        category: {
            name: 'Cuidados Diarios',
            id: 3
        }
    },
    {
        id: 4,
        title: "Hidratante corporal Todo día Hoja de Limón y Guanabana",
        img: ['https://http2.mlstatic.com/D_NQ_NP_2X_787775-MLA42298733137_062020-F.webp'],
        descrip: " Nutrición personalizada pues repone los nutrientes según las necesidades de cada tipo de piel. Piel saludable en todas sus capas. Fácil de aplicar y rápida absorción. Sentí tu cuerpo con Tododia. Una combinación equilibrada de ingredientes naturales con acción prebiótica que alimenta y fortalece la microbiota de la piel, nuestra primera barrera protectora.",
        quantity: "400 ml",
        price: 1000,
        stock: 1,
        categoryId: 3,
        category: {
            name: 'Cuidados Diarios',
            id: 3
        }
    },
    {
        id: 5,
        title: "Hidratante corporal Todo día Mora Roja y Jabuticaba",
        img: ['https://http2.mlstatic.com/D_NQ_NP_2X_905432-MLA49012149753_022022-F.webp'],
        descrip: " Nutrición personalizada pues repone los nutrientes según las necesidades de cada tipo de piel. Piel saludable en todas sus capas. Fácil de aplicar y rápida absorción. Sentí tu cuerpo con Tododia. Una combinación equilibrada de ingredientes naturales con acción prebiótica que alimenta y fortalece la microbiota de la piel, nuestra primera barrera protectora.",
        quantity: "400 ml",
        price: 1000,
        stock: 3,
        categoryId: 3,
        category: {
            name: 'Cuidados Diarios',
            id: 3
        }
    },
];

export default Productos;
