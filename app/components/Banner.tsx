import Image from "next/image";
import BannerPic from "../../public/images/image-web-3-desktop.jpg"

const Banner = () => {
  return (
    <div className="col-span-2 row-span-2 flex flex-col gap-3 mb-8 mr-4">
      <Image src={BannerPic} alt="Banner que simboliza Web 3" priority={true} quality={100}/>
      <div className="flex justify-between gap-10">
        <div className="w-1/2">
          <h1 className="font-extrabold text-[3.3rem] pr-16 leading-tight">The Bright Future of Web 3.0?</h1>
        </div>
        <div className="flex flex-col w-1/2 gap-10 mt-2">
          <p className="text-sm p-2 pl-0 leading-relaxed">
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <button className="bg-[--soft-red] w-fit py-4 px-8 text-[--off-white] text-xs font-inter tracking-[0.25rem]">READ MORE</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
