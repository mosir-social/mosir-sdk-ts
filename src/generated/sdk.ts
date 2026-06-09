import type { DocumentNode } from 'graphql';
import * as Operations from './graphql';









































export type Requester<C = {}> = <R, V>(doc: DocumentNode, vars?: V, options?: C) => Promise<R> | AsyncIterable<R>
export function getSdk<C>(requester: Requester<C>) {
  return {
    GetAccountProfile(variables?: Operations.GetAccountProfileQueryVariables, options?: C): Promise<Operations.GetAccountProfileQuery> {
      return requester<Operations.GetAccountProfileQuery, Operations.GetAccountProfileQueryVariables>(Operations.GetAccountProfileDocument, variables, options) as Promise<Operations.GetAccountProfileQuery>;
    },
    GetBlockedAccounts(variables?: Operations.GetBlockedAccountsQueryVariables, options?: C): Promise<Operations.GetBlockedAccountsQuery> {
      return requester<Operations.GetBlockedAccountsQuery, Operations.GetBlockedAccountsQueryVariables>(Operations.GetBlockedAccountsDocument, variables, options) as Promise<Operations.GetBlockedAccountsQuery>;
    },
    GetCurrentAccount(variables?: Operations.GetCurrentAccountQueryVariables, options?: C): Promise<Operations.GetCurrentAccountQuery> {
      return requester<Operations.GetCurrentAccountQuery, Operations.GetCurrentAccountQueryVariables>(Operations.GetCurrentAccountDocument, variables, options) as Promise<Operations.GetCurrentAccountQuery>;
    },
    GetDiscussions(variables?: Operations.GetDiscussionsQueryVariables, options?: C): Promise<Operations.GetDiscussionsQuery> {
      return requester<Operations.GetDiscussionsQuery, Operations.GetDiscussionsQueryVariables>(Operations.GetDiscussionsDocument, variables, options) as Promise<Operations.GetDiscussionsQuery>;
    },
    GetFeedPosts(variables?: Operations.GetFeedPostsQueryVariables, options?: C): Promise<Operations.GetFeedPostsQuery> {
      return requester<Operations.GetFeedPostsQuery, Operations.GetFeedPostsQueryVariables>(Operations.GetFeedPostsDocument, variables, options) as Promise<Operations.GetFeedPostsQuery>;
    },
    GetFollowedAccounts(variables: Operations.GetFollowedAccountsQueryVariables, options?: C): Promise<Operations.GetFollowedAccountsQuery> {
      return requester<Operations.GetFollowedAccountsQuery, Operations.GetFollowedAccountsQueryVariables>(Operations.GetFollowedAccountsDocument, variables, options) as Promise<Operations.GetFollowedAccountsQuery>;
    },
    GetFollowedPostCollections(variables?: Operations.GetFollowedPostCollectionsQueryVariables, options?: C): Promise<Operations.GetFollowedPostCollectionsQuery> {
      return requester<Operations.GetFollowedPostCollectionsQuery, Operations.GetFollowedPostCollectionsQueryVariables>(Operations.GetFollowedPostCollectionsDocument, variables, options) as Promise<Operations.GetFollowedPostCollectionsQuery>;
    },
    GetFollowingAccounts(variables: Operations.GetFollowingAccountsQueryVariables, options?: C): Promise<Operations.GetFollowingAccountsQuery> {
      return requester<Operations.GetFollowingAccountsQuery, Operations.GetFollowingAccountsQueryVariables>(Operations.GetFollowingAccountsDocument, variables, options) as Promise<Operations.GetFollowingAccountsQuery>;
    },
    GetFollowingPosts(variables?: Operations.GetFollowingPostsQueryVariables, options?: C): Promise<Operations.GetFollowingPostsQuery> {
      return requester<Operations.GetFollowingPostsQuery, Operations.GetFollowingPostsQueryVariables>(Operations.GetFollowingPostsDocument, variables, options) as Promise<Operations.GetFollowingPostsQuery>;
    },
    GetHistoryPosts(variables?: Operations.GetHistoryPostsQueryVariables, options?: C): Promise<Operations.GetHistoryPostsQuery> {
      return requester<Operations.GetHistoryPostsQuery, Operations.GetHistoryPostsQueryVariables>(Operations.GetHistoryPostsDocument, variables, options) as Promise<Operations.GetHistoryPostsQuery>;
    },
    GetLinkPreview(variables: Operations.GetLinkPreviewQueryVariables, options?: C): Promise<Operations.GetLinkPreviewQuery> {
      return requester<Operations.GetLinkPreviewQuery, Operations.GetLinkPreviewQueryVariables>(Operations.GetLinkPreviewDocument, variables, options) as Promise<Operations.GetLinkPreviewQuery>;
    },
    GetMedia(variables: Operations.GetMediaQueryVariables, options?: C): Promise<Operations.GetMediaQuery> {
      return requester<Operations.GetMediaQuery, Operations.GetMediaQueryVariables>(Operations.GetMediaDocument, variables, options) as Promise<Operations.GetMediaQuery>;
    },
    GetMutualFollowers(variables: Operations.GetMutualFollowersQueryVariables, options?: C): Promise<Operations.GetMutualFollowersQuery> {
      return requester<Operations.GetMutualFollowersQuery, Operations.GetMutualFollowersQueryVariables>(Operations.GetMutualFollowersDocument, variables, options) as Promise<Operations.GetMutualFollowersQuery>;
    },
    GetMyPostCollections(variables?: Operations.GetMyPostCollectionsQueryVariables, options?: C): Promise<Operations.GetMyPostCollectionsQuery> {
      return requester<Operations.GetMyPostCollectionsQuery, Operations.GetMyPostCollectionsQueryVariables>(Operations.GetMyPostCollectionsDocument, variables, options) as Promise<Operations.GetMyPostCollectionsQuery>;
    },
    GetNotifications(variables?: Operations.GetNotificationsQueryVariables, options?: C): Promise<Operations.GetNotificationsQuery> {
      return requester<Operations.GetNotificationsQuery, Operations.GetNotificationsQueryVariables>(Operations.GetNotificationsDocument, variables, options) as Promise<Operations.GetNotificationsQuery>;
    },
    GetPopularPosts(variables?: Operations.GetPopularPostsQueryVariables, options?: C): Promise<Operations.GetPopularPostsQuery> {
      return requester<Operations.GetPopularPostsQuery, Operations.GetPopularPostsQueryVariables>(Operations.GetPopularPostsDocument, variables, options) as Promise<Operations.GetPopularPostsQuery>;
    },
    GetPost(variables: Operations.GetPostQueryVariables, options?: C): Promise<Operations.GetPostQuery> {
      return requester<Operations.GetPostQuery, Operations.GetPostQueryVariables>(Operations.GetPostDocument, variables, options) as Promise<Operations.GetPostQuery>;
    },
    GetPostCollection(variables: Operations.GetPostCollectionQueryVariables, options?: C): Promise<Operations.GetPostCollectionQuery> {
      return requester<Operations.GetPostCollectionQuery, Operations.GetPostCollectionQueryVariables>(Operations.GetPostCollectionDocument, variables, options) as Promise<Operations.GetPostCollectionQuery>;
    },
    SearchPostCollections(variables: Operations.SearchPostCollectionsQueryVariables, options?: C): Promise<Operations.SearchPostCollectionsQuery> {
      return requester<Operations.SearchPostCollectionsQuery, Operations.SearchPostCollectionsQueryVariables>(Operations.SearchPostCollectionsDocument, variables, options) as Promise<Operations.SearchPostCollectionsQuery>;
    },
    GetPostCollectionsByAuthor(variables: Operations.GetPostCollectionsByAuthorQueryVariables, options?: C): Promise<Operations.GetPostCollectionsByAuthorQuery> {
      return requester<Operations.GetPostCollectionsByAuthorQuery, Operations.GetPostCollectionsByAuthorQueryVariables>(Operations.GetPostCollectionsByAuthorDocument, variables, options) as Promise<Operations.GetPostCollectionsByAuthorQuery>;
    },
    GetPostDraft(variables: Operations.GetPostDraftQueryVariables, options?: C): Promise<Operations.GetPostDraftQuery> {
      return requester<Operations.GetPostDraftQuery, Operations.GetPostDraftQueryVariables>(Operations.GetPostDraftDocument, variables, options) as Promise<Operations.GetPostDraftQuery>;
    },
    GetPostDrafts(variables?: Operations.GetPostDraftsQueryVariables, options?: C): Promise<Operations.GetPostDraftsQuery> {
      return requester<Operations.GetPostDraftsQuery, Operations.GetPostDraftsQueryVariables>(Operations.GetPostDraftsDocument, variables, options) as Promise<Operations.GetPostDraftsQuery>;
    },
    GetPostDraftsCount(variables?: Operations.GetPostDraftsCountQueryVariables, options?: C): Promise<Operations.GetPostDraftsCountQuery> {
      return requester<Operations.GetPostDraftsCountQuery, Operations.GetPostDraftsCountQueryVariables>(Operations.GetPostDraftsCountDocument, variables, options) as Promise<Operations.GetPostDraftsCountQuery>;
    },
    GetPostReactionDetails(variables: Operations.GetPostReactionDetailsQueryVariables, options?: C): Promise<Operations.GetPostReactionDetailsQuery> {
      return requester<Operations.GetPostReactionDetailsQuery, Operations.GetPostReactionDetailsQueryVariables>(Operations.GetPostReactionDetailsDocument, variables, options) as Promise<Operations.GetPostReactionDetailsQuery>;
    },
    GetPostReactions(variables: Operations.GetPostReactionsQueryVariables, options?: C): Promise<Operations.GetPostReactionsQuery> {
      return requester<Operations.GetPostReactionsQuery, Operations.GetPostReactionsQueryVariables>(Operations.GetPostReactionsDocument, variables, options) as Promise<Operations.GetPostReactionsQuery>;
    },
    GetProfileTagById(variables: Operations.GetProfileTagByIdQueryVariables, options?: C): Promise<Operations.GetProfileTagByIdQuery> {
      return requester<Operations.GetProfileTagByIdQuery, Operations.GetProfileTagByIdQueryVariables>(Operations.GetProfileTagByIdDocument, variables, options) as Promise<Operations.GetProfileTagByIdQuery>;
    },
    GetProfileTagProfiles(variables: Operations.GetProfileTagProfilesQueryVariables, options?: C): Promise<Operations.GetProfileTagProfilesQuery> {
      return requester<Operations.GetProfileTagProfilesQuery, Operations.GetProfileTagProfilesQueryVariables>(Operations.GetProfileTagProfilesDocument, variables, options) as Promise<Operations.GetProfileTagProfilesQuery>;
    },
    GetReactedPosts(variables: Operations.GetReactedPostsQueryVariables, options?: C): Promise<Operations.GetReactedPostsQuery> {
      return requester<Operations.GetReactedPostsQuery, Operations.GetReactedPostsQueryVariables>(Operations.GetReactedPostsDocument, variables, options) as Promise<Operations.GetReactedPostsQuery>;
    },
    GetTopicFeedPosts(variables: Operations.GetTopicFeedPostsQueryVariables, options?: C): Promise<Operations.GetTopicFeedPostsQuery> {
      return requester<Operations.GetTopicFeedPostsQuery, Operations.GetTopicFeedPostsQueryVariables>(Operations.GetTopicFeedPostsDocument, variables, options) as Promise<Operations.GetTopicFeedPostsQuery>;
    },
    GetTopics(variables?: Operations.GetTopicsQueryVariables, options?: C): Promise<Operations.GetTopicsQuery> {
      return requester<Operations.GetTopicsQuery, Operations.GetTopicsQueryVariables>(Operations.GetTopicsDocument, variables, options) as Promise<Operations.GetTopicsQuery>;
    },
    GetUnreadNotificationCount(variables?: Operations.GetUnreadNotificationCountQueryVariables, options?: C): Promise<Operations.GetUnreadNotificationCountQuery> {
      return requester<Operations.GetUnreadNotificationCountQuery, Operations.GetUnreadNotificationCountQueryVariables>(Operations.GetUnreadNotificationCountDocument, variables, options) as Promise<Operations.GetUnreadNotificationCountQuery>;
    },
    GetUserPosts(variables: Operations.GetUserPostsQueryVariables, options?: C): Promise<Operations.GetUserPostsQuery> {
      return requester<Operations.GetUserPostsQuery, Operations.GetUserPostsQueryVariables>(Operations.GetUserPostsDocument, variables, options) as Promise<Operations.GetUserPostsQuery>;
    },
    GetUserReactions(variables?: Operations.GetUserReactionsQueryVariables, options?: C): Promise<Operations.GetUserReactionsQuery> {
      return requester<Operations.GetUserReactionsQuery, Operations.GetUserReactionsQueryVariables>(Operations.GetUserReactionsDocument, variables, options) as Promise<Operations.GetUserReactionsQuery>;
    },
    ListProfileTags(variables?: Operations.ListProfileTagsQueryVariables, options?: C): Promise<Operations.ListProfileTagsQuery> {
      return requester<Operations.ListProfileTagsQuery, Operations.ListProfileTagsQueryVariables>(Operations.ListProfileTagsDocument, variables, options) as Promise<Operations.ListProfileTagsQuery>;
    },
    NotificationReceived(variables?: Operations.NotificationReceivedSubscriptionVariables, options?: C): AsyncIterable<Operations.NotificationReceivedSubscription> {
      return requester<Operations.NotificationReceivedSubscription, Operations.NotificationReceivedSubscriptionVariables>(Operations.NotificationReceivedDocument, variables, options) as AsyncIterable<Operations.NotificationReceivedSubscription>;
    },
    PostCreatedByAuthor(variables: Operations.PostCreatedByAuthorSubscriptionVariables, options?: C): AsyncIterable<Operations.PostCreatedByAuthorSubscription> {
      return requester<Operations.PostCreatedByAuthorSubscription, Operations.PostCreatedByAuthorSubscriptionVariables>(Operations.PostCreatedByAuthorDocument, variables, options) as AsyncIterable<Operations.PostCreatedByAuthorSubscription>;
    },
    PostCreatedInCollection(variables: Operations.PostCreatedInCollectionSubscriptionVariables, options?: C): AsyncIterable<Operations.PostCreatedInCollectionSubscription> {
      return requester<Operations.PostCreatedInCollectionSubscription, Operations.PostCreatedInCollectionSubscriptionVariables>(Operations.PostCreatedInCollectionDocument, variables, options) as AsyncIterable<Operations.PostCreatedInCollectionSubscription>;
    },
    PostDeleted(variables: Operations.PostDeletedSubscriptionVariables, options?: C): AsyncIterable<Operations.PostDeletedSubscription> {
      return requester<Operations.PostDeletedSubscription, Operations.PostDeletedSubscriptionVariables>(Operations.PostDeletedDocument, variables, options) as AsyncIterable<Operations.PostDeletedSubscription>;
    },
    PostUpdated(variables: Operations.PostUpdatedSubscriptionVariables, options?: C): AsyncIterable<Operations.PostUpdatedSubscription> {
      return requester<Operations.PostUpdatedSubscription, Operations.PostUpdatedSubscriptionVariables>(Operations.PostUpdatedDocument, variables, options) as AsyncIterable<Operations.PostUpdatedSubscription>;
    },
    ReplyCreatedUnderRootPost(variables: Operations.ReplyCreatedUnderRootPostSubscriptionVariables, options?: C): AsyncIterable<Operations.ReplyCreatedUnderRootPostSubscription> {
      return requester<Operations.ReplyCreatedUnderRootPostSubscription, Operations.ReplyCreatedUnderRootPostSubscriptionVariables>(Operations.ReplyCreatedUnderRootPostDocument, variables, options) as AsyncIterable<Operations.ReplyCreatedUnderRootPostSubscription>;
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;