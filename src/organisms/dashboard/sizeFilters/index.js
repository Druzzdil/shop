import React from 'react';
import { withRouter} from 'react-router-dom';
import FiltersHeader from './filtersHeader'
import Checkbox from '../../../atoms/checkbox'
import checkboxes from './checkboxes';
const OPTIONS = [
    "X", "L", "XL"
    ]
;
class SizeFilters extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            fruites: [
                {id: 1, value: "X", isChecked: false},
                {id: 2, value: "Xl", isChecked: false},
                {id: 3, value: "M", isChecked: false},
                {id: 4, value: "L", isChecked: false}
            ]
        }
    }

    // handleCheckboxChange = changeEvent => {
    //     const { name } = changeEvent.target;
    //     console.log(changeEvent.target, 'target');
    //     this.setState(prevState => ({
    //         checkboxes: {
    //             ...prevState.checkboxes,
    //             [name]: !prevState.checkboxes[name],
    //         }
    //     }), () =>this.props.callBackFilter(this.state.checkboxes));
    // };

    handleCheckChieldElement = (event) => {
        let fruites = this.state.fruites
        fruites.forEach(fruite => {
            if (fruite.value === event.target.value)
                fruite.isChecked =  event.target.checked
        })
        this.setState({
            fruites: fruites
        }, () => this.props.callBackFilter(this.state.fruites))
    }

    render() {
        return (
            <div>
                <FiltersHeader>
                    filters
                    {
                        this.state.fruites.map((fruite) => {
                            return (<Checkbox handleCheckChieldElement={this.handleCheckChieldElement}  {...fruite} />)
                        })
                    }
                </FiltersHeader>
            </div>
        );
    }
}

export default withRouter(SizeFilters)