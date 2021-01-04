import IItemTableRow from "./IItemTableRow";

export default interface IEpisodeTable {
	readonly title: string;
	readonly rows: IItemTableRow[];
}
