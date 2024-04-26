import React, { createContext, useState } from "react";
import SearchField from "./Component/SearchFiled"; // Corrected import
import Image from "./Component/Imagee"; // Corrected component name
import useAxios from "./Hooks/useAxios";
export const ImageContext = createContext();

const App = () => {
  const [searchImage, setSearchImage] = useState('');
  const { response, isLoading, error, fetchData } = useAxios(`search/photos?page=1&query=cats&client_id=${process.env.REACT_APP_ACCESS_KEY}`);

  const value = {
    response,
    isLoading,
    error,
    fetchData,
    searchImage,
    setSearchImage,
  };

  return (
    <ImageContext.Provider value={value}>
      <div>
        <SearchField />
        <Image />
      </div>
    </ImageContext.Provider>
  );
};

export default App;