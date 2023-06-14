const Aside = () => {
  return (
    <aside className="row-span-2 bg-[--very-dark-blue] p-6 pt-9 pb-0 mb-8">
      <h2 className="text-[--soft-orange] text-4xl font-bold mb-8 pl-2">New</h2>
      <div className="text-white flex flex-col gap-12">
        <div>
          <h3 className="font-bold text-lg mb-2 px-2">Hydrogen VS Electric Cars</h3>
          <p className="text-sm mb-12 font-extralight px-2">
            Will hydrogen-fueled cars ever catch up to EVs?
          </p>
          <hr></hr>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-2 px-2">
            The Downsides of AI Artistry
          </h3>
          <p className="text-sm mb-12 font-extralight px-2">
            What are the possible adverse effects of on-demand AI image
            generation?
          </p>
          <hr></hr>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-2 px-2">Is VC Funding Drying Up?</h3>
          <p className="text-sm mb-12 font-extralight px-2">
            Private funding by VC firms is down 50% YOY. We take a look at what
            that means.
          </p>
        </div>
      </div>
    </aside>
  );
};

export default Aside;
