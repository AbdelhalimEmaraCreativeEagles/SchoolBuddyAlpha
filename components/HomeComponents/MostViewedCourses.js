import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";

class MostViewedCourses extends Component {
    render() {
        return (
            <View style={{ borderRadius:10, height: 230, width: 320, marginLeft: 10, marginTop:10, borderWidth: 0.5, borderColor: '#dddddd' }}>
                <View style={{ flex: 2, padding:0 }}>
                    <Image source={this.props.imageUri}
                        style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                    />
                </View>
                <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10, backgroundColor:'#000' }}>
                    <Text style={{color:'#fff',fontSize:18}}>{this.props.name}</Text>
                    <Text style={{color:'#fff',fontSize:14}}>{this.props.desc}</Text>
                </View>
            </View>
        );
    }
}
export default MostViewedCourses;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});