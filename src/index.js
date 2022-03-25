import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'

const App = () => {
    const estiloBotao = {
        marginTop: 12,
        paddingTop: 8,
        paddingBottom: 8,
        backgroundColor: 'blueviolet',
        color: 'white',
        border: 'none',
        width: '100%',
        borderRadius: 8
    }
    const textoDoRotulo = 'Nome'
    const obterTextoBotao = () => "Enviar"
    // const obterTextoBotaocomReturn = () => {
    //     return "Enviar"
    // }
    return( 
        <div style={{margin: 'auto', width: 768, backgroundColor:
        '#EEE', padding: 12, boderRadius: 8}}>
            <label className="rotulo" htmlFor="nome" style={{display: 'block', marginBottom: 4}}>{textoDoRotulo}</label>
        <input id="nome" type="text" style={{paddingTop: 8, paddingBottom: 8, borderStyle: 'hidden', width: '100%',
        borderRadius: 8, outline: 'none'}}></input>
        <button style={estiloBotao}>{obterTextoBotao()}</button>
        
        </div>
    )
}

ReactDOM.render( 
    <App />,
    //document.ElementById('root') pelo id
    document.querySelector('#root') // por vários seletores
)