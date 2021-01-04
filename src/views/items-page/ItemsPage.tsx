import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";

import IStore from "../../models/IStore";
import * as ItemsAction from "../../stores/items/ItemsAction";
import { selectItems } from "../../selectors/items/ItemsSelector";
import IItemTable from "../../selectors/items/models/IItemTable";
import LoadingIndicator from "../components/loading-indicator/LoadingIndicator";
import { selectRequesting } from "../../selectors/requesting/RequestingSelector";
import ItemsTable from "./components/items-table/ItemsTable";

interface IProps {}

const ItemsPage: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const dispatch: Dispatch = useDispatch();

	useEffect(() => {
		dispatch(ItemsAction.requestItems());
	}, [dispatch]);

	const isRequesting: boolean = useSelector((state: IStore) => selectRequesting(state, [ItemsAction.REQUEST_ITEMS]));
	const itemTables: IItemTable[] = useSelector((state: IStore) => selectItems(state));

	return (
		<>
			<LoadingIndicator isActive={isRequesting} />
			{itemTables.map((model: IItemTable) => (
				<ItemsTable key={model.title} tableData={model} />
			))}
		</>
	);
};

export default ItemsPage;
