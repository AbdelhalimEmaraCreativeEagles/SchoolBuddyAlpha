import React from 'react'
import { View, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import Firebase from '../config/Firebase'
import {Agenda} from 'react-native-calendars';
import { Container, Header, Content, Card, CardItem,H2, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';

class Schedual extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		  items: {}
		};
	  }
	  render() {
		return (<Container>
			<Header >
			  <Left style={{ paddingLeft: 20 }}>
				<H2 style={{ paddingTop: 10 }}> Your Schedual</H2>
			  </Left>
	
			</Header>
	
			  <View style={{ flex: 1,paddingTop: 20  }}>
				
			  
		  <Agenda
			items={this.state.items}
			loadItemsForMonth={this.loadItems.bind(this)}
			renderItem={this.renderItem.bind(this)}
			renderEmptyDate={this.renderEmptyDate.bind(this)}
			rowHasChanged={this.rowHasChanged.bind(this)}
			// markingType={'period'}
			// markedDates={{
			//    '2017-05-08': {textColor: '#666'},
			//    '2017-05-09': {textColor: '#666'},
			//    '2017-05-14': {startingDay: true, endingDay: true, color: 'blue'},
			//    '2017-05-21': {startingDay: true, color: 'blue'},
			//    '2017-05-22': {endingDay: true, color: 'gray'},
			//    '2017-05-24': {startingDay: true, color: 'gray'},
			//    '2017-05-25': {color: 'gray'},
			//    '2017-05-26': {endingDay: true, color: 'gray'}}}
			 // monthFormat={'yyyy'}
			 theme={{
			   calendarBackground: '#fff',
				agendaKnobColor: '#EA677F',
				agendaDayTextColor: 'black',
				agendaDayNumColor: 'black',
				agendaTodayColor: '#EA677F',
				selectedDayBackgroundColor: '#EA677F',
				dotColor:'#EA677F'
				}}
				
		  />
		  </View>
			  
			  </Container>
		);
	  }
	
	  loadItems(day) {
		setTimeout(() => {
		  for (let i = -15; i < 85; i++) {
			const time = day.timestamp + i * 24 * 60 * 60 * 1000;
			const strTime = this.timeToString(time);
			if (!this.state.items[strTime]) {
			  this.state.items[strTime] = [];
			  const numItems = Math.floor(Math.random() * 5);
			  for (let j = 0; j < numItems; j++) {
				this.state.items[strTime].push({
				  name: 'Class for ' + strTime,
				  height: Math.max(50, Math.floor(Math.random() * 150))
				});
			  }
			}
		  }
		  //console.log(this.state.items);
		  const newItems = {};
		  Object.keys(this.state.items).forEach(key => {newItems[key] = this.state.items[key];});
		  this.setState({
			items: newItems
		  });
		}, 1000);
		// console.log(`Load Items for ${day.year}-${day.month}`);
	  }
	
	  renderItem(item) {
		return (
		  <View style={[styles.item, {height: item.height}]}><Text>{item.name}</Text></View>
		);
	  }
	
	  renderEmptyDate() {
		return (
		  <View style={styles.emptyDate}><Text>This is empty date!</Text></View>
		);
	  }
	
	  rowHasChanged(r1, r2) {
		return r1.name !== r2.name;
	  }
	
	  timeToString(time) {
		const date = new Date(time);
		return date.toISOString().split('T')[0];
	  }
	}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	},
		item: {
		  backgroundColor: 'white',
		  flex: 1,
		  borderRadius: 5,
		  padding: 10,
		  marginRight: 10,
		  marginTop: 17
		},
		emptyDate: {
		  height: 15,
		  flex:1,
		  paddingTop: 30
		}
})

const mapStateToProps = state => {
	return {
		user: state.user
	}
}

export default connect(mapStateToProps)(Schedual)


