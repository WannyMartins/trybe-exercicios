import React from "react";

class Endereco extends React.Component {
  render() {
      const { handleChange, onBlurHandler  } = this.props
    return (
      <div>
        <label htmlFor="endereco">
          Endereço:
          <input
            type="text"
            name="endereco"
            id="endereco"
            className="endereco"
            maxLength="200"
            required
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="cidade">
          Cidade:
          <input
            type="text"
            name="cidade"
            id="cidade"
            className="cidade"
            maxLength="28"
            required
            onChange={ handleChange }
            onBlurHandler={ onBlurHandler }
          />
        </label>
        <label htmlFor="estado">
          Estado:
          <select 
            name="estado" 
            id="estado" 
            className="estado" 
            required             
            onChange={ handleChange }
            >
            <option value="selecione">Selecione</option>
            <option value="AC">AC</option>
            <option value="AL">AL</option>
            <option value="AM">AM</option>
            <option value="AP">AP</option>
            <option value="BA">BA</option>
            <option value="CE">CE</option>
            <option value="DF">DF</option>
            <option value="ES">ES</option>
            <option value="GO">GO</option>
            <option value="MA">MA</option>
            <option value="MG">MG</option>
            <option value="MS">MS</option>
            <option value="MT">MT</option>
            <option value="PA">PA</option>
            <option value="PB">PB</option>
            <option value="PE">PE</option>
            <option value="PI">PI</option>
            <option value="PR">PR</option>
            <option value="RJ">RJ</option>
            <option value="RS">RS</option>
            <option value="RO">RO</option>
            <option value="RN">RN</option>
            <option value="RR">RR</option>
            <option value="SC">SC</option>
            <option value="SP">SP</option>
            <option value="SE">SE</option>
            <option value="TO">TO</option>
          </select>
        </label>
        <div className="container">
          <label htmlFor="casa">
            <input 
                type="radio" 
                id="casa" 
                name="addressType" 
                value="casa" 
                onChange={ handleChange }
                checked
                />
            Casa
          </label>
          <label htmlFor="aparatamento">
            <input
              type="radio"
              id="aparatamento"
              name="addressType"
              value="aparatamento"
              onChange={ handleChange }
            />
            Apartamento
          </label>
        </div>
      </div>
    );
  }
}

export default Endereco;
