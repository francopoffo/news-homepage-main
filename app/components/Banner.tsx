import Image from "next/image";
import BannerPic from "../../public/images/image-web-3-desktop.jpg"

const Banner = () => {
  return (
    <div className="col-span-2 row-span-2 flex flex-col gap-3 mb-8">
      <Image src={BannerPic} alt="Banner que simboliza Web 3" priority={true} quality={100}/>
      <div className="flex gap-8">
        <div className="w-1/2">
          <h1 className="font-extrabold text-4xl">The Bright Future of Web 3.0?</h1>
        </div>
        <div className="flex flex-col w-1/2 gap-4">
          <p className="text-[10px] p-2 pl-0">
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <button className="bg-[--soft-red] w-fit py-2 px-6 text-[--off-white] text-xs font-inter tracking-[0.25rem]">READ MORE</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
