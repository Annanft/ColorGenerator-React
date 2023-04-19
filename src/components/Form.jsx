import React, { useState } from 'react';

const Form = ({ addColor }) => {
  const [color, setColor] = useState('#FF6000');
  const handleSubmit = (e) => {
    e.preventDefault();
    addColor(color);
  };
  return (
    <section className="container">
      <h4>Color Generator</h4>
      <form onSubmit={handleSubmit} className="color-form">
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <input
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          placeholder='#FF6000'
        />
        <button className="btn" style={{ background: color }}>
          Submit
        </button>
      </form>
    </section>
  );
};

export default Form;
