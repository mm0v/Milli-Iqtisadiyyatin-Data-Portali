import React from "react";

interface Item {
  id: number;
  category: string;
  [key: string]: any;
}

interface CategoryProps {
  data: Item[];
  category: string;
}

const HocCatg = (NewComponent: React.ComponentType<CategoryProps>) => {
  return ({ data, category }: CategoryProps) => {
    const safeData = Array.isArray(data) ? data : [];
    
    const filteredData = safeData.filter((item) => item.category === category);

    return <NewComponent data={filteredData} category={category} />;
  };
};

export default HocCatg;
