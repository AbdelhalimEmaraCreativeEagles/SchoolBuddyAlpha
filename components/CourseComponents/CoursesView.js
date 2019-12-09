import React, { Component } from "react";
import { StyleSheet, Image, View, TouchableOpacity, Modal, Alert } from "react-native";
import { Right, Left, Icon, Button, Title, Container, Header, Content, Card, CardItem, Text, Body } from "native-base";
import CourseDetails from "./CourseDetails";
import { ScrollView } from "react-native-gesture-handler";

class CoursesView extends Component {
    state = {
        modalVisible: false,
    };

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }
    render() {
        return (
            //Courses Details in a Modal 


            <View>
                <TouchableOpacity onPress={() => { this.setModalVisible(true); }}>
                    <View style={{ borderRadius: 10, height: 150, width: 150, marginLeft: 10, borderWidth: 0.5, borderColor: '#dddddd' }} >
                        <View style={{ flex: 2, padding: 0 }}>

                            <Image source={this.props.imageUri}
                                style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                            />

                            <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10, backgroundColor: '#fff' }}>
                                <Left>
                                    <Text style={{ fontSize: 18, fontWeight: 400 }}>{this.props.title}</Text>
                                </Left>
                                <Right>
                                    <Text style={{ fontSize: 15, fontWeight: 300, color: '#EA677F' }}>{this.props.price}</Text>

                                </Right>


                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                    }}>
                    <View style={{ marginTop: 22, flex: 1, justifyContent: 'top' }}>

                        <Header transparent>
                            <Left>
                                <Button transparent onPress={() => { this.setModalVisible(!this.state.modalVisible); }}>
                                    <Icon name="arrow-back" />
                                </Button>
                            </Left>
                            <Body>
                                <Title>English Course</Title>
                            </Body>
                        </Header>

                        <CourseDetails />
                    </View>

                </Modal>

            </View>

        );
    }
}
export default CoursesView;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

