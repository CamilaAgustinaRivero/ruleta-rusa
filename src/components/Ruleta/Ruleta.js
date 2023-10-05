import React, { useEffect, useState } from 'react';
import ruleta from '../../imgs/ruleta.png';
import ruleta_full from '../../imgs/ruleta_full.png';
import pin from '../../imgs/pin.png';
import Msg from '../Msg';
import './Ruleta.css';

function Ruleta() {
    const [rotation, setRotation] = useState(0);
    const [isSpinning, setIsSpinning] = useState(false);
    const [firstTurn, setFirstTurn] = useState(false);

    useEffect(() => {
        if (isSpinning) {
            setTimeout(() => {
                setIsSpinning(false);
                setFirstTurn(true);
            }, 1500);
        }
    }, [isSpinning]);

    const handleRotateClick = () => {
        if (!isSpinning) {
            const randomRotation = rotation + Math.floor(Math.random() * 360) + 90;
            setRotation(randomRotation);
            setIsSpinning(true);
        }
    };

    return (
        <div className="ruletaContainer">
            <img
                src={pin}
                className="pin"
                alt="pin"
            />
            <div className="imgsContainer">
                <img
                    src={ruleta_full}
                    className="ruleta_full"
                    alt="ruleta_full"
                />
                <img
                    src={ruleta}
                    className="ruleta"
                    alt="ruleta"
                    style={{ transform: `rotate(${rotation}deg)` }}
                />
            </div>
            <button
                className="btn"
                onClick={handleRotateClick}
            >
                Girar
            </button>
            {firstTurn && !isSpinning ? <Msg /> : null}
        </div>
    );
}

export default Ruleta;
