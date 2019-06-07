import React from 'react';

const MenuProvider = ComposedComponent => {
    return class extends React.Component {

        componentWillReceiveProps(nextProps){
            console.log(nextProps, 'nextProps');
        }

        render() {
            return <ComposedComponent
                {...this.props}/>
        }
    }
};

export default MenuProvider;
