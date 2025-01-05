import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/ui/accordion"
export default function Notice(){
    return(
        <>
        <Accordion type="single" collapsible className="w-full py-4 px-16">
              <AccordionItem value="item-1" className="border-slate-400/50">
                <AccordionTrigger><span className="text-red-700 underline italic">Assignment Deadline Updated</span></AccordionTrigger>
                <AccordionContent>
                  <span className="text-red-700 font-bold p-1">!NOTE</span>
                  <span>Assignment deadline updated to 'January 10, 2025'</span>
                </AccordionContent>
              </AccordionItem >
              <AccordionItem value="item-2" className="border-slate-400/50">
                <AccordionTrigger className="text-green-500" >Examination Results Released</AccordionTrigger>
                <AccordionContent>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border-slate-400/50">
                <AccordionTrigger className="text-blue-700">Assignment Received - Subject 1</AccordionTrigger>
                <AccordionContent>
                  Assignment Received
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="border-slate-400/50">
                <AccordionTrigger className="text-blue-700">Assignment Received - Subject 2</AccordionTrigger>
                <AccordionContent>
                  Assignment Received.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
        </>
    )
}

