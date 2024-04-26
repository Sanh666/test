import React, { useContext } from "react";
import "./Image.css";
import { ImageContext } from "../App";
import Images from "./Images";
import Skeketon from './Skeketon'
const Imagee = () => {
    const { response, isLoading, searchImage } = useContext(ImageContext);

    return (
        <div className="Image-container">
            <h1 className="image-title">Result for {searchImage || 'Cats'}</h1>
            <div className="grid-container">
                {isLoading ? <Skeketon item={10} /> : response.map((data, key) => (
                    <Images key={key} data={data} />
                ))}
            </div>
        </div>
    );
};

export default Imagee;
