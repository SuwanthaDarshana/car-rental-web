import React from "react";
import { homeCarsStyles as styles } from "../assets/dummyStyles";
import carsData from "../assets/carsData";
import { Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";

function HomeCars() {
  const navigate = useNavigate();
  const


  const visibleCars = carsData.slice(0, 6);

  return (
    <div className={styles.container}>
      {/*Header*/}

      <div className={styles.headerContainer}>
        <div className={styles.premiumBadge}>
          <Zap className="h-4 w-4 text-amber-400 mr-2" />
          <span className={styles.premiumText}>Premium Cars</span>
        </div>
        <h1 className={styles.title}>Explore Our Premium Collection</h1>
        <p className={styles.subtitle}>
          Discover the finest selection of luxury and high-performance vehicles
          available for rent.
        </p>

        {/*Cars Grid*/}

        <div className={styles.grid}>
          {visibleCars.map((car, idx) => {
            const patternStyle =
              styles.cardPatterns[idx % styles.cardPatterns.length];
            const borderStyle =
              styles.borderGradients[idx % styles.borderGradients.length];
            const shapeStyle =
              styles.cardShapes[idx % styles.cardShapes.length];
            return (
              <div
                key={car.id}
                onMouseEnter={() => setHoveredCard(car.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`${
                  styles.card
                } ${patternStyle} border ${borderStyle} ${
                  animateCards ? "opacity-100" : "opacity-0 translate-y-10"
                } hover:shadow-2xl hover:-translate-y-3`}
                style={{
                  clipPath:
                    "polygon(0% 15%, 15% 0%, 100% 0%, 100% 85%, 85% 100%, 0% 100%)",
                  transformStyle: "preserve-3d",
                  transitionDelay: `${animateCards ? idx * 100 : 0}ms`,
                }}
              >
                ₹
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default HomeCars;
