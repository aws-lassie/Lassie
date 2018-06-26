import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image
} from 'react-native';

import menuright from './nav-bar_images/menuright.png'
import dashboardhalf from './nav-bar_images/dashboardhalf.png'
import smallright from './nav-bar_images/smallright.png'
import HorizontalLine from './nav-bar_images/HorizontalLine.png'
import chartbar32 from './nav-bar_images/chartbar32.png'
import smallright_65 from './nav-bar_images/smallright_65.png'
import tile56 from './nav-bar_images/tile56.png'
import smallright_75 from './nav-bar_images/smallright_75.png'
import shapepolygon from './nav-bar_images/shapepolygon.png'
import smallright_82 from './nav-bar_images/smallright_82.png'
import layers2 from './nav-bar_images/layers2.png'
import smallright_91 from './nav-bar_images/smallright_91.png'

export default class App extends Component {

  render() {
    return (
      <ScrollView style={{
        flex: 1, alignSelf: 'stretch', 
        paddingTop: 20,
        backgroundColor: '#FFFFFF'}}>
        <View style={styles.nav}>
          <View style={styles.BlueRec2}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.DASHBOARDADMIN}>DASHBOARD ADMIN</Text>
              <Image source={menuright} style={styles.menuright} />
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.bluelineactive} />
            <View style={styles.Navlist}>
              <View style={styles.navlistsection4}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.MyLambdaFunctions}>My Lambda Functions</Text>
                  <View style={styles.Dashboard_41}>
                    <Image source={dashboardhalf} style={styles.dashboardhalf} />
                  </View>
                  <Image source={smallright} style={styles.smallright} />
                </View>
              </View>
              <Image source={HorizontalLine} style={styles.HorizontalLine} />
              <View style={styles.navlistdashboard1}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.dashboard1}>dashboard 1</Text>
                  <View style={styles.Rectangle} />
                </View>
              </View>
              <View style={styles.navlistdashboard2}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.dashboard2}>dashboard 2</Text>
                  <View style={styles.Rectangle_54} />
                </View>
              </View>
              <View style={styles.navlistdashboard3}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.dashboard3}>dashboard 3</Text>
                  <View style={styles.Rectangle_57} />
                </View>
              </View>
              <View style={styles.navcharts}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.charts}>charts</Text>
                  <View style={styles.GlyphsChart}>
                    <Image source={chartbar32} style={styles.chartbar32} />
                  </View>
                  <Image source={smallright_65} style={styles.smallright_65} />
                </View>
              </View>
              <View style={styles.navtables}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.tables}>tables</Text>
                  <View style={styles.GlyphsTables}>
                    <Image source={tile56} style={styles.tile56} />
                  </View>
                  <Image source={smallright_75} style={styles.smallright_75} />
                </View>
              </View>
              <View style={styles.navforms}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.forms}>forms</Text>
                  <View style={styles.GlyphsForm}>
                    <Image source={shapepolygon} style={styles.shapepolygon} />
                  </View>
                  <Image source={smallright_82} style={styles.smallright_82} />
                </View>
              </View>
              <View style={styles.navui_element}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.UIelements}>UI elements</Text>
                  <View style={styles.GlyphsUIElement}>
                    <Image source={layers2} style={styles.layers2} />
                  </View>
                  <Image source={smallright_91} style={styles.smallright_91} />
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    )
  }

}

const styles = StyleSheet.create({
  nav: {
    height: 1200,
    backgroundColor: '#FFFFFF',
    width: 350
  },
  BlueRec2: {
    backgroundColor: '#1E87F0',
    alignSelf: 'center',
    width: 350,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center'
  },
  DASHBOARDADMIN: {
    backgroundColor: 'transparent',
    fontSize: 20,
    fontWeight: 'normal',
    color: '#FFFFFF',
    textAlign: 'left',
    marginLeft: 36
  },
  menuright: {

  },
  bluelineactive: {
    height: 56,
    backgroundColor: '#1E87F0',
    width: 4
  },
  Navlist: {
    width: 319,
    height: 525
  },
  navlistsection4: {
    alignSelf: 'center',
    width: 276,
    height: 27,
    alignItems: 'center',
    justifyContent: 'center'
  },
  MyLambdaFunctions: {
    backgroundColor: 'transparent',
    fontSize: 18,
    fontWeight: 'normal',
    color: '#000A12',
    textAlign: 'right',
    marginRight: 27
  },
  Dashboard_41: {
    width: 39,
    alignItems: 'center',
    justifyContent: 'center'
  },
  dashboardhalf: {

  },
  smallright: {

  },
  HorizontalLine: {
    alignSelf: 'center',
    marginTop: 32
  },
  navlistdashboard1: {
    alignSelf: 'flex-start',
    marginLeft: 34,
    marginTop: 27,
    width: 146,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  dashboard1: {
    backgroundColor: 'transparent',
    fontSize: 18,
    fontWeight: 'normal',
    color: '#000A12',
    textAlign: 'right'
  },
  Rectangle: {
    height: 15,
    backgroundColor: '#0DB9DD68',
    borderRadius: 8,
    width: 15
  },
  navlistdashboard2: {
    alignSelf: 'flex-start',
    marginLeft: 34,
    marginTop: 25,
    width: 146,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  dashboard2: {
    backgroundColor: 'transparent',
    fontSize: 18,
    fontWeight: 'normal',
    color: '#000A12',
    textAlign: 'right'
  },
  Rectangle_54: {
    backgroundColor: '#FAA05A',
    width: 15
  },
  navlistdashboard3: {
    alignSelf: 'flex-start',
    marginLeft: 34,
    marginTop: 25,
    width: 146,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  dashboard3: {
    backgroundColor: 'transparent',
    fontSize: 18,
    fontWeight: 'normal',
    color: '#000A12',
    textAlign: 'right'
  },
  Rectangle_57: {
    backgroundColor: '#F0506E',
    width: 15
  },
  navcharts: {
    alignSelf: 'flex-end',
    marginRight: 22,
    marginTop: 57,
    width: 264,
    height: 21,
    alignItems: 'center',
    justifyContent: 'center'
  },
  charts: {
    backgroundColor: 'transparent',
    fontSize: 18,
    fontWeight: 'normal',
    color: '#000A12',
    textAlign: 'left',
    marginLeft: 60
  },
  GlyphsChart: {
    width: 16,
    alignItems: 'center',
    justifyContent: 'center'
  },
  chartbar32: {

  },
  smallright_65: {

  },
  navtables: {
    alignSelf: 'flex-end',
    marginRight: 22,
    marginTop: 66,
    width: 264,
    height: 21,
    alignItems: 'center',
    justifyContent: 'center'
  },
  tables: {
    backgroundColor: 'transparent',
    fontSize: 18,
    fontWeight: 'normal',
    color: '#000A12',
    textAlign: 'left',
    marginLeft: 60
  },
  GlyphsTables: {
    width: 16,
    height: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  tile56: {

  },
  smallright_75: {

  },
  navforms: {
    alignSelf: 'flex-end',
    marginRight: 22,
    marginTop: 66,
    width: 264,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  forms: {
    backgroundColor: 'transparent',
    fontSize: 18,
    fontWeight: 'normal',
    color: '#000A12',
    textAlign: 'left',
    marginLeft: 60
  },
  GlyphsForm: {
    width: 16,
    height: 14,
    alignItems: 'center',
    justifyContent: 'center'
  },
  shapepolygon: {

  },
  smallright_82: {

  },
  navui_element: {
    alignSelf: 'flex-end',
    marginRight: 22,
    marginTop: 66,
    width: 263,
    height: 21,
    alignItems: 'center',
    justifyContent: 'center'
  },
  UIelements: {
    backgroundColor: 'transparent',
    fontSize: 18,
    fontWeight: 'normal',
    color: '#000A12',
    textAlign: 'left',
    marginLeft: 59
  },
  GlyphsUIElement: {
    width: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  layers2: {

  },
  smallright_91: {

  }
})