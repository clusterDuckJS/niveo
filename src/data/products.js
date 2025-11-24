import {
  LuStethoscope,
  LuHeart,
  LuWind,
} from "react-icons/lu";

export const products = [
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
    title: "Respiratory",
    desc: "Complete respiratory therapy and oxygen solutions",
    image:
      "https://media.gettyimages.com/id/1822581451/photo/nebulizer-in-an-apartment.jpg?b=1&s=2048x2048&w=0&k=20&c=o7ykGXcbhtYrMHaYVGOzHn-WGmEdnbJC86HgieoLrc4=",
    features: [
      "Oxygen Concentrators",
      "Nebulizers",
      "CPAP/BiPAP Devices",
    ],
    linkTo: "/products/respiratory",
    icon: LuWind,
  },
  {
    title: "Wound Care & Fixation",
    desc: "Comprehensive wound management and healing solutions",
    image:
      "https://media.gettyimages.com/id/2156350134/photo/preparing-her-stoma-bag-equipment.jpg?b=1&s=2048x2048&w=0&k=20&c=nVbMp1PLwp_SZT8v5hwtbkdIh0O7EDAgqtYNaeTVcBU=",
    features: [
      "Advanced Dressings",
      "Negative Pressure Therapy",
      "Wound Care Kits",
      "ET Tube Holders",
      "IV Fixation Dressings",
      "Catheter Securement",
      "Instrument Covers",
    ],
    linkTo: "/products/wound",
    icon: LuHeart,
  },

  // {
  //   title: "Fixation  Covers",
  //   desc: "ET Tube Holders and medical fixation devices by Yafho",
  //   image:
  //     "https://media.gettyimages.com/id/1352489963/photo/nurse-at-the-hospital-checking-the-vitals-on-a-hospitalized-patient.jpg?b=1&s=2048x2048&w=0&k=20&c=6Ew-14TvLVP_dOOSh4nw6EC-oHbdbWu5cBdG3H1r-cQ=",
  //   features: [
  //     "ET Tube Holders",
  //     "IV Fixation Dressings",
  //     "Catheter Securement",
  //     "Instrument Covers",
  //   ],
  //   linkTo: "/products",
  //   icon: LuShield,
  // },
];

export const woundProduct = [
  {
    title: "Silicone Dressing",
    description: "Gentle, atraumatic wound dressing with silicone adhesive technology for pain-free removal and optimal healing environment.",
    features: [
      "Atraumatic removal",
      "Reduces pain",
      "Minimizes skin damage",
      "Suitable for fragile skin"
    ],
    applications: [
      "Acute wounds",
      "Chronic wounds",
      "Fragile skin",
      "Pediatric care"
    ],
    imageUrl: "/mnt/data/d1af60bf-f862-4dc9-abd3-4c9a0573d843.png"
  },

  {
    title: "Advanced Dressing",
    description: "Multi-layer advanced wound dressing providing superior absorption, protection, and healing support.",
    features: [
      "High absorption capacity",
      "Bacterial barrier",
      "Moisture balance",
      "Extended wear time"
    ],
    applications: [
      "Moderate to heavy exudate",
      "Surgical wounds",
      "Pressure ulcers",
      "Diabetic ulcers"
    ],
    imageUrl: "/mnt/data/d1af60bf-f862-4dc9-abd3-4c9a0573d843.png"
  },

  {
    title: "Reco NPWT Dressing",
    description: "Specialized dressing for negative pressure wound therapy, promoting faster healing through controlled suction.",
    features: [
      "Compatible with NPWT systems",
      "Even pressure distribution",
      "Exudate management",
      "Promotes granulation"
    ],
    applications: [
      "Complex wounds",
      "Post-surgical wounds",
      "Traumatic wounds",
      "Chronic ulcers"
    ],
    imageUrl: "/mnt/data/d1af60bf-f862-4dc9-abd3-4c9a0573d843.png"
  },

  {
    title: "Antimicrobial Hydrogel Dressing",
    description: "Hydrogel dressing with antimicrobial properties to maintain moist wound environment while preventing infection.",
    features: [
      "Antimicrobial protection",
      "Maintains moisture",
      "Cooling effect",
      "Non-adherent"
    ],
    applications: [
      "Infected wounds",
      "Burns",
      "Dry wounds",
      "Necrotic tissue"
    ],
    imageUrl: "/mnt/data/d1af60bf-f862-4dc9-abd3-4c9a0573d843.png"
  },

  {
    title: "Hydrogel Dressing",
    description: "Moisture-donating dressing that creates optimal healing environment for dry or necrotic wounds.",
    features: [
      "Donates moisture",
      "Autolytic debridement",
      "Cooling sensation",
      "Transparent"
    ],
    applications: [
      "Dry wounds",
      "Necrotic tissue",
      "Minor burns",
      "Radiation burns"
    ],
    imageUrl: "/mnt/data/d1af60bf-f862-4dc9-abd3-4c9a0573d843.png"
  },

  {
    title: "Foam Dressing",
    description: "Highly absorbent polyurethane foam dressing for moderate to heavy exuding wounds.",
    features: [
      "High absorbency",
      "Cushioning protection",
      "Moisture vapor transmission",
      "Non-adherent"
    ],
    applications: [
      "Pressure ulcers",
      "Leg ulcers",
      "Surgical wounds",
      "Traumatic wounds"
    ],
    imageUrl: "/mnt/data/d1af60bf-f862-4dc9-abd3-4c9a0573d843.png"
  },
   {
    title: "Hydrocolloid Dressing",
    description:
      "Self-adhesive dressing forming gel on contact with wound exudate, promoting moist wound healing.",
    features: [
      "Moist healing environment",
      "Waterproof",
      "Self-adhesive",
      "Extended wear"
    ],
    applications: [
      "Light to moderate exudate",
      "Pressure ulcers",
      "Minor burns",
      "Donor sites"
    ],
    imageUrl: "/mnt/data/c3cca876-0eac-4782-b70e-1f472f4f9ed1.png"
  },

  {
    title: "Alginate Dressing",
    description:
      "Natural seaweed-derived dressing with high absorption capacity for heavily exuding wounds.",
    features: [
      "High absorption",
      "Hemostatic properties",
      "Biodegradable",
      "Conformable"
    ],
    applications: [
      "Heavy exudate",
      "Cavity wounds",
      "Bleeding wounds",
      "Infected wounds"
    ],
    imageUrl: "/mnt/data/c3cca876-0eac-4782-b70e-1f472f4f9ed1.png"
  },

  {
    title: "Silver Alginate Dressing",
    description:
      "Alginate dressing with ionic silver for antimicrobial protection and superior exudate management.",
    features: [
      "Antimicrobial silver",
      "High absorption",
      "Broad spectrum protection",
      "Reduces bioburden"
    ],
    applications: [
      "Infected wounds",
      "High-risk wounds",
      "Chronic wounds",
      "Burn wounds"
    ],
    imageUrl: "/mnt/data/c3cca876-0eac-4782-b70e-1f472f4f9ed1.png"
  },
   {
    title: "Silicone Foam Dressing",
    description:
      "Combines gentle silicone adhesive with absorbent foam for optimal wound care and patient comfort.",
    features: [
      "Gentle adhesion",
      "High absorption",
      "Atraumatic removal",
      "Repositionable"
    ],
    applications: [
      "Fragile skin",
      "Moderate to heavy exudate",
      "Pressure ulcers",
      "Post-operative wounds"
    ],
    imageUrl: "/mnt/data/c3cca876-0eac-4782-b70e-1f472f4f9ed1.png"
  },
];

export const criticalProducts = [
  {
    title: "FETAL LITE",
    description: "Superior labour monitoring experience - Advanced portable fetal monitoring system",
    features: [
      "Continuous fetal heart rate monitoring",
      "Maternal well-being tracking",
      "Portable and user-friendly",
      "Non-invasive monitoring",
      "Clinical and homecare use"
    ],
    applications: [
      "High-risk Pregnancies",
      "Labor Monitoring",
      "Routine Prenatal Check-ups",
      "Fetal Health Assessment"
    ]
  },

  {
    title: "Patient Monitors",
    description: "Advanced multi-parameter patient monitoring systems for ICU and critical care units",
    features: [
      "Real-time vital signs monitoring",
      "ECG, SpO2, NIBP, Temperature",
      "Alarm management system",
      "Data recording and trending",
      "Network connectivity"
    ],
    applications: [
      "ICU",
      "Emergency Rooms",
      "Operating Theaters",
      "Recovery Rooms"
    ]
  },

  {
    title: "Ventilators",
    description: "High-performance mechanical ventilation systems for respiratory support",
    features: [
      "Multiple ventilation modes",
      "Pressure and volume control",
      "Advanced monitoring",
      "Pediatric and adult settings",
      "Portable and stationary options"
    ],
    applications: [
      "ICU",
      "Emergency Care",
      "Transport",
      "Home Care"
    ]
  },

  {
    title: "Infusion Pumps",
    description: "Precision medication and fluid delivery systems",
    features: [
      "Accurate flow control",
      "Drug library integration",
      "Safety alarms",
      "Multiple delivery modes",
      "Battery backup"
    ],
    applications: [
      "ICU",
      "General Wards",
      "Oncology",
      "Pediatrics"
    ]
  },

  {
    title: "Defibrillators",
    description: "Life-saving cardiac emergency equipment",
    features: [
      "Automated external defibrillation",
      "Manual override capability",
      "ECG monitoring",
      "Voice prompts",
      "Portable design"
    ],
    applications: [
      "ICU",
      "Emergency Response",
      "Cardiac Care",
      "Ambulances"
    ]
  },

  {
    title: "Syringe Pumps",
    description: "Precise medication delivery for critical care",
    features: [
      "High accuracy dosing",
      "Multiple syringe sizes",
      "Programmable delivery rates",
      "Occlusion detection",
      "Battery operation"
    ],
    applications: [
      "ICU",
      "NICU",
      "Anesthesia",
      "Pain Management"
    ]
  }
];

export const catheters = [
  {
    title: "CHG I.V. Fixation Dressing",
    description:
      "Transparent I.V. fixation dressing with chlorhexidine gluconate (CHG) for antimicrobial protection at catheter sites.",
    features: [
      "CHG antimicrobial pad",
      "Transparent design",
      "Secure fixation",
      "Reduces CRBSI risk"
    ],
    applications: [
      "Central venous catheters",
      "Peripheral I.V. catheters",
      "PICC lines",
      "Arterial catheters"
    ]
  },

  {
    title: "IV Fixation Dressing",
    description:
      "Transparent, breathable fixation dressing for securing I.V. catheters with clear site visibility.",
    features: [
      "Transparent film",
      "Breathable",
      "Waterproof",
      "Easy application"
    ],
    applications: [
      "Peripheral I.V. lines",
      "Central lines",
      "Catheter securement",
      "Wound protection"
    ]
  },

  {
    title: "Catheter Securement Device",
    description:
      "Specialized device for secure catheter fixation, reducing movement and preventing dislodgement.",
    features: [
      "Secure hold",
      "Reduces catheter movement",
      "Skin-friendly adhesive",
      "Easy to use"
    ],
    applications: [
      "Urinary catheters",
      "Feeding tubes",
      "Drainage tubes",
      "Various catheters"
    ]
  },

  {
    title: "Endotracheal Tube Holder",
    description:
      "Secure and comfortable endotracheal tube holder preventing tube migration and pressure injuries.",
    features: [
      "Secure tube fixation",
      "Reduces pressure injuries",
      "Easy repositioning",
      "Patient comfort"
    ],
    applications: [
      "Intubated patients",
      "ICU care",
      "Ventilated patients",
      "Emergency care"
    ]
  },

  {
    title: "Tracheostomy Fixation Dressing",
    description:
      "Specialized dressing for tracheostomy sites providing secure fixation and exudate management.",
    features: [
      "Pre-cut design",
      "Absorbent pad",
      "Secure fixation",
      "Skin protection"
    ],
    applications: [
      "Tracheostomy care",
      "Post-surgical care",
      "Long-term tracheostomy",
      "Pediatric tracheostomy"
    ]
  }
];

export const covers = [
  {
    title: "Ultrasound Probe Cover",
    description:
      "Sterile, latex-free probe covers ensuring hygiene and infection control during ultrasound procedures.",
    features: [
      "Sterile packaging",
      "Latex-free",
      "Clear imaging",
      "Universal fit"
    ],
    applications: [
      "Ultrasound examinations",
      "Transesophageal echo",
      "Endocavity procedures",
      "Sterile procedures"
    ]
  },

  {
    title: "Sterile Instrument Cover",
    description:
      "Protective covers maintaining sterility of medical instruments during procedures and storage.",
    features: [
      "Maintains sterility",
      "Tear-resistant",
      "Various sizes",
      "Easy application"
    ],
    applications: [
      "Surgical instruments",
      "Diagnostic equipment",
      "Procedure protection",
      "Storage protection"
    ]
  }
];

export const otherProducts = [
  {
    title: "Ultrasound Transmission Gel",
    description:
      "Medical-grade ultrasound gel providing optimal acoustic coupling for clear diagnostic imaging.",
    features: [
      "Water-based formula",
      "Non-staining",
      "Hypoallergenic",
      "Easy cleanup"
    ],
    applications: [
      "Ultrasound imaging",
      "Doppler studies",
      "Echocardiography",
      "Obstetric ultrasound"
    ]
  }
];


