import React from "react";
import IItemTableRow from "../../../../selectors/items/models/IItemTableRow";

interface IProps {
	readonly rowData: IItemTableRow;
}

const ItemsTableRow: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const { rowData } = props;

	return (
		<tr key={rowData.id}>
			<td>{rowData.name}</td>
		</tr>
	);
};

export default ItemsTableRow;
