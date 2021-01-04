import { createSelector, Selector } from "reselect";
import IStore from "../../models/IStore";
import ItemModel from "../../stores/items/models/items/ItemModel";
import groupBy from "lodash.groupby";
import IItemTable from "./models/IItemTable";
import IItemTableRow from "./models/IItemTableRow";

const _selectItems = (items: ItemModel[]): IItemTable[] => {
	const seasons: { [season: string]: ItemModel[] } = groupBy(items, "season");

	return Object.entries(seasons).map(
		([season, models]: [string, ItemModel[]]): IItemTable => {
			return {
				title: `Season ${season}`,
				rows: _createTableRows(models),
			};
		}
	);
};

const _createTableRows = (models: ItemModel[]): IItemTableRow[] => {
	return models.map(
		(model: ItemModel): IItemTableRow => ({
			id: model.id,
			name: model.name,
		})
	);
};

export const selectItems: Selector<IStore, IItemTable[]> = createSelector((state: IStore) => state.items.items, _selectItems);
