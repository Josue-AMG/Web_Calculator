
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

export const Calculator = () => {
  const [inputValue, setInputValue] = useState('');
  const [primvs, setPrimvs] = useState(0);
  const [operacion, setOperacion] = useState('');

  const handleNumberClick = (number) => {
    setInputValue((prevValue) => prevValue + number);
  };

  const handleOperationClick = (operation) => {
    setOperacion(operation);
    setPrimvs(parseInt(inputValue));
    setInputValue('');
  };

  const handleEqualClick = () => {
    const v2s = parseInt(inputValue);
    let resul;
    switch (operacion) {
      case '+':
        resul = primvs + v2s;
        break;
      case '-':
        resul = primvs - v2s;
        break;
      case '*':
        resul = primvs * v2s;
        break;
      case '/':
        resul = primvs / v2s;
        break;
      default:
        resul = primvs;
    }
    setInputValue(resul.toString());
    setPrimvs(resul);
    setOperacion('');
  };

  const handleClearClick = () => {
    setInputValue('');
  };

  return (
<>
    <div id="cuerpo">
      <input type="text" id="textbox" value={inputValue} readOnly />

      <table>
        <tbody>
          <tr>
            <td>
              <button id="btn1" onClick={() => handleNumberClick('1')}>
                1
              </button>
            </td>
            <td>
              <button id="btn2" onClick={() => handleNumberClick('2')}>
                2
              </button>
            </td>
            <td>
              <button id="btn3" onClick={() => handleNumberClick('3')}>
                3
              </button>
            </td>
            <td>
              <button id="Limpiar" onClick={handleClearClick}>
                C
              </button>
            </td>
            <td>
              <button id="btnsuma" onClick={() => handleOperationClick('+')}>
                +
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button id="btn4" onClick={() => handleNumberClick('4')}>
                4
              </button>
            </td>
            <td>
              <button id="btn5" onClick={() => handleNumberClick('5')}>
                5
              </button>
            </td>
            <td>
              <button id="btn6" onClick={() => handleNumberClick('6')}>
                6
              </button>
            </td>
            <td>
              <button id="btnres" onClick={() => handleOperationClick('-')}>
                -
              </button>
            </td>
            <td>
              <button id="btndivi" onClick={() => handleOperationClick('/')}>
                /
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button id="btn7" onClick={() => handleNumberClick('7')}>
                7
              </button>
            </td>
            <td>
              <button id="btn8" onClick={() => handleNumberClick('8')}>
                8
              </button>
            </td>
            <td>
              <button id="btn9" onClick={() => handleNumberClick('9')}>
                9
              </button>
            </td>
            <td>
              <button id="btn00" onClick={() => handleNumberClick('00')}>
                0
              </button>
            </td>
            <td>
              <button id="btnmulti" onClick={() => handleOperationClick('*')}>
                *
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div>
        <table>
          <tbody>
            <tr>
              <td>
                <button id="btn0" onClick={() => handleNumberClick('00')}>
                  00
                </button>
              </td>
              <td>
                <button id="btnigual" onClick={handleEqualClick}>
                  =
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </>
  );
};

ReactDOM.createRoot(document.getElementById('app')).render(<Calculator />);
