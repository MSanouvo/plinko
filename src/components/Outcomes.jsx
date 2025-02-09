import { useState } from "react";
import "../styles/outcomes.css";

function Outcomes({ setData }) {
  const [form, setForm] = useState(false);
  const [outcomes, setOutcomes] = useState([]);
  const [text, setText] = useState("");

  const handleClick = () => {
    setForm(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() != "") {
      const textArray = text.split("\n").slice(0, 5);
      setOutcomes(textArray);
      setData(textArray);
    } else{
        setOutcomes([])
        setData([])
        setText("")
    }
    setForm(false);
  };

  const onChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div id="outcomes-container">
      <h1 className="header">Outcomes</h1>
      <div id="outcomes-content">
        <ol id="list">
          {outcomes.length != 0 ? (
            outcomes.map((item, index) => {
              return <li key={index}>{item}</li>;
            })
          ) : (
            <div >Add your outcomes below (5 max)</div>
          )}
        </ol>
        {form === true ? (
          <form id="form" onSubmit={handleSubmit}>
            <label className="form-label">List Outcomes</label>
            <textarea
              className="form-text"
              name="form-text"
              value={text}
              onChange={onChange}
              rows={7}
              cols={30}
              placeholder="Input desired outcomes here. Each new line will count as a new entry. (currently limited to 5 max)"
            ></textarea>
            <button className="form-buttons" type="submit">
              Submit
            </button>
          </form>
        ) : (
          <div className="open-form">
            <button className="form-buttons" onClick={handleClick}>
              Add Outcome
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Outcomes;
