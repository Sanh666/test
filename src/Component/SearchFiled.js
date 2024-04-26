import { useContext, useState } from "react";
import "./SearchFiled.css";
import { ImageContext } from "../App";

const SearchField = () => {
    const { fetchData, setSearchImage } = useContext(ImageContext);
    const [searchValue, setSearchValue] = useState("");

    const handleInputChange = (e) => {
        setSearchValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        performSearch();
    };

    const handleEnter = (e) => {
        if (e.key === "Enter") {
            e.preventDefault(); // Prevent default behavior for the Enter key
            performSearch();
        }
    };

    const performSearch = () => {
        fetchData(`search/photos?page=1&query=${searchValue}&client_id=${process.env.REACT_APP_ACCESS_KEY}`);
        setSearchValue("");
        setSearchImage(searchValue);
    };

    return (
        <div>
            <div className="header">
                <div className="content">
                    <h2>Image Search App</h2>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="search"
                            placeholder="Search Image"
                            value={searchValue}
                            onChange={handleInputChange}
                            onKeyDown={handleEnter}
                        />
                        <button type="submit">Search</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SearchField;
