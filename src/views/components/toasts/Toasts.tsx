import React from "react";
import { useSelector } from "react-redux";
import IStore from "../../../models/IStore";
import IToast from "../../../stores/toasts/models/IToast";

import styles from "./Toasts.module.scss";

interface IProps {}

const Toasts: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const toasts: IToast[] = useSelector((state: IStore) => state.toasts.items);

	if (toasts.length === 0) {
		return null;
	}

	return (
		<div className={styles.wrapper}>
			{toasts.map((model: IToast) => (
				<div key={model.id}>{model.message}</div>
			))}
		</div>
	);
};

export default Toasts;
