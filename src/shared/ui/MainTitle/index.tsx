import './index.scss'

import { motion, useAnimation, useInView } from 'framer-motion'
import type { ReactNode } from 'react'
import { memo, useEffect, useRef } from 'react'

type MainTitleProps = {
  children: ReactNode,
  width?: 'fit-content' | '100%'
}

export const MainTitle = memo(({ children, width = 'fit-content' }: MainTitleProps) => {
  const animationRef = useRef(null)
  const isInView = useInView(animationRef, { once: true })

  const mainControls = useAnimation()
  const slideControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible')
      slideControls.start('visible')
    }
  }, [isInView])

  return (
    <div
      className='MainTitle-container'
      style={{ width }}
      ref={animationRef}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 }
        }}
        initial='hidden'
        animate={mainControls}
        transition={{
          duration: 0.5,
          delay: 0.25
        }}
      >
        {children}
      </motion.div>
      <motion.div
        className='MainTitle-slider'
        variants={{
          hidden: { left: 0 },
          visible: { left: '100%' }
        }}
        initial='hidden'
        animate={slideControls}
        transition={{
          duration: 0.5,
          ease: 'easeIn'
        }}
      />
    </div>
  )
})
