import React from "react";
import "./symptoms.css";
import { VscDebugBreakpointLog } from "react-icons/vsc";

const Symptoms = () => {
  return (
    <section id="symptoms" className="container">
      <div className="container-symptoms-container">
        <h2>Symptoms of Endometriosis</h2>
        <article className="symptoms_details">
          <VscDebugBreakpointLog className="symptoms_details-icon" />
          <h3>
            Pelvic, abdominal or lower back pain that can worsen during your
            period
          </h3>
        </article>
        <article className="symptoms_details">
          <VscDebugBreakpointLog className="symptoms_details-icon" />
          <h3>
            Pain during your period that effects your ability to do normal
            activities
          </h3>
        </article>
        <article className="symptoms_details">
          <VscDebugBreakpointLog className="symptoms_details-icon" />
          <h3>Pain during or after sexual intercourse</h3>
        </article>
        <article className="symptoms_details">
          <VscDebugBreakpointLog className="symptoms_details-icon" />
          <h3>Difficulty getting pregnant</h3>
        </article>
        <article className="symptoms_details">
          <VscDebugBreakpointLog className="symptoms_details-icon" />
          <h3>Pain during bowel movements</h3>
        </article>
        <article className="symptoms_details">
          <VscDebugBreakpointLog className="symptoms_details-icon" />
          <h3>
            Nausea, bloating, constipation, diarrhoea or blood in your urine or
            bowel movements during your period
          </h3>
        </article>
        <article className="symptoms_details">
          <VscDebugBreakpointLog className="symptoms_details-icon" />
          <h3>
            Menorrhagia - excessive or prolonged bleeding during your period
          </h3>
        </article>
        <article className="symptoms_details">
          <VscDebugBreakpointLog className="symptoms_details-icon" />
          <h3>Spotting or bleeding between menstural periods</h3>
        </article>
        <article className="symptoms_details">
          <VscDebugBreakpointLog className="symptoms_details-icon" />
          <h3>Fatigue or low energy</h3>
        </article>
        <article className="symptoms_details">
          <VscDebugBreakpointLog className="symptoms_details-icon" />
          <h3>Loss of dark blood or clots before your period</h3>
        </article>
      </div>
      <div className="symptoms-disclosure">
        <h5>
          Each of the symptoms mentioned may be caused by other conditions and
          not necessarily be Endometriosis symptoms. It is important to
          therefore seek medical advice to clarify the symptoms cause.
        </h5>
      </div>
    </section>
  );
};

export default Symptoms;
