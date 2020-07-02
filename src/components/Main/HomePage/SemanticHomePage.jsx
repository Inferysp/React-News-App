import React from 'react';
import './SemanticHomePage.css';
import SemanticNewsList from "./SemanticNewsList/SemanticNewsList";
import NewsFiltersBarSUI from "./FiltersBarSUI/NewsFiltersBarSUI";
import LanguageContext from '../../../LanguageContext';
import PaginationSUI from './PaginationSUI/PaginationSUI';

class SemanticHomePage extends React.Component {
    static contextType=LanguageContext;
    constructor(props) {
        super(props)

        this.state = {
            results: null, 
            category: 'general',
            lang: 'pl',
            phrase: '',
            page: '1',
        }
    }
    
    componentDidMount() {
        this.getArticles();
        this.setState({ lang: this.context });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevState.category !== this.state.category || prevState.lang !== this.state.lang) this.getArticles();
        if(prevState.lang !== this.context) this.setState({ lang: this.context});
        if(prevState.phrase !== this.state.phrase) this.getArticles();
        if(prevState.page !== this.state.page) this.getArticles();
    }

    getArticles() {

        const { category, lang, phrase, page } = this.state;
        const query = category ? `&category=${category}` : '';
        const queryWithPhrase = phrase ? `${query}&q=${phrase}` : query;

        fetch(`http://localhost:4000/articles?country=${lang}${queryWithPhrase}&page=${page}`)
            .then((responce) =>  responce.json())
            .then((results) => this.setState({results}));
    }
    

    setCategory = (category) => this.setState({ category });

    setFormBar = (e) => {
        const phrase = e.target.value;
        if (phrase.length >= 3) this.setState({ phrase });
        if (!phrase || phrase === '') this.setState({ phrase: null });
    };

    onPagePaginationChange = (activePage) => {
        this.setState({page: activePage});
    }

    render() {
        const { results } = this.state;
        if(!results) return null;

        return (
                <div id="SemanticHomePage">
                    <NewsFiltersBarSUI onCategoryChange={this.setCategory} onFormBarChange={this.setFormBar} onLanguageChange={this.props.onLanguageChange} />
                    <PaginationSUI onPagePaginationChange={this.onPagePaginationChange} totalResults={results.totalResults} />
                    <SemanticNewsList articles={results.articles} />
                </div>
        );
    }
}

export default SemanticHomePage;