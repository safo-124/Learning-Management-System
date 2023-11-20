"use client";

import { Category } from "@prisma/client";
import {FcEngineering, FcMultipleDevices, FcMusic, FcSalesPerformance, } from "react-icons/fc"
import { SlChemistry } from "react-icons/sl";
import { FaSunPlantWilt } from "react-icons/fa6";
import { GiHumanPyramid } from "react-icons/gi";
import { MdDataExploration } from "react-icons/md";
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
    "Sociology": GiHumanPyramid,
    "Pure Mathematics": TbMathIntegrals,
    "Biology":  FaSunPlantWilt,
    "Economics": FcSalesPerformance,
    "Music": FcMusic
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