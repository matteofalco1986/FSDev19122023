import React from 'react';

class MyFooter extends React.Component {
    render(){
        return (
            <div>
                <p>{this.props.mainText}</p>
            </div>
        )
    }
}

export default MyFooter;