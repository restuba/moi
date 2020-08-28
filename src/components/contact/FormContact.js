import React, { useState } from 'react';
import { Tooltip } from 'reactstrap';
import Button from '../button/Button';

const FormContact = (props) => {
    const [tooltipOpen, setTooltipOpen] = useState(false);
    const toggle = () => setTooltipOpen(!tooltipOpen);
    return (
        <>
            <p>Got a project in mind? Okay, lets get started!</p>
            <p>
                <a href="https://github.com/restuba/me/raw/a082c8d9bb3e90de43e1fdd74455273469c42d77/src/assets/img/CV%20-%20Restu%20Bayu%20Aji.pdf" target="" rel="" download>
                    <Button text="VIEW CV"/>
                </a>
                <a href="mailto:resbayuaji@gmail.com" id="DisabledAutoHideExample" style={{margin:"1rem"}}>
                    <Button text="HIRE ME">Email</Button>
                </a>
                <Tooltip style={{color:"white", backgroundColor: "#b88746"}} placement="right" isOpen={tooltipOpen} autohide={false} target="DisabledAutoHideExample" toggle={toggle}>
                    resbayuaji.gmail.com
                </Tooltip>
            </p>
        </>
      );
}

export default FormContact;