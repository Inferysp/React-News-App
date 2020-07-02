import React from 'react';
import './PaginationSUI.css';
import { Pagination } from 'semantic-ui-react'

class PaginationSUI extends React.Component {
  
  renderArticles = (e, {activePage}) => {
    this.props.onPagePaginationChange(activePage);
  };

  render() {
    const { totalResults } = this.props;
    if(!totalResults) return null;

    return (
      <div className="PaginationSUI">
        <Pagination 
          defaultActivePage={'1'}
          totalPages={Math.ceil(totalResults / 6)}
          onPageChange={this.renderArticles}
        />
      </div>
    );
  }
};
export default PaginationSUI;