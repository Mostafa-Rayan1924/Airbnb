const Title = ({ title }: { title: string }) => {
  return (
    <div className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-10">
      {title}
    </div>
  );
};

export default Title;
