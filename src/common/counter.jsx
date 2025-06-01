import React from "react";
import Count from "./count";

// counter_text
const counter_text = [
  {
    id: 1,
    color: "blue-hard",
    counter: 2000,
    text: "Monthly Production Capacity",
    suffix: "+",
  },
  {
    id: 2,
    color: "pink-hard",
    counter: 99,
    text: "On-Time Delivery Rate",
    suffix: "%",
  },
  {
    id: 3,
    color: "sky-hard",
    counter: 120,
    text: "Types of Industrial Chemicals",
    suffix: "+",
  },
  {
    id: 4,
    color: "green-hard",
    counter: 100,
    text: "Industry Certified",
    suffix: "%",
  },
];

const Counter = ({ cls = "pt-40 pb-100" }) => {
  return (
    <>
      <section className={`counter-area ${cls}`}>
        <div className="container">
          <div className="row">
            {counter_text.map((item) => (
              <div key={item.id} className="col-xl-3 col-md-6">
                <div
                  className="counter__item blue-border mb-30 wow fadeInUp"
                  data-wow-delay=".2s"
                >
                  <div className={`counter__icon ${item.color} mb-15`}>
                    <i></i>
                  </div>
                  <div className="counter__content">
                    <h4 className="counter__title">
                      <span className="counter-inline">
                        <Count number={item.counter} />
                        <span className="counter-suffix">{item.suffix}</span>
                      </span>
                    </h4>
                    <p>{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inline style or move to your CSS file */}
      <style jsx>{`
        .counter-inline {
          display: inline-flex;
          align-items: baseline;
          font-size: inherit;
        }

        .counter-suffix {
          margin-left: 2px;
          font-size: 0.9em;
          line-height: 1;
        }
      `}</style>
    </>
  );
};

export default Counter;
