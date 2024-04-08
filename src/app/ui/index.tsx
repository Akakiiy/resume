import './index.scss';
import '../styles/index.scss';

import classNames from 'classnames';
import {motion, useAnimation} from 'framer-motion';
import React, {useCallback, useEffect, useRef, useState} from 'react'
import {pagesConfig} from "~shared/config/pagesConfig";
import {themeArrConfig} from '~shared/config/themeArrConfig';

export const App = () => {
  const [activeSection, setActiveSection] = useState(0);
  const isAnimationComplete = useRef(true);
  const controlsScrollAnimation = useAnimation();

  const handleWheel = useCallback((event: React.WheelEvent) => {
    if (!isAnimationComplete.current) {
      return;
    }

    const deltaY = event.deltaY;

    if (deltaY > 0 && activeSection < pagesConfig.length - 1) {
      setActiveSection((prev) => prev + 1);
      isAnimationComplete.current = false;
    } else if (deltaY < 0 && activeSection > 0) {
      setActiveSection((prev) => prev - 1);
      isAnimationComplete.current = false;
    }
  }, [activeSection]);

  useEffect(() => {
    (async () => {
      await controlsScrollAnimation.start({
        y: -activeSection * 100 + 'vh',
        transition: {
          duration: 0.6,
          ease: 'easeInOut'
        }
      });

      isAnimationComplete.current = true;
    })();
  }, [activeSection, controlsScrollAnimation]);

  return (
    <main
      className={classNames('App', themeArrConfig[activeSection])}
      onWheel={handleWheel}
    >
      <motion.section animate={controlsScrollAnimation}>
        {pagesConfig.map(({id, pageNode}) => React.cloneElement(pageNode, {key: id}))}
      </motion.section>
    </main>
  );
};
