import React from 'react'
import { testimonialStyles as styles  } from '../assets/dummyStyles'
import testimonials from '../assets/TestimonialData'

function Testimonial() {
  return (
    <div className={styles.container}>
        <div className={styles.innerContainer}>
            <div className={styles.headerContainer}>
                <div className={styles.badge}>
                    <FaCar className={`${styles.quoteIcon} mr-2`} />
                
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonial