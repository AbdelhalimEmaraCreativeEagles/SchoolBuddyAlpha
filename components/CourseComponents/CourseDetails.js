import React, { Component } from "react";
import { StyleSheet, ScrollView, ImageBackground, Platform, View, TouchableOpacity, Image, Modal, Alert } from "react-native";
import { Right, Left, Button, Content, Container, Card, CardItem, Header, Text, Body } from "native-base";
import { ButtonGroup } from 'react-native-elements';


class CourseDetails extends Component {

    state = {
        modalVisible: false,
    };

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }
    render() {
        const buttons = ['Hello', 'World', 'Buttons']
        return (

            <View>
<View style={{paddingBottom:10}}>
                <ScrollView>
                    <Image source={require('../../assets/logo.png')} style={{ resizeMode: 'cover' }} />
                    <ButtonGroup
                        buttons={buttons}
                        containerStyle={{ height: 50 }}
                        onPress={() => { this.setModalVisible(true); }} />

                    <View style={{ paddingLeft: 25, paddingRight: 25 }}>



                        <Card>
                            <CardItem header >
                                <Text style={{ alignContent: "center" }}>English Course : Lesson One</Text>
                            </CardItem>
                            <CardItem>
                                <Body>
                                    <Text>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Metus aliquam eleifend mi in nulla posuere. Gravida arcu ac tortor dignissim convallis aenean. Vitae ultricies leo integer malesuada nunc vel risus. Ultrices mi tempus imperdiet nulla malesuada pellentesque. Vulputate ut pharetra sit amet aliquam id diam maecenas ultricies. Egestas purus viverra accumsan in nisl nisi. Sodales neque sodales ut etiam sit amet nisl purus. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit. Scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis. Donec pretium vulputate sapien nec. Libero enim sed faucibus turpis in eu mi.
    
    Ipsum dolor sit amet consectetur adipiscing elit ut aliquam. Vivamus arcu felis bibendum ut tristique et egestas quis ipsum. Velit egestas dui id ornare arcu odio ut sem nulla. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Vulputate eu scelerisque felis imperdiet proin fermentum. Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt. Ac auctor augue mauris augue neque gravida in fermentum. Scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada. Amet nisl purus in mollis nunc sed id. Enim eu turpis egestas pretium aenean pharetra. Tempus quam pellentesque nec nam aliquam sem. Eu facilisis sed odio morbi. Commodo viverra maecenas accumsan lacus vel facilisis volutpat. At volutpat diam ut venenatis tellus. Malesuada proin libero nunc consequat interdum. Nunc vel risus commodo viverra maecenas. Eget mauris pharetra et ultrices neque ornare aenean euismod elementum. Cras sed felis eget velit. Aliquam ultrices sagittis orci a scelerisque purus.
    
    Euismod lacinia at quis risus sed vulputate. Imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Integer quis auctor elit sed vulputate mi sit amet. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Ac felis donec et odio. Quis risus sed vulputate odio. Nibh sit amet commodo nulla facilisi nullam vehicula ipsum. Dolor morbi non arcu risus quis. In hac habitasse platea dictumst vestibulum. Leo vel fringilla est ullamcorper eget nulla facilisi etiam dignissim. Nisl vel pretium lectus quam id leo. Commodo elit at imperdiet dui accumsan. Aliquet enim tortor at auctor urna nunc id. Sed euismod nisi porta lorem mollis aliquam ut. Est ullamcorper eget nulla facilisi etiam dignissim.
    
    Mauris cursus mattis molestie a. Urna duis convallis convallis tellus. Faucibus nisl tincidunt eget nullam. Lacus suspendisse faucibus interdum posuere. Nullam non nisi est sit amet facilisis magna. Elementum facilisis leo vel fringilla. Arcu cursus euismod quis viverra nibh cras pulvinar mattis. At lectus urna duis convallis convallis tellus id interdum. Fusce ut placerat orci nulla pellentesque. Volutpat blandit aliquam etiam erat velit scelerisque in dictum. Pellentesque dignissim enim sit amet venenatis. Morbi tristique senectus et netus. Viverra accumsan in nisl nisi scelerisque eu ultrices vitae. Nulla porttitor massa id neque aliquam vestibulum morbi blandit. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar. At auctor urna nunc id cursus metus aliquam eleifend. Duis convallis convallis tellus id interdum velit laoreet id. Tempor nec feugiat nisl pretium fusce. Cursus euismod quis viverra nibh.
    
    Faucibus in ornare quam viverra orci. Egestas fringilla phasellus faucibus scelerisque. Sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Egestas sed sed risus pretium. Suspendisse interdum consectetur libero id. Faucibus et molestie ac feugiat sed lectus vestibulum mattis. Eu volutpat odio facilisis mauris sit amet massa. Accumsan in nisl nisi scelerisque. Quis lectus nulla at volutpat diam. Pharetra pharetra massa massa ultricies mi quis hendrerit dolor. At augue eget arcu dictum varius duis at consectetur lorem. Nibh praesent tristique magna sit amet purus gravida quis. In ornare quam viverra orci sagittis eu volutpat odio. Non blandit massa enim nec dui nunc mattis.
                                    </Text>
                                </Body>
                            </CardItem>
                            <CardItem footer>
                                <Text>GeekyAnts</Text>
                            </CardItem>
                        </Card>
                    </View>
                </ScrollView>
                </View>
                <View style={{paddingTop:30}}>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                    }}>


                    <View style={{marginTop:130}}>


                        <Button bordered dark style={{ marginLeft: 100, marginRight: 100 }} onPress={() => {
                            this.setModalVisible(!this.state.modalVisible);
                        }}>
                            <Text>Hide Course Video Modal</Text>
                        </Button>
                    </View>


                </Modal>
                </View>
            </View>


        );
    }
}
export default CourseDetails;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

});