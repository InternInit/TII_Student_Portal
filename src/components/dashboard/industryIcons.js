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
  generalbusiness: <TiBriefcase size={standardSize} />,
  accounting: <RiBankLine size={standardSize} />,
  consulting: <RiArtboardLine size={standardSize} />,
  finance: <RiBankLine size={standardSize} />,
  hospitalitytourism: <RiHotelLine size={standardSize} />,
  insurance: <RiHeartsLine size={standardSize} />,
  marketing: <VscMegaphone size={standardSize} />,
  operations: <RiPieChart2Line size={standardSize} />,
  realestate: <RiHome5Line size={standardSize} />,
  computerscience: <HiOutlineDesktopComputer size={standardSize} />,
  engineering: <VscGear size={standardSize} />,
  scienceresearch: <RiTestTubeLine size={standardSize} />,
  medical: <RiHospitalLine size={standardSize} />,
  pharmaceutical: <RiMedicineBottleLine size={standardSize} />,
  art: <RiBrushLine size={standardSize} />,
  fashion: <RiOpenArmLine size={standardSize} />,
  graphicdesign: <RiPencilRuler2Line size={standardSize} />,
  journalism: <RiNewspaperLine size={standardSize} />,
  media: <RiCamera3Line size={standardSize} />,
  legal: <VscLaw size={standardSize} />,
  nonprofit: <RiHandHeartLine size={standardSize} />,
  politics: <RiGovernmentLine size={standardSize} />,
  education: <FaGraduationCap size={standardSize} />,
  vocational: <RiHammerLine size={standardSize} />,
  research: <RiFlaskLine size={standardSize} />,
};
