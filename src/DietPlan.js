import './DietPlan.css';
import React, { useRef } from 'react';

function DietPlan() {
  const wtlossRef = useRef(null);
  const muscleRef = useRef(null);
  const cardioRef = useRef(null);
  const diabetesRef = useRef(null);
  const gastritisRef = useRef(null);

  const scrollToRef = (ref) => {
    window.scrollTo({ top: ref.current.offsetTop, behavior: 'smooth' });
  };

  return (
    <div className='DiettPlan'>
      <br></br><br></br><h1>DIET PLANS</h1>
      <div className='container'>
        <div className='btn-container'>
            <button onClick={() => scrollToRef(wtlossRef)}>WEIGHT LOSS</button><br></br>
            <button onClick={() => scrollToRef(muscleRef)}>MUSCLE GAIN</button><br></br>
            <button onClick={() => scrollToRef(cardioRef)}>CARDIAC</button><br></br>
            <button onClick={() => scrollToRef(diabetesRef)}>DIABETES</button><br></br>
            <button onClick={() => scrollToRef(gastritisRef)}>GASTRITIS</button><br></br>
        </div>
        <div className='img-container'>
            <img className='img1' id='img1' src="Diet.jpg" />
        </div>
      </div>

      <div>
        <h1 id="wtloss" ref={wtlossRef}>WEIGHT LOSS</h1>
        <div className="wtloss">
           <img src='wtloss.png'></img>
        </div>

        <h1 id="cardio" ref={cardioRef}>CARDIO</h1>
           <div className="cardio">
        <img src='cardio.jpg'></img>
        </div>

        <h1 id="muscle" ref={muscleRef}>MUSCLE GAIN</h1>
        <div className="muscle">
           <img src='muscle.jpg'></img>
        </div>

        <h1 id="diabetes" ref={diabetesRef}>DIABETES</h1>
        <div className="diabetes">
           <img src='diabetes.jpg'></img>
        </div>

        <h1 id="gastritis" ref={gastritisRef}>GASTRITIS</h1>
        <div className="gastritis">
           <img src='wtloss.png'></img>
        </div>
      </div>
    </div>
  );
}

export default DietPlan;
