# Customizable SegmentedControl with Android support


## Installation:

```bash
npm i sepsegmentedcontrol --save
```

## Usage:

```javascript
import SEPSegmentedControl from "sepsegmentedcontrol";

export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <SEPSegmentedControl
          items={["one", "two", "three"]}
          onItemChange={(index: number) => {
            console.log(index, " clicked!")
          }}
        />
      </View>
    );
  }
}

```

## Available props:
1. ```style```: General style including ```fontFamily```
2. ```items```: String array of SegmentedControl
3. ```isReverse```: Boolean value indicating items order
4. ```tintColor```: Color of SegmentedControl
5. ```onItemChange```: callback function when user selects an item
