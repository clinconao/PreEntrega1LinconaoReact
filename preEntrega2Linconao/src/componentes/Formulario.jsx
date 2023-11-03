import { useState } from "react"

const Formulario = () => {
    const [formData, setFormData] = useState({
        nombre:'',
        correo:''
    })

    const handleOnChange = (evt) => {
        console.log('nombre del input: ', evt.target.name)
        console.log('valor del input: ', evt.target.value)
    }

    return (
    <form>
        <input 
        type="text" 
        name='nombre' 
        placeholder="ingrese el nombre"
        value={formData.nombre} 
        onChange={handleOnChange}
        />

        <input 
        type="text" 
        name="email" 
        placeholder="ingrese el email"
        value={formData.correo} 
        onChange={handleOnChange}
        />
        <button>Enviar</button>
    </form>
    )
}

export default Formulario