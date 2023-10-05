import React, { useState, useEffect } from 'react';
import {
    Dialog,
    DialogTitle,
    Typography,
    IconButton,
    DialogContent,
    DialogActions,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import './Msg.css';
import excusas from '../../utils/excusas';

function Msg() {
    const [open, setOpen] = useState(true);
    const [randomExcuse, setRandomExcuse] = useState('');
    const [randomNumber, setRandomNumber] = useState('');

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * excusas.length);
        setRandomExcuse(excusas[randomIndex]);

        const randomNum = Math.floor(Math.random() * 1000);
        setRandomNumber(randomNum.toString());
    }, []);

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle className="dialogTitle">
                <Typography className="text">
                    Excusa random n° {randomNumber}:
                </Typography>
                <IconButton
                    aria-label="close"
                    onClick={handleClose}
                >
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent dividers>
                <Typography className="text dialogContent">
                    {randomExcuse}
                </Typography>
            </DialogContent>
            <DialogActions>
                <button onClick={handleClose} className="btnDialog">
                    Aceptar
                </button>
            </DialogActions>
        </Dialog>
    );
}

export default Msg;
