import React from 'react';
import { StyleSheet, View, Modal, Dimensions } from 'react-native';

const ModalEx = ({ viewModal, setViewModal, children }) => {
    const width = Dimensions.get('window').width;

    return (
        <>
        { viewModal ? (
            <View>
            <Modal //modal은 style prop이 없음. view를 만들어서 style 줘야함.
                visible = {viewModal}
                transparent
                onRequestClose = {() => {
                    setViewModal(!(viewModal));
                }}
            >
                {/* ModalEx 태그 내에 view가 위치할 경우 children에 삽입. */}
                <View style = {styles.modalScreen}>{children}</View> 
            </Modal>
            </View>
        ) : null }
        </>
    );
};

const styles = StyleSheet.create({
    modalScreen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 10,
        overflow: 'hidden',
        width: 150,
        height: 100
    }
});

export default ModalEx;