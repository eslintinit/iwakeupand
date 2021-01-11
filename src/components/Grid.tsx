import {
  DirectedScrollView,
  DirectedScrollViewChild,
} from '@kevinsperrine/react-native-directed-scrollview'
import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { getCellsByRow, data } from '../data'
import ColumnLabels from './ColumnLabels'
import GridContent from './GridContent'
import RowLabels from './RowLabels'

export default class Grid extends Component {
  public render() {
    const cellsByRow = getCellsByRow()
    /* const cellsByRow = data */

    return (
      <DirectedScrollView
        bounces={true}
        bouncesZoom={true}
        maximumZoomScale={1.5}
        minimumZoomScale={0.75}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          height: cellsByRow.length * 100,
          width: cellsByRow[0].cells.length * 100,
        }}
        style={styles.container}
      >
        <DirectedScrollViewChild
          scrollDirection={'both'}
          style={styles.gridContainer}
        >
          <GridContent cellsByRow={cellsByRow} />
        </DirectedScrollViewChild>
        <DirectedScrollViewChild
          scrollDirection="vertical"
          style={styles.rowLabelsContainer}
        >
          <RowLabels cellsByRow={cellsByRow} />
        </DirectedScrollViewChild>
        <DirectedScrollViewChild
          scrollDirection="horizontal"
          style={styles.columnLabelsContainer}
        >
          <ColumnLabels cellsByRow={cellsByRow} />
        </DirectedScrollViewChild>
      </DirectedScrollView>
    )
  }
}

const styles = StyleSheet.create({
  gridContainer: {
    marginTop: 35,
  },
  columnLabelsContainer: {
    height: 35,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
  },
  container: {
    flex: 1,
  },
  rowLabelsContainer: {
    bottom: 0,
    left: 0,
    position: 'absolute',
    top: 0,
    width: 100,
    zIndex: -1,
  },
})
