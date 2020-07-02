import React from 'react';
import './SemanticLanguageBar.css';
import { Dropdown } from 'semantic-ui-react'

const languageOptions = [
    { key: 'Unitet States', text: 'Unitet States', value: 'us' },
    { key: 'Arabic', text: 'Arabic', value: 'ar' },
    { key: 'French', text: 'French', value: 'fr' },
    { key: 'German', text: 'German', value: 'de' },
    { key: 'Italian', text: 'Italian', value: 'it' },
    { key: 'Polish', text: 'Polish', value: 'pl' },
    { key: 'Russian', text: 'Russian', value: 'ru' },
    { key: 'Spanish', text: 'Spanish', value: 'es' },
]

class SemanticLanguageBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
        }
    }

    onValueChange = (e, {value}) => {
        this.setState({value});
        this.props.onLanguageChange(value);
    };

    render() {
        const { value } = this.state;

        return (
            <Dropdown
                id="LanguageBarSUI"
                placeholder='Select news country'
                button
                className='icon'
                floating
                labeled
                icon='world'
                options={languageOptions}
                search
                value={value}
                onChange={this.onValueChange}
            />
        )
    }
}

export default SemanticLanguageBar;