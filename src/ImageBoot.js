import 'bootstrap/dist/css/bootstrap.css';
import React from 'react'; // Import React
import school from './images/bg.png';
import './style.css';

function ImageBoot() {
  
  // const schoolName = "PIONEER ACADEMY SCHOOL";
  // const words = schoolName.split(' ');

  // const nameSpans = words.flatMap((word, wordIndex) =>
  //   [...word].map((letter, letterIndex) => (
  //     <span
  //       className="school-name"
  //       key={`${wordIndex}-${letterIndex}`}
  //       style={{ animationDelay: `${wordIndex * 0.9 + letterIndex * 0.2}s` }}
  //     >
  //       {letter}
  //     </span>
  //   ))
  // );

  return (
    <div className="App">
      <div className="home">
        <div className="content">
          <div className="school-name-container">
            <div class="school-name">PIONEER ACADEMY SCHOOLl</div>

            {/* {nameSpans}  */}
          </div>
          <h1>We are making every child's world better.</h1>
          <button>Contact us</button>
        </div>
      </div>
    </div>
  );
}

export default ImageBoot;
