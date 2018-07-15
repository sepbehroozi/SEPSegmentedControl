/**
 * @format
 * @flow
 */

import React, {Component} from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import PropTypes from 'prop-types'


export default class SEPSegmentedControl extends Component {
  constructor() {
    super()
    this.state = {
      selectedItemIndex: -1,
    }
  }

  renderItems = () => {
    const {
      items,
      onItemChange = (index: number) => {
      },
      isReverse,
      tintColor = '#123',
      style = {},
    } = this.props
    const {fontFamily = 'System'} = style
    let result = []

    for (let i = 0; i < items.length; i++) {
      const item = items[i]
      const isSelected = this.state.selectedItemIndex === i
      const indexThatShouldNotHaveRightBorder = isReverse ? 0 : items.length - 1

      result.push(
        <TouchableOpacity
          key={i}
          style={[styles.touchableStyle, {
            backgroundColor: isSelected ? tintColor : '#00000000',
            flex: 1 / items.length, borderRightWidth: i === indexThatShouldNotHaveRightBorder ? 0 : 1,
            borderRightColor: tintColor
          }]}
          onPress={() => {
            onItemChange(i)
            this.setState({
              selectedItemIndex: i,
            })
          }}>
          <Text style={{
            color: isSelected ? '#FFF' : tintColor,
            fontFamily: fontFamily,
            paddingVertical: 4,
            textAlign: 'center',
          }}>{item}</Text>
        </TouchableOpacity>
      )
    }
    return result
  };

  render() {
    const {
      isReverse = false,
      tintColor = '#123',
      style
    } = this.props

    return (
      <View
        style={[styles.container, style, {borderColor: tintColor, flexDirection: isReverse ? 'row-reverse' : 'row'}]}>
        {this.renderItems()}
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: 5,
    overflow: 'hidden',
    borderWidth: 1,
  },
  touchableStyle: {
    justifyContent: 'center',
  },
  selectedItemContainerStyle: {},
})

SEPSegmentedControl.propTypes = {
  isReverse: PropTypes.bool,
  tintColor: PropTypes.string.isRequired,
  style: PropTypes.object,
  items: PropTypes.array.isRequired,
  onItemChange: PropTypes.func,
}

SEPSegmentedControl.defaultProps = {
  isReverse: false,
  tintColor: '#123',
  style: {},
  items: [],
  onItemChange: (index: number) => {},
}
