import React from 'react'
import { Dropdown } from 'semantic-ui-react';
import "./CategoryDropdownSUI.css";

const options = [
  { key: 'general',
    text: 'general',
    value: 'general',
  },
  { key: 'business',
    text: 'business',
    value: 'business',
  },
  { key: 'entertainment',
    text: 'entertainment',
    value: 'entertainment',
  },
  { key: 'health',
    text: 'health',
    value: 'health',
  },
  { key: 'science',
    text: 'science',
    value: 'science',
  },
  { key: 'sports',
    text: 'sports',
    value: 'sports',
  },
  { key: 'technology',
    text: 'technology',
    value: 'technology',
  },
];

class CategoryDropdownSUI extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
          value: '',
      }
  }

  onValueChange = (e, {value}) => {
      console.log({value});
      this.setState({value});
      this.props.onCategoryChange(value);
  };

  render() {
      const { value } = this.state;

        return (
            <Dropdown
              id="CategoryDropdownSUI"
              placeholder="Choose Category"
              fluid
              selection
              options={options}
              value={value}
              onChange={this.onValueChange}
            />
        );
    }
}

export default CategoryDropdownSUI;