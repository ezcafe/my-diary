import HttpErrorResponseModel from "../../models/HttpErrorResponseModel";
import * as HttpUtility from "../../utilities/HttpUtility";
import ItemModel from "./models/items/ItemModel";
import { AxiosResponse } from "axios";
import * as EffectUtility from "../../utilities/EffectUtility";

export const requestItems = async (showId: string): Promise<ItemModel[] | HttpErrorResponseModel> => {
	const endpoint: string = `https://api.tvmaze.com/shows/:showId/episodes`.replace(":showId", showId);

	return EffectUtility.getToModel<ItemModel[]>(ItemModel, endpoint);
};

/**
 * This is only to trigger an error api response so we can use it for an example in the AboutPage
 */
export const requestError = async (): Promise<any | HttpErrorResponseModel> => {
	const endpoint: string = "https://httpstat.us/520";
	const response: AxiosResponse | HttpErrorResponseModel = await HttpUtility.get(endpoint);

	if (response instanceof HttpErrorResponseModel) {
		return response;
	}

	return response.data;
};
