import { useState } from 'react'

import Button from './button'

import './ImcCalc.css'

const ImcCalc = ({ calcImc }) => {
    const [heigth, setHeight] = useState('')
    const [weigth, setWeight] = useState('')


    const clearForm = (e) => {
        e.preventDefault()
        setHeight('')
        setWeight('')
    }

    const validDigits = (text) => {
        return text.replace(/[^0-9,]/g, '')
    }

    const handleHeightChange = (e) => {
        const updateValue = validDigits(e.target.value)

        setHeight(updateValue)
    }

    const handleWeightChange = (e) => {
        const updateValue = validDigits(e.target.value)

        setWeight(updateValue)
    }

    return (
        <div>
            <div id="calc-container">
                <h2>Calculadora de IMC</h2>
                <form id="imc-form">
                    <div className="form-inputs">
                        <div className="form-control">
                            <label htmlFor="heigth">Altura:</label>
                            <input
                                type="text"
                                name="height"
                                id="height"
                                placeholder='Exemplo 1,75'
                                onChange={(e) => handleHeightChange(e)}
                                value={heigth}
                            />
                        </div>
                        <div className="form-control">
                            <label htmlFor="weight">Peso:</label>
                            <input
                                type="text"
                                name="weight"
                                id="weight"
                                placeholder='Exemplo 70.5'
                                onChange={(e) => handleWeightChange(e)}
                                value={weigth}
                            />
                        </div>
                    </div>
                    <div className='action-control'>
                        <Button id='calc-btn' text='Calcular' action={(e) => calcImc(e, heigth, weigth)} />
                        <Button id='clear-btn' text='Limpar' action={clearForm} />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ImcCalc