import React from "react";

import styles from "./PageLayout.module.css";

const Content = ({ children }: { children: React.ReactNode }) => {
	return <div className={[styles["content"]].join(" ")}>{children}</div>;
};

export default Content;
