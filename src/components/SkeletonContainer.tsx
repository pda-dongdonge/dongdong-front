export default function SkeletonContainer() {
  const numbers = Array.from({ length: 12 }, (_, i) => i + 1);
  return (
    <div className=" w-full min-h-full  py-2 px-4 flex flex-col items-center">
      <section className="grid grid-cols-2 md:grid-cols-3 w-full lg:grid-cols-4 max-w-[1440px] gap-4">
        {numbers.map((n) => (
          <div key={n} className="grid gap-1 mx-2 my-2 animate-pulse">
            <figure className="shadow rounded-md hover:shadow-lg w-full aspect-square bg-gray-400 transform transition-all duration-500 hover:scale-105 hover:ease-out"></figure>
            <div className="flex justify-between ">
              <section className="flex items-center w-1/2 space-x-2">
                <figure className="bg-gray-200 rounded-full h-3 w-4"></figure>
                <p className="h-2 w-full bg-gray-200 rounded-lg"></p>
              </section>
              <p className="h-2 w-4 rounded-md bg-gray-200"></p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
