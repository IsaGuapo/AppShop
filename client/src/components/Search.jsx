import React, {useState} from 'react';

const Search = () => {

    const [valueInput, setValueInput] = useState("");
    const [error, setError] = useState(false);

    //para manejar el envio del fomulario
    const handelSubmit=(e) => {
        e.preventDefault();

    }

    //validacion del formulario
    // if (valueInput === ''){
    //     setError(true)
    //     return;
    // }
   

    return (
        <section className='d-flex flex-row mb-5'>
            <form className="d-flex col-md-8"
            onSubmit={handelSubmit}>
                <input className="me-sm-2 col-md-6 " type="text" placeholder="Buscar producto" 
                onChange={e => setValueInput(e.target.value)}/>
                <button className="btn btn-secondary my-2 my-sm-0 col-md-2" type="submit">Buscar</button>
            </form>
            {/* {error ? <p>ERROR</p> : null}  */}
        </section> 
       
    )
}

export default Search

