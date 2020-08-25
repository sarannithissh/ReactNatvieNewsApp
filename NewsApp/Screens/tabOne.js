import React, { Component } from 'react';

import { Container, Content, List, Text, View, ListItem } from 'native-base';
import Modal from './model';
import { getArticles } from '../service/news'
import { Alert, ActivityIndicator, ScrollView } from 'react-native';
import  DataItems  from '../comp/dataitem';

export default class tabOne extends Component {
  constructor(props) {
    super(props);
   
    this.state = {
      isLoading: true,
      data: null,
      setModalVisible: false,
      modalArticleData: {}
    }
  }

  handleItemDataOnPress = (articleData) => {
    this.setState({
      setModalVisible: true,
      modalArticleData: articleData
    });
  }

  handleModalClose = () => {
    this.setState({
      setModalVisible: false,
      modalArticleData: {}
    });
  }
   
     componentDidMount() {
      getArticles().then(data => {
        this.setState({
          isLoading: false,
          data: data
        });
      }, error => {
        Alert.alert('Error', 'Something went wrong!');
      }
      )
    }
  


  render() {
   // console.log(this.state.data);
    let view = this.state.isLoading ? (
      <View>
        <ActivityIndicator animating={this.state.isLoading} />
        <Text style={{ marginTop: 10,textAlign:'center' }}>Please Wait..</Text>
      </View>
    ) : (
   
        <List
          dataArray={this.state.data}
          renderRow={(item) => {
            return(
               <DataItems  onPress={this.handleItemDataOnPress} data={item} />
            )
          }}
        />
       
      )

    return (
   
        <Container>
          <Content>
            {view}
          </Content>
          <Modal 
          showModal={this.state.setModalVisible}
          articleData={this.state.modalArticleData}
          onClose={this.handleModalClose}
        />
        </Container>
    
    );
  }
}