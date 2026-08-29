import Section from '@/layouts/Section'
import AccordionGroup from '@/components/AccordionGroup'
import Accordion from '@/components/Accordion'

export default () => {
  const questions = [
    'What type of photography do you specialize in?',
    'How can I book a photography session with you?',
    'What equipment do you use for your photography?',
    'Can I request a specific location for a ',
    'What is your editing process like?',
    'Are digital files included in your photography packages?',
    'Do you offer prints of your photographs?',
    'How long does it take to receive the edited photos after a session?',
  ]

  return (
    <Section
      className="questions"
      mode="compact"
      titleId="questions-title"
      subTitle="FAQ’s"
      title="Frequently Asked Questions"
      extraAttrs={{
        'data-js-questions': '',
      }}
    >
      <AccordionGroup
        columns={2}
        extraAttrs={{
          'data-js-questions-accordion-group': '',
        }}
      >
        {questions.map((question, index) => (
          <Accordion
            name="questions"
            isOpen={index === 0}
            id={`question-${index}`}
            title={question}
            key={index}
          >
            I specialize in [Portrait, Landscape, Event, etc.] photography,
            capturing moments that tell unique stories.
          </Accordion>
        ))}
      </AccordionGroup>
    </Section>
  )
}
