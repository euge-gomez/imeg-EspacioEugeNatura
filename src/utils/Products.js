
const Productos = [
    {
        id: 13,
        title: "Máscara Facial Exfoliante Faces",
        img: ['https://http2.mlstatic.com/D_NQ_NP_2X_946990-MLA48113026482_112021-F.webp'],
        descrip: "Beneficio: reduce poros, controla el brillo y la oleosidad. Faces presenta la mascarilla facial exfoliante con ácido salicílico y fórmula Oil Free que reduce inmediatamente los poros, el brillo y la oleosidad de la piel. Para disfrutar de la calle con una piel suave, renovada y sin brillo. Para quién está enfocado: Para quienes quieran lucir una piel suave y renovada.",
        quantity: "50 ml",
        price: 400,
        stock: 1,
        categoryId: 6,
        category: {
            name: 'Faces',
            id: 6
        }
    },
    {
        id: 14,
        title: "Pulpa para Pies Ekos Castaña",
        img: ['https://http2.mlstatic.com/D_NQ_NP_2X_768547-MLA48235973691_112021-F.webp'],
        descrip: "Con aceite de castaña, esta pulpa hidratante para pies, de textura cremosa, promueve nutrición inmediata, intensa y prolongada en los pies y cutículas. Con rápida absorción deja la piel suave y delicadamente perfumada con una fragancia envolvente y acogedora. Beneficios. El óleo de castaña, rico en Omega-6 y Omega-9, nutre hasta las capas más profundas de la piel. Perfecto para quien le gusta la piel suave y con toque aterciopelado.",
        quantity: "75 g",
        price: 500,
        stock: 3,
        categoryId: 5,
        category: {
            name: 'Ekos',
            id: 5
        }
    },
    {
        id: 15,
        title: "Pulpa para Manos Ekos Castaña",
        img: ['https://http2.mlstatic.com/D_NQ_NP_2X_796904-MLA47151267380_082021-F.webp'],
        descrip: "Crema hidratante para manos y uñas, realimenta la estructura de la piel. Anti resequedad. Hidrata y potencia el brillo de las uñas. Tu piel regenerada. Producto vegano. 95% ingredientes de origen natural",
        quantity: "75 g",
        price: 500,
        stock: 3,
        categoryId: 5,
        category: {
            name: 'Ekos',
            id: 5
        }
    },
    {
        id: 16,
        title: "Perlas Bronceadoras UNA",
        img: ['https://http2.mlstatic.com/D_NQ_NP_619409-MLA47739693398_102021-O.webp'],
        descrip: "Las perlas efecto bronce resaltan el efecto iluminado y bronceado del sol de modo natural. Ayudan a unificar diferencias de color en el rostro y cuello. Beneficios: Con textura suave y delicada, las perlas efecto bronceado de Natura UNA proporcionan una apariencia saludable, iluminada y ligeramente broncada. Para quién está enfocado. Perfecto para quien quiera tener un efecto bronceado natural, una aparencia saludable y iluminada.",
        quantity: "24 g",
        price: 1500,
        stock: 3,
        categoryId: 4,
        category: {
            name: 'UNA',
            id: 4
        }
    },
    {
        id: 17,
        title: "Corrector Para Rostro Faces Medio 10",
        img: ['https://scontent.fcor10-4.fna.fbcdn.net/v/t1.6435-9/89466051_111097450509788_7442007258185072640_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeEr7RKHkn5DikqnoeWh8rNMRgwkKAIiHmZGDCQoAiIeZjHv7suSgTd6X1vZ5k5sKfw&_nc_ohc=qXi_Sv_U8EMAX8z7h5Z&_nc_ht=scontent.fcor10-4.fna&oh=00_AT-CoV-KC7A9pJU96NzQevFgK4-HphkQLIFlqvgqQRgWzA&oe=6283FDEF'],
        descrip: "Con fórmula de alta cobertura, que cubre ojeras, manchas e imperfecciones. Uniformiza el tono de la piel. Con vitamina E que tiene acción antioxidante.",
        quantity: "400 ml",
        price: 400,
        stock: 3,
        categoryId: 6,
        category: {
            name: 'Faces',
            id: 6
        }
    },
    {
        id: 18,
        title: "Lápiz Labial Matte Red Alert",
        img: ['https://http2.mlstatic.com/D_NQ_NP_2X_853148-MLA48737256316_012022-F.webp'],
        descrip: "Atrevete, expresate y creá con orgullo. El labial cremoso Natura Faces tiene colores vibrantes y aquella maravillosa textura extra cremosa que adorás. Su efecto cremoso permite una aplicación fácil, mientras mantiene los labios hidratados. Incluye un espejo en la tapa, que facilita su uso a cualquier hora y en cualquier lugar.",
        quantity: "3,5 g",
        price: 500,
        stock: 3,
        categoryId: 6,
        category: {
            name: 'Faces',
            id: 6
        }
    },
    {
        id: 19,
        title: "Labial Líquido Matte Vinho City",
        img: ['https://http2.mlstatic.com/D_NQ_NP_2X_668338-MLA44431325517_122020-F.webp'],
        descrip: "Cobertura cover up: cuantas más veces lo aplicás, mayor cobertura lográs. Podes usarlo tanto de día como de noche, ya que la intensidad del color se la das vos. Para quién está enfocado: Para quienes busquen lápices labiales con tonos vivos e intensos. ¡Un color para cualquier día y cualquier lugar!",
        quantity: "3,5 g",
        price: 250,
        stock: 2,
        categoryId: 6,
        category: {
            name: 'Faces',
            id: 6
        }
    },
    {
        id: 20,
        title: "Gloss Labial UNA Vermelho 100",
        img: ['https://http2.mlstatic.com/D_NQ_NP_2X_937958-MLA46324118488_062021-F.webp'],
        descrip: " Edición limitada. Brillo, protección y acción antiseñales. Protege e hidrata los labios. Con FPS 15. Con activos de la biodiverdidad brasilera. Enriquecido con la infusión de manteca bioactiva, que garantiza la restauración total de los labios. Con FPS 15. Labial Gloss UNA. Beneficios: cobertura media; brillo y protección con acción antioxidante; posee fps 15 para cuidar tus labios de los rayos solares. El labial posee activos de la biodiversidad brasilera, está enriquecido con la infusión de manteca bioactiva, que garantiza restauración total de los labios.",
        quantity: "8 ml",
        price: 700,
        stock: 1,
        categoryId: 4,
        category: {
            name: 'UNA',
            id: 4
        }
    },
    {
        id: 21,
        title: "Lápiz Larga Duración UNA Violeta",
        img: ['https://http2.mlstatic.com/D_NQ_NP_617525-MLA46999308892_082021-O.webp'],
        descrip: " Nutrición personalizada pues repone los nutrientes según las necesidades de cada tipo de piel. Piel saludable en todas sus capas. Fácil de aplicar y rápida absorción. Sentí tu cuerpo con Tododia. Una combinación equilibrada de ingredientes naturales con acción prebiótica que alimenta y fortalece la microbiota de la piel, nuestra primera barrera protectora.",
        quantity: "400 ml",
        price: 1000,
        stock: 3,
        categoryId: 4,
        category: {
            name: 'UNA',
            id: 4
        }
    },
];

export default Productos;
