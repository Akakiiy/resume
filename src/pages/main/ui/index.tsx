import './index.scss'

import {memo} from 'react'

import {MainTitle} from "~shared/ui/MainTitle";


export const MainPage = memo(() => {
  return (
    <section className='MainPage page'>
      <h1>
        <MainTitle>
          Главная страница
        </MainTitle>
      </h1>

      <h2>
        <MainTitle>
          --color-typo-secondary h2
        </MainTitle>
        <MainTitle>
          какой то русский текст
        </MainTitle>
      </h2>
    </section>
  )
})
