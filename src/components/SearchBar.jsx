import "./SearchBar.css";

function SearchBar({value, onChange}){
    return (
        <input 
            type="text"
            placeholder="Buscar productos ..."
            className="search-bar"
            value={value}
            onChange={(e) => onChange(e.target.value)}
        />
    );
}

export default SearchBar