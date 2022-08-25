import { useState, useEffect } from 'react';
import { BarcodeScanner } from 'expo-barcode-scanner';
import styles from Scanner.css
export default function Scanner() {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [text, setText] = useState('Not yet Scanned');



    // This is what asks for permission when you for open up the camera
    const askForCameraPermission = () => {
        (async () => {
            const { status } = await BarcodeScanner.requestPermissionAsync();
            setHasPermission(status === 'granted');
        })()
    }
    //Calls for the ask permission function on load
    useEffect(() => {
        askForCameraPermission();
    }, []);

    const handleBarCodeScanned = ({ type, data}) => {
        setScanned(true);
        setText(data);
    };

    if(hasPermission === null) {
        <View style={styles.container}>
            <Text style={{ margin: 10}}>No access to camera</Text>
            <Button title={'Allow Camera'} onPress={() => askForCameraPermission()}/>
        </View>
    }
    
    return(
        <View style={style.container}>
        <View style={styles.barcodebox}>
            <BarcodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={{ height: 400, width: 400 }}/>
        </View>
        <Text style={styles.maintext}>{text}</Text>
        {scanned && <Button title={'Scan again'} onPress={() => setScanned(false)} color='tomato'/>}
    </View>
);
}