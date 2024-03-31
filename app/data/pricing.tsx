// Icons
import { RiHome4Line } from "react-icons/ri";
import { IoPeopleOutline } from "react-icons/io5";
import { BsBuildings } from "react-icons/bs";

export const pricing = [
  {
    id: 1,
    color: "bg-orange-500",
    icon: <RiHome4Line className="w-14 h-auto text-gray-500" />,
    name: "Starter Website",
    price: "$199",
    description: "Target budget-conscious clients with a simple website",
    features: [
      { id: 1, name: "5-page website" },
      { id: 2, name: "Basic contact form" },
      { id: 3, name: "Limited design customization" },
      { id: 4, name: "Faster turnaround time" }
    ]
  },
  {
    id: 2,
    color: "bg-blue-400",
    icon: <IoPeopleOutline className="w-14 h-auto text-gray-500" />,
    name: "Growing Business Website",
    price: "$499",
    description: "Ideal for businesses needing a more robust online presence.",
    features: [
      { id: 1, name: "5-page website" },
      { id: 2, name: "Basic contact form" },
      { id: 3, name: "Limited design customization" },
      { id: 4, name: "Faster turnaround time" },
    ],
    features1: [
      { id: 1, name: "10-15 page website" },
      { id: 2, name: "More design customization options" },
      { id: 3, name: "Integration with social media platforms" },
      { id: 4, name: "Call to action (CTA) buttons" },
      { id: 5, name: "Analytics & Reporting setup" },
    ]
  },
  {
    id: 3,
    color: "bg-blue-900",
    icon: <BsBuildings className="w-14 h-auto text-gray-500" />,
    name: "E-commerce Website",
    price: "$799",
    description: "Cater to businesses selling products online.",
    features: [
      { id: 1, name: "5-page website" },
      { id: 2, name: "Basic contact form" },
      { id: 3, name: "Limited design customization" },
      { id: 4, name: "Faster turnaround time" }
    ],
    features1: [
      { id: 1, name: "10-15 page website" },
      { id: 2, name: "More design customization options" },
      { id: 3, name: "Integration with social media platforms" },
      { id: 4, name: "Call to action (CTA) buttons" },
      { id: 5, name: "Analytics & Reporting setup" },
    ],
    features2: [
      { id: 1, name: "Shopping cart functionality" },
      { id: 2, name: "Secure payment gateway integration" },
      { id: 3, name: "Product management tools" },
      { id: 4, name: "Inventory management system (optional)" },
      { id: 5, name: "Advanced SEO features for product pages" },
    ],
  },
];
