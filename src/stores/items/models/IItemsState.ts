import ItemModel from "./items/ItemModel";

export default interface IShowsState {
	readonly currentItemId: string;
	readonly items: ItemModel[];
}
