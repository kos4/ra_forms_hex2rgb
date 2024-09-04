import './App.css';
import {hex2rgb} from "./functions";
import {useState} from "react";

export default function App() {
  let [rgb, setRgb] = useState('');
  const handlerChange = event => {
    const element = event.target;
    let {value} = element;

    if (value.length > 6) {
      value = value.slice(0, 7);
      element.value = value;
      rgb = hex2rgb(value);

      if (rgb) {
        document.body.style.backgroundColor = rgb;
      } else {
        rgb = 'Ошибка';
      }

      setRgb(rgb);
    }
  };

  return (
    <form className="form" action="">
      <input className="form__input" type="text" name="hex" onChange={handlerChange}/>
      <div className="form__result">{rgb}</div>
    </form>
  );
}
