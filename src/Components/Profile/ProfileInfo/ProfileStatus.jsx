import React from 'react'
import s from './ProfileInfo.module.css'

class ProfileStatus extends React.Component {

    state = {
        edditMode: false,
        title:'ky'
    }


    activateEditMode = () => {
        this.setState({
            edditMode: true
        })

        //this.state.edditMode = true
    }

    deactivateEditMode = () => {
        this.setState({
            edditMode: false
        })
    }

    render() {
        return (
            <div>
                {!this.state.edditMode &&
                    <div>
                        <span onDoubleClick = { this.activateEditMode }>{this.props.status}</span>
                    </div>
                }
                {this.state.edditMode &&
                    <div>
                        <input autoFocus={true} onBlur={ this.deactivateEditMode } value={this.props.status} />
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus