import IItemsState from "./models/IItemsState";
import * as ItemsAction from "./ItemsAction";
import IAction from "../../models/IAction";
import ItemModel from "./models/items/ItemModel";
import baseReducer from "../../utilities/BaseReducer";
import { Reducer } from "redux";

export const initialState: IItemsState = {
	currentItemId: "74",
	items: [],
};

const showsReducer: Reducer = baseReducer(initialState, {
	[ItemsAction.REQUEST_ITEMS_FINISHED](state: IItemsState, action: IAction<ItemModel[]>): IItemsState {
		return {
			...state,
			items: action.payload!,
		};
	},
});

export default showsReducer;
