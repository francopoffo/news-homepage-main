import Image from "next/image";

const BottomNews = () => {
  return (
    <section className="col-span-3 flex items-start gap-4 mt-14">
      <div className="flex gap-6 w-[40%]">
        <Image
          src="/images/image-retro-pcs.jpg"
          alt="Retro computers."
          height={140}
          width={115}
        />
        <div className="flex flex-col gap-4 w-[55%]">
          <h3 className="text-[2rem] font-bold text-[--grayish-blue]">01</h3>
          <h2 className="font-bold">Reviving Retro PCs</h2>
          <p className="text-sm">
            What happens when old PCs are given modern upgrades?
          </p>
        </div>
      </div>
      <div className="flex gap-6 w-[40%]">
        <Image
          src="/images/image-top-laptops.jpg"
          alt="Laptop keyboard."
          height={140}
          width={115}
        />
        <div className="flex flex-col gap-4 w-[55%]">
          <h3 className="text-[2rem] font-bold text-[--grayish-blue]">02</h3>
          <h2 className="font-bold">Top 10 Laptops of 2022</h2>
          <p className="text-sm">
            Our best picks for various needs and budgets.
          </p>
        </div>
      </div>
      <div className="flex gap-6 w-[40%]">
        <Image
          src="/images/image-gaming-growth.jpg"
          alt="Videogame console controller levitating on top of a human hand."
          height={140}
          width={115}
        />
        <div className="flex flex-col gap-4 w-[55%]">
          <h3 className="text-[2rem] font-bold text-[--grayish-blue]">03</h3>
          <h2 className="font-bold">The Growth of Gaming</h2>
          <p className="text-sm">
            How the pandemic has sparked fresh opportunities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BottomNews;
