"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import {
  MdLocalDining,
  MdOutlineNightlife,
  MdOutlineBeachAccess,
  MdOutlineTerrain,
  MdOutlineEco,
  MdDirectionsBoatFilled,
  MdOutlineMap,
} from "react-icons/md";
import {
  FaLandmark,
  FaPaintBrush,
  FaBinoculars,
  FaShoppingBag,
  FaSpa,
  FaCameraRetro,
} from "react-icons/fa";

import {
  GiBarn,
  GiBoatFishing,
  GiCactus,
  GiCastle,
  GiCaveEntrance,
  GiForestCamp,
  GiIsland,
  GiWindmill,
} from "react-icons/gi";
import { FaSkiing } from "react-icons/fa";
import { BsSnow } from "react-icons/bs";
import { IoDiamond } from "react-icons/io5";
import { MdOutlineVilla } from "react-icons/md";

import CategoryBox from "../CategoryBox";
import Container from "../Container";

export const categories = [
  {
    label: "Local Cuisine Experiences",
    icon: MdLocalDining,
    description:
      "Discover and taste the local cuisine with a guided culinary tour!",
  },
  {
    label: "Cultural Tours",
    icon: FaLandmark,
    description: "Explore the rich history and culture with local experts!",
  },
  {
    label: "Adventure Activities",
    icon: MdOutlineTerrain, // Assuming this as a placeholder for adventure-related icon
    description: "Engage in thrilling outdoor activities, guided by locals!",
  },
  {
    label: "Art and Craft Workshops",
    icon: FaPaintBrush,
    description:
      "Participate in local art and craft workshops to learn and create!",
  },
  {
    label: "Nature and Wildlife Safaris",
    icon: FaBinoculars,
    description:
      "Embark on guided nature and wildlife safaris to explore the natural beauty!",
  },
  {
    label: "City Nightlife Tours",
    icon: MdOutlineNightlife,
    description: "Experience the vibrant nightlife with a local guide!",
  },
  {
    label: "Historical Sites",
    icon: FaLandmark,
    description:
      "Visit and learn about historical sites from those who know them best!",
  },
  {
    label: "Beach and Coastal Getaways",
    icon: MdOutlineBeachAccess,
    description:
      "Relax at stunning coastal locations, with insider tips on secluded spots!",
  },
  {
    label: "Mountain and Hiking Tours",
    icon: MdOutlineTerrain,
    description:
      "Explore breathtaking mountain trails and vistas with local hiking guides!",
  },
  {
    label: "Local Shopping Tours",
    icon: FaShoppingBag,
    description:
      "Discover local markets and unique finds with a shopping expert!",
  },
  {
    label: "Yoga and Wellness Retreats",
    icon: FaSpa,
    description:
      "Rejuvenate with local wellness and yoga retreats amidst serene settings!",
  },
  {
    label: "Photography Tours",
    icon: FaCameraRetro,
    description:
      "Capture the beauty of your destination with guided photography tours!",
  },
  {
    label: "Eco-Tourism and Conservation",
    icon: MdOutlineEco,
    description:
      "Participate in eco-tourism activities and conservation efforts with locals!",
  },
  {
    label: "Boat and Sailing Adventures",
    icon: MdDirectionsBoatFilled,
    description:
      "Set sail on a local boat adventure, exploring hidden waterways and islands!",
  },
  {
    label: "Custom Itineraries",
    icon: MdOutlineMap,
    description:
      "Get a personalized travel itinerary, crafted by local travel experts!",
  },
];

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get("category");
  const pathname = usePathname();
  const isMainPage = pathname === "/";

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div
        className="
          pt-4
          flex 
          flex-row 
          items-center 
          justify-between
          overflow-x-auto
        "
      >
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            icon={item.icon}
            selected={category === item.label}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
