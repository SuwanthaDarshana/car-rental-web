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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
