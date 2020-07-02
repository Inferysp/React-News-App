import './AboutNasa.css';
import React, { useState, useEffect, useCallback, useContext } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import LanguageContext from '../../../LanguageContext';
import "react-datepicker/dist/react-datepicker.css";
import SemanticNewsList from "../HomePage/SemanticNewsList/SemanticNewsList";

const sortByOptions =  [
    {value: 'publishedAt', name: 'publishedAt' },
    {value: 'popularity', name: 'popularity' },
    {value: 'relevancy', name: 'relevancy' },
]

const AboutNasaPage = () => {
    const [startDate, setStartDate] = useState(moment().subtract(1, 'months').toDate());
    const [endDate, setEndDate] = useState(moment().toDate());
    const [results, setResults] = useState(null);
    const [sortBy, setSortBy] = useState(sortByOptions[2].value);
    const lang = useContext(LanguageContext);

    const fetchArticles = useCallback(() => {
        fetch(`http://localhost:4000/Nasa?from=${startDate.toISOString()}&to=${endDate.toISOString()}&sortBy=${sortBy}&language=${lang}`)
          .then((response) =>  response.json())
          .then((res) => setResults(res));
    }, [startDate, endDate, sortBy, lang ])

    useEffect(() => { fetchArticles(); }, [fetchArticles]);

    const sortFunction = e => setSortBy(e.target.value);

    return (
        <>
        <div className="NasaPage-container-selecors">
            <div className="startDate-container">
                <label>Start date:</label>
                <DatePicker
                    selected={startDate}
                    onChange = { setStartDate }
                    dateFormat="dd-MM-yyyy"
                />
            </div>
            <div className="endDate-container">
                <label>End date:</label>
                <DatePicker 
                    selected={endDate}
                    onChange = { setEndDate }
                    dateFormat="dd-MM-yyyy"
                />
            </div>
            <div className="selector-container">
                <label>Sort by:</label>
                <select className="Selector" onChange={sortFunction}>
                    {sortByOptions.map(({value, name}) => (
                        <option value={value}>{name}</option>
                    ))}
                </select>
            </div>
        </div>
        <div>
            {results !== null ? (
                <SemanticNewsList
                    articles={results.articles.filter((item, index, self) => {
                        return index === self.findIndex((e) => e.title === item.title);
                    })}
                />
            ) : ( <h1>No results</h1> )}
        </div>
        </>
    );
};

export default AboutNasaPage;