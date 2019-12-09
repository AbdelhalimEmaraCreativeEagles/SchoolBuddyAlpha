import React from 'react'
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { savechanges } from '../actions/user'
import { Container, Header, Content, Card, CardItem, H2, Thumbnail, Text, Button, Icon, Left, Body, Right, H3, H4 } from 'native-base';
import { Avatar } from 'react-native-gifted-chat'


class EditProfile extends React.Component {
	handleSaveChanges = () => {
		this.props.savechanges()
		this.props.navigation.navigate('EditProfile')

	}

	render() {
		return (
			
			<Container>
				<Content style={{ paddingTop: 20 }}>
					<Avatar>

					</Avatar>

					<Card style={{ marginLeft: 20, marginRight: 20, marginTop: 20, paddingVertical: 20 }}>
						<CardItem>
							<Left>
								<Thumbnail style={{ height: 100, width: 100, borderRadius: 50 }} source={{ uri: this.props.user.avatar }} />

							</Left>
							<Right>
								<Text style={{ flex: 1, }}>{this.props.user.description}</Text>
							</Right>
						</CardItem>
						<CardItem>
							<Left>
								<Text>{this.props.user.name}</Text>
							</Left>
						</CardItem>
						<CardItem>
							<Left>
								<Button bordered dark onPress={() => this.props.navigation.navigate('EditProfile')}>

									<Text>Save Changes</Text>
								</Button>
							</Left>
							<Right>
								<Button bordered dark onPress={this.handleSignout}>
									<Text>Logout</Text>
								</Button>
							</Right>
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
	},
	inputBox: {
		width: '85%',
		margin: 10,
		padding: 15,
		fontSize: 16,
		borderColor: '#EA677F',
		borderBottomWidth: 1,
		textAlign: 'center'
	},
	button: {
		marginTop: 30,
		marginBottom: 20,
		paddingVertical: 10,
		alignItems: 'center',
		backgroundColor: '#EA677F',
		borderColor: '#EA677F',
		borderWidth: 1,
		borderRadius: 5,
		width: 300
	},
	buttonText: {
		fontSize: 20,
		fontWeight: 'bold',
		color: '#fff'
	},
	label: {
		color: '#EA677F',
		textAlign: 'right',
		alignItems: 'flex-end'
	},
	image: {
		width: 128,
		height: 128,
		marginBottom: 12,
	},
	buttonSignup: {
		fontSize: 12
	}
})

const mapDispatchToProps = dispatch => {
	return bindActionCreators({ savechanges }, dispatch)
}

const mapStateToProps = state => {
	return {
		user: state.user
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(EditProfile)
