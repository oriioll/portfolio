import type TechItem from './TechItem';

/**
 * Interface class to represent a project in the projects array
 * @property {string} titleKey - The key of the title in the i18n translation file
 * @property {string} descKey - The key of the description in the i18n translation file
 * @property {string} image - The rute of the image un public/projects
 * @property {TechItem[]} stack - An array of TechItem objects representing the technologies used in the project
 * @property {string} [demoUrl] - The url of the demo of the project, if it has one
 * @property {string} githubUrl - The url of the github repository of the project
 * @property {string} status - The current status of the app (finished, active dev, dead...)
 * @author Oriol Plazas Leon
 * @since 04/03/26
 */
export default interface Project {
    titleKey: string,
    descKey: string,
    image: string,
    stack: TechItem[],
    demoUrl?: string,
    githubUrl: string,
    status: string
}