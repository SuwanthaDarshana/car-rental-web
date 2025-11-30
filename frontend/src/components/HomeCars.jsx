import React from "react";
import { homeCarsStyles as styles } from "../assets/dummyStyles";
import carsData from "../assets/carsData";
import { Zap } from 'lucide-react';

function HomeCars() {
  return (
    <div className={styles.container}>
      {/*Header*/}

      <div className={styles.headerContainer}>
        <div className={styles.premiumBadge}>
            <Zap className="h-4 w-4 text-amber-400 mr-2"/>
            <span className={styles.premiumText}>Premium Cars</span>
        </div>
        <h1 className={styles.}></h1>
      </div>
    </div>
  );
}

export default HomeCars;
