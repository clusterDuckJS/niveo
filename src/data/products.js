import {
  LuStethoscope,
  LuHeart,
  LuWind,
  LuShield,
} from "react-icons/lu";

const products = [
  {
    title: "Critical Care Equipment",
    desc: "Advanced ICU equipment and patient monitoring systems",
    image:
      "https://media.gettyimages.com/id/1352489899/photo/doctors-checking-on-a-patient-at-the-hospital.jpg?b=1&s=2048x2048&w=0&k=20&c=6DGsiuC8aQhu0_RoATzvlkxDSQeNZ5utYeDfFl23cso=",
    features: ["Patient Monitors", "Ventilators", "Infusion Pumps"],
    linkTo: "/products",
    icon: LuStethoscope,
  },
  {
    title: "Wound Care",
    desc: "Comprehensive wound management and healing solutions",
    image:
      "https://media.gettyimages.com/id/2156350134/photo/preparing-her-stoma-bag-equipment.jpg?b=1&s=2048x2048&w=0&k=20&c=nVbMp1PLwp_SZT8v5hwtbkdIh0O7EDAgqtYNaeTVcBU=",
    features: [
      "Advanced Dressings",
      "Negative Pressure Therapy",
      "Wound Care Kits",
    ],
    linkTo: "/products",
    icon: LuHeart,
  },
  {
    title: "Respiratory",
    desc: "Complete respiratory therapy and oxygen solutions",
    image:
      "https://media.gettyimages.com/id/1822581451/photo/nebulizer-in-an-apartment.jpg?b=1&s=2048x2048&w=0&k=20&c=o7ykGXcbhtYrMHaYVGOzHn-WGmEdnbJC86HgieoLrc4=",
    features: [
      "Oxygen Concentrators",
      "Nebulizers",
      "CPAP/BiPAP Devices",
    ],
    linkTo: "/products",
    icon: LuWind,
  },
  {
    title: "Fixation & Covers",
    desc: "ET Tube Holders and medical fixation devices by Yafho",
    image:
      "https://media.gettyimages.com/id/1352489963/photo/nurse-at-the-hospital-checking-the-vitals-on-a-hospitalized-patient.jpg?b=1&s=2048x2048&w=0&k=20&c=6Ew-14TvLVP_dOOSh4nw6EC-oHbdbWu5cBdG3H1r-cQ=",
    features: [
      "ET Tube Holders",
      "IV Fixation Dressings",
      "Catheter Securement",
      "Instrument Covers",
    ],
    linkTo: "/products",
    icon: LuShield,
  },
];

export default products;
