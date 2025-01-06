const Hero = () => {
  return (
    <section className="relative  bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-background/25  from-background/65 to-background/25 bg-gradient-to-r "></div>
      <div className="relative py-10 sm:py-0 container justify-center text-center lg:flex lg:h-[90vh] lg:items-center ">
        <div className="">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Let us find your
            <strong className="block font-extrabold text-primary">
              Forever Home.
            </strong>
          </h1>

          <p className="mt-4 max-w-lg sm:text-xl/relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            illo tenetur fuga ducimus numquam ea!
          </p>

          <div className="mt-8 flex justify-center  gap-4 text-center">
            <a
              href="#"
              className="block w-full rounded  bg-primary px-6 sm:px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto">
              Get Started
            </a>

            <a
              href="#"
              className="block w-full rounded whitespace-nowrap bg-background px-6 sm:px-12 py-3 text-sm font-medium text-foreground shadow  focus:outline-none focus:ring active:text-rose-500 sm:w-auto">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
