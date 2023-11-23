"use client";

import { Category } from "@prisma/client";
import {FcEngineering, FcMultipleDevices, FcMusic, FcSalesPerformance, } from "react-icons/fc"
import { SlChemistry } from "react-icons/sl";
import { FaMountainSun, FaSunPlantWilt } from "react-icons/fa6";
import { GiGreatPyramid, GiHumanPyramid } from "react-icons/gi";
import { MdDataExploration, MdPsychology } from "react-icons/md";
import { MdOutlineComputer } from "react-icons/md";
import { TbMathIntegrals } from "react-icons/tb";
import {IconType} from "react-icons"
import { CaategoryItem } from "./category-item";


interface CategoriesProps {
    items: Category[];
}

const iconMap: Record<Category["name"], IconType> = {
    "Computer Science":   FcMultipleDevices,
    "Physics": FcEngineering,
    "Chemistry": SlChemistry,
    "Sociology": MdPsychology,
    "Pure Mathematics": TbMathIntegrals,
    "Biology":  FaSunPlantWilt,
    "Economics": MdDataExploration,
    "Music": FcMusic,
    "Geography": FaMountainSun,
    "Business": FcSalesPerformance,
    "History": GiGreatPyramid
}

export const Categories = ({
    items
}: CategoriesProps) => {
    
    return (
        <div className="flex items-center gap-x-2 overflow-x-auto pb-2">
            {items.map((item) => (
                <CaategoryItem
                    key={item.id}
                    label={item.name}
                    icon={iconMap[item.name]}
                    value={item.id}
                />
            ))}
        </div>
    )
}