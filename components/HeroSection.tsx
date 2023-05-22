import Link from "next/link";
import Image from "next/image";

const HeroSection = () => {
  const header: string =
    "Everything you want to know about your favorite cyclists, races, teams, and more.";
  return (
    <>
      <div className="container flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0">
        {/* left item */}
        <div className="flex flex-col mb-32 md:space-y-10 md:w-1/2">
          <h1 className="text-3xl font-bold text-center md:text-left max-w-md ">
            {header}
          </h1>
          <p className="max-w-sm text-center text-darkGreyishBlue md:text-left ">
            Find out about the latest race stats and winners.
          </p>
          <div className="flex justify-center md:justify-start">
            <Link
              href="/races"
              className="p-2 px-6 bg-brightRedLight text-white rounded-full hover:bg-brightRed"
            >
              Races
            </Link>
          </div>
        </div>
        {/* images */}
        <div>
          <Image
            src="/images/Vollering.jpg"
            width={400}
            height={400}
            alt="Demi Vollering"
          />
        </div>
        <div>
          <Image
            src="/images/Kopecky.jpeg"
            width={400}
            height={400}
            alt="Demi Vollering"
          />
        </div>
        <div>
          <Image
            src="/images/VanVleuten2.jpg"
            width={400}
            height={400}
            alt="Demi Vollering"
          />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
