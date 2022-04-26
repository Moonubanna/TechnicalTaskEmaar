import React from 'react'
import {
    Text,
    View,
    StyleSheet
} from 'react-native';

const FallbackComponent = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{props.error}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fafafa',
        flex: 1,
        justifyContent: 'center', alignItems: 'center'
    },
    title: {
        fontSize: 48,
        fontWeight: '300',
        paddingBottom: 16,
        color: '#000'
    },
})
export default FallbackComponent;
