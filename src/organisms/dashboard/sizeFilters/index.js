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
        if (this.selectedCheckboxes.delete(label)){
            this.selectedCheckboxes.has(label)
        } else {
            this.selectedCheckboxes.add(label);
        }
        console.log(Array.from(this.selectedCheckboxes));
        this.props.updateFilters(Array.from(this.selectedCheckboxes))
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