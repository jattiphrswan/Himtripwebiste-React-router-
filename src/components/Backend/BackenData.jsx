// Backend data for tours
import kedarnathImg from "../../assets/places/kedarnath.png";
import govindghatImg from "../../assets/places/Govindghat.jpg";
import rishikeshImg from "../../assets/places/rishikesh.jpeg";
import nainitalImg from "../../assets/places/naintal.jpeg";
import auliImg from "../../assets/places/auli.webp";
import almoraImg from "../../assets/places/almora.jpeg";
import mussoorieImg from "../../assets/places/mussoire.jpg";
import trekkingImg from "../../assets/adventurs/tracking.jpg";
import raftingImg from "../../assets/adventurs/river-rafting.webp";
import wildlifeImg from "../../assets/adventurs/wildlife.jpg";        
import yogaImg from "../../assets/adventurs/yoga.jpg";
import roadtripImg from "../../assets/adventurs/roadtrip.jpg";
import campingImg from "../../assets/adventurs/camping.jpeg";
import skydivingImg from "../../assets/adventurs/sky-diving.jpeg";
import banjijumpingImg from "../../assets/adventurs/bungee-jumping.jpg";

const toursData = [
  {
    id: 1,
    title: "7-Day Char Dham Yatra (Deluxe)",
    destination: "Uttarakhand: Kedarnath, Badrinath",
    duration: 7,
    style: "Pilgrimage",
    rating: 4.8,
    reviews: 210,
    price: 34990,
    originalPrice: 40000,
    onSale: true,
    icon: "ph-mountain",
    category: "Pilgrimage",
    image: kedarnathImg, // image added
  },
  {
    id: 2,
    title: "5-Day Valley of Flowers Trek",
    destination: "Uttarakhand: Govindghat, Hemkund",
    duration: 5,
    style: "Trekking",
    rating: 5.0,
    reviews: 188,
    price: 15500,
    originalPrice: null,
    onSale: false,
    icon: "ph-flower-lotus",
    category: "Trekking",
    image: govindghatImg,
  },
  {
    id: 3,
    title: "3-Day Rishikesh Adventure Camp",
    destination: "Uttarakhand: Rishikesh, Shivpuri",
    duration: 3,
    style: "Adventure Sports",
    rating: 4.7,
    reviews: 310,
    price: 9990,
    originalPrice: null,
    onSale: false,
    icon: "ph-boat",
    category: "Adventure",
    image: rishikeshImg,
  },
  {
    id: 4,
    title: "4-Day Nainital & Kumaon Family Tour",
    destination: "Uttarakhand: Nainital, Bhimtal",
    duration: 4,
    style: "Family",
    rating: 4.6,
    reviews: 95,
    price: 18000,
    originalPrice: 20000,
    onSale: true,
    icon: "ph-users-three",
    category: "Family",
    image: nainitalImg,
  },
  {
    id: 5,
    title: "6-Day Auli Snow & Trekking Expedition",
    destination: "Uttarakhand: Joshimath, Auli",
    duration: 6,
    style: "Winter Sports",
    rating: 4.9,
    reviews: 150,
    price: 28000,
    originalPrice: null,
    onSale: false,
    icon: "ph-ski",
    category: "Trekking",
    image: auliImg,
  },
  {
    id: 6,
    title: "Almora Kumaon Hills Adventure",
    destination: "Uttarakhand: Almora, Kumaon",
    duration: 4,
    style: "Sightseeing",
    rating: 4.4,
    reviews: 75,
    price: 19900,
    originalPrice: 21000,
    onSale: false,
    icon: "ph-tree-evergreen",
    category: "Kumaon",
    image: almoraImg,
  },
  {
    id: 7,
    title: "Nainital Lake District Trip",
    destination: "Uttarakhand: Nainital, Bhimtal",
    duration: 3,
    style: "Family",
    rating: 4.6,
    reviews: 120,
    price: 14900,
    originalPrice: null,
    onSale: true,
    icon: "ph-drop",
    category: "Kumaon",
    image: nainitalImg,
  },
  {
    id: 8,
    title: "Ganga Rishikesh White Water Rafting",
    destination: "Uttarakhand: Rishikesh, Rafting",
    duration: 2,
    style: "Adventure Sports",
    rating: 4.9,
    reviews: 450,
    price: 29900,
    originalPrice: null,
    onSale: false,
    icon: "ph-tent",
    category: "Adventure",
    image: rishikeshImg,
  },
  {
    id: 9,
    title: "Mussoorie Queen of Hills Scenic Tour",
    destination: "Uttarakhand: Mussoorie, Dehradun",
    duration: 5,
    style: "Family",
    rating: 4.5,
    reviews: 105,
    price: 24900,
    originalPrice: 26000,
    onSale: false,
    icon: "ph-cable-car",
    category: "Family",
    image: mussoorieImg,
  },
];

export default toursData;

// src/components/Backend/BackenData.jsx

export const ADVENTURE_STYLES = [
  {
    id: 1,
    title: "Trekking & Hiking",
    description:
      "Scale iconic Himalayan peaks, discover hidden high-altitude lakes, and traverse lush forests.",
    icon: "ph-mountains-fill",
    example: "Kedarkantha, Valley of Flowers",
    color: "text-green-400",
    imageUrl: trekkingImg,
  },
  {
    id: 2,
    title: "Aquatic Adventures",
    description:
      "Conquer the mighty Ganges with white-water rafting, or try kayaking, canyoning near Rishikesh.",
    icon: "ph-waves-fill",
    example: "Rishikesh Rafting, Kayaking in Shivpuri",
    color: "text-blue-400",
    imageUrl: raftingImg,
  },
  {
    id: 3,
    title: "Wildlife Safari",
    description:
      "Explore the biodiversity of the Himalayan foothills. Spot tigers, elephants, and leopards in national parks.",
    icon: "ph-paw-print-fill",
    example: "Jim Corbett National Park, Rajaji Reserve",
    color: "text-teal-400",
    imageUrl: wildlifeImg,
  },
  {
    id: 4,
    title: "Pilgrimage & Spirituality",
    description:
      "Journey to the holy shrines of Char Dham, meditate in Rishikesh ashrams, and seek blessings.",
    icon: "ph-house-line-fill",
    example: "Char Dham Yatra, Haridwar Ganga Aarti",
    color: "text-indigo-400",
    imageUrl:   banjijumpingImg,
  },
  {
    id: 5,
    title: "Culture & Heritage",
    description:
      "Immerse yourself in Kumaoni and Garhwali cultures. Visit centuries-old temples and enjoy local cuisine.",
    icon: "ph-handshake-fill",
    example: "Almora, Kausani, Local Homestays",
    color: "text-purple-400",
    imageUrl: skydivingImg,
  },
  {
    id: 6,
    title: "Wellness & Yoga Retreats",
    description:
      "Find peace and rejuvenation in the lap of the mountains with yoga, meditation, and detox programs.",
    icon: "ph-leaf-fill",
    example: "Rishikesh Yoga Schools, Wellness Centers",
    color: "text-pink-400",
    imageUrl: yogaImg,
  },
  {
    id: 7,
    title: "Motorcycle & Road Trips",
    description:
      "Experience the thrill of riding through challenging mountain passes and scenic highways on a guided bike tour.",
    icon: "ph-motorcycle-fill",
    example: "Badrinath Road Trip, Remote Routes",
    color: "text-red-400",
    imageUrl: roadtripImg,
  },
  {
    id: 8,
    title: "Camping & Stargazing",
    description:
      "Spend nights under the clear Himalayan skies. Enjoy organized camping and breathtaking views.",
    icon: "ph-tent-fill",
    example: "Chopta, Kanatal Campsites",
    color: "text-gray-400",
    imageUrl: campingImg,
  },
];
