import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    ImageBackground
} from "react-native";
import { Right,Left } from "native-base";

class BooksView extends Component {
    render() {
        return (
            <View>
            <View style={{ borderRadius:10, height: 200, width: 150, marginLeft: 10, borderWidth: 0.5, borderColor: '#dddddd' }}>
                
                <View style={{ flex: 2, padding:10 }}>
                <Image source={this.props.imageUri}style={{flex: 1, width: null, height: null, resizeMode: 'cover' }}  />  
                </View>
                </View>
                <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10, backgroundColor:'#fff' }}>
                    <Left>
                    <Text style={{fontSize:18, fontWeight:400}}>{this.props.title}</Text>
                    </Left>
                    <Right>
                    <Text style={{fontSize:15, fontWeight:300, color:'#EA677F'}}>{this.props.price}</Text>
                    </Right>
                    
                   
                </View>
                
                
                </View>
        );
    }
}
export default BooksView;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});