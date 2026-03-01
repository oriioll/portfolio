//Import the type of the tech item
import type { TechCategory } from "./TechCategory";

/**
 * Interface class to represent a technology item in the tech array
 * @property {TechCategory} category - The category of the item, either frontend, backend or tools
 * @property {string} name - The name of the technology or lang
 * @property {string} icon - The rute of the svg icon un public/icons
 * @property {boolean} learning - If true, the item will be shown as currently learning, if false, it will be shown as learned  
 */
export default interface TechItem {
    category: TechCategory, //The category of the item, either frontend, backend or tools
    name: string, //The name of the technology or lang
    icon: string, //The rute of the svg icon un public/icons
    learning: boolean //If true, the item will be shown as currently learning, if false, it will be shown as learned  
}