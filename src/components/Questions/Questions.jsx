import { Accordion, AccordionContent, AccordionPanel, AccordionTitle } from "flowbite-react";
export default function Questions() {
  return <>
  
  <section className="pb-36 xs:max-xl:mx-5" id="Questions">
        <div className="container mx-auto">
          <div className="pb-16">
            <h1 className="font-bold text-3xl text-white mb-4">Frequently Asked Questions</h1>
            <p className="text-sm text-paragraf" >Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe.</p>
          </div>
          <div className="container grid grid-cols-1 lg:grid-cols-2 gap-14 lg:max-xl:gap-5">
            <Accordion className="border-none" id="Questions">
              <AccordionPanel >
                <AccordionTitle className="bg-inherit focus:ring-transparent hover:bg-transparent text-white pb-5 text-xl">
                  <span className="w-10 text-center p-2 mr-2 rounded-lg text-lg inline-block" style={{ backgroundColor: "#1F1F1F", borderColor: "#1F1F1F", borderWidth: "2px" }}>01</span>
                  What is StreamVibe?
                </AccordionTitle>
                <AccordionContent className="hover:bg-transparent border-none py-0 pb-5">
                  <p className="mb-2 text-paragraf" >
                    StreamVibe is a streaming service that allows you to watch movies and shows on demand.
                  </p>

                </AccordionContent>
              </AccordionPanel>

              <AccordionPanel >
                <AccordionTitle className="bg-inherit focus:ring-transparent hover:bg-transparent text-white pb-5 text-xl">
                  <span className="w-10 text-center p-2 mr-2 rounded-lg text-lg inline-block" style={{ backgroundColor: "#1F1F1F", borderColor: "#1F1F1F", borderWidth: "2px" }}>02</span>
                  How much does StreamVibe cost?
                </AccordionTitle>
                <AccordionContent className="hover:bg-transparent border-none py-0 pb-5" >
                  <p className="mb-2 text-paragraf" >
                    StreamVibe offers multiple subscription plans starting from $9.99/month, with access to all movies and shows. Pricing may vary based on the selected plan.


                  </p>

                </AccordionContent>
              </AccordionPanel>

              <AccordionPanel >
                <AccordionTitle className="bg-inherit focus:ring-transparent hover:bg-transparent text-white pb-5 text-xl">
                  <span className="w-10 text-center p-2 mr-2 rounded-lg text-lg inline-block" style={{ backgroundColor: "#1F1F1F", borderColor: "#1F1F1F", borderWidth: "2px" }}>03</span>
                  What content is available on StreamVibe?
                </AccordionTitle>
                <AccordionContent className="hover:bg-transparent border-none  py-0 pb-5">
                  <p className="mb-2 text-paragraf" >
                    StreamVibe provides a wide range of content including the latest movies, popular TV shows, exclusive originals, and content across various genres like action, drama, comedy, and more.


                  </p>

                </AccordionContent>
              </AccordionPanel>
            </Accordion>

            <Accordion className="border-none sm:max-lg:hidden">
              <AccordionPanel >
                <AccordionTitle className="bg-inherit focus:ring-transparent hover:bg-transparent text-white pb-5 text-xl">
                  <span className="w-10 text-center p-2 mr-2 rounded-lg text-lg inline-block" style={{ backgroundColor: "#1F1F1F", borderColor: "#1F1F1F", borderWidth: "2px" }}>04</span>
                  What is the StreamVibe free trial?
                </AccordionTitle>
                <AccordionContent className="hover:bg-transparent border-none py-0 pb-5">
                  <p className="mb-2 text-paragraf" >
                    StreamVibe offers a 7-day free trial that gives you full access to all features, movies, and shows without any limitations. You can cancel anytime during the trial with no charges.</p>

                </AccordionContent>
              </AccordionPanel>

              <AccordionPanel >
                <AccordionTitle className="bg-inherit focus:ring-transparent hover:bg-transparent text-white pb-5 text-xl">
                  <span className="w-10 text-center p-2 mr-2 rounded-lg text-lg inline-block" style={{ backgroundColor: "#1F1F1F", borderColor: "#1F1F1F", borderWidth: "2px" }}>05</span>
                  How do I contact StreamVibe customer support?
                </AccordionTitle>
                <AccordionContent className="hover:bg-transparent border-none py-0 pb-5">
                  <p className="mb-2 text-paragraf" >
                    You can contact StreamVibe customer support through the 'Contact Us' page on the website or via email at support@streamvibe.com. Support is available 24/7 to assist you.
                  </p>

                </AccordionContent>
              </AccordionPanel>

              <AccordionPanel >
                <AccordionTitle className="bg-inherit focus:ring-transparent hover:bg-transparent text-white pb-5 text-xl">
                  <span className="w-10 text-center p-2 mr-2 rounded-lg text-lg inline-block" style={{ backgroundColor: "#1F1F1F", borderColor: "#1F1F1F", borderWidth: "2px" }}>06</span>
                  What content is available on StreamVibe?
                </AccordionTitle>
                <AccordionContent className="hover:bg-transparent border-none py-0 pb-5">
                  <p className="mb-2 text-paragraf" >
                    StreamVibe accepts various payment methods including credit/debit cards (Visa, MasterCard, American Express), PayPal, and selected digital wallets for a smooth and secure checkout.
                  </p>

                </AccordionContent>
              </AccordionPanel>
            </Accordion>
          </div>
        </div>
      </section>
  </>
}
