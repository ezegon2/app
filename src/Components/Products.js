import dryginrestinga from './img/Drygin-min.jpg'
import restingaOtoño from './img/otoño-min.jpg'
import restingaFlavoured from './img/flavoured-min.jpg'
import restingaLemongrass from './img/lemongrass-min.jpg'
import branca from './img/branca-min.jpg'
import buhero from './img/buhero-min.jpg'
import blueLabel from './img/blue-label-min.jpg'
import royal from './img/royal-min.jpg'
import trumpeter from './img/trumpeter-min.jpg'
import caro from './img/caro-min.jpg'
const products = [
    {
        id: 1,
        name: "Dry Gin Restinga",
        price: "$1.650",
        stock: 5,
        description:'Presentamos nuestro London Dry Gin en su Clásica botella rediseñada de 700ml. Recientemente Ganador de la Medalla de Oro en una de las competencia  mas reconocidas del Mundo: San Francisco world Spirits 2021.Restinga es un gin Marplatense Premium. Del estilo London Dry Gin. Su alcohol es producido artesanalmente fruto de la fermentación de la malta cebada. Sus ingredientes se buscaron en las zonas aledañas, especialmente cerca de las Sierra de los Padres donde las tierras hacen de los cultivos naturales excelentes botánicos. En la nariz, enebro y floral, con notas de pimienta, piel de limón, pomelo rosado, pomelo rojo y kinoto. El aroma tiene un dejo costero donde predominan los cítricos. Los sabores aromáticos cobran vida en el paladar, y las notas de enebro se complementan con un toque de laurel y cardamomo. Esta combinación entrega una elegante experiencia de fresco sabor que redondea la sensación de sabor el ligero toque de sal marina.',
        image: dryginrestinga,
    },
    {
        id: 2,
        name: "Restinga Destilado de Otoño edicion Botanica",
        price: "$2.100",
        stock: 3,
        description:'Destilado de Otoño de Restinga Gin es el segundo lanzamiento de las 4 ediciones limitadas de Estación en Nuevo Envase de 700ml. En este caso, además de estar destilado con enebro de la Patagonia Argentina y piel de limón; está macerado en Arándanos, flor de Hibiscus y cedrón. Es un gin rosado, muy fácil de tomar y se pueden percibir muy fácilmente los aromas de la flor china y el cedrón.',
        image: restingaOtoño 
    },
    {
        id: 3,
        name: "Restinga Flavored Edition",
        price: "$2.450",
        stock: 4,
        description:'Restinga Flavored Edition es el primer lanzamiento de las 4 ediciones de Estación especiales que tenemos durante el año. En este caso, y para la edición de verano además de estar destilado con los 9 botánicos utilizados en el Restinga tradicional; está macerado con piezas de mango glaseado, piezas de ananá glaseada, pétalos de rosa, pétalos de naranja y té inglés. Es un gin amable, muy fácil de tomar gracias al dulzor que le da la fruta glaseada y en aroma se puede percibir los cítricos de base y el té inglés.lavored edition',
        image: restingaFlavoured 
    },
    {
        id: 4,
        name: "Restinga Lemongrass botella de ceramica",
        price: "$2.630",
        stock: 2,
        description:'London Dry Gin tradicional de Restinga con Lemongrass natural, que potencia el sabor cítrico haciendo más alimonado y fresco el gin, ideal para los meses de calor.',
        image: restingaLemongrass 
    },
    {
        id: 5,
        name: "Fernet Branca",
        price: "$2.000",
        stock: 10,
        description:'Fernet-Branca es de color marrón claro con reflejos ámbar y desprende un aroma a menta que predomina sobre el resto de las hierbas con las que se elabora, aunque debajo de la menta se percibe pino, algunas notas florales y hasta caramelo.',
        image: branca,
        categoryId: '2' 
    },
    {
        id: 6,
        name: "Fernet Buhero",
        price: "$2.300",
        stock: 6,
        description:'Es una bebida alcohólica amarga del tipo amaro elaborada a partir de varios tipos de hierbas que son maceradas en alcohol de vino. Ingredientes: más de 20 botánicos de todas partes del mundo que son seleccionados, molidos y mezclados, para macerarse en alcohol.',
        image: buhero,
        categoryId: '2'  
    },
    {
        id: 7,
        name: "Trumpeter",
        price: "$3.500",
        stock: 5,
        description:'De un impactante color violeta. Nariz frutal destacando ciruelas, cerezas y notas florales que nos recuerdan a las violetas. Posee gran cuerpo y su vivaz estructura acentúa sus taninos intensos que se vuelven aterciopelados en el retrogusto.',
        image: trumpeter,
        categoryId: '1'  
    },
    {
        id: 8,
        name: "Caro",
        price: "$1.900",
        stock: 3,
        description:'Color rojo intenso y profundo, con sutiles reflejos púrpura. La nariz evoca agradables aromas de frutos rojos y negros, como grosella y grosella negra, seguidos de un final a menta y cedro. En boca se aprecian notas de vainilla, especias y moka',
        image: caro,
        categoryId: '1'  
    },
    {
        id: 9,
        name: "Blue Label",
        price: "$5.350",
        stock: 2,
        description:'Johnnie Walker Blue Label es una obra maestra inigualable. Es una mezcla exquisita hecha con algunos de los whiskies más raros y excepcionales de Escocia. Solo uno de cada diez mil barriles tiene la calidad exclusiva y el carácter para entregar el sabor insignia e inolvidable de Johnnie Walker Blue Label.',
        image: blueLabel,
        categoryId: '3'  
    },
    {
        id: 10,
        name: "Royal",
        price: "$10.000",
        stock: 3,
        description:'Crown Royal es el estandar de excelencia de un whiskey canadiense, tiene un color de cobre pálido con un aroma a manzana de caramelo. Una entrada suave conduce a un paladar más ligero con notas de caramelo débilmente afrutada',
        image: royal,
        categoryId: '3'  
    },
]

export default products