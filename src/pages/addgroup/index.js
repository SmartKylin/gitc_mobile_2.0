import React from 'react';
import ChildContainer from 'containers/child_container'
import AddGroupContainer from './container/addGroupMenu'
export default class AddGroup extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    componentWillMount () {
        document.title = "现场加群"
    }
    render(){
        return(
            <ChildContainer>
                <AddGroupContainer/>
            </ChildContainer>
        )
    }
}

