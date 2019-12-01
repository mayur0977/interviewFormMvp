/**
 * @author:Mayur Patel
 * @description: model file for the interview form module
 */


/**
 * interview model
 */
export class Interview {

    public id: number;

    public firstname: string;

    public lastname: string;

    public address: string;

    public email: string;

    public contact: string;

    public fileResume: Blob |null

}