import React, { Component, useState } from 'react'
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import colors from '../colors'
import { ICell, IRow } from '../data'

export interface IGridContentProps {
  cellsByRow: IRow[]
}

const Cell = ({ cell }) => {
  const [status, setStatus] = useState(cell.status)
  const handleCellPressed = (cellId) => {
    if (status === '') {
      setStatus('✅')
    } else if (status === '✅') {
      setStatus('🏁')
    } else if (status === '🏁') {
      setStatus('✖')
    } else if ('✖') {
      setStatus('✅')
    }
    /* Alert.alert(`Pressed ${cellId}`) */
  }

  return (
    <TouchableOpacity
      key={cell.id}
      style={styles.cellContainer}
      onPress={() => handleCellPressed(cell.id)}
    >
      <Text style={styles.textStyle}>{status}</Text>
    </TouchableOpacity>
  )
}

export default class GridContent extends Component<IGridContentProps> {
  public render() {
    return (
      <View style={styles.grid}>
        {this.props.cellsByRow.map((row) => this.renderRow(row))}
      </View>
    )
  }

  private renderRow(row: IRow) {
    return (
      <View key={row.id} style={styles.rowContainer}>
        {row.cells.map((cell) => this.renderCell(cell))}
      </View>
    )
  }

  private renderCell(cell: ICell) {
    return <Cell cell={cell} />
  }
}

const styles = StyleSheet.create({
  grid: {
    /* marginTop: 10 */
  },
  cellContainer: {
    alignItems: 'center',
    /* backgroundColor: colors.lightGray, */
    height: 100,
    borderColor: 'rgba(0, 0, 0, .1)',
    borderWidth: 1,
    justifyContent: 'center',
    /* zIndex: 10, */
    /* margin: 10, */
    width: 100,
  },
  rowContainer: {
    flexDirection: 'row',
  },
  textStyle: {
    fontSize: 24,
  },
})
