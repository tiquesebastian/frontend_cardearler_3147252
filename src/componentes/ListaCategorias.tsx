import axios from 'axios';
import React,{useState , useEffect}from 'react'

export default function ListaCategorias() {

    const [brands, setBrands] = useState([]);

    useEffect(() => {
        // definir funcion para traer datos desde el backend
        async function traerMarcas() {
            //traer response desde el backend
            const response = await axios.get("http://localhost:3010/localidad")
            //alamacenar los datos en el estado
            setBrands(response.data)
            
        }
        // llamar a la funcion
        traerMarcas()
    }, [])

    
  return (

    <>
    <h1>ListaCategorias</h1>
    <table>
        <thead>
            <tr>
                <th>id</th>
                <th>name</th>
            </tr>
        </thead>
        <tbody>
            { brands.map( ( b:any ) => ( 
                <tr>
                    <td>{ b.id }</td>
                    <td>{ b.nombre_localidad }</td>
                </tr>
             )) }
        </tbody>
    </table>
    </>

  )
}





