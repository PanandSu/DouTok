/* Generated by restful-react */

import React from "react";
import {
  Get,
  GetProps,
  useGet,
  UseGetProps,
  Mutate,
  MutateProps,
  useMutate,
  UseMutateProps
} from "restful-react";
export const SPEC_VERSION = "0.0.1";
/**
 * 刷视频请求消息类型
 */
export interface SvapiFeedShortVideoRequest {
  /**
   * @gotags: json:"latest_time,omitempty,string"
   */
  latestTime?: string;
  /**
   * @gotags: json:"user_id,omitempty,string"
   */
  userId?: string;
  /**
   * @gotags: json:"feed_num,omitempty,string"
   */
  feedNum?: string;
}

/**
 * 刷视频响应消息类型
 */
export interface SvapiFeedShortVideoResponse {
  meta?: SvapiMetadata;
  videos?: SvapiVideo[];
  /**
   * @gotags: json:"next_time,omitempty,string"
   */
  nextTime?: string;
}

export interface SvapiGetUserInfoResponse {
  user?: SvapiUser;
}

export interface SvapiGetVerificationCodeRequest {
  mobile?: string;
  email?: string;
}

export interface SvapiGetVerificationCodeResponse {
  /**
   * @gotags: json:"code_id,omitempty,string"
   */
  codeId?: string;
}

/**
 * 获取视频信息响应消息类型
 */
export interface SvapiGetVideoByIdResponse {
  video?: SvapiVideo;
}

/**
 * 获取当前用户的发布视频列表请求消息类型
 */
export interface SvapiListPublishedVideoRequest {
  /**
   * @gotags: json:"user_id,omitempty,string"
   */
  userId?: string;
  pagination?: SvapiPaginationRequest;
}

/**
 * 获取当前用户的发布视频列表响应消息类型
 */
export interface SvapiListPublishedVideoResponse {
  videoList?: SvapiVideo[];
  pagination?: SvapiPaginationResponse;
}

export interface SvapiLoginRequest {
  mobile?: string;
  email?: string;
  password?: string;
}

export interface SvapiLoginResponse {
  token?: string;
}

export interface SvapiMetadata {
  bizCode?: number;
  message?: string;
  domain?: string;
  reason?: string[];
}

export interface SvapiPaginationRequest {
  page?: number;
  size?: number;
  sort?: SvapiSortField[];
}

export interface SvapiPaginationResponse {
  page?: number;
  total?: number;
  count?: number;
}

/**
 * 通用小文件单次上传请求消息类型
 */
export interface SvapiPreSign4UploadRequest {
  /**
   * md5 hash
   */
  hash?: string;
  /**
   * 文件类型，默认mp4
   */
  fileType?: string;
  /**
   * 文件大小，单位byte
   *  @gotags: json:"size,omitempty,string"
   */
  size?: string;
  /**
   * 文件名
   */
  filename?: string;
}

/**
 * 通用小文件单次上传响应消息类型
 */
export interface SvapiPreSign4UploadResponse {
  /**
   * minio上传地址
   */
  url?: string;
  /**
   * 文件id
   *  @gotags: json:"file_id,omitempty,string"
   */
  fileId?: string;
}

/**
 * 预注册上传视频请求消息类型
 */
export interface SvapiPreSign4UploadVideoRequest {
  /**
   * md5 hash
   */
  hash?: string;
  /**
   * 文件类型，默认mp4
   */
  fileType?: string;
  /**
   * 文件大小，单位byte
   *  @gotags: json:"size,omitempty,string"
   */
  size?: string;
  /**
   * 文件名
   */
  filename?: string;
}

/**
 * 预注册上传视频响应消息类型
 */
export interface SvapiPreSign4UploadVideoResponse {
  /**
   * minio上传地址
   */
  url?: string;
  /**
   * 文件id
   *  @gotags: json:"file_id,omitempty,string"
   */
  fileId?: string;
}

export interface SvapiPreSignUploadPublicFileRequest {
  hash?: string;
  fileType?: string;
  /**
   * gotags: json`size,omitempty,string`
   */
  size?: string;
}

export interface SvapiPreSignUploadPublicFileResponse {
  url?: string;
  /**
   * @gotags: json:"file_id,omitempty,string"
   */
  fileId?: string;
}

export interface SvapiRegisterRequest {
  mobile?: string;
  email?: string;
  password?: string;
  /**
   * @gotags: json:"code_id,omitempty,string"
   */
  codeId?: string;
  code?: string;
}

export interface SvapiRegisterResponse {
  /**
   * @gotags: json:"user_id,omitempty,string"
   */
  userId?: string;
}

/**
 * 通用确认上传完成请求消息类型
 */
export interface SvapiReportFinishUploadRequest {
  /**
   * 文件id
   *  @gotags: json:"file_id,omitempty,string"
   */
  fileId?: string;
}

/**
 * 通用确认上传完成响应消息类型
 */
export interface SvapiReportFinishUploadResponse {
  /**
   * url
   */
  url?: string;
}

export interface SvapiReportPublicFileUploadedRequest {
  fileId?: string;
}

export interface SvapiReportPublicFileUploadedResponse {
  objectName?: string;
}

/**
 * 确认视频上传完成请求消息类型
 */
export interface SvapiReportVideoFinishUploadRequest {
  /**
   * 文件id
   *  @gotags: json:"file_id,omitempty,string"
   */
  fileId?: string;
  /**
   * 视频标题
   */
  title?: string;
  /**
   * 视频封面地址
   */
  coverUrl?: string;
  /**
   * 视频描述
   */
  description?: string;
  /**
   * 视频地址
   */
  videoUrl?: string;
}

/**
 * 确认视频上传完成响应消息类型
 */
export interface SvapiReportVideoFinishUploadResponse {
  /**
   * 视频id
   *  @gotags: json:"video_id,omitempty,string"
   */
  videoId?: string;
}

export interface SvapiSortField {
  field?: string;
  order?: number;
}

export interface SvapiUpdateUserInfoRequest {
  /**
   * @gotags: json:"user_id,omitempty,string"
   */
  userId?: string;
  name?: string;
  avatar?: string;
  backgroundImage?: string;
  signature?: string;
}

// tslint:disable-next-line:no-empty-interface
export interface SvapiUpdateUserInfoResponse {}

export interface SvapiUser {
  /**
   * @gotags: json:"id,omitempty,string"
   */
  id?: string;
  name?: string;
  avatar?: string;
  backgroundImage?: string;
  signature?: string;
  mobile?: string;
  email?: string;
  /**
   * @gotags: json:"follow_count,omitempty,string"
   */
  followCount?: string;
  /**
   * @gotags: json:"follower_count,omitempty,string"
   */
  followerCount?: string;
  /**
   * @gotags: json:"total_favorited,omitempty,string"
   */
  totalFavorited?: string;
  /**
   * @gotags: json:"work_count,omitempty,string"
   */
  workCount?: string;
  /**
   * @gotags: json:"favorite_count,omitempty,string"
   */
  favoriteCount?: string;
}

export interface SvapiVideo {
  /**
   * @gotags: json:"id,omitempty,string"
   */
  id?: string;
  author?: SvapiVideoAuthor;
  playUrl?: string;
  coverUrl?: string;
  /**
   * @gotags: json:"favorite_count,omitempty,string"
   */
  favoriteCount?: string;
  /**
   * @gotags: json:"comment_count,omitempty,string"
   */
  commentCount?: string;
  isFavorite?: boolean;
  title?: string;
}

export interface SvapiVideoAuthor {
  /**
   * @gotags: json:"id,omitempty,string"
   */
  id?: string;
  name?: string;
  avatar?: string;
  isFollowing?: boolean;
}

export interface ShortVideoCoreVideoServicePreSign4UploadCoverResponse {
  /**
   * Status code. Zero means success.
   */
  code?: number;
  /**
   * Status message. Could be displayed to user.
   */
  msg?: string;
  data?: SvapiPreSign4UploadResponse;
}

export type ShortVideoCoreVideoServicePreSign4UploadCoverProps = Omit<
  MutateProps<
    ShortVideoCoreVideoServicePreSign4UploadCoverResponse,
    unknown,
    void,
    SvapiPreSign4UploadRequest,
    void
  >,
  "path" | "verb"
>;

/**
 * 预注册上传封面
 */
export const ShortVideoCoreVideoServicePreSign4UploadCover = (
  props: ShortVideoCoreVideoServicePreSign4UploadCoverProps
) => (
  <Mutate<
    ShortVideoCoreVideoServicePreSign4UploadCoverResponse,
    unknown,
    void,
    SvapiPreSign4UploadRequest,
    void
  >
    verb="POST"
    path={`/cover/upload`}
    {...props}
  />
);

export type UseShortVideoCoreVideoServicePreSign4UploadCoverProps = Omit<
  UseMutateProps<
    ShortVideoCoreVideoServicePreSign4UploadCoverResponse,
    unknown,
    void,
    SvapiPreSign4UploadRequest,
    void
  >,
  "path" | "verb"
>;

/**
 * 预注册上传封面
 */
export const useShortVideoCoreVideoServicePreSign4UploadCover = (
  props: UseShortVideoCoreVideoServicePreSign4UploadCoverProps
) =>
  useMutate<
    ShortVideoCoreVideoServicePreSign4UploadCoverResponse,
    unknown,
    void,
    SvapiPreSign4UploadRequest,
    void
  >("POST", `/cover/upload`, props);

export interface ShortVideoCoreVideoServiceReportFinishUploadResponse {
  /**
   * Status code. Zero means success.
   */
  code?: number;
  /**
   * Status message. Could be displayed to user.
   */
  msg?: string;
  data?: SvapiReportFinishUploadResponse;
}

export interface ShortVideoCoreVideoServiceReportFinishUploadPathParams {
  /**
   * 文件id
   *  @gotags: json:"file_id,omitempty,string"
   */
  fileId: string;
}

export type ShortVideoCoreVideoServiceReportFinishUploadProps = Omit<
  MutateProps<
    ShortVideoCoreVideoServiceReportFinishUploadResponse,
    unknown,
    void,
    SvapiReportFinishUploadRequest,
    ShortVideoCoreVideoServiceReportFinishUploadPathParams
  >,
  "path" | "verb"
> &
  ShortVideoCoreVideoServiceReportFinishUploadPathParams;

/**
 * 通用确认上传完成
 */
export const ShortVideoCoreVideoServiceReportFinishUpload = ({
  fileId,
  ...props
}: ShortVideoCoreVideoServiceReportFinishUploadProps) => (
  <Mutate<
    ShortVideoCoreVideoServiceReportFinishUploadResponse,
    unknown,
    void,
    SvapiReportFinishUploadRequest,
    ShortVideoCoreVideoServiceReportFinishUploadPathParams
  >
    verb="POST"
    path={`/file/${fileId}/finish`}
    {...props}
  />
);

export type UseShortVideoCoreVideoServiceReportFinishUploadProps = Omit<
  UseMutateProps<
    ShortVideoCoreVideoServiceReportFinishUploadResponse,
    unknown,
    void,
    SvapiReportFinishUploadRequest,
    ShortVideoCoreVideoServiceReportFinishUploadPathParams
  >,
  "path" | "verb"
> &
  ShortVideoCoreVideoServiceReportFinishUploadPathParams;

/**
 * 通用确认上传完成
 */
export const useShortVideoCoreVideoServiceReportFinishUpload = ({
  fileId,
  ...props
}: UseShortVideoCoreVideoServiceReportFinishUploadProps) =>
  useMutate<
    ShortVideoCoreVideoServiceReportFinishUploadResponse,
    unknown,
    void,
    SvapiReportFinishUploadRequest,
    ShortVideoCoreVideoServiceReportFinishUploadPathParams
  >(
    "POST",
    (paramsInPath: ShortVideoCoreVideoServiceReportFinishUploadPathParams) =>
      `/file/${paramsInPath.fileId}/finish`,
    { pathParams: { fileId }, ...props }
  );

export interface UserServiceGetVerificationCodeResponse {
  /**
   * Status code. Zero means success.
   */
  code?: number;
  /**
   * Status message. Could be displayed to user.
   */
  msg?: string;
  data?: SvapiGetVerificationCodeResponse;
}

export type UserServiceGetVerificationCodeProps = Omit<
  MutateProps<
    UserServiceGetVerificationCodeResponse,
    unknown,
    void,
    SvapiGetVerificationCodeRequest,
    void
  >,
  "path" | "verb"
>;

/**
 * 获取验证码
 */
export const UserServiceGetVerificationCode = (
  props: UserServiceGetVerificationCodeProps
) => (
  <Mutate<
    UserServiceGetVerificationCodeResponse,
    unknown,
    void,
    SvapiGetVerificationCodeRequest,
    void
  >
    verb="POST"
    path={`/user/code`}
    {...props}
  />
);

export type UseUserServiceGetVerificationCodeProps = Omit<
  UseMutateProps<
    UserServiceGetVerificationCodeResponse,
    unknown,
    void,
    SvapiGetVerificationCodeRequest,
    void
  >,
  "path" | "verb"
>;

/**
 * 获取验证码
 */
export const useUserServiceGetVerificationCode = (
  props: UseUserServiceGetVerificationCodeProps
) =>
  useMutate<
    UserServiceGetVerificationCodeResponse,
    unknown,
    void,
    SvapiGetVerificationCodeRequest,
    void
  >("POST", `/user/code`, props);

export interface UserServiceGetUserInfoResponse {
  /**
   * Status code. Zero means success.
   */
  code?: number;
  /**
   * Status message. Could be displayed to user.
   */
  msg?: string;
  data?: SvapiGetUserInfoResponse;
}

export interface UserServiceGetUserInfoQueryParams {
  /**
   * @gotags: json:"user_id,omitempty,string"
   */
  userId?: string;
}

export type UserServiceGetUserInfoProps = Omit<
  GetProps<
    UserServiceGetUserInfoResponse,
    unknown,
    UserServiceGetUserInfoQueryParams,
    void
  >,
  "path"
>;

/**
 * 获取用户信息
 */
export const UserServiceGetUserInfo = (props: UserServiceGetUserInfoProps) => (
  <Get<
    UserServiceGetUserInfoResponse,
    unknown,
    UserServiceGetUserInfoQueryParams,
    void
  >
    path={`/user/info`}
    {...props}
  />
);

export type UseUserServiceGetUserInfoProps = Omit<
  UseGetProps<
    UserServiceGetUserInfoResponse,
    unknown,
    UserServiceGetUserInfoQueryParams,
    void
  >,
  "path"
>;

/**
 * 获取用户信息
 */
export const useUserServiceGetUserInfo = (
  props: UseUserServiceGetUserInfoProps
) =>
  useGet<
    UserServiceGetUserInfoResponse,
    unknown,
    UserServiceGetUserInfoQueryParams,
    void
  >(`/user/info`, props);

export interface UserServiceUpdateUserInfoResponse {
  /**
   * Status code. Zero means success.
   */
  code?: number;
  /**
   * Status message. Could be displayed to user.
   */
  msg?: string;
  data?: SvapiUpdateUserInfoResponse;
}

export type UserServiceUpdateUserInfoProps = Omit<
  MutateProps<
    UserServiceUpdateUserInfoResponse,
    unknown,
    void,
    SvapiUpdateUserInfoRequest,
    void
  >,
  "path" | "verb"
>;

/**
 * 更新用户信息
 */
export const UserServiceUpdateUserInfo = (
  props: UserServiceUpdateUserInfoProps
) => (
  <Mutate<
    UserServiceUpdateUserInfoResponse,
    unknown,
    void,
    SvapiUpdateUserInfoRequest,
    void
  >
    verb="PUT"
    path={`/user/info`}
    {...props}
  />
);

export type UseUserServiceUpdateUserInfoProps = Omit<
  UseMutateProps<
    UserServiceUpdateUserInfoResponse,
    unknown,
    void,
    SvapiUpdateUserInfoRequest,
    void
  >,
  "path" | "verb"
>;

/**
 * 更新用户信息
 */
export const useUserServiceUpdateUserInfo = (
  props: UseUserServiceUpdateUserInfoProps
) =>
  useMutate<
    UserServiceUpdateUserInfoResponse,
    unknown,
    void,
    SvapiUpdateUserInfoRequest,
    void
  >("PUT", `/user/info`, props);

export interface UserServiceLoginResponse {
  /**
   * Status code. Zero means success.
   */
  code?: number;
  /**
   * Status message. Could be displayed to user.
   */
  msg?: string;
  data?: SvapiLoginResponse;
}

export type UserServiceLoginProps = Omit<
  MutateProps<UserServiceLoginResponse, unknown, void, SvapiLoginRequest, void>,
  "path" | "verb"
>;

/**
 * 登录
 */
export const UserServiceLogin = (props: UserServiceLoginProps) => (
  <Mutate<UserServiceLoginResponse, unknown, void, SvapiLoginRequest, void>
    verb="POST"
    path={`/user/login`}
    {...props}
  />
);

export type UseUserServiceLoginProps = Omit<
  UseMutateProps<
    UserServiceLoginResponse,
    unknown,
    void,
    SvapiLoginRequest,
    void
  >,
  "path" | "verb"
>;

/**
 * 登录
 */
export const useUserServiceLogin = (props: UseUserServiceLoginProps) =>
  useMutate<UserServiceLoginResponse, unknown, void, SvapiLoginRequest, void>(
    "POST",
    `/user/login`,
    props
  );

export interface UserServiceRegisterResponse {
  /**
   * Status code. Zero means success.
   */
  code?: number;
  /**
   * Status message. Could be displayed to user.
   */
  msg?: string;
  data?: SvapiRegisterResponse;
}

export type UserServiceRegisterProps = Omit<
  MutateProps<
    UserServiceRegisterResponse,
    unknown,
    void,
    SvapiRegisterRequest,
    void
  >,
  "path" | "verb"
>;

/**
 * 注册
 */
export const UserServiceRegister = (props: UserServiceRegisterProps) => (
  <Mutate<
    UserServiceRegisterResponse,
    unknown,
    void,
    SvapiRegisterRequest,
    void
  >
    verb="POST"
    path={`/user/register`}
    {...props}
  />
);

export type UseUserServiceRegisterProps = Omit<
  UseMutateProps<
    UserServiceRegisterResponse,
    unknown,
    void,
    SvapiRegisterRequest,
    void
  >,
  "path" | "verb"
>;

/**
 * 注册
 */
export const useUserServiceRegister = (props: UseUserServiceRegisterProps) =>
  useMutate<
    UserServiceRegisterResponse,
    unknown,
    void,
    SvapiRegisterRequest,
    void
  >("POST", `/user/register`, props);

export interface ShortVideoCoreVideoServiceFeedShortVideoResponse {
  /**
   * Status code. Zero means success.
   */
  code?: number;
  /**
   * Status message. Could be displayed to user.
   */
  msg?: string;
  data?: SvapiFeedShortVideoResponse;
}

export type ShortVideoCoreVideoServiceFeedShortVideoProps = Omit<
  MutateProps<
    ShortVideoCoreVideoServiceFeedShortVideoResponse,
    unknown,
    void,
    SvapiFeedShortVideoRequest,
    void
  >,
  "path" | "verb"
>;

/**
 * 刷视频
 */
export const ShortVideoCoreVideoServiceFeedShortVideo = (
  props: ShortVideoCoreVideoServiceFeedShortVideoProps
) => (
  <Mutate<
    ShortVideoCoreVideoServiceFeedShortVideoResponse,
    unknown,
    void,
    SvapiFeedShortVideoRequest,
    void
  >
    verb="POST"
    path={`/video/feed`}
    {...props}
  />
);

export type UseShortVideoCoreVideoServiceFeedShortVideoProps = Omit<
  UseMutateProps<
    ShortVideoCoreVideoServiceFeedShortVideoResponse,
    unknown,
    void,
    SvapiFeedShortVideoRequest,
    void
  >,
  "path" | "verb"
>;

/**
 * 刷视频
 */
export const useShortVideoCoreVideoServiceFeedShortVideo = (
  props: UseShortVideoCoreVideoServiceFeedShortVideoProps
) =>
  useMutate<
    ShortVideoCoreVideoServiceFeedShortVideoResponse,
    unknown,
    void,
    SvapiFeedShortVideoRequest,
    void
  >("POST", `/video/feed`, props);

export interface ShortVideoCoreVideoServiceReportVideoFinishUploadResponse {
  /**
   * Status code. Zero means success.
   */
  code?: number;
  /**
   * Status message. Could be displayed to user.
   */
  msg?: string;
  data?: SvapiReportVideoFinishUploadResponse;
}

export type ShortVideoCoreVideoServiceReportVideoFinishUploadProps = Omit<
  MutateProps<
    ShortVideoCoreVideoServiceReportVideoFinishUploadResponse,
    unknown,
    void,
    SvapiReportVideoFinishUploadRequest,
    void
  >,
  "path" | "verb"
>;

/**
 * 确认视频上传完成
 */
export const ShortVideoCoreVideoServiceReportVideoFinishUpload = (
  props: ShortVideoCoreVideoServiceReportVideoFinishUploadProps
) => (
  <Mutate<
    ShortVideoCoreVideoServiceReportVideoFinishUploadResponse,
    unknown,
    void,
    SvapiReportVideoFinishUploadRequest,
    void
  >
    verb="POST"
    path={`/video/finish`}
    {...props}
  />
);

export type UseShortVideoCoreVideoServiceReportVideoFinishUploadProps = Omit<
  UseMutateProps<
    ShortVideoCoreVideoServiceReportVideoFinishUploadResponse,
    unknown,
    void,
    SvapiReportVideoFinishUploadRequest,
    void
  >,
  "path" | "verb"
>;

/**
 * 确认视频上传完成
 */
export const useShortVideoCoreVideoServiceReportVideoFinishUpload = (
  props: UseShortVideoCoreVideoServiceReportVideoFinishUploadProps
) =>
  useMutate<
    ShortVideoCoreVideoServiceReportVideoFinishUploadResponse,
    unknown,
    void,
    SvapiReportVideoFinishUploadRequest,
    void
  >("POST", `/video/finish`, props);

export interface ShortVideoCoreVideoServiceListPublishedVideoResponse {
  /**
   * Status code. Zero means success.
   */
  code?: number;
  /**
   * Status message. Could be displayed to user.
   */
  msg?: string;
  data?: SvapiListPublishedVideoResponse;
}

export type ShortVideoCoreVideoServiceListPublishedVideoProps = Omit<
  MutateProps<
    ShortVideoCoreVideoServiceListPublishedVideoResponse,
    unknown,
    void,
    SvapiListPublishedVideoRequest,
    void
  >,
  "path" | "verb"
>;

/**
 * 获取当前用户的发布视频列表
 */
export const ShortVideoCoreVideoServiceListPublishedVideo = (
  props: ShortVideoCoreVideoServiceListPublishedVideoProps
) => (
  <Mutate<
    ShortVideoCoreVideoServiceListPublishedVideoResponse,
    unknown,
    void,
    SvapiListPublishedVideoRequest,
    void
  >
    verb="POST"
    path={`/video/list`}
    {...props}
  />
);

export type UseShortVideoCoreVideoServiceListPublishedVideoProps = Omit<
  UseMutateProps<
    ShortVideoCoreVideoServiceListPublishedVideoResponse,
    unknown,
    void,
    SvapiListPublishedVideoRequest,
    void
  >,
  "path" | "verb"
>;

/**
 * 获取当前用户的发布视频列表
 */
export const useShortVideoCoreVideoServiceListPublishedVideo = (
  props: UseShortVideoCoreVideoServiceListPublishedVideoProps
) =>
  useMutate<
    ShortVideoCoreVideoServiceListPublishedVideoResponse,
    unknown,
    void,
    SvapiListPublishedVideoRequest,
    void
  >("POST", `/video/list`, props);

export interface ShortVideoCoreVideoServicePreSign4UploadVideoResponse {
  /**
   * Status code. Zero means success.
   */
  code?: number;
  /**
   * Status message. Could be displayed to user.
   */
  msg?: string;
  data?: SvapiPreSign4UploadVideoResponse;
}

export type ShortVideoCoreVideoServicePreSign4UploadVideoProps = Omit<
  MutateProps<
    ShortVideoCoreVideoServicePreSign4UploadVideoResponse,
    unknown,
    void,
    SvapiPreSign4UploadVideoRequest,
    void
  >,
  "path" | "verb"
>;

/**
 * 预注册上传视频
 */
export const ShortVideoCoreVideoServicePreSign4UploadVideo = (
  props: ShortVideoCoreVideoServicePreSign4UploadVideoProps
) => (
  <Mutate<
    ShortVideoCoreVideoServicePreSign4UploadVideoResponse,
    unknown,
    void,
    SvapiPreSign4UploadVideoRequest,
    void
  >
    verb="POST"
    path={`/video/upload`}
    {...props}
  />
);

export type UseShortVideoCoreVideoServicePreSign4UploadVideoProps = Omit<
  UseMutateProps<
    ShortVideoCoreVideoServicePreSign4UploadVideoResponse,
    unknown,
    void,
    SvapiPreSign4UploadVideoRequest,
    void
  >,
  "path" | "verb"
>;

/**
 * 预注册上传视频
 */
export const useShortVideoCoreVideoServicePreSign4UploadVideo = (
  props: UseShortVideoCoreVideoServicePreSign4UploadVideoProps
) =>
  useMutate<
    ShortVideoCoreVideoServicePreSign4UploadVideoResponse,
    unknown,
    void,
    SvapiPreSign4UploadVideoRequest,
    void
  >("POST", `/video/upload`, props);

export interface ShortVideoCoreVideoServiceGetVideoByIdResponse {
  /**
   * Status code. Zero means success.
   */
  code?: number;
  /**
   * Status message. Could be displayed to user.
   */
  msg?: string;
  data?: SvapiGetVideoByIdResponse;
}

export interface ShortVideoCoreVideoServiceGetVideoByIdPathParams {
  /**
   * @gotags: json:"video_id,omitempty,string"
   */
  videoId: string;
}

export type ShortVideoCoreVideoServiceGetVideoByIdProps = Omit<
  GetProps<
    ShortVideoCoreVideoServiceGetVideoByIdResponse,
    unknown,
    void,
    ShortVideoCoreVideoServiceGetVideoByIdPathParams
  >,
  "path"
> &
  ShortVideoCoreVideoServiceGetVideoByIdPathParams;

/**
 * 获取视频信息
 */
export const ShortVideoCoreVideoServiceGetVideoById = ({
  videoId,
  ...props
}: ShortVideoCoreVideoServiceGetVideoByIdProps) => (
  <Get<
    ShortVideoCoreVideoServiceGetVideoByIdResponse,
    unknown,
    void,
    ShortVideoCoreVideoServiceGetVideoByIdPathParams
  >
    path={`/video/${videoId}`}
    {...props}
  />
);

export type UseShortVideoCoreVideoServiceGetVideoByIdProps = Omit<
  UseGetProps<
    ShortVideoCoreVideoServiceGetVideoByIdResponse,
    unknown,
    void,
    ShortVideoCoreVideoServiceGetVideoByIdPathParams
  >,
  "path"
> &
  ShortVideoCoreVideoServiceGetVideoByIdPathParams;

/**
 * 获取视频信息
 */
export const useShortVideoCoreVideoServiceGetVideoById = ({
  videoId,
  ...props
}: UseShortVideoCoreVideoServiceGetVideoByIdProps) =>
  useGet<
    ShortVideoCoreVideoServiceGetVideoByIdResponse,
    unknown,
    void,
    ShortVideoCoreVideoServiceGetVideoByIdPathParams
  >(
    (paramsInPath: ShortVideoCoreVideoServiceGetVideoByIdPathParams) =>
      `/video/${paramsInPath.videoId}`,
    { pathParams: { videoId }, ...props }
  );

export interface FileServicePreSignUploadingPublicFileResponse {
  /**
   * Status code. Zero means success.
   */
  code?: number;
  /**
   * Status message. Could be displayed to user.
   */
  msg?: string;
  data?: SvapiPreSignUploadPublicFileResponse;
}

export type FileServicePreSignUploadingPublicFileProps = Omit<
  MutateProps<
    FileServicePreSignUploadingPublicFileResponse,
    unknown,
    void,
    SvapiPreSignUploadPublicFileRequest,
    void
  >,
  "path" | "verb"
>;

export const FileServicePreSignUploadingPublicFile = (
  props: FileServicePreSignUploadingPublicFileProps
) => (
  <Mutate<
    FileServicePreSignUploadingPublicFileResponse,
    unknown,
    void,
    SvapiPreSignUploadPublicFileRequest,
    void
  >
    verb="POST"
    path={`file`}
    {...props}
  />
);

export type UseFileServicePreSignUploadingPublicFileProps = Omit<
  UseMutateProps<
    FileServicePreSignUploadingPublicFileResponse,
    unknown,
    void,
    SvapiPreSignUploadPublicFileRequest,
    void
  >,
  "path" | "verb"
>;

export const useFileServicePreSignUploadingPublicFile = (
  props: UseFileServicePreSignUploadingPublicFileProps
) =>
  useMutate<
    FileServicePreSignUploadingPublicFileResponse,
    unknown,
    void,
    SvapiPreSignUploadPublicFileRequest,
    void
  >("POST", `file`, props);

export interface FileServiceReportPublicFileUploadedResponse {
  /**
   * Status code. Zero means success.
   */
  code?: number;
  /**
   * Status message. Could be displayed to user.
   */
  msg?: string;
  data?: SvapiReportPublicFileUploadedResponse;
}

export type FileServiceReportPublicFileUploadedProps = Omit<
  MutateProps<
    FileServiceReportPublicFileUploadedResponse,
    unknown,
    void,
    SvapiReportPublicFileUploadedRequest,
    void
  >,
  "path" | "verb"
>;

export const FileServiceReportPublicFileUploaded = (
  props: FileServiceReportPublicFileUploadedProps
) => (
  <Mutate<
    FileServiceReportPublicFileUploadedResponse,
    unknown,
    void,
    SvapiReportPublicFileUploadedRequest,
    void
  >
    verb="POST"
    path={`file/report`}
    {...props}
  />
);

export type UseFileServiceReportPublicFileUploadedProps = Omit<
  UseMutateProps<
    FileServiceReportPublicFileUploadedResponse,
    unknown,
    void,
    SvapiReportPublicFileUploadedRequest,
    void
  >,
  "path" | "verb"
>;

export const useFileServiceReportPublicFileUploaded = (
  props: UseFileServiceReportPublicFileUploadedProps
) =>
  useMutate<
    FileServiceReportPublicFileUploadedResponse,
    unknown,
    void,
    SvapiReportPublicFileUploadedRequest,
    void
  >("POST", `file/report`, props);
