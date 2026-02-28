//Import the type of the tech item
import type { TechCategory } from "./TechCategory";

export default interface TechItem {
    category: TechCategory, //The category of the item, either frontend, backend or tools
    name: string, //The name of the technology or lang
    icon: string, //The rute of the svg icon un public/icons
    learning: boolean //If true, the item will be shown as currently learning, if false, it will be shown as learned  
}