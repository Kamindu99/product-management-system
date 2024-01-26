import React, { useEffect, useState } from 'react';
import './AlertBox.css';

const MessageDialog = (props) => {
    const [display, setDisplay] = useState(false);

    useEffect(() => {
        setDisplay(props.show);
    }, [props.show]);

    const handleClose = () => {
        setDisplay(false);
        props.setMessageData();
        if (props.callback) {
            if (props.callback === 'reload') {
                window.location.reload();
            } else {
                window.location.replace(props.callback);
            }
        }
    };

    useEffect(() => {
        setDisplay(props.show);
        document.body.classList.toggle('blur-background', props.show);

        return () => {
            document.body.classList.remove('blur-background');
        };
    }, [props.show]);

    return (
        <div className={`modal modalbackdrop custom-modal ${display ? 'show' : ''}`} tabIndex="-1" style={{ display: display ? 'block' : 'none' }} onClick={handleClose}>
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content" >
                    <div className="modal-header" style={{ borderBottom: '0px' }} >
                        <h4 className="modal-title">{props.name}</h4>
                        <button type="button" className="btn-close" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        {props.message}
                    </div>
                    <div className="modal-footer" style={{ borderTop: '0px' }}>
                        <button type="button" className="btn btn-secondary" onClick={handleClose}>Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MessageDialog;
