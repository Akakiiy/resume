import './index.scss'

import {useInView} from 'framer-motion'
import {memo, useEffect, useRef} from 'react'
import {MainTitle} from "~shared/ui/MainTitle";


export const ContactPage = memo(() => {

  const refIsInView = useRef(null)
  const isInView = useInView(refIsInView)

  useEffect(() => {

  }, [isInView])

  return (
    <section className='ContactPage page'>
      <h1>
        <MainTitle>
          ContactPage
        </MainTitle>
      </h1>

      <h2>
        <MainTitle>
          ContactPage
        </MainTitle>
      </h2>

      <h3>
        <MainTitle>
          ContactPage
        </MainTitle>
      </h3>
      <MainTitle>
        ContactPage
      </MainTitle>
      <MainTitle>
        ContactPage
      </MainTitle>
      <MainTitle>
        ContactPage
      </MainTitle>
      <MainTitle>
        ContactPage
      </MainTitle>
      <MainTitle>
        ContactPage
      </MainTitle>
    </section>
  )
})
