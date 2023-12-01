import React from "react";
import Title from "./Title";

import styles from "./PageLayout.module.css";
import Container from "./Container";
import Section from "./Section";
import Content from "./Content";

const PageLayout = ({ children }: { children?: React.ReactNode }) => {
	return <div className={styles["_"]}>{children}</div>;
};

PageLayout.Section = Section;
PageLayout.Content = Content;
PageLayout.Title = Title;
PageLayout.Container = Container;

export default PageLayout;
