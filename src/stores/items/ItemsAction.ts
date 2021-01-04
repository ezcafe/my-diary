import * as ItemsEffect from "./ItemsEffect";
import HttpErrorResponseModel from "../../models/HttpErrorResponseModel";
import * as ActionUtility from "../../utilities/ActionUtility";
import { ReduxDispatch } from "../../models/ReduxProps";
import IStore from "../../models/IStore";
import ItemModel from "./models/items/ItemModel";

type ActionUnion = undefined | HttpErrorResponseModel | ItemModel[];

export const REQUEST_ITEMS: string = "ShowsAction.REQUEST_ITEMS";
export const REQUEST_ITEMS_FINISHED: string = "ShowsAction.REQUEST_ITEMS_FINISHED";

export const requestItems = (): any => {
	return async (dispatch: ReduxDispatch<ActionUnion>, getState: () => IStore): Promise<void> => {
		const showId: string = getState().items.currentItemId;

		await ActionUtility.createThunkEffect<ItemModel[]>(dispatch, REQUEST_ITEMS, ItemsEffect.requestItems, showId);
	};
};

export const REQUEST_ERROR: string = "ShowsAction.REQUEST_ERROR";
export const REQUEST_ERROR_FINISHED: string = "ShowsAction.REQUEST_ERROR_FINISHED";

export const requestError = (): any => {
	return async (dispatch: ReduxDispatch<ActionUnion>, getState: () => IStore): Promise<void> => {
		await ActionUtility.createThunkEffect<any>(dispatch, REQUEST_ERROR, ItemsEffect.requestError);
	};
};
