import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs,Left,Right,Title,Body} from 'native-base';
import Tab1 from './tabOne';
import Tab2 from './tabTwo';
import Tab3 from './tabThree';
export default class TabsExample extends Component {
  render() {
    return (
      <Container>
        <Header  style={{backgroundColor:'#FF8C00'}} hasTabs >
        <Left/>
          <Body>
            <Title>TNTH</Title>
          </Body>
          <Right />
        </Header>
        <Tabs>
          <Tab  tabStyle={{backgroundColor:'#FF8C00'}} activeTabStyle={{backgroundColor:'#FF8C00'}} activeTextStyle={{color:'#ffffff'}} textStyle={{color:'#ffffff'}} heading="General">
            <Tab1 />
          </Tab>
          <Tab tabStyle={{backgroundColor:'#FF8C00'}} activeTabStyle={{backgroundColor:'#FF8C00'}} activeTextStyle={{color:'#ffffff'}} textStyle={{color:'#ffffff'}} heading="Business">
            <Tab2 />
          </Tab>
          <Tab tabStyle={{backgroundColor:'#FF8C00'}} activeTabStyle={{backgroundColor:'#FF8C00'}} activeTextStyle={{color:'#ffffff'}}  textStyle={{color:'#ffffff'}} heading="Technology">
            <Tab3 />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}