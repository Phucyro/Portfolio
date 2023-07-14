import { useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";
import { distance } from "@popmotion/popcorn";

import { styles } from "../styles";
import { technologies } from "../constants";
import { zoomIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const grid = [
  technologies.slice(0,5),
  technologies.slice(5,10),
  technologies.slice(10,15),
  technologies.slice(15,20),
  technologies.slice(20,25),
];

const size = 73;
const gap = 3;

const TechCard = ({ active, setActive, colIndex, rowIndex, x, y, technology }) => {
  const isDragging = colIndex === active.col && rowIndex === active.row;
  const diagonalIndex = (360 / 6) * (colIndex + rowIndex);
  const d = distance(
    { x: active.col, y: active.row },
    { x: colIndex, y: rowIndex }
  );
  const springConfig = {
    stiffness: Math.max(700 - d * 120, 0),
    damping: 20 + d * 5,
  };
  const dx = useSpring(x, springConfig);
  const dy = useSpring(y, springConfig);

  return (
    <motion.div
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      dragTransition={{ bounceStiffness: 300, bounceDamping: 20 }}
      dragElastic={1}
      onDragStart={() => setActive({ row: rowIndex, col: colIndex })}
      style={{
        background: `hsla(calc(var(--base-hue) + ${diagonalIndex}), 80%, 60%, 1)`,
        width: size,
        height: size,
        top: rowIndex * (size + 8*gap),
        left: colIndex * (size + gap),
        position: "absolute",
        borderRadius: "50%",
        x: isDragging ? x : dx,
        y: isDragging ? y : dy,
        zIndex: isDragging ? 1 : 0,
      }}
    >
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: '100%', pointerEvents: 'none' }}>
        <img src={technology.icon} alt={technology.name} style={{ maxWidth: '70%', maxHeight: '70%' }}/>
      </div>
      <div style={{ position: "absolute", bottom: -18, width: '100%', textAlign: 'center', color: 'white', fontSize: '0.75em', fontWeight: 'bolder', pointerEvents: 'none' }}>{technology.name}</div>
    </motion.div>
  );
};

const Tech = () => {
  const [active, setActive] = useState({ row: -1, col: -1 });
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  return (
    <div className="tech-section">
      <motion.div variants={textVariant()} className="section-header">
        <p className={`${styles.sectionSubText} text-center`}>IT Knowledge</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Technologies</h2>
      </motion.div>

      <div className="app">
        <motion.div
          animate={{ "--base-hue": 360 }}
          initial={{ "--base-hue": 0 }}
          transition={{ duration: 10, loop: Infinity, ease: "linear" }}
          style={{ width: "100%", height: "100%" }}
        >
          <motion.div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: (size + gap) * 5 - gap,
              height: (size + gap) * grid.length * 1.3,
              margin: "0 auto",
              marginTop: "2rem",
              position: "relative",
              perspective: "500"
            }}
            variants={zoomIn(1,1)}
          >
            {grid.map((row, rowIndex) => (
              <div
                key={rowIndex}
                style={{ display: "flex", justifyContent: "center" }}
              >
                {row.map((technology, colIndex) => (
                  <TechCard
                    x={x}
                    y={y}
                    active={active}
                    setActive={setActive}
                    rowIndex={rowIndex}
                    colIndex={colIndex}
                    key={colIndex}
                    technology={technology}
                  />
                ))}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "tech");
