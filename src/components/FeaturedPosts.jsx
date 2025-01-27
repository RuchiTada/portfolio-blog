/** @format */
import { Link } from "react-router-dom";

const FeaturedPosts = () => {
  return (
    <div className="mt-8 flex flex-col lg:flex-row gap-8">
      {/* First Post */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        {/* image */}
        <img src="featured1.jpeg" className="rounded-3xl object-cover" />
        {/* details */}
        <div className="flex items-center gap-4">
          <h1 className="font-semibold lg:text-lg">0.1</h1>
          <Link className="text-blue-800 lg:text-lg">Web Design</Link>
          <span className="text-gray-500">2 days ago</span>
        </div>
        {/*title  */}
        <Link
          to="/test"
          className="text-xl lg:text-3xl font-semibold lg:font-bold"
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </Link>
      </div>
      {/* Other */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4"></div>
      {/* Second */}
      <div className="lg:h-1/3 flex justify-between gap-4">
        <img src="featured2.jpeg" className="rounded-3xl object-cover w-1/3" />
      </div>
      {/* details and title */}
      <div className="w-2/3"></div>
      {/* third */}
      <div className="lg:h-1/3 flex justify-between gap-4"></div>
      {/* fourth */}
      <div className="lg:h-1/3 flex justify-between gap-4"></div>
    </div>
  );
};
export default FeaturedPosts;
