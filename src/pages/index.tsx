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
    <div className="flex flex-col items-center justify-center min-h-screen py-14 bg-gradient-to-r from-indigo-900 to-indigo-800 px-36 font-normal">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="flex flex-1  justify-between w-full pb-16">
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
          <Button type="secondary" className="text-yellow-500 text-sm w-24 h-9 font-medium">
            Sign In
          </Button>
          <Button type="primary" className="text-white text-sm w-24 h-9 font-medium">
            Sign Up
          </Button>
        </div>
      </header>

      <main className="flex flex-col">
        <section id="hero">
          <div>
            <h1>
              Many reasons to get up and start to get back in the business{" "}
            </h1>
            <p>
              The harder you work for something, the greater you’ll feel when
              you achieve it.
            </p>
          </div>
          <div>
            <Button type="primary" className="text-sm w-32 h-10">
              Learn More
            </Button>
            <Button type="secondary" className="text-sm w-32 h-10">
              More
            </Button>
          </div>
          <div>
            <img src="/video.webp" alt="" />
            <p>
              The harder you work for something, the greater you’ll feel when
              you achieve it.
            </p>
            <p>Watch preview</p>
          </div>
          <div>
            <img src="/human.webp" alt="" />
          </div>
        </section>
        <section>
          <ul>
            {brandImgs.map(([src, alt], index) => (
              <BrandItem key={index} src={src} alt={alt}></BrandItem>
            ))}
          </ul>
        </section>
        <section>
          <div>
            <h2>Your choice</h2>
            <h3>
              There are many reasons to get down and start to get depressed
              about your situation.
            </h3>
          </div>
          <div>
            {yccInfos.map(([src, alt, title, subtitle], index) => (
              <Card
                src={src}
                alt={alt}
                title={title}
                subtitle={subtitle}
                key={index}
              ></Card>
            ))}
          </div>
        </section>
        <section>
          <div>
            <h2>
              Increase your business <YellowFont>traffic</YellowFont>
            </h2>
            <p>
              We are committed to processing the information in order to contact
              you and talk about your project.
            </p>
            <Button type="primary" className="text-sm w-32 h-10">
              Learn More
            </Button>
          </div>
          <div>
            <img src="/call-to-action.webp" alt="call to action image" />
          </div>
        </section>
        <section className="flex flex-col">
          <div>
            <h2>
              3 Simple Ways To <YellowFont>Save</YellowFont> A Bunch Of{" "}
              <YellowFont>Money</YellowFont> When Buying A New Computer
            </h2>
            <p>
              Fully customizable and neatly organized components will help you
              work faster without limiting creative freedom.
            </p>
          </div>
          <div>
            {resultsInfo.map(([numbers, data], index) => (
              <ResultsCard
                numbers={numbers}
                data={data}
                key={index}
              ></ResultsCard>
            ))}
          </div>
        </section>
        <section className="flex flex-col">
          <p>
            Create your <YellowFont>next project</YellowFont> with startup
            framework
          </p>
          <Button type="primary" className="text-sm w-36 h-12">
            Get Started
          </Button>
          <img src="/image-background-two.webp" alt="background icon two" />
        </section>
        <section>
          <div>
            <h2>
              Invest property for better <YellowFont>business</YellowFont>
            </h2>
            <p>
              We are committed to processing the information in order to contact
              you and talk about your project. We are committed to processing
              the information.
            </p>
            <Button type="primary" className="text-sm w-32 h-10">
              Learn More
            </Button>
          </div>
          <div>
            <img src="/omah-mukti.webp" alt="example image" />
            <img src="/world-map.webp" alt="world map image" />
          </div>
        </section>
        <section>
          <div>
            <img src="/example-image-three.webp" alt="example image" />
          </div>
          <div>
            <h2>Help Finding Information Online</h2>
            <p>
              Fully customizable and neatly organized components will help you
              work faster without limiting creative freedom.
            </p>
            <div>
              <div>
                {helpInfo.map(([src, alt, title, subtitle], index) => (
                  <Card
                    src={src}
                    alt={alt}
                    title={title}
                    subtitle={subtitle}
                    key={index}
                  ></Card>
                ))}
              </div>
              <img src="/image-background-final.webp" alt="image background" />
            </div>
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
            return (
              <FooterMenu title={item} key={index}></FooterMenu>
            );
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
