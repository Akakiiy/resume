import {MainTitle} from '~shared/ui/MainTitle'
import './index.scss'

import {memo} from 'react'

export const AboutPage = memo(() => {
  return (
    <section className='AboutPage page'>
      <h1>
        <MainTitle>
          AboutPage
        </MainTitle>
      </h1>
      <h2>
        <MainTitle>
          AboutPage
        </MainTitle>
      </h2>
      <h3>
        <MainTitle>
          AboutPage
        </MainTitle>
      </h3>
    </section>
  )
})
