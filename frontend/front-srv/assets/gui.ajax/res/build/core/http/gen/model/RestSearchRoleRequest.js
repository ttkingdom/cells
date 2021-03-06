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

'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _IdmRoleSingleQuery = require('./IdmRoleSingleQuery');

var _IdmRoleSingleQuery2 = _interopRequireDefault(_IdmRoleSingleQuery);

var _RestResourcePolicyQuery = require('./RestResourcePolicyQuery');

var _RestResourcePolicyQuery2 = _interopRequireDefault(_RestResourcePolicyQuery);

var _ServiceOperationType = require('./ServiceOperationType');

var _ServiceOperationType2 = _interopRequireDefault(_ServiceOperationType);

/**
* The RestSearchRoleRequest model module.
* @module model/RestSearchRoleRequest
* @version 1.0
*/

var RestSearchRoleRequest = (function () {
    /**
    * Constructs a new <code>RestSearchRoleRequest</code>.
    * @alias module:model/RestSearchRoleRequest
    * @class
    */

    function RestSearchRoleRequest() {
        _classCallCheck(this, RestSearchRoleRequest);

        this.Queries = undefined;
        this.ResourcePolicyQuery = undefined;
        this.Offset = undefined;
        this.Limit = undefined;
        this.GroupBy = undefined;
        this.CountOnly = undefined;
        this.Operation = undefined;
    }

    /**
    * Constructs a <code>RestSearchRoleRequest</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/RestSearchRoleRequest} obj Optional instance to populate.
    * @return {module:model/RestSearchRoleRequest} The populated <code>RestSearchRoleRequest</code> instance.
    */

    RestSearchRoleRequest.constructFromObject = function constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RestSearchRoleRequest();

            if (data.hasOwnProperty('Queries')) {
                obj['Queries'] = _ApiClient2['default'].convertToType(data['Queries'], [_IdmRoleSingleQuery2['default']]);
            }
            if (data.hasOwnProperty('ResourcePolicyQuery')) {
                obj['ResourcePolicyQuery'] = _RestResourcePolicyQuery2['default'].constructFromObject(data['ResourcePolicyQuery']);
            }
            if (data.hasOwnProperty('Offset')) {
                obj['Offset'] = _ApiClient2['default'].convertToType(data['Offset'], 'String');
            }
            if (data.hasOwnProperty('Limit')) {
                obj['Limit'] = _ApiClient2['default'].convertToType(data['Limit'], 'String');
            }
            if (data.hasOwnProperty('GroupBy')) {
                obj['GroupBy'] = _ApiClient2['default'].convertToType(data['GroupBy'], 'Number');
            }
            if (data.hasOwnProperty('CountOnly')) {
                obj['CountOnly'] = _ApiClient2['default'].convertToType(data['CountOnly'], 'Boolean');
            }
            if (data.hasOwnProperty('Operation')) {
                obj['Operation'] = _ServiceOperationType2['default'].constructFromObject(data['Operation']);
            }
        }
        return obj;
    };

    /**
    * @member {Array.<module:model/IdmRoleSingleQuery>} Queries
    */
    return RestSearchRoleRequest;
})();

exports['default'] = RestSearchRoleRequest;
module.exports = exports['default'];

/**
* @member {module:model/RestResourcePolicyQuery} ResourcePolicyQuery
*/

/**
* @member {String} Offset
*/

/**
* @member {String} Limit
*/

/**
* @member {Number} GroupBy
*/

/**
* @member {Boolean} CountOnly
*/

/**
* @member {module:model/ServiceOperationType} Operation
*/
