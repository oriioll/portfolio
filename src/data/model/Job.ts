/**
 * Interface class to define every job object
 * @property {string} company - The name of the company 
 * @property {string} role - The role of the job
 * @property {string} desc - A short description of the job
 * @property {Date} hireDate - The date of hiring
 * @property {Date} endDate - The date of ending the job
 * @author Oriol Plazas Leon
 * @since 03/03/26
 */
export default interface Job {
    company: string;
    role: string;
    desc: string;
    hireDate: Date;
    endDate: Date;
}