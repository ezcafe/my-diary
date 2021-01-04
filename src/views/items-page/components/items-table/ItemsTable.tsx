import React from "react";
import ItemsTableRow from "../items-table-row/ItemsTableRow";
import IItemTable from "../../../../selectors/items/models/IItemTable";
import IItemTableRow from "../../../../selectors/items/models/IItemTableRow";

interface IProps {
	readonly tableData: IItemTable;
}

const ItemsTable: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const { tableData } = props;

	return (
		<div key={tableData.title}>
			<h2>{tableData.title}</h2>
			<table>
				<th>
					<tr>
						<td>Name</td>
					</tr>
				</th>
				<tbody>
					{tableData.rows.map((model: IItemTableRow) => (
						<ItemsTableRow key={model.name} rowData={model} />
					))}
				</tbody>
			</table>
		</div>
	);
};

export default ItemsTable;
