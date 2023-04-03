import React from 'react'
import './Form.css'

const Form = () => {
  return (
    <div className="form">
        <div className="background">
        <span className='name'>Թողնել Հարցում</span>
        </div>
<form>
    <div className="inputbox">
        <label htmlFor="">Անուն</label>
        <input type="text" />
    </div>
    <div className="inputbox">
        <label htmlFor="">Հեռախոսահամար</label>
        <input type="text" />
    </div>
    <div className="inputbox">
        <label htmlFor="">Էլ․ Հասցե *</label>
        <input type="text" />
    </div>
    <div className="inputbox">
        <label htmlFor="">Քաղաք *</label>
        <select name="city" id="city">
            <option value="Ընտրել">Ընտրել</option>
            <option value="armenia">armenia</option>
            <option value="armenia">armenia</option>
        </select>
    </div>
    <div className="inputbox">
        <label htmlFor="">Անձանց քանակ</label>
        <input type="number" />
    </div>
    <div className="inputbox">
        <label htmlFor="">Օրերի քանակ</label>
        <input type="number" />
    </div>
    <span>Հաղորդագրություն *</span>
    <textarea name="" id="" cols="30" rows="10"></textarea>
    <button className='btn' >Հաստատել</button>
</form>
    
    </div>
  )
}

export default Form