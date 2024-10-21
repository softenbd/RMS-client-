import React from "react";


interface MenuCardProps {
  image: string;
  category: string;
  onEdit: () => void;
  onDelete: () => void;
}

const MenuCard: React.FC<MenuCardProps> = ({ image, category, onEdit, onDelete }) => {
  return (
    <div className=" rounded-lg overflow-hidden bg-gray-50">
      {/* Menu Image */}
      <div className=" p-2 sm:p-5 mx-auto">
      <img className="w-full  object-cover" src={image} alt={category} />
      </div>
    </div>
  );
};

export default MenuCard;
