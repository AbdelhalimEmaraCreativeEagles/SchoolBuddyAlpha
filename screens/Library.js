import React, { Component } from 'react';
import {FlatList, StyleSheet, ScrollView,View,Image } from 'react-native';
import {  Container, Header, Content, Card, CardItem,H2, Thumbnail, Text, Button, Icon, Left, Body, Right, Grid } from 'native-base';


import BooksView from '../components/BooksView';
export default class Library extends Component {
  constructor() {
    super();
    this.state = {
      dataSource: {},
    };
  }
  componentDidMount() {
    var that = this;
    let items = Array.apply(null, Array(60)).map((v, i) => {
      return { id: i, src: 'http://placehold.it/200x200?text=' + (i + 1) };
    });
    that.setState({
      //Setting the data source
      dataSource: items,
    });
  }
  render() {
    return (
    <Container>
      <Header >
        <Left style={{paddingLeft:20}}>
          <H2 style={{paddingTop:10}}>E-Library</H2>
        </Left>

        <Right>
          <Button onPress={() => alert("Added to the Wishlist")} transparent><Icon style={{color:'#000'}} active name="heart" /></Button>
          <Button  transparent><Icon style={{color:'#000'}} active name="search" /></Button>
        </Right>
        
      </Header>
      <Content style={{paddingTop:20}}>
      <View style={{paddingTop:20}}>


        <FlatList
          data={this.state.dataSource}
          renderItem={({ item }) => (
            <View style={{ flex: 1, flexDirection: 'column', margin: 10 }}>
              <BooksView imageUri={require('../assets/images/Placeholder_Book.png')} title='English Book'/>
            </View>
          )}
          //Setting the number of column
          numColumns={2}
          keyExtractor={(item, index) => index}
        />
      </View>
        
          

          
          </Content>
          
        </Container>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: 'center',
    flex: 1,
    paddingTop: 30,
  },

  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
});



  