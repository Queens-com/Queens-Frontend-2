"use client";

export default function Errors({ message }: { message: string }) {
  const handleReload = () => {
    window.location.reload(); // Passing true as a parameter to force a reload from the server
  };
  return (
    <main className="">
      <aside className="">
        <article
          className={` flex flex-col gap-5  pt-20  text-sm text-center  justify-center items-center -mt-20`}
        >
          <p className="uppercase text-red-600">
            {message} <br></br> check connection and reload
          </p>
          <button
            onClick={handleReload}
            className="font-inter border-2 border-black rounded-full px-6 py-2 sm:py-3 mt-2 font-semibold text-sm sm:text-base transition-colors duration-300 hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
          >
            Reload
          </button>
        </article>
      </aside>
    </main>
  );
}
