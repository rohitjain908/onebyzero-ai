import Header from "./header";
import "../styles/home.css";
import Testimonail from "./testimonial";
import Footer from "./footer";

function Home() {
  return (
    <div>
      <div className=" bg-blue-200 w-full home-top-container">
        <div>&nbsp;</div>
        {/* Header */}
        <div className=" justify-center flex top-4">
          <div className=" w-[85%] mx-auto fixed z-[1]">
            {" "}
            <Header />
          </div>
        </div>
        {/* Header */}

        <div className="mb-[129px] font-medium leading-[90px] text-[90px]  text-[#070D4A] w-2/3 mt-[290px] ml-[99px] tracking-[-.2rem]">
          Unleash your data, unchain your growth and unlock new opportunities
        </div>
        <div>&nbsp;</div>
      </div>

      <div className="rest-container">
        <div>&nbsp;</div>
        <div className="w-[82%] mx-auto">
          {/* description section */}
          <div className="mt-[67px] flex gap-14 text-[18px] font-normal font-['Roobert'] leading-[21.6px]">
            <div>
              OnebyZero empowers businesses with cutting-edge Data and AI
              solutions by delivering unparalleled value, innovation, and domain
              expertise.{" "}
            </div>
            <div>
              We blend strategy, technology, data powered insights and iterative
              decision optimization to take enterprises to infinity and beyond.
            </div>
            <div>
              <ul className=" list-item list-disc">
                <li>
                  Deep expertise in Data Platforms, Machine Learning &
                  Artificial Intelligence
                </li>
                <li>
                  Cut through the Generative AI chatter and make it work for you
                </li>
                <li>Unique experimentation & exploitation philosophy</li>
              </ul>
            </div>
          </div>
          {/* description section */}

          {/* Unique combination section */}
          <div className="mt-[215px]">
            <div className="w-[71%] text-[48px] leading-[57.6px] font-medium">
              Unique combination of solutions & services in Generative AI, ML,
              Data & Customer Experience{" "}
            </div>
            <div className="w-[60%] mt-6">
              <div>
                -- that can all some together to help you take advantage of your
                data and better engage with your customers
              </div>
              <div>
                -- with a special focus in the Asia-Pacific region, supported by
                a super-talented local and global team
              </div>
            </div>
            <button className="flex py-[10px] px-4 rounded-md border-[1px] mt-12 justify-center border-[#000000] contact-button">
              <div>Contact Sales</div>
              <img
                src="/images/home/arrow.png"
                alt="Contact Saled"
                className="w-5 ml-2 leading-3"
              />
            </button>
          </div>
          {/* Unique combination section */}

          {/* pre-built solution */}
          <div className="mt-[94px] p-[33px] flex gap-9 bg-white rounded-[20px] font-['Roobert'] leading-[48px]">
            <div className="flex items-center w-[37%]">
              <div className=" px-[28px]">
                <div className=" text-[48px] font-medium">
                  Our pre-built solutions help you get off-the-ground quickly
                </div>
                <div className="w-[75%] mt-9 text-[18px] leading-[21.6px]">
                  Solutions in the spaces of enterprise search,
                  question-answering & analytics, customer data platforms, and
                  customer experience, messaging and chatbots
                </div>
              </div>
            </div>

            <div className="w-[60%] ml-7">
              <div className="py-9">
                {/* <div className="p-[10px] flex relative">
                  <img
                    src="/images/home/solution/frame1.png"
                    alt="frame1"
                    className="w-full h-full"
                  />
                  <img
                    src="/images/home/solution/frame3.png"
                    alt="frame1"
                    className="ml-[34px] w-[67px] h-[67px] top-[40%] right-[5%] absolute"
                  />
                  <img
                    src="/images/home/solution/frame1.png"
                    alt="frame1"
                    className="ml-[34px] w-full h-full"
                  />
                </div> */}
                <img
                  src="/images/home/solution/frame4.png"
                  alt="frame4"
                  className=""
                />
              </div>

              <div className="flex justify-center gap-4 py-5 px-[10px]">
                <button className="h-[10px] w-[10px] bg-black rounded-[100px] block"></button>
                <button className="h-[10px] w-[10px] border-[#000000] border-[0.6px] rounded-[100px] block"></button>
                <button className="h-[10px] w-[10px] border-[#000000] border-[0.6px] rounded-[100px] block"></button>
                <button className="h-[10px] w-[10px] border-[#000000] border-[0.6px] rounded-[100px] block"></button>
              </div>
            </div>
          </div>
          {/* pre-built solution */}

          {/* deep industry */}
          <div className="mt-[32px] p-[33px] flex gap-9 bg-white rounded-[20px] font-['Roobert'] leading-[48px]">
            <div className="flex items-center w-[37%]">
              <div className=" px-[28px]">
                <div className=" text-[48px] font-medium">
                  Our deep industry experience and technical expertise help
                  drive measurable business outcomes
                </div>
                <div className="w-[75%] mt-9 text-[18px] leading-[21.6px]">
                  We take a metrics-driven approach in all our consulting
                  services engagements, across various kinds of AI, Data,
                  Martech and Customer engagement projects
                </div>
              </div>
            </div>

            <div className="w-[60%] ml-7">
              <div className="py-9">
                <img
                  src="/images/home/solution/frame5.png"
                  alt="frame4"
                  className=""
                />
              </div>

              <div className="flex justify-center gap-4 py-5 px-[10px]">
                <button className="h-[10px] w-[10px] bg-black rounded-[100px] block"></button>
                <button className="h-[10px] w-[10px] border-[#000000] border-[0.6px] rounded-[100px] block"></button>
                <button className="h-[10px] w-[10px] border-[#000000] border-[0.6px] rounded-[100px] block"></button>
                <button className="h-[10px] w-[10px] border-[#000000] border-[0.6px] rounded-[100px] block"></button>
              </div>
            </div>
          </div>
          {/* deep industry */}
        </div>

        {/* black container */}
        <div className="mt-[150px] enterprise-container">
          <div>&nsbp;</div>
          <div className="w-[82%] text-[48px] text-[#EDEEF3] mt-[70px] mx-auto">
            Enterprise AI. Redefined.
          </div>
          <div className="w-[82%] flex gap-10 mx-auto mb-[150px] mt-[158px]">
            <div className="w-[82%] py-[87px] px-[48px] bg-white rounded-lg">
              <div className=" text-[24px] font-medium leading-[28px]">
                Deploy Generative AI applications that provide immediate value
              </div>
              <div className="mt-6 text-[18px] leading-[21.6px]">
                OneByZero has significant experience in exploiting generative AI
                for enterprise search, natural language queries,
                question-answering, summarization, personalization, content
                generation and chatbot use-cases.
              </div>
            </div>

            <div className="w-[82%] py-[87px] px-[48px] bg-white rounded-lg">
              <div className=" text-[24px] font-medium leading-[28px]">
                Lay a modern data foundation to power AI/ML use-cases
              </div>
              <div className="mt-6 text-[18px] leading-[21.6px]">
                OneByZero will help you deploy a modern data stack, with
                specific focus on data quality, governance, security,
                performance and flexibility, that can be the foundation for BI,
                ML and AI use-cases across the enterprise.
              </div>
            </div>

            <div className="w-[82%] py-[87px] px-[48px] bg-white rounded-lg">
              <div className=" text-[24px] font-medium leading-[28px]">
                Enhance customer experience across all channels
              </div>
              <div className="mt-6 text-[18px] leading-[21.6px]">
                OneByZero has a variety of assets and experience around
                personalization, next-best action and omni-channel messaging
                use-cases that can drive customer acquisition, engagement and
                retention.
              </div>
            </div>
          </div>
          <div>&nsbp;</div>
        </div>
        {/* black container */}

        {/* About us */}
        <div className="achievement-container">
          <div className="invisible">&nsbp;</div>
          <div className="w-[62%] mt-[150px] ml-[130px]">
            <div className="text-[48px] font-medium leading-[57px]">
              Let’s talk about how we can supercharge your business.
            </div>

            <button className="flex py-[10px] px-4 bg-white rounded-md border-[1px] mt-12 justify-center contact-button">
              <div>Contact Sales</div>
              <img
                src="/images/home/arrow.png"
                alt="Contact Saled"
                className="w-5 ml-2 leading-3"
              />
            </button>
          </div>
          {/* <div className=" mb-[200px]">have to put some images here</div> */}
          <div className="mb-[50px]">
            <Testimonail />
          </div>

          <div>&nbsp;</div>
        </div>
        {/* About us */}

        {/* Footer */}
        <Footer />
        {/* Footer */}
      </div>
    </div>
  );
}

export default Home;
