import React from "react";
import classNames from "classnames";

import styles from "./LoadingIndicator.module.scss";

interface IProps {
	readonly isActive?: boolean;
	readonly className?: string;
}

const LoadingIndicator: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const { isActive = false } = props; // defaultProps example
	const { className, children } = props;

	const cssClasses: string = classNames(className, {
		[styles.wrapper]: isActive,
	});

	return (
		<div className={cssClasses}>
			{isActive && <div className={styles.loaderContainer}>Loading</div>}
			{children}
		</div>
	);
};

export default LoadingIndicator;
