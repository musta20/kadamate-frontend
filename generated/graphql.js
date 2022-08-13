"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.useAddServicesMutationMutation = exports.AddServicesMutationDocument = void 0;
var graphql_tag_1 = require("graphql-tag");
var Urql = require("urql");
exports.AddServicesMutationDocument = (0, graphql_tag_1["default"])(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    mutation addServicesMutation($serviceIput: InputServices!) {\n  addServices(serviceIput: $serviceIput) {\n    _id\n    Title\n    Description\n    Requirement\n    NumberOf_Request_Done\n    user_id\n    is_des_req\n    img_id\n    cat_id\n    createdAt\n  }\n}\n    "], ["\n    mutation addServicesMutation($serviceIput: InputServices!) {\n  addServices(serviceIput: $serviceIput) {\n    _id\n    Title\n    Description\n    Requirement\n    NumberOf_Request_Done\n    user_id\n    is_des_req\n    img_id\n    cat_id\n    createdAt\n  }\n}\n    "])));
function useAddServicesMutationMutation() {
    return Urql.useMutation(exports.AddServicesMutationDocument);
}
exports.useAddServicesMutationMutation = useAddServicesMutationMutation;
;
var templateObject_1;
