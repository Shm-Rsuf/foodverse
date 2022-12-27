import { Link } from "react-router-dom";
import FryingPan from "./FryingPan";

const NotFound = () => {
  return (
    <div className="not-found container mx-auto py-8 flex flex-col items-center gap-5">
      <p className="text-2xl lg:text-3xl text-center font-semibold text-rose-300 leading-normal">
        Page not found!
      </p>
      <Link
        to="/"
        className="bg-sky-400 text-sky-50 p-3 px-8 rounded-full uppercase shadow-lg shadow-sky-200 hover:bg-rose-600 hover:text-rose-50 hover:shadow-rose-300 duration-300"
      >
        Go home
      </Link>
      <FryingPan />
    </div>
  );
};

export default NotFound;
