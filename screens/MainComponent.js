import React, {useState} from 'react';
import {CAMPSITES} from '../shared/campsites'
import DirectoryScreen from './DirectoryScreen';

const Main = () => {
    const [campsites, setCampsites] = useState(CAMPSITES);

    return <DirectoryScreen campsiates={campsites} />
}

export default Main;