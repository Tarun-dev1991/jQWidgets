﻿import * as React from 'react';
 


import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';

class App extends React.PureComponent<{}, IGridProps> {

    private myGrid = React.createRef<JqxGrid>();

    constructor(props: {}) {
        super(props);

        const source: any = {
            datafields: [
                { name: 'ShippedDate', map: 'm\\:properties>d\\:ShippedDate', type: 'date' },
                { name: 'Freight', map: 'm\\:properties>d\\:Freight', type: 'float' },
                { name: 'ShipName', map: 'm\\:properties>d\\:ShipName', type: 'string' },
                { name: 'ShipAddress', map: 'm\\:properties>d\\:ShipAddress', type: 'string' },
                { name: 'ShipCity', map: 'm\\:properties>d\\:ShipCity', type: 'string' },
                { name: 'ShipCountry', map: 'm\\:properties>d\\:ShipCountry', type: 'string' }
            ],
            datatype: 'xml',
            id: 'm\\:properties>d\\:OrderID',
            record: 'content',
            root: 'entry',
            url: 'orders.xml'
        };

        this.state = {
            columns: [
                { text: 'Ship Name', datafield: 'ShipName', width: 250, align: 'left', cellsalign: 'left' },
                { text: 'Freight', datafield: 'Freight', width: 80, align: 'right', cellsformat: 'f2', cellsalign: 'right' },
                { text: 'Ship Address', datafield: 'ShipAddress', align: 'left', width: 350, cellsalign: 'left' },
                { text: 'Ship City', datafield: 'ShipCity', width: 100, align: 'left', cellsalign: 'left' },
                { text: 'Ship Country', datafield: 'ShipCountry', align: 'left', cellsalign: 'left' }
            ],
            ready: (): void => {
                this.myGrid.current!.selectcell(0, 'ShipName');
                this.myGrid.current!.focus();
            },
            source: new jqx.dataAdapter(source)
        }
    }

    public render() {
        return (
            <div>
                <JqxGrid theme={'material-purple'} ref={this.myGrid}
                    // @ts-ignore
                    width={670} height={300} source={this.state.source} columns={this.state.columns}
                    editable={true} selectionmode={'multiplecellsadvanced'} ready={this.state.ready}/>

                <div style={{ fontFamily: 'Verdana', fontSize: '12px', width: '670px' }}>
                    <ul>
                        <li><b>Left Arrow</b> key is pressed - Selects the left cell, when the Grid is not in edit mode. Otherwise, the key stroke is handled by the editor.</li>
                        <li><b>Right Arrow</b> key is pressed - Selects the right cell, when the Grid is not in edit mode. Otherwise, the key stroke is handled by the editor.</li>
                        <li><b>Up Arrow</b> key is pressed - Selects the cell above, when the Grid is not in edit mode. Otherwise, the key stroke is handled by the editor.</li>
                        <li><b>Down Arrow</b> key is pressed - Selects the cell below, when the Grid is not in edit mode. Otherwise, the key stroke is handled by the editor.</li>
                        <li><b>Page Up/Down</b> is pressed - Navigate Up or Down with one page, when the Grid is not in edit mode. Otherwise, the key stroke is handled by the editor.</li>
                        <li><b>Home/End</b> is pressed - Navigate to the first or last row, when the Grid is not in edit mode. Otherwise, the key stroke is handled by the editor.</li>
                        <li><b>Enter</b> key is pressed - Moves one cell down in 'multiplecellsadvanced' selection mode. If the cell is in edit mode, saves the new value and moves one cell down. In the other selection modes, shows the selected cell's editor. If the cell is in editmode, hides the cell's editor and saves the new value. The editor's value is equal to the cell's value.</li>
                        <li><b>Esc</b> key is pressed - Hides the cell's editor and cancels the changes.</li>
                        <li><b>Tab</b> key is pressed - Selects the right cell. If the Grid is in edit mode, saves the edit cell's value, closes its editor, selects the right cell and opens its editor.</li>
                        <li><b>Shift+Tab</b> keys are pressed - Selects the left cell. If the Grid is in edit mode, saves the edit cell's value, closes its editor, selects the left cell and opens its editor.</li>
                        <li><b>F2</b> key is pressed - shows the selected cell's editor when the Grid is in edit mode.</li>
                        <li><b>Space</b> key is pressed - Toggles the checkbox editor's check state when the selected cell's column is a checkbox column and the Grid is editable.</li>
                        <li><b>Shift+Arrow</b> key extends the selection.</li>
                        <li><b>Shift</b> extends the selection when the user clicks on a cell or row..</li>
                        <li><b>Ctrl</b> key is pressed - in 'multiplecellsextended, multiplecellsadvanced and multiplerowsextended' selection mode, extends the selection when the user clicks on a cell or row. </li>
                        <li><b>Ctrl+Arrow</b> key - moves to an edge. </li>
                        <li><b>Ctrl+C</b> Copy. </li>
                        <li><b>Ctrl+X</b> Cut. </li>
                        <li><b>Ctrl+V</b> Paste. </li>
                        <li><b>Page Down</b> - Moves one screen down</li>
                        <li><b>Page Up</b> - Moves one screen up</li>
                        <li><b>Home</b> - Moves to the beginning</li>
                        <li><b>End</b> - Moves to the end</li>
                        <li>Typing in a cell when the Grid is 'editable' will put the cell in edit mode.</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default App;