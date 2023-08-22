import Header from "./header";
import "../styles/hoots.css";
import { useEffect, useState } from "react";
import Footer from "./footer";

function FeaturedCard({ img, title, description }) {
  return (
    <div
      className="bg-white rounded-lg mx-auto p-[7px] sm:p-[14px] transition-all ease-in-out duration-1000 transform translate-x-0
    "
    >
      <div className="flex justify-center">
        <img src={img} alt={title} />
      </div>

      <div className="mt-3 sm:mt-6 h-[70px] sm:h-[140px] text-[8px] sm:text-[16px]">
        <div className=" text-[10px] sm:text-[20px] font-medium tracking-[-0.2pxs] sm:tracking-[-0.4px]">
          {title}
        </div>
        <div className="mt-[5px] sm:mt-[10px] text-[8px] sm:text-[16px] leading-[10px] sm:leading-[19px] mb-[10px] sm:mb-[20px] text-[#0D0E12] opacity-80">
          {description}
        </div>
      </div>
    </div>
  );
}

function IntractiveCard({ img, title, description, id, setCardState }) {
  const circles = [0, 1, 2].map((index) => {
    return id === index ? (
      <button
        className={`h-[5px] sm:h-[10px] w-[5px] sm:w-[10px] bg-black rounded-[50px] sm:rounded-[100px] block ${
          index > 0 ? "mt-2 sm:mt-4" : "mt-0"
        }`}
        onClick={setCardState(index)}
      ></button>
    ) : (
      <button
        className={`h-[5px] sm:h-[10px] w-[5px] sm:w-[10px] border-[#000000] border-[0.3px] sm:border-[0.6px] rounded-[50px] sm:rounded-[100px] block ${
          index > 0 ? "mt-2 sm:mt-4" : "mt-0"
        }`}
        onClick={() => setCardState(index)}
      ></button>
    );
  });

  return (
    <div className="w-[90%] sm:w-[82%] mt-[46px] sm:mt-[94px] flex mx-auto p-3 sm:p-6 bg-white rounded-[10px] sm:rounded-[20px]">
      <div className="w-[80%] sm:w-[55%]">
        <img src={img} alt={title} className="w-full" />
      </div>
      <div className="w-[36%] pt-[0px] sm:pt-[47px] pl-[20px] sm:pl-[42px] pr-[12px] sm:pr-[24px] pb-[10px] sm:pb-[20px] flex items-start sm:items-center">
        <div>
          <div className=" font-light tracking-[0.5px] sm:tracking-[3.69px] text-[8px] sm:text-[16px]">
            {title}
          </div>
          <div className="w-[90%] mt-[27px] sm:mt-[57px] leading-[10px] sm:leading-[21px] text-[8px] sm:text-[18px]">
            {description}
          </div>
          <div className="w-[40%] sm:w-[20%]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 61 62"
              fill="none"
              className="mt-[27px] sm:mt-[57px]"
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
      </div>
      <div className="w-[5%] sm:w-[9%] py-[10px] sm:py-[20px] px-[5px] sm:px-[10px] flex items-center justify-center">
        <div>{circles}</div>
      </div>
    </div>
  );
}

function Hoots() {
  const [cardId, setCardId] = useState(0);
  const [img, setImg] = useState("/images/hoots/AWARENESS.png");
  const [title, setTitle] = useState("AWARENESS");
  const [description, setDescription] = useState(
    "Deliver educational messages, appointment reminders, or notifications to keep customers informed and engaged"
  );
  const data = [
    {
      img: "/images/hoots/AWARENESS.png",
      title: "AWARENESS",
      description:
        "Deliver educational messages, appointment reminders, or notifications to keep customers informed and engaged",
    },
    {
      img: "/images/hoots/MARKETING.png",
      title: "MARKETING",
      description:
        "Send promotional offers, notifications, and personalized suggestions through messaging channels to increase customer engagement and awareness.",
    },
    {
      img: "/images/hoots/E-COMMERCE.png",
      title: "E-COMMERCE",
      description:
        "Answer customer queries about product features, delivery status, or returns and refunds, enhancing the shopping experience and driving sales.",
    },
  ];

  const setCardState = (id) => {
    setCardId(id);
    setTitle(data[id].title);
    setImg(data[id].img);
    setDescription(data[id].description);
  };

  const featuredCardData = [
    {
      img: "/images/hoots/MovingCards/img-1.png",
      title: "Quick replies",
      description:
        "91% of customers find immediate response to customer service questions as crucial.",
    },
    {
      img: "/images/hoots/MovingCards/img-2.png",
      title: "NPS scores",
      description:
        "Over 90% of customers rate immediate response to customer service questions as important.",
    },
    {
      img: "/images/hoots/MovingCards/img-3.png",
      title: "Customer Satisfaction",
      description:
        "Improve customer satisfaction rates and lower churn rates by increasing number of channels to interact with customers",
    },
  ];

  const [featuredCardId, setFeaturedCardId] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFeaturedCardId((featuredCardId + 1) % 3);
    }, 3000);

    //Clearing the interval
    return () => clearInterval(interval);
  }, [featuredCardId]);

  return (
    <div>
      {/* Top container */}
      <div className=" bg-blue-200 w-full hoots-top-container">
        <div>&nbsp;</div>
        {/* Header */}
        <div className=" justify-center flex mt-[20px]">
          <div className="w-[95%] sm:w-[85%] mx-auto fixed z-[1]">
            {" "}
            <Header />
          </div>
        </div>
        {/* Header */}

        <div className=" ml-10 sm:ml-20 block sm:flex">
          <div className="w-[90%] sm:w-[42%] mt-[200px] sm:mt-[442px] mb-[0px] sm:mb-[140px]">
            <div className=" text-[#070D4A] font-light text-[26px] sm:text-[52px] leading-[31px] sm:leading-[62px]">
              Omni-channel communication with your customers at scale
            </div>
            <div className=" mt-1 sm:mt-3">
              <span className="text-[#7E7E7E] font-[540] text-[8px] sm:text-[18px]">
                ONEBYZERO
              </span>
              <span className="ml-1 sm:ml-2 text-[#000000] font-[650] text-[8px] sm:text-[17px]">
                HOOTS
              </span>
            </div>
          </div>

          <div className="flex justify-center w-[90%] sm:w-[42%] mt-[57px] sm:mt-[114px] ml-0 sm:ml-[20px] mb-[30px] sm:mb-[70px]">
            <img
              src="/images/hoots/frame1.png"
              alt="frame1"
              className="ml-[0px] sm:ml-[100px]"
            />
          </div>
        </div>

        <div>&nbsp;</div>
      </div>
      {/* Top container */}

      {/* middle-container */}
      <div className="middle-container ">
        <div>&nbsp;</div>

        {/* Text container */}
        <div className="w-[90%] sm:w-[82%] mt-[45px] sm:mt-[90px] flex mx-auto text-[#1E1E1E] text-[8px] sm:text-[18px]">
          <div className="w-[36%]">
            Hoots is a revolutionary platform that enables businesses to
            communicate with their customers seamlessly across multiple
            messaging channels.
          </div>
          <div className="w-[36%] sm:w-[23%] ml-[40px] sm:ml-[98px]">
            Integrate with WhatsApp, Messenger, Viber, Line, Telegram and more,
            and provide a truly seamless and personalized customer experience
            that increases engagement, satisfaction, and ultimately drives
            revenue.
          </div>
          <button className="ml-[40px] sm:ml-[120px] flex py-[5px] sm:py-[10px] px-2 sm:px-4 h-[40px] rounded-md justify-center contact-button">
            <div className=" text-[8px] sm:text-[16px]">Contact Sales</div>
            <img
              src="/images/home/arrow.png"
              alt="Contact Saled"
              className="w-3 sm:w-5 ml-1 sm:ml-2 leading-1 sm:leading-3"
            />
          </button>
        </div>
        {/* Text container */}

        {/* communication container */}

        <div className="w-[90%] sm:w-[82%] mx-auto mt-[100px] sm:mt-[215px]">
          <div className="w-[85%] sm:w-[68%] text-[24px] sm:text-[48px] font-medium leading-[24px] sm:leading-[57px] text-[#0D0E12]">
            Take communication with your customers to the next level
          </div>
          <div className="w-[80%] sm:w-[58%] mt-3 sm:mt-6 text-[8px] sm:text-[18px] leading-[10px] sm:leading-[21px]">
            Reach customers across multiple end-points with just a single API.
            Don’t worry anymore about the intricate nuances of different
            channels. Handle a variety of use-cases including Marketing,
            Awareness and E-Commerce
          </div>
        </div>

        {/* communication container */}

        {/* Intractive container */}

        <div className="mb-[62px] sm:mb-[126px]">
          {" "}
          <IntractiveCard
            img={img}
            title={title}
            description={description}
            id={cardId}
            setCardState={setCardState}
          />
        </div>

        <div>&nbsp;</div>

        {/* Intractive container */}
      </div>
      {/* middle-container */}

      {/* black container */}
      <div className="black-container">
        <div>&nbsp;</div>
        <div className="w-[90%] sm:w-[82%] text-white mx-auto mt-[46px] sm:mt-[94px]">
          <div className=" text-[24px] sm:text-[48px] font-medium leading-[24px] sm:leading-[48px]">
            Why Hoots?
          </div>
          <div className="w-[40%] sm:w-[29%] mt-1 sm:mt-2 text-[8px] sm:text-[18px] font-light leading-[10px] sm:leading-[21px]">
            With our omni channel messaging product, businesses can engage with
            their customers in a whole new way, building lasting relationships
            and driving growth. Hoots can serve a variety of inbound and
            outbound communication use-cases for businesses.
          </div>
        </div>

        <div className="w-[90%] sm:w-[80%] flex mx-auto mt-[50px] sm:mt-[100px] mb-[35px] sm:mb-[71px]">
          <div className="w-[45%]">
            <div className=" px-1 sm:px-3 pt-[6px] sm:pt-[13px] pb-4 sm:pb-9 bg-[#2c2c2c] rounded-[3px] sm:rounded-[6px]">
              <img src="/images/hoots/messaging.png" alt="messaging" />
              <div className="mt-3 sm:mt-6 text-white px-[6px] sm:px-[13px]">
                <div className="text-[11px] sm:text-[20px] font-medium">
                  Multi Channel Messaging
                </div>
                <div className=" text-[8px] sm:text-[16px] sm:mt-[10px] opacity-80 w-[95%] sm:w-[70%]">
                  Provide consistent experience and 2-way messaging across
                  Messenger, Telegram, Viber, Line, WhatsApp and many more
                </div>
              </div>
            </div>

            <div className=" px-1 sm:px-3 pt-[6px] sm:pt-[13px] mt-[9px] sm:mt-[18px] pb-4 sm:pb-9 bg-[#2c2c2c] rounded-[3px] sm:rounded-[6px]">
              <img src="/images/hoots/enterprise.png" alt="messaging" />
              <div className="mt-3 sm:mt-6 text-white px-[13px]">
                <div className="w-[90%] sm:w-[75%] text-[11px] sm:text-[20px] font-medium">
                  Easily integrated with your enterprise architecture
                </div>
                <div className="mt-[5px] text-[8px] sm:text-[16px] sm:mt-[10px] opacity-80 w-[90%] sm:w-[75%]">
                  Secure and easy integration with existing tech stack, CRM, and
                  business tools.
                </div>
              </div>
            </div>
          </div>

          <div className="w-[57%] ml-2 sm:ml-4">
            <div className="px-1 sm:px-3 pt-[6px] sm:pt-[13px] pb-4 sm:pb-9 bg-[#2c2c2c] rounded-[3px] sm:rounded-[6px]">
              <img src="/images/hoots/single.png" alt="messaging" />
              <div className="mt-3 sm:mt-6 text-white text-[6px] px-[6px] sm:px-[13px]">
                <div className="text-[11px] sm:text-[20px] font-medium">
                  Single API across all channels
                </div>
                <div className="mt-[5px] sm:mt-[10px] opacity-80 w-[70%] text-[8px] sm:text-[16px]">
                  Single integration with automated adaptation of all
                  communications based on features of the channel
                </div>
              </div>
            </div>

            <div className="px-1 sm:px-3 pt-[6px] mt-[9px] sm:mt-[18px] sm:pt-[13px] pb-4 sm:pb-9 bg-[#2c2c2c] rounded-[3px] sm:rounded-[6px]">
              <img src="/images/hoots/single-dashboard.png" alt="messaging" />
              <div className=" mt-3 sm:mt-6 text-white text-[6px] px-[6px] sm:px-[13px]">
                <div className="w-[75%] text-[11px] sm:text-[20px] font-medium">
                  Single Dashboard for Simplified Monitoring & Analytics
                </div>
                <div className=" mt-[5px] sm:mt-[10px] opacity-80 w-[75%] text-[8px] sm:text-[16px]">
                  Manage all messaging channels and conversations in one place
                  with a single dashboard.
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
        <div className="w-[90%] sm:w-[82%] mx-auto mt-[35px] sm:mt-[71px]">
          <div className="text-[24px] sm:text-[48px] font-medium text-[#0D0E12]">
            Meet your business goals with Hoots
          </div>
          <div className=" text-[9px] sm:text-[18px] font-normal leading-[24px] sm:leading-[21px] text-black mt-3 sm:mt-6">
            Welcome to the future of business communication.
          </div>
        </div>

        <div className="flex mb-[50px] sm:mb-[101px]">
          <div className="w-[36%] mb-[74px] sm:mb-[148px] ml-[20px] sm:ml-[133px] mt-[65px] sm:mt-[131px] px-[13px] sm:px-[27px] py-[19px] sm:py-[38px] bg-white rounded-[4px] sm:rounded-[8px]">
            <div className="text-[8px] sm:text-[16px]">
              <div>Learn more about Hoots</div>
              <div>
                Discover how you can improve customer engagement rates and lower
                churn by increasing the number of channels you interact with
                customers
              </div>
            </div>
            <button className="w-[80%] sm:w-[50%] mt-4 sm:mt-8 px-1 sm:px-3 py-[5px] sm:py-[10px] flex bg-black rounded-[4px] sm:rounded-[8px]">
              <div className="w-[18%] items-center justify-center flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
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
              </div>
              <p className="text-white ml-1 sm:ml-2 text-[8px] sm:text-[16px] w-[80%] sm:w-full items-center">
                Download whitepaper
              </p>
            </button>
          </div>
          <div className=" bg-[#f8f9ff] px-2 sm:px-10 py-2 sm:py-6 ml-[16%] w-[50%] sm:w-[25%] rounded-lg sm:rounded-2xl flex items-center ">
            {" "}
            <div className="">
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
        <div className="gif-background w-[90%] mx-auto mt-[67px] sm:mt-[134px] rounded-[16px] sm:rounded-[32px] mb-[67px] sm:mb-[134px]">
          <div>&nbsp;</div>
          <div className="mt-[80px] sm:mt-[168px] text-[26px] sm:text-[52px] font-medium w-[75%] sm:w-[50%] ml-[35px] sm:ml-[70px] leading-[26px] sm:leading-[52px]">
            Reach out to see how Hoots can help streamline your conversations.
          </div>
          <button className="flex py-[5px] sm:py-[10px] ml-[35px] sm:ml-[70px] px-2 sm:px-4 bg-white rounded-md border-[1px] mb-[90px] sm:mb-[185px] mt-2 sm:mt-5 justify-center border-[#000000] contact-button">
            <div className="text-[8px] sm:text-[16px]">Contact Sales</div>
            <img
              src="/images/home/arrow.png"
              alt="Contact Saled"
              className="w-2 sm:w-5 ml-1 sm:ml-2 leading-1 sm:leading-3"
            />
          </button>
          <div>&nbsp;</div>
        </div>
        <div>&nbsp;</div>
      </div>
      {/* Reach out container */}
      <Footer />
    </div>
  );
}

export default Hoots;
