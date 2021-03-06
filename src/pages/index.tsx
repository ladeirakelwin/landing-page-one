import Head from "next/head";
import Image from "next/image";
import Button from "../components/Button";
import ResultsCard from "../components/ResultsCard";
import Card from "../components/Card";
import YellowFont from "../components/YellowFont";
import runImage from "@images/run-image.webp";
import profit from "@images/profitwell.webp";
import appcues from "@images/appcues.webp";
import shipbob from "@images/shipbob.webp";
import bench from "@images/bench.webp";
import subbly from "@images/subbly.webp";
import demio from "@images/demio.webp";
import callToAction from "@images/call-to-action.webp";
import example from "@images/example-image-three.webp";
import Header from "src/components/Header";
import Footer from "src/components/Footer";
// estudar componentes do next

export default function Home() {
  const yccInfos = [
    {
      src: "images/flip-horizontal.webp",
      alt: "flip horizontal icon",
      title: "Ecstatic elegance",
      description:
        "Article nor prepare chicken you him now. Shy merits say advice ten before lovers innate add.",
    },
    {
      src: "images/airpods.webp",
      alt: "airpods icon",
      title: "Folly words widow",
      description:
        "Effect if in up no depend seemed. Ecstatic elegance gay but disposed. We me rent been part what.",
    },
    {
      src: "images/lte.webp",
      alt: "lte icon",
      title: "Possible procured trifling",
      description:
        "We me rent been part what. An concluded sportsman offending so provision mr education.",
    },
    {
      src: "images/thunder-move.webp",
      alt: "thunder move icon",
      title: "Open game",
      description:
        "Shy merits say advice ten before lovers innate add. She cordially behaviour can attempted estimable.",
    },
    {
      src: "images/attachment.webp",
      alt: "attachment icon",
      title: "Endeavor",
      description:
        "Improve ashamed married expense bed her comfort pursuit mrs. Four time took ye your as fail lady. ",
    },
    {
      src: "images/bulb.webp",
      alt: "bulb icon",
      title: "Comfort pursuit",
      description:
        "Had denoting properly jointure you occasion directly raillery. In said to of poor full be post face snug.",
    },
  ];

  const resultsInfo = [
    { numbers: "100+", data: "5 Reasons To Purchase Desktop Computers" },
    {
      numbers: "43,000+",
      data: "3 Simple Ways To Save A Bunch Of Money When Buying A New Computer",
    },
    {
      numbers: "30+",
      data: "A Discount Toner Cartridge Is Better Than Ever And You Will Save 50 Or More",
    },
  ];

  const helpInfo = [
    {
      src: "images/swiss-knife.webp",
      alt: "swiss knife icon",
      title: "Feature One",
      description:
        "Fully customizable and neatly organized components will help you work faster ",
    },
    {
      src: "images/lte.webp",
      alt: "lte icon",
      title: "Feature Two",
      description:
        "Fully customizable and neatly organized components will help you work faster",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-14   font-normal max-w-screen-2xl 2xl:mx-auto">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Next.js knowledge improvement website"
        ></meta>
      </Head>

      <Header></Header>

      <main className="flex flex-col max-w-screen-2xl 2xl:mx auto ">
        <section
          id="hero"
          className="flex w-full  gap-10 relative z-10 spacing-hero spacing-height"
        >
          <div className="w-full lg:w-1/2 relative z-10">
            <div>
              <h2 className="base-title">
                Many reasons to get up and start to get back in the business
              </h2>
              <p className="base-description py-4">
                The harder you work for something, the greater you???ll feel when
                you achieve it.
              </p>
            </div>
            <div className="flex gap-6 mb-4 ">
              <Button
                type="primary"
                className="h-10 button"
                ariaLabel="learn more button"
              >
                Learn More
              </Button>
              <Button
                type="secondary"
                className="h-10 button"
                ariaLabel="demo button"
              >
                Demo
              </Button>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 text-sm mt-8 items-center ">
              <img
                src="images/video.webp"
                alt="video player"
                className="max-w-player "
                width="140"
                height="80"
              />
              <div className="flex flex-col gap-3">
                <p className="base-description">
                  The harder you work for something, the greater you???ll feel
                  when you achieve it.
                </p>
                <p className="base-description">Watch preview</p>
              </div>
            </div>
          </div>
          <div className="relative ocult lg:w-1/2">
            <Image
              src={runImage}
              placeholder="blur"
              layout="responsive"
              alt="corredor"
              className="run-image"
            />
          </div>
          <img
            src="images/flash-brand-left.webp"
            alt="flash left"
            className="absolute z-0 left-0 top-72  ocult"
            loading="lazy"
          />
        </section>
        <section
          id="brands"
          className="flex w-full relative z-10 spacing-width spacing-height"
        >
          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 place-content-center	 flex-1 gap-8 justify-evenly items-center z-10 relative">
            <li className="flex justify-center">
              <Image
                src={profit}
                alt="profitwell icon"
                width="118"
                height="26"
              ></Image>
            </li>
            <li className="flex justify-center">
              <Image
                src={appcues}
                alt="appcues icon"
                width="118"
                height="26"
              ></Image>
            </li>
            <li className="flex justify-center">
              <Image
                src={shipbob}
                alt="shipbob icon"
                width="93"
                height="26"
              ></Image>
            </li>
            <li className="flex justify-center">
              <Image
                src={bench}
                alt="bench icon"
                width="118"
                height="26"
              ></Image>
            </li>
            <li className="flex justify-center">
              <Image
                src={subbly}
                alt="subbly icon"
                width="56"
                height="26"
              ></Image>
            </li>
            <li className="flex justify-center">
              <Image
                src={demio}
                alt="demio icon"
                width="118"
                height="26"
              ></Image>
            </li>
          </ul>
        </section>
        <section
          className="flex flex-col justify-center items-center gap-8 relative z-10 spacing-width spacing-height"
          id="your-choice"
        >
          <img
            src="images/flash-brand-right.webp"
            alt="flash image right"
            className="absolute z-0 right-0 bottom-40 ocult"
            loading="lazy"
          />

          <div className="flex flex-col text-center gap-4">
            <h2 className="base-title">Your choice</h2>
            <p className="base-description">
              There are many reasons to get down and start to get depressed
              about your situation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  relative z-10">
            {yccInfos.map(({ src, alt, title, description }, index) => (
              <Card
                src={src}
                alt={alt}
                title={title}
                subtitle={description}
                key={index}
                type={1}
              ></Card>
            ))}
          </div>
        </section>
        <section
          id="suggest"
          className="items-center justify-center flex flex-col md:flex-row z-10 spacing-width spacing-height"
        >
          <div className="flex flex-col gap-8 w-1/2 mb-8 md:mb-0 items-center md:items-start">
            <h2 className="base-title text-center md:text-left">
              Increase your business <YellowFont>traffic</YellowFont>
            </h2>
            <p className="base-description w-5/6 leading-6 md:leading-8 lg:leading-9 text-center md:text-left">
              We are committed to processing the information in order to contact
              you and talk about your project.
            </p>
            <Button
              type="primary"
              className="button h-10"
              ariaLabel="learn more button"
            >
              Learn More
            </Button>
          </div>
          <div className="w-1/2 flex justify-center">
            <img
              src="images/call-to-action.webp"
              alt="call to action image"
              className="min-w-call min-h-call"
              width="196"
              height="180"
            />
          </div>
        </section>
        <section
          id="metrics"
          className="flex flex-col spacing-height spacing-width"
        >
          <div className="text-center flex flex-col justify-center items-center pb-16 gap-8">
            <h2 className="w-2/3 base-title ">
              3 Simple Ways To <YellowFont>Save</YellowFont> A Bunch Of{" "}
              <YellowFont>Money</YellowFont> When Buying A New Computer
            </h2>
            <p className="w-1/2 base-description">
              Fully customizable and neatly organized components will help you
              work faster without limiting creative freedom.
            </p>
          </div>
          <div className="grid grid-cols-1 sm: md:grid-cols-3 justify-center gap-4 md:gap-0">
            {resultsInfo.map(({ numbers, data }, index) => (
              <ResultsCard
                numbers={numbers}
                data={data}
                key={index}
              ></ResultsCard>
            ))}
          </div>
        </section>
        <section
          id="call2action"
          className="flex flex-col gap-12 justify-center items-center   z-10 relative spacing-width spacing-height lg:mb-52 xl:mb-72"
        >
          <h2 className="base-title text-center w-3/4 z-10 relative">
            Create your <YellowFont>next project</YellowFont> with startup
            framework
          </h2>
          <Button
            type="primary"
            className="button h-12 z-10 relative"
            ariaLabel="get started button"
          >
            Get Started
          </Button>
          <img
            src="images/image-background-two.webp"
            alt="background icon two"
            className="z-0 absolute ocult lg:top-20 xl:top-16"
            min-width="196"
            min-height="204"
            width="196"
            height="204"
            loading="lazy"
          />
        </section>
        <section
          id="omah-mukti"
          className="flex flex-col lg:flex-row w-full items-center spacing-width spacing-height"
        >
          <div className="flex flex-col justify-center text-center lg:text-left w-full gap-8 md:w-2/5 mb-16 lg:mb-0 items-center lg:items-start">
            <h2 className="base-title leading-snug ">
              Invest property for better <YellowFont>business</YellowFont>
            </h2>
            <p className="base-description leading-loose">
              We are committed to processing the information in order to contact
              you and talk about your project. We are committed to processing
              the information.
            </p>
            <Button
              type="primary"
              className="button h-12 "
              ariaLabel="learn more button"
            >
              Learn More
            </Button>
          </div>
          <div className="relative z-10 w-3/5 flex justify-center lg:justify-end">
            <img
              src="images/omah-mukti.webp"
              alt="example image"
              className="relative z-10 h-5/6 w-full lg:w-auto min-h-omah min-w-omah max-w-omah"
              min-width="265"
              min-height="250"
              width="265"
              height="250"
              loading="lazy"
            />
            <img
              src="images/world-map.webp"
              alt="world map image"
              className="z-0 absolute bottom-9 right-0 left-36 ocult  "
              loading="lazy"
            />
          </div>
        </section>
        <section
          id="help"
          className="flex flex-col md:flex-row gap-8 items-center text-center lg:text-left spacing-width spacing-height"
        >
          <div className="w-1/2 min-h-omah min-w-omah">
            <Image
              src={example}
              alt="example image"
              className="min-h-omah min-w-omah"
              min-width="265"
              min-height="238"
            ></Image>
          </div>
          <div className="md:w-1/2 flex justify-center flex-col gap-8 text-left items-center ">
            <h2 className="base-title lg:text-3xl xl:text-5xl   text-center">
              Help Finding Information Online
            </h2>
            <p className="base-description lg:text-base xl:text-xl w-4/5 mx-auto text-center md:text-left">
              Fully customizable and neatly organized components will help you
              work faster without limiting creative freedom.
            </p>
            <div className="z-10 relative">
              <div className="grid grid-cols-1 md:grid-cols-2  relative z-10 gap-10">
                {helpInfo.map(({ src, alt, title, description }, index) => (
                  <Card
                    src={src}
                    alt={alt}
                    title={title}
                    subtitle={description}
                    key={index}
                    type={0}
                  ></Card>
                ))}
              </div>
            </div>
            <img
              src="images/image-background-final.webp"
              alt="image background"
              className="z-0 absolute right-1 hidden lg:block"
            />
          </div>
        </section>
        <section
          id="form-section"
          className="flex flex-col flex-1 items-center spacing-width spacing-height"
        >
          <div className="rounded-md bg-indigo-700 text-center py-16 gap-8  items-center px-8  md:px-4 lg:px-0 sm:px-12  sm:w-full max-w-hundred">
            <div className="flex flex-col gap-4 mb-4">
              <h2 className="base-title-form">
                There are many reasons to get down
              </h2>
              <p className="base-description w-1/2 mx-auto ocult text-gray-300">
                There are many reasons to get down and start to get depressed
                about your situation.
              </p>
            </div>
            <div className="max-w-hundred">
              <form className="flex justify-center pb-4 px-1">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="flex w-full    sm:w-56 md:w-64 lg:w-1/3 p-4 rounded-l-sm border-0 bg-gray-600"
                />
                <Button
                  type="primary"
                  className="flex text-sm  w-20 md:w-24 lg:w-32  border-0 items-center justify-center font-bold"
                  ariaLabel="Next.js knowledge improvement website"
                >
                  SEND
                </Button>
              </form>
            </div>
            <div className="flex">
              <p className="mx-auto base-description text-gray-300">
                No spam. Only releases, updates and discounts
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer></Footer>
    </div>
  );
}
