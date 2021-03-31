import React, { FC } from 'react';
import Button from '@material-ui/core/Button';
interface Props{
    handleReset:()=>void
}

const Completed: FC<Props> = ({handleReset}) => {
    return (
        <div className="completed">
            Thank You For Registering and Signing Up!<br/>From Here Starts Your Journey With <i>Your</i> NewsLetter...<br/>
            <p className="completed-p">To return to home page press Reset or simply reload the page</p>
            <div className="reset-div">
                <Button onClick={handleReset} className="reset">Reset</Button>
            </div>
        </div>
    )
}

export default Completed;