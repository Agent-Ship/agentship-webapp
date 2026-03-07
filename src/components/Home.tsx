import { Hero } from './Hero'
import { ValueProps } from './ValueProps'
import { QuickStart } from './QuickStart'
import { HowItWorks } from './HowItWorks'
import { Compatibility } from './Compatibility'
import { Community } from './Community'

export function Home() {
  return (
    <>
      <Hero />
      <ValueProps />
      <QuickStart />
      <HowItWorks />
      <Compatibility />
      <Community />
    </>
  )
}
