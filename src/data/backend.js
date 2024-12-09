const plantas = [
    {
        id: 1,
        model: "Suculenta #48",
        price: 28000,
        img: '/items/suculentan48-600x600.jpg',
        description: 'Nombre científico: Senecio spp La mayoría de los Senecios son plantas pequeñas, perfectas como coberturas en jardines o macetas. Le gustan los climas cálidos aunque algunas especies soportan breves periodos de frío o humedad. Requieren espacios muy bien iluminados.'
    },
    {
        id: 2,
        model: "Suculenta Rosa #59",
        price: 28000,
        img: '/items/suculenta-108-600x600.jpg',
        description: 'Nombre científico: Sedum nussbaumerianum Suculenta con hojas de color amarillo verdoso a rojo cobrizo. Sus tallos color marrón-rojizo sostienen las rosetas. Forma pequeñas flores fragantes de color blanco puro en forma de estrella. Prefiere los suelos ligeros, con buen drenaje.'
    },
    {
        id: 1,
        model: "Suculenta #34",
        price: 28.000,
        img: '/items/suculenta57-600x600.jpg',
        description: 'Generalidades y Cuidados: Las plantas suculentas son aquellas en las que algún órgano o parte se ha modificado para permitir el almacenamiento de agua en grandes cantidades.  Esta adaptación les permite mantener reservas de agua durante periodos prolongados y sobrevivir en entornos muy áridos y secos. Se encuentran entre las plantas suculentas las crasulas, los agaves, los sempervivum, los aeonium, las echeveria entre muchas otras. Estas plantas prefieren la luz natural. Funcionan bien  en  interiores  cerca de una ventana o en habitaciones bien iluminadas. Si están en el exterior pueden estar en espacios sin sol directo pero donde encuentren buena cantidad de luz indirecta. Se desarrollan vienen un sustrato mezclado con tierra y arena o con piedras porosas que permitan un buen drenaje.    El sustrato debe mantenerse relativamente seco y se debe controlar el riego para evitar encharcamientos y pudriciones.'
    },
]

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(plantas);
            reject("Error en la solicitud: no es posible acceder a la base de datos")
        }, 1000);
    });
}

export const getProduct = (id) => {
    return plantas.find((prod) => prod.id == id);
}