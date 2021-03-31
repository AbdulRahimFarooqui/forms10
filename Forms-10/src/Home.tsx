import React, { FC } from 'react';

interface Props {
    setIsSignup: (para: boolean) => void
}
const Home: FC<Props> = ({ setIsSignup }) => {
    return (
        <div>
            <p className="Welcome">Welcome to our Newsletter!</p>
            <p className="intro-text"> To subscribe to our services, please signup:</p>
            <div className="col">
                <div className="container-2">
                    <div className="btn btn-two" onClick={() => setIsSignup(true)}>
                        <span>SIGNUP!</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;