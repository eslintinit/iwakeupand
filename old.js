import React, {useState, useEffect, useRef} from 'react';
import {StyleSheet, View, Text, SafeAreaView, ScrollView} from 'react-native';
import {Portal, Text as PaperText} from 'react-native-paper';

const Row = ({children, scrollXPos, setScrollXPos}) => {
  const rowRef = useRef(null);

  useEffect(() => {
    rowRef.current.scrollTo({
      x: scrollXPos,
      animated: false,
    });
  }, [scrollXPos]);

  return (
    <ScrollView
      horizontal
      style={styles.row}
      ref={rowRef}
      scrollEventThrottle={16}
      onScroll={(e) => {
        console.log(e);
        console.log(e.nativeEvent.contentOffset.y);
        // console.log(e.nativeEvent);
        // console.log(e.target);
        // setScrollXPos(e.nativeEvent.contentOffset.x);
      }}
      contentOffset={{x: 50, y: 0}}>
      {children}
    </ScrollView>
  );
};

const RowCell = ({children}) => (
  <View style={styles.rowCell}>
    <Text style={styles.rowCellText}>{children}</Text>
  </View>
);

const Dates = ({scrollXPos, setScrollXPos}) => (
  <Row scrollXPos={scrollXPos} setScrollXPos={setScrollXPos}>
    <RowCell>1</RowCell>
    <RowCell>2</RowCell>
    <RowCell>3</RowCell>
    <RowCell>4</RowCell>
    <RowCell>5</RowCell>
    <RowCell>5</RowCell>
    <RowCell>6</RowCell>
    <RowCell>7</RowCell>
    <RowCell>8</RowCell>
  </Row>
);

const Habit = ({scrollXPos, setScrollXPos}) => (
  <Row scrollXPos={scrollXPos} setScrollXPos={setScrollXPos}>
    <RowCell>✖</RowCell>
    <RowCell>✅</RowCell>
    <RowCell>✅</RowCell>
    <RowCell>🏁</RowCell>
    <RowCell>✅</RowCell>
    <RowCell>✅</RowCell>
    <RowCell>✅</RowCell>
    <RowCell>🏁</RowCell>
    <RowCell>✅</RowCell>
  </Row>
);

const App = () => {
  const scrollViewRef = useRef(null);
  const [scrollXPos, setScrollXPos] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <Dates scrollXPos={scrollXPos} setScrollXPos={setScrollXPos} />
      <ScrollView
        style={styles.scrollView}
        onScroll={(e) => {
          // console.log('scrollViewRef.current');
          // console.log(scrollViewRef.current);
          // console.log(scrollViewRef.current.getInnerViewNode());
          // console.log(scrollViewRef.current.getScrollableNode());
          // console.log(scrollViewRef.current.getInnerViewRef());
          // console.log('a');
          console.log(e.nativeEvent.contentOffset.y);
          // setAbs(800 - e.nativeEvent.contentOffset.y + 150);
        }}
        ref={scrollViewRef}
        alwaysBounceVertical={false}
        scrollEventThrottle={9}>
        <Habit scrollXPos={scrollXPos} setScrollXPos={setScrollXPos} />
        <Habit scrollXPos={scrollXPos} setScrollXPos={setScrollXPos} />
        <Habit scrollXPos={scrollXPos} setScrollXPos={setScrollXPos} />
        <Habit scrollXPos={scrollXPos} setScrollXPos={setScrollXPos} />
        <Habit scrollXPos={scrollXPos} setScrollXPos={setScrollXPos} />
        <Habit scrollXPos={scrollXPos} setScrollXPos={setScrollXPos} />
        <Habit scrollXPos={scrollXPos} setScrollXPos={setScrollXPos} />
        <Habit scrollXPos={scrollXPos} setScrollXPos={setScrollXPos} />
        <Habit scrollXPos={scrollXPos} setScrollXPos={setScrollXPos} />
        <Habit scrollXPos={scrollXPos} setScrollXPos={setScrollXPos} />
      </ScrollView>
    </SafeAreaView>
  );
};

// const App = () => {
//   return (
//     <SafeAreaView style={styles.container}>
//       <ScrollView style={styles.scrollView} horizontal>
//         <Dates />
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: -15,
  },
  scrollView: {
    // flexDirection: 'column',
    // backgroundColor: 'pink',
    // marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
  row: {
    flexDirection: 'row',
    borderBottomColor: 'red',
    borderBottomWidth: 1,
    height: 100,
    backgroundColor: 'pink',
    // marginBottom: 20,
  },
  rowCell: {
    // border: '1px solid white',
    width: 150,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightColor: 'red',
    borderRightWidth: 1,
  },
  rowCellText: {
    color: 'black',
  },
  absoluteText: {
    position: 'absolute',
    left: 10,
  },
});

export default App;
