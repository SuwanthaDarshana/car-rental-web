import React from "react";
import { testimonialStyles as styles } from "../assets/dummyStyles";
import testimonials from "../assets/TestimonialData";
import { FaCar } from "react-icons/fa";
import { GiSteeringWheel } from "react-icons/gi";

function Testimonial() {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.headerContainer}>
          <div className={styles.badge}>
            <FaCar className={`${styles.quoteIcon} mr-2`} />
            <span className={styles.badgeText}>Customer Experiences</span>
          </div>
          <h1 className={styles.title}>
            Premium <span className={styles.accentText}>Drive</span>Experiences
          </h1>
          <div className={styles.dividerContainer}>
            <div className={styles.dividerLine} />
            <GiSteeringWheel
              className={`${styles.accentText} mx-4`}
              size={24}
            />
            <div className={styles.dividerLine} />
          </div>
          <p className={styles.subtitle}>
            Hear from our satisfied customers who have experienced the thrill of
            driving with us.
          </p>
          {/* Testimonials Grid */}
          <div className={styles.grid}>
            {testimonials.map((t, index) => {
              const shape = styles.cardShapes[index % styles.cardShapes.length];
              const IconComponent = styles.icons[index % styles.icons.length];
              return (
                <div
                  key={t.id}
                  className={styles.card}
                  style={{
                    clipPath:
                      "polygon(0% 10%, 10% 0%, 100% 0%, 100% 90%, 90% 100%, 0% 100%)",
                    background:
                      "linear-gradient(145deg, rgba(30,30,40,0.8), rgba(20,20,30,0.8))",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(100,100,120,0.2)",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                    /*boxShadow: "0 10px 30px rgba(0,0,0,0.3)", */
                  }}
                ></div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
