import React from 'react';
import './SemanticNewsList.css';
import SemanticNewsCard from "./SemanticNewsCard";

const SemanticNewsList = (props) => (
    <div id="SemanticNewsList">
        {props.articles.map((item) => (
            <SemanticNewsCard
                key={Math.random()}
                urlToImage={item.urlToImage}
                title={item.title}
                description={item.description}
                url={item.url}
                sourceName={item.source.name}
            />
        ))}
    </div>
);

export default SemanticNewsList;