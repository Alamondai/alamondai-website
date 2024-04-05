// Icons
import { CiLink } from 'react-icons/ci';
import {
  FaReact,
  FaVuejs,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiMysql,
  SiTypescript,
  SiFlutter,
  SiDart,
  SiFirebase,
  SiExpress,
  SiShopify
} from "react-icons/si";

export const showIcons = (icon: string) => {
  if (icon === "reactjs") {
    return <FaReact className="text-3xl text-[#149ECA]" />
  } else if (icon === "vue.js") {
    return <FaVuejs className="text-3xl text-[#42B883]" />
  } else if (icon === "nodejs") {
    return <FaNodeJs className="text-3xl text-green-700" />
  } else if (icon == "ts") {
    return <SiTypescript className="text-3xl text-[#3178C6]" />
  } else if (icon == "tailwindcss") {
    return <SiTailwindcss className="text-3xl text-[#38BDF8]" />
  } else if (icon == "expressjs") {
    return <SiExpress className="text-3xl text-green-700" />
  } else if (icon == "flutter") {
    return <SiFlutter className="text-3xl text-[#0468D7]" />
  } else if (icon == "dart") {
    return <SiDart className="text-3xl text-[#03589B]" />
  } else if (icon == "firebase") {
    return <SiFirebase className="text-3xl text-[#FFCC32]" />
  } else if (icon == 'shopify') {
    return <SiShopify className="text-3xl text-[#7AB55C]" />
  }

}
