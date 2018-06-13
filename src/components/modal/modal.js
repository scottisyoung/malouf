import React, {Component} from 'react';
import './modal.css';

class Modal extends Component {
    
    onClose = (e) => {
        this.props.onClose && this.props.onClose(e);
    }

    render() {

        if(!this.props.show) {
            return null;
        }

        return(
            <div>
                <div className="modalPageBG">
                    <div className="modalBG">
                        <div className="exit">
                            <div className="closeButton" 
                                 onClick={(e) => {this.onClose(e)}}> CLOSE 
                            </div>
                        </div>
                        {this.props.children} 
                    </div>
                </div>
            </div>
        )
    }
}

export default Modal;