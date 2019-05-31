import React from 'react';
import { withRouter} from 'react-router-dom';
import FiltersHeader from './filtersHeader'
import Checkbox from '../../../atoms/checkbox'
import checkboxes from './checkboxes';
const OPTIONS = [
    "X", "L", "XL"]
;
class SizeFilters extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            checkboxes: OPTIONS.reduce(
                    (options, option) => ({
                        ...options,
                        [option]: false
                    }),
                {}
            )
        };
    }

    createCheckbox = (option, id) => (
        <Checkbox
            label={option}
            id={id}
            isSelected={this.state.checkboxes[option]}
            onCheckboxChange={this.handleCheckboxChange}
            key={option}
        />
    );

    createCheckboxes = () => OPTIONS.map(this.createCheckbox);

    handleCheckboxChange = changeEvent => {
        const { name } = changeEvent.target;
        this.setState(prevState => ({
            checkboxes: {
                ...prevState.checkboxes,
                [name]: !prevState.checkboxes[name],
            }
        }), () =>this.props.callBackFilter(this.state.checkboxes));
    };

    render() {
        return (
            <div>
                <FiltersHeader>
                    filters
                    {this.createCheckboxes()}
                </FiltersHeader>
            </div>
        );
    }
}

export default withRouter(SizeFilters)