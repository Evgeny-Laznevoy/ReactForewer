import React from 'react'
import s from './ProfileInfo.module.css'

class ProfileStatus extends React.Component {

    statusInputRef = React.createRef()

    state = {
        edditMode: false,
        status: this.props.status
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }


    activateEditMode = () => {
        this.setState({
            edditMode: true
        })

        
    }

    deactivateEditMode = () => {
        this.setState({
            edditMode: false
        });
        this.props.updateStatus(this.state.status);
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
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={ this.deactivateEditMode } value={this.state.status} />
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus