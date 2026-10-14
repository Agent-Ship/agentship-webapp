import { Hero } from './Hero'
import { ValueProps } from './ValueProps'
import { RecipeCards } from './RecipeCards'
import { Architecture } from './Architecture'
import { HowItWorks } from './HowItWorks'
import { Compatibility } from './Compatibility'
import { QuickStart } from './QuickStart'
import { Community } from './Community'

export function Home() {
  return (
    <>
      <Hero />
      <ValueProps />
      <RecipeCards />
      <Architecture />
      <HowItWorks />
      <Compatibility />
      <QuickStart />
      <Community />
    </>
  )
}
