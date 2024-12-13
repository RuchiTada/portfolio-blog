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
        <h1> </h1>
        <p> </p>
      </div>
      {/* Animated button */}
      <div className=""></div>
      {/*FEATURED POSTS*/}
      {/*POST LIST*/}
    </div>
  );
};
export default Homepage;
