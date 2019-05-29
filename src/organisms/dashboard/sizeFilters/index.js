import React from 'react';
import { withRouter} from 'react-router-dom';
import FiltersHeader from './filtersHeader'
import Checkbox from '../../../atoms/checkbox'
import checkboxes from './checkboxes';

class SizeFilters extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            checkedItems: new Map(),
            value: ""
        };
    }

    handleChange = (e) => {
        const item = e.target.name;
        console.log(e.target.value, 'target');
        const isChecked = e.target.checked;
        this.setState(prevState => ({
            checkedItems: prevState.checkedItems.set(item, isChecked),
        }));
    };

    renderFilters = () => {
      return checkboxes.map(item => (
          <label key={item.key}>
              {item.name}
              <Checkbox
                  value={item.value}
                  size={this.state.size}
                  name={item.name}
                  id={item.id}
                  checked={this.state.checkedItems.get(item.name)}
                  onChange={this.handleChange} />
          </label>
      ))
    };

    render() {
        console.log(this.state,'state');
        console.log(checkboxes.map(item=>item),'props');
        return (
            <div>
                <FiltersHeader>
                    filters
                    {this.renderFilters()}
                </FiltersHeader>
            </div>
        );
    }
}

export default withRouter(SizeFilters)