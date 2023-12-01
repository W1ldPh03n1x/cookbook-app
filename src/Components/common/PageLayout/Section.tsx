import React from "react";

import styles from "./PageLayout.module.css";

const Section = ({
	children,
	row = false,
	className = "",
}: {
	children?: React.ReactNode;
	row?: boolean;
	className?: string;
}) => {
	return (
		<section
			className={[
				styles["_section"],
				styles[`_section--${row ? "row" : "column"}`],
				className,
			].join(" ")}
		>
			{children}
		</section>
	);
};

export default Section;
