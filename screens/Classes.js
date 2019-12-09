import React from 'react'
import { View, Text, StyleSheet, Button, Image } from 'react-native'
import { connect } from 'react-redux'
import Firebase from '../config/Firebase'
import {Container, Thumbnail, Header, Left, Right, Card, H2, CardItem,Body,Content} from 'native-base'

class Classes extends React.Component {
	handleSignout = () => {
		Firebase.auth().signOut()
		this.props.navigation.navigate('Login')
	}

	render() {
		return (
			<Container>
			<Header >
			  <Left style={{paddingLeft:20}}>
				<H2 style={{paddingTop:10}}>Classes</H2>
			  </Left>
			  
			</Header>
			<Content style={{paddingTop:20}}>
			  <Card style={{marginLeft:20, marginRight:20}}>
				<CardItem>
				  <Left>
					<Thumbnail source={require("../assets/logo.png")} />
					<Body>
					  <Text>English Class</Text>
					  <Text note>1A</Text>
					</Body>
				  </Left>
				</CardItem>
				<CardItem cardBody>
				  <Image source={require("../assets/images/Placeholder_Classes.png")} style={{height: 100, width: null, flex: 1}}/>
				</CardItem>
				<CardItem>
				  <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</Text>
				</CardItem>
			  </Card>
			</Content>
		  </Container>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	}
})

const mapStateToProps = state => {
	return {
		user: state.user
	}
}

export default connect(mapStateToProps)(Classes)
