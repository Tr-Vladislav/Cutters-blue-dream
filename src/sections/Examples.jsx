import React, { useState } from 'react';
import '../css/Examples.css';
import { examples } from '../data/examples.js';

function ExampleCard({ item }) {
  const [sliderValue, setSliderValue] = useState(50);

  return (
    <div className="example-card">
      <div className="image-container">
        <img
          src={item.before}
          alt="До"
          className="before"
          style={{
            clipPath: `inset(0  0 0 ${sliderValue}%)`
          }}
        />
        <img src={item.after} alt="После" className="after" />
        <div className="label-before">До</div>
        <div className="label-after">После</div>
        <div className="range-slider">
          <input
            type="range"
            min="0"
            max="100"
            value={sliderValue}
            onChange={(e) => setSliderValue(Number(e.target.value))}
          />
        </div>
      </div>
      <p className="caption">{item.caption}</p>
    </div>
  );
}

function Examples() {
  return (
    <section className="examples-section" id="examples">
      <h2 className="section-title">Примеры наших работ</h2>
      <div className="examples-grid">
        {examples.map((item, index) => (
          <ExampleCard key={index} item={item} />
        ))}
      </div>
    </section>
  );
}

export default Examples;
