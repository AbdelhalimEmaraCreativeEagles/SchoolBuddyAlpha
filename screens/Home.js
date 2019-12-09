import React, { Component } from 'react';
import {View,Image,ScrollView } from 'react-native';
import { Container, Header, Content, Card, CardItem,H2,H3, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import DiscoverCourses from '../components/HomeComponents/DiscoverCourses';
import MostViewedCourses from '../components/HomeComponents/MostViewedCourses';


export default class Home extends React.Component {
    render() {
      return (
<Container>
        <Header style={{backgroundColor:'#fff'}} >
          <Left style={{paddingLeft:20}}>
            <H2 style={{paddingTop:10}}>Discover Courses</H2>
          </Left>

          <Right>
            <Button onPress={() => alert("Added to the Wishlist")} transparent><Icon style={{color:'#000'}} active name="heart" /></Button>
            <Button  transparent><Icon style={{color:'#000'}} active name="search" /></Button>
          </Right>
          
        </Header>
        <Content>
          <View style={{paddingTop:20}}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <DiscoverCourses imageUri={require('../assets/images/Placeholder_Course.png')} name='English Course' description='Lorem Ipsum Lorem IpsumLorem Ipsum Lorem Ipsum'/>
              <DiscoverCourses imageUri={require('../assets/images/Placeholder_Course.png')} name='Arabic Course' description='Lorem Ipsum Lorem IpsumLorem Ipsum Lorem Ipsum' />
              <DiscoverCourses imageUri={require('../assets/images/Placeholder_Course.png')} name='Math Course' description='Lorem Ipsum Lorem IpsumLorem Ipsum Lorem Ipsum' />
              <DiscoverCourses imageUri={require('../assets/images/Placeholder_Course.png')} name='German Course' description='Lorem Ipsum Lorem IpsumLorem Ipsum Lorem Ipsum' />
            </ScrollView>
          </View>
          <View style={{margin:10, borderRadius:15, marginTop:50, backgroundColor:'#EA677F'}}>
            <Left style={{flex:2}}>
            <View style={{marginBottom:10,marginTop:10,width:100, height:100}}>
            <Image style={{flex:1, width:null, height:null, borderRadius:50, resizeMode:'cover', borderWidth:2, borderColor:'#fff'}} source={require('../assets/logo.png')}></Image>
            </View>
            </Left>
            <Right style={{flex:2}}>
              <Text style={{color:'#fff', paddingBottom:20}}>Hello, you have a Test Tommorrow</Text>
              </Right>
          </View>
          

          <View style={{marginTop:25, marginLeft:10}}>
            <Text style={{fontSize:24, fontWeight:'500'}}>
            Most Viewed Courses
            </Text>
            <View>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <MostViewedCourses imageUri={require('../assets/images/MostViewedCourse.png')} name="Math Course" desc="Lorem Ipsum Lorem IpsumLorem Ipsum Lorem Ipsum" />
                <MostViewedCourses imageUri={require('../assets/images/MostViewedCourse.png')} name="Arabic Course" desc="Lorem Ipsum Lorem IpsumLorem Ipsum Lorem Ipsum" />
                <MostViewedCourses imageUri={require('../assets/images/MostViewedCourse.png')} name="English Course" desc="Lorem Ipsum Lorem IpsumLorem Ipsum Lorem Ipsum" />
                <MostViewedCourses imageUri={require('../assets/images/MostViewedCourse.png')} name="German Course" desc="Lorem Ipsum Lorem IpsumLorem Ipsum Lorem Ipsum" />
                <MostViewedCourses imageUri={require('../assets/images/MostViewedCourse.png')} name="French Course" desc="Lorem Ipsum Lorem IpsumLorem Ipsum Lorem Ipsum" />
                </ScrollView>
            </View>
          </View>

        </Content>
        </Container>
      );
    }
}