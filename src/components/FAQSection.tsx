import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";

export const FAQSection = () => {
  return (
    <Card className="p-6 neo-blur">
      <h2 className="text-2xl font-semibold mb-6 text-gradient">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="space-y-4">
        <AccordionItem value="item-1" className="border-white/10">
          <AccordionTrigger className="text-white hover:text-white/80">What is cryptocurrency?</AccordionTrigger>
          <AccordionContent className="text-white/70">
            Cryptocurrency is a digital or virtual form of currency that uses cryptography for security, making it difficult to counterfeit. It operates on decentralized networks based on blockchain technology.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className="border-white/10">
          <AccordionTrigger className="text-white hover:text-white/80">How do cryptocurrency prices work?</AccordionTrigger>
          <AccordionContent className="text-white/70">
            Cryptocurrency prices are determined by supply and demand on exchanges. Factors affecting prices include market sentiment, adoption rates, regulatory news, and technological developments.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3" className="border-white/10">
          <AccordionTrigger className="text-white hover:text-white/80">What affects crypto market trends?</AccordionTrigger>
          <AccordionContent className="text-white/70">
            Market trends are influenced by various factors including global economic conditions, regulatory changes, technological advancements, institutional adoption, and market sentiment.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Card>
  );
};