import Head from "next/head";
import BrandItem from "../components/BrandItem";
import Button from "../components/Button";
import ResultsCard from "../components/ResultsCard";
import Card from "../components/Card";
import YellowFont from "../components/YellowFont";
import FooterMenu from "../components/FooterMenu";

export default function Home() {
  const brandImgs = [
    ["/profitwell.webp", "profitwell icon"],
    ["/appcues.webp", "appcues icon"],
    ["/shipbob.webp", "shipbob icon"],
    ["/bench.webp", "bench icon"],
    ["/subbly.webp", "subbly icon"],
    ["/demio.webp", "demio icon"],
  ];

  const yccInfos = [
    [
      "/flip-horizontal.webp",
      "flip horizontal icon",
      "Ecstatic elegance",
      "Article nor prepare chicken you him now. Shy merits say advice ten before lovers innate add.",
    ],
    [
      "/airpods.webp",
      "airpods icon",
      "Folly words widow",
      "Effect if in up no depend seemed. Ecstatic elegance gay but disposed. We me rent been part what.",
    ],
    [
      "/lte.webp",
      "lte icon",
      "Possible procured trifling",
      "We me rent been part what. An concluded sportsman offending so provision mr education.",
    ],
    [
      "/thunder-move.webp",
      "thunder move icon",
      "Open game",
      "Shy merits say advice ten before lovers innate add. She cordially behaviour can attempted estimable.",
    ],
    [
      "/attachment.webp",
      "attachment icon",
      "Endeavor",
      "Improve ashamed married expense bed her comfort pursuit mrs. Four time took ye your as fail lady. ",
    ],
    [
      "/bulb.webp",
      "bulb icon",
      "Comfort pursuit",
      "Had denoting properly jointure you occasion directly raillery. In said to of poor full be post face snug.",
    ],
  ];

  const resultsInfo = [
    ["100+", "5 Reasons To Purchase Desktop Computers"],
    [
      "43,000+",
      "3 Simple Ways To Save A Bunch Of Money When Buying A New Computer",
    ],
    [
      "30+",
      "A Discount Toner Cartridge Is Better Than Ever And You Will Save 50 Or More",
    ],
  ];

  const helpInfo = [
    [
      "/swiss-knife.webp",
      "swiss knife icon",
      "Feature One",
      "Fully customizable and neatly organized components will help you work faster ",
    ],
    [
      "/lte.webp",
      "lte icon",
      "Feature Two",
      "Fully customizable and neatly organized components will help you work faster",
    ],
  ];
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-14 bg-gradient-to-r from-indigo-900 to-indigo-800  font-normal">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="flex flex-1  justify-between w-full pb-16 px-36">
        <div className="flex gap-10 items-center">
          <img src="/logo.webp" className="h-9 w-9" alt="" />
          <ul className="flex gap-3 items-center text-white">
            <li>About</li>
            <li>Gallery</li>
            <li>Pricing</li>
            <li>FAQ</li>
            <li>Benefits</li>
          </ul>
        </div>
        <div className="flex gap-5 ">
          <Button
            type="secondary"
            className="text-yellow-500 text-sm w-24 h-9 font-medium"
          >
            Sign In
          </Button>
          <Button
            type="primary"
            className="text-white text-sm w-24 h-9 font-medium"
          >
            Sign Up
          </Button>
        </div>
      </header>

      <main className="flex flex-col">
        <section id="hero" className="flex w-full pl-36 gap-10">
          <div className="w-1/2">
            <div>
              <h1 className="text-5xl text-green-200 font-semibold">
                Many reasons to get up and start to get back in the business
              </h1>
              <p className="text-indigo-400 py-4">
                The harder you work for something, the greater you’ll feel when
                you achieve it.
              </p>
            </div>
            <div className="flex gap-6 mb-4">
              <Button type="primary" className="text-sm w-32 h-10">
                Learn More
              </Button>
              <Button type="secondary" className="text-sm w-32 h-10">
                Demo
              </Button>
            </div>
            <div className="flex gap-6 text-sm mt-8">
              <img src="/video.webp" alt="" />
              <div className="flex flex-col text-indigo-400 gap-3">
                <p>
                  The harder you work for something, the greater you’ll feel
                  when you achieve it.
                </p>
                <p>Watch preview</p>
              </div>
            </div>
          </div>
          <div className="relative w-1/2">
            <img src="/run-image.webp" alt="" className="run-image" />
          </div>
        </section>
        <section id="brands" className="flex w-full px-36 pb-20">
          <ul className="flex flex-1 justify-evenly items-center">
            {brandImgs.map(([src, alt], index) => (
              <BrandItem key={index} src={src} alt={alt}></BrandItem>
            ))}
          </ul>
        </section>
        <section
          className="flex flex-col justify-center items-center gap-8 px-36 pb-36"
          id="your-choice"
        >
          <div className="flex flex-col text-center gap-4">
            <h2 className="text-green-200 text-5xl font-semibold">
              Your choice
            </h2>
            <p className="text-indigo-400">
              There are many reasons to get down and start to get depressed
              about your situation.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {yccInfos.map(([src, alt, title, subtitle], index) => (
              <Card
                src={src}
                alt={alt}
                title={title}
                subtitle={subtitle}
                key={index}
                type={1}
              ></Card>
            ))}
          </div>
        </section>
        <section
          id="suggest"
          className="px-36 items-center justify-center flex pb-36"
        >
          <div className="flex flex-col gap-8 w-1/2">
            <h2 className="text-green-200 text-5xl font-semibold">
              Increase your business <YellowFont>traffic</YellowFont>
            </h2>
            <p className="text-sm text-indigo-400 w-5/6 leading-9">
              We are committed to processing the information in order to contact
              you and talk about your project.
            </p>
            <Button type="primary" className="text-sm w-32 h-10">
              Learn More
            </Button>
          </div>
          <div className="w-1/2">
            <img src="/call-to-action.webp" alt="call to action image" />
          </div>
        </section>
        <section id="metrics" className="flex flex-col px-36 pb-36">
          <div className="text-center flex flex-col justify-center items-center pb-16">
            <h2 className="w-2/3 text-4xl text-green-200 pb-8 font-bold">
              3 Simple Ways To <YellowFont>Save</YellowFont> A Bunch Of{" "}
              <YellowFont>Money</YellowFont> When Buying A New Computer
            </h2>
            <p className="w-1/2 text-indigo-400">
              Fully customizable and neatly organized components will help you
              work faster without limiting creative freedom.
            </p>
          </div>
          <div className="grid grid-cols-3">
            {resultsInfo.map(([numbers, data], index) => (
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
          className="flex flex-col gap-12 justify-center items-center mx-36 mb-80 z-10 relative"
        >
          <h2 className="text-5xl font-bold text-green-200 text-center w-3/4 z-10 relative">
            Create your <YellowFont>next project</YellowFont> with startup
            framework
          </h2>
          <Button
            type="primary"
            className="text-sm w-36 h-12 z-10 relative font-semibold"
          >
            Get Started
          </Button>
          <img
            src="/image-background-two.webp"
            alt="background icon two"
            className="z-0 absolute top-16"
          />
        </section>
        <section id="omah-mukti" className="flex w-full px-36 mt-20 mb-28">
          <div className="flex flex-col gap-8 w-2/5 ">
            <h2 className="text-green-200 text-4xl font-bold leading-snug ">
              Invest property for better <YellowFont>business</YellowFont>
            </h2>
            <p className="text-indigo-400 text-sm leading-loose">
              We are committed to processing the information in order to contact
              you and talk about your project. We are committed to processing
              the information.
            </p>
            <Button type="primary" className="text-sm w-32 h-12 font-bold">
              Learn More
            </Button>
          </div>
          <div className="relative z-10 w-3/5 flex justify-end">
            <img
              src="/omah-mukti.webp"
              alt="example image"
              className="relative z-10 h-5/6"
            />
            <img
              src="/world-map.webp"
              alt="world map image"
              className="z-0 absolute bottom-9 right-0 left-36 w-full h-full"
            />
          </div>
        </section>
        <section id="help" className="flex px-36 gap-8 mb-36">
          <div className="w-1/2">
            <img src="/example-image-three.webp" alt="example image" />
          </div>
          <div className="w-1/2 flex justify-center flex-col gap-10 text-left">
            <h2 className="text-green-200 text-2xl font-semibold">
              Help Finding Information Online
            </h2>
            <p className="text-sm text-indigo-400 w-4/5">
              Fully customizable and neatly organized components will help you
              work faster without limiting creative freedom.
            </p>
            <div className="z-10 relative">
              <div className="grid grid-cols-2 relative z-10">
                {helpInfo.map(([src, alt, title, subtitle], index) => (
                  <Card
                    src={src}
                    alt={alt}
                    title={title}
                    subtitle={subtitle}
                    key={index}
                    type={0}
                  ></Card>
                ))}
              </div>
            </div>
            <img
              src="/image-background-final.webp"
              alt="image background"
              className="z-0 absolute right-1"
            />
          </div>
        </section>

        <section>
          <div>
            <div>
              <h2>There are many reasons to get down</h2>
              <p>
                There are many reasons to get down and start to get depressed
                about your situation.{" "}
              </p>
            </div>
            <div>
              <form>
                <input type="email" placeholder="Your Email" />
                <Button type="primary" className="text-sm w-24 h-8">
                  SEND
                </Button>
              </form>
            </div>
            <div>
              <p>No spam. Only releases, updates and discounts</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="flex">
        <div>
          <p>ARShakir</p>
          <ul>
            <li>
              <img src="/google.webp" alt="google icon" />
            </li>
            <li>
              <img src="/twitter.webp" alt="twitter icon" />
            </li>
            <li>
              <img src="/facebook.webp" alt="facebook icon" />
            </li>
          </ul>
        </div>

        <div>
          {["First", "Second", "Third", "Fourth"].map((item, index) => {
            return <FooterMenu title={item} key={index}></FooterMenu>;
          })}
        </div>
        <div>
          <p>&copy; Copyrights 2021</p>
          <p>Privacy policy</p>
          <p>Terms of service</p>
        </div>
      </footer>
    </div>
  );
}
