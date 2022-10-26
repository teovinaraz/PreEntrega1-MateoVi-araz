
const SearchForm = ({search}) => {
    return (
        <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder={search} aria-label="Search" />
        <button className="btn btn-success" type="submit">Search</button>
      </form>
    );
}

export default SearchForm;
