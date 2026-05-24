import { RequestDocument } from "graphql-request";
import { DocumentNode } from "graphql";
import { TypedDocumentNode } from "@graphql-typed-document-node/core";

//#region src/generated/graphql.d.ts
type Maybe<T> = T | null;
type InputMaybe<T> = Maybe<T>;
type Exact<T extends {
  [key: string]: unknown;
}> = { [K in keyof T]: T[K] };
type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
type MakeEmpty<T extends {
  [key: string]: unknown;
}, K extends keyof T> = { [_ in K]?: never };
type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
type Scalars = {
  ID: {
    input: string;
    output: string;
  };
  String: {
    input: string;
    output: string;
  };
  Boolean: {
    input: boolean;
    output: boolean;
  };
  Int: {
    input: number;
    output: number;
  };
  Float: {
    input: number;
    output: number;
  };
  DateTime: {
    input: string;
    output: string;
  };
  Emoji: {
    input: string;
    output: string;
  };
  JSON: {
    input: unknown;
    output: unknown;
  };
  Upload: {
    input: File | Blob | string;
    output: File | Blob | string;
  };
};
type Account = {
  __typename?: 'Account';
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lastLogin?: Maybe<Scalars['DateTime']['output']>;
  status: Status;
  username: Scalars['String']['output'];
};
type AspectRatio = {
  __typename?: 'AspectRatio';
  denominator: Scalars['Int']['output'];
  numerator: Scalars['Int']['output'];
};
type Attachment = {
  __typename?: 'Attachment';
  embeddedCollection?: Maybe<PostCollection>;
  embeddedPost?: Maybe<Post>;
  embeddedProfile?: Maybe<Profile>;
  linkPreview?: Maybe<LinkPreview>;
  media?: Maybe<MediaMetadata>;
  type: AttachmentType;
};
type AttachmentId = {
  __typename?: 'AttachmentID';
  embeddedCollectionId?: Maybe<Scalars['ID']['output']>;
  embeddedPostId?: Maybe<Scalars['ID']['output']>;
  embeddedProfileId?: Maybe<Scalars['ID']['output']>;
  linkUrl?: Maybe<Scalars['String']['output']>;
  mediaId?: Maybe<Scalars['ID']['output']>;
  type: AttachmentType;
};
type AttachmentType = 'COLLECTION' | 'LINK' | 'MEDIA' | 'POST' | 'PROFILE';
type BlockMode = 'BIODIRECTIONAL_BLOCK' | 'BLOCK' | 'NONE';
type BlockStatusInfo = {
  __typename?: 'BlockStatusInfo';
  /** the block status of current user towards this profile */
  blockStatus: BlockMode;
  /** if the profile is blocked, includes biodirectional block from other profiles */
  isBlocked: Scalars['Boolean']['output'];
};
type FeedPostConnection = {
  __typename?: 'FeedPostConnection';
  edges: Array<FeedPostEdge>;
  pageInfo: PageInfo;
};
type FeedPostEdge = {
  __typename?: 'FeedPostEdge';
  id: Scalars['ID']['output'];
  post: Post;
};
type FollowLevel = 'FOLLOWING' | 'NONE' | 'NOTIFY';
type LinkPreview = {
  __typename?: 'LinkPreview';
  Url: Scalars['String']['output'];
  canonicalUrl?: Maybe<Scalars['String']['output']>;
  resourceType?: Maybe<LinkPreviewResourceType>;
  summary?: Maybe<Scalars['String']['output']>;
  thumbnailUrl?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};
type LinkPreviewResourceType = 'InstagramPost' | 'UNKNOWN' | 'YouTubeShorts' | 'YouTubeVideo';
type MediaFileMetadata = {
  __typename?: 'MediaFileMetadata';
  contentType: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  mediaId: Scalars['ID']['output'];
  profile: MediaFileProfile;
  url: Scalars['String']['output'];
};
type MediaFileProfile = 'ANIMATED_COMPATIBLE' | 'ANIMATED_THUMBNAIL' | 'COMPATIBLE' | 'QUALITY' | 'THUMBNAIL';
type MediaMetadata = {
  __typename?: 'MediaMetadata';
  account: Account;
  accountID: Scalars['ID']['output'];
  aspectRatio?: Maybe<AspectRatio>;
  blurHash?: Maybe<Scalars['String']['output']>;
  durationMs?: Maybe<Scalars['Int']['output']>;
  files: Array<MediaFileMetadata>;
  id: Scalars['ID']['output'];
  status: MediaStatus;
  type: MediaType;
};
type MediaStatus = 'FAILED' | 'PENDING' | 'READY';
type MediaType = 'AUDIO' | 'IMAGE' | 'VIDEO';
type MonoPostDraft = {
  __typename?: 'MonoPostDraft';
  attachmentIds: Array<AttachmentId>;
  attachments?: Maybe<Array<Attachment>>;
  content: Scalars['String']['output'];
  postCollectionIds: Array<Scalars['ID']['output']>;
  postCollections: Array<PostCollection>;
  postOptions?: Maybe<PostOptions>;
};
type NativeReactionType = 'BOOKMARK' | 'LIKE';
type Notification = {
  __typename?: 'Notification';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  isRead: Scalars['Boolean']['output'];
  message?: Maybe<Scalars['String']['output']>;
  reaction?: Maybe<ReactionType>;
  relatedPost?: Maybe<Post>;
  relatedPostCollection?: Maybe<PostCollection>;
  relatedPostCollectionID?: Maybe<Scalars['ID']['output']>;
  relatedPostID?: Maybe<Scalars['ID']['output']>;
  sourceProfile?: Maybe<Profile>;
  sourceProfileID?: Maybe<Scalars['ID']['output']>;
  targetProfile?: Maybe<Profile>;
  targetProfileID?: Maybe<Scalars['ID']['output']>;
  type: NotificationType;
};
type NotificationConnection = {
  __typename?: 'NotificationConnection';
  edges: Array<Notification>;
  pageInfo: PageInfo;
};
type NotificationFilterInput = {
  read?: InputMaybe<Scalars['Boolean']['input']>;
  types?: InputMaybe<Array<NotificationType>>;
};
type NotificationType = 'FOLLOW' | 'MENTION' | 'NEW_POST' | 'POST_COLLECTION_FOLLOW' | 'REACT' | 'REPLY' | 'SYSTEM_UPDATE';
type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  totalCount?: Maybe<Scalars['Int']['output']>;
};
type Post = {
  __typename?: 'Post';
  attachmentIds: Array<AttachmentId>;
  attachments: Array<Attachment>;
  author: Profile;
  authorID: Scalars['ID']['output'];
  commentCount: Scalars['Int']['output'];
  commentsPopular: PostConnection;
  commentsRecent: PostConnection;
  content: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  leafAncestorIds: Array<Scalars['ID']['output']>;
  leafAncestorPosts: Array<Post>;
  parentPost?: Maybe<Post>;
  parentPostId?: Maybe<Scalars['ID']['output']>;
  postCollections: Array<PostCollection>;
  postOperationPermission: PostOperationPermission;
  postOptions: PostOptions;
  reactions?: Maybe<PostReactionsConnection>;
  relatedComments: Array<Post>;
  rootAncestorIds: Array<Scalars['ID']['output']>;
  rootAncestorPosts: Array<Post>;
};
type PostCommentsPopularArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
};
type PostCommentsRecentArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
};
type PostReactionsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
};
type PostRelatedCommentsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
};
type PostCollection = {
  __typename?: 'PostCollection';
  author?: Maybe<Profile>;
  authorID: Scalars['ID']['output'];
  coverMedia?: Maybe<MediaMetadata>;
  coverMediaID?: Maybe<Scalars['ID']['output']>;
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  followLevel: FollowLevel;
  id: Scalars['ID']['output'];
  postCount: Scalars['Int']['output'];
  posts: PostConnection;
  postsCenteredAt: PostConnection;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};
type PostCollectionPostsArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<PostCollectionPostOrder>;
};
type PostCollectionPostsCenteredAtArgs = {
  centerPostID: Scalars['ID']['input'];
  limitPerSide?: InputMaybe<Scalars['Int']['input']>;
};
type PostCollectionConnection = {
  __typename?: 'PostCollectionConnection';
  edges: Array<PostCollection>;
  pageInfo: PageInfo;
};
type PostCollectionPostOrder = 'AUTHOR_DEFINED' | 'LATEST';
type PostCommentPolicy = 'ALLOW_ALL' | 'ALLOW_FOLLOWERS' | 'ONLY_AUTHOR';
type PostConnection = {
  __typename?: 'PostConnection';
  edges: Array<Post>;
  pageInfo: PageInfo;
};
type PostCopyPolicy = 'ALLOW' | 'DISALLOW';
type PostDraft = {
  __typename?: 'PostDraft';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  postRequests: Array<MonoPostDraft>;
  scheduledAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};
type PostDraftConnection = {
  __typename?: 'PostDraftConnection';
  edges: Array<PostDraft>;
  pageInfo: PageInfo;
};
type PostDraftFilterInput = {
  isScheduled?: InputMaybe<Scalars['Boolean']['input']>;
};
type PostOperationPermission = {
  __typename?: 'PostOperationPermission';
  canComment: Scalars['Boolean']['output'];
  canReact: Scalars['Boolean']['output'];
};
type PostOptions = {
  __typename?: 'PostOptions';
  commentPolicy: PostCommentPolicy;
  copyPolicy: PostCopyPolicy;
  postVisibility: PostVisibility;
  reactionPolicy: PostReactionPolicy;
};
type PostPushPolicy = 'FOLLOWERS' | 'PUBLIC';
type PostReactionDetailRecordConnection = {
  __typename?: 'PostReactionDetailRecordConnection';
  pageInfo: PageInfo;
  reactionRecords: Array<ReactionDetailRecord>;
};
type PostReactionPolicy = 'ALLOW_ALL' | 'ALLOW_FOLLOWERS' | 'ONLY_AUTHOR';
type PostReactionsConnection = {
  __typename?: 'PostReactionsConnection';
  postId: Scalars['ID']['output'];
  queryLimit: Scalars['Int']['output'];
  reactions: Array<ReactionSummary>;
  remainingCount: Scalars['Int']['output'];
  viewerId?: Maybe<Scalars['ID']['output']>;
};
type PostType = 'POST' | 'REPLY';
type PostVisibility = {
  __typename?: 'PostVisibility';
  policy: PostVisibilityPolicy;
  profileTags: Array<Scalars['ID']['output']>;
  pushPolicy: PostPushPolicy;
};
type PostVisibilityPolicy = 'FOLLOWERS' | 'MUTUAL_FOLLOWERS' | 'PUBLIC' | 'TAG_MEMBERS';
type PreferInteractionType = 'BOTH' | 'COMMENTS' | 'DO_NOT_DISTURB' | 'NONE' | 'REACTIONS';
type Profile = {
  __typename?: 'Profile';
  bio?: Maybe<Scalars['String']['output']>;
  blockingStatus?: Maybe<BlockStatusInfo>;
  displayName?: Maybe<Scalars['String']['output']>;
  followerCount: Scalars['Int']['output'];
  followingCount: Scalars['Int']['output'];
  /** Unique identifier for the account */
  id: Scalars['ID']['output'];
  joinedAt: Scalars['DateTime']['output'];
  pinnedPostCollection?: Maybe<PostCollection>;
  pinnedPostCollectionId?: Maybe<Scalars['ID']['output']>;
  preferInteractionType: PreferInteractionType;
  /** An emoji representing the placeholder for the profile picture */
  profileEmoji: Scalars['String']['output'];
  profileFollowStatus?: Maybe<ProfileFollowStatus>;
  profileMedia?: Maybe<MediaMetadata>;
  profileMediaId?: Maybe<Scalars['ID']['output']>;
  tags: Array<ProfileTag>;
  username: Scalars['String']['output'];
  viewerId?: Maybe<Scalars['ID']['output']>;
};
type ProfileConnection = {
  __typename?: 'ProfileConnection';
  edges: Array<Profile>;
  pageInfo: PageInfo;
};
type ProfileFollowStatus = {
  __typename?: 'ProfileFollowStatus';
  followingLevel: FollowLevel;
  isFollowedBy: Scalars['Boolean']['output'];
  isFollowing: Scalars['Boolean']['output'];
};
type ProfileTag = {
  __typename?: 'ProfileTag';
  Author: Profile;
  AuthorID: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  memberCount: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  posts: PostConnection;
};
type ProfileTagPostsArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
};
type ProfileTagConnection = {
  __typename?: 'ProfileTagConnection';
  edges: Array<ProfileTag>;
  pageInfo: PageInfo;
};
type Query = {
  __typename?: 'Query';
  /**
   * Get a profile by account ID or username.
   *
   * - Provide either `accountId` or `username`.
   */
  getAccountProfile: Profile;
  /** Get the profiles blocked by the current user. */
  getBlockedAccounts: ProfileConnection;
  /** Get the current account. */
  getCurrentAccount: Account;
  /** Get discussion-focused feed posts for the current user. */
  getDiscussions: FeedPostConnection;
  /** Get the main feed posts with pagination. */
  getFeedPosts: FeedPostConnection;
  /** Get the profiles that follow the specified account. */
  getFollowedAccounts: ProfileConnection;
  /** Get post collections followed by the current user. */
  getFollowedPostCollections: PostCollectionConnection;
  /** Get the profiles followed by the specified account. */
  getFollowingAccounts: ProfileConnection;
  /** Get posts from accounts followed by the current user. */
  getFollowingPosts: FeedPostConnection;
  /**
   * Get the current user's feed history with optional inclusion of their own posts.
   *
   * - `includeOwnPosts`: Includes the current user's own posts in the result when `true`.
   */
  getHistoryPosts: FeedPostConnection;
  /** Generate a link preview for the provided URL. */
  getLinkPreview?: Maybe<LinkPreview>;
  /** Get media metadata by media ID. */
  getMedia: MediaMetadata;
  /** Get mutual followers for the specified account. */
  getMutualFollowers: ProfileConnection;
  /** Get post collections for the current user. */
  getMyPostCollections: PostCollectionConnection;
  /**
   * Get notifications for the current user with optional filtering and pagination.
   *
   * - `filter.types`: Restricts results to specific notification types.
   * - `filter.read`: Filters by read or unread state.
   */
  getNotifications: NotificationConnection;
  /**
   * Get popular posts with optional language filtering and pagination.
   *
   * - `language`: Restricts results to a specific language code when provided.
   */
  getPopularPosts: FeedPostConnection;
  /** Get a post by ID. */
  getPost?: Maybe<Post>;
  /** Get a post collection by ID. */
  getPostCollection?: Maybe<PostCollection>;
  /** Get post collections created by a specific author. */
  getPostCollectionsByAuthor: PostCollectionConnection;
  /** Get a post draft by ID. */
  getPostDraft?: Maybe<PostDraft>;
  /**
   * Get post drafts for the current user with optional filtering and pagination.
   *
   * - `filter.isScheduled`: `true` returns scheduled drafts, `false` returns unscheduled drafts.
   */
  getPostDrafts: PostDraftConnection;
  /**
   * Get the number of post drafts matching the provided filter.
   *
   * - `filter.isScheduled`: `true` counts scheduled drafts, `false` counts unscheduled drafts.
   */
  getPostDraftsCount: Scalars['Int']['output'];
  /**
   * Get detailed reaction records for a specific post, optionally filtered by reaction type.
   *
   * - `type`: Restricts records to a specific native reaction or custom emoji reaction.
   */
  getPostReactionDetails: PostReactionDetailRecordConnection;
  /** Get a summary of reactions for a specific post. */
  getPostReactions?: Maybe<PostReactionsConnection>;
  /** Get a profile tag created by the current user by ID. */
  getProfileTagById?: Maybe<ProfileTag>;
  /** List profiles under a specific profile tag. */
  getProfileTagProfiles: ProfileConnection;
  /**
   * Get posts the current user has reacted to for a specific reaction type.
   *
   * - `reactionType`: Supports either a native reaction or a custom emoji reaction.
   */
  getReactedPosts: FeedPostConnection;
  /** Get feed posts for a specific topic. */
  getTopicFeedPosts: PostConnection;
  /** Get the topics available to the current user. */
  getTopics: Array<Topic>;
  /** Get the unread notification count for the current user. */
  getUnreadNotificationCount: Scalars['Int']['output'];
  /**
   * Get posts created by a specific account with pagination and post type filtering.
   *
   * - `postType`: `POST` returns top-level posts, while `REPLY` returns replies.
   */
  getUserPosts: PostConnection;
  /** Get aggregated reaction statistics for the current user. */
  getUserReactions: UserReactionsStatisticsConnection;
  /** List profile tags created by the current user. */
  listProfileTags: ProfileTagConnection;
};
type QueryGetAccountProfileArgs = {
  accountId?: InputMaybe<Scalars['ID']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};
type QueryGetBlockedAccountsArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
};
type QueryGetDiscussionsArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
};
type QueryGetFeedPostsArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
};
type QueryGetFollowedAccountsArgs = {
  accountId: Scalars['ID']['input'];
  cursor?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
};
type QueryGetFollowedPostCollectionsArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
};
type QueryGetFollowingAccountsArgs = {
  accountId: Scalars['ID']['input'];
  cursor?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
};
type QueryGetFollowingPostsArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
};
type QueryGetHistoryPostsArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  includeOwnPosts?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
};
type QueryGetLinkPreviewArgs = {
  url: Scalars['String']['input'];
};
type QueryGetMediaArgs = {
  mediaId: Scalars['ID']['input'];
};
type QueryGetMutualFollowersArgs = {
  accountId: Scalars['ID']['input'];
  cursor?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
};
type QueryGetMyPostCollectionsArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
};
type QueryGetNotificationsArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<NotificationFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
};
type QueryGetPopularPostsArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  language?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
};
type QueryGetPostArgs = {
  postId: Scalars['ID']['input'];
};
type QueryGetPostCollectionArgs = {
  id: Scalars['ID']['input'];
};
type QueryGetPostCollectionsByAuthorArgs = {
  authorID: Scalars['ID']['input'];
  cursor?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
};
type QueryGetPostDraftArgs = {
  id: Scalars['ID']['input'];
};
type QueryGetPostDraftsArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<PostDraftFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
};
type QueryGetPostDraftsCountArgs = {
  filter?: InputMaybe<PostDraftFilterInput>;
};
type QueryGetPostReactionDetailsArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  postId: Scalars['ID']['input'];
  type?: InputMaybe<ReactionTypeInput>;
};
type QueryGetPostReactionsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  postId: Scalars['ID']['input'];
};
type QueryGetProfileTagByIdArgs = {
  id: Scalars['ID']['input'];
};
type QueryGetProfileTagProfilesArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  tagId: Scalars['ID']['input'];
};
type QueryGetReactedPostsArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  reactionType: ReactionTypeInput;
};
type QueryGetTopicFeedPostsArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  topicId: Scalars['ID']['input'];
};
type QueryGetTopicsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
};
type QueryGetUserPostsArgs = {
  accountId: Scalars['ID']['input'];
  cursor?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  postType?: InputMaybe<PostType>;
};
type QueryGetUserReactionsArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
};
type QueryListProfileTagsArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
};
type ReactionDetailRecord = {
  __typename?: 'ReactionDetailRecord';
  accountId: Scalars['ID']['output'];
  createdAt: Scalars['DateTime']['output'];
  profile?: Maybe<Profile>;
  type?: Maybe<ReactionType>;
};
type ReactionSummary = {
  __typename?: 'ReactionSummary';
  count: Scalars['Int']['output'];
  isReactedByViewer: Scalars['Boolean']['output'];
  type: ReactionType;
};
type ReactionType = {
  __typename?: 'ReactionType';
  emojiValue?: Maybe<Scalars['Emoji']['output']>;
  nativeValue?: Maybe<NativeReactionType>;
};
type ReactionTypeInput = {
  emojiValue?: InputMaybe<Scalars['Emoji']['input']>;
  nativeValue?: InputMaybe<NativeReactionType>;
};
type Status = 'ACTIVE' | 'DELETED' | 'INACTIVE' | 'SUSPENDED';
type Subscription = {
  __typename?: 'Subscription';
  /** Subscribe to real-time notifications for the authenticated user. */
  notificationReceived: Notification;
  /**
   * Subscribe to posts created by a specific author.
   *
   * - `postType`: `POST` only streams top-level posts, `REPLY` only streams replies, and omitting it streams both.
   */
  postCreatedByAuthor: Post;
  /** Subscribe to new posts created in a specific post collection. */
  postCreatedInCollection: Post;
  /** Subscribe to deletion events for a specific post. */
  postDeleted: Scalars['ID']['output'];
  /** Subscribe to updates for a specific post. */
  postUpdated: Post;
  /**
   * Subscribe to replies created under a specific root post.
   *
   * - `rootPostId`: Streams replies in the thread rooted at the given post.
   */
  replyCreatedUnderRootPost: Post;
};
type SubscriptionPostCreatedByAuthorArgs = {
  authorId: Scalars['ID']['input'];
  postType?: InputMaybe<PostType>;
};
type SubscriptionPostCreatedInCollectionArgs = {
  postCollectionID: Scalars['ID']['input'];
};
type SubscriptionPostDeletedArgs = {
  postId: Scalars['ID']['input'];
};
type SubscriptionPostUpdatedArgs = {
  postId: Scalars['ID']['input'];
};
type SubscriptionReplyCreatedUnderRootPostArgs = {
  rootPostId: Scalars['ID']['input'];
};
type Topic = {
  __typename?: 'Topic';
  emoji: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
};
type UserReactionStatistics = {
  __typename?: 'UserReactionStatistics';
  count: Scalars['Int']['output'];
  type: ReactionType;
};
type UserReactionsStatisticsConnection = {
  __typename?: 'UserReactionsStatisticsConnection';
  pageInfo: PageInfo;
  reactions: Array<UserReactionStatistics>;
};
type PageInfoFieldsFragment = {
  __typename?: 'PageInfo';
  endCursor?: string | null;
  hasNextPage: boolean;
  totalCount?: number | null;
};
type AccountFieldsFragment = {
  __typename?: 'Account';
  id: string;
  username: string;
  email: string;
  createdAt: string;
  lastLogin?: string | null;
  status: Status;
};
type AspectRatioFieldsFragment = {
  __typename?: 'AspectRatio';
  numerator: number;
  denominator: number;
};
type MediaFileMetadataFieldsFragment = {
  __typename?: 'MediaFileMetadata';
  id: string;
  mediaId: string;
  profile: MediaFileProfile;
  contentType: string;
  url: string;
};
type MediaMetadataFieldsFragment = {
  __typename?: 'MediaMetadata';
  id: string;
  accountID: string;
  blurHash?: string | null;
  durationMs?: number | null;
  status: MediaStatus;
  type: MediaType;
  aspectRatio?: {
    __typename?: 'AspectRatio';
    numerator: number;
    denominator: number;
  } | null;
  files: Array<{
    __typename?: 'MediaFileMetadata';
    id: string;
    mediaId: string;
    profile: MediaFileProfile;
    contentType: string;
    url: string;
  }>;
};
type BlockStatusInfoFieldsFragment = {
  __typename?: 'BlockStatusInfo';
  blockStatus: BlockMode;
  isBlocked: boolean;
};
type ProfileFollowStatusFieldsFragment = {
  __typename?: 'ProfileFollowStatus';
  followingLevel: FollowLevel;
  isFollowedBy: boolean;
  isFollowing: boolean;
};
type ReactionTypeFieldsFragment = {
  __typename?: 'ReactionType';
  emojiValue?: string | null;
  nativeValue?: NativeReactionType | null;
};
type ReactionSummaryFieldsFragment = {
  __typename?: 'ReactionSummary';
  count: number;
  isReactedByViewer: boolean;
  type: {
    __typename?: 'ReactionType';
    emojiValue?: string | null;
    nativeValue?: NativeReactionType | null;
  };
};
type PostReactionsConnectionFieldsFragment = {
  __typename?: 'PostReactionsConnection';
  postId: string;
  queryLimit: number;
  remainingCount: number;
  viewerId?: string | null;
  reactions: Array<{
    __typename?: 'ReactionSummary';
    count: number;
    isReactedByViewer: boolean;
    type: {
      __typename?: 'ReactionType';
      emojiValue?: string | null;
      nativeValue?: NativeReactionType | null;
    };
  }>;
};
type PostOperationPermissionFieldsFragment = {
  __typename?: 'PostOperationPermission';
  canComment: boolean;
  canReact: boolean;
};
type PostVisibilityFieldsFragment = {
  __typename?: 'PostVisibility';
  policy: PostVisibilityPolicy;
  profileTags: Array<string>;
  pushPolicy: PostPushPolicy;
};
type PostOptionsFieldsFragment = {
  __typename?: 'PostOptions';
  commentPolicy: PostCommentPolicy;
  copyPolicy: PostCopyPolicy;
  reactionPolicy: PostReactionPolicy;
  postVisibility: {
    __typename?: 'PostVisibility';
    policy: PostVisibilityPolicy;
    profileTags: Array<string>;
    pushPolicy: PostPushPolicy;
  };
};
type LinkPreviewFieldsFragment = {
  __typename?: 'LinkPreview';
  Url: string;
  canonicalUrl?: string | null;
  resourceType?: LinkPreviewResourceType | null;
  summary?: string | null;
  thumbnailUrl?: string | null;
  title?: string | null;
};
type TopicFieldsFragment = {
  __typename?: 'Topic';
  id: string;
  emoji: string;
  title: string;
};
type ProfileReferenceFieldsFragment = {
  __typename?: 'Profile';
  id: string;
  username: string;
  displayName?: string | null;
  profileEmoji: string;
  profileMediaId?: string | null;
};
type PostReferenceFieldsFragment = {
  __typename?: 'Post';
  id: string;
  authorID: string;
  content: string;
  createdAt: string;
  parentPostId?: string | null;
  commentCount: number;
};
type PostCollectionReferenceFieldsFragment = {
  __typename?: 'PostCollection';
  id: string;
  authorID: string;
  coverMediaID?: string | null;
  createdAt: string;
  description: string;
  followLevel: FollowLevel;
  postCount: number;
  title: string;
  updatedAt: string;
};
type AttachmentIdFieldsFragment = {
  __typename?: 'AttachmentID';
  type: AttachmentType;
  embeddedCollectionId?: string | null;
  embeddedPostId?: string | null;
  embeddedProfileId?: string | null;
  linkUrl?: string | null;
  mediaId?: string | null;
};
type AttachmentFieldsFragment = {
  __typename?: 'Attachment';
  type: AttachmentType;
  linkPreview?: {
    __typename?: 'LinkPreview';
    Url: string;
    canonicalUrl?: string | null;
    resourceType?: LinkPreviewResourceType | null;
    summary?: string | null;
    thumbnailUrl?: string | null;
    title?: string | null;
  } | null;
  media?: {
    __typename?: 'MediaMetadata';
    id: string;
    accountID: string;
    blurHash?: string | null;
    durationMs?: number | null;
    status: MediaStatus;
    type: MediaType;
    aspectRatio?: {
      __typename?: 'AspectRatio';
      numerator: number;
      denominator: number;
    } | null;
    files: Array<{
      __typename?: 'MediaFileMetadata';
      id: string;
      mediaId: string;
      profile: MediaFileProfile;
      contentType: string;
      url: string;
    }>;
  } | null;
  embeddedProfile?: {
    __typename?: 'Profile';
    id: string;
    username: string;
    displayName?: string | null;
    profileEmoji: string;
    profileMediaId?: string | null;
  } | null;
  embeddedPost?: {
    __typename?: 'Post';
    id: string;
    authorID: string;
    content: string;
    createdAt: string;
    parentPostId?: string | null;
    commentCount: number;
  } | null;
  embeddedCollection?: {
    __typename?: 'PostCollection';
    id: string;
    authorID: string;
    coverMediaID?: string | null;
    createdAt: string;
    description: string;
    followLevel: FollowLevel;
    postCount: number;
    title: string;
    updatedAt: string;
  } | null;
};
type ProfileTagFieldsFragment = {
  __typename?: 'ProfileTag';
  id: string;
  name: string;
  memberCount: number;
  AuthorID: string;
  Author: {
    __typename?: 'Profile';
    id: string;
    username: string;
    displayName?: string | null;
    profileEmoji: string;
    profileMediaId?: string | null;
  };
};
type ProfileFieldsFragment = {
  __typename?: 'Profile';
  id: string;
  username: string;
  displayName?: string | null;
  bio?: string | null;
  joinedAt: string;
  followerCount: number;
  followingCount: number;
  preferInteractionType: PreferInteractionType;
  profileEmoji: string;
  profileMediaId?: string | null;
  viewerId?: string | null;
  pinnedPostCollectionId?: string | null;
  blockingStatus?: {
    __typename?: 'BlockStatusInfo';
    blockStatus: BlockMode;
    isBlocked: boolean;
  } | null;
  pinnedPostCollection?: {
    __typename?: 'PostCollection';
    id: string;
    authorID: string;
    coverMediaID?: string | null;
    createdAt: string;
    description: string;
    followLevel: FollowLevel;
    postCount: number;
    title: string;
    updatedAt: string;
  } | null;
  profileFollowStatus?: {
    __typename?: 'ProfileFollowStatus';
    followingLevel: FollowLevel;
    isFollowedBy: boolean;
    isFollowing: boolean;
  } | null;
  profileMedia?: {
    __typename?: 'MediaMetadata';
    id: string;
    accountID: string;
    blurHash?: string | null;
    durationMs?: number | null;
    status: MediaStatus;
    type: MediaType;
    aspectRatio?: {
      __typename?: 'AspectRatio';
      numerator: number;
      denominator: number;
    } | null;
    files: Array<{
      __typename?: 'MediaFileMetadata';
      id: string;
      mediaId: string;
      profile: MediaFileProfile;
      contentType: string;
      url: string;
    }>;
  } | null;
  tags: Array<{
    __typename?: 'ProfileTag';
    id: string;
    name: string;
    memberCount: number;
    AuthorID: string;
    Author: {
      __typename?: 'Profile';
      id: string;
      username: string;
      displayName?: string | null;
      profileEmoji: string;
      profileMediaId?: string | null;
    };
  }>;
};
type PostCollectionFieldsFragment = {
  __typename?: 'PostCollection';
  id: string;
  authorID: string;
  coverMediaID?: string | null;
  createdAt: string;
  description: string;
  followLevel: FollowLevel;
  postCount: number;
  title: string;
  updatedAt: string;
  author?: {
    __typename?: 'Profile';
    id: string;
    username: string;
    displayName?: string | null;
    profileEmoji: string;
    profileMediaId?: string | null;
  } | null;
  coverMedia?: {
    __typename?: 'MediaMetadata';
    id: string;
    accountID: string;
    blurHash?: string | null;
    durationMs?: number | null;
    status: MediaStatus;
    type: MediaType;
    aspectRatio?: {
      __typename?: 'AspectRatio';
      numerator: number;
      denominator: number;
    } | null;
    files: Array<{
      __typename?: 'MediaFileMetadata';
      id: string;
      mediaId: string;
      profile: MediaFileProfile;
      contentType: string;
      url: string;
    }>;
  } | null;
};
type MonoPostDraftFieldsFragment = {
  __typename?: 'MonoPostDraft';
  content: string;
  postCollectionIds: Array<string>;
  attachmentIds: Array<{
    __typename?: 'AttachmentID';
    type: AttachmentType;
    embeddedCollectionId?: string | null;
    embeddedPostId?: string | null;
    embeddedProfileId?: string | null;
    linkUrl?: string | null;
    mediaId?: string | null;
  }>;
  attachments?: Array<{
    __typename?: 'Attachment';
    type: AttachmentType;
    linkPreview?: {
      __typename?: 'LinkPreview';
      Url: string;
      canonicalUrl?: string | null;
      resourceType?: LinkPreviewResourceType | null;
      summary?: string | null;
      thumbnailUrl?: string | null;
      title?: string | null;
    } | null;
    media?: {
      __typename?: 'MediaMetadata';
      id: string;
      accountID: string;
      blurHash?: string | null;
      durationMs?: number | null;
      status: MediaStatus;
      type: MediaType;
      aspectRatio?: {
        __typename?: 'AspectRatio';
        numerator: number;
        denominator: number;
      } | null;
      files: Array<{
        __typename?: 'MediaFileMetadata';
        id: string;
        mediaId: string;
        profile: MediaFileProfile;
        contentType: string;
        url: string;
      }>;
    } | null;
    embeddedProfile?: {
      __typename?: 'Profile';
      id: string;
      username: string;
      displayName?: string | null;
      profileEmoji: string;
      profileMediaId?: string | null;
    } | null;
    embeddedPost?: {
      __typename?: 'Post';
      id: string;
      authorID: string;
      content: string;
      createdAt: string;
      parentPostId?: string | null;
      commentCount: number;
    } | null;
    embeddedCollection?: {
      __typename?: 'PostCollection';
      id: string;
      authorID: string;
      coverMediaID?: string | null;
      createdAt: string;
      description: string;
      followLevel: FollowLevel;
      postCount: number;
      title: string;
      updatedAt: string;
    } | null;
  }> | null;
  postCollections: Array<{
    __typename?: 'PostCollection';
    id: string;
    authorID: string;
    coverMediaID?: string | null;
    createdAt: string;
    description: string;
    followLevel: FollowLevel;
    postCount: number;
    title: string;
    updatedAt: string;
  }>;
  postOptions?: {
    __typename?: 'PostOptions';
    commentPolicy: PostCommentPolicy;
    copyPolicy: PostCopyPolicy;
    reactionPolicy: PostReactionPolicy;
    postVisibility: {
      __typename?: 'PostVisibility';
      policy: PostVisibilityPolicy;
      profileTags: Array<string>;
      pushPolicy: PostPushPolicy;
    };
  } | null;
};
type PostDraftFieldsFragment = {
  __typename?: 'PostDraft';
  id: string;
  createdAt: string;
  scheduledAt?: string | null;
  updatedAt: string;
  postRequests: Array<{
    __typename?: 'MonoPostDraft';
    content: string;
    postCollectionIds: Array<string>;
    attachmentIds: Array<{
      __typename?: 'AttachmentID';
      type: AttachmentType;
      embeddedCollectionId?: string | null;
      embeddedPostId?: string | null;
      embeddedProfileId?: string | null;
      linkUrl?: string | null;
      mediaId?: string | null;
    }>;
    attachments?: Array<{
      __typename?: 'Attachment';
      type: AttachmentType;
      linkPreview?: {
        __typename?: 'LinkPreview';
        Url: string;
        canonicalUrl?: string | null;
        resourceType?: LinkPreviewResourceType | null;
        summary?: string | null;
        thumbnailUrl?: string | null;
        title?: string | null;
      } | null;
      media?: {
        __typename?: 'MediaMetadata';
        id: string;
        accountID: string;
        blurHash?: string | null;
        durationMs?: number | null;
        status: MediaStatus;
        type: MediaType;
        aspectRatio?: {
          __typename?: 'AspectRatio';
          numerator: number;
          denominator: number;
        } | null;
        files: Array<{
          __typename?: 'MediaFileMetadata';
          id: string;
          mediaId: string;
          profile: MediaFileProfile;
          contentType: string;
          url: string;
        }>;
      } | null;
      embeddedProfile?: {
        __typename?: 'Profile';
        id: string;
        username: string;
        displayName?: string | null;
        profileEmoji: string;
        profileMediaId?: string | null;
      } | null;
      embeddedPost?: {
        __typename?: 'Post';
        id: string;
        authorID: string;
        content: string;
        createdAt: string;
        parentPostId?: string | null;
        commentCount: number;
      } | null;
      embeddedCollection?: {
        __typename?: 'PostCollection';
        id: string;
        authorID: string;
        coverMediaID?: string | null;
        createdAt: string;
        description: string;
        followLevel: FollowLevel;
        postCount: number;
        title: string;
        updatedAt: string;
      } | null;
    }> | null;
    postCollections: Array<{
      __typename?: 'PostCollection';
      id: string;
      authorID: string;
      coverMediaID?: string | null;
      createdAt: string;
      description: string;
      followLevel: FollowLevel;
      postCount: number;
      title: string;
      updatedAt: string;
    }>;
    postOptions?: {
      __typename?: 'PostOptions';
      commentPolicy: PostCommentPolicy;
      copyPolicy: PostCopyPolicy;
      reactionPolicy: PostReactionPolicy;
      postVisibility: {
        __typename?: 'PostVisibility';
        policy: PostVisibilityPolicy;
        profileTags: Array<string>;
        pushPolicy: PostPushPolicy;
      };
    } | null;
  }>;
};
type PostFieldsFragment = {
  __typename?: 'Post';
  id: string;
  authorID: string;
  content: string;
  createdAt: string;
  parentPostId?: string | null;
  commentCount: number;
  leafAncestorIds: Array<string>;
  rootAncestorIds: Array<string>;
  author: {
    __typename?: 'Profile';
    id: string;
    username: string;
    displayName?: string | null;
    profileEmoji: string;
    profileMediaId?: string | null;
  };
  attachmentIds: Array<{
    __typename?: 'AttachmentID';
    type: AttachmentType;
    embeddedCollectionId?: string | null;
    embeddedPostId?: string | null;
    embeddedProfileId?: string | null;
    linkUrl?: string | null;
    mediaId?: string | null;
  }>;
  attachments: Array<{
    __typename?: 'Attachment';
    type: AttachmentType;
    linkPreview?: {
      __typename?: 'LinkPreview';
      Url: string;
      canonicalUrl?: string | null;
      resourceType?: LinkPreviewResourceType | null;
      summary?: string | null;
      thumbnailUrl?: string | null;
      title?: string | null;
    } | null;
    media?: {
      __typename?: 'MediaMetadata';
      id: string;
      accountID: string;
      blurHash?: string | null;
      durationMs?: number | null;
      status: MediaStatus;
      type: MediaType;
      aspectRatio?: {
        __typename?: 'AspectRatio';
        numerator: number;
        denominator: number;
      } | null;
      files: Array<{
        __typename?: 'MediaFileMetadata';
        id: string;
        mediaId: string;
        profile: MediaFileProfile;
        contentType: string;
        url: string;
      }>;
    } | null;
    embeddedProfile?: {
      __typename?: 'Profile';
      id: string;
      username: string;
      displayName?: string | null;
      profileEmoji: string;
      profileMediaId?: string | null;
    } | null;
    embeddedPost?: {
      __typename?: 'Post';
      id: string;
      authorID: string;
      content: string;
      createdAt: string;
      parentPostId?: string | null;
      commentCount: number;
    } | null;
    embeddedCollection?: {
      __typename?: 'PostCollection';
      id: string;
      authorID: string;
      coverMediaID?: string | null;
      createdAt: string;
      description: string;
      followLevel: FollowLevel;
      postCount: number;
      title: string;
      updatedAt: string;
    } | null;
  }>;
  postCollections: Array<{
    __typename?: 'PostCollection';
    id: string;
    authorID: string;
    coverMediaID?: string | null;
    createdAt: string;
    description: string;
    followLevel: FollowLevel;
    postCount: number;
    title: string;
    updatedAt: string;
  }>;
  postOperationPermission: {
    __typename?: 'PostOperationPermission';
    canComment: boolean;
    canReact: boolean;
  };
  postOptions: {
    __typename?: 'PostOptions';
    commentPolicy: PostCommentPolicy;
    copyPolicy: PostCopyPolicy;
    reactionPolicy: PostReactionPolicy;
    postVisibility: {
      __typename?: 'PostVisibility';
      policy: PostVisibilityPolicy;
      profileTags: Array<string>;
      pushPolicy: PostPushPolicy;
    };
  };
  reactions?: {
    __typename?: 'PostReactionsConnection';
    postId: string;
    queryLimit: number;
    remainingCount: number;
    viewerId?: string | null;
    reactions: Array<{
      __typename?: 'ReactionSummary';
      count: number;
      isReactedByViewer: boolean;
      type: {
        __typename?: 'ReactionType';
        emojiValue?: string | null;
        nativeValue?: NativeReactionType | null;
      };
    }>;
  } | null;
};
type FeedPostEdgeFieldsFragment = {
  __typename?: 'FeedPostEdge';
  id: string;
  post: {
    __typename?: 'Post';
    id: string;
    authorID: string;
    content: string;
    createdAt: string;
    parentPostId?: string | null;
    commentCount: number;
    leafAncestorIds: Array<string>;
    rootAncestorIds: Array<string>;
    author: {
      __typename?: 'Profile';
      id: string;
      username: string;
      displayName?: string | null;
      profileEmoji: string;
      profileMediaId?: string | null;
    };
    attachmentIds: Array<{
      __typename?: 'AttachmentID';
      type: AttachmentType;
      embeddedCollectionId?: string | null;
      embeddedPostId?: string | null;
      embeddedProfileId?: string | null;
      linkUrl?: string | null;
      mediaId?: string | null;
    }>;
    attachments: Array<{
      __typename?: 'Attachment';
      type: AttachmentType;
      linkPreview?: {
        __typename?: 'LinkPreview';
        Url: string;
        canonicalUrl?: string | null;
        resourceType?: LinkPreviewResourceType | null;
        summary?: string | null;
        thumbnailUrl?: string | null;
        title?: string | null;
      } | null;
      media?: {
        __typename?: 'MediaMetadata';
        id: string;
        accountID: string;
        blurHash?: string | null;
        durationMs?: number | null;
        status: MediaStatus;
        type: MediaType;
        aspectRatio?: {
          __typename?: 'AspectRatio';
          numerator: number;
          denominator: number;
        } | null;
        files: Array<{
          __typename?: 'MediaFileMetadata';
          id: string;
          mediaId: string;
          profile: MediaFileProfile;
          contentType: string;
          url: string;
        }>;
      } | null;
      embeddedProfile?: {
        __typename?: 'Profile';
        id: string;
        username: string;
        displayName?: string | null;
        profileEmoji: string;
        profileMediaId?: string | null;
      } | null;
      embeddedPost?: {
        __typename?: 'Post';
        id: string;
        authorID: string;
        content: string;
        createdAt: string;
        parentPostId?: string | null;
        commentCount: number;
      } | null;
      embeddedCollection?: {
        __typename?: 'PostCollection';
        id: string;
        authorID: string;
        coverMediaID?: string | null;
        createdAt: string;
        description: string;
        followLevel: FollowLevel;
        postCount: number;
        title: string;
        updatedAt: string;
      } | null;
    }>;
    postCollections: Array<{
      __typename?: 'PostCollection';
      id: string;
      authorID: string;
      coverMediaID?: string | null;
      createdAt: string;
      description: string;
      followLevel: FollowLevel;
      postCount: number;
      title: string;
      updatedAt: string;
    }>;
    postOperationPermission: {
      __typename?: 'PostOperationPermission';
      canComment: boolean;
      canReact: boolean;
    };
    postOptions: {
      __typename?: 'PostOptions';
      commentPolicy: PostCommentPolicy;
      copyPolicy: PostCopyPolicy;
      reactionPolicy: PostReactionPolicy;
      postVisibility: {
        __typename?: 'PostVisibility';
        policy: PostVisibilityPolicy;
        profileTags: Array<string>;
        pushPolicy: PostPushPolicy;
      };
    };
    reactions?: {
      __typename?: 'PostReactionsConnection';
      postId: string;
      queryLimit: number;
      remainingCount: number;
      viewerId?: string | null;
      reactions: Array<{
        __typename?: 'ReactionSummary';
        count: number;
        isReactedByViewer: boolean;
        type: {
          __typename?: 'ReactionType';
          emojiValue?: string | null;
          nativeValue?: NativeReactionType | null;
        };
      }>;
    } | null;
  };
};
type FeedPostConnectionFieldsFragment = {
  __typename?: 'FeedPostConnection';
  edges: Array<{
    __typename?: 'FeedPostEdge';
    id: string;
    post: {
      __typename?: 'Post';
      id: string;
      authorID: string;
      content: string;
      createdAt: string;
      parentPostId?: string | null;
      commentCount: number;
      leafAncestorIds: Array<string>;
      rootAncestorIds: Array<string>;
      author: {
        __typename?: 'Profile';
        id: string;
        username: string;
        displayName?: string | null;
        profileEmoji: string;
        profileMediaId?: string | null;
      };
      attachmentIds: Array<{
        __typename?: 'AttachmentID';
        type: AttachmentType;
        embeddedCollectionId?: string | null;
        embeddedPostId?: string | null;
        embeddedProfileId?: string | null;
        linkUrl?: string | null;
        mediaId?: string | null;
      }>;
      attachments: Array<{
        __typename?: 'Attachment';
        type: AttachmentType;
        linkPreview?: {
          __typename?: 'LinkPreview';
          Url: string;
          canonicalUrl?: string | null;
          resourceType?: LinkPreviewResourceType | null;
          summary?: string | null;
          thumbnailUrl?: string | null;
          title?: string | null;
        } | null;
        media?: {
          __typename?: 'MediaMetadata';
          id: string;
          accountID: string;
          blurHash?: string | null;
          durationMs?: number | null;
          status: MediaStatus;
          type: MediaType;
          aspectRatio?: {
            __typename?: 'AspectRatio';
            numerator: number;
            denominator: number;
          } | null;
          files: Array<{
            __typename?: 'MediaFileMetadata';
            id: string;
            mediaId: string;
            profile: MediaFileProfile;
            contentType: string;
            url: string;
          }>;
        } | null;
        embeddedProfile?: {
          __typename?: 'Profile';
          id: string;
          username: string;
          displayName?: string | null;
          profileEmoji: string;
          profileMediaId?: string | null;
        } | null;
        embeddedPost?: {
          __typename?: 'Post';
          id: string;
          authorID: string;
          content: string;
          createdAt: string;
          parentPostId?: string | null;
          commentCount: number;
        } | null;
        embeddedCollection?: {
          __typename?: 'PostCollection';
          id: string;
          authorID: string;
          coverMediaID?: string | null;
          createdAt: string;
          description: string;
          followLevel: FollowLevel;
          postCount: number;
          title: string;
          updatedAt: string;
        } | null;
      }>;
      postCollections: Array<{
        __typename?: 'PostCollection';
        id: string;
        authorID: string;
        coverMediaID?: string | null;
        createdAt: string;
        description: string;
        followLevel: FollowLevel;
        postCount: number;
        title: string;
        updatedAt: string;
      }>;
      postOperationPermission: {
        __typename?: 'PostOperationPermission';
        canComment: boolean;
        canReact: boolean;
      };
      postOptions: {
        __typename?: 'PostOptions';
        commentPolicy: PostCommentPolicy;
        copyPolicy: PostCopyPolicy;
        reactionPolicy: PostReactionPolicy;
        postVisibility: {
          __typename?: 'PostVisibility';
          policy: PostVisibilityPolicy;
          profileTags: Array<string>;
          pushPolicy: PostPushPolicy;
        };
      };
      reactions?: {
        __typename?: 'PostReactionsConnection';
        postId: string;
        queryLimit: number;
        remainingCount: number;
        viewerId?: string | null;
        reactions: Array<{
          __typename?: 'ReactionSummary';
          count: number;
          isReactedByViewer: boolean;
          type: {
            __typename?: 'ReactionType';
            emojiValue?: string | null;
            nativeValue?: NativeReactionType | null;
          };
        }>;
      } | null;
    };
  }>;
  pageInfo: {
    __typename?: 'PageInfo';
    endCursor?: string | null;
    hasNextPage: boolean;
    totalCount?: number | null;
  };
};
type PostConnectionFieldsFragment = {
  __typename?: 'PostConnection';
  edges: Array<{
    __typename?: 'Post';
    id: string;
    authorID: string;
    content: string;
    createdAt: string;
    parentPostId?: string | null;
    commentCount: number;
    leafAncestorIds: Array<string>;
    rootAncestorIds: Array<string>;
    author: {
      __typename?: 'Profile';
      id: string;
      username: string;
      displayName?: string | null;
      profileEmoji: string;
      profileMediaId?: string | null;
    };
    attachmentIds: Array<{
      __typename?: 'AttachmentID';
      type: AttachmentType;
      embeddedCollectionId?: string | null;
      embeddedPostId?: string | null;
      embeddedProfileId?: string | null;
      linkUrl?: string | null;
      mediaId?: string | null;
    }>;
    attachments: Array<{
      __typename?: 'Attachment';
      type: AttachmentType;
      linkPreview?: {
        __typename?: 'LinkPreview';
        Url: string;
        canonicalUrl?: string | null;
        resourceType?: LinkPreviewResourceType | null;
        summary?: string | null;
        thumbnailUrl?: string | null;
        title?: string | null;
      } | null;
      media?: {
        __typename?: 'MediaMetadata';
        id: string;
        accountID: string;
        blurHash?: string | null;
        durationMs?: number | null;
        status: MediaStatus;
        type: MediaType;
        aspectRatio?: {
          __typename?: 'AspectRatio';
          numerator: number;
          denominator: number;
        } | null;
        files: Array<{
          __typename?: 'MediaFileMetadata';
          id: string;
          mediaId: string;
          profile: MediaFileProfile;
          contentType: string;
          url: string;
        }>;
      } | null;
      embeddedProfile?: {
        __typename?: 'Profile';
        id: string;
        username: string;
        displayName?: string | null;
        profileEmoji: string;
        profileMediaId?: string | null;
      } | null;
      embeddedPost?: {
        __typename?: 'Post';
        id: string;
        authorID: string;
        content: string;
        createdAt: string;
        parentPostId?: string | null;
        commentCount: number;
      } | null;
      embeddedCollection?: {
        __typename?: 'PostCollection';
        id: string;
        authorID: string;
        coverMediaID?: string | null;
        createdAt: string;
        description: string;
        followLevel: FollowLevel;
        postCount: number;
        title: string;
        updatedAt: string;
      } | null;
    }>;
    postCollections: Array<{
      __typename?: 'PostCollection';
      id: string;
      authorID: string;
      coverMediaID?: string | null;
      createdAt: string;
      description: string;
      followLevel: FollowLevel;
      postCount: number;
      title: string;
      updatedAt: string;
    }>;
    postOperationPermission: {
      __typename?: 'PostOperationPermission';
      canComment: boolean;
      canReact: boolean;
    };
    postOptions: {
      __typename?: 'PostOptions';
      commentPolicy: PostCommentPolicy;
      copyPolicy: PostCopyPolicy;
      reactionPolicy: PostReactionPolicy;
      postVisibility: {
        __typename?: 'PostVisibility';
        policy: PostVisibilityPolicy;
        profileTags: Array<string>;
        pushPolicy: PostPushPolicy;
      };
    };
    reactions?: {
      __typename?: 'PostReactionsConnection';
      postId: string;
      queryLimit: number;
      remainingCount: number;
      viewerId?: string | null;
      reactions: Array<{
        __typename?: 'ReactionSummary';
        count: number;
        isReactedByViewer: boolean;
        type: {
          __typename?: 'ReactionType';
          emojiValue?: string | null;
          nativeValue?: NativeReactionType | null;
        };
      }>;
    } | null;
  }>;
  pageInfo: {
    __typename?: 'PageInfo';
    endCursor?: string | null;
    hasNextPage: boolean;
    totalCount?: number | null;
  };
};
type ProfileConnectionFieldsFragment = {
  __typename?: 'ProfileConnection';
  edges: Array<{
    __typename?: 'Profile';
    id: string;
    username: string;
    displayName?: string | null;
    bio?: string | null;
    joinedAt: string;
    followerCount: number;
    followingCount: number;
    preferInteractionType: PreferInteractionType;
    profileEmoji: string;
    profileMediaId?: string | null;
    viewerId?: string | null;
    pinnedPostCollectionId?: string | null;
    blockingStatus?: {
      __typename?: 'BlockStatusInfo';
      blockStatus: BlockMode;
      isBlocked: boolean;
    } | null;
    pinnedPostCollection?: {
      __typename?: 'PostCollection';
      id: string;
      authorID: string;
      coverMediaID?: string | null;
      createdAt: string;
      description: string;
      followLevel: FollowLevel;
      postCount: number;
      title: string;
      updatedAt: string;
    } | null;
    profileFollowStatus?: {
      __typename?: 'ProfileFollowStatus';
      followingLevel: FollowLevel;
      isFollowedBy: boolean;
      isFollowing: boolean;
    } | null;
    profileMedia?: {
      __typename?: 'MediaMetadata';
      id: string;
      accountID: string;
      blurHash?: string | null;
      durationMs?: number | null;
      status: MediaStatus;
      type: MediaType;
      aspectRatio?: {
        __typename?: 'AspectRatio';
        numerator: number;
        denominator: number;
      } | null;
      files: Array<{
        __typename?: 'MediaFileMetadata';
        id: string;
        mediaId: string;
        profile: MediaFileProfile;
        contentType: string;
        url: string;
      }>;
    } | null;
    tags: Array<{
      __typename?: 'ProfileTag';
      id: string;
      name: string;
      memberCount: number;
      AuthorID: string;
      Author: {
        __typename?: 'Profile';
        id: string;
        username: string;
        displayName?: string | null;
        profileEmoji: string;
        profileMediaId?: string | null;
      };
    }>;
  }>;
  pageInfo: {
    __typename?: 'PageInfo';
    endCursor?: string | null;
    hasNextPage: boolean;
    totalCount?: number | null;
  };
};
type PostCollectionConnectionFieldsFragment = {
  __typename?: 'PostCollectionConnection';
  edges: Array<{
    __typename?: 'PostCollection';
    id: string;
    authorID: string;
    coverMediaID?: string | null;
    createdAt: string;
    description: string;
    followLevel: FollowLevel;
    postCount: number;
    title: string;
    updatedAt: string;
    author?: {
      __typename?: 'Profile';
      id: string;
      username: string;
      displayName?: string | null;
      profileEmoji: string;
      profileMediaId?: string | null;
    } | null;
    coverMedia?: {
      __typename?: 'MediaMetadata';
      id: string;
      accountID: string;
      blurHash?: string | null;
      durationMs?: number | null;
      status: MediaStatus;
      type: MediaType;
      aspectRatio?: {
        __typename?: 'AspectRatio';
        numerator: number;
        denominator: number;
      } | null;
      files: Array<{
        __typename?: 'MediaFileMetadata';
        id: string;
        mediaId: string;
        profile: MediaFileProfile;
        contentType: string;
        url: string;
      }>;
    } | null;
  }>;
  pageInfo: {
    __typename?: 'PageInfo';
    endCursor?: string | null;
    hasNextPage: boolean;
    totalCount?: number | null;
  };
};
type NotificationFieldsFragment = {
  __typename?: 'Notification';
  id: string;
  createdAt: string;
  isRead: boolean;
  message?: string | null;
  type: NotificationType;
  relatedPostID?: string | null;
  relatedPostCollectionID?: string | null;
  sourceProfileID?: string | null;
  targetProfileID?: string | null;
  reaction?: {
    __typename?: 'ReactionType';
    emojiValue?: string | null;
    nativeValue?: NativeReactionType | null;
  } | null;
  relatedPost?: {
    __typename?: 'Post';
    id: string;
    authorID: string;
    content: string;
    createdAt: string;
    parentPostId?: string | null;
    commentCount: number;
  } | null;
  relatedPostCollection?: {
    __typename?: 'PostCollection';
    id: string;
    authorID: string;
    coverMediaID?: string | null;
    createdAt: string;
    description: string;
    followLevel: FollowLevel;
    postCount: number;
    title: string;
    updatedAt: string;
  } | null;
  sourceProfile?: {
    __typename?: 'Profile';
    id: string;
    username: string;
    displayName?: string | null;
    profileEmoji: string;
    profileMediaId?: string | null;
  } | null;
  targetProfile?: {
    __typename?: 'Profile';
    id: string;
    username: string;
    displayName?: string | null;
    profileEmoji: string;
    profileMediaId?: string | null;
  } | null;
};
type NotificationConnectionFieldsFragment = {
  __typename?: 'NotificationConnection';
  edges: Array<{
    __typename?: 'Notification';
    id: string;
    createdAt: string;
    isRead: boolean;
    message?: string | null;
    type: NotificationType;
    relatedPostID?: string | null;
    relatedPostCollectionID?: string | null;
    sourceProfileID?: string | null;
    targetProfileID?: string | null;
    reaction?: {
      __typename?: 'ReactionType';
      emojiValue?: string | null;
      nativeValue?: NativeReactionType | null;
    } | null;
    relatedPost?: {
      __typename?: 'Post';
      id: string;
      authorID: string;
      content: string;
      createdAt: string;
      parentPostId?: string | null;
      commentCount: number;
    } | null;
    relatedPostCollection?: {
      __typename?: 'PostCollection';
      id: string;
      authorID: string;
      coverMediaID?: string | null;
      createdAt: string;
      description: string;
      followLevel: FollowLevel;
      postCount: number;
      title: string;
      updatedAt: string;
    } | null;
    sourceProfile?: {
      __typename?: 'Profile';
      id: string;
      username: string;
      displayName?: string | null;
      profileEmoji: string;
      profileMediaId?: string | null;
    } | null;
    targetProfile?: {
      __typename?: 'Profile';
      id: string;
      username: string;
      displayName?: string | null;
      profileEmoji: string;
      profileMediaId?: string | null;
    } | null;
  }>;
  pageInfo: {
    __typename?: 'PageInfo';
    endCursor?: string | null;
    hasNextPage: boolean;
    totalCount?: number | null;
  };
};
type ReactionDetailRecordFieldsFragment = {
  __typename?: 'ReactionDetailRecord';
  accountId: string;
  createdAt: string;
  profile?: {
    __typename?: 'Profile';
    id: string;
    username: string;
    displayName?: string | null;
    profileEmoji: string;
    profileMediaId?: string | null;
  } | null;
  type?: {
    __typename?: 'ReactionType';
    emojiValue?: string | null;
    nativeValue?: NativeReactionType | null;
  } | null;
};
type PostReactionDetailRecordConnectionFieldsFragment = {
  __typename?: 'PostReactionDetailRecordConnection';
  pageInfo: {
    __typename?: 'PageInfo';
    endCursor?: string | null;
    hasNextPage: boolean;
    totalCount?: number | null;
  };
  reactionRecords: Array<{
    __typename?: 'ReactionDetailRecord';
    accountId: string;
    createdAt: string;
    profile?: {
      __typename?: 'Profile';
      id: string;
      username: string;
      displayName?: string | null;
      profileEmoji: string;
      profileMediaId?: string | null;
    } | null;
    type?: {
      __typename?: 'ReactionType';
      emojiValue?: string | null;
      nativeValue?: NativeReactionType | null;
    } | null;
  }>;
};
type UserReactionStatisticsFieldsFragment = {
  __typename?: 'UserReactionStatistics';
  count: number;
  type: {
    __typename?: 'ReactionType';
    emojiValue?: string | null;
    nativeValue?: NativeReactionType | null;
  };
};
type UserReactionsStatisticsConnectionFieldsFragment = {
  __typename?: 'UserReactionsStatisticsConnection';
  pageInfo: {
    __typename?: 'PageInfo';
    endCursor?: string | null;
    hasNextPage: boolean;
    totalCount?: number | null;
  };
  reactions: Array<{
    __typename?: 'UserReactionStatistics';
    count: number;
    type: {
      __typename?: 'ReactionType';
      emojiValue?: string | null;
      nativeValue?: NativeReactionType | null;
    };
  }>;
};
type ProfileTagConnectionFieldsFragment = {
  __typename?: 'ProfileTagConnection';
  edges: Array<{
    __typename?: 'ProfileTag';
    id: string;
    name: string;
    memberCount: number;
    AuthorID: string;
    Author: {
      __typename?: 'Profile';
      id: string;
      username: string;
      displayName?: string | null;
      profileEmoji: string;
      profileMediaId?: string | null;
    };
  }>;
  pageInfo: {
    __typename?: 'PageInfo';
    endCursor?: string | null;
    hasNextPage: boolean;
    totalCount?: number | null;
  };
};
type PostDraftConnectionFieldsFragment = {
  __typename?: 'PostDraftConnection';
  edges: Array<{
    __typename?: 'PostDraft';
    id: string;
    createdAt: string;
    scheduledAt?: string | null;
    updatedAt: string;
    postRequests: Array<{
      __typename?: 'MonoPostDraft';
      content: string;
      postCollectionIds: Array<string>;
      attachmentIds: Array<{
        __typename?: 'AttachmentID';
        type: AttachmentType;
        embeddedCollectionId?: string | null;
        embeddedPostId?: string | null;
        embeddedProfileId?: string | null;
        linkUrl?: string | null;
        mediaId?: string | null;
      }>;
      attachments?: Array<{
        __typename?: 'Attachment';
        type: AttachmentType;
        linkPreview?: {
          __typename?: 'LinkPreview';
          Url: string;
          canonicalUrl?: string | null;
          resourceType?: LinkPreviewResourceType | null;
          summary?: string | null;
          thumbnailUrl?: string | null;
          title?: string | null;
        } | null;
        media?: {
          __typename?: 'MediaMetadata';
          id: string;
          accountID: string;
          blurHash?: string | null;
          durationMs?: number | null;
          status: MediaStatus;
          type: MediaType;
          aspectRatio?: {
            __typename?: 'AspectRatio';
            numerator: number;
            denominator: number;
          } | null;
          files: Array<{
            __typename?: 'MediaFileMetadata';
            id: string;
            mediaId: string;
            profile: MediaFileProfile;
            contentType: string;
            url: string;
          }>;
        } | null;
        embeddedProfile?: {
          __typename?: 'Profile';
          id: string;
          username: string;
          displayName?: string | null;
          profileEmoji: string;
          profileMediaId?: string | null;
        } | null;
        embeddedPost?: {
          __typename?: 'Post';
          id: string;
          authorID: string;
          content: string;
          createdAt: string;
          parentPostId?: string | null;
          commentCount: number;
        } | null;
        embeddedCollection?: {
          __typename?: 'PostCollection';
          id: string;
          authorID: string;
          coverMediaID?: string | null;
          createdAt: string;
          description: string;
          followLevel: FollowLevel;
          postCount: number;
          title: string;
          updatedAt: string;
        } | null;
      }> | null;
      postCollections: Array<{
        __typename?: 'PostCollection';
        id: string;
        authorID: string;
        coverMediaID?: string | null;
        createdAt: string;
        description: string;
        followLevel: FollowLevel;
        postCount: number;
        title: string;
        updatedAt: string;
      }>;
      postOptions?: {
        __typename?: 'PostOptions';
        commentPolicy: PostCommentPolicy;
        copyPolicy: PostCopyPolicy;
        reactionPolicy: PostReactionPolicy;
        postVisibility: {
          __typename?: 'PostVisibility';
          policy: PostVisibilityPolicy;
          profileTags: Array<string>;
          pushPolicy: PostPushPolicy;
        };
      } | null;
    }>;
  }>;
  pageInfo: {
    __typename?: 'PageInfo';
    endCursor?: string | null;
    hasNextPage: boolean;
    totalCount?: number | null;
  };
};
type GetAccountProfileQueryVariables = Exact<{
  accountId?: InputMaybe<Scalars['ID']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
}>;
type GetAccountProfileQuery = {
  __typename?: 'Query';
  getAccountProfile: {
    __typename?: 'Profile';
    id: string;
    username: string;
    displayName?: string | null;
    bio?: string | null;
    joinedAt: string;
    followerCount: number;
    followingCount: number;
    preferInteractionType: PreferInteractionType;
    profileEmoji: string;
    profileMediaId?: string | null;
    viewerId?: string | null;
    pinnedPostCollectionId?: string | null;
    blockingStatus?: {
      __typename?: 'BlockStatusInfo';
      blockStatus: BlockMode;
      isBlocked: boolean;
    } | null;
    pinnedPostCollection?: {
      __typename?: 'PostCollection';
      id: string;
      authorID: string;
      coverMediaID?: string | null;
      createdAt: string;
      description: string;
      followLevel: FollowLevel;
      postCount: number;
      title: string;
      updatedAt: string;
    } | null;
    profileFollowStatus?: {
      __typename?: 'ProfileFollowStatus';
      followingLevel: FollowLevel;
      isFollowedBy: boolean;
      isFollowing: boolean;
    } | null;
    profileMedia?: {
      __typename?: 'MediaMetadata';
      id: string;
      accountID: string;
      blurHash?: string | null;
      durationMs?: number | null;
      status: MediaStatus;
      type: MediaType;
      aspectRatio?: {
        __typename?: 'AspectRatio';
        numerator: number;
        denominator: number;
      } | null;
      files: Array<{
        __typename?: 'MediaFileMetadata';
        id: string;
        mediaId: string;
        profile: MediaFileProfile;
        contentType: string;
        url: string;
      }>;
    } | null;
    tags: Array<{
      __typename?: 'ProfileTag';
      id: string;
      name: string;
      memberCount: number;
      AuthorID: string;
      Author: {
        __typename?: 'Profile';
        id: string;
        username: string;
        displayName?: string | null;
        profileEmoji: string;
        profileMediaId?: string | null;
      };
    }>;
  };
};
type GetBlockedAccountsQueryVariables = Exact<{
  cursor?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;
type GetBlockedAccountsQuery = {
  __typename?: 'Query';
  getBlockedAccounts: {
    __typename?: 'ProfileConnection';
    edges: Array<{
      __typename?: 'Profile';
      id: string;
      username: string;
      displayName?: string | null;
      bio?: string | null;
      joinedAt: string;
      followerCount: number;
      followingCount: number;
      preferInteractionType: PreferInteractionType;
      profileEmoji: string;
      profileMediaId?: string | null;
      viewerId?: string | null;
      pinnedPostCollectionId?: string | null;
      blockingStatus?: {
        __typename?: 'BlockStatusInfo';
        blockStatus: BlockMode;
        isBlocked: boolean;
      } | null;
      pinnedPostCollection?: {
        __typename?: 'PostCollection';
        id: string;
        authorID: string;
        coverMediaID?: string | null;
        createdAt: string;
        description: string;
        followLevel: FollowLevel;
        postCount: number;
        title: string;
        updatedAt: string;
      } | null;
      profileFollowStatus?: {
        __typename?: 'ProfileFollowStatus';
        followingLevel: FollowLevel;
        isFollowedBy: boolean;
        isFollowing: boolean;
      } | null;
      profileMedia?: {
        __typename?: 'MediaMetadata';
        id: string;
        accountID: string;
        blurHash?: string | null;
        durationMs?: number | null;
        status: MediaStatus;
        type: MediaType;
        aspectRatio?: {
          __typename?: 'AspectRatio';
          numerator: number;
          denominator: number;
        } | null;
        files: Array<{
          __typename?: 'MediaFileMetadata';
          id: string;
          mediaId: string;
          profile: MediaFileProfile;
          contentType: string;
          url: string;
        }>;
      } | null;
      tags: Array<{
        __typename?: 'ProfileTag';
        id: string;
        name: string;
        memberCount: number;
        AuthorID: string;
        Author: {
          __typename?: 'Profile';
          id: string;
          username: string;
          displayName?: string | null;
          profileEmoji: string;
          profileMediaId?: string | null;
        };
      }>;
    }>;
    pageInfo: {
      __typename?: 'PageInfo';
      endCursor?: string | null;
      hasNextPage: boolean;
      totalCount?: number | null;
    };
  };
};
type GetCurrentAccountQueryVariables = Exact<{
  [key: string]: never;
}>;
type GetCurrentAccountQuery = {
  __typename?: 'Query';
  getCurrentAccount: {
    __typename?: 'Account';
    id: string;
    username: string;
    email: string;
    createdAt: string;
    lastLogin?: string | null;
    status: Status;
  };
};
type GetDiscussionsQueryVariables = Exact<{
  cursor?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;
type GetDiscussionsQuery = {
  __typename?: 'Query';
  getDiscussions: {
    __typename?: 'FeedPostConnection';
    edges: Array<{
      __typename?: 'FeedPostEdge';
      id: string;
      post: {
        __typename?: 'Post';
        id: string;
        authorID: string;
        content: string;
        createdAt: string;
        parentPostId?: string | null;
        commentCount: number;
        leafAncestorIds: Array<string>;
        rootAncestorIds: Array<string>;
        author: {
          __typename?: 'Profile';
          id: string;
          username: string;
          displayName?: string | null;
          profileEmoji: string;
          profileMediaId?: string | null;
        };
        attachmentIds: Array<{
          __typename?: 'AttachmentID';
          type: AttachmentType;
          embeddedCollectionId?: string | null;
          embeddedPostId?: string | null;
          embeddedProfileId?: string | null;
          linkUrl?: string | null;
          mediaId?: string | null;
        }>;
        attachments: Array<{
          __typename?: 'Attachment';
          type: AttachmentType;
          linkPreview?: {
            __typename?: 'LinkPreview';
            Url: string;
            canonicalUrl?: string | null;
            resourceType?: LinkPreviewResourceType | null;
            summary?: string | null;
            thumbnailUrl?: string | null;
            title?: string | null;
          } | null;
          media?: {
            __typename?: 'MediaMetadata';
            id: string;
            accountID: string;
            blurHash?: string | null;
            durationMs?: number | null;
            status: MediaStatus;
            type: MediaType;
            aspectRatio?: {
              __typename?: 'AspectRatio';
              numerator: number;
              denominator: number;
            } | null;
            files: Array<{
              __typename?: 'MediaFileMetadata';
              id: string;
              mediaId: string;
              profile: MediaFileProfile;
              contentType: string;
              url: string;
            }>;
          } | null;
          embeddedProfile?: {
            __typename?: 'Profile';
            id: string;
            username: string;
            displayName?: string | null;
            profileEmoji: string;
            profileMediaId?: string | null;
          } | null;
          embeddedPost?: {
            __typename?: 'Post';
            id: string;
            authorID: string;
            content: string;
            createdAt: string;
            parentPostId?: string | null;
            commentCount: number;
          } | null;
          embeddedCollection?: {
            __typename?: 'PostCollection';
            id: string;
            authorID: string;
            coverMediaID?: string | null;
            createdAt: string;
            description: string;
            followLevel: FollowLevel;
            postCount: number;
            title: string;
            updatedAt: string;
          } | null;
        }>;
        postCollections: Array<{
          __typename?: 'PostCollection';
          id: string;
          authorID: string;
          coverMediaID?: string | null;
          createdAt: string;
          description: string;
          followLevel: FollowLevel;
          postCount: number;
          title: string;
          updatedAt: string;
        }>;
        postOperationPermission: {
          __typename?: 'PostOperationPermission';
          canComment: boolean;
          canReact: boolean;
        };
        postOptions: {
          __typename?: 'PostOptions';
          commentPolicy: PostCommentPolicy;
          copyPolicy: PostCopyPolicy;
          reactionPolicy: PostReactionPolicy;
          postVisibility: {
            __typename?: 'PostVisibility';
            policy: PostVisibilityPolicy;
            profileTags: Array<string>;
            pushPolicy: PostPushPolicy;
          };
        };
        reactions?: {
          __typename?: 'PostReactionsConnection';
          postId: string;
          queryLimit: number;
          remainingCount: number;
          viewerId?: string | null;
          reactions: Array<{
            __typename?: 'ReactionSummary';
            count: number;
            isReactedByViewer: boolean;
            type: {
              __typename?: 'ReactionType';
              emojiValue?: string | null;
              nativeValue?: NativeReactionType | null;
            };
          }>;
        } | null;
      };
    }>;
    pageInfo: {
      __typename?: 'PageInfo';
      endCursor?: string | null;
      hasNextPage: boolean;
      totalCount?: number | null;
    };
  };
};
type GetFeedPostsQueryVariables = Exact<{
  cursor?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;
type GetFeedPostsQuery = {
  __typename?: 'Query';
  getFeedPosts: {
    __typename?: 'FeedPostConnection';
    edges: Array<{
      __typename?: 'FeedPostEdge';
      id: string;
      post: {
        __typename?: 'Post';
        id: string;
        authorID: string;
        content: string;
        createdAt: string;
        parentPostId?: string | null;
        commentCount: number;
        leafAncestorIds: Array<string>;
        rootAncestorIds: Array<string>;
        author: {
          __typename?: 'Profile';
          id: string;
          username: string;
          displayName?: string | null;
          profileEmoji: string;
          profileMediaId?: string | null;
        };
        attachmentIds: Array<{
          __typename?: 'AttachmentID';
          type: AttachmentType;
          embeddedCollectionId?: string | null;
          embeddedPostId?: string | null;
          embeddedProfileId?: string | null;
          linkUrl?: string | null;
          mediaId?: string | null;
        }>;
        attachments: Array<{
          __typename?: 'Attachment';
          type: AttachmentType;
          linkPreview?: {
            __typename?: 'LinkPreview';
            Url: string;
            canonicalUrl?: string | null;
            resourceType?: LinkPreviewResourceType | null;
            summary?: string | null;
            thumbnailUrl?: string | null;
            title?: string | null;
          } | null;
          media?: {
            __typename?: 'MediaMetadata';
            id: string;
            accountID: string;
            blurHash?: string | null;
            durationMs?: number | null;
            status: MediaStatus;
            type: MediaType;
            aspectRatio?: {
              __typename?: 'AspectRatio';
              numerator: number;
              denominator: number;
            } | null;
            files: Array<{
              __typename?: 'MediaFileMetadata';
              id: string;
              mediaId: string;
              profile: MediaFileProfile;
              contentType: string;
              url: string;
            }>;
          } | null;
          embeddedProfile?: {
            __typename?: 'Profile';
            id: string;
            username: string;
            displayName?: string | null;
            profileEmoji: string;
            profileMediaId?: string | null;
          } | null;
          embeddedPost?: {
            __typename?: 'Post';
            id: string;
            authorID: string;
            content: string;
            createdAt: string;
            parentPostId?: string | null;
            commentCount: number;
          } | null;
          embeddedCollection?: {
            __typename?: 'PostCollection';
            id: string;
            authorID: string;
            coverMediaID?: string | null;
            createdAt: string;
            description: string;
            followLevel: FollowLevel;
            postCount: number;
            title: string;
            updatedAt: string;
          } | null;
        }>;
        postCollections: Array<{
          __typename?: 'PostCollection';
          id: string;
          authorID: string;
          coverMediaID?: string | null;
          createdAt: string;
          description: string;
          followLevel: FollowLevel;
          postCount: number;
          title: string;
          updatedAt: string;
        }>;
        postOperationPermission: {
          __typename?: 'PostOperationPermission';
          canComment: boolean;
          canReact: boolean;
        };
        postOptions: {
          __typename?: 'PostOptions';
          commentPolicy: PostCommentPolicy;
          copyPolicy: PostCopyPolicy;
          reactionPolicy: PostReactionPolicy;
          postVisibility: {
            __typename?: 'PostVisibility';
            policy: PostVisibilityPolicy;
            profileTags: Array<string>;
            pushPolicy: PostPushPolicy;
          };
        };
        reactions?: {
          __typename?: 'PostReactionsConnection';
          postId: string;
          queryLimit: number;
          remainingCount: number;
          viewerId?: string | null;
          reactions: Array<{
            __typename?: 'ReactionSummary';
            count: number;
            isReactedByViewer: boolean;
            type: {
              __typename?: 'ReactionType';
              emojiValue?: string | null;
              nativeValue?: NativeReactionType | null;
            };
          }>;
        } | null;
      };
    }>;
    pageInfo: {
      __typename?: 'PageInfo';
      endCursor?: string | null;
      hasNextPage: boolean;
      totalCount?: number | null;
    };
  };
};
type GetFollowedAccountsQueryVariables = Exact<{
  accountId: Scalars['ID']['input'];
  cursor?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;
type GetFollowedAccountsQuery = {
  __typename?: 'Query';
  getFollowedAccounts: {
    __typename?: 'ProfileConnection';
    edges: Array<{
      __typename?: 'Profile';
      id: string;
      username: string;
      displayName?: string | null;
      bio?: string | null;
      joinedAt: string;
      followerCount: number;
      followingCount: number;
      preferInteractionType: PreferInteractionType;
      profileEmoji: string;
      profileMediaId?: string | null;
      viewerId?: string | null;
      pinnedPostCollectionId?: string | null;
      blockingStatus?: {
        __typename?: 'BlockStatusInfo';
        blockStatus: BlockMode;
        isBlocked: boolean;
      } | null;
      pinnedPostCollection?: {
        __typename?: 'PostCollection';
        id: string;
        authorID: string;
        coverMediaID?: string | null;
        createdAt: string;
        description: string;
        followLevel: FollowLevel;
        postCount: number;
        title: string;
        updatedAt: string;
      } | null;
      profileFollowStatus?: {
        __typename?: 'ProfileFollowStatus';
        followingLevel: FollowLevel;
        isFollowedBy: boolean;
        isFollowing: boolean;
      } | null;
      profileMedia?: {
        __typename?: 'MediaMetadata';
        id: string;
        accountID: string;
        blurHash?: string | null;
        durationMs?: number | null;
        status: MediaStatus;
        type: MediaType;
        aspectRatio?: {
          __typename?: 'AspectRatio';
          numerator: number;
          denominator: number;
        } | null;
        files: Array<{
          __typename?: 'MediaFileMetadata';
          id: string;
          mediaId: string;
          profile: MediaFileProfile;
          contentType: string;
          url: string;
        }>;
      } | null;
      tags: Array<{
        __typename?: 'ProfileTag';
        id: string;
        name: string;
        memberCount: number;
        AuthorID: string;
        Author: {
          __typename?: 'Profile';
          id: string;
          username: string;
          displayName?: string | null;
          profileEmoji: string;
          profileMediaId?: string | null;
        };
      }>;
    }>;
    pageInfo: {
      __typename?: 'PageInfo';
      endCursor?: string | null;
      hasNextPage: boolean;
      totalCount?: number | null;
    };
  };
};
type GetFollowedPostCollectionsQueryVariables = Exact<{
  cursor?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;
type GetFollowedPostCollectionsQuery = {
  __typename?: 'Query';
  getFollowedPostCollections: {
    __typename?: 'PostCollectionConnection';
    edges: Array<{
      __typename?: 'PostCollection';
      id: string;
      authorID: string;
      coverMediaID?: string | null;
      createdAt: string;
      description: string;
      followLevel: FollowLevel;
      postCount: number;
      title: string;
      updatedAt: string;
      author?: {
        __typename?: 'Profile';
        id: string;
        username: string;
        displayName?: string | null;
        profileEmoji: string;
        profileMediaId?: string | null;
      } | null;
      coverMedia?: {
        __typename?: 'MediaMetadata';
        id: string;
        accountID: string;
        blurHash?: string | null;
        durationMs?: number | null;
        status: MediaStatus;
        type: MediaType;
        aspectRatio?: {
          __typename?: 'AspectRatio';
          numerator: number;
          denominator: number;
        } | null;
        files: Array<{
          __typename?: 'MediaFileMetadata';
          id: string;
          mediaId: string;
          profile: MediaFileProfile;
          contentType: string;
          url: string;
        }>;
      } | null;
    }>;
    pageInfo: {
      __typename?: 'PageInfo';
      endCursor?: string | null;
      hasNextPage: boolean;
      totalCount?: number | null;
    };
  };
};
type GetFollowingAccountsQueryVariables = Exact<{
  accountId: Scalars['ID']['input'];
  cursor?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;
type GetFollowingAccountsQuery = {
  __typename?: 'Query';
  getFollowingAccounts: {
    __typename?: 'ProfileConnection';
    edges: Array<{
      __typename?: 'Profile';
      id: string;
      username: string;
      displayName?: string | null;
      bio?: string | null;
      joinedAt: string;
      followerCount: number;
      followingCount: number;
      preferInteractionType: PreferInteractionType;
      profileEmoji: string;
      profileMediaId?: string | null;
      viewerId?: string | null;
      pinnedPostCollectionId?: string | null;
      blockingStatus?: {
        __typename?: 'BlockStatusInfo';
        blockStatus: BlockMode;
        isBlocked: boolean;
      } | null;
      pinnedPostCollection?: {
        __typename?: 'PostCollection';
        id: string;
        authorID: string;
        coverMediaID?: string | null;
        createdAt: string;
        description: string;
        followLevel: FollowLevel;
        postCount: number;
        title: string;
        updatedAt: string;
      } | null;
      profileFollowStatus?: {
        __typename?: 'ProfileFollowStatus';
        followingLevel: FollowLevel;
        isFollowedBy: boolean;
        isFollowing: boolean;
      } | null;
      profileMedia?: {
        __typename?: 'MediaMetadata';
        id: string;
        accountID: string;
        blurHash?: string | null;
        durationMs?: number | null;
        status: MediaStatus;
        type: MediaType;
        aspectRatio?: {
          __typename?: 'AspectRatio';
          numerator: number;
          denominator: number;
        } | null;
        files: Array<{
          __typename?: 'MediaFileMetadata';
          id: string;
          mediaId: string;
          profile: MediaFileProfile;
          contentType: string;
          url: string;
        }>;
      } | null;
      tags: Array<{
        __typename?: 'ProfileTag';
        id: string;
        name: string;
        memberCount: number;
        AuthorID: string;
        Author: {
          __typename?: 'Profile';
          id: string;
          username: string;
          displayName?: string | null;
          profileEmoji: string;
          profileMediaId?: string | null;
        };
      }>;
    }>;
    pageInfo: {
      __typename?: 'PageInfo';
      endCursor?: string | null;
      hasNextPage: boolean;
      totalCount?: number | null;
    };
  };
};
type GetFollowingPostsQueryVariables = Exact<{
  cursor?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;
type GetFollowingPostsQuery = {
  __typename?: 'Query';
  getFollowingPosts: {
    __typename?: 'FeedPostConnection';
    edges: Array<{
      __typename?: 'FeedPostEdge';
      id: string;
      post: {
        __typename?: 'Post';
        id: string;
        authorID: string;
        content: string;
        createdAt: string;
        parentPostId?: string | null;
        commentCount: number;
        leafAncestorIds: Array<string>;
        rootAncestorIds: Array<string>;
        author: {
          __typename?: 'Profile';
          id: string;
          username: string;
          displayName?: string | null;
          profileEmoji: string;
          profileMediaId?: string | null;
        };
        attachmentIds: Array<{
          __typename?: 'AttachmentID';
          type: AttachmentType;
          embeddedCollectionId?: string | null;
          embeddedPostId?: string | null;
          embeddedProfileId?: string | null;
          linkUrl?: string | null;
          mediaId?: string | null;
        }>;
        attachments: Array<{
          __typename?: 'Attachment';
          type: AttachmentType;
          linkPreview?: {
            __typename?: 'LinkPreview';
            Url: string;
            canonicalUrl?: string | null;
            resourceType?: LinkPreviewResourceType | null;
            summary?: string | null;
            thumbnailUrl?: string | null;
            title?: string | null;
          } | null;
          media?: {
            __typename?: 'MediaMetadata';
            id: string;
            accountID: string;
            blurHash?: string | null;
            durationMs?: number | null;
            status: MediaStatus;
            type: MediaType;
            aspectRatio?: {
              __typename?: 'AspectRatio';
              numerator: number;
              denominator: number;
            } | null;
            files: Array<{
              __typename?: 'MediaFileMetadata';
              id: string;
              mediaId: string;
              profile: MediaFileProfile;
              contentType: string;
              url: string;
            }>;
          } | null;
          embeddedProfile?: {
            __typename?: 'Profile';
            id: string;
            username: string;
            displayName?: string | null;
            profileEmoji: string;
            profileMediaId?: string | null;
          } | null;
          embeddedPost?: {
            __typename?: 'Post';
            id: string;
            authorID: string;
            content: string;
            createdAt: string;
            parentPostId?: string | null;
            commentCount: number;
          } | null;
          embeddedCollection?: {
            __typename?: 'PostCollection';
            id: string;
            authorID: string;
            coverMediaID?: string | null;
            createdAt: string;
            description: string;
            followLevel: FollowLevel;
            postCount: number;
            title: string;
            updatedAt: string;
          } | null;
        }>;
        postCollections: Array<{
          __typename?: 'PostCollection';
          id: string;
          authorID: string;
          coverMediaID?: string | null;
          createdAt: string;
          description: string;
          followLevel: FollowLevel;
          postCount: number;
          title: string;
          updatedAt: string;
        }>;
        postOperationPermission: {
          __typename?: 'PostOperationPermission';
          canComment: boolean;
          canReact: boolean;
        };
        postOptions: {
          __typename?: 'PostOptions';
          commentPolicy: PostCommentPolicy;
          copyPolicy: PostCopyPolicy;
          reactionPolicy: PostReactionPolicy;
          postVisibility: {
            __typename?: 'PostVisibility';
            policy: PostVisibilityPolicy;
            profileTags: Array<string>;
            pushPolicy: PostPushPolicy;
          };
        };
        reactions?: {
          __typename?: 'PostReactionsConnection';
          postId: string;
          queryLimit: number;
          remainingCount: number;
          viewerId?: string | null;
          reactions: Array<{
            __typename?: 'ReactionSummary';
            count: number;
            isReactedByViewer: boolean;
            type: {
              __typename?: 'ReactionType';
              emojiValue?: string | null;
              nativeValue?: NativeReactionType | null;
            };
          }>;
        } | null;
      };
    }>;
    pageInfo: {
      __typename?: 'PageInfo';
      endCursor?: string | null;
      hasNextPage: boolean;
      totalCount?: number | null;
    };
  };
};
type GetHistoryPostsQueryVariables = Exact<{
  cursor?: InputMaybe<Scalars['String']['input']>;
  includeOwnPosts?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;
type GetHistoryPostsQuery = {
  __typename?: 'Query';
  getHistoryPosts: {
    __typename?: 'FeedPostConnection';
    edges: Array<{
      __typename?: 'FeedPostEdge';
      id: string;
      post: {
        __typename?: 'Post';
        id: string;
        authorID: string;
        content: string;
        createdAt: string;
        parentPostId?: string | null;
        commentCount: number;
        leafAncestorIds: Array<string>;
        rootAncestorIds: Array<string>;
        author: {
          __typename?: 'Profile';
          id: string;
          username: string;
          displayName?: string | null;
          profileEmoji: string;
          profileMediaId?: string | null;
        };
        attachmentIds: Array<{
          __typename?: 'AttachmentID';
          type: AttachmentType;
          embeddedCollectionId?: string | null;
          embeddedPostId?: string | null;
          embeddedProfileId?: string | null;
          linkUrl?: string | null;
          mediaId?: string | null;
        }>;
        attachments: Array<{
          __typename?: 'Attachment';
          type: AttachmentType;
          linkPreview?: {
            __typename?: 'LinkPreview';
            Url: string;
            canonicalUrl?: string | null;
            resourceType?: LinkPreviewResourceType | null;
            summary?: string | null;
            thumbnailUrl?: string | null;
            title?: string | null;
          } | null;
          media?: {
            __typename?: 'MediaMetadata';
            id: string;
            accountID: string;
            blurHash?: string | null;
            durationMs?: number | null;
            status: MediaStatus;
            type: MediaType;
            aspectRatio?: {
              __typename?: 'AspectRatio';
              numerator: number;
              denominator: number;
            } | null;
            files: Array<{
              __typename?: 'MediaFileMetadata';
              id: string;
              mediaId: string;
              profile: MediaFileProfile;
              contentType: string;
              url: string;
            }>;
          } | null;
          embeddedProfile?: {
            __typename?: 'Profile';
            id: string;
            username: string;
            displayName?: string | null;
            profileEmoji: string;
            profileMediaId?: string | null;
          } | null;
          embeddedPost?: {
            __typename?: 'Post';
            id: string;
            authorID: string;
            content: string;
            createdAt: string;
            parentPostId?: string | null;
            commentCount: number;
          } | null;
          embeddedCollection?: {
            __typename?: 'PostCollection';
            id: string;
            authorID: string;
            coverMediaID?: string | null;
            createdAt: string;
            description: string;
            followLevel: FollowLevel;
            postCount: number;
            title: string;
            updatedAt: string;
          } | null;
        }>;
        postCollections: Array<{
          __typename?: 'PostCollection';
          id: string;
          authorID: string;
          coverMediaID?: string | null;
          createdAt: string;
          description: string;
          followLevel: FollowLevel;
          postCount: number;
          title: string;
          updatedAt: string;
        }>;
        postOperationPermission: {
          __typename?: 'PostOperationPermission';
          canComment: boolean;
          canReact: boolean;
        };
        postOptions: {
          __typename?: 'PostOptions';
          commentPolicy: PostCommentPolicy;
          copyPolicy: PostCopyPolicy;
          reactionPolicy: PostReactionPolicy;
          postVisibility: {
            __typename?: 'PostVisibility';
            policy: PostVisibilityPolicy;
            profileTags: Array<string>;
            pushPolicy: PostPushPolicy;
          };
        };
        reactions?: {
          __typename?: 'PostReactionsConnection';
          postId: string;
          queryLimit: number;
          remainingCount: number;
          viewerId?: string | null;
          reactions: Array<{
            __typename?: 'ReactionSummary';
            count: number;
            isReactedByViewer: boolean;
            type: {
              __typename?: 'ReactionType';
              emojiValue?: string | null;
              nativeValue?: NativeReactionType | null;
            };
          }>;
        } | null;
      };
    }>;
    pageInfo: {
      __typename?: 'PageInfo';
      endCursor?: string | null;
      hasNextPage: boolean;
      totalCount?: number | null;
    };
  };
};
type GetLinkPreviewQueryVariables = Exact<{
  url: Scalars['String']['input'];
}>;
type GetLinkPreviewQuery = {
  __typename?: 'Query';
  getLinkPreview?: {
    __typename?: 'LinkPreview';
    Url: string;
    canonicalUrl?: string | null;
    resourceType?: LinkPreviewResourceType | null;
    summary?: string | null;
    thumbnailUrl?: string | null;
    title?: string | null;
  } | null;
};
type GetMediaQueryVariables = Exact<{
  mediaId: Scalars['ID']['input'];
}>;
type GetMediaQuery = {
  __typename?: 'Query';
  getMedia: {
    __typename?: 'MediaMetadata';
    id: string;
    accountID: string;
    blurHash?: string | null;
    durationMs?: number | null;
    status: MediaStatus;
    type: MediaType;
    aspectRatio?: {
      __typename?: 'AspectRatio';
      numerator: number;
      denominator: number;
    } | null;
    files: Array<{
      __typename?: 'MediaFileMetadata';
      id: string;
      mediaId: string;
      profile: MediaFileProfile;
      contentType: string;
      url: string;
    }>;
  };
};
type GetMutualFollowersQueryVariables = Exact<{
  accountId: Scalars['ID']['input'];
  cursor?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;
type GetMutualFollowersQuery = {
  __typename?: 'Query';
  getMutualFollowers: {
    __typename?: 'ProfileConnection';
    edges: Array<{
      __typename?: 'Profile';
      id: string;
      username: string;
      displayName?: string | null;
      bio?: string | null;
      joinedAt: string;
      followerCount: number;
      followingCount: number;
      preferInteractionType: PreferInteractionType;
      profileEmoji: string;
      profileMediaId?: string | null;
      viewerId?: string | null;
      pinnedPostCollectionId?: string | null;
      blockingStatus?: {
        __typename?: 'BlockStatusInfo';
        blockStatus: BlockMode;
        isBlocked: boolean;
      } | null;
      pinnedPostCollection?: {
        __typename?: 'PostCollection';
        id: string;
        authorID: string;
        coverMediaID?: string | null;
        createdAt: string;
        description: string;
        followLevel: FollowLevel;
        postCount: number;
        title: string;
        updatedAt: string;
      } | null;
      profileFollowStatus?: {
        __typename?: 'ProfileFollowStatus';
        followingLevel: FollowLevel;
        isFollowedBy: boolean;
        isFollowing: boolean;
      } | null;
      profileMedia?: {
        __typename?: 'MediaMetadata';
        id: string;
        accountID: string;
        blurHash?: string | null;
        durationMs?: number | null;
        status: MediaStatus;
        type: MediaType;
        aspectRatio?: {
          __typename?: 'AspectRatio';
          numerator: number;
          denominator: number;
        } | null;
        files: Array<{
          __typename?: 'MediaFileMetadata';
          id: string;
          mediaId: string;
          profile: MediaFileProfile;
          contentType: string;
          url: string;
        }>;
      } | null;
      tags: Array<{
        __typename?: 'ProfileTag';
        id: string;
        name: string;
        memberCount: number;
        AuthorID: string;
        Author: {
          __typename?: 'Profile';
          id: string;
          username: string;
          displayName?: string | null;
          profileEmoji: string;
          profileMediaId?: string | null;
        };
      }>;
    }>;
    pageInfo: {
      __typename?: 'PageInfo';
      endCursor?: string | null;
      hasNextPage: boolean;
      totalCount?: number | null;
    };
  };
};
type GetMyPostCollectionsQueryVariables = Exact<{
  cursor?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;
type GetMyPostCollectionsQuery = {
  __typename?: 'Query';
  getMyPostCollections: {
    __typename?: 'PostCollectionConnection';
    edges: Array<{
      __typename?: 'PostCollection';
      id: string;
      authorID: string;
      coverMediaID?: string | null;
      createdAt: string;
      description: string;
      followLevel: FollowLevel;
      postCount: number;
      title: string;
      updatedAt: string;
      author?: {
        __typename?: 'Profile';
        id: string;
        username: string;
        displayName?: string | null;
        profileEmoji: string;
        profileMediaId?: string | null;
      } | null;
      coverMedia?: {
        __typename?: 'MediaMetadata';
        id: string;
        accountID: string;
        blurHash?: string | null;
        durationMs?: number | null;
        status: MediaStatus;
        type: MediaType;
        aspectRatio?: {
          __typename?: 'AspectRatio';
          numerator: number;
          denominator: number;
        } | null;
        files: Array<{
          __typename?: 'MediaFileMetadata';
          id: string;
          mediaId: string;
          profile: MediaFileProfile;
          contentType: string;
          url: string;
        }>;
      } | null;
    }>;
    pageInfo: {
      __typename?: 'PageInfo';
      endCursor?: string | null;
      hasNextPage: boolean;
      totalCount?: number | null;
    };
  };
};
type GetNotificationsQueryVariables = Exact<{
  cursor?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<NotificationFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;
type GetNotificationsQuery = {
  __typename?: 'Query';
  getNotifications: {
    __typename?: 'NotificationConnection';
    edges: Array<{
      __typename?: 'Notification';
      id: string;
      createdAt: string;
      isRead: boolean;
      message?: string | null;
      type: NotificationType;
      relatedPostID?: string | null;
      relatedPostCollectionID?: string | null;
      sourceProfileID?: string | null;
      targetProfileID?: string | null;
      reaction?: {
        __typename?: 'ReactionType';
        emojiValue?: string | null;
        nativeValue?: NativeReactionType | null;
      } | null;
      relatedPost?: {
        __typename?: 'Post';
        id: string;
        authorID: string;
        content: string;
        createdAt: string;
        parentPostId?: string | null;
        commentCount: number;
      } | null;
      relatedPostCollection?: {
        __typename?: 'PostCollection';
        id: string;
        authorID: string;
        coverMediaID?: string | null;
        createdAt: string;
        description: string;
        followLevel: FollowLevel;
        postCount: number;
        title: string;
        updatedAt: string;
      } | null;
      sourceProfile?: {
        __typename?: 'Profile';
        id: string;
        username: string;
        displayName?: string | null;
        profileEmoji: string;
        profileMediaId?: string | null;
      } | null;
      targetProfile?: {
        __typename?: 'Profile';
        id: string;
        username: string;
        displayName?: string | null;
        profileEmoji: string;
        profileMediaId?: string | null;
      } | null;
    }>;
    pageInfo: {
      __typename?: 'PageInfo';
      endCursor?: string | null;
      hasNextPage: boolean;
      totalCount?: number | null;
    };
  };
};
type GetPopularPostsQueryVariables = Exact<{
  cursor?: InputMaybe<Scalars['String']['input']>;
  language?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;
type GetPopularPostsQuery = {
  __typename?: 'Query';
  getPopularPosts: {
    __typename?: 'FeedPostConnection';
    edges: Array<{
      __typename?: 'FeedPostEdge';
      id: string;
      post: {
        __typename?: 'Post';
        id: string;
        authorID: string;
        content: string;
        createdAt: string;
        parentPostId?: string | null;
        commentCount: number;
        leafAncestorIds: Array<string>;
        rootAncestorIds: Array<string>;
        author: {
          __typename?: 'Profile';
          id: string;
          username: string;
          displayName?: string | null;
          profileEmoji: string;
          profileMediaId?: string | null;
        };
        attachmentIds: Array<{
          __typename?: 'AttachmentID';
          type: AttachmentType;
          embeddedCollectionId?: string | null;
          embeddedPostId?: string | null;
          embeddedProfileId?: string | null;
          linkUrl?: string | null;
          mediaId?: string | null;
        }>;
        attachments: Array<{
          __typename?: 'Attachment';
          type: AttachmentType;
          linkPreview?: {
            __typename?: 'LinkPreview';
            Url: string;
            canonicalUrl?: string | null;
            resourceType?: LinkPreviewResourceType | null;
            summary?: string | null;
            thumbnailUrl?: string | null;
            title?: string | null;
          } | null;
          media?: {
            __typename?: 'MediaMetadata';
            id: string;
            accountID: string;
            blurHash?: string | null;
            durationMs?: number | null;
            status: MediaStatus;
            type: MediaType;
            aspectRatio?: {
              __typename?: 'AspectRatio';
              numerator: number;
              denominator: number;
            } | null;
            files: Array<{
              __typename?: 'MediaFileMetadata';
              id: string;
              mediaId: string;
              profile: MediaFileProfile;
              contentType: string;
              url: string;
            }>;
          } | null;
          embeddedProfile?: {
            __typename?: 'Profile';
            id: string;
            username: string;
            displayName?: string | null;
            profileEmoji: string;
            profileMediaId?: string | null;
          } | null;
          embeddedPost?: {
            __typename?: 'Post';
            id: string;
            authorID: string;
            content: string;
            createdAt: string;
            parentPostId?: string | null;
            commentCount: number;
          } | null;
          embeddedCollection?: {
            __typename?: 'PostCollection';
            id: string;
            authorID: string;
            coverMediaID?: string | null;
            createdAt: string;
            description: string;
            followLevel: FollowLevel;
            postCount: number;
            title: string;
            updatedAt: string;
          } | null;
        }>;
        postCollections: Array<{
          __typename?: 'PostCollection';
          id: string;
          authorID: string;
          coverMediaID?: string | null;
          createdAt: string;
          description: string;
          followLevel: FollowLevel;
          postCount: number;
          title: string;
          updatedAt: string;
        }>;
        postOperationPermission: {
          __typename?: 'PostOperationPermission';
          canComment: boolean;
          canReact: boolean;
        };
        postOptions: {
          __typename?: 'PostOptions';
          commentPolicy: PostCommentPolicy;
          copyPolicy: PostCopyPolicy;
          reactionPolicy: PostReactionPolicy;
          postVisibility: {
            __typename?: 'PostVisibility';
            policy: PostVisibilityPolicy;
            profileTags: Array<string>;
            pushPolicy: PostPushPolicy;
          };
        };
        reactions?: {
          __typename?: 'PostReactionsConnection';
          postId: string;
          queryLimit: number;
          remainingCount: number;
          viewerId?: string | null;
          reactions: Array<{
            __typename?: 'ReactionSummary';
            count: number;
            isReactedByViewer: boolean;
            type: {
              __typename?: 'ReactionType';
              emojiValue?: string | null;
              nativeValue?: NativeReactionType | null;
            };
          }>;
        } | null;
      };
    }>;
    pageInfo: {
      __typename?: 'PageInfo';
      endCursor?: string | null;
      hasNextPage: boolean;
      totalCount?: number | null;
    };
  };
};
type GetPostQueryVariables = Exact<{
  postId: Scalars['ID']['input'];
}>;
type GetPostQuery = {
  __typename?: 'Query';
  getPost?: {
    __typename?: 'Post';
    id: string;
    authorID: string;
    content: string;
    createdAt: string;
    parentPostId?: string | null;
    commentCount: number;
    leafAncestorIds: Array<string>;
    rootAncestorIds: Array<string>;
    author: {
      __typename?: 'Profile';
      id: string;
      username: string;
      displayName?: string | null;
      profileEmoji: string;
      profileMediaId?: string | null;
    };
    attachmentIds: Array<{
      __typename?: 'AttachmentID';
      type: AttachmentType;
      embeddedCollectionId?: string | null;
      embeddedPostId?: string | null;
      embeddedProfileId?: string | null;
      linkUrl?: string | null;
      mediaId?: string | null;
    }>;
    attachments: Array<{
      __typename?: 'Attachment';
      type: AttachmentType;
      linkPreview?: {
        __typename?: 'LinkPreview';
        Url: string;
        canonicalUrl?: string | null;
        resourceType?: LinkPreviewResourceType | null;
        summary?: string | null;
        thumbnailUrl?: string | null;
        title?: string | null;
      } | null;
      media?: {
        __typename?: 'MediaMetadata';
        id: string;
        accountID: string;
        blurHash?: string | null;
        durationMs?: number | null;
        status: MediaStatus;
        type: MediaType;
        aspectRatio?: {
          __typename?: 'AspectRatio';
          numerator: number;
          denominator: number;
        } | null;
        files: Array<{
          __typename?: 'MediaFileMetadata';
          id: string;
          mediaId: string;
          profile: MediaFileProfile;
          contentType: string;
          url: string;
        }>;
      } | null;
      embeddedProfile?: {
        __typename?: 'Profile';
        id: string;
        username: string;
        displayName?: string | null;
        profileEmoji: string;
        profileMediaId?: string | null;
      } | null;
      embeddedPost?: {
        __typename?: 'Post';
        id: string;
        authorID: string;
        content: string;
        createdAt: string;
        parentPostId?: string | null;
        commentCount: number;
      } | null;
      embeddedCollection?: {
        __typename?: 'PostCollection';
        id: string;
        authorID: string;
        coverMediaID?: string | null;
        createdAt: string;
        description: string;
        followLevel: FollowLevel;
        postCount: number;
        title: string;
        updatedAt: string;
      } | null;
    }>;
    postCollections: Array<{
      __typename?: 'PostCollection';
      id: string;
      authorID: string;
      coverMediaID?: string | null;
      createdAt: string;
      description: string;
      followLevel: FollowLevel;
      postCount: number;
      title: string;
      updatedAt: string;
    }>;
    postOperationPermission: {
      __typename?: 'PostOperationPermission';
      canComment: boolean;
      canReact: boolean;
    };
    postOptions: {
      __typename?: 'PostOptions';
      commentPolicy: PostCommentPolicy;
      copyPolicy: PostCopyPolicy;
      reactionPolicy: PostReactionPolicy;
      postVisibility: {
        __typename?: 'PostVisibility';
        policy: PostVisibilityPolicy;
        profileTags: Array<string>;
        pushPolicy: PostPushPolicy;
      };
    };
    reactions?: {
      __typename?: 'PostReactionsConnection';
      postId: string;
      queryLimit: number;
      remainingCount: number;
      viewerId?: string | null;
      reactions: Array<{
        __typename?: 'ReactionSummary';
        count: number;
        isReactedByViewer: boolean;
        type: {
          __typename?: 'ReactionType';
          emojiValue?: string | null;
          nativeValue?: NativeReactionType | null;
        };
      }>;
    } | null;
  } | null;
};
type GetPostCollectionQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;
type GetPostCollectionQuery = {
  __typename?: 'Query';
  getPostCollection?: {
    __typename?: 'PostCollection';
    id: string;
    authorID: string;
    coverMediaID?: string | null;
    createdAt: string;
    description: string;
    followLevel: FollowLevel;
    postCount: number;
    title: string;
    updatedAt: string;
    author?: {
      __typename?: 'Profile';
      id: string;
      username: string;
      displayName?: string | null;
      profileEmoji: string;
      profileMediaId?: string | null;
    } | null;
    coverMedia?: {
      __typename?: 'MediaMetadata';
      id: string;
      accountID: string;
      blurHash?: string | null;
      durationMs?: number | null;
      status: MediaStatus;
      type: MediaType;
      aspectRatio?: {
        __typename?: 'AspectRatio';
        numerator: number;
        denominator: number;
      } | null;
      files: Array<{
        __typename?: 'MediaFileMetadata';
        id: string;
        mediaId: string;
        profile: MediaFileProfile;
        contentType: string;
        url: string;
      }>;
    } | null;
  } | null;
};
type GetPostCollectionsByAuthorQueryVariables = Exact<{
  authorID: Scalars['ID']['input'];
  cursor?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;
type GetPostCollectionsByAuthorQuery = {
  __typename?: 'Query';
  getPostCollectionsByAuthor: {
    __typename?: 'PostCollectionConnection';
    edges: Array<{
      __typename?: 'PostCollection';
      id: string;
      authorID: string;
      coverMediaID?: string | null;
      createdAt: string;
      description: string;
      followLevel: FollowLevel;
      postCount: number;
      title: string;
      updatedAt: string;
      author?: {
        __typename?: 'Profile';
        id: string;
        username: string;
        displayName?: string | null;
        profileEmoji: string;
        profileMediaId?: string | null;
      } | null;
      coverMedia?: {
        __typename?: 'MediaMetadata';
        id: string;
        accountID: string;
        blurHash?: string | null;
        durationMs?: number | null;
        status: MediaStatus;
        type: MediaType;
        aspectRatio?: {
          __typename?: 'AspectRatio';
          numerator: number;
          denominator: number;
        } | null;
        files: Array<{
          __typename?: 'MediaFileMetadata';
          id: string;
          mediaId: string;
          profile: MediaFileProfile;
          contentType: string;
          url: string;
        }>;
      } | null;
    }>;
    pageInfo: {
      __typename?: 'PageInfo';
      endCursor?: string | null;
      hasNextPage: boolean;
      totalCount?: number | null;
    };
  };
};
type GetPostDraftQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;
type GetPostDraftQuery = {
  __typename?: 'Query';
  getPostDraft?: {
    __typename?: 'PostDraft';
    id: string;
    createdAt: string;
    scheduledAt?: string | null;
    updatedAt: string;
    postRequests: Array<{
      __typename?: 'MonoPostDraft';
      content: string;
      postCollectionIds: Array<string>;
      attachmentIds: Array<{
        __typename?: 'AttachmentID';
        type: AttachmentType;
        embeddedCollectionId?: string | null;
        embeddedPostId?: string | null;
        embeddedProfileId?: string | null;
        linkUrl?: string | null;
        mediaId?: string | null;
      }>;
      attachments?: Array<{
        __typename?: 'Attachment';
        type: AttachmentType;
        linkPreview?: {
          __typename?: 'LinkPreview';
          Url: string;
          canonicalUrl?: string | null;
          resourceType?: LinkPreviewResourceType | null;
          summary?: string | null;
          thumbnailUrl?: string | null;
          title?: string | null;
        } | null;
        media?: {
          __typename?: 'MediaMetadata';
          id: string;
          accountID: string;
          blurHash?: string | null;
          durationMs?: number | null;
          status: MediaStatus;
          type: MediaType;
          aspectRatio?: {
            __typename?: 'AspectRatio';
            numerator: number;
            denominator: number;
          } | null;
          files: Array<{
            __typename?: 'MediaFileMetadata';
            id: string;
            mediaId: string;
            profile: MediaFileProfile;
            contentType: string;
            url: string;
          }>;
        } | null;
        embeddedProfile?: {
          __typename?: 'Profile';
          id: string;
          username: string;
          displayName?: string | null;
          profileEmoji: string;
          profileMediaId?: string | null;
        } | null;
        embeddedPost?: {
          __typename?: 'Post';
          id: string;
          authorID: string;
          content: string;
          createdAt: string;
          parentPostId?: string | null;
          commentCount: number;
        } | null;
        embeddedCollection?: {
          __typename?: 'PostCollection';
          id: string;
          authorID: string;
          coverMediaID?: string | null;
          createdAt: string;
          description: string;
          followLevel: FollowLevel;
          postCount: number;
          title: string;
          updatedAt: string;
        } | null;
      }> | null;
      postCollections: Array<{
        __typename?: 'PostCollection';
        id: string;
        authorID: string;
        coverMediaID?: string | null;
        createdAt: string;
        description: string;
        followLevel: FollowLevel;
        postCount: number;
        title: string;
        updatedAt: string;
      }>;
      postOptions?: {
        __typename?: 'PostOptions';
        commentPolicy: PostCommentPolicy;
        copyPolicy: PostCopyPolicy;
        reactionPolicy: PostReactionPolicy;
        postVisibility: {
          __typename?: 'PostVisibility';
          policy: PostVisibilityPolicy;
          profileTags: Array<string>;
          pushPolicy: PostPushPolicy;
        };
      } | null;
    }>;
  } | null;
};
type GetPostDraftsQueryVariables = Exact<{
  cursor?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<PostDraftFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;
type GetPostDraftsQuery = {
  __typename?: 'Query';
  getPostDrafts: {
    __typename?: 'PostDraftConnection';
    edges: Array<{
      __typename?: 'PostDraft';
      id: string;
      createdAt: string;
      scheduledAt?: string | null;
      updatedAt: string;
      postRequests: Array<{
        __typename?: 'MonoPostDraft';
        content: string;
        postCollectionIds: Array<string>;
        attachmentIds: Array<{
          __typename?: 'AttachmentID';
          type: AttachmentType;
          embeddedCollectionId?: string | null;
          embeddedPostId?: string | null;
          embeddedProfileId?: string | null;
          linkUrl?: string | null;
          mediaId?: string | null;
        }>;
        attachments?: Array<{
          __typename?: 'Attachment';
          type: AttachmentType;
          linkPreview?: {
            __typename?: 'LinkPreview';
            Url: string;
            canonicalUrl?: string | null;
            resourceType?: LinkPreviewResourceType | null;
            summary?: string | null;
            thumbnailUrl?: string | null;
            title?: string | null;
          } | null;
          media?: {
            __typename?: 'MediaMetadata';
            id: string;
            accountID: string;
            blurHash?: string | null;
            durationMs?: number | null;
            status: MediaStatus;
            type: MediaType;
            aspectRatio?: {
              __typename?: 'AspectRatio';
              numerator: number;
              denominator: number;
            } | null;
            files: Array<{
              __typename?: 'MediaFileMetadata';
              id: string;
              mediaId: string;
              profile: MediaFileProfile;
              contentType: string;
              url: string;
            }>;
          } | null;
          embeddedProfile?: {
            __typename?: 'Profile';
            id: string;
            username: string;
            displayName?: string | null;
            profileEmoji: string;
            profileMediaId?: string | null;
          } | null;
          embeddedPost?: {
            __typename?: 'Post';
            id: string;
            authorID: string;
            content: string;
            createdAt: string;
            parentPostId?: string | null;
            commentCount: number;
          } | null;
          embeddedCollection?: {
            __typename?: 'PostCollection';
            id: string;
            authorID: string;
            coverMediaID?: string | null;
            createdAt: string;
            description: string;
            followLevel: FollowLevel;
            postCount: number;
            title: string;
            updatedAt: string;
          } | null;
        }> | null;
        postCollections: Array<{
          __typename?: 'PostCollection';
          id: string;
          authorID: string;
          coverMediaID?: string | null;
          createdAt: string;
          description: string;
          followLevel: FollowLevel;
          postCount: number;
          title: string;
          updatedAt: string;
        }>;
        postOptions?: {
          __typename?: 'PostOptions';
          commentPolicy: PostCommentPolicy;
          copyPolicy: PostCopyPolicy;
          reactionPolicy: PostReactionPolicy;
          postVisibility: {
            __typename?: 'PostVisibility';
            policy: PostVisibilityPolicy;
            profileTags: Array<string>;
            pushPolicy: PostPushPolicy;
          };
        } | null;
      }>;
    }>;
    pageInfo: {
      __typename?: 'PageInfo';
      endCursor?: string | null;
      hasNextPage: boolean;
      totalCount?: number | null;
    };
  };
};
type GetPostDraftsCountQueryVariables = Exact<{
  filter?: InputMaybe<PostDraftFilterInput>;
}>;
type GetPostDraftsCountQuery = {
  __typename?: 'Query';
  getPostDraftsCount: number;
};
type GetPostReactionDetailsQueryVariables = Exact<{
  cursor?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  postId: Scalars['ID']['input'];
  type?: InputMaybe<ReactionTypeInput>;
}>;
type GetPostReactionDetailsQuery = {
  __typename?: 'Query';
  getPostReactionDetails: {
    __typename?: 'PostReactionDetailRecordConnection';
    pageInfo: {
      __typename?: 'PageInfo';
      endCursor?: string | null;
      hasNextPage: boolean;
      totalCount?: number | null;
    };
    reactionRecords: Array<{
      __typename?: 'ReactionDetailRecord';
      accountId: string;
      createdAt: string;
      profile?: {
        __typename?: 'Profile';
        id: string;
        username: string;
        displayName?: string | null;
        profileEmoji: string;
        profileMediaId?: string | null;
      } | null;
      type?: {
        __typename?: 'ReactionType';
        emojiValue?: string | null;
        nativeValue?: NativeReactionType | null;
      } | null;
    }>;
  };
};
type GetPostReactionsQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']['input']>;
  postId: Scalars['ID']['input'];
}>;
type GetPostReactionsQuery = {
  __typename?: 'Query';
  getPostReactions?: {
    __typename?: 'PostReactionsConnection';
    postId: string;
    queryLimit: number;
    remainingCount: number;
    viewerId?: string | null;
    reactions: Array<{
      __typename?: 'ReactionSummary';
      count: number;
      isReactedByViewer: boolean;
      type: {
        __typename?: 'ReactionType';
        emojiValue?: string | null;
        nativeValue?: NativeReactionType | null;
      };
    }>;
  } | null;
};
type GetProfileTagByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;
type GetProfileTagByIdQuery = {
  __typename?: 'Query';
  getProfileTagById?: {
    __typename?: 'ProfileTag';
    id: string;
    name: string;
    memberCount: number;
    AuthorID: string;
    Author: {
      __typename?: 'Profile';
      id: string;
      username: string;
      displayName?: string | null;
      profileEmoji: string;
      profileMediaId?: string | null;
    };
  } | null;
};
type GetProfileTagProfilesQueryVariables = Exact<{
  cursor?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  tagId: Scalars['ID']['input'];
}>;
type GetProfileTagProfilesQuery = {
  __typename?: 'Query';
  getProfileTagProfiles: {
    __typename?: 'ProfileConnection';
    edges: Array<{
      __typename?: 'Profile';
      id: string;
      username: string;
      displayName?: string | null;
      bio?: string | null;
      joinedAt: string;
      followerCount: number;
      followingCount: number;
      preferInteractionType: PreferInteractionType;
      profileEmoji: string;
      profileMediaId?: string | null;
      viewerId?: string | null;
      pinnedPostCollectionId?: string | null;
      blockingStatus?: {
        __typename?: 'BlockStatusInfo';
        blockStatus: BlockMode;
        isBlocked: boolean;
      } | null;
      pinnedPostCollection?: {
        __typename?: 'PostCollection';
        id: string;
        authorID: string;
        coverMediaID?: string | null;
        createdAt: string;
        description: string;
        followLevel: FollowLevel;
        postCount: number;
        title: string;
        updatedAt: string;
      } | null;
      profileFollowStatus?: {
        __typename?: 'ProfileFollowStatus';
        followingLevel: FollowLevel;
        isFollowedBy: boolean;
        isFollowing: boolean;
      } | null;
      profileMedia?: {
        __typename?: 'MediaMetadata';
        id: string;
        accountID: string;
        blurHash?: string | null;
        durationMs?: number | null;
        status: MediaStatus;
        type: MediaType;
        aspectRatio?: {
          __typename?: 'AspectRatio';
          numerator: number;
          denominator: number;
        } | null;
        files: Array<{
          __typename?: 'MediaFileMetadata';
          id: string;
          mediaId: string;
          profile: MediaFileProfile;
          contentType: string;
          url: string;
        }>;
      } | null;
      tags: Array<{
        __typename?: 'ProfileTag';
        id: string;
        name: string;
        memberCount: number;
        AuthorID: string;
        Author: {
          __typename?: 'Profile';
          id: string;
          username: string;
          displayName?: string | null;
          profileEmoji: string;
          profileMediaId?: string | null;
        };
      }>;
    }>;
    pageInfo: {
      __typename?: 'PageInfo';
      endCursor?: string | null;
      hasNextPage: boolean;
      totalCount?: number | null;
    };
  };
};
type GetReactedPostsQueryVariables = Exact<{
  cursor?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  reactionType: ReactionTypeInput;
}>;
type GetReactedPostsQuery = {
  __typename?: 'Query';
  getReactedPosts: {
    __typename?: 'FeedPostConnection';
    edges: Array<{
      __typename?: 'FeedPostEdge';
      id: string;
      post: {
        __typename?: 'Post';
        id: string;
        authorID: string;
        content: string;
        createdAt: string;
        parentPostId?: string | null;
        commentCount: number;
        leafAncestorIds: Array<string>;
        rootAncestorIds: Array<string>;
        author: {
          __typename?: 'Profile';
          id: string;
          username: string;
          displayName?: string | null;
          profileEmoji: string;
          profileMediaId?: string | null;
        };
        attachmentIds: Array<{
          __typename?: 'AttachmentID';
          type: AttachmentType;
          embeddedCollectionId?: string | null;
          embeddedPostId?: string | null;
          embeddedProfileId?: string | null;
          linkUrl?: string | null;
          mediaId?: string | null;
        }>;
        attachments: Array<{
          __typename?: 'Attachment';
          type: AttachmentType;
          linkPreview?: {
            __typename?: 'LinkPreview';
            Url: string;
            canonicalUrl?: string | null;
            resourceType?: LinkPreviewResourceType | null;
            summary?: string | null;
            thumbnailUrl?: string | null;
            title?: string | null;
          } | null;
          media?: {
            __typename?: 'MediaMetadata';
            id: string;
            accountID: string;
            blurHash?: string | null;
            durationMs?: number | null;
            status: MediaStatus;
            type: MediaType;
            aspectRatio?: {
              __typename?: 'AspectRatio';
              numerator: number;
              denominator: number;
            } | null;
            files: Array<{
              __typename?: 'MediaFileMetadata';
              id: string;
              mediaId: string;
              profile: MediaFileProfile;
              contentType: string;
              url: string;
            }>;
          } | null;
          embeddedProfile?: {
            __typename?: 'Profile';
            id: string;
            username: string;
            displayName?: string | null;
            profileEmoji: string;
            profileMediaId?: string | null;
          } | null;
          embeddedPost?: {
            __typename?: 'Post';
            id: string;
            authorID: string;
            content: string;
            createdAt: string;
            parentPostId?: string | null;
            commentCount: number;
          } | null;
          embeddedCollection?: {
            __typename?: 'PostCollection';
            id: string;
            authorID: string;
            coverMediaID?: string | null;
            createdAt: string;
            description: string;
            followLevel: FollowLevel;
            postCount: number;
            title: string;
            updatedAt: string;
          } | null;
        }>;
        postCollections: Array<{
          __typename?: 'PostCollection';
          id: string;
          authorID: string;
          coverMediaID?: string | null;
          createdAt: string;
          description: string;
          followLevel: FollowLevel;
          postCount: number;
          title: string;
          updatedAt: string;
        }>;
        postOperationPermission: {
          __typename?: 'PostOperationPermission';
          canComment: boolean;
          canReact: boolean;
        };
        postOptions: {
          __typename?: 'PostOptions';
          commentPolicy: PostCommentPolicy;
          copyPolicy: PostCopyPolicy;
          reactionPolicy: PostReactionPolicy;
          postVisibility: {
            __typename?: 'PostVisibility';
            policy: PostVisibilityPolicy;
            profileTags: Array<string>;
            pushPolicy: PostPushPolicy;
          };
        };
        reactions?: {
          __typename?: 'PostReactionsConnection';
          postId: string;
          queryLimit: number;
          remainingCount: number;
          viewerId?: string | null;
          reactions: Array<{
            __typename?: 'ReactionSummary';
            count: number;
            isReactedByViewer: boolean;
            type: {
              __typename?: 'ReactionType';
              emojiValue?: string | null;
              nativeValue?: NativeReactionType | null;
            };
          }>;
        } | null;
      };
    }>;
    pageInfo: {
      __typename?: 'PageInfo';
      endCursor?: string | null;
      hasNextPage: boolean;
      totalCount?: number | null;
    };
  };
};
type GetTopicFeedPostsQueryVariables = Exact<{
  cursor?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  topicId: Scalars['ID']['input'];
}>;
type GetTopicFeedPostsQuery = {
  __typename?: 'Query';
  getTopicFeedPosts: {
    __typename?: 'PostConnection';
    edges: Array<{
      __typename?: 'Post';
      id: string;
      authorID: string;
      content: string;
      createdAt: string;
      parentPostId?: string | null;
      commentCount: number;
      leafAncestorIds: Array<string>;
      rootAncestorIds: Array<string>;
      author: {
        __typename?: 'Profile';
        id: string;
        username: string;
        displayName?: string | null;
        profileEmoji: string;
        profileMediaId?: string | null;
      };
      attachmentIds: Array<{
        __typename?: 'AttachmentID';
        type: AttachmentType;
        embeddedCollectionId?: string | null;
        embeddedPostId?: string | null;
        embeddedProfileId?: string | null;
        linkUrl?: string | null;
        mediaId?: string | null;
      }>;
      attachments: Array<{
        __typename?: 'Attachment';
        type: AttachmentType;
        linkPreview?: {
          __typename?: 'LinkPreview';
          Url: string;
          canonicalUrl?: string | null;
          resourceType?: LinkPreviewResourceType | null;
          summary?: string | null;
          thumbnailUrl?: string | null;
          title?: string | null;
        } | null;
        media?: {
          __typename?: 'MediaMetadata';
          id: string;
          accountID: string;
          blurHash?: string | null;
          durationMs?: number | null;
          status: MediaStatus;
          type: MediaType;
          aspectRatio?: {
            __typename?: 'AspectRatio';
            numerator: number;
            denominator: number;
          } | null;
          files: Array<{
            __typename?: 'MediaFileMetadata';
            id: string;
            mediaId: string;
            profile: MediaFileProfile;
            contentType: string;
            url: string;
          }>;
        } | null;
        embeddedProfile?: {
          __typename?: 'Profile';
          id: string;
          username: string;
          displayName?: string | null;
          profileEmoji: string;
          profileMediaId?: string | null;
        } | null;
        embeddedPost?: {
          __typename?: 'Post';
          id: string;
          authorID: string;
          content: string;
          createdAt: string;
          parentPostId?: string | null;
          commentCount: number;
        } | null;
        embeddedCollection?: {
          __typename?: 'PostCollection';
          id: string;
          authorID: string;
          coverMediaID?: string | null;
          createdAt: string;
          description: string;
          followLevel: FollowLevel;
          postCount: number;
          title: string;
          updatedAt: string;
        } | null;
      }>;
      postCollections: Array<{
        __typename?: 'PostCollection';
        id: string;
        authorID: string;
        coverMediaID?: string | null;
        createdAt: string;
        description: string;
        followLevel: FollowLevel;
        postCount: number;
        title: string;
        updatedAt: string;
      }>;
      postOperationPermission: {
        __typename?: 'PostOperationPermission';
        canComment: boolean;
        canReact: boolean;
      };
      postOptions: {
        __typename?: 'PostOptions';
        commentPolicy: PostCommentPolicy;
        copyPolicy: PostCopyPolicy;
        reactionPolicy: PostReactionPolicy;
        postVisibility: {
          __typename?: 'PostVisibility';
          policy: PostVisibilityPolicy;
          profileTags: Array<string>;
          pushPolicy: PostPushPolicy;
        };
      };
      reactions?: {
        __typename?: 'PostReactionsConnection';
        postId: string;
        queryLimit: number;
        remainingCount: number;
        viewerId?: string | null;
        reactions: Array<{
          __typename?: 'ReactionSummary';
          count: number;
          isReactedByViewer: boolean;
          type: {
            __typename?: 'ReactionType';
            emojiValue?: string | null;
            nativeValue?: NativeReactionType | null;
          };
        }>;
      } | null;
    }>;
    pageInfo: {
      __typename?: 'PageInfo';
      endCursor?: string | null;
      hasNextPage: boolean;
      totalCount?: number | null;
    };
  };
};
type GetTopicsQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;
type GetTopicsQuery = {
  __typename?: 'Query';
  getTopics: Array<{
    __typename?: 'Topic';
    id: string;
    emoji: string;
    title: string;
  }>;
};
type GetUnreadNotificationCountQueryVariables = Exact<{
  [key: string]: never;
}>;
type GetUnreadNotificationCountQuery = {
  __typename?: 'Query';
  getUnreadNotificationCount: number;
};
type GetUserPostsQueryVariables = Exact<{
  accountId: Scalars['ID']['input'];
  cursor?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  postType?: InputMaybe<PostType>;
}>;
type GetUserPostsQuery = {
  __typename?: 'Query';
  getUserPosts: {
    __typename?: 'PostConnection';
    edges: Array<{
      __typename?: 'Post';
      id: string;
      authorID: string;
      content: string;
      createdAt: string;
      parentPostId?: string | null;
      commentCount: number;
      leafAncestorIds: Array<string>;
      rootAncestorIds: Array<string>;
      author: {
        __typename?: 'Profile';
        id: string;
        username: string;
        displayName?: string | null;
        profileEmoji: string;
        profileMediaId?: string | null;
      };
      attachmentIds: Array<{
        __typename?: 'AttachmentID';
        type: AttachmentType;
        embeddedCollectionId?: string | null;
        embeddedPostId?: string | null;
        embeddedProfileId?: string | null;
        linkUrl?: string | null;
        mediaId?: string | null;
      }>;
      attachments: Array<{
        __typename?: 'Attachment';
        type: AttachmentType;
        linkPreview?: {
          __typename?: 'LinkPreview';
          Url: string;
          canonicalUrl?: string | null;
          resourceType?: LinkPreviewResourceType | null;
          summary?: string | null;
          thumbnailUrl?: string | null;
          title?: string | null;
        } | null;
        media?: {
          __typename?: 'MediaMetadata';
          id: string;
          accountID: string;
          blurHash?: string | null;
          durationMs?: number | null;
          status: MediaStatus;
          type: MediaType;
          aspectRatio?: {
            __typename?: 'AspectRatio';
            numerator: number;
            denominator: number;
          } | null;
          files: Array<{
            __typename?: 'MediaFileMetadata';
            id: string;
            mediaId: string;
            profile: MediaFileProfile;
            contentType: string;
            url: string;
          }>;
        } | null;
        embeddedProfile?: {
          __typename?: 'Profile';
          id: string;
          username: string;
          displayName?: string | null;
          profileEmoji: string;
          profileMediaId?: string | null;
        } | null;
        embeddedPost?: {
          __typename?: 'Post';
          id: string;
          authorID: string;
          content: string;
          createdAt: string;
          parentPostId?: string | null;
          commentCount: number;
        } | null;
        embeddedCollection?: {
          __typename?: 'PostCollection';
          id: string;
          authorID: string;
          coverMediaID?: string | null;
          createdAt: string;
          description: string;
          followLevel: FollowLevel;
          postCount: number;
          title: string;
          updatedAt: string;
        } | null;
      }>;
      postCollections: Array<{
        __typename?: 'PostCollection';
        id: string;
        authorID: string;
        coverMediaID?: string | null;
        createdAt: string;
        description: string;
        followLevel: FollowLevel;
        postCount: number;
        title: string;
        updatedAt: string;
      }>;
      postOperationPermission: {
        __typename?: 'PostOperationPermission';
        canComment: boolean;
        canReact: boolean;
      };
      postOptions: {
        __typename?: 'PostOptions';
        commentPolicy: PostCommentPolicy;
        copyPolicy: PostCopyPolicy;
        reactionPolicy: PostReactionPolicy;
        postVisibility: {
          __typename?: 'PostVisibility';
          policy: PostVisibilityPolicy;
          profileTags: Array<string>;
          pushPolicy: PostPushPolicy;
        };
      };
      reactions?: {
        __typename?: 'PostReactionsConnection';
        postId: string;
        queryLimit: number;
        remainingCount: number;
        viewerId?: string | null;
        reactions: Array<{
          __typename?: 'ReactionSummary';
          count: number;
          isReactedByViewer: boolean;
          type: {
            __typename?: 'ReactionType';
            emojiValue?: string | null;
            nativeValue?: NativeReactionType | null;
          };
        }>;
      } | null;
    }>;
    pageInfo: {
      __typename?: 'PageInfo';
      endCursor?: string | null;
      hasNextPage: boolean;
      totalCount?: number | null;
    };
  };
};
type GetUserReactionsQueryVariables = Exact<{
  cursor?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;
type GetUserReactionsQuery = {
  __typename?: 'Query';
  getUserReactions: {
    __typename?: 'UserReactionsStatisticsConnection';
    pageInfo: {
      __typename?: 'PageInfo';
      endCursor?: string | null;
      hasNextPage: boolean;
      totalCount?: number | null;
    };
    reactions: Array<{
      __typename?: 'UserReactionStatistics';
      count: number;
      type: {
        __typename?: 'ReactionType';
        emojiValue?: string | null;
        nativeValue?: NativeReactionType | null;
      };
    }>;
  };
};
type ListProfileTagsQueryVariables = Exact<{
  cursor?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;
type ListProfileTagsQuery = {
  __typename?: 'Query';
  listProfileTags: {
    __typename?: 'ProfileTagConnection';
    edges: Array<{
      __typename?: 'ProfileTag';
      id: string;
      name: string;
      memberCount: number;
      AuthorID: string;
      Author: {
        __typename?: 'Profile';
        id: string;
        username: string;
        displayName?: string | null;
        profileEmoji: string;
        profileMediaId?: string | null;
      };
    }>;
    pageInfo: {
      __typename?: 'PageInfo';
      endCursor?: string | null;
      hasNextPage: boolean;
      totalCount?: number | null;
    };
  };
};
type NotificationReceivedSubscriptionVariables = Exact<{
  [key: string]: never;
}>;
type NotificationReceivedSubscription = {
  __typename?: 'Subscription';
  notificationReceived: {
    __typename?: 'Notification';
    id: string;
    createdAt: string;
    isRead: boolean;
    message?: string | null;
    type: NotificationType;
    relatedPostID?: string | null;
    relatedPostCollectionID?: string | null;
    sourceProfileID?: string | null;
    targetProfileID?: string | null;
    reaction?: {
      __typename?: 'ReactionType';
      emojiValue?: string | null;
      nativeValue?: NativeReactionType | null;
    } | null;
    relatedPost?: {
      __typename?: 'Post';
      id: string;
      authorID: string;
      content: string;
      createdAt: string;
      parentPostId?: string | null;
      commentCount: number;
    } | null;
    relatedPostCollection?: {
      __typename?: 'PostCollection';
      id: string;
      authorID: string;
      coverMediaID?: string | null;
      createdAt: string;
      description: string;
      followLevel: FollowLevel;
      postCount: number;
      title: string;
      updatedAt: string;
    } | null;
    sourceProfile?: {
      __typename?: 'Profile';
      id: string;
      username: string;
      displayName?: string | null;
      profileEmoji: string;
      profileMediaId?: string | null;
    } | null;
    targetProfile?: {
      __typename?: 'Profile';
      id: string;
      username: string;
      displayName?: string | null;
      profileEmoji: string;
      profileMediaId?: string | null;
    } | null;
  };
};
type PostCreatedByAuthorSubscriptionVariables = Exact<{
  authorId: Scalars['ID']['input'];
  postType?: InputMaybe<PostType>;
}>;
type PostCreatedByAuthorSubscription = {
  __typename?: 'Subscription';
  postCreatedByAuthor: {
    __typename?: 'Post';
    id: string;
    authorID: string;
    content: string;
    createdAt: string;
    parentPostId?: string | null;
    commentCount: number;
    leafAncestorIds: Array<string>;
    rootAncestorIds: Array<string>;
    author: {
      __typename?: 'Profile';
      id: string;
      username: string;
      displayName?: string | null;
      profileEmoji: string;
      profileMediaId?: string | null;
    };
    attachmentIds: Array<{
      __typename?: 'AttachmentID';
      type: AttachmentType;
      embeddedCollectionId?: string | null;
      embeddedPostId?: string | null;
      embeddedProfileId?: string | null;
      linkUrl?: string | null;
      mediaId?: string | null;
    }>;
    attachments: Array<{
      __typename?: 'Attachment';
      type: AttachmentType;
      linkPreview?: {
        __typename?: 'LinkPreview';
        Url: string;
        canonicalUrl?: string | null;
        resourceType?: LinkPreviewResourceType | null;
        summary?: string | null;
        thumbnailUrl?: string | null;
        title?: string | null;
      } | null;
      media?: {
        __typename?: 'MediaMetadata';
        id: string;
        accountID: string;
        blurHash?: string | null;
        durationMs?: number | null;
        status: MediaStatus;
        type: MediaType;
        aspectRatio?: {
          __typename?: 'AspectRatio';
          numerator: number;
          denominator: number;
        } | null;
        files: Array<{
          __typename?: 'MediaFileMetadata';
          id: string;
          mediaId: string;
          profile: MediaFileProfile;
          contentType: string;
          url: string;
        }>;
      } | null;
      embeddedProfile?: {
        __typename?: 'Profile';
        id: string;
        username: string;
        displayName?: string | null;
        profileEmoji: string;
        profileMediaId?: string | null;
      } | null;
      embeddedPost?: {
        __typename?: 'Post';
        id: string;
        authorID: string;
        content: string;
        createdAt: string;
        parentPostId?: string | null;
        commentCount: number;
      } | null;
      embeddedCollection?: {
        __typename?: 'PostCollection';
        id: string;
        authorID: string;
        coverMediaID?: string | null;
        createdAt: string;
        description: string;
        followLevel: FollowLevel;
        postCount: number;
        title: string;
        updatedAt: string;
      } | null;
    }>;
    postCollections: Array<{
      __typename?: 'PostCollection';
      id: string;
      authorID: string;
      coverMediaID?: string | null;
      createdAt: string;
      description: string;
      followLevel: FollowLevel;
      postCount: number;
      title: string;
      updatedAt: string;
    }>;
    postOperationPermission: {
      __typename?: 'PostOperationPermission';
      canComment: boolean;
      canReact: boolean;
    };
    postOptions: {
      __typename?: 'PostOptions';
      commentPolicy: PostCommentPolicy;
      copyPolicy: PostCopyPolicy;
      reactionPolicy: PostReactionPolicy;
      postVisibility: {
        __typename?: 'PostVisibility';
        policy: PostVisibilityPolicy;
        profileTags: Array<string>;
        pushPolicy: PostPushPolicy;
      };
    };
    reactions?: {
      __typename?: 'PostReactionsConnection';
      postId: string;
      queryLimit: number;
      remainingCount: number;
      viewerId?: string | null;
      reactions: Array<{
        __typename?: 'ReactionSummary';
        count: number;
        isReactedByViewer: boolean;
        type: {
          __typename?: 'ReactionType';
          emojiValue?: string | null;
          nativeValue?: NativeReactionType | null;
        };
      }>;
    } | null;
  };
};
type PostCreatedInCollectionSubscriptionVariables = Exact<{
  postCollectionID: Scalars['ID']['input'];
}>;
type PostCreatedInCollectionSubscription = {
  __typename?: 'Subscription';
  postCreatedInCollection: {
    __typename?: 'Post';
    id: string;
    authorID: string;
    content: string;
    createdAt: string;
    parentPostId?: string | null;
    commentCount: number;
    leafAncestorIds: Array<string>;
    rootAncestorIds: Array<string>;
    author: {
      __typename?: 'Profile';
      id: string;
      username: string;
      displayName?: string | null;
      profileEmoji: string;
      profileMediaId?: string | null;
    };
    attachmentIds: Array<{
      __typename?: 'AttachmentID';
      type: AttachmentType;
      embeddedCollectionId?: string | null;
      embeddedPostId?: string | null;
      embeddedProfileId?: string | null;
      linkUrl?: string | null;
      mediaId?: string | null;
    }>;
    attachments: Array<{
      __typename?: 'Attachment';
      type: AttachmentType;
      linkPreview?: {
        __typename?: 'LinkPreview';
        Url: string;
        canonicalUrl?: string | null;
        resourceType?: LinkPreviewResourceType | null;
        summary?: string | null;
        thumbnailUrl?: string | null;
        title?: string | null;
      } | null;
      media?: {
        __typename?: 'MediaMetadata';
        id: string;
        accountID: string;
        blurHash?: string | null;
        durationMs?: number | null;
        status: MediaStatus;
        type: MediaType;
        aspectRatio?: {
          __typename?: 'AspectRatio';
          numerator: number;
          denominator: number;
        } | null;
        files: Array<{
          __typename?: 'MediaFileMetadata';
          id: string;
          mediaId: string;
          profile: MediaFileProfile;
          contentType: string;
          url: string;
        }>;
      } | null;
      embeddedProfile?: {
        __typename?: 'Profile';
        id: string;
        username: string;
        displayName?: string | null;
        profileEmoji: string;
        profileMediaId?: string | null;
      } | null;
      embeddedPost?: {
        __typename?: 'Post';
        id: string;
        authorID: string;
        content: string;
        createdAt: string;
        parentPostId?: string | null;
        commentCount: number;
      } | null;
      embeddedCollection?: {
        __typename?: 'PostCollection';
        id: string;
        authorID: string;
        coverMediaID?: string | null;
        createdAt: string;
        description: string;
        followLevel: FollowLevel;
        postCount: number;
        title: string;
        updatedAt: string;
      } | null;
    }>;
    postCollections: Array<{
      __typename?: 'PostCollection';
      id: string;
      authorID: string;
      coverMediaID?: string | null;
      createdAt: string;
      description: string;
      followLevel: FollowLevel;
      postCount: number;
      title: string;
      updatedAt: string;
    }>;
    postOperationPermission: {
      __typename?: 'PostOperationPermission';
      canComment: boolean;
      canReact: boolean;
    };
    postOptions: {
      __typename?: 'PostOptions';
      commentPolicy: PostCommentPolicy;
      copyPolicy: PostCopyPolicy;
      reactionPolicy: PostReactionPolicy;
      postVisibility: {
        __typename?: 'PostVisibility';
        policy: PostVisibilityPolicy;
        profileTags: Array<string>;
        pushPolicy: PostPushPolicy;
      };
    };
    reactions?: {
      __typename?: 'PostReactionsConnection';
      postId: string;
      queryLimit: number;
      remainingCount: number;
      viewerId?: string | null;
      reactions: Array<{
        __typename?: 'ReactionSummary';
        count: number;
        isReactedByViewer: boolean;
        type: {
          __typename?: 'ReactionType';
          emojiValue?: string | null;
          nativeValue?: NativeReactionType | null;
        };
      }>;
    } | null;
  };
};
type PostDeletedSubscriptionVariables = Exact<{
  postId: Scalars['ID']['input'];
}>;
type PostDeletedSubscription = {
  __typename?: 'Subscription';
  postDeleted: string;
};
type PostUpdatedSubscriptionVariables = Exact<{
  postId: Scalars['ID']['input'];
}>;
type PostUpdatedSubscription = {
  __typename?: 'Subscription';
  postUpdated: {
    __typename?: 'Post';
    id: string;
    authorID: string;
    content: string;
    createdAt: string;
    parentPostId?: string | null;
    commentCount: number;
    leafAncestorIds: Array<string>;
    rootAncestorIds: Array<string>;
    author: {
      __typename?: 'Profile';
      id: string;
      username: string;
      displayName?: string | null;
      profileEmoji: string;
      profileMediaId?: string | null;
    };
    attachmentIds: Array<{
      __typename?: 'AttachmentID';
      type: AttachmentType;
      embeddedCollectionId?: string | null;
      embeddedPostId?: string | null;
      embeddedProfileId?: string | null;
      linkUrl?: string | null;
      mediaId?: string | null;
    }>;
    attachments: Array<{
      __typename?: 'Attachment';
      type: AttachmentType;
      linkPreview?: {
        __typename?: 'LinkPreview';
        Url: string;
        canonicalUrl?: string | null;
        resourceType?: LinkPreviewResourceType | null;
        summary?: string | null;
        thumbnailUrl?: string | null;
        title?: string | null;
      } | null;
      media?: {
        __typename?: 'MediaMetadata';
        id: string;
        accountID: string;
        blurHash?: string | null;
        durationMs?: number | null;
        status: MediaStatus;
        type: MediaType;
        aspectRatio?: {
          __typename?: 'AspectRatio';
          numerator: number;
          denominator: number;
        } | null;
        files: Array<{
          __typename?: 'MediaFileMetadata';
          id: string;
          mediaId: string;
          profile: MediaFileProfile;
          contentType: string;
          url: string;
        }>;
      } | null;
      embeddedProfile?: {
        __typename?: 'Profile';
        id: string;
        username: string;
        displayName?: string | null;
        profileEmoji: string;
        profileMediaId?: string | null;
      } | null;
      embeddedPost?: {
        __typename?: 'Post';
        id: string;
        authorID: string;
        content: string;
        createdAt: string;
        parentPostId?: string | null;
        commentCount: number;
      } | null;
      embeddedCollection?: {
        __typename?: 'PostCollection';
        id: string;
        authorID: string;
        coverMediaID?: string | null;
        createdAt: string;
        description: string;
        followLevel: FollowLevel;
        postCount: number;
        title: string;
        updatedAt: string;
      } | null;
    }>;
    postCollections: Array<{
      __typename?: 'PostCollection';
      id: string;
      authorID: string;
      coverMediaID?: string | null;
      createdAt: string;
      description: string;
      followLevel: FollowLevel;
      postCount: number;
      title: string;
      updatedAt: string;
    }>;
    postOperationPermission: {
      __typename?: 'PostOperationPermission';
      canComment: boolean;
      canReact: boolean;
    };
    postOptions: {
      __typename?: 'PostOptions';
      commentPolicy: PostCommentPolicy;
      copyPolicy: PostCopyPolicy;
      reactionPolicy: PostReactionPolicy;
      postVisibility: {
        __typename?: 'PostVisibility';
        policy: PostVisibilityPolicy;
        profileTags: Array<string>;
        pushPolicy: PostPushPolicy;
      };
    };
    reactions?: {
      __typename?: 'PostReactionsConnection';
      postId: string;
      queryLimit: number;
      remainingCount: number;
      viewerId?: string | null;
      reactions: Array<{
        __typename?: 'ReactionSummary';
        count: number;
        isReactedByViewer: boolean;
        type: {
          __typename?: 'ReactionType';
          emojiValue?: string | null;
          nativeValue?: NativeReactionType | null;
        };
      }>;
    } | null;
  };
};
type ReplyCreatedUnderRootPostSubscriptionVariables = Exact<{
  rootPostId: Scalars['ID']['input'];
}>;
type ReplyCreatedUnderRootPostSubscription = {
  __typename?: 'Subscription';
  replyCreatedUnderRootPost: {
    __typename?: 'Post';
    id: string;
    authorID: string;
    content: string;
    createdAt: string;
    parentPostId?: string | null;
    commentCount: number;
    leafAncestorIds: Array<string>;
    rootAncestorIds: Array<string>;
    author: {
      __typename?: 'Profile';
      id: string;
      username: string;
      displayName?: string | null;
      profileEmoji: string;
      profileMediaId?: string | null;
    };
    attachmentIds: Array<{
      __typename?: 'AttachmentID';
      type: AttachmentType;
      embeddedCollectionId?: string | null;
      embeddedPostId?: string | null;
      embeddedProfileId?: string | null;
      linkUrl?: string | null;
      mediaId?: string | null;
    }>;
    attachments: Array<{
      __typename?: 'Attachment';
      type: AttachmentType;
      linkPreview?: {
        __typename?: 'LinkPreview';
        Url: string;
        canonicalUrl?: string | null;
        resourceType?: LinkPreviewResourceType | null;
        summary?: string | null;
        thumbnailUrl?: string | null;
        title?: string | null;
      } | null;
      media?: {
        __typename?: 'MediaMetadata';
        id: string;
        accountID: string;
        blurHash?: string | null;
        durationMs?: number | null;
        status: MediaStatus;
        type: MediaType;
        aspectRatio?: {
          __typename?: 'AspectRatio';
          numerator: number;
          denominator: number;
        } | null;
        files: Array<{
          __typename?: 'MediaFileMetadata';
          id: string;
          mediaId: string;
          profile: MediaFileProfile;
          contentType: string;
          url: string;
        }>;
      } | null;
      embeddedProfile?: {
        __typename?: 'Profile';
        id: string;
        username: string;
        displayName?: string | null;
        profileEmoji: string;
        profileMediaId?: string | null;
      } | null;
      embeddedPost?: {
        __typename?: 'Post';
        id: string;
        authorID: string;
        content: string;
        createdAt: string;
        parentPostId?: string | null;
        commentCount: number;
      } | null;
      embeddedCollection?: {
        __typename?: 'PostCollection';
        id: string;
        authorID: string;
        coverMediaID?: string | null;
        createdAt: string;
        description: string;
        followLevel: FollowLevel;
        postCount: number;
        title: string;
        updatedAt: string;
      } | null;
    }>;
    postCollections: Array<{
      __typename?: 'PostCollection';
      id: string;
      authorID: string;
      coverMediaID?: string | null;
      createdAt: string;
      description: string;
      followLevel: FollowLevel;
      postCount: number;
      title: string;
      updatedAt: string;
    }>;
    postOperationPermission: {
      __typename?: 'PostOperationPermission';
      canComment: boolean;
      canReact: boolean;
    };
    postOptions: {
      __typename?: 'PostOptions';
      commentPolicy: PostCommentPolicy;
      copyPolicy: PostCopyPolicy;
      reactionPolicy: PostReactionPolicy;
      postVisibility: {
        __typename?: 'PostVisibility';
        policy: PostVisibilityPolicy;
        profileTags: Array<string>;
        pushPolicy: PostPushPolicy;
      };
    };
    reactions?: {
      __typename?: 'PostReactionsConnection';
      postId: string;
      queryLimit: number;
      remainingCount: number;
      viewerId?: string | null;
      reactions: Array<{
        __typename?: 'ReactionSummary';
        count: number;
        isReactedByViewer: boolean;
        type: {
          __typename?: 'ReactionType';
          emojiValue?: string | null;
          nativeValue?: NativeReactionType | null;
        };
      }>;
    } | null;
  };
};
declare const AccountFieldsFragmentDoc: TypedDocumentNode<AccountFieldsFragment, unknown>;
declare const TopicFieldsFragmentDoc: TypedDocumentNode<TopicFieldsFragment, unknown>;
declare const ProfileReferenceFieldsFragmentDoc: TypedDocumentNode<ProfileReferenceFieldsFragment, unknown>;
declare const AttachmentIdFieldsFragmentDoc: TypedDocumentNode<AttachmentIdFieldsFragment, unknown>;
declare const LinkPreviewFieldsFragmentDoc: TypedDocumentNode<LinkPreviewFieldsFragment, unknown>;
declare const AspectRatioFieldsFragmentDoc: TypedDocumentNode<AspectRatioFieldsFragment, unknown>;
declare const MediaFileMetadataFieldsFragmentDoc: TypedDocumentNode<MediaFileMetadataFieldsFragment, unknown>;
declare const MediaMetadataFieldsFragmentDoc: TypedDocumentNode<MediaMetadataFieldsFragment, unknown>;
declare const PostReferenceFieldsFragmentDoc: TypedDocumentNode<PostReferenceFieldsFragment, unknown>;
declare const PostCollectionReferenceFieldsFragmentDoc: TypedDocumentNode<PostCollectionReferenceFieldsFragment, unknown>;
declare const AttachmentFieldsFragmentDoc: TypedDocumentNode<AttachmentFieldsFragment, unknown>;
declare const PostOperationPermissionFieldsFragmentDoc: TypedDocumentNode<PostOperationPermissionFieldsFragment, unknown>;
declare const PostVisibilityFieldsFragmentDoc: TypedDocumentNode<PostVisibilityFieldsFragment, unknown>;
declare const PostOptionsFieldsFragmentDoc: TypedDocumentNode<PostOptionsFieldsFragment, unknown>;
declare const ReactionTypeFieldsFragmentDoc: TypedDocumentNode<ReactionTypeFieldsFragment, unknown>;
declare const ReactionSummaryFieldsFragmentDoc: TypedDocumentNode<ReactionSummaryFieldsFragment, unknown>;
declare const PostReactionsConnectionFieldsFragmentDoc: TypedDocumentNode<PostReactionsConnectionFieldsFragment, unknown>;
declare const PostFieldsFragmentDoc: TypedDocumentNode<PostFieldsFragment, unknown>;
declare const FeedPostEdgeFieldsFragmentDoc: TypedDocumentNode<FeedPostEdgeFieldsFragment, unknown>;
declare const PageInfoFieldsFragmentDoc: TypedDocumentNode<PageInfoFieldsFragment, unknown>;
declare const FeedPostConnectionFieldsFragmentDoc: TypedDocumentNode<FeedPostConnectionFieldsFragment, unknown>;
declare const PostConnectionFieldsFragmentDoc: TypedDocumentNode<PostConnectionFieldsFragment, unknown>;
declare const BlockStatusInfoFieldsFragmentDoc: TypedDocumentNode<BlockStatusInfoFieldsFragment, unknown>;
declare const ProfileFollowStatusFieldsFragmentDoc: TypedDocumentNode<ProfileFollowStatusFieldsFragment, unknown>;
declare const ProfileTagFieldsFragmentDoc: TypedDocumentNode<ProfileTagFieldsFragment, unknown>;
declare const ProfileFieldsFragmentDoc: TypedDocumentNode<ProfileFieldsFragment, unknown>;
declare const ProfileConnectionFieldsFragmentDoc: TypedDocumentNode<ProfileConnectionFieldsFragment, unknown>;
declare const PostCollectionFieldsFragmentDoc: TypedDocumentNode<PostCollectionFieldsFragment, unknown>;
declare const PostCollectionConnectionFieldsFragmentDoc: TypedDocumentNode<PostCollectionConnectionFieldsFragment, unknown>;
declare const NotificationFieldsFragmentDoc: TypedDocumentNode<NotificationFieldsFragment, unknown>;
declare const NotificationConnectionFieldsFragmentDoc: TypedDocumentNode<NotificationConnectionFieldsFragment, unknown>;
declare const ReactionDetailRecordFieldsFragmentDoc: TypedDocumentNode<ReactionDetailRecordFieldsFragment, unknown>;
declare const PostReactionDetailRecordConnectionFieldsFragmentDoc: TypedDocumentNode<PostReactionDetailRecordConnectionFieldsFragment, unknown>;
declare const UserReactionStatisticsFieldsFragmentDoc: TypedDocumentNode<UserReactionStatisticsFieldsFragment, unknown>;
declare const UserReactionsStatisticsConnectionFieldsFragmentDoc: TypedDocumentNode<UserReactionsStatisticsConnectionFieldsFragment, unknown>;
declare const ProfileTagConnectionFieldsFragmentDoc: TypedDocumentNode<ProfileTagConnectionFieldsFragment, unknown>;
declare const MonoPostDraftFieldsFragmentDoc: TypedDocumentNode<MonoPostDraftFieldsFragment, unknown>;
declare const PostDraftFieldsFragmentDoc: TypedDocumentNode<PostDraftFieldsFragment, unknown>;
declare const PostDraftConnectionFieldsFragmentDoc: TypedDocumentNode<PostDraftConnectionFieldsFragment, unknown>;
declare const GetAccountProfileDocument: TypedDocumentNode<GetAccountProfileQuery, GetAccountProfileQueryVariables>;
declare const GetBlockedAccountsDocument: TypedDocumentNode<GetBlockedAccountsQuery, GetBlockedAccountsQueryVariables>;
declare const GetCurrentAccountDocument: TypedDocumentNode<GetCurrentAccountQuery, GetCurrentAccountQueryVariables>;
declare const GetDiscussionsDocument: TypedDocumentNode<GetDiscussionsQuery, GetDiscussionsQueryVariables>;
declare const GetFeedPostsDocument: TypedDocumentNode<GetFeedPostsQuery, GetFeedPostsQueryVariables>;
declare const GetFollowedAccountsDocument: TypedDocumentNode<GetFollowedAccountsQuery, GetFollowedAccountsQueryVariables>;
declare const GetFollowedPostCollectionsDocument: TypedDocumentNode<GetFollowedPostCollectionsQuery, GetFollowedPostCollectionsQueryVariables>;
declare const GetFollowingAccountsDocument: TypedDocumentNode<GetFollowingAccountsQuery, GetFollowingAccountsQueryVariables>;
declare const GetFollowingPostsDocument: TypedDocumentNode<GetFollowingPostsQuery, GetFollowingPostsQueryVariables>;
declare const GetHistoryPostsDocument: TypedDocumentNode<GetHistoryPostsQuery, GetHistoryPostsQueryVariables>;
declare const GetLinkPreviewDocument: TypedDocumentNode<GetLinkPreviewQuery, GetLinkPreviewQueryVariables>;
declare const GetMediaDocument: TypedDocumentNode<GetMediaQuery, GetMediaQueryVariables>;
declare const GetMutualFollowersDocument: TypedDocumentNode<GetMutualFollowersQuery, GetMutualFollowersQueryVariables>;
declare const GetMyPostCollectionsDocument: TypedDocumentNode<GetMyPostCollectionsQuery, GetMyPostCollectionsQueryVariables>;
declare const GetNotificationsDocument: TypedDocumentNode<GetNotificationsQuery, GetNotificationsQueryVariables>;
declare const GetPopularPostsDocument: TypedDocumentNode<GetPopularPostsQuery, GetPopularPostsQueryVariables>;
declare const GetPostDocument: TypedDocumentNode<GetPostQuery, GetPostQueryVariables>;
declare const GetPostCollectionDocument: TypedDocumentNode<GetPostCollectionQuery, GetPostCollectionQueryVariables>;
declare const GetPostCollectionsByAuthorDocument: TypedDocumentNode<GetPostCollectionsByAuthorQuery, GetPostCollectionsByAuthorQueryVariables>;
declare const GetPostDraftDocument: TypedDocumentNode<GetPostDraftQuery, GetPostDraftQueryVariables>;
declare const GetPostDraftsDocument: TypedDocumentNode<GetPostDraftsQuery, GetPostDraftsQueryVariables>;
declare const GetPostDraftsCountDocument: TypedDocumentNode<GetPostDraftsCountQuery, GetPostDraftsCountQueryVariables>;
declare const GetPostReactionDetailsDocument: TypedDocumentNode<GetPostReactionDetailsQuery, GetPostReactionDetailsQueryVariables>;
declare const GetPostReactionsDocument: TypedDocumentNode<GetPostReactionsQuery, GetPostReactionsQueryVariables>;
declare const GetProfileTagByIdDocument: TypedDocumentNode<GetProfileTagByIdQuery, GetProfileTagByIdQueryVariables>;
declare const GetProfileTagProfilesDocument: TypedDocumentNode<GetProfileTagProfilesQuery, GetProfileTagProfilesQueryVariables>;
declare const GetReactedPostsDocument: TypedDocumentNode<GetReactedPostsQuery, GetReactedPostsQueryVariables>;
declare const GetTopicFeedPostsDocument: TypedDocumentNode<GetTopicFeedPostsQuery, GetTopicFeedPostsQueryVariables>;
declare const GetTopicsDocument: TypedDocumentNode<GetTopicsQuery, GetTopicsQueryVariables>;
declare const GetUnreadNotificationCountDocument: TypedDocumentNode<GetUnreadNotificationCountQuery, GetUnreadNotificationCountQueryVariables>;
declare const GetUserPostsDocument: TypedDocumentNode<GetUserPostsQuery, GetUserPostsQueryVariables>;
declare const GetUserReactionsDocument: TypedDocumentNode<GetUserReactionsQuery, GetUserReactionsQueryVariables>;
declare const ListProfileTagsDocument: TypedDocumentNode<ListProfileTagsQuery, ListProfileTagsQueryVariables>;
declare const NotificationReceivedDocument: TypedDocumentNode<NotificationReceivedSubscription, NotificationReceivedSubscriptionVariables>;
declare const PostCreatedByAuthorDocument: TypedDocumentNode<PostCreatedByAuthorSubscription, PostCreatedByAuthorSubscriptionVariables>;
declare const PostCreatedInCollectionDocument: TypedDocumentNode<PostCreatedInCollectionSubscription, PostCreatedInCollectionSubscriptionVariables>;
declare const PostDeletedDocument: TypedDocumentNode<PostDeletedSubscription, PostDeletedSubscriptionVariables>;
declare const PostUpdatedDocument: TypedDocumentNode<PostUpdatedSubscription, PostUpdatedSubscriptionVariables>;
declare const ReplyCreatedUnderRootPostDocument: TypedDocumentNode<ReplyCreatedUnderRootPostSubscription, ReplyCreatedUnderRootPostSubscriptionVariables>;
//# sourceMappingURL=graphql.d.ts.map
//#endregion
//#region src/generated/sdk.d.ts
type Requester<C = {}> = <R, V>(doc: DocumentNode, vars?: V, options?: C) => Promise<R> | AsyncIterable<R>;
declare function getSdk<C>(requester: Requester<C>): {
  GetAccountProfile(variables?: GetAccountProfileQueryVariables, options?: C): Promise<GetAccountProfileQuery>;
  GetBlockedAccounts(variables?: GetBlockedAccountsQueryVariables, options?: C): Promise<GetBlockedAccountsQuery>;
  GetCurrentAccount(variables?: GetCurrentAccountQueryVariables, options?: C): Promise<GetCurrentAccountQuery>;
  GetDiscussions(variables?: GetDiscussionsQueryVariables, options?: C): Promise<GetDiscussionsQuery>;
  GetFeedPosts(variables?: GetFeedPostsQueryVariables, options?: C): Promise<GetFeedPostsQuery>;
  GetFollowedAccounts(variables: GetFollowedAccountsQueryVariables, options?: C): Promise<GetFollowedAccountsQuery>;
  GetFollowedPostCollections(variables?: GetFollowedPostCollectionsQueryVariables, options?: C): Promise<GetFollowedPostCollectionsQuery>;
  GetFollowingAccounts(variables: GetFollowingAccountsQueryVariables, options?: C): Promise<GetFollowingAccountsQuery>;
  GetFollowingPosts(variables?: GetFollowingPostsQueryVariables, options?: C): Promise<GetFollowingPostsQuery>;
  GetHistoryPosts(variables?: GetHistoryPostsQueryVariables, options?: C): Promise<GetHistoryPostsQuery>;
  GetLinkPreview(variables: GetLinkPreviewQueryVariables, options?: C): Promise<GetLinkPreviewQuery>;
  GetMedia(variables: GetMediaQueryVariables, options?: C): Promise<GetMediaQuery>;
  GetMutualFollowers(variables: GetMutualFollowersQueryVariables, options?: C): Promise<GetMutualFollowersQuery>;
  GetMyPostCollections(variables?: GetMyPostCollectionsQueryVariables, options?: C): Promise<GetMyPostCollectionsQuery>;
  GetNotifications(variables?: GetNotificationsQueryVariables, options?: C): Promise<GetNotificationsQuery>;
  GetPopularPosts(variables?: GetPopularPostsQueryVariables, options?: C): Promise<GetPopularPostsQuery>;
  GetPost(variables: GetPostQueryVariables, options?: C): Promise<GetPostQuery>;
  GetPostCollection(variables: GetPostCollectionQueryVariables, options?: C): Promise<GetPostCollectionQuery>;
  GetPostCollectionsByAuthor(variables: GetPostCollectionsByAuthorQueryVariables, options?: C): Promise<GetPostCollectionsByAuthorQuery>;
  GetPostDraft(variables: GetPostDraftQueryVariables, options?: C): Promise<GetPostDraftQuery>;
  GetPostDrafts(variables?: GetPostDraftsQueryVariables, options?: C): Promise<GetPostDraftsQuery>;
  GetPostDraftsCount(variables?: GetPostDraftsCountQueryVariables, options?: C): Promise<GetPostDraftsCountQuery>;
  GetPostReactionDetails(variables: GetPostReactionDetailsQueryVariables, options?: C): Promise<GetPostReactionDetailsQuery>;
  GetPostReactions(variables: GetPostReactionsQueryVariables, options?: C): Promise<GetPostReactionsQuery>;
  GetProfileTagById(variables: GetProfileTagByIdQueryVariables, options?: C): Promise<GetProfileTagByIdQuery>;
  GetProfileTagProfiles(variables: GetProfileTagProfilesQueryVariables, options?: C): Promise<GetProfileTagProfilesQuery>;
  GetReactedPosts(variables: GetReactedPostsQueryVariables, options?: C): Promise<GetReactedPostsQuery>;
  GetTopicFeedPosts(variables: GetTopicFeedPostsQueryVariables, options?: C): Promise<GetTopicFeedPostsQuery>;
  GetTopics(variables?: GetTopicsQueryVariables, options?: C): Promise<GetTopicsQuery>;
  GetUnreadNotificationCount(variables?: GetUnreadNotificationCountQueryVariables, options?: C): Promise<GetUnreadNotificationCountQuery>;
  GetUserPosts(variables: GetUserPostsQueryVariables, options?: C): Promise<GetUserPostsQuery>;
  GetUserReactions(variables?: GetUserReactionsQueryVariables, options?: C): Promise<GetUserReactionsQuery>;
  ListProfileTags(variables?: ListProfileTagsQueryVariables, options?: C): Promise<ListProfileTagsQuery>;
  NotificationReceived(variables?: NotificationReceivedSubscriptionVariables, options?: C): AsyncIterable<NotificationReceivedSubscription>;
  PostCreatedByAuthor(variables: PostCreatedByAuthorSubscriptionVariables, options?: C): AsyncIterable<PostCreatedByAuthorSubscription>;
  PostCreatedInCollection(variables: PostCreatedInCollectionSubscriptionVariables, options?: C): AsyncIterable<PostCreatedInCollectionSubscription>;
  PostDeleted(variables: PostDeletedSubscriptionVariables, options?: C): AsyncIterable<PostDeletedSubscription>;
  PostUpdated(variables: PostUpdatedSubscriptionVariables, options?: C): AsyncIterable<PostUpdatedSubscription>;
  ReplyCreatedUnderRootPost(variables: ReplyCreatedUnderRootPostSubscriptionVariables, options?: C): AsyncIterable<ReplyCreatedUnderRootPostSubscription>;
};
type Sdk = ReturnType<typeof getSdk>;
//# sourceMappingURL=sdk.d.ts.map
//#endregion
//#region src/client.d.ts
declare const DEFAULT_ENDPOINT = "https://beta.mosir.app/api/v1";
interface MosirClientOptions {
  token: string;
  endpoint?: string;
  headers?: HeadersInit;
  fetch?: typeof fetch;
}
interface MosirRequestOptions {
  headers?: HeadersInit;
  signal?: AbortSignal;
}
type MosirDocument<TResult = unknown, TVariables extends object = Record<string, unknown>> = RequestDocument | TypedDocumentNode<TResult, TVariables>;
interface MosirBaseClient {
  readonly endpoint: string;
  readonly token: string;
  request<TResult, TVariables extends object = Record<string, unknown>>(document: MosirDocument<TResult, TVariables>, variables?: TVariables, options?: MosirRequestOptions): Promise<TResult>;
  subscribe<TResult, TVariables extends object = Record<string, unknown>>(document: MosirDocument<TResult, TVariables>, variables?: TVariables, options?: MosirRequestOptions): AsyncIterable<TResult>;
  execute<TResult, TVariables extends object = Record<string, unknown>>(document: MosirDocument<TResult, TVariables>, variables?: TVariables, options?: MosirRequestOptions): Promise<TResult> | AsyncIterable<TResult>;
  sdk: SdkRequester;
  dispose(): void;
}
type MosirClient = MosirBaseClient & Sdk;
type SdkRequester = Sdk;
declare function createMosirClient(options: MosirClientOptions): MosirClient;
//# sourceMappingURL=client.d.ts.map

//#endregion
export { Account, AccountFieldsFragment, AccountFieldsFragmentDoc, AspectRatio, AspectRatioFieldsFragment, AspectRatioFieldsFragmentDoc, Attachment, AttachmentFieldsFragment, AttachmentFieldsFragmentDoc, AttachmentId, AttachmentIdFieldsFragment, AttachmentIdFieldsFragmentDoc, AttachmentType, BlockMode, BlockStatusInfo, BlockStatusInfoFieldsFragment, BlockStatusInfoFieldsFragmentDoc, DEFAULT_ENDPOINT, Exact, FeedPostConnection, FeedPostConnectionFieldsFragment, FeedPostConnectionFieldsFragmentDoc, FeedPostEdge, FeedPostEdgeFieldsFragment, FeedPostEdgeFieldsFragmentDoc, FollowLevel, GetAccountProfileDocument, GetAccountProfileQuery, GetAccountProfileQueryVariables, GetBlockedAccountsDocument, GetBlockedAccountsQuery, GetBlockedAccountsQueryVariables, GetCurrentAccountDocument, GetCurrentAccountQuery, GetCurrentAccountQueryVariables, GetDiscussionsDocument, GetDiscussionsQuery, GetDiscussionsQueryVariables, GetFeedPostsDocument, GetFeedPostsQuery, GetFeedPostsQueryVariables, GetFollowedAccountsDocument, GetFollowedAccountsQuery, GetFollowedAccountsQueryVariables, GetFollowedPostCollectionsDocument, GetFollowedPostCollectionsQuery, GetFollowedPostCollectionsQueryVariables, GetFollowingAccountsDocument, GetFollowingAccountsQuery, GetFollowingAccountsQueryVariables, GetFollowingPostsDocument, GetFollowingPostsQuery, GetFollowingPostsQueryVariables, GetHistoryPostsDocument, GetHistoryPostsQuery, GetHistoryPostsQueryVariables, GetLinkPreviewDocument, GetLinkPreviewQuery, GetLinkPreviewQueryVariables, GetMediaDocument, GetMediaQuery, GetMediaQueryVariables, GetMutualFollowersDocument, GetMutualFollowersQuery, GetMutualFollowersQueryVariables, GetMyPostCollectionsDocument, GetMyPostCollectionsQuery, GetMyPostCollectionsQueryVariables, GetNotificationsDocument, GetNotificationsQuery, GetNotificationsQueryVariables, GetPopularPostsDocument, GetPopularPostsQuery, GetPopularPostsQueryVariables, GetPostCollectionDocument, GetPostCollectionQuery, GetPostCollectionQueryVariables, GetPostCollectionsByAuthorDocument, GetPostCollectionsByAuthorQuery, GetPostCollectionsByAuthorQueryVariables, GetPostDocument, GetPostDraftDocument, GetPostDraftQuery, GetPostDraftQueryVariables, GetPostDraftsCountDocument, GetPostDraftsCountQuery, GetPostDraftsCountQueryVariables, GetPostDraftsDocument, GetPostDraftsQuery, GetPostDraftsQueryVariables, GetPostQuery, GetPostQueryVariables, GetPostReactionDetailsDocument, GetPostReactionDetailsQuery, GetPostReactionDetailsQueryVariables, GetPostReactionsDocument, GetPostReactionsQuery, GetPostReactionsQueryVariables, GetProfileTagByIdDocument, GetProfileTagByIdQuery, GetProfileTagByIdQueryVariables, GetProfileTagProfilesDocument, GetProfileTagProfilesQuery, GetProfileTagProfilesQueryVariables, GetReactedPostsDocument, GetReactedPostsQuery, GetReactedPostsQueryVariables, GetTopicFeedPostsDocument, GetTopicFeedPostsQuery, GetTopicFeedPostsQueryVariables, GetTopicsDocument, GetTopicsQuery, GetTopicsQueryVariables, GetUnreadNotificationCountDocument, GetUnreadNotificationCountQuery, GetUnreadNotificationCountQueryVariables, GetUserPostsDocument, GetUserPostsQuery, GetUserPostsQueryVariables, GetUserReactionsDocument, GetUserReactionsQuery, GetUserReactionsQueryVariables, Incremental, InputMaybe, LinkPreview, LinkPreviewFieldsFragment, LinkPreviewFieldsFragmentDoc, LinkPreviewResourceType, ListProfileTagsDocument, ListProfileTagsQuery, ListProfileTagsQueryVariables, MakeEmpty, MakeMaybe, MakeOptional, Maybe, MediaFileMetadata, MediaFileMetadataFieldsFragment, MediaFileMetadataFieldsFragmentDoc, MediaFileProfile, MediaMetadata, MediaMetadataFieldsFragment, MediaMetadataFieldsFragmentDoc, MediaStatus, MediaType, MonoPostDraft, MonoPostDraftFieldsFragment, MonoPostDraftFieldsFragmentDoc, MosirBaseClient, MosirClient, MosirClientOptions, MosirDocument, MosirRequestOptions, NativeReactionType, Notification, NotificationConnection, NotificationConnectionFieldsFragment, NotificationConnectionFieldsFragmentDoc, NotificationFieldsFragment, NotificationFieldsFragmentDoc, NotificationFilterInput, NotificationReceivedDocument, NotificationReceivedSubscription, NotificationReceivedSubscriptionVariables, NotificationType, PageInfo, PageInfoFieldsFragment, PageInfoFieldsFragmentDoc, Post, PostCollection, PostCollectionConnection, PostCollectionConnectionFieldsFragment, PostCollectionConnectionFieldsFragmentDoc, PostCollectionFieldsFragment, PostCollectionFieldsFragmentDoc, PostCollectionPostOrder, PostCollectionPostsArgs, PostCollectionPostsCenteredAtArgs, PostCollectionReferenceFieldsFragment, PostCollectionReferenceFieldsFragmentDoc, PostCommentPolicy, PostCommentsPopularArgs, PostCommentsRecentArgs, PostConnection, PostConnectionFieldsFragment, PostConnectionFieldsFragmentDoc, PostCopyPolicy, PostCreatedByAuthorDocument, PostCreatedByAuthorSubscription, PostCreatedByAuthorSubscriptionVariables, PostCreatedInCollectionDocument, PostCreatedInCollectionSubscription, PostCreatedInCollectionSubscriptionVariables, PostDeletedDocument, PostDeletedSubscription, PostDeletedSubscriptionVariables, PostDraft, PostDraftConnection, PostDraftConnectionFieldsFragment, PostDraftConnectionFieldsFragmentDoc, PostDraftFieldsFragment, PostDraftFieldsFragmentDoc, PostDraftFilterInput, PostFieldsFragment, PostFieldsFragmentDoc, PostOperationPermission, PostOperationPermissionFieldsFragment, PostOperationPermissionFieldsFragmentDoc, PostOptions, PostOptionsFieldsFragment, PostOptionsFieldsFragmentDoc, PostPushPolicy, PostReactionDetailRecordConnection, PostReactionDetailRecordConnectionFieldsFragment, PostReactionDetailRecordConnectionFieldsFragmentDoc, PostReactionPolicy, PostReactionsArgs, PostReactionsConnection, PostReactionsConnectionFieldsFragment, PostReactionsConnectionFieldsFragmentDoc, PostReferenceFieldsFragment, PostReferenceFieldsFragmentDoc, PostRelatedCommentsArgs, PostType, PostUpdatedDocument, PostUpdatedSubscription, PostUpdatedSubscriptionVariables, PostVisibility, PostVisibilityFieldsFragment, PostVisibilityFieldsFragmentDoc, PostVisibilityPolicy, PreferInteractionType, Profile, ProfileConnection, ProfileConnectionFieldsFragment, ProfileConnectionFieldsFragmentDoc, ProfileFieldsFragment, ProfileFieldsFragmentDoc, ProfileFollowStatus, ProfileFollowStatusFieldsFragment, ProfileFollowStatusFieldsFragmentDoc, ProfileReferenceFieldsFragment, ProfileReferenceFieldsFragmentDoc, ProfileTag, ProfileTagConnection, ProfileTagConnectionFieldsFragment, ProfileTagConnectionFieldsFragmentDoc, ProfileTagFieldsFragment, ProfileTagFieldsFragmentDoc, ProfileTagPostsArgs, Query, QueryGetAccountProfileArgs, QueryGetBlockedAccountsArgs, QueryGetDiscussionsArgs, QueryGetFeedPostsArgs, QueryGetFollowedAccountsArgs, QueryGetFollowedPostCollectionsArgs, QueryGetFollowingAccountsArgs, QueryGetFollowingPostsArgs, QueryGetHistoryPostsArgs, QueryGetLinkPreviewArgs, QueryGetMediaArgs, QueryGetMutualFollowersArgs, QueryGetMyPostCollectionsArgs, QueryGetNotificationsArgs, QueryGetPopularPostsArgs, QueryGetPostArgs, QueryGetPostCollectionArgs, QueryGetPostCollectionsByAuthorArgs, QueryGetPostDraftArgs, QueryGetPostDraftsArgs, QueryGetPostDraftsCountArgs, QueryGetPostReactionDetailsArgs, QueryGetPostReactionsArgs, QueryGetProfileTagByIdArgs, QueryGetProfileTagProfilesArgs, QueryGetReactedPostsArgs, QueryGetTopicFeedPostsArgs, QueryGetTopicsArgs, QueryGetUserPostsArgs, QueryGetUserReactionsArgs, QueryListProfileTagsArgs, ReactionDetailRecord, ReactionDetailRecordFieldsFragment, ReactionDetailRecordFieldsFragmentDoc, ReactionSummary, ReactionSummaryFieldsFragment, ReactionSummaryFieldsFragmentDoc, ReactionType, ReactionTypeFieldsFragment, ReactionTypeFieldsFragmentDoc, ReactionTypeInput, ReplyCreatedUnderRootPostDocument, ReplyCreatedUnderRootPostSubscription, ReplyCreatedUnderRootPostSubscriptionVariables, Requester, Scalars, Sdk, SdkRequester, Status, Subscription, SubscriptionPostCreatedByAuthorArgs, SubscriptionPostCreatedInCollectionArgs, SubscriptionPostDeletedArgs, SubscriptionPostUpdatedArgs, SubscriptionReplyCreatedUnderRootPostArgs, Topic, TopicFieldsFragment, TopicFieldsFragmentDoc, UserReactionStatistics, UserReactionStatisticsFieldsFragment, UserReactionStatisticsFieldsFragmentDoc, UserReactionsStatisticsConnection, UserReactionsStatisticsConnectionFieldsFragment, UserReactionsStatisticsConnectionFieldsFragmentDoc, createMosirClient, getSdk };
//# sourceMappingURL=index.d.ts.map