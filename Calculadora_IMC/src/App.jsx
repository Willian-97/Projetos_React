import { data } from './data/data'

import { useState } from 'react'

import ImcCalc from './components/ImcCalc'
import ImcTable from './components/ImcTable'

import './App.css'

function App() {
  const calcImc = (e, heigth, weigth) => {
    e.preventDefault()

    if (!weigth || !heigth) return

    const weightFloat = +weigth.replace(',', '.')
    const heightFloat = +heigth.replace(',', '.')

    const imcResult = (weightFloat / (heightFloat * heightFloat)).toFixed(1)

    setImc(imcResult);

    data.forEach((item) => {
      if (imcResult >= item.min && imcResult <= item.max) {
        setInfo(item.info)
        setInfoClass(item.infoClass)
      }
    })

    if (!info) return
  }

  const resetCalc = (e) => {
    e.preventDefault()

    setImc('')
    setInfo('')
    setInfoClass('')
  }

  const [imc, setImc] = useState('')
  const [info, setInfo] = useState('')
  const [infoClass, setInfoClass] = useState('')


  return (
    <div className='container'>
      {!imc ?
        (<ImcCalc calcImc={calcImc} />)
        :
        (<ImcTable
          data={data}
          imc={imc}
          info={info}
          infoClass={infoClass}
          resetCalc={resetCalc} />
        )}
    </div>
  )
}

export default App
