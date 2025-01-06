const Cta = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="bg-primary rounded p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-2xl font-bold text-white md:text-3xl">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit
            </h2>

            <p className="hidden text-white/90 sm:mt-4 sm:block">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
              egestas tempus tellus etiam sed. Quam a scelerisque amet
              ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat
              quisque ut interdum tincidunt duis.
            </p>

            <div className="mt-4 md:mt-8">
              <a
                href="#"
                className="inline-block rounded border border-white bg-white px-12 py-3 text-sm font-medium text-primary transition hover:bg-transparent hover:text-white focus:outline-none focus:ring focus:ring-yellow-400">
                Get Started Today
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
          <img
            alt=""
            src="https://plus.unsplash.com/premium_photo-1664368832311-7fe635e32c7c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dHJhdmVsfGVufDB8fDB8fHww"
            className="h-40 w-full object-cover sm:h-56 md:h-full"
          />

          <img
            alt=""
            src="https://plus.unsplash.com/premium_photo-1719843013722-c2f4d69db940?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dHJhdmVsfGVufDB8fDB8fHww"
            className="h-40 w-full object-cover sm:h-56 md:h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Cta;
