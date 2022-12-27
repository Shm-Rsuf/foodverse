import Recipe from "./Recipe";

const Favourites = ({ savedItems }) => {
  return (
    <div className="favourite">
      {savedItems.length === 0 && (
        <p className="text-rose-300 text-2xl lg:text-3xl font-semibold text-center pt-10">
          Favourite list is empty!
        </p>
      )}

      <div className="favourite-items container mx-auto py-10 flex flex-wrap gap-10 justify-center">
        {savedItems.map((recipe) => (
          <Recipe key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default Favourites;
