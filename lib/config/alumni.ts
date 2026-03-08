import Uber from "@/public/logos/uber-15.svg"
import ZS from "@/public/logos/zs.png"
import PayPal from "@/public/logos/paypal.png"
import Swiggy from "@/public/logos/swiggy.png"
import Zomato from "@/public/logos/zomato.png"
import Ion from "@/public/logos/ion.png"
import Yamaha from "@/public/logos/yamaha.png"
import { StaticImageData } from "next/image"

export const NOTABLE_ALUMNI = [
  {
    name: "Arnav Gupta",
    batch: "2021-2025",
    role: "",
    current: "Google",
    link: "https://www.linkedin.com/in/arnav-gupta-b1715121b",
    image: "https://res.cloudinary.com/djqkhf152/image/upload/v1772966966/arnav_ai1rvt.jpg",
  },
  {
    name: "Kashvi Garg",
    batch: "2021-2025",
    role: "",
    current: "Google",
    link: "https://www.linkedin.com/in/kashvi-garg-2k3",
    image: "https://res.cloudinary.com/djqkhf152/image/upload/v1772966946/kashvi_garg_xdinls.jpg",
  },
  {
    name: "Arham Jain",
    batch: "2021-2025",
    role: "",
    current: "Amazon",
    link: "https://www.linkedin.com/in/arham--jain",
    image: "https://res.cloudinary.com/djqkhf152/image/upload/v1772966966/arham_jain_cy98i8.jpg",
  },
  {
    name: "Ayush Gupta",
    batch: "2020-2024",
    role: "",
    current: "Amazon",
    link: "https://www.linkedin.com/in/ayush-gupta-057368186",
    image: "https://res.cloudinary.com/djqkhf152/image/upload/v1772966945/ayush_gupta_ovudaq.jpg",
  },
  {
    name: "Sparsh Chadha",
    batch: "2020-2024",
    role: "",
    current: "Zomato",
    link: "https://www.linkedin.com/in/sparsh-chadha-330643204",
    image: "https://res.cloudinary.com/djqkhf152/image/upload/v1772966965/sparsh_chadha_xjedrn.jpg",
  },
  {
    name: "Darpan Chanana",
    batch: "2020-2024",
    role: "",
    current: "Swiggy",
    link: "https://www.linkedin.com/in/darpan-chanana-058914201",
    image: "https://res.cloudinary.com/djqkhf152/image/upload/v1772966945/darpan_chanana_qpfuks.jpg",
  },
  {
    name: "Sachin Poonia",
    batch: "2020-2024",
    role: "",
    current: "Zeta",
    link: "https://www.linkedin.com/in/sachin-poonia-7482a01bb",
    image: "https://res.cloudinary.com/djqkhf152/image/upload/v1772966947/sachin_poonia_x2gczt.jpg",
  },
  {
    name: "Aditya Gupta",
    batch: "2021-2025",
    role: "",
    current: "ZS",
    link: "https://www.linkedin.com/in/aditya-guptaa",
    image: "https://res.cloudinary.com/djqkhf152/image/upload/v1772966966/aditya_gupta_tqyhjh.png",
  },
  {
    name: "Anjali Gupta",
    batch: "2020-2024",
    role: "",
    current: "ZS",
    link: "https://www.linkedin.com/in/anjali-gupta-254814203",
    image: "https://res.cloudinary.com/djqkhf152/image/upload/v1772966966/anjali_rl3lca.jpg",
  },
  {
    name: "Jatin Bhatt",
    batch: "2021-2025",
    role: "",
    current: "Infosys",
    link: "https://www.linkedin.com/in/jatin-bhatt-711aa1194",
    image: "https://res.cloudinary.com/djqkhf152/image/upload/v1772966946/jatin_bhatt_rohzjf.jpg",
  },
  {
    name: "Chaitanya Bisht",
    batch: "2020-2024",
    role: "",
    current: "United Airlines",
    link: "https://www.linkedin.com/in/chaitanyabisht",
    image: "https://res.cloudinary.com/djqkhf152/image/upload/v1772966945/chaitanya_bisht_v5i46v.jpg",
  },
  {
    name: "Atharva Rana",
    batch: "2020-2024",
    role: "",
    current: "AngelOne",
    link: "https://www.linkedin.com/in/atharvarana",
    image: "https://res.cloudinary.com/djqkhf152/image/upload/v1772966977/atharva_rana_xq3fh2.jpg",
  },
  {
    name: "Bhumika Arora",
    batch: "2020-2024",
    role: "",
    current: "Yamaha",
    link: "https://www.linkedin.com/in/bhumika-arora-a0aa92222",
    image: "https://res.cloudinary.com/djqkhf152/image/upload/v1772966945/bhumika_gufueb.jpg",
  },
  {
    name: "Jiya Verma",
    batch: "2021-2025",
    role: "",
    current: "ION",
    link: "https://www.linkedin.com/in/jiyaverma",
    image: "https://res.cloudinary.com/djqkhf152/image/upload/v1772966945/jiya_verma_svwhyt.jpg",
  },
  {
    name: "Karanjot Singh",
    batch: "2021-2025",
    role: "",
    current: "FNZ",
    link: "https://www.linkedin.com/in/karanjot-s",
    image: "https://res.cloudinary.com/djqkhf152/image/upload/v1772966946/karanjot_singh_y3bgzd.jpg",
  },
  {
    name: "Jai Sukheja",
    batch: "2021-2025",
    role: "",
    current: "Xceedance",
    link: "https://www.linkedin.com/in/jaisukheja02",
    image: "https://res.cloudinary.com/djqkhf152/image/upload/v1772966946/jai_sukheja_tuzvg6.jpg",
  },
  {
    name: "Keshav Chahal",
    batch: "2020-2024",
    role: "",
    current: "Extreme",
    link: "https://www.linkedin.com/in/keshav-chahal-884237125",
    image: "https://res.cloudinary.com/djqkhf152/image/upload/v1772966946/keshav_chahal_k9cyny.jpg",
  },
  {
    name: "Jivesh Lakhani",
    batch: "2021-2025",
    role: "",
    current: "Candid",
    link: "https://www.linkedin.com/in/jivesh-lakhani",
    image: "https://res.cloudinary.com/djqkhf152/image/upload/v1772966945/jivesh_lakhani_ljhysk.jpg",
  },
  {
    name: "Paramhans Singh",
    batch: "2021-2025",
    role: "",
    current: "Optimus",
    link: "https://www.linkedin.com/in/paramhans-singh13",
    image: "https://res.cloudinary.com/djqkhf152/image/upload/v1772966947/paramhans_singh_hhwljj.jpg",
  },
  {
    name: "Kushagra Jain",
    batch: "2020-2024",
    role: "",
    current: "Stellar",
    link: "https://www.linkedin.com/in/kushagrajain58",
    image: "https://res.cloudinary.com/djqkhf152/image/upload/v1772966947/kushagra_jain_mrrys7.jpg",
  },
  {
    name: "Ashish Yadav",
    batch: "2021-2025",
    role: "",
    current: "Karya",
    link: "https://www.linkedin.com/in/criticalay",
    image: "https://res.cloudinary.com/djqkhf152/image/upload/v1772966967/ashish_yadav_r5x6p2.jpg",
  },
  {
    name: "Sumit Singh",
    batch: "2020-2024",
    role: "",
    current: "Grayweb",
    link: "https://www.linkedin.com/in/sumit8031",
    image: "https://res.cloudinary.com/djqkhf152/image/upload/v1772966966/sumit_singh_kz2wca.jpg",
  },
  {
    name: "Simran Arora",
    batch: "2022-2026",
    role: "",
    current: "hypercode",
    link: "https://www.linkedin.com/in/simran-arora-28125b258",
    image: "https://res.cloudinary.com/djqkhf152/image/upload/v1772966953/simran_arora_pre4cc.jpg",
  },
  {
    name: "Jayant Aggarwal",
    batch: "2022-2026",
    role: "",
    current: "",
    link: "https://www.linkedin.com/in/jayant-aggarwal-418910248",
    image: "https://res.cloudinary.com/djqkhf152/image/upload/v1772966946/jayant_evskhm.jpg",
  },
  {
    name: "Keshav Goyal",
    batch: "2022-2026",
    role: "",
    current: "",
    link: "https://www.linkedin.com/in/keshav-goyal-481004250",
    image: "https://res.cloudinary.com/djqkhf152/image/upload/v1772966946/keshav_goyal_uir6fr.jpg",
  },
  {
    name: "Pratishtha Gupta",
    batch: "2022-2026",
    role: "",
    current: "",
    link: "https://www.linkedin.com/in/pratishtha-gupta-8a8b29250",
    image: "https://res.cloudinary.com/djqkhf152/image/upload/v1772966947/pratishtha_o3wjxn.jpg",
  },
]

export const ALUMNI_IMPACT = [
  { 
    stat: 47,
    suffix: "+",
    label: "Engineers",
    sublabel: "at FAANG & tier-1 companies worldwide"
  },
  { 
    stat: 14,
    suffix: "",
    label: "Founders",
    sublabel: "building startups from zero to scale"
  },
  { 
    stat: 6,
    suffix: "",
    label: "Researchers",
    sublabel: "at top global institutions & labs"
  },
  { 
    stat: 200,
    suffix: "+",
    label: "Alumni",
    sublabel: "contributing to the tech ecosystem"
  },
]

export interface Company {
  name: string
  logo: string | StaticImageData
}

export const ALUMNI_COMPANIES: Company[] = [
  {
    name: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  },
  {
    name: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  },
  {
    name: "Amazon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  },
  {
    name: "Zomato",
    logo: Zomato,
  },
  {
    name: "TCS ION",
    logo: Ion,
  },
  {
    name: "Yamaha",
    logo: Yamaha,
  },
  {
    name: "Uber",
    logo: Uber,
  },
  {
    name: "Swiggy",
    logo: Swiggy,
  },
  {
    name: "PayPal",
    logo: PayPal,
  },
  {
    name: "ZS",
    logo: ZS,
  },
]

export interface AvatarUrl {
  imageUrl: string
  profileUrl: string
}

export const ALUMNI_AVATARS: AvatarUrl[] = [
  { imageUrl: "https://res.cloudinary.com/djqkhf152/image/upload/v1772966966/arnav_ai1rvt.jpg", profileUrl: "#" },
  { imageUrl: "https://res.cloudinary.com/djqkhf152/image/upload/v1772966966/anjali_rl3lca.jpg", profileUrl: "#" },
  { imageUrl: "https://res.cloudinary.com/djqkhf152/image/upload/v1772966945/bhumika_gufueb.jpg", profileUrl: "#" },
  { imageUrl: "https://res.cloudinary.com/djqkhf152/image/upload/v1772966946/jayant_evskhm.jpg", profileUrl: "#" },
]
