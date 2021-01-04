import { AxiosResponse } from "axios";
import { IConstructor } from "../models/IConstructor";
import HttpErrorResponseModel from "../models/HttpErrorResponseModel";
import * as HttpUtility from "./HttpUtility";

type FlattenIfArray<T> = T extends (infer R)[] ? R : T;
type SingleItemOrArray<T> = T extends [] ? T[] : T;

export const getToModel = async <T>(
	Model: IConstructor<FlattenIfArray<T>>,
	endpoint: string,
	params?: unknown
): Promise<SingleItemOrArray<T> | HttpErrorResponseModel> => {
	const response: AxiosResponse | HttpErrorResponseModel = await HttpUtility.get(endpoint, params);

	return restModelCreator<T>(Model, response);
};

export const postToModel = async <T>(
	Model: IConstructor<FlattenIfArray<T>>,
	endpoint: string,
	data?: unknown
): Promise<SingleItemOrArray<T> | HttpErrorResponseModel> => {
	const response: AxiosResponse | HttpErrorResponseModel = await HttpUtility.post(endpoint, data);

	return restModelCreator<T>(Model, response);
};

const restModelCreator = <T>(
	Model: IConstructor<FlattenIfArray<T>>,
	response: AxiosResponse | HttpErrorResponseModel
): SingleItemOrArray<T> | HttpErrorResponseModel => {
	if (response instanceof HttpErrorResponseModel) {
		return response;
	}

	return !Array.isArray(response.data) ? new Model(response.data) : (response.data.map((json) => new Model(json)) as any);
};
