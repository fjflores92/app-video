import React from 'react';
import '../assets/styles/Category.scss';

const Category = ({ title, children }) => (
    <section className="category">
        <h3 className="category__title">{title}</h3>
        {children}
    </section>
);

export default Category;