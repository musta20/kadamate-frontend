"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.useUpdateUserMutation = exports.UpdateUserDocument = exports.useProfileQuery = exports.ProfileDocument = exports.useAllOrderQuery = exports.AllOrderDocument = exports.useAllCompanyOrdersQuery = exports.AllCompanyOrdersDocument = exports.useAddServicesMutationMutation = exports.AddServicesMutationDocument = void 0;
var graphql_tag_1 = require("graphql-tag");
var Urql = require("urql");
exports.AddServicesMutationDocument = (0, graphql_tag_1["default"])(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    mutation addServicesMutation($serviceIput: InputServices!) {\n  addServices(serviceIput: $serviceIput) {\n    _id\n    Title\n    Description\n    Requirement\n    NumberOf_Request_Done\n    user_id\n    is_des_req\n    img_id\n    cat_id\n    createdAt\n  }\n}\n    "], ["\n    mutation addServicesMutation($serviceIput: InputServices!) {\n  addServices(serviceIput: $serviceIput) {\n    _id\n    Title\n    Description\n    Requirement\n    NumberOf_Request_Done\n    user_id\n    is_des_req\n    img_id\n    cat_id\n    createdAt\n  }\n}\n    "])));
function useAddServicesMutationMutation() {
    return Urql.useMutation(exports.AddServicesMutationDocument);
}
exports.useAddServicesMutationMutation = useAddServicesMutationMutation;
;
exports.AllCompanyOrdersDocument = (0, graphql_tag_1["default"])(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    query AllCompanyOrders {\n  AllCompanyOrders {\n    _id\n    Service_id\n    Request_des\n    User_id\n    combany_id\n    isDone\n    done_msg\n    done_img\n    is_viewed\n    createdAt\n  }\n}\n    "], ["\n    query AllCompanyOrders {\n  AllCompanyOrders {\n    _id\n    Service_id\n    Request_des\n    User_id\n    combany_id\n    isDone\n    done_msg\n    done_img\n    is_viewed\n    createdAt\n  }\n}\n    "])));
function useAllCompanyOrdersQuery(options) {
    return Urql.useQuery(__assign({ query: exports.AllCompanyOrdersDocument }, options));
}
exports.useAllCompanyOrdersQuery = useAllCompanyOrdersQuery;
;
exports.AllOrderDocument = (0, graphql_tag_1["default"])(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    query AllOrder {\n  AllOrder {\n    _id\n    Service_id\n    Request_des\n    User_id\n    combany_id\n    isDone\n    done_msg\n    done_img\n    is_viewed\n    createdAt\n  }\n}\n    "], ["\n    query AllOrder {\n  AllOrder {\n    _id\n    Service_id\n    Request_des\n    User_id\n    combany_id\n    isDone\n    done_msg\n    done_img\n    is_viewed\n    createdAt\n  }\n}\n    "])));
function useAllOrderQuery(options) {
    return Urql.useQuery(__assign({ query: exports.AllOrderDocument }, options));
}
exports.useAllOrderQuery = useAllOrderQuery;
;
exports.ProfileDocument = (0, graphql_tag_1["default"])(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    query Profile {\n  Profile {\n    _id\n    name\n    email\n    des\n    phone\n    username\n    user_type\n    password\n    img_id\n    createdAt\n  }\n}\n    "], ["\n    query Profile {\n  Profile {\n    _id\n    name\n    email\n    des\n    phone\n    username\n    user_type\n    password\n    img_id\n    createdAt\n  }\n}\n    "])));
function useProfileQuery(options) {
    return Urql.useQuery(__assign({ query: exports.ProfileDocument }, options));
}
exports.useProfileQuery = useProfileQuery;
;
exports.UpdateUserDocument = (0, graphql_tag_1["default"])(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    mutation UpdateUser($userInput: InputUsersCustmer!) {\n  updateUser(UserInput: $userInput) {\n    name\n    email\n    des\n    phone\n    username\n    user_type\n    password\n    img_id\n    createdAt\n  }\n}\n    "], ["\n    mutation UpdateUser($userInput: InputUsersCustmer!) {\n  updateUser(UserInput: $userInput) {\n    name\n    email\n    des\n    phone\n    username\n    user_type\n    password\n    img_id\n    createdAt\n  }\n}\n    "])));
function useUpdateUserMutation() {
    return Urql.useMutation(exports.UpdateUserDocument);
}
exports.useUpdateUserMutation = useUpdateUserMutation;
;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
