import React from "react";
import { TiBriefcase } from "react-icons/ti";
import {
  RiCamera3Line,
  RiBankLine,
  RiBrushLine,
  RiArtboardLine,
  RiFlaskLine,
  RiGovernmentLine,
  RiHotelLine,
  RiHeartsLine,
  RiHammerLine,
  RiHandHeartLine,
  RiHome5Line,
  RiHospitalLine,
  RiMedicineBottleLine,
  RiNewspaperLine,
  RiOpenArmLine,
  RiPieChart2Line,
  RiPencilRuler2Line,
  RiTestTubeLine,
} from "react-icons/ri";
import { VscMegaphone, VscGear, VscLaw } from "react-icons/vsc";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { FaGraduationCap } from "react-icons/fa";

const standardSize = 32;

export const industryIcons = {
  generalbusiness: <TiBriefcase className="industry-icon" size={standardSize} />,
  accounting: <RiBankLine className="industry-icon" size={standardSize} />,
  consulting: <RiArtboardLine className="industry-icon" size={standardSize} />,
  finance: <RiBankLine className="industry-icon" size={standardSize} />,
  hospitalitytourism: <RiHotelLine className="industry-icon" size={standardSize} />,
  insurance: <RiHeartsLine className="industry-icon" size={standardSize} />,
  marketing: <VscMegaphone className="industry-icon" size={standardSize} />,
  operations: <RiPieChart2Line className="industry-icon" size={standardSize} />,
  realestate: <RiHome5Line className="industry-icon" size={standardSize} />,
  computerscience: <HiOutlineDesktopComputer className="industry-icon" size={standardSize} />,
  engineering: <VscGear className="industry-icon" size={standardSize} />,
  scienceresearch: <RiTestTubeLine className="industry-icon" size={standardSize} />,
  medical: <RiHospitalLine className="industry-icon" size={standardSize} />,
  pharmaceutical: <RiMedicineBottleLine className="industry-icon" size={standardSize} />,
  art: <RiBrushLine className="industry-icon" size={standardSize} />,
  fashion: <RiOpenArmLine className="industry-icon" size={standardSize} />,
  graphicdesign: <RiPencilRuler2Line className="industry-icon" size={standardSize} />,
  journalism: <RiNewspaperLine className="industry-icon" size={standardSize} />,
  media: <RiCamera3Line className="industry-icon" size={standardSize} />,
  legal: <VscLaw className="industry-icon" size={standardSize} />,
  nonprofit: <RiHandHeartLine className="industry-icon" size={standardSize} />,
  politics: <RiGovernmentLine className="industry-icon" size={standardSize} />,
  education: <FaGraduationCap className="industry-icon" size={standardSize} />,
  vocational: <RiHammerLine className="industry-icon" size={standardSize} />,
  research: <RiFlaskLine className="industry-icon" size={standardSize} />,
};
