/** @format */

import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="mt-4 flex flex-col gap-4">
      {/*BREADCRUMBS*/}
      <div className="flex gap-4">
        <Link to="">Home</Link>
        <span>.</span>
        <span className="text-blue-800">Blogs and Articles</span>
      </div>
      {/*INTRODUCTION*/}
      <div className="flex items-center justify-between"></div>
      {/* tiles */}
      <div className="">
        <h1 className="text-gray-800 text-2xl md:text-5l lg:text-6xl font-bold">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry
        </h1>
        <p className="mt-8 text-md md:text-xl">
          Lorem Ipsum has been the industry standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.
        </p>
      </div>
      {/* Animated button */}
      <div className=""></div>
      {/*FEATURED POSTS*/}
      {/*POST LIST*/}
    </div>
  );
};
export default Homepage;
