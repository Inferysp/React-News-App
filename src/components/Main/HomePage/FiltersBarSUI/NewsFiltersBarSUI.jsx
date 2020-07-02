import React from 'react';
import PropTypes from 'prop-types';
import "./NewsFiltersBarSUI.css";
// import CategoryDropdown from "./CategoryDropdown";
import CategoryDropdownSUI from "./CategoryDropdownSUI";
import SemanticLanguageBar from "./SemanticLanguageBar";
import { Input } from 'semantic-ui-react';

const NewsFiltersBarSUI = (props) => (
    <>
    <div id="NewsFiltersBarSUI">
        <h1>Search: </h1>
        <Input
        id="FormBarInput" 
        placeholder="search..."
        onChange={props.onFormBarChange}
        />
        <CategoryDropdownSUI onCategoryChange={props.onCategoryChange}/>
        <SemanticLanguageBar onLanguageChange={props.onLanguageChange}/>

    </div>
    </>
);

NewsFiltersBarSUI.propTypes = {
    onCategoryChange: PropTypes.func.isRequired,
    onFormBarChange: PropTypes.func.isRequired,
};

export default NewsFiltersBarSUI;