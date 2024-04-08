import type {ReactElement} from 'react'
import {AboutPage} from '~pages/about'
import {ContactPage} from '~pages/contact';
import {MainPage} from '~pages/main'
import {WorkPage} from "~pages/work";


export enum AppSections {
  MAIN = 'main',
  ABOUT = 'about',
  WORK = 'work',
  CONTACT = 'contact'
}

export const pagesConfig: PagesConfigType = [
  {
    id: AppSections.MAIN,
    pageNode: <MainPage/>
  },
  {
    id: AppSections.ABOUT,
    pageNode: <AboutPage/>
  },
  {
    id: AppSections.WORK,
    pageNode: <WorkPage/>
  },
  {
    id: AppSections.CONTACT,
    pageNode: <ContactPage/>
  }
]

export type PagesConfigType = Array<{ id: AppSections, pageNode: ReactElement }>
