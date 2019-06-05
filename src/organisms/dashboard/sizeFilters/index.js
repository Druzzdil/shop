import React from 'react';
import { withRouter} from 'react-router-dom';
import FiltersHeader from './filtersHeader'
import Checkbox from '../../../atoms/checkbox'
const availableSizes = ['XS', 'S', 'M', 'ML', 'L', 'XL', 'XXL'];

class SizeFilters extends React.Component {

    componentDidMount(){
        this.selectedCheckboxes = new Set()
    }

    createCheckbox = label => (
        <Checkbox
            classes="filters-available-size"
            label={label}
            handleCheckboxChange={this.toggleCheckbox}
            key={label}
        />
    );

    createCheckboxes = () => availableSizes.map(this.createCheckbox);

    toggleCheckbox = label => {
        if (this.selectedCheckboxes.has(label)){
            this.selectedCheckboxes.delete(label)
        } else {
            this.selectedCheckboxes.add(label);
        }
        this.props.updateFilters(Array.from(this.selectedCheckboxes))
    };

    render() {
        console.log(this.props, 'updateFilters    ');
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