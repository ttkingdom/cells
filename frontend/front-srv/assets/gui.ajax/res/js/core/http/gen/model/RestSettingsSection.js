/**
 * Pydio Cells Rest API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */


import ApiClient from '../ApiClient';
import RestSettingsEntry from './RestSettingsEntry';





/**
* The RestSettingsSection model module.
* @module model/RestSettingsSection
* @version 1.0
*/
export default class RestSettingsSection {
    /**
    * Constructs a new <code>RestSettingsSection</code>.
    * @alias module:model/RestSettingsSection
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>RestSettingsSection</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/RestSettingsSection} obj Optional instance to populate.
    * @return {module:model/RestSettingsSection} The populated <code>RestSettingsSection</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RestSettingsSection();

            
            
            

            if (data.hasOwnProperty('Key')) {
                obj['Key'] = ApiClient.convertToType(data['Key'], 'String');
            }
            if (data.hasOwnProperty('Label')) {
                obj['Label'] = ApiClient.convertToType(data['Label'], 'String');
            }
            if (data.hasOwnProperty('Description')) {
                obj['Description'] = ApiClient.convertToType(data['Description'], 'String');
            }
            if (data.hasOwnProperty('Children')) {
                obj['Children'] = ApiClient.convertToType(data['Children'], [RestSettingsEntry]);
            }
        }
        return obj;
    }

    /**
    * @member {String} Key
    */
    Key = undefined;
    /**
    * @member {String} Label
    */
    Label = undefined;
    /**
    * @member {String} Description
    */
    Description = undefined;
    /**
    * @member {Array.<module:model/RestSettingsEntry>} Children
    */
    Children = undefined;








}


