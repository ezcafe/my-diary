import React from "react";
import styles from "./NotFoundPage.module.scss";

interface IProps {}

const NotFoundPage: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return <div className={styles.wrapper}>Not found page</div>;
};

export default NotFoundPage;
