import Dest from "./Dest";
import {Grid} from '@mui/material';

const Servicios=()=>{
     const Data = [
        {
            id:1,
            titulo:'ESTÁNDAR',
            precio:50000,
            imagen:'habitestandar.jpg',
            caracteristicas: [
        "30 m2 de superficie",
        "SMART TV FULL HD 43”",
        "Caja de Seguridad",
        "Aire acondicionado y calefacción",
        "Frigobar",
        "Teléfono",
        "Wi-Fi gratis",
        "Escritorio de trabajo",
        "Baño con bañera y ducha",
        "Pisos Flotantes",
        "Cargador USB",
        "No Fumadores",
      ],
        },
        {
            id:2,
            titulo:'SUPERIOR',
            precio:60000,
            imagen: 'superior.jpg',
            caracteristicas: [
        "30 m2 de superficie",
        "SMART TV FULL HD 43”",
        "Caja de Seguridad",
        "Aire acondicionado y calefacción con control individual",
        "Frigobar",
        "Teléfono",
        "Wi-Fi gratis",
        "Escritorio de trabajo",
        "Baños equipados con bañera, box de ducha, secador de cabello y amenities",
        "Pisos Flotantes",
        "Cargador USB",
        "No Fumadores",
      ],
        },
        {
            id:3,
            titulo:'EJECUTIVA',
            precio:75000,
            imagen: 'ejecutiva.jpg',
            caracteristicas: [
        "30 m2 de superficie",
        "SMART TV FULL HD 43”",
        "Caja de Seguridad",
        "Aire acondicionado y calefacción",
        "Frigobar",
        "Teléfono",
        "Wi-Fi gratis",
        "Escritorio de trabajo",
        "Baños equipados con bañera, box de ducha, secador de cabello y amenities",
        "Batas y Pantuflas",
        "Pisos Flotantes",
        "Cargador USB",
        "No Fumadores",
        "Cortesía con Dulces Regionales",
      ],
        },
        {
            id:4,
            titulo: 'SUITE EJECUTIVA',
            precio:90000,
            imagen:"suite_ejecutiva.jpg",
            caracteristicas: [
        "45 m2 de superficie",
        "SMART TV FULL HD 55”",
        "Caja de Seguridad",
        "Aire acondicionado y calefacción",
        "Frigobar",
        "Teléfono",
        "Wi-Fi gratis",
        "Escritorio de trabajo",
        "Amplio baño equipado con vanitorio doble, cabina de ducha, sanitarios compartimentados, secador de cabello y amenities diferenciales",
        "Batas y Pantuflas",
        "Delicias Regionales Cortesía del Chef",
        "Pisos Flotantes",
        "Cargador USB",
        "No Fumadores",
      ],
        },
        {
            id:5,
            titulo: 'SUITE PRESIDENCIAL DELUXE',
            precio: 108000,
            imagen:'suite_presidencial.jpg',
            caracteristicas: [
        "80 m2 de superficie",
        "SMART TV FULL HD 55 y 65”",
        "Caja de Seguridad",
        "Aire acondicionado y calefacción con control individual",
        "Frigobar",
        "Teléfono",
        "Wi-Fi gratis",
        "Escritorio de trabajo",
        "Amplio baño equipado con vanitorio doble, hidromasaje, cabina de ducha, , secador de cabello y amenities diferenciales",
        "Batas y Pantuflas",
        "Vestidor", 
        "Sala de estar con mesa directorio",
        "Cafetera y Microondas",
        "Baño Complementario",
        "Living",
        "Pisos Flotantes",
        "Delicias Regionales Cortesía del Chef",
        "Cargador USB",
        "No Fumadores",
      ],
        }
    ]
    return (
        <>
        <h1>Habitaciones</h1>
        <Grid container spacing={3} justifyContent="center">    
            {Data.map((d)=>(
            <Grid item key ={d.id}>
              
                <Dest
                key={d.id}
                titulo = {d.titulo}
                precio = {d.precio}
                imagen = {d.imagen}

                caracteristicas={d.caracteristicas}
                />
                </Grid>
            ))
            }
            </Grid>
         
        </>
    )

}
export default Servicios;