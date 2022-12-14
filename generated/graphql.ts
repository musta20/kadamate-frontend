import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type Categories = {
  __typename?: 'Categories';
  Categories_Title: Scalars['String'];
  Parent_Categories: Scalars['String'];
  _id: Scalars['String'];
  createdAt: Scalars['DateTime'];
};

export type Follows = {
  __typename?: 'Follows';
  User_id: Scalars['String'];
  _id: Scalars['String'];
  combany_id: Scalars['String'];
  createdAt: Scalars['DateTime'];
};

export type InputImgOrders = {
  combany_id: Scalars['String'];
  img_id: Scalars['String'];
  req_id: Scalars['String'];
  user_id: Scalars['String'];
};

export type InputMessages = {
  Messages: Scalars['String'];
  Order_id: Scalars['String'];
  Sender_id: Scalars['String'];
  User_id: Scalars['String'];
  isDone: Scalars['Float'];
  is_viewed: Scalars['Float'];
  m_type: Scalars['Float'];
};

export type InputOrders = {
  Request_des: Scalars['String'];
  Service_id: Scalars['String'];
  User_id: Scalars['String'];
  combany_id: Scalars['String'];
  done_img: Scalars['String'];
  done_msg: Scalars['String'];
  isDone: Scalars['Float'];
  is_viewed: Scalars['Float'];
};

export type InputRequirementUploaders = {
  Service_id: Scalars['String'];
  Title_upload: Scalars['String'];
  is_required: Scalars['Boolean'];
};

export type InputServices = {
  Description: Scalars['String'];
  NumberOf_Request_Done: Scalars['Float'];
  Requirement: Scalars['String'];
  Title: Scalars['String'];
  cat_id: Scalars['String'];
  img_id: Scalars['String'];
  is_des_req: Scalars['Float'];
  user_id: Scalars['String'];
};

export type InputUsers = {
  des: Scalars['String'];
  email: Scalars['String'];
  img_id: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
  phone: Scalars['String'];
  user_type: Scalars['Float'];
  username: Scalars['String'];
};

export type InputUsersCustmer = {
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
  phone: Scalars['String'];
};

export type Messages = {
  __typename?: 'Messages';
  Messages: Scalars['String'];
  Order_id: Scalars['String'];
  Sender_id: Scalars['String'];
  User_id: Scalars['String'];
  _id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  isDone: Scalars['Float'];
  is_viewed: Scalars['Float'];
  m_type: Scalars['Float'];
};

export type Mutation = {
  __typename?: 'Mutation';
  AddRequirementUploaders: RequirementUploaders;
  AllMessagesByOrderId: Array<Messages>;
  CloseOrder: Scalars['Boolean'];
  DeleteMessages: Scalars['Boolean'];
  Follows: Scalars['Boolean'];
  RegisterUser: Users;
  RemoveFile: UploadedFiles;
  SendMessages: Scalars['Boolean'];
  addOrder: Orders;
  addOrderImg: OrderImg;
  addServices: Services;
  deleteOrderImg: Scalars['Boolean'];
  deleteServices: Scalars['Boolean'];
  updateServices: Services;
  updateUser?: Maybe<Users>;
};


export type MutationAddRequirementUploadersArgs = {
  Ru: InputRequirementUploaders;
};


export type MutationAllMessagesByOrderIdArgs = {
  OrderId: Scalars['String'];
};


export type MutationCloseOrderArgs = {
  OrderId: Scalars['String'];
};


export type MutationDeleteMessagesArgs = {
  messageID: Scalars['String'];
};


export type MutationFollowsArgs = {
  CombanyId: Scalars['String'];
};


export type MutationRegisterUserArgs = {
  userInput: InputUsers;
};


export type MutationRemoveFileArgs = {
  img_id: Scalars['String'];
};


export type MutationSendMessagesArgs = {
  messageInput: InputMessages;
};


export type MutationAddOrderArgs = {
  orderInput: InputOrders;
};


export type MutationAddOrderImgArgs = {
  imgInput: InputImgOrders;
};


export type MutationAddServicesArgs = {
  serviceIput: InputServices;
};


export type MutationDeleteOrderImgArgs = {
  imgId: Scalars['String'];
};


export type MutationDeleteServicesArgs = {
  serviceId: Scalars['String'];
};


export type MutationUpdateServicesArgs = {
  id: Scalars['String'];
  serviceIput: InputServices;
};


export type MutationUpdateUserArgs = {
  UserInput: InputUsersCustmer;
};

export type OrderImg = {
  __typename?: 'OrderImg';
  Order_id: Scalars['String'];
  _id: Scalars['String'];
  combany_id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  img_id: Scalars['String'];
  user_id: Scalars['String'];
};

export type Orders = {
  __typename?: 'Orders';
  Request_des: Scalars['String'];
  Service_id: Scalars['String'];
  User_id: Scalars['String'];
  _id: Scalars['String'];
  combany_id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  done_img: Scalars['String'];
  done_msg: Scalars['String'];
  isDone: Scalars['Float'];
  is_viewed: Scalars['Float'];
};

export type Query = {
  __typename?: 'Query';
  AllCategories: Array<Categories>;
  AllCompanyOrders: Array<Orders>;
  AllFollows: Array<Follows>;
  AllMessages: Array<Messages>;
  AllOrder: Array<Orders>;
  AllRequirementUploaders: Array<RequirementUploaders>;
  AllServices: Array<Services>;
  AllServicesMy: Array<Services>;
  AllUploadedFilesMy: Array<UploadedFiles>;
  Profile?: Maybe<Users>;
  User?: Maybe<Users>;
  getAllOrderImgByAndCompanyOrderId: Array<OrderImg>;
  getAllOrderImgByOrderId: Array<OrderImg>;
  getCategoriesById?: Maybe<Categories>;
  getOrderByid: Orders;
};


export type QueryAllRequirementUploadersArgs = {
  ServiceId: Scalars['String'];
};


export type QueryUserArgs = {
  id: Scalars['String'];
};


export type QueryGetAllOrderImgByAndCompanyOrderIdArgs = {
  OrderId: Scalars['String'];
};


export type QueryGetAllOrderImgByOrderIdArgs = {
  OrderId: Scalars['String'];
};


export type QueryGetCategoriesByIdArgs = {
  id: Scalars['String'];
};


export type QueryGetOrderByidArgs = {
  OrderId: Scalars['String'];
};

export type RequirementUploaders = {
  __typename?: 'RequirementUploaders';
  Service_id: Scalars['String'];
  Title_upload: Scalars['String'];
  _id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  is_required: Scalars['Boolean'];
};

export type Services = {
  __typename?: 'Services';
  Description: Scalars['String'];
  NumberOf_Request_Done: Scalars['Float'];
  Requirement: Scalars['String'];
  Title: Scalars['String'];
  _id: Scalars['String'];
  cat_id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  img_id: Scalars['String'];
  is_des_req: Scalars['Float'];
  user_id: Scalars['String'];
};

export type UploadedFiles = {
  __typename?: 'UploadedFiles';
  File_name: Scalars['String'];
  Request_id: Scalars['String'];
  _id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  ext: Scalars['String'];
  is_public: Scalars['Boolean'];
  user_id: Scalars['String'];
};

export type Users = {
  __typename?: 'Users';
  _id: Scalars['String'];
  access_token: Scalars['String'];
  createdAt: Scalars['DateTime'];
  des: Scalars['String'];
  email: Scalars['String'];
  img_id: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
  phone: Scalars['String'];
  user_type: Scalars['Float'];
  username: Scalars['String'];
};

export type AddServicesMutationMutationVariables = Exact<{
  serviceIput: InputServices;
}>;


export type AddServicesMutationMutation = { __typename?: 'Mutation', addServices: { __typename?: 'Services', _id: string, Title: string, Description: string, Requirement: string, NumberOf_Request_Done: number, user_id: string, is_des_req: number, img_id: string, cat_id: string, createdAt: any } };

export type AllCompanyOrdersQueryVariables = Exact<{ [key: string]: never; }>;


export type AllCompanyOrdersQuery = { __typename?: 'Query', AllCompanyOrders: Array<{ __typename?: 'Orders', _id: string, Service_id: string, Request_des: string, User_id: string, combany_id: string, isDone: number, done_msg: string, done_img: string, is_viewed: number, createdAt: any }> };

export type AllOrderQueryVariables = Exact<{ [key: string]: never; }>;


export type AllOrderQuery = { __typename?: 'Query', AllOrder: Array<{ __typename?: 'Orders', _id: string, Service_id: string, Request_des: string, User_id: string, combany_id: string, isDone: number, done_msg: string, done_img: string, is_viewed: number, createdAt: any }> };

export type ProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type ProfileQuery = { __typename?: 'Query', Profile?: { __typename?: 'Users', _id: string, name: string, email: string, des: string, phone: string, username: string, user_type: number, password: string, img_id: string, createdAt: any } | null };

export type UpdateUserMutationVariables = Exact<{
  userInput: InputUsersCustmer;
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser?: { __typename?: 'Users', name: string, email: string, des: string, phone: string, username: string, user_type: number, password: string, img_id: string, createdAt: any } | null };


export const AddServicesMutationDocument = gql`
    mutation addServicesMutation($serviceIput: InputServices!) {
  addServices(serviceIput: $serviceIput) {
    _id
    Title
    Description
    Requirement
    NumberOf_Request_Done
    user_id
    is_des_req
    img_id
    cat_id
    createdAt
  }
}
    `;

export function useAddServicesMutationMutation() {
  return Urql.useMutation<AddServicesMutationMutation, AddServicesMutationMutationVariables>(AddServicesMutationDocument);
};
export const AllCompanyOrdersDocument = gql`
    query AllCompanyOrders {
  AllCompanyOrders {
    _id
    Service_id
    Request_des
    User_id
    combany_id
    isDone
    done_msg
    done_img
    is_viewed
    createdAt
  }
}
    `;

export function useAllCompanyOrdersQuery(options?: Omit<Urql.UseQueryArgs<AllCompanyOrdersQueryVariables>, 'query'>) {
  return Urql.useQuery<AllCompanyOrdersQuery, AllCompanyOrdersQueryVariables>({ query: AllCompanyOrdersDocument, ...options });
};
export const AllOrderDocument = gql`
    query AllOrder {
  AllOrder {
    _id
    Service_id
    Request_des
    User_id
    combany_id
    isDone
    done_msg
    done_img
    is_viewed
    createdAt
  }
}
    `;

export function useAllOrderQuery(options?: Omit<Urql.UseQueryArgs<AllOrderQueryVariables>, 'query'>) {
  return Urql.useQuery<AllOrderQuery, AllOrderQueryVariables>({ query: AllOrderDocument, ...options });
};
export const ProfileDocument = gql`
    query Profile {
  Profile {
    _id
    name
    email
    des
    phone
    username
    user_type
    password
    img_id
    createdAt
  }
}
    `;

export function useProfileQuery(options?: Omit<Urql.UseQueryArgs<ProfileQueryVariables>, 'query'>) {
  return Urql.useQuery<ProfileQuery, ProfileQueryVariables>({ query: ProfileDocument, ...options });
};
export const UpdateUserDocument = gql`
    mutation UpdateUser($userInput: InputUsersCustmer!) {
  updateUser(UserInput: $userInput) {
    name
    email
    des
    phone
    username
    user_type
    password
    img_id
    createdAt
  }
}
    `;

export function useUpdateUserMutation() {
  return Urql.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument);
};