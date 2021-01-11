export const getCellsByRow = (): IRow[] => {
  const cellsByRow: IRow[] = []

  for (let rowIndex = 1; rowIndex < 8; rowIndex++) {
    const row: IRow = {
      cells: [],
      id: `row-${rowIndex}`,
    }

    for (let columnIndex = 1; columnIndex < 365; columnIndex++) {
      row.cells.push({
        id: `cell-${rowIndex}-${columnIndex}`,
        title: 'Cell',
      })
    }

    cellsByRow.push(row)
  }

  console.log(cellsByRow)
  console.log('cellsByRow')
  return cellsByRow
}

export interface ICell {
  id: string
  title: string
}

export interface IRow {
  id: string
  cells: ICell[]
}

export const data = [
  {
    id: 'row-1',
    name: 'dont consume youtube',
    cells: [
      {
        id: 'cell-1-1',
        status: '✅',
      },
      {
        id: 'cell-1-2',
        status: '🏁',
      },
      {
        id: 'cell-1-3',
        status: '',
      },
      {
        id: 'cell-1-4',
        status: '',
      },
      {
        id: 'cell-1-5',
        status: '',
      },
      {
        id: 'cell-1-6',
        status: '',
      },
    ],
  },
  {
    id: 'row-2',
    name: 'dont consume instagram',
    cells: [
      {
        id: 'cell-2-1',
        status: '✅',
      },
      {
        id: 'cell-2-2',
        status: '✖',
      },
      {
        id: 'cell-2-3',
        status: '',
      },
      {
        id: 'cell-2-4',
        status: '',
      },
      {
        id: 'cell-2-5',
        status: '',
      },
      {
        id: 'cell-2-6',
        status: '',
      },
    ],
  },
  {
    id: 'row-3',
    name: 'medidate',
    cells: [
      {
        id: 'cell-3-1',
        status: '✅',
      },
      {
        id: 'cell-3-2',
        status: '✖',
      },
      {
        id: 'cell-3-3',
        status: '',
      },
      {
        id: 'cell-3-4',
        status: '',
      },
      {
        id: 'cell-3-5',
        status: '',
      },
      {
        id: 'cell-3-6',
        status: '',
      },
    ],
  },
  {
    id: 'row-4',
    name: 'work on side projects',
    cells: [
      {
        id: 'cell-4-1',
        status: '✅',
      },
      {
        id: 'cell-4-2',
        status: '✅',
      },
      {
        id: 'cell-4-3',
        status: '',
      },
      {
        id: 'cell-4-4',
        status: '',
      },
      {
        id: 'cell-4-5',
        status: '',
      },
      {
        id: 'cell-4-6',
        status: '',
      },
    ],
  },
]
