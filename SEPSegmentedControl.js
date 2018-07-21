/**
 * @format
 * @flow
 */

import React, {Component} from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import PropTypes from 'prop-types'
import {Colors} from './Config/Colors'


class SEPSegmentedControl extends Component {
  constructor() {
    super()
    this.state = {
      selectedItemIndex: -1,
    }
  }

  renderItems = () => {
    const {
      onItemChange = (index: number) => {
      },
      isReverse,
      tintColor = Colors.darkBlue,
      style = {},
    } = this.props

    const items = this.props.children
    const {fontFamily = 'System'} = style
    let result = []

    for (let i = 0; i < items.length; i++) {
      const item = items[i]
      const isSelected = this.state.selectedItemIndex === i
      const indexThatShouldNotHaveRightBorder = isReverse ? 0 : items.length - 1

      const title = item.props.children
      const itemStyle = item.props.style === undefined ? {} : item.props.style
      const itemTintColor = item.props.tintColor === undefined ? tintColor : item.props.tintColor
      result.push(
        <TouchableOpacity
          key={i}
          style={[styles.touchableStyle, {
            backgroundColor: isSelected ? itemTintColor : Colors.transparent,
            flex: 1 / items.length, borderRightWidth: i === indexThatShouldNotHaveRightBorder ? 0 : 1,
            borderRightColor: itemTintColor
          }]}
          onPress={() => {
            onItemChange(i)
            this.setState({
              selectedItemIndex: i,
            })
          }}>
          <Text style={[{
            color: isSelected ? Colors.white : itemTintColor,
            fontFamily: fontFamily,
            paddingVertical: 4,
            textAlign: 'center',
          }, itemStyle]}>{title}</Text>
        </TouchableOpacity>
      )
    }
    return result
  }

  render() {
    const {
      isReverse = false,
      tintColor = Colors.darkBlue,
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

export default class SegmentedControlItem extends Component {
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
  tintColor: Colors.darkBlue,
  style: {},
  items: [],
  onItemChange: (index: number) => {
  },
}

SegmentedControlItem.propTypes = {
  style: PropTypes.object,
  tintColor: PropTypes.string,
}

export {SEPSegmentedControl}
export let Item = SegmentedControlItem

