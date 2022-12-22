import { Link } from "react-router-dom";

const Recipe = ({ recipe }) => {
  return (
    <div className="recipe w-80 overflow-hidden bg-white/75 rounded-2xl shadow-xl p-5 shadow-rose-100 border-2 border-white flex flex-col gap-5">
      <div className="img h-40 overflow-hidden flex justify-center items-center rounded-lg">
        <img
          className="block w-full "
          src={recipe.image_url}
          alt={recipe.title}
        />
      </div>

      <div className="texts">
        <span className="publisher text-xs uppercase text-sky-400 font-semibold tracking-widest">
          {recipe.publisher}
        </span>
        <h2 className="title text-2xl font-semibold capitalize truncate">
          {recipe.title}
        </h2>
        <Link
          className="bg-gradient-to-br from-rose-400 to-rose-600 text-rose-50 p-3 px-8 rounded-lg text-sm uppercase font-medium tracking-wider inline-block mt-2 shadow-md shadow-rose-200 hover:shadow-lg hover:shadow-rose-300 duration-300"
          to="/"
        >
          View recipe
        </Link>
      </div>
    </div>
  );
};

export default Recipe;
