import { NavLink } from "react-router-dom";

const Navbar = ({
  searchQuery,
  setSearchQuery,
  searchHandler,
  inputField,
  savedItems,
}) => {
  const navActive = ({ isActive }) => {
    return {
      color: isActive ? "#f43f5e" : null,
    };
  };

  return (
    <div className="navbar flex justify-between items-center container mx-auto py-5 flex-col lg:flex-row gap-5 lg:gap-0">
      <h2 className="logo text-2xl font-semibold lowercase italic">
        Food<span className="text-rose-500">verse</span>
      </h2>
      <form className="search-bar" onSubmit={searchHandler}>
        <input
          ref={inputField}
          className="bg-white/75 p-2 px-8 lg:w-96 rounded-full outline-none shadow-lg shadow-rose-100 focus:shadow-rose-200 duration-300"
          type="search"
          placeholder="search recipe..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          required
        />
      </form>
      <ul className="menu flex gap-5">
        <li>
          <NavLink
            style={navActive}
            end
            to="/"
            className="text-gray-400 hover:text-gray-600 duration-300"
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            style={navActive}
            to="/favourites"
            className="text-gray-400 hover:text-gray-600 duration-300"
          >
            Favourites{" "}
            <span className="favourites-count font-semibold text-sky-400">
              ({savedItems.length})
            </span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
