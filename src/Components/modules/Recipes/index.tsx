import React from "react";
import styles from "./Recipes.module.css";
import Section from "./Section";
import Card from "./Card";
import CategoryTitle from "./CategoryTitle";

export const Recipes = ({ children }: { children: React.ReactNode }) => {
	return <main className={styles["_"]}>{children}</main>;
};

Recipes.Section = Section;
Recipes.Card = Card;
Recipes.CategoryTitle = CategoryTitle;
