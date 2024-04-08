import {MainTitle} from '~shared/ui/MainTitle'
import './index.scss'

import {memo} from 'react'

export const WorkPage = memo(() => {
  return (
    <section className='WorkPage page'>
      <h1>
        <MainTitle>
          WorkPage
        </MainTitle>
      </h1>

      <h2>
        <MainTitle>
          WorkPage
        </MainTitle>
      </h2>

      <h3>
        <MainTitle>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad animi, beatae corporis ducimus ea ex ipsa
          molestias necessitatibus nesciunt nihil nisi odit quam quidem quisquam reiciendis repellendus similique
          voluptatum.
        </MainTitle>
      </h3>
    </section>
  )
})
