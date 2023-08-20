import "../styles/kuwago.css";
import Header from "./header";
import { useEffect, useState } from "react";
import Footer from "./footer";

function IntractiveCard({ img, title, description, id, setCardState }) {
  const circles = [0, 1, 2, 3].map((index) => {
    return id === index ? (
      <button
        className={`h-[10px] w-[10px] bg-black rounded-[100px] block ${
          index > 0 ? "mt-4" : "mt-0"
        }`}
        onClick={setCardState(index)}
      ></button>
    ) : (
      <button
        className={`h-[10px] w-[10px] border-[#000000] border-[0.6px] rounded-[100px] block ${
          index > 0 ? "mt-4" : "mt-0"
        }`}
        onClick={() => setCardState(index)}
      ></button>
    );
  });

  return (
    <div className="w-[82%] mt-[94px] flex mx-auto p-6 bg-white rounded-[20px]">
      <div className="w-[55%]">
        <img src={img} alt={title} className="w-full" />
      </div>
      <div className="w-[36%] pt-[47px] pl-[42px] pr-[24px] pb-[20px] flex items-center">
        <div>
          <div className="tracking-[3.69px] font-light  leading-[18px]">
            {title}
          </div>
          <div className="w-[75%] mt-[57px] font-normal leading-[21.6px]">
            {description}
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="61"
            height="62"
            viewBox="0 0 61 62"
            fill="none"
            className="mt-[57px]"
          >
            <path
              d="M36.3334 9.99015C40.115 12.4367 43.5282 12.6593 46.3517 12.0472C48.3931 11.6047 50.1519 10.7205 51.5491 9.89144C50.7201 11.2886 49.8358 13.0474 49.3933 15.0889C48.7813 17.9124 49.0038 21.3256 51.4504 25.1072L51.94 24.9912C49.6631 21.4718 49.4206 18.2447 50.0186 15.4856C50.6165 12.7276 52.0439 10.486 53.0338 8.94891L52.7423 8.69821L52.4916 8.40674C50.9545 9.39661 48.713 10.8241 45.955 11.4219C43.1958 12.02 39.9687 11.7775 36.4494 9.50058L36.3334 9.99015Z"
              fill="black"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M52.867 9.12455L8.02078 53.9707L7.47422 53.4242L52.3204 8.57798L52.867 9.12455Z"
              fill="black"
            />
          </svg>
        </div>
      </div>
      <div className="w-[9%] py-[20px] px-[10px] flex items-center justify-center">
        <div>{circles}</div>
      </div>
    </div>
  );
}

function FeaturedCard({ img, title, description }) {
  return (
    <div
      className="bg-white rounded-lg mx-auto p-[14px] transition-all ease-in-out duration-1000 transform translate-x-0
    "
    >
      <div className="flex justify-center">
        <img src={img} alt="img-1" />
      </div>

      <div className="mt-6 h-[190px]">
        <div className="text-[20px] font-medium tracking-[-0.4px]">{title}</div>
        <div className="mt-[10px] text-[16px] leading-[19px] mb-[20px] text-[#0D0E12] opacity-80">
          {description}
        </div>
      </div>
    </div>
  );
}

function Kuwago() {
  const [cardId, setCardId] = useState(0);
  const [img, setImg] = useState("/images/hoots/AWARENESS.png");
  const [title, setTitle] = useState("AWARENESS");
  const [description, setDescription] = useState(
    "Deliver educational messages, appointment reminders, or notifications to keep customers informed and engaged"
  );
  const data = [
    {
      img: "/images/kuwago/employees.png",
      title: "EMPLOYEE FAQS",
      description:
        "Provide quick answers to frequently asked questions from various sources.",
    },
    {
      img: "/images/kuwago/self-service.png",
      title: "SELF-SERVICE DATA ACCESS FOR A VARIETY OF ROLES",
      description:
        "Enable employees across different roles - developers, product managers, project managers, customer support, marketing, sales, data analysts, etc - to access data from multiple enterprise sources, thus improving productivity and reducing time to decisions. Also, reduces the load on specialized data teams or BI teams for ad-hoc data requests.",
    },
    {
      img: "/images/kuwago/nlp.png",
      title: "SPECIALIZED NLP FOR SQL GENERATION FOR BI USE-CASES",
      description:
        "Generate SQL for analytical queries on structured datasets; and communicate the answers using a combination of charts, natural language narratives and even data stories.",
    },
    {
      img: "/images/kuwago/customer.png",
      title: "CUSTOMER SUPPORT",
      description:
        "Search for and generate answers to customer questions or issues from internal sources. Can also support agents as they interact with customers.",
    },
  ];

  const featuredCardData = [
    {
      img: "/images/kuwago/MovingCards/img-1.png",
      title: "Agile team",
      description:
        "Reduce number of support personnel needed by allowing customers as well as employees search for answers to common questions",
    },
    {
      img: "/images/kuwago/MovingCards/img-2.png",
      title: "Boost productivity",
      description:
        "Improve productivity of developers, project managers and product managers by allowing rapid search across code, documentation and design docs",
    },
    {
      img: "/images/kuwago/MovingCards/img-3.png",
      title: "Faster teams",
      description:
        "Improve productivity of marketing and sales teams by allowing them to search for content created across different campaigns.",
    },
    {
      img: "/images/kuwago/MovingCards/img-4.png",
      title: "Customer Satisfaction",
      description:
        "Marketing department of a large insurance company was able to reduce the time it took them to analyze digital marketing performance datasets and iterate on campaigns once every 4 days, instead of every 2 weeks. ",
    },
    {
      img: "/images/kuwago/MovingCards/img-5.png",
      title: "Customer Satisfaction",
      description:
        "The customer value management department of a telecommunications company was able to allow access to 100s of employees to a massive multi-PB dataset and reduce the load on a small BI team for ad-hoc data requests. ",
    },
  ];

  const [featuredCardId, setFeaturedCardId] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFeaturedCardId((featuredCardId + 1) % 5);
    }, 3000);

    //Clearing the interval
    return () => clearInterval(interval);
  }, [featuredCardId]);

  const setCardState = (id) => {
    setCardId(id);
    setTitle(data[id].title);
    setImg(data[id].img);
    setDescription(data[id].description);
  };

  return (
    <>
      <div>
        {/* Top container */}
        <div className="kuwago-top-container ">
          <div>&nbsp;</div>
          {/* Header */}
          <div className=" justify-center flex mt-[20px] relative">
            <div className=" w-[85%] mx-auto fixed z-[1]">
              {" "}
              <Header />
            </div>
          </div>
          <div className=" mt-100 relative">
            <img
              src="/images/kuwago/hero-1.png"
              alt="hero-1"
              className="w-[20%] absolute right-[28%] mt-[156px]"
            />
            <img
              src="/images/kuwago/hero-2.png"
              alt="hero-1"
              className="w-[33%] absolute right-[6%] mt-[156px] top-[128px]"
            />
          </div>
          {/* Header */}
          <div className=" ml-20 flex">
            <div className="w-[40%] mt-[442px] mb-[119px]">
              <div className=" text-[#070D4A] font-light text-[52px] leading-[62px]">
                Enterprise search & question-answering that works!
              </div>
              <div className="mt-3">
                <span className="text-[#7E7E7E] font-[540] text-[18px]">
                  ONEBYZERO
                </span>
                <span className="ml-2 text-[#000000] font-[650] text-[17px]">
                  KUWAGO
                </span>
              </div>
            </div>

            {/* <div className="flex justify-center w-[42%] mt-[114px] ml-6 mb-[70px]">
            <img
              src="/images/hoots/frame1.png"
              alt="frame1"
              className="ml-20"
            />
          </div> */}
          </div>
        </div>
        {/* Top container */}

        {/* middle-container */}
        <div className="middle-container ">
          <div>&nbsp;</div>

          {/* Text container */}
          <div className="w-[82%] mt-[90px] flex mx-auto text-[#1E1E1E] text-[18px]">
            <div className="w-[36%]">
              Kuwago is a powerful search, query and question-answering
              framework over unstructured, semi-structured and structured
              enterprise datasets
            </div>
            <div className="w-[27%] ml-[98px]">
              Generative AI powered natural language query interface, with the
              ability to ability to customize the NLP for any given domain or
              enterprise or department,
            </div>
            <button className="ml-[80px] flex py-[10px] px-4 h-[40px] rounded-md justify-center contact-button">
              <div>Contact Sales</div>
              <img
                src="/images/home/arrow.png"
                alt="Contact Saled"
                className="w-5 ml-2 leading-3"
              />
            </button>
          </div>
          {/* Text container */}

          <div className="w-[82%] mx-auto mt-[215px]">
            <div className="w-[50%] text-[48px] font-medium leading-[57px] text-[#0D0E12]">
              Take your data to the next level with Kuwago
            </div>
            <div className="w-[55%] mt-6 text-[18px] font-normal leading-[21px]">
              Allows searches, questions and queries on a variety of enterprise
              sources such as file repositories, websites, data lakes, data
              warehouses, databases, wikis, chat systems, code repositories,
              ticketing systems, CRM systems and content management systems,
            </div>
          </div>

          <div>&nbsp;</div>

          {/* Intractive container */}

          <div className="mb-[140px]">
            {" "}
            <IntractiveCard
              img={img}
              title={title}
              description={description}
              id={cardId}
              setCardState={setCardState}
            />
          </div>

          {/* Intractive container */}
          <div>&nbsp;</div>
        </div>
        {/* middle-container */}

        {/* black container */}
        <div className="black-container">
          <div>&nbsp;</div>
          <div className="w-[82%] text-white mx-auto mt-[94px]">
            <div className="text-[48px] font-medium leading-[48px]">
              Why Kuwago?
            </div>
            <div className="w-[29%] mt-2 text-[18px] font-light leading-[21px]">
              Enterprises, today, use a myriad set of tools and applications.
              And as a result, data tends to be spread across all these tools
              and applications too. Kuwago uses generative AI to help solve this
              challenge by providing configurable natural language search,
              question-answering and summarization features across multiple
              enterprise datasets in a consistent manner.
            </div>
          </div>

          <div className="w-[80%] flex mx-auto mt-[100px] mb-[71px]">
            <div className="w-[60%]">
              <div className="px-3 pt-[13px] pb-9 bg-[#2c2c2c] rounded-[6px]">
                <img
                  src="/images/kuwago/powered-search.png"
                  alt="powered-search"
                />
                <div className=" mt-6 text-white px-[13px]">
                  <div className="text-[20px] font-medium">
                    AI-Powered Search & QA
                  </div>
                  <div className=" mt-[10px] opacity-80 w-[70%]">
                    Powerful search and question-answering framework for
                    unstructured and semi-structured enterprise datasets. Also
                    incorporates a user-feedback loop and MLOps frameworkto
                    train ranking and searching models, fine-tune LLMs and
                    improve SQL code generation
                  </div>
                </div>
              </div>

              <div className="px-3 pt-[13px] mt-[18px] pb-9 bg-[#2c2c2c] rounded-[6px]">
                <img src="/images/kuwago/indexing.png" alt="indexing" />
                <div className=" mt-6 text-white px-[13px]">
                  <div className="w-[75%] text-[20px] font-medium">
                    Efficient Indexing
                  </div>
                  <div className=" mt-[10px] opacity-80 w-[75%]">
                    Data crawling and ingestion infrastructure to collect and
                    index data from multiple enterprise sources
                  </div>
                </div>
              </div>
            </div>

            <div className="w-[41%] ml-4">
              <div className="px-3 pt-[13px] pb-9 bg-[#2c2c2c] rounded-[6px]">
                <img src="/images/kuwago/processing.png" alt="processing" />
                <div className=" mt-6 text-white px-[13px]">
                  <div className="text-[20px] font-medium">
                    Intelligent Query Processing
                  </div>
                  <div className=" mt-[10px] opacity-80 w-[70%]">
                    Processes user queries, matches them to available documents,
                    ranks results, and generates answers or summaries . For
                    analytical queries, it generates SQL on DBs and generates
                    charts and data stories.
                  </div>
                </div>
              </div>

              <div className="px-3 pt-[13px] mt-[18px] pb-9 bg-[#2c2c2c] rounded-[6px]">
                <img src="/images/kuwago/secure.png" alt="secure" />
                <div className=" mt-6 text-white px-[13px]">
                  <div className="w-[75%] text-[20px] font-medium">
                    Secure Access
                  </div>
                  <div className=" mt-[10px] opacity-80 w-[75%]">
                    Role-based security mechanisms to ensure data access
                    control.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>&nbsp;</div>
        </div>
        {/* black container */}

        {/* whitepaper */}
        <div className="whitepaper">
          <div>&nbsp;</div>

          <div className="w-[82%] mx-auto mt-[71px]">
            <div className="text-[48px] font-medium text-[#0D0E12]">
              Meet your business goals with Kuwago
            </div>
            <div className="text-[18px] font-normal leading-[21px] text-black mt-6">
              Welcome to the future of enterprise data search and queries
            </div>
          </div>

          <div className="flex mb-[101px]">
            <div className="w-[36%] mb-[148px] ml-[133px] mt-[131px] px-[27px] py-[38px] bg-white rounded-[8px]">
              <div>
                <div>Learn more about Kuwago</div>
                <div>
                  Discover how you can improve access to data for your exployees
                  and customers and improve productivity and satisfaction.
                </div>
              </div>
              <button className="mt-8 px-3 py-[10px] flex bg-black rounded-[8px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3 5.5C3 3.29086 4.79086 1.5 7 1.5H15.3431C16.404 1.5 17.4214 1.92143 18.1716 2.67157L19.8284 4.32843C20.5786 5.07857 21 6.09599 21 7.15685V19.5C21 21.7091 19.2091 23.5 17 23.5H7C4.79086 23.5 3 21.7091 3 19.5V5.5ZM19 8.5V19.5C19 20.6046 18.1046 21.5 17 21.5H7C5.89543 21.5 5 20.6046 5 19.5V5.5C5 4.39543 5.89543 3.5 7 3.5H14V5.5C14 7.15685 15.3431 8.5 17 8.5H19ZM18.8891 6.5C18.7909 6.2176 18.6296 5.95808 18.4142 5.74264L16.7574 4.08579C16.5419 3.87035 16.2824 3.70914 16 3.61094V5.5C16 6.05228 16.4477 6.5 17 6.5H18.8891Z"
                    fill="white"
                  />
                  <path
                    d="M12.3828 18.4241C12.5007 18.3753 12.6112 18.303 12.7071 18.2071L15.7071 15.2071C16.0976 14.8166 16.0976 14.1834 15.7071 13.7929C15.3166 13.4024 14.6834 13.4024 14.2929 13.7929L13 15.0858V10.5C13 9.94772 12.5523 9.5 12 9.5C11.4477 9.5 11 9.94772 11 10.5V15.0858L9.70711 13.7929C9.31658 13.4024 8.68342 13.4024 8.29289 13.7929C7.90237 14.1834 7.90237 14.8166 8.29289 15.2071L11.2929 18.2071C11.5875 18.5018 12.0203 18.5741 12.3828 18.4241Z"
                    fill="white"
                  />
                </svg>
                <p className="text-white ml-2">Download whitepaper</p>
              </button>
            </div>
            <div className=" bg-[#f8f9ff] px-10 py-8 ml-[16%] w-[25%] rounded-2xl">
              {" "}
              <div className=" mt-[17px] slider">
                <FeaturedCard
                  img={featuredCardData[featuredCardId].img}
                  title={featuredCardData[featuredCardId].title}
                  description={featuredCardData[featuredCardId].description}
                />
              </div>
            </div>
          </div>
          <div>&nbsp;</div>
        </div>
        {/* whitepaper */}

        {/* Reach out container */}
        <div className="black-container">
          <div>&nbsp;</div>
          <div className="gif-background w-[90%] mx-auto mt-[134px] rounded-[32px] mb-[134px]">
            <div>&nbsp;</div>
            <div className="mt-[168px] text-[52px] font-medium w-[53%] ml-[70px] leading-[52px]">
              See how Kuwago can simplify access to data for your enterprise and
              customers
            </div>
            <button className="flex py-[10px] ml-[70px] px-4 bg-white rounded-md border-[1px] mb-[185px] mt-5 justify-center border-[#000000] contact-button">
              <div>Contact Sales</div>
              <img
                src="/images/home/arrow.png"
                alt="Contact Saled"
                className="w-5 ml-2 leading-3"
              />
            </button>
            <div>&nbsp;</div>
          </div>
          <div>&nbsp;</div>
        </div>
        {/* Reach out container */}

        <Footer />
      </div>
    </>
  );
}

export default Kuwago;
