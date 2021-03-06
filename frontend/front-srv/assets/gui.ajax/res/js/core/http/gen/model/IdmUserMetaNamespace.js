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
import ServiceResourcePolicy from './ServiceResourcePolicy';





/**
* The IdmUserMetaNamespace model module.
* @module model/IdmUserMetaNamespace
* @version 1.0
*/
export default class IdmUserMetaNamespace {
    /**
    * Constructs a new <code>IdmUserMetaNamespace</code>.
    * @alias module:model/IdmUserMetaNamespace
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>IdmUserMetaNamespace</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/IdmUserMetaNamespace} obj Optional instance to populate.
    * @return {module:model/IdmUserMetaNamespace} The populated <code>IdmUserMetaNamespace</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IdmUserMetaNamespace();

            
            
            

            if (data.hasOwnProperty('Namespace')) {
                obj['Namespace'] = ApiClient.convertToType(data['Namespace'], 'String');
            }
            if (data.hasOwnProperty('Label')) {
                obj['Label'] = ApiClient.convertToType(data['Label'], 'String');
            }
            if (data.hasOwnProperty('Order')) {
                obj['Order'] = ApiClient.convertToType(data['Order'], 'Number');
            }
            if (data.hasOwnProperty('Indexable')) {
                obj['Indexable'] = ApiClient.convertToType(data['Indexable'], 'Boolean');
            }
            if (data.hasOwnProperty('JsonDefinition')) {
                obj['JsonDefinition'] = ApiClient.convertToType(data['JsonDefinition'], 'String');
            }
            if (data.hasOwnProperty('Policies')) {
                obj['Policies'] = ApiClient.convertToType(data['Policies'], [ServiceResourcePolicy]);
            }
        }
        return obj;
    }

    /**
    * @member {String} Namespace
    */
    Namespace = undefined;
    /**
    * @member {String} Label
    */
    Label = undefined;
    /**
    * @member {Number} Order
    */
    Order = undefined;
    /**
    * @member {Boolean} Indexable
    */
    Indexable = undefined;
    /**
    * @member {String} JsonDefinition
    */
    JsonDefinition = undefined;
    /**
    * @member {Array.<module:model/ServiceResourcePolicy>} Policies
    */
    Policies = undefined;








}


