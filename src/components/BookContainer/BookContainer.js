import React from 'react'
import "./style.css"
import defaultImg from "../../image/defaultImg.jpg";

function BookContainer({volume}) { 
        // could be accessed
        // accessInfo,
        // etag,
        // id,
        // saleInfo,
        // searchInfo,
        // {
        //    categories,
        //    language,
        //    publishedDate,
        //    title,
        //    authors,
        // }
    // console.log(volume);

    const { volumeInfo } = volume;
    
    const thumbnail = volumeInfo.imageLinks ? volumeInfo.imageLinks.thumbnail : defaultImg;
    const categories = volumeInfo.categories ? volumeInfo.categories : ["unknown"];
    const language = volumeInfo.language ? volumeInfo.language : "default:en";
    const publishedDate = volumeInfo.publishedDate ? volumeInfo.publishedDate : "2020";
    const title = volumeInfo.title ? volumeInfo.title : "unknown: mystry"
    const authors = volumeInfo.authors ? volumeInfo.authors : ["Mr anonymous"];

    return (
        <div className="book-card">
            <img height="200" width="170" src={thumbnail} alt="thumbnail" />
            <h4 className="title">{title}</h4>
        </div>
    )
}

export default BookContainer
