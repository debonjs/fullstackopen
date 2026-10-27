const SearchFilter = ({ searchQuery, handleFilter }) => {
  return (
    <section>
      <label htmlFor="search-person">Filter shown with </label>
      <input
        id="search-person"
        type="text"
        value={searchQuery}
        onChange={handleFilter}
      />
    </section>
  );
};
export default SearchFilter;
