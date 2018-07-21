# Customizable SegmentedControl with Android support


## Installation:

```bash
npm i sepsegmentedcontrol --save
```

## Usage:

```javascript
import {SEPSegmentedControl, Item} from "sepsegmentedcontrol";

export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <SEPSegmentedControl
          onItemChange={(index: number) => {
            console.log(index, " clicked!")
          }}>
          <Item>One</Item>
          <Item tintColor={'red'}>Custom Tint</Item>
          <Item>{'Three'}</Item>
          <Item style={{fontFamily: 'San Francisco'}}>Custom Font</Item>
        </SEPSegmentedControl>
      </View>
    );
  }
}

```

## Available SegmentedControl props:
1. ```style```: General style including ```fontFamily```
2. ```isReverse```: Boolean value indicating items order
3. ```tintColor```: Color of SegmentedControl
4. ```onItemChange```: callback function when user selects an item

## Available Item props:
1. ```style```: General style including ```fontFamily```
2. ```tintColor```: Color of SegmentedControl
