import React from "react";
import MenuCard from "./components/MenuCard";
import MenuHeader from "./components/MenuHeader";
import menuImag from "@/assets/images/shared/menu1.png";

const AllMenus = () => {
  // Array of menu items (you can replace this with dynamic data)
  const menuItems = [
    {
      id: 1,
      image: menuImag,
      category: "Appetizers",
    },
    {
      id: 2,
      image: menuImag,
      category: "Main Course",
    },
    {
      id: 3,
      image: menuImag,
      category: "Desserts",
    },
    {
      id: 4,
      image: menuImag,
      category: "Beverages",
    },
    {
      id: 5,
      image: menuImag,
      category: "Beverages",
    },
    {
      id: 6,
      image: menuImag,
      category: "Beverages",
    },
    {
      id: 7,
      image: menuImag,
      category: "Beverages",
    },
    {
      id: 8,
      image: menuImag,
      category: "Beverages",
    },
  ];

  // Function to handle edit
  const handleEdit = (id: number) => {
    alert(`Edit clicked for menu item ID: ${id}`);
  };

  // Function to handle delete
  const handleDelete = (id: number) => {
    alert(`Delete clicked for menu item ID: ${id}`);
  };

  return (
    <section>
      <MenuHeader />

      {/* Loop through the menu items and render MenuCard for each */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-3  gap-y-5 sm:gap-4 md:gap-6 p-4">
        {menuItems.map((menu) => (
          <MenuCard
            key={menu.id}
            image={menu.image}
            category={menu.category}
            onEdit={() => handleEdit(menu.id)}
            onDelete={() => handleDelete(menu.id)}
          />
        ))}
      </div>
    </section>
  );
};

export default AllMenus;
