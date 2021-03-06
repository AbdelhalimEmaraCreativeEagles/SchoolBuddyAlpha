import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";

class TopRatedCourses extends Component {
    render() {
        return (
            <View style={{ borderRadius:10, height: 200, width: 300, marginLeft: 20, borderWidth: 0.5, borderColor: '#dddddd' }}>
                <View style={{ flex: 2, padding:10 }}>
                    <Image source={this.props.imageUri}
                        style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                    />
                </View>
                <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10, paddingBottom:10 }}>
                    <Text style={{fontSize:18, fontWeight:500}}>{this.props.title}</Text>
                    <Text>{this.props.describtion}</Text>
                </View>
            </View>
        );
    }
}
export default TopRatedCourses;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});