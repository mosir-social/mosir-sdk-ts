import { GraphQLClient } from "graphql-request";
import { createClient } from "graphql-sse";
import { getOperationAST, parse, print } from "graphql";
//#region src/generated/graphql.ts
const AccountFieldsFragmentDoc = {
	"kind": "Document",
	"definitions": [{
		"kind": "FragmentDefinition",
		"name": {
			"kind": "Name",
			"value": "AccountFields"
		},
		"typeCondition": {
			"kind": "NamedType",
			"name": {
				"kind": "Name",
				"value": "Account"
			}
		},
		"selectionSet": {
			"kind": "SelectionSet",
			"selections": [
				{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "id"
					}
				},
				{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "username"
					}
				},
				{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "email"
					}
				},
				{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "createdAt"
					}
				},
				{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "lastLogin"
					}
				},
				{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "status"
					}
				}
			]
		}
	}]
};
const TopicFieldsFragmentDoc = {
	"kind": "Document",
	"definitions": [{
		"kind": "FragmentDefinition",
		"name": {
			"kind": "Name",
			"value": "TopicFields"
		},
		"typeCondition": {
			"kind": "NamedType",
			"name": {
				"kind": "Name",
				"value": "Topic"
			}
		},
		"selectionSet": {
			"kind": "SelectionSet",
			"selections": [
				{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "id"
					}
				},
				{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "emoji"
					}
				},
				{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "title"
					}
				}
			]
		}
	}]
};
const ProfileReferenceFieldsFragmentDoc = {
	"kind": "Document",
	"definitions": [{
		"kind": "FragmentDefinition",
		"name": {
			"kind": "Name",
			"value": "ProfileReferenceFields"
		},
		"typeCondition": {
			"kind": "NamedType",
			"name": {
				"kind": "Name",
				"value": "Profile"
			}
		},
		"selectionSet": {
			"kind": "SelectionSet",
			"selections": [
				{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "id"
					}
				},
				{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "username"
					}
				},
				{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "displayName"
					}
				},
				{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "profileEmoji"
					}
				},
				{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "profileMediaId"
					}
				}
			]
		}
	}]
};
const AttachmentIdFieldsFragmentDoc = {
	"kind": "Document",
	"definitions": [{
		"kind": "FragmentDefinition",
		"name": {
			"kind": "Name",
			"value": "AttachmentIDFields"
		},
		"typeCondition": {
			"kind": "NamedType",
			"name": {
				"kind": "Name",
				"value": "AttachmentID"
			}
		},
		"selectionSet": {
			"kind": "SelectionSet",
			"selections": [
				{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "type"
					}
				},
				{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "embeddedCollectionId"
					}
				},
				{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "embeddedPostId"
					}
				},
				{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "embeddedProfileId"
					}
				},
				{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "linkUrl"
					}
				},
				{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "mediaId"
					}
				}
			]
		}
	}]
};
const LinkPreviewFieldsFragmentDoc = {
	"kind": "Document",
	"definitions": [{
		"kind": "FragmentDefinition",
		"name": {
			"kind": "Name",
			"value": "LinkPreviewFields"
		},
		"typeCondition": {
			"kind": "NamedType",
			"name": {
				"kind": "Name",
				"value": "LinkPreview"
			}
		},
		"selectionSet": {
			"kind": "SelectionSet",
			"selections": [
				{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "Url"
					}
				},
				{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "canonicalUrl"
					}
				},
				{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "resourceType"
					}
				},
				{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "summary"
					}
				},
				{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "thumbnailUrl"
					}
				},
				{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "title"
					}
				}
			]
		}
	}]
};
const AspectRatioFieldsFragmentDoc = {
	"kind": "Document",
	"definitions": [{
		"kind": "FragmentDefinition",
		"name": {
			"kind": "Name",
			"value": "AspectRatioFields"
		},
		"typeCondition": {
			"kind": "NamedType",
			"name": {
				"kind": "Name",
				"value": "AspectRatio"
			}
		},
		"selectionSet": {
			"kind": "SelectionSet",
			"selections": [{
				"kind": "Field",
				"name": {
					"kind": "Name",
					"value": "numerator"
				}
			}, {
				"kind": "Field",
				"name": {
					"kind": "Name",
					"value": "denominator"
				}
			}]
		}
	}]
};
const MediaFileMetadataFieldsFragmentDoc = {
	"kind": "Document",
	"definitions": [{
		"kind": "FragmentDefinition",
		"name": {
			"kind": "Name",
			"value": "MediaFileMetadataFields"
		},
		"typeCondition": {
			"kind": "NamedType",
			"name": {
				"kind": "Name",
				"value": "MediaFileMetadata"
			}
		},
		"selectionSet": {
			"kind": "SelectionSet",
			"selections": [
				{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "id"
					}
				},
				{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "mediaId"
					}
				},
				{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "profile"
					}
				},
				{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "contentType"
					}
				},
				{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "url"
					}
				}
			]
		}
	}]
};
const MediaMetadataFieldsFragmentDoc = {
	"kind": "Document",
	"definitions": [
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "MediaMetadataFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "MediaMetadata"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "accountID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "aspectRatio"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "AspectRatioFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "blurHash"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "durationMs"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "files"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "MediaFileMetadataFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "status"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "type"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "AspectRatioFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "AspectRatio"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "numerator"
					}
				}, {
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "denominator"
					}
				}]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "MediaFileMetadataFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "MediaFileMetadata"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "mediaId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profile"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "contentType"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "url"
						}
					}
				]
			}
		}
	]
};
const PostReferenceFieldsFragmentDoc = {
	"kind": "Document",
	"definitions": [{
		"kind": "FragmentDefinition",
		"name": {
			"kind": "Name",
			"value": "PostReferenceFields"
		},
		"typeCondition": {
			"kind": "NamedType",
			"name": {
				"kind": "Name",
				"value": "Post"
			}
		},
		"selectionSet": {
			"kind": "SelectionSet",
			"selections": [
				{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "id"
					}
				},
				{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "authorID"
					}
				},
				{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "content"
					}
				},
				{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "createdAt"
					}
				},
				{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "parentPostId"
					}
				},
				{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "commentCount"
					}
				}
			]
		}
	}]
};
const PostCollectionReferenceFieldsFragmentDoc = {
	"kind": "Document",
	"definitions": [{
		"kind": "FragmentDefinition",
		"name": {
			"kind": "Name",
			"value": "PostCollectionReferenceFields"
		},
		"typeCondition": {
			"kind": "NamedType",
			"name": {
				"kind": "Name",
				"value": "PostCollection"
			}
		},
		"selectionSet": {
			"kind": "SelectionSet",
			"selections": [
				{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "id"
					}
				},
				{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "authorID"
					}
				},
				{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "coverMediaID"
					}
				},
				{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "createdAt"
					}
				},
				{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "description"
					}
				},
				{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "followLevel"
					}
				},
				{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "postCount"
					}
				},
				{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "title"
					}
				},
				{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "updatedAt"
					}
				}
			]
		}
	}]
};
const AttachmentFieldsFragmentDoc = {
	"kind": "Document",
	"definitions": [
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "AttachmentFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "Attachment"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "type"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "linkPreview"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "LinkPreviewFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "media"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "MediaMetadataFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "embeddedProfile"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "ProfileReferenceFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "embeddedPost"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostReferenceFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "embeddedCollection"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostCollectionReferenceFields"
								}
							}]
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "AspectRatioFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "AspectRatio"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "numerator"
					}
				}, {
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "denominator"
					}
				}]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "MediaFileMetadataFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "MediaFileMetadata"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "mediaId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profile"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "contentType"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "url"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "MediaMetadataFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "MediaMetadata"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "accountID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "aspectRatio"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "AspectRatioFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "blurHash"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "durationMs"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "files"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "MediaFileMetadataFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "status"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "type"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "LinkPreviewFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "LinkPreview"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "Url"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "canonicalUrl"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "resourceType"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "summary"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "thumbnailUrl"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "title"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "ProfileReferenceFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "Profile"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "username"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "displayName"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileEmoji"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileMediaId"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostReferenceFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "Post"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "authorID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "content"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "createdAt"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "parentPostId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "commentCount"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostCollectionReferenceFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PostCollection"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "authorID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "coverMediaID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "createdAt"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "description"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "followLevel"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postCount"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "title"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "updatedAt"
						}
					}
				]
			}
		}
	]
};
const PostOperationPermissionFieldsFragmentDoc = {
	"kind": "Document",
	"definitions": [{
		"kind": "FragmentDefinition",
		"name": {
			"kind": "Name",
			"value": "PostOperationPermissionFields"
		},
		"typeCondition": {
			"kind": "NamedType",
			"name": {
				"kind": "Name",
				"value": "PostOperationPermission"
			}
		},
		"selectionSet": {
			"kind": "SelectionSet",
			"selections": [{
				"kind": "Field",
				"name": {
					"kind": "Name",
					"value": "canComment"
				}
			}, {
				"kind": "Field",
				"name": {
					"kind": "Name",
					"value": "canReact"
				}
			}]
		}
	}]
};
const PostVisibilityFieldsFragmentDoc = {
	"kind": "Document",
	"definitions": [{
		"kind": "FragmentDefinition",
		"name": {
			"kind": "Name",
			"value": "PostVisibilityFields"
		},
		"typeCondition": {
			"kind": "NamedType",
			"name": {
				"kind": "Name",
				"value": "PostVisibility"
			}
		},
		"selectionSet": {
			"kind": "SelectionSet",
			"selections": [
				{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "policy"
					}
				},
				{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "profileTags"
					}
				},
				{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "pushPolicy"
					}
				}
			]
		}
	}]
};
const PostOptionsFieldsFragmentDoc = {
	"kind": "Document",
	"definitions": [{
		"kind": "FragmentDefinition",
		"name": {
			"kind": "Name",
			"value": "PostOptionsFields"
		},
		"typeCondition": {
			"kind": "NamedType",
			"name": {
				"kind": "Name",
				"value": "PostOptions"
			}
		},
		"selectionSet": {
			"kind": "SelectionSet",
			"selections": [
				{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "commentPolicy"
					}
				},
				{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "copyPolicy"
					}
				},
				{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "reactionPolicy"
					}
				},
				{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "postVisibility"
					},
					"selectionSet": {
						"kind": "SelectionSet",
						"selections": [{
							"kind": "FragmentSpread",
							"name": {
								"kind": "Name",
								"value": "PostVisibilityFields"
							}
						}]
					}
				}
			]
		}
	}, {
		"kind": "FragmentDefinition",
		"name": {
			"kind": "Name",
			"value": "PostVisibilityFields"
		},
		"typeCondition": {
			"kind": "NamedType",
			"name": {
				"kind": "Name",
				"value": "PostVisibility"
			}
		},
		"selectionSet": {
			"kind": "SelectionSet",
			"selections": [
				{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "policy"
					}
				},
				{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "profileTags"
					}
				},
				{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "pushPolicy"
					}
				}
			]
		}
	}]
};
const ReactionTypeFieldsFragmentDoc = {
	"kind": "Document",
	"definitions": [{
		"kind": "FragmentDefinition",
		"name": {
			"kind": "Name",
			"value": "ReactionTypeFields"
		},
		"typeCondition": {
			"kind": "NamedType",
			"name": {
				"kind": "Name",
				"value": "ReactionType"
			}
		},
		"selectionSet": {
			"kind": "SelectionSet",
			"selections": [{
				"kind": "Field",
				"name": {
					"kind": "Name",
					"value": "emojiValue"
				}
			}, {
				"kind": "Field",
				"name": {
					"kind": "Name",
					"value": "nativeValue"
				}
			}]
		}
	}]
};
const ReactionSummaryFieldsFragmentDoc = {
	"kind": "Document",
	"definitions": [{
		"kind": "FragmentDefinition",
		"name": {
			"kind": "Name",
			"value": "ReactionSummaryFields"
		},
		"typeCondition": {
			"kind": "NamedType",
			"name": {
				"kind": "Name",
				"value": "ReactionSummary"
			}
		},
		"selectionSet": {
			"kind": "SelectionSet",
			"selections": [
				{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "count"
					}
				},
				{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "isReactedByViewer"
					}
				},
				{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "type"
					},
					"selectionSet": {
						"kind": "SelectionSet",
						"selections": [{
							"kind": "FragmentSpread",
							"name": {
								"kind": "Name",
								"value": "ReactionTypeFields"
							}
						}]
					}
				}
			]
		}
	}, {
		"kind": "FragmentDefinition",
		"name": {
			"kind": "Name",
			"value": "ReactionTypeFields"
		},
		"typeCondition": {
			"kind": "NamedType",
			"name": {
				"kind": "Name",
				"value": "ReactionType"
			}
		},
		"selectionSet": {
			"kind": "SelectionSet",
			"selections": [{
				"kind": "Field",
				"name": {
					"kind": "Name",
					"value": "emojiValue"
				}
			}, {
				"kind": "Field",
				"name": {
					"kind": "Name",
					"value": "nativeValue"
				}
			}]
		}
	}]
};
const PostReactionsConnectionFieldsFragmentDoc = {
	"kind": "Document",
	"definitions": [
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostReactionsConnectionFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PostReactionsConnection"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "queryLimit"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "remainingCount"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "viewerId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "reactions"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "ReactionSummaryFields"
								}
							}]
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "ReactionTypeFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "ReactionType"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "emojiValue"
					}
				}, {
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "nativeValue"
					}
				}]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "ReactionSummaryFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "ReactionSummary"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "count"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "isReactedByViewer"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "type"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "ReactionTypeFields"
								}
							}]
						}
					}
				]
			}
		}
	]
};
const PostFieldsFragmentDoc = {
	"kind": "Document",
	"definitions": [
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "Post"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "authorID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "content"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "createdAt"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "parentPostId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "commentCount"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "leafAncestorIds"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "rootAncestorIds"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "author"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "ProfileReferenceFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "attachmentIds"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "AttachmentIDFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "attachments"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "AttachmentFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postCollections"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostCollectionReferenceFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postOperationPermission"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostOperationPermissionFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postOptions"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostOptionsFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "reactions"
						},
						"arguments": [{
							"kind": "Argument",
							"name": {
								"kind": "Name",
								"value": "first"
							},
							"value": {
								"kind": "IntValue",
								"value": "20"
							}
						}],
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostReactionsConnectionFields"
								}
							}]
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "AspectRatioFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "AspectRatio"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "numerator"
					}
				}, {
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "denominator"
					}
				}]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "MediaFileMetadataFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "MediaFileMetadata"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "mediaId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profile"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "contentType"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "url"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "MediaMetadataFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "MediaMetadata"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "accountID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "aspectRatio"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "AspectRatioFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "blurHash"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "durationMs"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "files"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "MediaFileMetadataFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "status"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "type"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "ReactionTypeFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "ReactionType"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "emojiValue"
					}
				}, {
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "nativeValue"
					}
				}]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "ReactionSummaryFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "ReactionSummary"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "count"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "isReactedByViewer"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "type"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "ReactionTypeFields"
								}
							}]
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostReactionsConnectionFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PostReactionsConnection"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "queryLimit"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "remainingCount"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "viewerId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "reactions"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "ReactionSummaryFields"
								}
							}]
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostOperationPermissionFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PostOperationPermission"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "canComment"
					}
				}, {
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "canReact"
					}
				}]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostVisibilityFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PostVisibility"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "policy"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileTags"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "pushPolicy"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostOptionsFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PostOptions"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "commentPolicy"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "copyPolicy"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "reactionPolicy"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postVisibility"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostVisibilityFields"
								}
							}]
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "LinkPreviewFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "LinkPreview"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "Url"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "canonicalUrl"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "resourceType"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "summary"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "thumbnailUrl"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "title"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "ProfileReferenceFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "Profile"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "username"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "displayName"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileEmoji"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileMediaId"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostReferenceFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "Post"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "authorID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "content"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "createdAt"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "parentPostId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "commentCount"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostCollectionReferenceFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PostCollection"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "authorID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "coverMediaID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "createdAt"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "description"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "followLevel"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postCount"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "title"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "updatedAt"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "AttachmentIDFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "AttachmentID"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "type"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "embeddedCollectionId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "embeddedPostId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "embeddedProfileId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "linkUrl"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "mediaId"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "AttachmentFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "Attachment"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "type"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "linkPreview"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "LinkPreviewFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "media"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "MediaMetadataFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "embeddedProfile"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "ProfileReferenceFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "embeddedPost"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostReferenceFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "embeddedCollection"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostCollectionReferenceFields"
								}
							}]
						}
					}
				]
			}
		}
	]
};
const FeedPostEdgeFieldsFragmentDoc = {
	"kind": "Document",
	"definitions": [
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "FeedPostEdgeFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "FeedPostEdge"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "id"
					}
				}, {
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "post"
					},
					"selectionSet": {
						"kind": "SelectionSet",
						"selections": [{
							"kind": "FragmentSpread",
							"name": {
								"kind": "Name",
								"value": "PostFields"
							}
						}]
					}
				}]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "AspectRatioFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "AspectRatio"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "numerator"
					}
				}, {
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "denominator"
					}
				}]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "MediaFileMetadataFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "MediaFileMetadata"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "mediaId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profile"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "contentType"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "url"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "MediaMetadataFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "MediaMetadata"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "accountID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "aspectRatio"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "AspectRatioFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "blurHash"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "durationMs"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "files"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "MediaFileMetadataFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "status"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "type"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "ReactionTypeFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "ReactionType"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "emojiValue"
					}
				}, {
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "nativeValue"
					}
				}]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "ReactionSummaryFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "ReactionSummary"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "count"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "isReactedByViewer"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "type"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "ReactionTypeFields"
								}
							}]
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostReactionsConnectionFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PostReactionsConnection"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "queryLimit"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "remainingCount"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "viewerId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "reactions"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "ReactionSummaryFields"
								}
							}]
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostOperationPermissionFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PostOperationPermission"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "canComment"
					}
				}, {
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "canReact"
					}
				}]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostVisibilityFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PostVisibility"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "policy"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileTags"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "pushPolicy"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostOptionsFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PostOptions"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "commentPolicy"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "copyPolicy"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "reactionPolicy"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postVisibility"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostVisibilityFields"
								}
							}]
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "LinkPreviewFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "LinkPreview"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "Url"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "canonicalUrl"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "resourceType"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "summary"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "thumbnailUrl"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "title"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "ProfileReferenceFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "Profile"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "username"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "displayName"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileEmoji"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileMediaId"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostReferenceFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "Post"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "authorID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "content"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "createdAt"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "parentPostId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "commentCount"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostCollectionReferenceFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PostCollection"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "authorID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "coverMediaID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "createdAt"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "description"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "followLevel"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postCount"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "title"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "updatedAt"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "AttachmentIDFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "AttachmentID"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "type"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "embeddedCollectionId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "embeddedPostId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "embeddedProfileId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "linkUrl"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "mediaId"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "AttachmentFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "Attachment"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "type"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "linkPreview"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "LinkPreviewFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "media"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "MediaMetadataFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "embeddedProfile"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "ProfileReferenceFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "embeddedPost"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostReferenceFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "embeddedCollection"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostCollectionReferenceFields"
								}
							}]
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "Post"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "authorID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "content"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "createdAt"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "parentPostId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "commentCount"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "leafAncestorIds"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "rootAncestorIds"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "author"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "ProfileReferenceFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "attachmentIds"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "AttachmentIDFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "attachments"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "AttachmentFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postCollections"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostCollectionReferenceFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postOperationPermission"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostOperationPermissionFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postOptions"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostOptionsFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "reactions"
						},
						"arguments": [{
							"kind": "Argument",
							"name": {
								"kind": "Name",
								"value": "first"
							},
							"value": {
								"kind": "IntValue",
								"value": "20"
							}
						}],
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostReactionsConnectionFields"
								}
							}]
						}
					}
				]
			}
		}
	]
};
const PageInfoFieldsFragmentDoc = {
	"kind": "Document",
	"definitions": [{
		"kind": "FragmentDefinition",
		"name": {
			"kind": "Name",
			"value": "PageInfoFields"
		},
		"typeCondition": {
			"kind": "NamedType",
			"name": {
				"kind": "Name",
				"value": "PageInfo"
			}
		},
		"selectionSet": {
			"kind": "SelectionSet",
			"selections": [
				{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "endCursor"
					}
				},
				{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "hasNextPage"
					}
				},
				{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "totalCount"
					}
				}
			]
		}
	}]
};
const FeedPostConnectionFieldsFragmentDoc = {
	"kind": "Document",
	"definitions": [
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "FeedPostConnectionFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "FeedPostConnection"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "edges"
					},
					"selectionSet": {
						"kind": "SelectionSet",
						"selections": [{
							"kind": "FragmentSpread",
							"name": {
								"kind": "Name",
								"value": "FeedPostEdgeFields"
							}
						}]
					}
				}, {
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "pageInfo"
					},
					"selectionSet": {
						"kind": "SelectionSet",
						"selections": [{
							"kind": "FragmentSpread",
							"name": {
								"kind": "Name",
								"value": "PageInfoFields"
							}
						}]
					}
				}]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PageInfoFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PageInfo"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "endCursor"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "hasNextPage"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "totalCount"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "AspectRatioFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "AspectRatio"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "numerator"
					}
				}, {
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "denominator"
					}
				}]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "MediaFileMetadataFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "MediaFileMetadata"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "mediaId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profile"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "contentType"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "url"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "MediaMetadataFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "MediaMetadata"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "accountID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "aspectRatio"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "AspectRatioFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "blurHash"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "durationMs"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "files"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "MediaFileMetadataFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "status"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "type"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "ReactionTypeFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "ReactionType"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "emojiValue"
					}
				}, {
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "nativeValue"
					}
				}]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "ReactionSummaryFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "ReactionSummary"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "count"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "isReactedByViewer"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "type"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "ReactionTypeFields"
								}
							}]
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostReactionsConnectionFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PostReactionsConnection"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "queryLimit"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "remainingCount"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "viewerId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "reactions"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "ReactionSummaryFields"
								}
							}]
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostOperationPermissionFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PostOperationPermission"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "canComment"
					}
				}, {
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "canReact"
					}
				}]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostVisibilityFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PostVisibility"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "policy"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileTags"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "pushPolicy"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostOptionsFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PostOptions"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "commentPolicy"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "copyPolicy"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "reactionPolicy"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postVisibility"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostVisibilityFields"
								}
							}]
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "LinkPreviewFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "LinkPreview"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "Url"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "canonicalUrl"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "resourceType"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "summary"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "thumbnailUrl"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "title"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "ProfileReferenceFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "Profile"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "username"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "displayName"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileEmoji"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileMediaId"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostReferenceFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "Post"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "authorID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "content"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "createdAt"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "parentPostId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "commentCount"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostCollectionReferenceFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PostCollection"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "authorID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "coverMediaID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "createdAt"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "description"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "followLevel"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postCount"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "title"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "updatedAt"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "AttachmentIDFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "AttachmentID"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "type"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "embeddedCollectionId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "embeddedPostId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "embeddedProfileId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "linkUrl"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "mediaId"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "AttachmentFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "Attachment"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "type"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "linkPreview"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "LinkPreviewFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "media"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "MediaMetadataFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "embeddedProfile"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "ProfileReferenceFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "embeddedPost"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostReferenceFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "embeddedCollection"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostCollectionReferenceFields"
								}
							}]
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "Post"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "authorID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "content"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "createdAt"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "parentPostId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "commentCount"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "leafAncestorIds"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "rootAncestorIds"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "author"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "ProfileReferenceFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "attachmentIds"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "AttachmentIDFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "attachments"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "AttachmentFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postCollections"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostCollectionReferenceFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postOperationPermission"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostOperationPermissionFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postOptions"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostOptionsFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "reactions"
						},
						"arguments": [{
							"kind": "Argument",
							"name": {
								"kind": "Name",
								"value": "first"
							},
							"value": {
								"kind": "IntValue",
								"value": "20"
							}
						}],
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostReactionsConnectionFields"
								}
							}]
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "FeedPostEdgeFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "FeedPostEdge"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "id"
					}
				}, {
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "post"
					},
					"selectionSet": {
						"kind": "SelectionSet",
						"selections": [{
							"kind": "FragmentSpread",
							"name": {
								"kind": "Name",
								"value": "PostFields"
							}
						}]
					}
				}]
			}
		}
	]
};
const PostConnectionFieldsFragmentDoc = {
	"kind": "Document",
	"definitions": [
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostConnectionFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PostConnection"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "edges"
					},
					"selectionSet": {
						"kind": "SelectionSet",
						"selections": [{
							"kind": "FragmentSpread",
							"name": {
								"kind": "Name",
								"value": "PostFields"
							}
						}]
					}
				}, {
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "pageInfo"
					},
					"selectionSet": {
						"kind": "SelectionSet",
						"selections": [{
							"kind": "FragmentSpread",
							"name": {
								"kind": "Name",
								"value": "PageInfoFields"
							}
						}]
					}
				}]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PageInfoFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PageInfo"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "endCursor"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "hasNextPage"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "totalCount"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "AspectRatioFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "AspectRatio"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "numerator"
					}
				}, {
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "denominator"
					}
				}]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "MediaFileMetadataFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "MediaFileMetadata"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "mediaId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profile"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "contentType"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "url"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "MediaMetadataFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "MediaMetadata"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "accountID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "aspectRatio"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "AspectRatioFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "blurHash"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "durationMs"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "files"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "MediaFileMetadataFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "status"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "type"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "ReactionTypeFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "ReactionType"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "emojiValue"
					}
				}, {
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "nativeValue"
					}
				}]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "ReactionSummaryFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "ReactionSummary"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "count"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "isReactedByViewer"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "type"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "ReactionTypeFields"
								}
							}]
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostReactionsConnectionFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PostReactionsConnection"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "queryLimit"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "remainingCount"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "viewerId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "reactions"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "ReactionSummaryFields"
								}
							}]
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostOperationPermissionFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PostOperationPermission"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "canComment"
					}
				}, {
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "canReact"
					}
				}]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostVisibilityFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PostVisibility"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "policy"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileTags"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "pushPolicy"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostOptionsFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PostOptions"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "commentPolicy"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "copyPolicy"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "reactionPolicy"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postVisibility"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostVisibilityFields"
								}
							}]
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "LinkPreviewFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "LinkPreview"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "Url"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "canonicalUrl"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "resourceType"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "summary"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "thumbnailUrl"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "title"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "ProfileReferenceFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "Profile"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "username"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "displayName"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileEmoji"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileMediaId"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostReferenceFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "Post"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "authorID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "content"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "createdAt"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "parentPostId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "commentCount"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostCollectionReferenceFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PostCollection"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "authorID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "coverMediaID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "createdAt"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "description"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "followLevel"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postCount"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "title"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "updatedAt"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "AttachmentIDFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "AttachmentID"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "type"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "embeddedCollectionId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "embeddedPostId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "embeddedProfileId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "linkUrl"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "mediaId"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "AttachmentFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "Attachment"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "type"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "linkPreview"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "LinkPreviewFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "media"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "MediaMetadataFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "embeddedProfile"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "ProfileReferenceFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "embeddedPost"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostReferenceFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "embeddedCollection"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostCollectionReferenceFields"
								}
							}]
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "Post"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "authorID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "content"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "createdAt"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "parentPostId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "commentCount"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "leafAncestorIds"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "rootAncestorIds"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "author"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "ProfileReferenceFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "attachmentIds"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "AttachmentIDFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "attachments"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "AttachmentFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postCollections"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostCollectionReferenceFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postOperationPermission"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostOperationPermissionFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postOptions"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostOptionsFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "reactions"
						},
						"arguments": [{
							"kind": "Argument",
							"name": {
								"kind": "Name",
								"value": "first"
							},
							"value": {
								"kind": "IntValue",
								"value": "20"
							}
						}],
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostReactionsConnectionFields"
								}
							}]
						}
					}
				]
			}
		}
	]
};
const BlockStatusInfoFieldsFragmentDoc = {
	"kind": "Document",
	"definitions": [{
		"kind": "FragmentDefinition",
		"name": {
			"kind": "Name",
			"value": "BlockStatusInfoFields"
		},
		"typeCondition": {
			"kind": "NamedType",
			"name": {
				"kind": "Name",
				"value": "BlockStatusInfo"
			}
		},
		"selectionSet": {
			"kind": "SelectionSet",
			"selections": [{
				"kind": "Field",
				"name": {
					"kind": "Name",
					"value": "blockStatus"
				}
			}, {
				"kind": "Field",
				"name": {
					"kind": "Name",
					"value": "isBlocked"
				}
			}]
		}
	}]
};
const ProfileFollowStatusFieldsFragmentDoc = {
	"kind": "Document",
	"definitions": [{
		"kind": "FragmentDefinition",
		"name": {
			"kind": "Name",
			"value": "ProfileFollowStatusFields"
		},
		"typeCondition": {
			"kind": "NamedType",
			"name": {
				"kind": "Name",
				"value": "ProfileFollowStatus"
			}
		},
		"selectionSet": {
			"kind": "SelectionSet",
			"selections": [
				{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "followingLevel"
					}
				},
				{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "isFollowedBy"
					}
				},
				{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "isFollowing"
					}
				}
			]
		}
	}]
};
const ProfileTagFieldsFragmentDoc = {
	"kind": "Document",
	"definitions": [{
		"kind": "FragmentDefinition",
		"name": {
			"kind": "Name",
			"value": "ProfileTagFields"
		},
		"typeCondition": {
			"kind": "NamedType",
			"name": {
				"kind": "Name",
				"value": "ProfileTag"
			}
		},
		"selectionSet": {
			"kind": "SelectionSet",
			"selections": [
				{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "id"
					}
				},
				{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "name"
					}
				},
				{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "memberCount"
					}
				},
				{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "AuthorID"
					}
				},
				{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "Author"
					},
					"selectionSet": {
						"kind": "SelectionSet",
						"selections": [{
							"kind": "FragmentSpread",
							"name": {
								"kind": "Name",
								"value": "ProfileReferenceFields"
							}
						}]
					}
				}
			]
		}
	}, {
		"kind": "FragmentDefinition",
		"name": {
			"kind": "Name",
			"value": "ProfileReferenceFields"
		},
		"typeCondition": {
			"kind": "NamedType",
			"name": {
				"kind": "Name",
				"value": "Profile"
			}
		},
		"selectionSet": {
			"kind": "SelectionSet",
			"selections": [
				{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "id"
					}
				},
				{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "username"
					}
				},
				{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "displayName"
					}
				},
				{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "profileEmoji"
					}
				},
				{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "profileMediaId"
					}
				}
			]
		}
	}]
};
const ProfileFieldsFragmentDoc = {
	"kind": "Document",
	"definitions": [
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "ProfileFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "Profile"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "username"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "displayName"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "bio"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "joinedAt"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "followerCount"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "followingCount"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "preferInteractionType"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileEmoji"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileMediaId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "viewerId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "blockingStatus"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "BlockStatusInfoFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "pinnedPostCollectionId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "pinnedPostCollection"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostCollectionReferenceFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileFollowStatus"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "ProfileFollowStatusFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileMedia"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "MediaMetadataFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "tags"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "ProfileTagFields"
								}
							}]
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "AspectRatioFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "AspectRatio"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "numerator"
					}
				}, {
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "denominator"
					}
				}]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "MediaFileMetadataFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "MediaFileMetadata"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "mediaId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profile"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "contentType"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "url"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "MediaMetadataFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "MediaMetadata"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "accountID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "aspectRatio"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "AspectRatioFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "blurHash"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "durationMs"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "files"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "MediaFileMetadataFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "status"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "type"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "BlockStatusInfoFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "BlockStatusInfo"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "blockStatus"
					}
				}, {
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "isBlocked"
					}
				}]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "ProfileFollowStatusFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "ProfileFollowStatus"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "followingLevel"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "isFollowedBy"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "isFollowing"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "ProfileReferenceFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "Profile"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "username"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "displayName"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileEmoji"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileMediaId"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostCollectionReferenceFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PostCollection"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "authorID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "coverMediaID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "createdAt"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "description"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "followLevel"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postCount"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "title"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "updatedAt"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "ProfileTagFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "ProfileTag"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "name"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "memberCount"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "AuthorID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "Author"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "ProfileReferenceFields"
								}
							}]
						}
					}
				]
			}
		}
	]
};
const ProfileConnectionFieldsFragmentDoc = {
	"kind": "Document",
	"definitions": [
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "ProfileConnectionFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "ProfileConnection"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "edges"
					},
					"selectionSet": {
						"kind": "SelectionSet",
						"selections": [{
							"kind": "FragmentSpread",
							"name": {
								"kind": "Name",
								"value": "ProfileFields"
							}
						}]
					}
				}, {
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "pageInfo"
					},
					"selectionSet": {
						"kind": "SelectionSet",
						"selections": [{
							"kind": "FragmentSpread",
							"name": {
								"kind": "Name",
								"value": "PageInfoFields"
							}
						}]
					}
				}]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PageInfoFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PageInfo"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "endCursor"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "hasNextPage"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "totalCount"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "AspectRatioFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "AspectRatio"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "numerator"
					}
				}, {
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "denominator"
					}
				}]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "MediaFileMetadataFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "MediaFileMetadata"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "mediaId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profile"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "contentType"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "url"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "MediaMetadataFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "MediaMetadata"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "accountID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "aspectRatio"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "AspectRatioFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "blurHash"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "durationMs"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "files"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "MediaFileMetadataFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "status"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "type"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "BlockStatusInfoFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "BlockStatusInfo"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "blockStatus"
					}
				}, {
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "isBlocked"
					}
				}]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "ProfileFollowStatusFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "ProfileFollowStatus"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "followingLevel"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "isFollowedBy"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "isFollowing"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "ProfileReferenceFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "Profile"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "username"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "displayName"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileEmoji"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileMediaId"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostCollectionReferenceFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PostCollection"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "authorID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "coverMediaID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "createdAt"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "description"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "followLevel"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postCount"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "title"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "updatedAt"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "ProfileTagFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "ProfileTag"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "name"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "memberCount"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "AuthorID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "Author"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "ProfileReferenceFields"
								}
							}]
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "ProfileFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "Profile"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "username"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "displayName"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "bio"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "joinedAt"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "followerCount"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "followingCount"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "preferInteractionType"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileEmoji"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileMediaId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "viewerId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "blockingStatus"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "BlockStatusInfoFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "pinnedPostCollectionId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "pinnedPostCollection"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostCollectionReferenceFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileFollowStatus"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "ProfileFollowStatusFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileMedia"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "MediaMetadataFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "tags"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "ProfileTagFields"
								}
							}]
						}
					}
				]
			}
		}
	]
};
const PostCollectionFieldsFragmentDoc = {
	"kind": "Document",
	"definitions": [
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostCollectionFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PostCollection"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "authorID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "coverMediaID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "createdAt"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "description"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "followLevel"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postCount"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "title"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "updatedAt"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "author"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "ProfileReferenceFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "coverMedia"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "MediaMetadataFields"
								}
							}]
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "AspectRatioFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "AspectRatio"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "numerator"
					}
				}, {
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "denominator"
					}
				}]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "MediaFileMetadataFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "MediaFileMetadata"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "mediaId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profile"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "contentType"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "url"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "MediaMetadataFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "MediaMetadata"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "accountID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "aspectRatio"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "AspectRatioFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "blurHash"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "durationMs"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "files"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "MediaFileMetadataFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "status"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "type"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "ProfileReferenceFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "Profile"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "username"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "displayName"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileEmoji"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileMediaId"
						}
					}
				]
			}
		}
	]
};
const PostCollectionConnectionFieldsFragmentDoc = {
	"kind": "Document",
	"definitions": [
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostCollectionConnectionFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PostCollectionConnection"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "edges"
					},
					"selectionSet": {
						"kind": "SelectionSet",
						"selections": [{
							"kind": "FragmentSpread",
							"name": {
								"kind": "Name",
								"value": "PostCollectionFields"
							}
						}]
					}
				}, {
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "pageInfo"
					},
					"selectionSet": {
						"kind": "SelectionSet",
						"selections": [{
							"kind": "FragmentSpread",
							"name": {
								"kind": "Name",
								"value": "PageInfoFields"
							}
						}]
					}
				}]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PageInfoFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PageInfo"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "endCursor"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "hasNextPage"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "totalCount"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "AspectRatioFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "AspectRatio"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "numerator"
					}
				}, {
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "denominator"
					}
				}]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "MediaFileMetadataFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "MediaFileMetadata"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "mediaId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profile"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "contentType"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "url"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "MediaMetadataFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "MediaMetadata"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "accountID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "aspectRatio"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "AspectRatioFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "blurHash"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "durationMs"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "files"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "MediaFileMetadataFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "status"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "type"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "ProfileReferenceFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "Profile"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "username"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "displayName"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileEmoji"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileMediaId"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostCollectionFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PostCollection"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "authorID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "coverMediaID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "createdAt"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "description"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "followLevel"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postCount"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "title"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "updatedAt"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "author"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "ProfileReferenceFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "coverMedia"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "MediaMetadataFields"
								}
							}]
						}
					}
				]
			}
		}
	]
};
const NotificationFieldsFragmentDoc = {
	"kind": "Document",
	"definitions": [
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "NotificationFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "Notification"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "createdAt"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "isRead"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "message"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "type"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "relatedPostID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "relatedPostCollectionID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "sourceProfileID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "targetProfileID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "reaction"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "ReactionTypeFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "relatedPost"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostReferenceFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "relatedPostCollection"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostCollectionReferenceFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "sourceProfile"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "ProfileReferenceFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "targetProfile"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "ProfileReferenceFields"
								}
							}]
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "ReactionTypeFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "ReactionType"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "emojiValue"
					}
				}, {
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "nativeValue"
					}
				}]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "ProfileReferenceFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "Profile"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "username"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "displayName"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileEmoji"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileMediaId"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostReferenceFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "Post"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "authorID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "content"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "createdAt"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "parentPostId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "commentCount"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostCollectionReferenceFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PostCollection"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "authorID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "coverMediaID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "createdAt"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "description"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "followLevel"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postCount"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "title"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "updatedAt"
						}
					}
				]
			}
		}
	]
};
const NotificationConnectionFieldsFragmentDoc = {
	"kind": "Document",
	"definitions": [
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "NotificationConnectionFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "NotificationConnection"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "edges"
					},
					"selectionSet": {
						"kind": "SelectionSet",
						"selections": [{
							"kind": "FragmentSpread",
							"name": {
								"kind": "Name",
								"value": "NotificationFields"
							}
						}]
					}
				}, {
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "pageInfo"
					},
					"selectionSet": {
						"kind": "SelectionSet",
						"selections": [{
							"kind": "FragmentSpread",
							"name": {
								"kind": "Name",
								"value": "PageInfoFields"
							}
						}]
					}
				}]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PageInfoFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PageInfo"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "endCursor"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "hasNextPage"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "totalCount"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "ReactionTypeFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "ReactionType"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "emojiValue"
					}
				}, {
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "nativeValue"
					}
				}]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "ProfileReferenceFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "Profile"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "username"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "displayName"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileEmoji"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileMediaId"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostReferenceFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "Post"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "authorID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "content"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "createdAt"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "parentPostId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "commentCount"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostCollectionReferenceFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PostCollection"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "authorID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "coverMediaID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "createdAt"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "description"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "followLevel"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postCount"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "title"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "updatedAt"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "NotificationFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "Notification"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "createdAt"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "isRead"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "message"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "type"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "relatedPostID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "relatedPostCollectionID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "sourceProfileID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "targetProfileID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "reaction"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "ReactionTypeFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "relatedPost"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostReferenceFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "relatedPostCollection"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostCollectionReferenceFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "sourceProfile"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "ProfileReferenceFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "targetProfile"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "ProfileReferenceFields"
								}
							}]
						}
					}
				]
			}
		}
	]
};
const ReactionDetailRecordFieldsFragmentDoc = {
	"kind": "Document",
	"definitions": [
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "ReactionDetailRecordFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "ReactionDetailRecord"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "accountId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "createdAt"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profile"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "ProfileReferenceFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "type"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "ReactionTypeFields"
								}
							}]
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "ReactionTypeFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "ReactionType"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "emojiValue"
					}
				}, {
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "nativeValue"
					}
				}]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "ProfileReferenceFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "Profile"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "username"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "displayName"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileEmoji"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileMediaId"
						}
					}
				]
			}
		}
	]
};
const PostReactionDetailRecordConnectionFieldsFragmentDoc = {
	"kind": "Document",
	"definitions": [
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostReactionDetailRecordConnectionFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PostReactionDetailRecordConnection"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "pageInfo"
					},
					"selectionSet": {
						"kind": "SelectionSet",
						"selections": [{
							"kind": "FragmentSpread",
							"name": {
								"kind": "Name",
								"value": "PageInfoFields"
							}
						}]
					}
				}, {
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "reactionRecords"
					},
					"selectionSet": {
						"kind": "SelectionSet",
						"selections": [{
							"kind": "FragmentSpread",
							"name": {
								"kind": "Name",
								"value": "ReactionDetailRecordFields"
							}
						}]
					}
				}]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PageInfoFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PageInfo"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "endCursor"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "hasNextPage"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "totalCount"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "ReactionTypeFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "ReactionType"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "emojiValue"
					}
				}, {
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "nativeValue"
					}
				}]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "ProfileReferenceFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "Profile"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "username"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "displayName"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileEmoji"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileMediaId"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "ReactionDetailRecordFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "ReactionDetailRecord"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "accountId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "createdAt"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profile"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "ProfileReferenceFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "type"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "ReactionTypeFields"
								}
							}]
						}
					}
				]
			}
		}
	]
};
const UserReactionStatisticsFieldsFragmentDoc = {
	"kind": "Document",
	"definitions": [{
		"kind": "FragmentDefinition",
		"name": {
			"kind": "Name",
			"value": "UserReactionStatisticsFields"
		},
		"typeCondition": {
			"kind": "NamedType",
			"name": {
				"kind": "Name",
				"value": "UserReactionStatistics"
			}
		},
		"selectionSet": {
			"kind": "SelectionSet",
			"selections": [{
				"kind": "Field",
				"name": {
					"kind": "Name",
					"value": "count"
				}
			}, {
				"kind": "Field",
				"name": {
					"kind": "Name",
					"value": "type"
				},
				"selectionSet": {
					"kind": "SelectionSet",
					"selections": [{
						"kind": "FragmentSpread",
						"name": {
							"kind": "Name",
							"value": "ReactionTypeFields"
						}
					}]
				}
			}]
		}
	}, {
		"kind": "FragmentDefinition",
		"name": {
			"kind": "Name",
			"value": "ReactionTypeFields"
		},
		"typeCondition": {
			"kind": "NamedType",
			"name": {
				"kind": "Name",
				"value": "ReactionType"
			}
		},
		"selectionSet": {
			"kind": "SelectionSet",
			"selections": [{
				"kind": "Field",
				"name": {
					"kind": "Name",
					"value": "emojiValue"
				}
			}, {
				"kind": "Field",
				"name": {
					"kind": "Name",
					"value": "nativeValue"
				}
			}]
		}
	}]
};
const UserReactionsStatisticsConnectionFieldsFragmentDoc = {
	"kind": "Document",
	"definitions": [
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "UserReactionsStatisticsConnectionFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "UserReactionsStatisticsConnection"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "pageInfo"
					},
					"selectionSet": {
						"kind": "SelectionSet",
						"selections": [{
							"kind": "FragmentSpread",
							"name": {
								"kind": "Name",
								"value": "PageInfoFields"
							}
						}]
					}
				}, {
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "reactions"
					},
					"selectionSet": {
						"kind": "SelectionSet",
						"selections": [{
							"kind": "FragmentSpread",
							"name": {
								"kind": "Name",
								"value": "UserReactionStatisticsFields"
							}
						}]
					}
				}]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PageInfoFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PageInfo"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "endCursor"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "hasNextPage"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "totalCount"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "ReactionTypeFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "ReactionType"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "emojiValue"
					}
				}, {
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "nativeValue"
					}
				}]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "UserReactionStatisticsFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "UserReactionStatistics"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "count"
					}
				}, {
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "type"
					},
					"selectionSet": {
						"kind": "SelectionSet",
						"selections": [{
							"kind": "FragmentSpread",
							"name": {
								"kind": "Name",
								"value": "ReactionTypeFields"
							}
						}]
					}
				}]
			}
		}
	]
};
const ProfileTagConnectionFieldsFragmentDoc = {
	"kind": "Document",
	"definitions": [
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "ProfileTagConnectionFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "ProfileTagConnection"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "edges"
					},
					"selectionSet": {
						"kind": "SelectionSet",
						"selections": [{
							"kind": "FragmentSpread",
							"name": {
								"kind": "Name",
								"value": "ProfileTagFields"
							}
						}]
					}
				}, {
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "pageInfo"
					},
					"selectionSet": {
						"kind": "SelectionSet",
						"selections": [{
							"kind": "FragmentSpread",
							"name": {
								"kind": "Name",
								"value": "PageInfoFields"
							}
						}]
					}
				}]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PageInfoFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PageInfo"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "endCursor"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "hasNextPage"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "totalCount"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "ProfileReferenceFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "Profile"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "username"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "displayName"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileEmoji"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileMediaId"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "ProfileTagFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "ProfileTag"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "name"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "memberCount"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "AuthorID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "Author"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "ProfileReferenceFields"
								}
							}]
						}
					}
				]
			}
		}
	]
};
const MonoPostDraftFieldsFragmentDoc = {
	"kind": "Document",
	"definitions": [
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "MonoPostDraftFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "MonoPostDraft"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "content"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "attachmentIds"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "AttachmentIDFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "attachments"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "AttachmentFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postCollectionIds"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postCollections"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostCollectionReferenceFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postOptions"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostOptionsFields"
								}
							}]
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "AspectRatioFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "AspectRatio"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "numerator"
					}
				}, {
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "denominator"
					}
				}]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "MediaFileMetadataFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "MediaFileMetadata"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "mediaId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profile"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "contentType"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "url"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "MediaMetadataFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "MediaMetadata"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "accountID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "aspectRatio"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "AspectRatioFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "blurHash"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "durationMs"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "files"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "MediaFileMetadataFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "status"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "type"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostVisibilityFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PostVisibility"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "policy"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileTags"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "pushPolicy"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostOptionsFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PostOptions"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "commentPolicy"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "copyPolicy"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "reactionPolicy"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postVisibility"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostVisibilityFields"
								}
							}]
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "LinkPreviewFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "LinkPreview"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "Url"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "canonicalUrl"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "resourceType"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "summary"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "thumbnailUrl"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "title"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "ProfileReferenceFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "Profile"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "username"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "displayName"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileEmoji"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileMediaId"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostReferenceFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "Post"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "authorID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "content"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "createdAt"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "parentPostId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "commentCount"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostCollectionReferenceFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PostCollection"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "authorID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "coverMediaID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "createdAt"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "description"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "followLevel"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postCount"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "title"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "updatedAt"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "AttachmentIDFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "AttachmentID"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "type"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "embeddedCollectionId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "embeddedPostId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "embeddedProfileId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "linkUrl"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "mediaId"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "AttachmentFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "Attachment"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "type"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "linkPreview"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "LinkPreviewFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "media"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "MediaMetadataFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "embeddedProfile"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "ProfileReferenceFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "embeddedPost"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostReferenceFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "embeddedCollection"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostCollectionReferenceFields"
								}
							}]
						}
					}
				]
			}
		}
	]
};
const PostDraftFieldsFragmentDoc = {
	"kind": "Document",
	"definitions": [
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostDraftFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PostDraft"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "createdAt"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "scheduledAt"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "updatedAt"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postRequests"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "MonoPostDraftFields"
								}
							}]
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "AspectRatioFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "AspectRatio"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "numerator"
					}
				}, {
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "denominator"
					}
				}]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "MediaFileMetadataFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "MediaFileMetadata"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "mediaId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profile"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "contentType"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "url"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "MediaMetadataFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "MediaMetadata"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "accountID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "aspectRatio"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "AspectRatioFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "blurHash"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "durationMs"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "files"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "MediaFileMetadataFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "status"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "type"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostVisibilityFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PostVisibility"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "policy"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileTags"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "pushPolicy"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostOptionsFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PostOptions"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "commentPolicy"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "copyPolicy"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "reactionPolicy"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postVisibility"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostVisibilityFields"
								}
							}]
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "LinkPreviewFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "LinkPreview"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "Url"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "canonicalUrl"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "resourceType"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "summary"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "thumbnailUrl"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "title"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "ProfileReferenceFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "Profile"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "username"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "displayName"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileEmoji"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileMediaId"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostReferenceFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "Post"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "authorID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "content"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "createdAt"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "parentPostId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "commentCount"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostCollectionReferenceFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PostCollection"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "authorID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "coverMediaID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "createdAt"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "description"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "followLevel"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postCount"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "title"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "updatedAt"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "AttachmentIDFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "AttachmentID"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "type"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "embeddedCollectionId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "embeddedPostId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "embeddedProfileId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "linkUrl"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "mediaId"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "AttachmentFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "Attachment"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "type"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "linkPreview"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "LinkPreviewFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "media"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "MediaMetadataFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "embeddedProfile"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "ProfileReferenceFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "embeddedPost"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostReferenceFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "embeddedCollection"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostCollectionReferenceFields"
								}
							}]
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "MonoPostDraftFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "MonoPostDraft"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "content"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "attachmentIds"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "AttachmentIDFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "attachments"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "AttachmentFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postCollectionIds"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postCollections"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostCollectionReferenceFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postOptions"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostOptionsFields"
								}
							}]
						}
					}
				]
			}
		}
	]
};
const PostDraftConnectionFieldsFragmentDoc = {
	"kind": "Document",
	"definitions": [
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostDraftConnectionFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PostDraftConnection"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "edges"
					},
					"selectionSet": {
						"kind": "SelectionSet",
						"selections": [{
							"kind": "FragmentSpread",
							"name": {
								"kind": "Name",
								"value": "PostDraftFields"
							}
						}]
					}
				}, {
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "pageInfo"
					},
					"selectionSet": {
						"kind": "SelectionSet",
						"selections": [{
							"kind": "FragmentSpread",
							"name": {
								"kind": "Name",
								"value": "PageInfoFields"
							}
						}]
					}
				}]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PageInfoFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PageInfo"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "endCursor"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "hasNextPage"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "totalCount"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "AspectRatioFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "AspectRatio"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "numerator"
					}
				}, {
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "denominator"
					}
				}]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "MediaFileMetadataFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "MediaFileMetadata"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "mediaId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profile"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "contentType"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "url"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "MediaMetadataFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "MediaMetadata"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "accountID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "aspectRatio"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "AspectRatioFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "blurHash"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "durationMs"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "files"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "MediaFileMetadataFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "status"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "type"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostVisibilityFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PostVisibility"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "policy"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileTags"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "pushPolicy"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostOptionsFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PostOptions"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "commentPolicy"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "copyPolicy"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "reactionPolicy"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postVisibility"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostVisibilityFields"
								}
							}]
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "LinkPreviewFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "LinkPreview"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "Url"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "canonicalUrl"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "resourceType"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "summary"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "thumbnailUrl"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "title"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "ProfileReferenceFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "Profile"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "username"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "displayName"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileEmoji"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileMediaId"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostReferenceFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "Post"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "authorID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "content"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "createdAt"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "parentPostId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "commentCount"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostCollectionReferenceFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PostCollection"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "authorID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "coverMediaID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "createdAt"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "description"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "followLevel"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postCount"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "title"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "updatedAt"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "AttachmentIDFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "AttachmentID"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "type"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "embeddedCollectionId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "embeddedPostId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "embeddedProfileId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "linkUrl"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "mediaId"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "AttachmentFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "Attachment"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "type"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "linkPreview"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "LinkPreviewFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "media"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "MediaMetadataFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "embeddedProfile"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "ProfileReferenceFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "embeddedPost"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostReferenceFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "embeddedCollection"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostCollectionReferenceFields"
								}
							}]
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "MonoPostDraftFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "MonoPostDraft"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "content"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "attachmentIds"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "AttachmentIDFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "attachments"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "AttachmentFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postCollectionIds"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postCollections"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostCollectionReferenceFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postOptions"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostOptionsFields"
								}
							}]
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostDraftFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PostDraft"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "createdAt"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "scheduledAt"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "updatedAt"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postRequests"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "MonoPostDraftFields"
								}
							}]
						}
					}
				]
			}
		}
	]
};
const GetAccountProfileDocument = {
	"kind": "Document",
	"definitions": [
		{
			"kind": "OperationDefinition",
			"operation": "query",
			"name": {
				"kind": "Name",
				"value": "GetAccountProfile"
			},
			"variableDefinitions": [{
				"kind": "VariableDefinition",
				"variable": {
					"kind": "Variable",
					"name": {
						"kind": "Name",
						"value": "accountId"
					}
				},
				"type": {
					"kind": "NamedType",
					"name": {
						"kind": "Name",
						"value": "ID"
					}
				}
			}, {
				"kind": "VariableDefinition",
				"variable": {
					"kind": "Variable",
					"name": {
						"kind": "Name",
						"value": "username"
					}
				},
				"type": {
					"kind": "NamedType",
					"name": {
						"kind": "Name",
						"value": "String"
					}
				}
			}],
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "getAccountProfile"
					},
					"arguments": [{
						"kind": "Argument",
						"name": {
							"kind": "Name",
							"value": "accountId"
						},
						"value": {
							"kind": "Variable",
							"name": {
								"kind": "Name",
								"value": "accountId"
							}
						}
					}, {
						"kind": "Argument",
						"name": {
							"kind": "Name",
							"value": "username"
						},
						"value": {
							"kind": "Variable",
							"name": {
								"kind": "Name",
								"value": "username"
							}
						}
					}],
					"selectionSet": {
						"kind": "SelectionSet",
						"selections": [{
							"kind": "FragmentSpread",
							"name": {
								"kind": "Name",
								"value": "ProfileFields"
							}
						}]
					}
				}]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "AspectRatioFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "AspectRatio"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "numerator"
					}
				}, {
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "denominator"
					}
				}]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "MediaFileMetadataFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "MediaFileMetadata"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "mediaId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profile"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "contentType"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "url"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "MediaMetadataFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "MediaMetadata"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "accountID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "aspectRatio"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "AspectRatioFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "blurHash"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "durationMs"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "files"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "MediaFileMetadataFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "status"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "type"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "BlockStatusInfoFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "BlockStatusInfo"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "blockStatus"
					}
				}, {
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "isBlocked"
					}
				}]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "ProfileFollowStatusFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "ProfileFollowStatus"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "followingLevel"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "isFollowedBy"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "isFollowing"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "ProfileReferenceFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "Profile"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "username"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "displayName"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileEmoji"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileMediaId"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostCollectionReferenceFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PostCollection"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "authorID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "coverMediaID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "createdAt"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "description"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "followLevel"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postCount"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "title"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "updatedAt"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "ProfileTagFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "ProfileTag"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "name"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "memberCount"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "AuthorID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "Author"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "ProfileReferenceFields"
								}
							}]
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "ProfileFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "Profile"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "username"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "displayName"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "bio"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "joinedAt"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "followerCount"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "followingCount"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "preferInteractionType"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileEmoji"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileMediaId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "viewerId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "blockingStatus"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "BlockStatusInfoFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "pinnedPostCollectionId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "pinnedPostCollection"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostCollectionReferenceFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileFollowStatus"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "ProfileFollowStatusFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileMedia"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "MediaMetadataFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "tags"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "ProfileTagFields"
								}
							}]
						}
					}
				]
			}
		}
	]
};
const GetBlockedAccountsDocument = {
	"kind": "Document",
	"definitions": [
		{
			"kind": "OperationDefinition",
			"operation": "query",
			"name": {
				"kind": "Name",
				"value": "GetBlockedAccounts"
			},
			"variableDefinitions": [{
				"kind": "VariableDefinition",
				"variable": {
					"kind": "Variable",
					"name": {
						"kind": "Name",
						"value": "cursor"
					}
				},
				"type": {
					"kind": "NamedType",
					"name": {
						"kind": "Name",
						"value": "String"
					}
				}
			}, {
				"kind": "VariableDefinition",
				"variable": {
					"kind": "Variable",
					"name": {
						"kind": "Name",
						"value": "limit"
					}
				},
				"type": {
					"kind": "NamedType",
					"name": {
						"kind": "Name",
						"value": "Int"
					}
				}
			}],
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "getBlockedAccounts"
					},
					"arguments": [{
						"kind": "Argument",
						"name": {
							"kind": "Name",
							"value": "cursor"
						},
						"value": {
							"kind": "Variable",
							"name": {
								"kind": "Name",
								"value": "cursor"
							}
						}
					}, {
						"kind": "Argument",
						"name": {
							"kind": "Name",
							"value": "limit"
						},
						"value": {
							"kind": "Variable",
							"name": {
								"kind": "Name",
								"value": "limit"
							}
						}
					}],
					"selectionSet": {
						"kind": "SelectionSet",
						"selections": [{
							"kind": "FragmentSpread",
							"name": {
								"kind": "Name",
								"value": "ProfileConnectionFields"
							}
						}]
					}
				}]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PageInfoFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PageInfo"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "endCursor"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "hasNextPage"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "totalCount"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "AspectRatioFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "AspectRatio"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "numerator"
					}
				}, {
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "denominator"
					}
				}]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "MediaFileMetadataFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "MediaFileMetadata"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "mediaId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profile"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "contentType"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "url"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "MediaMetadataFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "MediaMetadata"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "accountID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "aspectRatio"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "AspectRatioFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "blurHash"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "durationMs"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "files"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "MediaFileMetadataFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "status"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "type"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "BlockStatusInfoFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "BlockStatusInfo"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "blockStatus"
					}
				}, {
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "isBlocked"
					}
				}]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "ProfileFollowStatusFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "ProfileFollowStatus"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "followingLevel"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "isFollowedBy"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "isFollowing"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "ProfileReferenceFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "Profile"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "username"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "displayName"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileEmoji"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileMediaId"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostCollectionReferenceFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PostCollection"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "authorID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "coverMediaID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "createdAt"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "description"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "followLevel"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postCount"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "title"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "updatedAt"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "ProfileTagFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "ProfileTag"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "name"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "memberCount"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "AuthorID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "Author"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "ProfileReferenceFields"
								}
							}]
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "ProfileFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "Profile"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "username"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "displayName"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "bio"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "joinedAt"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "followerCount"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "followingCount"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "preferInteractionType"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileEmoji"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileMediaId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "viewerId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "blockingStatus"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "BlockStatusInfoFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "pinnedPostCollectionId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "pinnedPostCollection"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostCollectionReferenceFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileFollowStatus"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "ProfileFollowStatusFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileMedia"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "MediaMetadataFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "tags"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "ProfileTagFields"
								}
							}]
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "ProfileConnectionFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "ProfileConnection"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "edges"
					},
					"selectionSet": {
						"kind": "SelectionSet",
						"selections": [{
							"kind": "FragmentSpread",
							"name": {
								"kind": "Name",
								"value": "ProfileFields"
							}
						}]
					}
				}, {
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "pageInfo"
					},
					"selectionSet": {
						"kind": "SelectionSet",
						"selections": [{
							"kind": "FragmentSpread",
							"name": {
								"kind": "Name",
								"value": "PageInfoFields"
							}
						}]
					}
				}]
			}
		}
	]
};
const GetCurrentAccountDocument = {
	"kind": "Document",
	"definitions": [{
		"kind": "OperationDefinition",
		"operation": "query",
		"name": {
			"kind": "Name",
			"value": "GetCurrentAccount"
		},
		"selectionSet": {
			"kind": "SelectionSet",
			"selections": [{
				"kind": "Field",
				"name": {
					"kind": "Name",
					"value": "getCurrentAccount"
				},
				"selectionSet": {
					"kind": "SelectionSet",
					"selections": [{
						"kind": "FragmentSpread",
						"name": {
							"kind": "Name",
							"value": "AccountFields"
						}
					}]
				}
			}]
		}
	}, {
		"kind": "FragmentDefinition",
		"name": {
			"kind": "Name",
			"value": "AccountFields"
		},
		"typeCondition": {
			"kind": "NamedType",
			"name": {
				"kind": "Name",
				"value": "Account"
			}
		},
		"selectionSet": {
			"kind": "SelectionSet",
			"selections": [
				{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "id"
					}
				},
				{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "username"
					}
				},
				{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "email"
					}
				},
				{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "createdAt"
					}
				},
				{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "lastLogin"
					}
				},
				{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "status"
					}
				}
			]
		}
	}]
};
const GetDiscussionsDocument = {
	"kind": "Document",
	"definitions": [
		{
			"kind": "OperationDefinition",
			"operation": "query",
			"name": {
				"kind": "Name",
				"value": "GetDiscussions"
			},
			"variableDefinitions": [{
				"kind": "VariableDefinition",
				"variable": {
					"kind": "Variable",
					"name": {
						"kind": "Name",
						"value": "cursor"
					}
				},
				"type": {
					"kind": "NamedType",
					"name": {
						"kind": "Name",
						"value": "String"
					}
				}
			}, {
				"kind": "VariableDefinition",
				"variable": {
					"kind": "Variable",
					"name": {
						"kind": "Name",
						"value": "limit"
					}
				},
				"type": {
					"kind": "NamedType",
					"name": {
						"kind": "Name",
						"value": "Int"
					}
				},
				"defaultValue": {
					"kind": "IntValue",
					"value": "20"
				}
			}],
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "getDiscussions"
					},
					"arguments": [{
						"kind": "Argument",
						"name": {
							"kind": "Name",
							"value": "cursor"
						},
						"value": {
							"kind": "Variable",
							"name": {
								"kind": "Name",
								"value": "cursor"
							}
						}
					}, {
						"kind": "Argument",
						"name": {
							"kind": "Name",
							"value": "limit"
						},
						"value": {
							"kind": "Variable",
							"name": {
								"kind": "Name",
								"value": "limit"
							}
						}
					}],
					"selectionSet": {
						"kind": "SelectionSet",
						"selections": [{
							"kind": "FragmentSpread",
							"name": {
								"kind": "Name",
								"value": "FeedPostConnectionFields"
							}
						}]
					}
				}]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PageInfoFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PageInfo"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "endCursor"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "hasNextPage"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "totalCount"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "AspectRatioFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "AspectRatio"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "numerator"
					}
				}, {
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "denominator"
					}
				}]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "MediaFileMetadataFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "MediaFileMetadata"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "mediaId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profile"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "contentType"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "url"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "MediaMetadataFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "MediaMetadata"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "accountID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "aspectRatio"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "AspectRatioFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "blurHash"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "durationMs"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "files"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "MediaFileMetadataFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "status"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "type"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "ReactionTypeFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "ReactionType"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "emojiValue"
					}
				}, {
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "nativeValue"
					}
				}]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "ReactionSummaryFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "ReactionSummary"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "count"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "isReactedByViewer"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "type"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "ReactionTypeFields"
								}
							}]
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostReactionsConnectionFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PostReactionsConnection"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "queryLimit"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "remainingCount"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "viewerId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "reactions"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "ReactionSummaryFields"
								}
							}]
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostOperationPermissionFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PostOperationPermission"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "canComment"
					}
				}, {
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "canReact"
					}
				}]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostVisibilityFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PostVisibility"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "policy"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileTags"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "pushPolicy"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostOptionsFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PostOptions"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "commentPolicy"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "copyPolicy"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "reactionPolicy"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postVisibility"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostVisibilityFields"
								}
							}]
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "LinkPreviewFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "LinkPreview"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "Url"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "canonicalUrl"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "resourceType"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "summary"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "thumbnailUrl"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "title"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "ProfileReferenceFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "Profile"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "username"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "displayName"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileEmoji"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileMediaId"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostReferenceFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "Post"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "authorID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "content"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "createdAt"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "parentPostId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "commentCount"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostCollectionReferenceFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PostCollection"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "authorID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "coverMediaID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "createdAt"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "description"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "followLevel"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postCount"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "title"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "updatedAt"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "AttachmentIDFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "AttachmentID"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "type"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "embeddedCollectionId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "embeddedPostId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "embeddedProfileId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "linkUrl"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "mediaId"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "AttachmentFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "Attachment"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "type"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "linkPreview"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "LinkPreviewFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "media"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "MediaMetadataFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "embeddedProfile"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "ProfileReferenceFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "embeddedPost"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostReferenceFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "embeddedCollection"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostCollectionReferenceFields"
								}
							}]
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "Post"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "authorID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "content"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "createdAt"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "parentPostId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "commentCount"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "leafAncestorIds"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "rootAncestorIds"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "author"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "ProfileReferenceFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "attachmentIds"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "AttachmentIDFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "attachments"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "AttachmentFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postCollections"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostCollectionReferenceFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postOperationPermission"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostOperationPermissionFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postOptions"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostOptionsFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "reactions"
						},
						"arguments": [{
							"kind": "Argument",
							"name": {
								"kind": "Name",
								"value": "first"
							},
							"value": {
								"kind": "IntValue",
								"value": "20"
							}
						}],
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostReactionsConnectionFields"
								}
							}]
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "FeedPostEdgeFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "FeedPostEdge"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "id"
					}
				}, {
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "post"
					},
					"selectionSet": {
						"kind": "SelectionSet",
						"selections": [{
							"kind": "FragmentSpread",
							"name": {
								"kind": "Name",
								"value": "PostFields"
							}
						}]
					}
				}]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "FeedPostConnectionFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "FeedPostConnection"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "edges"
					},
					"selectionSet": {
						"kind": "SelectionSet",
						"selections": [{
							"kind": "FragmentSpread",
							"name": {
								"kind": "Name",
								"value": "FeedPostEdgeFields"
							}
						}]
					}
				}, {
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "pageInfo"
					},
					"selectionSet": {
						"kind": "SelectionSet",
						"selections": [{
							"kind": "FragmentSpread",
							"name": {
								"kind": "Name",
								"value": "PageInfoFields"
							}
						}]
					}
				}]
			}
		}
	]
};
const GetFeedPostsDocument = {
	"kind": "Document",
	"definitions": [
		{
			"kind": "OperationDefinition",
			"operation": "query",
			"name": {
				"kind": "Name",
				"value": "GetFeedPosts"
			},
			"variableDefinitions": [{
				"kind": "VariableDefinition",
				"variable": {
					"kind": "Variable",
					"name": {
						"kind": "Name",
						"value": "cursor"
					}
				},
				"type": {
					"kind": "NamedType",
					"name": {
						"kind": "Name",
						"value": "String"
					}
				}
			}, {
				"kind": "VariableDefinition",
				"variable": {
					"kind": "Variable",
					"name": {
						"kind": "Name",
						"value": "limit"
					}
				},
				"type": {
					"kind": "NamedType",
					"name": {
						"kind": "Name",
						"value": "Int"
					}
				},
				"defaultValue": {
					"kind": "IntValue",
					"value": "20"
				}
			}],
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "getFeedPosts"
					},
					"arguments": [{
						"kind": "Argument",
						"name": {
							"kind": "Name",
							"value": "cursor"
						},
						"value": {
							"kind": "Variable",
							"name": {
								"kind": "Name",
								"value": "cursor"
							}
						}
					}, {
						"kind": "Argument",
						"name": {
							"kind": "Name",
							"value": "limit"
						},
						"value": {
							"kind": "Variable",
							"name": {
								"kind": "Name",
								"value": "limit"
							}
						}
					}],
					"selectionSet": {
						"kind": "SelectionSet",
						"selections": [{
							"kind": "FragmentSpread",
							"name": {
								"kind": "Name",
								"value": "FeedPostConnectionFields"
							}
						}]
					}
				}]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PageInfoFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PageInfo"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "endCursor"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "hasNextPage"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "totalCount"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "AspectRatioFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "AspectRatio"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "numerator"
					}
				}, {
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "denominator"
					}
				}]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "MediaFileMetadataFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "MediaFileMetadata"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "mediaId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profile"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "contentType"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "url"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "MediaMetadataFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "MediaMetadata"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "accountID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "aspectRatio"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "AspectRatioFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "blurHash"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "durationMs"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "files"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "MediaFileMetadataFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "status"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "type"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "ReactionTypeFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "ReactionType"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "emojiValue"
					}
				}, {
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "nativeValue"
					}
				}]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "ReactionSummaryFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "ReactionSummary"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "count"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "isReactedByViewer"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "type"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "ReactionTypeFields"
								}
							}]
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostReactionsConnectionFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PostReactionsConnection"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "queryLimit"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "remainingCount"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "viewerId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "reactions"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "ReactionSummaryFields"
								}
							}]
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostOperationPermissionFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PostOperationPermission"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "canComment"
					}
				}, {
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "canReact"
					}
				}]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostVisibilityFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PostVisibility"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "policy"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileTags"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "pushPolicy"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostOptionsFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PostOptions"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "commentPolicy"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "copyPolicy"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "reactionPolicy"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postVisibility"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostVisibilityFields"
								}
							}]
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "LinkPreviewFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "LinkPreview"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "Url"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "canonicalUrl"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "resourceType"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "summary"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "thumbnailUrl"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "title"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "ProfileReferenceFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "Profile"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "username"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "displayName"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileEmoji"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileMediaId"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostReferenceFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "Post"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "authorID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "content"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "createdAt"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "parentPostId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "commentCount"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostCollectionReferenceFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PostCollection"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "authorID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "coverMediaID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "createdAt"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "description"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "followLevel"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postCount"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "title"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "updatedAt"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "AttachmentIDFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "AttachmentID"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "type"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "embeddedCollectionId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "embeddedPostId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "embeddedProfileId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "linkUrl"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "mediaId"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "AttachmentFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "Attachment"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "type"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "linkPreview"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "LinkPreviewFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "media"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "MediaMetadataFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "embeddedProfile"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "ProfileReferenceFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "embeddedPost"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostReferenceFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "embeddedCollection"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostCollectionReferenceFields"
								}
							}]
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "Post"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "authorID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "content"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "createdAt"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "parentPostId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "commentCount"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "leafAncestorIds"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "rootAncestorIds"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "author"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "ProfileReferenceFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "attachmentIds"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "AttachmentIDFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "attachments"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "AttachmentFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postCollections"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostCollectionReferenceFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postOperationPermission"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostOperationPermissionFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postOptions"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostOptionsFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "reactions"
						},
						"arguments": [{
							"kind": "Argument",
							"name": {
								"kind": "Name",
								"value": "first"
							},
							"value": {
								"kind": "IntValue",
								"value": "20"
							}
						}],
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostReactionsConnectionFields"
								}
							}]
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "FeedPostEdgeFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "FeedPostEdge"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "id"
					}
				}, {
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "post"
					},
					"selectionSet": {
						"kind": "SelectionSet",
						"selections": [{
							"kind": "FragmentSpread",
							"name": {
								"kind": "Name",
								"value": "PostFields"
							}
						}]
					}
				}]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "FeedPostConnectionFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "FeedPostConnection"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "edges"
					},
					"selectionSet": {
						"kind": "SelectionSet",
						"selections": [{
							"kind": "FragmentSpread",
							"name": {
								"kind": "Name",
								"value": "FeedPostEdgeFields"
							}
						}]
					}
				}, {
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "pageInfo"
					},
					"selectionSet": {
						"kind": "SelectionSet",
						"selections": [{
							"kind": "FragmentSpread",
							"name": {
								"kind": "Name",
								"value": "PageInfoFields"
							}
						}]
					}
				}]
			}
		}
	]
};
const GetFollowedAccountsDocument = {
	"kind": "Document",
	"definitions": [
		{
			"kind": "OperationDefinition",
			"operation": "query",
			"name": {
				"kind": "Name",
				"value": "GetFollowedAccounts"
			},
			"variableDefinitions": [
				{
					"kind": "VariableDefinition",
					"variable": {
						"kind": "Variable",
						"name": {
							"kind": "Name",
							"value": "accountId"
						}
					},
					"type": {
						"kind": "NonNullType",
						"type": {
							"kind": "NamedType",
							"name": {
								"kind": "Name",
								"value": "ID"
							}
						}
					}
				},
				{
					"kind": "VariableDefinition",
					"variable": {
						"kind": "Variable",
						"name": {
							"kind": "Name",
							"value": "cursor"
						}
					},
					"type": {
						"kind": "NamedType",
						"name": {
							"kind": "Name",
							"value": "String"
						}
					}
				},
				{
					"kind": "VariableDefinition",
					"variable": {
						"kind": "Variable",
						"name": {
							"kind": "Name",
							"value": "limit"
						}
					},
					"type": {
						"kind": "NamedType",
						"name": {
							"kind": "Name",
							"value": "Int"
						}
					}
				}
			],
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "getFollowedAccounts"
					},
					"arguments": [
						{
							"kind": "Argument",
							"name": {
								"kind": "Name",
								"value": "accountId"
							},
							"value": {
								"kind": "Variable",
								"name": {
									"kind": "Name",
									"value": "accountId"
								}
							}
						},
						{
							"kind": "Argument",
							"name": {
								"kind": "Name",
								"value": "cursor"
							},
							"value": {
								"kind": "Variable",
								"name": {
									"kind": "Name",
									"value": "cursor"
								}
							}
						},
						{
							"kind": "Argument",
							"name": {
								"kind": "Name",
								"value": "limit"
							},
							"value": {
								"kind": "Variable",
								"name": {
									"kind": "Name",
									"value": "limit"
								}
							}
						}
					],
					"selectionSet": {
						"kind": "SelectionSet",
						"selections": [{
							"kind": "FragmentSpread",
							"name": {
								"kind": "Name",
								"value": "ProfileConnectionFields"
							}
						}]
					}
				}]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PageInfoFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PageInfo"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "endCursor"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "hasNextPage"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "totalCount"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "AspectRatioFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "AspectRatio"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "numerator"
					}
				}, {
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "denominator"
					}
				}]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "MediaFileMetadataFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "MediaFileMetadata"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "mediaId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profile"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "contentType"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "url"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "MediaMetadataFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "MediaMetadata"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "accountID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "aspectRatio"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "AspectRatioFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "blurHash"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "durationMs"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "files"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "MediaFileMetadataFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "status"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "type"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "BlockStatusInfoFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "BlockStatusInfo"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "blockStatus"
					}
				}, {
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "isBlocked"
					}
				}]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "ProfileFollowStatusFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "ProfileFollowStatus"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "followingLevel"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "isFollowedBy"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "isFollowing"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "ProfileReferenceFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "Profile"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "username"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "displayName"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileEmoji"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileMediaId"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostCollectionReferenceFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PostCollection"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "authorID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "coverMediaID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "createdAt"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "description"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "followLevel"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postCount"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "title"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "updatedAt"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "ProfileTagFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "ProfileTag"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "name"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "memberCount"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "AuthorID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "Author"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "ProfileReferenceFields"
								}
							}]
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "ProfileFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "Profile"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "username"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "displayName"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "bio"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "joinedAt"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "followerCount"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "followingCount"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "preferInteractionType"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileEmoji"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileMediaId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "viewerId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "blockingStatus"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "BlockStatusInfoFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "pinnedPostCollectionId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "pinnedPostCollection"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostCollectionReferenceFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileFollowStatus"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "ProfileFollowStatusFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileMedia"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "MediaMetadataFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "tags"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "ProfileTagFields"
								}
							}]
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "ProfileConnectionFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "ProfileConnection"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "edges"
					},
					"selectionSet": {
						"kind": "SelectionSet",
						"selections": [{
							"kind": "FragmentSpread",
							"name": {
								"kind": "Name",
								"value": "ProfileFields"
							}
						}]
					}
				}, {
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "pageInfo"
					},
					"selectionSet": {
						"kind": "SelectionSet",
						"selections": [{
							"kind": "FragmentSpread",
							"name": {
								"kind": "Name",
								"value": "PageInfoFields"
							}
						}]
					}
				}]
			}
		}
	]
};
const GetFollowedPostCollectionsDocument = {
	"kind": "Document",
	"definitions": [
		{
			"kind": "OperationDefinition",
			"operation": "query",
			"name": {
				"kind": "Name",
				"value": "GetFollowedPostCollections"
			},
			"variableDefinitions": [{
				"kind": "VariableDefinition",
				"variable": {
					"kind": "Variable",
					"name": {
						"kind": "Name",
						"value": "cursor"
					}
				},
				"type": {
					"kind": "NamedType",
					"name": {
						"kind": "Name",
						"value": "String"
					}
				}
			}, {
				"kind": "VariableDefinition",
				"variable": {
					"kind": "Variable",
					"name": {
						"kind": "Name",
						"value": "limit"
					}
				},
				"type": {
					"kind": "NamedType",
					"name": {
						"kind": "Name",
						"value": "Int"
					}
				}
			}],
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "getFollowedPostCollections"
					},
					"arguments": [{
						"kind": "Argument",
						"name": {
							"kind": "Name",
							"value": "cursor"
						},
						"value": {
							"kind": "Variable",
							"name": {
								"kind": "Name",
								"value": "cursor"
							}
						}
					}, {
						"kind": "Argument",
						"name": {
							"kind": "Name",
							"value": "limit"
						},
						"value": {
							"kind": "Variable",
							"name": {
								"kind": "Name",
								"value": "limit"
							}
						}
					}],
					"selectionSet": {
						"kind": "SelectionSet",
						"selections": [{
							"kind": "FragmentSpread",
							"name": {
								"kind": "Name",
								"value": "PostCollectionConnectionFields"
							}
						}]
					}
				}]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PageInfoFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PageInfo"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "endCursor"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "hasNextPage"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "totalCount"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "AspectRatioFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "AspectRatio"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "numerator"
					}
				}, {
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "denominator"
					}
				}]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "MediaFileMetadataFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "MediaFileMetadata"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "mediaId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profile"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "contentType"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "url"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "MediaMetadataFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "MediaMetadata"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "accountID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "aspectRatio"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "AspectRatioFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "blurHash"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "durationMs"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "files"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "MediaFileMetadataFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "status"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "type"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "ProfileReferenceFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "Profile"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "username"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "displayName"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileEmoji"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileMediaId"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostCollectionFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PostCollection"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "authorID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "coverMediaID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "createdAt"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "description"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "followLevel"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postCount"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "title"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "updatedAt"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "author"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "ProfileReferenceFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "coverMedia"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "MediaMetadataFields"
								}
							}]
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostCollectionConnectionFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PostCollectionConnection"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "edges"
					},
					"selectionSet": {
						"kind": "SelectionSet",
						"selections": [{
							"kind": "FragmentSpread",
							"name": {
								"kind": "Name",
								"value": "PostCollectionFields"
							}
						}]
					}
				}, {
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "pageInfo"
					},
					"selectionSet": {
						"kind": "SelectionSet",
						"selections": [{
							"kind": "FragmentSpread",
							"name": {
								"kind": "Name",
								"value": "PageInfoFields"
							}
						}]
					}
				}]
			}
		}
	]
};
const GetFollowingAccountsDocument = {
	"kind": "Document",
	"definitions": [
		{
			"kind": "OperationDefinition",
			"operation": "query",
			"name": {
				"kind": "Name",
				"value": "GetFollowingAccounts"
			},
			"variableDefinitions": [
				{
					"kind": "VariableDefinition",
					"variable": {
						"kind": "Variable",
						"name": {
							"kind": "Name",
							"value": "accountId"
						}
					},
					"type": {
						"kind": "NonNullType",
						"type": {
							"kind": "NamedType",
							"name": {
								"kind": "Name",
								"value": "ID"
							}
						}
					}
				},
				{
					"kind": "VariableDefinition",
					"variable": {
						"kind": "Variable",
						"name": {
							"kind": "Name",
							"value": "cursor"
						}
					},
					"type": {
						"kind": "NamedType",
						"name": {
							"kind": "Name",
							"value": "String"
						}
					}
				},
				{
					"kind": "VariableDefinition",
					"variable": {
						"kind": "Variable",
						"name": {
							"kind": "Name",
							"value": "limit"
						}
					},
					"type": {
						"kind": "NamedType",
						"name": {
							"kind": "Name",
							"value": "Int"
						}
					}
				}
			],
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "getFollowingAccounts"
					},
					"arguments": [
						{
							"kind": "Argument",
							"name": {
								"kind": "Name",
								"value": "accountId"
							},
							"value": {
								"kind": "Variable",
								"name": {
									"kind": "Name",
									"value": "accountId"
								}
							}
						},
						{
							"kind": "Argument",
							"name": {
								"kind": "Name",
								"value": "cursor"
							},
							"value": {
								"kind": "Variable",
								"name": {
									"kind": "Name",
									"value": "cursor"
								}
							}
						},
						{
							"kind": "Argument",
							"name": {
								"kind": "Name",
								"value": "limit"
							},
							"value": {
								"kind": "Variable",
								"name": {
									"kind": "Name",
									"value": "limit"
								}
							}
						}
					],
					"selectionSet": {
						"kind": "SelectionSet",
						"selections": [{
							"kind": "FragmentSpread",
							"name": {
								"kind": "Name",
								"value": "ProfileConnectionFields"
							}
						}]
					}
				}]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PageInfoFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PageInfo"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "endCursor"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "hasNextPage"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "totalCount"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "AspectRatioFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "AspectRatio"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "numerator"
					}
				}, {
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "denominator"
					}
				}]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "MediaFileMetadataFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "MediaFileMetadata"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "mediaId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profile"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "contentType"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "url"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "MediaMetadataFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "MediaMetadata"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "accountID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "aspectRatio"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "AspectRatioFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "blurHash"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "durationMs"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "files"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "MediaFileMetadataFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "status"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "type"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "BlockStatusInfoFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "BlockStatusInfo"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "blockStatus"
					}
				}, {
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "isBlocked"
					}
				}]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "ProfileFollowStatusFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "ProfileFollowStatus"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "followingLevel"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "isFollowedBy"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "isFollowing"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "ProfileReferenceFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "Profile"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "username"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "displayName"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileEmoji"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileMediaId"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostCollectionReferenceFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PostCollection"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "authorID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "coverMediaID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "createdAt"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "description"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "followLevel"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postCount"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "title"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "updatedAt"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "ProfileTagFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "ProfileTag"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "name"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "memberCount"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "AuthorID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "Author"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "ProfileReferenceFields"
								}
							}]
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "ProfileFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "Profile"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "username"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "displayName"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "bio"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "joinedAt"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "followerCount"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "followingCount"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "preferInteractionType"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileEmoji"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileMediaId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "viewerId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "blockingStatus"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "BlockStatusInfoFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "pinnedPostCollectionId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "pinnedPostCollection"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostCollectionReferenceFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileFollowStatus"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "ProfileFollowStatusFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileMedia"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "MediaMetadataFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "tags"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "ProfileTagFields"
								}
							}]
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "ProfileConnectionFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "ProfileConnection"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "edges"
					},
					"selectionSet": {
						"kind": "SelectionSet",
						"selections": [{
							"kind": "FragmentSpread",
							"name": {
								"kind": "Name",
								"value": "ProfileFields"
							}
						}]
					}
				}, {
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "pageInfo"
					},
					"selectionSet": {
						"kind": "SelectionSet",
						"selections": [{
							"kind": "FragmentSpread",
							"name": {
								"kind": "Name",
								"value": "PageInfoFields"
							}
						}]
					}
				}]
			}
		}
	]
};
const GetFollowingPostsDocument = {
	"kind": "Document",
	"definitions": [
		{
			"kind": "OperationDefinition",
			"operation": "query",
			"name": {
				"kind": "Name",
				"value": "GetFollowingPosts"
			},
			"variableDefinitions": [{
				"kind": "VariableDefinition",
				"variable": {
					"kind": "Variable",
					"name": {
						"kind": "Name",
						"value": "cursor"
					}
				},
				"type": {
					"kind": "NamedType",
					"name": {
						"kind": "Name",
						"value": "String"
					}
				}
			}, {
				"kind": "VariableDefinition",
				"variable": {
					"kind": "Variable",
					"name": {
						"kind": "Name",
						"value": "limit"
					}
				},
				"type": {
					"kind": "NamedType",
					"name": {
						"kind": "Name",
						"value": "Int"
					}
				},
				"defaultValue": {
					"kind": "IntValue",
					"value": "20"
				}
			}],
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "getFollowingPosts"
					},
					"arguments": [{
						"kind": "Argument",
						"name": {
							"kind": "Name",
							"value": "cursor"
						},
						"value": {
							"kind": "Variable",
							"name": {
								"kind": "Name",
								"value": "cursor"
							}
						}
					}, {
						"kind": "Argument",
						"name": {
							"kind": "Name",
							"value": "limit"
						},
						"value": {
							"kind": "Variable",
							"name": {
								"kind": "Name",
								"value": "limit"
							}
						}
					}],
					"selectionSet": {
						"kind": "SelectionSet",
						"selections": [{
							"kind": "FragmentSpread",
							"name": {
								"kind": "Name",
								"value": "FeedPostConnectionFields"
							}
						}]
					}
				}]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PageInfoFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PageInfo"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "endCursor"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "hasNextPage"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "totalCount"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "AspectRatioFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "AspectRatio"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "numerator"
					}
				}, {
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "denominator"
					}
				}]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "MediaFileMetadataFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "MediaFileMetadata"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "mediaId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profile"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "contentType"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "url"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "MediaMetadataFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "MediaMetadata"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "accountID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "aspectRatio"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "AspectRatioFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "blurHash"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "durationMs"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "files"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "MediaFileMetadataFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "status"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "type"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "ReactionTypeFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "ReactionType"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "emojiValue"
					}
				}, {
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "nativeValue"
					}
				}]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "ReactionSummaryFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "ReactionSummary"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "count"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "isReactedByViewer"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "type"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "ReactionTypeFields"
								}
							}]
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostReactionsConnectionFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PostReactionsConnection"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "queryLimit"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "remainingCount"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "viewerId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "reactions"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "ReactionSummaryFields"
								}
							}]
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostOperationPermissionFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PostOperationPermission"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "canComment"
					}
				}, {
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "canReact"
					}
				}]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostVisibilityFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PostVisibility"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "policy"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileTags"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "pushPolicy"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostOptionsFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PostOptions"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "commentPolicy"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "copyPolicy"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "reactionPolicy"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postVisibility"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostVisibilityFields"
								}
							}]
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "LinkPreviewFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "LinkPreview"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "Url"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "canonicalUrl"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "resourceType"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "summary"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "thumbnailUrl"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "title"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "ProfileReferenceFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "Profile"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "username"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "displayName"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileEmoji"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileMediaId"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostReferenceFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "Post"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "authorID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "content"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "createdAt"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "parentPostId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "commentCount"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostCollectionReferenceFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PostCollection"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "authorID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "coverMediaID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "createdAt"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "description"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "followLevel"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postCount"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "title"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "updatedAt"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "AttachmentIDFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "AttachmentID"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "type"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "embeddedCollectionId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "embeddedPostId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "embeddedProfileId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "linkUrl"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "mediaId"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "AttachmentFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "Attachment"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "type"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "linkPreview"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "LinkPreviewFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "media"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "MediaMetadataFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "embeddedProfile"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "ProfileReferenceFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "embeddedPost"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostReferenceFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "embeddedCollection"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostCollectionReferenceFields"
								}
							}]
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "Post"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "authorID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "content"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "createdAt"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "parentPostId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "commentCount"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "leafAncestorIds"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "rootAncestorIds"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "author"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "ProfileReferenceFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "attachmentIds"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "AttachmentIDFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "attachments"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "AttachmentFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postCollections"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostCollectionReferenceFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postOperationPermission"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostOperationPermissionFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postOptions"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostOptionsFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "reactions"
						},
						"arguments": [{
							"kind": "Argument",
							"name": {
								"kind": "Name",
								"value": "first"
							},
							"value": {
								"kind": "IntValue",
								"value": "20"
							}
						}],
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostReactionsConnectionFields"
								}
							}]
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "FeedPostEdgeFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "FeedPostEdge"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "id"
					}
				}, {
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "post"
					},
					"selectionSet": {
						"kind": "SelectionSet",
						"selections": [{
							"kind": "FragmentSpread",
							"name": {
								"kind": "Name",
								"value": "PostFields"
							}
						}]
					}
				}]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "FeedPostConnectionFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "FeedPostConnection"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "edges"
					},
					"selectionSet": {
						"kind": "SelectionSet",
						"selections": [{
							"kind": "FragmentSpread",
							"name": {
								"kind": "Name",
								"value": "FeedPostEdgeFields"
							}
						}]
					}
				}, {
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "pageInfo"
					},
					"selectionSet": {
						"kind": "SelectionSet",
						"selections": [{
							"kind": "FragmentSpread",
							"name": {
								"kind": "Name",
								"value": "PageInfoFields"
							}
						}]
					}
				}]
			}
		}
	]
};
const GetHistoryPostsDocument = {
	"kind": "Document",
	"definitions": [
		{
			"kind": "OperationDefinition",
			"operation": "query",
			"name": {
				"kind": "Name",
				"value": "GetHistoryPosts"
			},
			"variableDefinitions": [
				{
					"kind": "VariableDefinition",
					"variable": {
						"kind": "Variable",
						"name": {
							"kind": "Name",
							"value": "cursor"
						}
					},
					"type": {
						"kind": "NamedType",
						"name": {
							"kind": "Name",
							"value": "String"
						}
					}
				},
				{
					"kind": "VariableDefinition",
					"variable": {
						"kind": "Variable",
						"name": {
							"kind": "Name",
							"value": "includeOwnPosts"
						}
					},
					"type": {
						"kind": "NamedType",
						"name": {
							"kind": "Name",
							"value": "Boolean"
						}
					},
					"defaultValue": {
						"kind": "BooleanValue",
						"value": false
					}
				},
				{
					"kind": "VariableDefinition",
					"variable": {
						"kind": "Variable",
						"name": {
							"kind": "Name",
							"value": "limit"
						}
					},
					"type": {
						"kind": "NamedType",
						"name": {
							"kind": "Name",
							"value": "Int"
						}
					},
					"defaultValue": {
						"kind": "IntValue",
						"value": "20"
					}
				}
			],
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "getHistoryPosts"
					},
					"arguments": [
						{
							"kind": "Argument",
							"name": {
								"kind": "Name",
								"value": "cursor"
							},
							"value": {
								"kind": "Variable",
								"name": {
									"kind": "Name",
									"value": "cursor"
								}
							}
						},
						{
							"kind": "Argument",
							"name": {
								"kind": "Name",
								"value": "includeOwnPosts"
							},
							"value": {
								"kind": "Variable",
								"name": {
									"kind": "Name",
									"value": "includeOwnPosts"
								}
							}
						},
						{
							"kind": "Argument",
							"name": {
								"kind": "Name",
								"value": "limit"
							},
							"value": {
								"kind": "Variable",
								"name": {
									"kind": "Name",
									"value": "limit"
								}
							}
						}
					],
					"selectionSet": {
						"kind": "SelectionSet",
						"selections": [{
							"kind": "FragmentSpread",
							"name": {
								"kind": "Name",
								"value": "FeedPostConnectionFields"
							}
						}]
					}
				}]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PageInfoFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PageInfo"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "endCursor"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "hasNextPage"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "totalCount"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "AspectRatioFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "AspectRatio"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "numerator"
					}
				}, {
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "denominator"
					}
				}]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "MediaFileMetadataFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "MediaFileMetadata"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "mediaId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profile"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "contentType"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "url"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "MediaMetadataFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "MediaMetadata"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "accountID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "aspectRatio"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "AspectRatioFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "blurHash"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "durationMs"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "files"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "MediaFileMetadataFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "status"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "type"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "ReactionTypeFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "ReactionType"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "emojiValue"
					}
				}, {
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "nativeValue"
					}
				}]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "ReactionSummaryFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "ReactionSummary"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "count"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "isReactedByViewer"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "type"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "ReactionTypeFields"
								}
							}]
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostReactionsConnectionFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PostReactionsConnection"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "queryLimit"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "remainingCount"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "viewerId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "reactions"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "ReactionSummaryFields"
								}
							}]
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostOperationPermissionFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PostOperationPermission"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "canComment"
					}
				}, {
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "canReact"
					}
				}]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostVisibilityFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PostVisibility"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "policy"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileTags"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "pushPolicy"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostOptionsFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PostOptions"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "commentPolicy"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "copyPolicy"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "reactionPolicy"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postVisibility"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostVisibilityFields"
								}
							}]
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "LinkPreviewFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "LinkPreview"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "Url"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "canonicalUrl"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "resourceType"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "summary"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "thumbnailUrl"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "title"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "ProfileReferenceFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "Profile"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "username"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "displayName"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileEmoji"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileMediaId"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostReferenceFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "Post"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "authorID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "content"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "createdAt"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "parentPostId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "commentCount"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostCollectionReferenceFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PostCollection"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "authorID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "coverMediaID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "createdAt"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "description"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "followLevel"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postCount"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "title"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "updatedAt"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "AttachmentIDFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "AttachmentID"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "type"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "embeddedCollectionId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "embeddedPostId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "embeddedProfileId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "linkUrl"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "mediaId"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "AttachmentFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "Attachment"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "type"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "linkPreview"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "LinkPreviewFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "media"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "MediaMetadataFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "embeddedProfile"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "ProfileReferenceFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "embeddedPost"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostReferenceFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "embeddedCollection"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostCollectionReferenceFields"
								}
							}]
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "Post"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "authorID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "content"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "createdAt"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "parentPostId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "commentCount"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "leafAncestorIds"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "rootAncestorIds"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "author"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "ProfileReferenceFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "attachmentIds"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "AttachmentIDFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "attachments"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "AttachmentFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postCollections"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostCollectionReferenceFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postOperationPermission"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostOperationPermissionFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postOptions"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostOptionsFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "reactions"
						},
						"arguments": [{
							"kind": "Argument",
							"name": {
								"kind": "Name",
								"value": "first"
							},
							"value": {
								"kind": "IntValue",
								"value": "20"
							}
						}],
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostReactionsConnectionFields"
								}
							}]
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "FeedPostEdgeFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "FeedPostEdge"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "id"
					}
				}, {
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "post"
					},
					"selectionSet": {
						"kind": "SelectionSet",
						"selections": [{
							"kind": "FragmentSpread",
							"name": {
								"kind": "Name",
								"value": "PostFields"
							}
						}]
					}
				}]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "FeedPostConnectionFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "FeedPostConnection"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "edges"
					},
					"selectionSet": {
						"kind": "SelectionSet",
						"selections": [{
							"kind": "FragmentSpread",
							"name": {
								"kind": "Name",
								"value": "FeedPostEdgeFields"
							}
						}]
					}
				}, {
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "pageInfo"
					},
					"selectionSet": {
						"kind": "SelectionSet",
						"selections": [{
							"kind": "FragmentSpread",
							"name": {
								"kind": "Name",
								"value": "PageInfoFields"
							}
						}]
					}
				}]
			}
		}
	]
};
const GetLinkPreviewDocument = {
	"kind": "Document",
	"definitions": [{
		"kind": "OperationDefinition",
		"operation": "query",
		"name": {
			"kind": "Name",
			"value": "GetLinkPreview"
		},
		"variableDefinitions": [{
			"kind": "VariableDefinition",
			"variable": {
				"kind": "Variable",
				"name": {
					"kind": "Name",
					"value": "url"
				}
			},
			"type": {
				"kind": "NonNullType",
				"type": {
					"kind": "NamedType",
					"name": {
						"kind": "Name",
						"value": "String"
					}
				}
			}
		}],
		"selectionSet": {
			"kind": "SelectionSet",
			"selections": [{
				"kind": "Field",
				"name": {
					"kind": "Name",
					"value": "getLinkPreview"
				},
				"arguments": [{
					"kind": "Argument",
					"name": {
						"kind": "Name",
						"value": "url"
					},
					"value": {
						"kind": "Variable",
						"name": {
							"kind": "Name",
							"value": "url"
						}
					}
				}],
				"selectionSet": {
					"kind": "SelectionSet",
					"selections": [{
						"kind": "FragmentSpread",
						"name": {
							"kind": "Name",
							"value": "LinkPreviewFields"
						}
					}]
				}
			}]
		}
	}, {
		"kind": "FragmentDefinition",
		"name": {
			"kind": "Name",
			"value": "LinkPreviewFields"
		},
		"typeCondition": {
			"kind": "NamedType",
			"name": {
				"kind": "Name",
				"value": "LinkPreview"
			}
		},
		"selectionSet": {
			"kind": "SelectionSet",
			"selections": [
				{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "Url"
					}
				},
				{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "canonicalUrl"
					}
				},
				{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "resourceType"
					}
				},
				{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "summary"
					}
				},
				{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "thumbnailUrl"
					}
				},
				{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "title"
					}
				}
			]
		}
	}]
};
const GetMediaDocument = {
	"kind": "Document",
	"definitions": [
		{
			"kind": "OperationDefinition",
			"operation": "query",
			"name": {
				"kind": "Name",
				"value": "GetMedia"
			},
			"variableDefinitions": [{
				"kind": "VariableDefinition",
				"variable": {
					"kind": "Variable",
					"name": {
						"kind": "Name",
						"value": "mediaId"
					}
				},
				"type": {
					"kind": "NonNullType",
					"type": {
						"kind": "NamedType",
						"name": {
							"kind": "Name",
							"value": "ID"
						}
					}
				}
			}],
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "getMedia"
					},
					"arguments": [{
						"kind": "Argument",
						"name": {
							"kind": "Name",
							"value": "mediaId"
						},
						"value": {
							"kind": "Variable",
							"name": {
								"kind": "Name",
								"value": "mediaId"
							}
						}
					}],
					"selectionSet": {
						"kind": "SelectionSet",
						"selections": [{
							"kind": "FragmentSpread",
							"name": {
								"kind": "Name",
								"value": "MediaMetadataFields"
							}
						}]
					}
				}]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "AspectRatioFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "AspectRatio"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "numerator"
					}
				}, {
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "denominator"
					}
				}]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "MediaFileMetadataFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "MediaFileMetadata"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "mediaId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profile"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "contentType"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "url"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "MediaMetadataFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "MediaMetadata"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "accountID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "aspectRatio"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "AspectRatioFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "blurHash"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "durationMs"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "files"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "MediaFileMetadataFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "status"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "type"
						}
					}
				]
			}
		}
	]
};
const GetMutualFollowersDocument = {
	"kind": "Document",
	"definitions": [
		{
			"kind": "OperationDefinition",
			"operation": "query",
			"name": {
				"kind": "Name",
				"value": "GetMutualFollowers"
			},
			"variableDefinitions": [
				{
					"kind": "VariableDefinition",
					"variable": {
						"kind": "Variable",
						"name": {
							"kind": "Name",
							"value": "accountId"
						}
					},
					"type": {
						"kind": "NonNullType",
						"type": {
							"kind": "NamedType",
							"name": {
								"kind": "Name",
								"value": "ID"
							}
						}
					}
				},
				{
					"kind": "VariableDefinition",
					"variable": {
						"kind": "Variable",
						"name": {
							"kind": "Name",
							"value": "cursor"
						}
					},
					"type": {
						"kind": "NamedType",
						"name": {
							"kind": "Name",
							"value": "String"
						}
					}
				},
				{
					"kind": "VariableDefinition",
					"variable": {
						"kind": "Variable",
						"name": {
							"kind": "Name",
							"value": "limit"
						}
					},
					"type": {
						"kind": "NamedType",
						"name": {
							"kind": "Name",
							"value": "Int"
						}
					}
				}
			],
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "getMutualFollowers"
					},
					"arguments": [
						{
							"kind": "Argument",
							"name": {
								"kind": "Name",
								"value": "accountId"
							},
							"value": {
								"kind": "Variable",
								"name": {
									"kind": "Name",
									"value": "accountId"
								}
							}
						},
						{
							"kind": "Argument",
							"name": {
								"kind": "Name",
								"value": "cursor"
							},
							"value": {
								"kind": "Variable",
								"name": {
									"kind": "Name",
									"value": "cursor"
								}
							}
						},
						{
							"kind": "Argument",
							"name": {
								"kind": "Name",
								"value": "limit"
							},
							"value": {
								"kind": "Variable",
								"name": {
									"kind": "Name",
									"value": "limit"
								}
							}
						}
					],
					"selectionSet": {
						"kind": "SelectionSet",
						"selections": [{
							"kind": "FragmentSpread",
							"name": {
								"kind": "Name",
								"value": "ProfileConnectionFields"
							}
						}]
					}
				}]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PageInfoFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PageInfo"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "endCursor"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "hasNextPage"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "totalCount"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "AspectRatioFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "AspectRatio"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "numerator"
					}
				}, {
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "denominator"
					}
				}]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "MediaFileMetadataFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "MediaFileMetadata"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "mediaId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profile"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "contentType"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "url"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "MediaMetadataFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "MediaMetadata"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "accountID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "aspectRatio"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "AspectRatioFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "blurHash"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "durationMs"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "files"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "MediaFileMetadataFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "status"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "type"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "BlockStatusInfoFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "BlockStatusInfo"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "blockStatus"
					}
				}, {
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "isBlocked"
					}
				}]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "ProfileFollowStatusFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "ProfileFollowStatus"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "followingLevel"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "isFollowedBy"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "isFollowing"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "ProfileReferenceFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "Profile"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "username"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "displayName"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileEmoji"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileMediaId"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostCollectionReferenceFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PostCollection"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "authorID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "coverMediaID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "createdAt"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "description"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "followLevel"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postCount"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "title"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "updatedAt"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "ProfileTagFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "ProfileTag"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "name"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "memberCount"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "AuthorID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "Author"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "ProfileReferenceFields"
								}
							}]
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "ProfileFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "Profile"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "username"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "displayName"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "bio"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "joinedAt"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "followerCount"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "followingCount"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "preferInteractionType"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileEmoji"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileMediaId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "viewerId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "blockingStatus"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "BlockStatusInfoFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "pinnedPostCollectionId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "pinnedPostCollection"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostCollectionReferenceFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileFollowStatus"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "ProfileFollowStatusFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileMedia"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "MediaMetadataFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "tags"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "ProfileTagFields"
								}
							}]
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "ProfileConnectionFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "ProfileConnection"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "edges"
					},
					"selectionSet": {
						"kind": "SelectionSet",
						"selections": [{
							"kind": "FragmentSpread",
							"name": {
								"kind": "Name",
								"value": "ProfileFields"
							}
						}]
					}
				}, {
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "pageInfo"
					},
					"selectionSet": {
						"kind": "SelectionSet",
						"selections": [{
							"kind": "FragmentSpread",
							"name": {
								"kind": "Name",
								"value": "PageInfoFields"
							}
						}]
					}
				}]
			}
		}
	]
};
const GetMyPostCollectionsDocument = {
	"kind": "Document",
	"definitions": [
		{
			"kind": "OperationDefinition",
			"operation": "query",
			"name": {
				"kind": "Name",
				"value": "GetMyPostCollections"
			},
			"variableDefinitions": [{
				"kind": "VariableDefinition",
				"variable": {
					"kind": "Variable",
					"name": {
						"kind": "Name",
						"value": "cursor"
					}
				},
				"type": {
					"kind": "NamedType",
					"name": {
						"kind": "Name",
						"value": "String"
					}
				}
			}, {
				"kind": "VariableDefinition",
				"variable": {
					"kind": "Variable",
					"name": {
						"kind": "Name",
						"value": "limit"
					}
				},
				"type": {
					"kind": "NamedType",
					"name": {
						"kind": "Name",
						"value": "Int"
					}
				}
			}],
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "getMyPostCollections"
					},
					"arguments": [{
						"kind": "Argument",
						"name": {
							"kind": "Name",
							"value": "cursor"
						},
						"value": {
							"kind": "Variable",
							"name": {
								"kind": "Name",
								"value": "cursor"
							}
						}
					}, {
						"kind": "Argument",
						"name": {
							"kind": "Name",
							"value": "limit"
						},
						"value": {
							"kind": "Variable",
							"name": {
								"kind": "Name",
								"value": "limit"
							}
						}
					}],
					"selectionSet": {
						"kind": "SelectionSet",
						"selections": [{
							"kind": "FragmentSpread",
							"name": {
								"kind": "Name",
								"value": "PostCollectionConnectionFields"
							}
						}]
					}
				}]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PageInfoFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PageInfo"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "endCursor"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "hasNextPage"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "totalCount"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "AspectRatioFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "AspectRatio"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "numerator"
					}
				}, {
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "denominator"
					}
				}]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "MediaFileMetadataFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "MediaFileMetadata"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "mediaId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profile"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "contentType"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "url"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "MediaMetadataFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "MediaMetadata"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "accountID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "aspectRatio"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "AspectRatioFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "blurHash"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "durationMs"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "files"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "MediaFileMetadataFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "status"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "type"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "ProfileReferenceFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "Profile"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "username"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "displayName"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileEmoji"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileMediaId"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostCollectionFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PostCollection"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "authorID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "coverMediaID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "createdAt"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "description"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "followLevel"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postCount"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "title"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "updatedAt"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "author"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "ProfileReferenceFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "coverMedia"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "MediaMetadataFields"
								}
							}]
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostCollectionConnectionFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PostCollectionConnection"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "edges"
					},
					"selectionSet": {
						"kind": "SelectionSet",
						"selections": [{
							"kind": "FragmentSpread",
							"name": {
								"kind": "Name",
								"value": "PostCollectionFields"
							}
						}]
					}
				}, {
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "pageInfo"
					},
					"selectionSet": {
						"kind": "SelectionSet",
						"selections": [{
							"kind": "FragmentSpread",
							"name": {
								"kind": "Name",
								"value": "PageInfoFields"
							}
						}]
					}
				}]
			}
		}
	]
};
const GetNotificationsDocument = {
	"kind": "Document",
	"definitions": [
		{
			"kind": "OperationDefinition",
			"operation": "query",
			"name": {
				"kind": "Name",
				"value": "GetNotifications"
			},
			"variableDefinitions": [
				{
					"kind": "VariableDefinition",
					"variable": {
						"kind": "Variable",
						"name": {
							"kind": "Name",
							"value": "cursor"
						}
					},
					"type": {
						"kind": "NamedType",
						"name": {
							"kind": "Name",
							"value": "String"
						}
					}
				},
				{
					"kind": "VariableDefinition",
					"variable": {
						"kind": "Variable",
						"name": {
							"kind": "Name",
							"value": "filter"
						}
					},
					"type": {
						"kind": "NamedType",
						"name": {
							"kind": "Name",
							"value": "NotificationFilterInput"
						}
					}
				},
				{
					"kind": "VariableDefinition",
					"variable": {
						"kind": "Variable",
						"name": {
							"kind": "Name",
							"value": "limit"
						}
					},
					"type": {
						"kind": "NamedType",
						"name": {
							"kind": "Name",
							"value": "Int"
						}
					},
					"defaultValue": {
						"kind": "IntValue",
						"value": "20"
					}
				}
			],
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "getNotifications"
					},
					"arguments": [
						{
							"kind": "Argument",
							"name": {
								"kind": "Name",
								"value": "cursor"
							},
							"value": {
								"kind": "Variable",
								"name": {
									"kind": "Name",
									"value": "cursor"
								}
							}
						},
						{
							"kind": "Argument",
							"name": {
								"kind": "Name",
								"value": "filter"
							},
							"value": {
								"kind": "Variable",
								"name": {
									"kind": "Name",
									"value": "filter"
								}
							}
						},
						{
							"kind": "Argument",
							"name": {
								"kind": "Name",
								"value": "limit"
							},
							"value": {
								"kind": "Variable",
								"name": {
									"kind": "Name",
									"value": "limit"
								}
							}
						}
					],
					"selectionSet": {
						"kind": "SelectionSet",
						"selections": [{
							"kind": "FragmentSpread",
							"name": {
								"kind": "Name",
								"value": "NotificationConnectionFields"
							}
						}]
					}
				}]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PageInfoFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PageInfo"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "endCursor"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "hasNextPage"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "totalCount"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "ReactionTypeFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "ReactionType"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "emojiValue"
					}
				}, {
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "nativeValue"
					}
				}]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "ProfileReferenceFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "Profile"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "username"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "displayName"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileEmoji"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileMediaId"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostReferenceFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "Post"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "authorID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "content"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "createdAt"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "parentPostId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "commentCount"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostCollectionReferenceFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PostCollection"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "authorID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "coverMediaID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "createdAt"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "description"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "followLevel"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postCount"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "title"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "updatedAt"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "NotificationFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "Notification"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "createdAt"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "isRead"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "message"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "type"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "relatedPostID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "relatedPostCollectionID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "sourceProfileID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "targetProfileID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "reaction"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "ReactionTypeFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "relatedPost"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostReferenceFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "relatedPostCollection"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostCollectionReferenceFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "sourceProfile"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "ProfileReferenceFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "targetProfile"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "ProfileReferenceFields"
								}
							}]
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "NotificationConnectionFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "NotificationConnection"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "edges"
					},
					"selectionSet": {
						"kind": "SelectionSet",
						"selections": [{
							"kind": "FragmentSpread",
							"name": {
								"kind": "Name",
								"value": "NotificationFields"
							}
						}]
					}
				}, {
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "pageInfo"
					},
					"selectionSet": {
						"kind": "SelectionSet",
						"selections": [{
							"kind": "FragmentSpread",
							"name": {
								"kind": "Name",
								"value": "PageInfoFields"
							}
						}]
					}
				}]
			}
		}
	]
};
const GetPopularPostsDocument = {
	"kind": "Document",
	"definitions": [
		{
			"kind": "OperationDefinition",
			"operation": "query",
			"name": {
				"kind": "Name",
				"value": "GetPopularPosts"
			},
			"variableDefinitions": [
				{
					"kind": "VariableDefinition",
					"variable": {
						"kind": "Variable",
						"name": {
							"kind": "Name",
							"value": "cursor"
						}
					},
					"type": {
						"kind": "NamedType",
						"name": {
							"kind": "Name",
							"value": "String"
						}
					}
				},
				{
					"kind": "VariableDefinition",
					"variable": {
						"kind": "Variable",
						"name": {
							"kind": "Name",
							"value": "language"
						}
					},
					"type": {
						"kind": "NamedType",
						"name": {
							"kind": "Name",
							"value": "String"
						}
					}
				},
				{
					"kind": "VariableDefinition",
					"variable": {
						"kind": "Variable",
						"name": {
							"kind": "Name",
							"value": "limit"
						}
					},
					"type": {
						"kind": "NamedType",
						"name": {
							"kind": "Name",
							"value": "Int"
						}
					},
					"defaultValue": {
						"kind": "IntValue",
						"value": "20"
					}
				}
			],
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "getPopularPosts"
					},
					"arguments": [
						{
							"kind": "Argument",
							"name": {
								"kind": "Name",
								"value": "cursor"
							},
							"value": {
								"kind": "Variable",
								"name": {
									"kind": "Name",
									"value": "cursor"
								}
							}
						},
						{
							"kind": "Argument",
							"name": {
								"kind": "Name",
								"value": "language"
							},
							"value": {
								"kind": "Variable",
								"name": {
									"kind": "Name",
									"value": "language"
								}
							}
						},
						{
							"kind": "Argument",
							"name": {
								"kind": "Name",
								"value": "limit"
							},
							"value": {
								"kind": "Variable",
								"name": {
									"kind": "Name",
									"value": "limit"
								}
							}
						}
					],
					"selectionSet": {
						"kind": "SelectionSet",
						"selections": [{
							"kind": "FragmentSpread",
							"name": {
								"kind": "Name",
								"value": "FeedPostConnectionFields"
							}
						}]
					}
				}]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PageInfoFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PageInfo"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "endCursor"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "hasNextPage"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "totalCount"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "AspectRatioFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "AspectRatio"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "numerator"
					}
				}, {
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "denominator"
					}
				}]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "MediaFileMetadataFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "MediaFileMetadata"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "mediaId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profile"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "contentType"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "url"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "MediaMetadataFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "MediaMetadata"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "accountID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "aspectRatio"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "AspectRatioFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "blurHash"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "durationMs"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "files"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "MediaFileMetadataFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "status"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "type"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "ReactionTypeFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "ReactionType"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "emojiValue"
					}
				}, {
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "nativeValue"
					}
				}]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "ReactionSummaryFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "ReactionSummary"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "count"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "isReactedByViewer"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "type"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "ReactionTypeFields"
								}
							}]
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostReactionsConnectionFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PostReactionsConnection"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "queryLimit"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "remainingCount"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "viewerId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "reactions"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "ReactionSummaryFields"
								}
							}]
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostOperationPermissionFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PostOperationPermission"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "canComment"
					}
				}, {
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "canReact"
					}
				}]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostVisibilityFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PostVisibility"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "policy"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileTags"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "pushPolicy"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostOptionsFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PostOptions"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "commentPolicy"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "copyPolicy"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "reactionPolicy"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postVisibility"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostVisibilityFields"
								}
							}]
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "LinkPreviewFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "LinkPreview"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "Url"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "canonicalUrl"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "resourceType"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "summary"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "thumbnailUrl"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "title"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "ProfileReferenceFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "Profile"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "username"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "displayName"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileEmoji"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileMediaId"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostReferenceFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "Post"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "authorID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "content"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "createdAt"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "parentPostId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "commentCount"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostCollectionReferenceFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PostCollection"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "authorID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "coverMediaID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "createdAt"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "description"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "followLevel"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postCount"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "title"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "updatedAt"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "AttachmentIDFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "AttachmentID"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "type"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "embeddedCollectionId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "embeddedPostId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "embeddedProfileId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "linkUrl"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "mediaId"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "AttachmentFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "Attachment"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "type"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "linkPreview"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "LinkPreviewFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "media"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "MediaMetadataFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "embeddedProfile"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "ProfileReferenceFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "embeddedPost"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostReferenceFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "embeddedCollection"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostCollectionReferenceFields"
								}
							}]
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "Post"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "authorID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "content"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "createdAt"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "parentPostId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "commentCount"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "leafAncestorIds"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "rootAncestorIds"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "author"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "ProfileReferenceFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "attachmentIds"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "AttachmentIDFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "attachments"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "AttachmentFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postCollections"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostCollectionReferenceFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postOperationPermission"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostOperationPermissionFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postOptions"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostOptionsFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "reactions"
						},
						"arguments": [{
							"kind": "Argument",
							"name": {
								"kind": "Name",
								"value": "first"
							},
							"value": {
								"kind": "IntValue",
								"value": "20"
							}
						}],
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostReactionsConnectionFields"
								}
							}]
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "FeedPostEdgeFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "FeedPostEdge"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "id"
					}
				}, {
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "post"
					},
					"selectionSet": {
						"kind": "SelectionSet",
						"selections": [{
							"kind": "FragmentSpread",
							"name": {
								"kind": "Name",
								"value": "PostFields"
							}
						}]
					}
				}]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "FeedPostConnectionFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "FeedPostConnection"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "edges"
					},
					"selectionSet": {
						"kind": "SelectionSet",
						"selections": [{
							"kind": "FragmentSpread",
							"name": {
								"kind": "Name",
								"value": "FeedPostEdgeFields"
							}
						}]
					}
				}, {
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "pageInfo"
					},
					"selectionSet": {
						"kind": "SelectionSet",
						"selections": [{
							"kind": "FragmentSpread",
							"name": {
								"kind": "Name",
								"value": "PageInfoFields"
							}
						}]
					}
				}]
			}
		}
	]
};
const GetPostDocument = {
	"kind": "Document",
	"definitions": [
		{
			"kind": "OperationDefinition",
			"operation": "query",
			"name": {
				"kind": "Name",
				"value": "GetPost"
			},
			"variableDefinitions": [{
				"kind": "VariableDefinition",
				"variable": {
					"kind": "Variable",
					"name": {
						"kind": "Name",
						"value": "postId"
					}
				},
				"type": {
					"kind": "NonNullType",
					"type": {
						"kind": "NamedType",
						"name": {
							"kind": "Name",
							"value": "ID"
						}
					}
				}
			}],
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "getPost"
					},
					"arguments": [{
						"kind": "Argument",
						"name": {
							"kind": "Name",
							"value": "postId"
						},
						"value": {
							"kind": "Variable",
							"name": {
								"kind": "Name",
								"value": "postId"
							}
						}
					}],
					"selectionSet": {
						"kind": "SelectionSet",
						"selections": [{
							"kind": "FragmentSpread",
							"name": {
								"kind": "Name",
								"value": "PostFields"
							}
						}]
					}
				}]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "AspectRatioFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "AspectRatio"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "numerator"
					}
				}, {
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "denominator"
					}
				}]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "MediaFileMetadataFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "MediaFileMetadata"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "mediaId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profile"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "contentType"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "url"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "MediaMetadataFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "MediaMetadata"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "accountID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "aspectRatio"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "AspectRatioFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "blurHash"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "durationMs"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "files"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "MediaFileMetadataFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "status"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "type"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "ReactionTypeFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "ReactionType"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "emojiValue"
					}
				}, {
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "nativeValue"
					}
				}]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "ReactionSummaryFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "ReactionSummary"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "count"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "isReactedByViewer"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "type"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "ReactionTypeFields"
								}
							}]
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostReactionsConnectionFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PostReactionsConnection"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "queryLimit"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "remainingCount"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "viewerId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "reactions"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "ReactionSummaryFields"
								}
							}]
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostOperationPermissionFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PostOperationPermission"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "canComment"
					}
				}, {
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "canReact"
					}
				}]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostVisibilityFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PostVisibility"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "policy"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileTags"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "pushPolicy"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostOptionsFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PostOptions"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "commentPolicy"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "copyPolicy"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "reactionPolicy"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postVisibility"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostVisibilityFields"
								}
							}]
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "LinkPreviewFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "LinkPreview"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "Url"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "canonicalUrl"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "resourceType"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "summary"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "thumbnailUrl"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "title"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "ProfileReferenceFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "Profile"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "username"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "displayName"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileEmoji"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileMediaId"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostReferenceFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "Post"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "authorID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "content"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "createdAt"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "parentPostId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "commentCount"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostCollectionReferenceFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PostCollection"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "authorID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "coverMediaID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "createdAt"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "description"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "followLevel"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postCount"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "title"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "updatedAt"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "AttachmentIDFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "AttachmentID"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "type"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "embeddedCollectionId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "embeddedPostId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "embeddedProfileId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "linkUrl"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "mediaId"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "AttachmentFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "Attachment"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "type"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "linkPreview"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "LinkPreviewFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "media"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "MediaMetadataFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "embeddedProfile"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "ProfileReferenceFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "embeddedPost"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostReferenceFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "embeddedCollection"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostCollectionReferenceFields"
								}
							}]
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "Post"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "authorID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "content"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "createdAt"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "parentPostId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "commentCount"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "leafAncestorIds"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "rootAncestorIds"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "author"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "ProfileReferenceFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "attachmentIds"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "AttachmentIDFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "attachments"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "AttachmentFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postCollections"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostCollectionReferenceFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postOperationPermission"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostOperationPermissionFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postOptions"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostOptionsFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "reactions"
						},
						"arguments": [{
							"kind": "Argument",
							"name": {
								"kind": "Name",
								"value": "first"
							},
							"value": {
								"kind": "IntValue",
								"value": "20"
							}
						}],
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostReactionsConnectionFields"
								}
							}]
						}
					}
				]
			}
		}
	]
};
const GetPostCollectionDocument = {
	"kind": "Document",
	"definitions": [
		{
			"kind": "OperationDefinition",
			"operation": "query",
			"name": {
				"kind": "Name",
				"value": "GetPostCollection"
			},
			"variableDefinitions": [{
				"kind": "VariableDefinition",
				"variable": {
					"kind": "Variable",
					"name": {
						"kind": "Name",
						"value": "id"
					}
				},
				"type": {
					"kind": "NonNullType",
					"type": {
						"kind": "NamedType",
						"name": {
							"kind": "Name",
							"value": "ID"
						}
					}
				}
			}],
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "getPostCollection"
					},
					"arguments": [{
						"kind": "Argument",
						"name": {
							"kind": "Name",
							"value": "id"
						},
						"value": {
							"kind": "Variable",
							"name": {
								"kind": "Name",
								"value": "id"
							}
						}
					}],
					"selectionSet": {
						"kind": "SelectionSet",
						"selections": [{
							"kind": "FragmentSpread",
							"name": {
								"kind": "Name",
								"value": "PostCollectionFields"
							}
						}]
					}
				}]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "AspectRatioFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "AspectRatio"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "numerator"
					}
				}, {
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "denominator"
					}
				}]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "MediaFileMetadataFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "MediaFileMetadata"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "mediaId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profile"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "contentType"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "url"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "MediaMetadataFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "MediaMetadata"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "accountID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "aspectRatio"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "AspectRatioFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "blurHash"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "durationMs"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "files"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "MediaFileMetadataFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "status"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "type"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "ProfileReferenceFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "Profile"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "username"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "displayName"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileEmoji"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileMediaId"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostCollectionFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PostCollection"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "authorID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "coverMediaID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "createdAt"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "description"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "followLevel"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postCount"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "title"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "updatedAt"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "author"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "ProfileReferenceFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "coverMedia"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "MediaMetadataFields"
								}
							}]
						}
					}
				]
			}
		}
	]
};
const GetPostCollectionsByAuthorDocument = {
	"kind": "Document",
	"definitions": [
		{
			"kind": "OperationDefinition",
			"operation": "query",
			"name": {
				"kind": "Name",
				"value": "GetPostCollectionsByAuthor"
			},
			"variableDefinitions": [
				{
					"kind": "VariableDefinition",
					"variable": {
						"kind": "Variable",
						"name": {
							"kind": "Name",
							"value": "authorID"
						}
					},
					"type": {
						"kind": "NonNullType",
						"type": {
							"kind": "NamedType",
							"name": {
								"kind": "Name",
								"value": "ID"
							}
						}
					}
				},
				{
					"kind": "VariableDefinition",
					"variable": {
						"kind": "Variable",
						"name": {
							"kind": "Name",
							"value": "cursor"
						}
					},
					"type": {
						"kind": "NamedType",
						"name": {
							"kind": "Name",
							"value": "String"
						}
					}
				},
				{
					"kind": "VariableDefinition",
					"variable": {
						"kind": "Variable",
						"name": {
							"kind": "Name",
							"value": "limit"
						}
					},
					"type": {
						"kind": "NamedType",
						"name": {
							"kind": "Name",
							"value": "Int"
						}
					}
				}
			],
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "getPostCollectionsByAuthor"
					},
					"arguments": [
						{
							"kind": "Argument",
							"name": {
								"kind": "Name",
								"value": "authorID"
							},
							"value": {
								"kind": "Variable",
								"name": {
									"kind": "Name",
									"value": "authorID"
								}
							}
						},
						{
							"kind": "Argument",
							"name": {
								"kind": "Name",
								"value": "cursor"
							},
							"value": {
								"kind": "Variable",
								"name": {
									"kind": "Name",
									"value": "cursor"
								}
							}
						},
						{
							"kind": "Argument",
							"name": {
								"kind": "Name",
								"value": "limit"
							},
							"value": {
								"kind": "Variable",
								"name": {
									"kind": "Name",
									"value": "limit"
								}
							}
						}
					],
					"selectionSet": {
						"kind": "SelectionSet",
						"selections": [{
							"kind": "FragmentSpread",
							"name": {
								"kind": "Name",
								"value": "PostCollectionConnectionFields"
							}
						}]
					}
				}]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PageInfoFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PageInfo"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "endCursor"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "hasNextPage"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "totalCount"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "AspectRatioFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "AspectRatio"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "numerator"
					}
				}, {
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "denominator"
					}
				}]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "MediaFileMetadataFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "MediaFileMetadata"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "mediaId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profile"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "contentType"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "url"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "MediaMetadataFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "MediaMetadata"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "accountID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "aspectRatio"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "AspectRatioFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "blurHash"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "durationMs"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "files"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "MediaFileMetadataFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "status"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "type"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "ProfileReferenceFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "Profile"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "username"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "displayName"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileEmoji"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileMediaId"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostCollectionFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PostCollection"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "authorID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "coverMediaID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "createdAt"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "description"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "followLevel"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postCount"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "title"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "updatedAt"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "author"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "ProfileReferenceFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "coverMedia"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "MediaMetadataFields"
								}
							}]
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostCollectionConnectionFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PostCollectionConnection"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "edges"
					},
					"selectionSet": {
						"kind": "SelectionSet",
						"selections": [{
							"kind": "FragmentSpread",
							"name": {
								"kind": "Name",
								"value": "PostCollectionFields"
							}
						}]
					}
				}, {
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "pageInfo"
					},
					"selectionSet": {
						"kind": "SelectionSet",
						"selections": [{
							"kind": "FragmentSpread",
							"name": {
								"kind": "Name",
								"value": "PageInfoFields"
							}
						}]
					}
				}]
			}
		}
	]
};
const GetPostDraftDocument = {
	"kind": "Document",
	"definitions": [
		{
			"kind": "OperationDefinition",
			"operation": "query",
			"name": {
				"kind": "Name",
				"value": "GetPostDraft"
			},
			"variableDefinitions": [{
				"kind": "VariableDefinition",
				"variable": {
					"kind": "Variable",
					"name": {
						"kind": "Name",
						"value": "id"
					}
				},
				"type": {
					"kind": "NonNullType",
					"type": {
						"kind": "NamedType",
						"name": {
							"kind": "Name",
							"value": "ID"
						}
					}
				}
			}],
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "getPostDraft"
					},
					"arguments": [{
						"kind": "Argument",
						"name": {
							"kind": "Name",
							"value": "id"
						},
						"value": {
							"kind": "Variable",
							"name": {
								"kind": "Name",
								"value": "id"
							}
						}
					}],
					"selectionSet": {
						"kind": "SelectionSet",
						"selections": [{
							"kind": "FragmentSpread",
							"name": {
								"kind": "Name",
								"value": "PostDraftFields"
							}
						}]
					}
				}]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "AspectRatioFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "AspectRatio"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "numerator"
					}
				}, {
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "denominator"
					}
				}]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "MediaFileMetadataFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "MediaFileMetadata"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "mediaId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profile"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "contentType"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "url"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "MediaMetadataFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "MediaMetadata"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "accountID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "aspectRatio"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "AspectRatioFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "blurHash"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "durationMs"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "files"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "MediaFileMetadataFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "status"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "type"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostVisibilityFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PostVisibility"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "policy"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileTags"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "pushPolicy"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostOptionsFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PostOptions"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "commentPolicy"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "copyPolicy"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "reactionPolicy"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postVisibility"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostVisibilityFields"
								}
							}]
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "LinkPreviewFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "LinkPreview"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "Url"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "canonicalUrl"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "resourceType"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "summary"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "thumbnailUrl"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "title"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "ProfileReferenceFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "Profile"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "username"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "displayName"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileEmoji"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileMediaId"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostReferenceFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "Post"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "authorID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "content"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "createdAt"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "parentPostId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "commentCount"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostCollectionReferenceFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PostCollection"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "authorID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "coverMediaID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "createdAt"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "description"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "followLevel"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postCount"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "title"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "updatedAt"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "AttachmentIDFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "AttachmentID"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "type"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "embeddedCollectionId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "embeddedPostId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "embeddedProfileId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "linkUrl"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "mediaId"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "AttachmentFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "Attachment"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "type"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "linkPreview"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "LinkPreviewFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "media"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "MediaMetadataFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "embeddedProfile"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "ProfileReferenceFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "embeddedPost"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostReferenceFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "embeddedCollection"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostCollectionReferenceFields"
								}
							}]
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "MonoPostDraftFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "MonoPostDraft"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "content"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "attachmentIds"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "AttachmentIDFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "attachments"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "AttachmentFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postCollectionIds"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postCollections"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostCollectionReferenceFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postOptions"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostOptionsFields"
								}
							}]
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostDraftFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PostDraft"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "createdAt"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "scheduledAt"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "updatedAt"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postRequests"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "MonoPostDraftFields"
								}
							}]
						}
					}
				]
			}
		}
	]
};
const GetPostDraftsDocument = {
	"kind": "Document",
	"definitions": [
		{
			"kind": "OperationDefinition",
			"operation": "query",
			"name": {
				"kind": "Name",
				"value": "GetPostDrafts"
			},
			"variableDefinitions": [
				{
					"kind": "VariableDefinition",
					"variable": {
						"kind": "Variable",
						"name": {
							"kind": "Name",
							"value": "cursor"
						}
					},
					"type": {
						"kind": "NamedType",
						"name": {
							"kind": "Name",
							"value": "String"
						}
					}
				},
				{
					"kind": "VariableDefinition",
					"variable": {
						"kind": "Variable",
						"name": {
							"kind": "Name",
							"value": "filter"
						}
					},
					"type": {
						"kind": "NamedType",
						"name": {
							"kind": "Name",
							"value": "PostDraftFilterInput"
						}
					}
				},
				{
					"kind": "VariableDefinition",
					"variable": {
						"kind": "Variable",
						"name": {
							"kind": "Name",
							"value": "limit"
						}
					},
					"type": {
						"kind": "NamedType",
						"name": {
							"kind": "Name",
							"value": "Int"
						}
					},
					"defaultValue": {
						"kind": "IntValue",
						"value": "20"
					}
				}
			],
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "getPostDrafts"
					},
					"arguments": [
						{
							"kind": "Argument",
							"name": {
								"kind": "Name",
								"value": "cursor"
							},
							"value": {
								"kind": "Variable",
								"name": {
									"kind": "Name",
									"value": "cursor"
								}
							}
						},
						{
							"kind": "Argument",
							"name": {
								"kind": "Name",
								"value": "filter"
							},
							"value": {
								"kind": "Variable",
								"name": {
									"kind": "Name",
									"value": "filter"
								}
							}
						},
						{
							"kind": "Argument",
							"name": {
								"kind": "Name",
								"value": "limit"
							},
							"value": {
								"kind": "Variable",
								"name": {
									"kind": "Name",
									"value": "limit"
								}
							}
						}
					],
					"selectionSet": {
						"kind": "SelectionSet",
						"selections": [{
							"kind": "FragmentSpread",
							"name": {
								"kind": "Name",
								"value": "PostDraftConnectionFields"
							}
						}]
					}
				}]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PageInfoFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PageInfo"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "endCursor"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "hasNextPage"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "totalCount"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "AspectRatioFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "AspectRatio"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "numerator"
					}
				}, {
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "denominator"
					}
				}]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "MediaFileMetadataFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "MediaFileMetadata"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "mediaId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profile"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "contentType"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "url"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "MediaMetadataFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "MediaMetadata"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "accountID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "aspectRatio"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "AspectRatioFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "blurHash"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "durationMs"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "files"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "MediaFileMetadataFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "status"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "type"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostVisibilityFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PostVisibility"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "policy"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileTags"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "pushPolicy"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostOptionsFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PostOptions"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "commentPolicy"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "copyPolicy"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "reactionPolicy"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postVisibility"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostVisibilityFields"
								}
							}]
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "LinkPreviewFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "LinkPreview"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "Url"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "canonicalUrl"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "resourceType"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "summary"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "thumbnailUrl"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "title"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "ProfileReferenceFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "Profile"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "username"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "displayName"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileEmoji"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileMediaId"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostReferenceFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "Post"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "authorID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "content"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "createdAt"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "parentPostId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "commentCount"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostCollectionReferenceFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PostCollection"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "authorID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "coverMediaID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "createdAt"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "description"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "followLevel"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postCount"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "title"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "updatedAt"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "AttachmentIDFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "AttachmentID"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "type"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "embeddedCollectionId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "embeddedPostId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "embeddedProfileId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "linkUrl"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "mediaId"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "AttachmentFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "Attachment"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "type"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "linkPreview"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "LinkPreviewFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "media"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "MediaMetadataFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "embeddedProfile"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "ProfileReferenceFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "embeddedPost"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostReferenceFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "embeddedCollection"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostCollectionReferenceFields"
								}
							}]
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "MonoPostDraftFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "MonoPostDraft"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "content"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "attachmentIds"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "AttachmentIDFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "attachments"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "AttachmentFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postCollectionIds"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postCollections"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostCollectionReferenceFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postOptions"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostOptionsFields"
								}
							}]
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostDraftFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PostDraft"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "createdAt"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "scheduledAt"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "updatedAt"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postRequests"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "MonoPostDraftFields"
								}
							}]
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostDraftConnectionFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PostDraftConnection"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "edges"
					},
					"selectionSet": {
						"kind": "SelectionSet",
						"selections": [{
							"kind": "FragmentSpread",
							"name": {
								"kind": "Name",
								"value": "PostDraftFields"
							}
						}]
					}
				}, {
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "pageInfo"
					},
					"selectionSet": {
						"kind": "SelectionSet",
						"selections": [{
							"kind": "FragmentSpread",
							"name": {
								"kind": "Name",
								"value": "PageInfoFields"
							}
						}]
					}
				}]
			}
		}
	]
};
const GetPostDraftsCountDocument = {
	"kind": "Document",
	"definitions": [{
		"kind": "OperationDefinition",
		"operation": "query",
		"name": {
			"kind": "Name",
			"value": "GetPostDraftsCount"
		},
		"variableDefinitions": [{
			"kind": "VariableDefinition",
			"variable": {
				"kind": "Variable",
				"name": {
					"kind": "Name",
					"value": "filter"
				}
			},
			"type": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PostDraftFilterInput"
				}
			}
		}],
		"selectionSet": {
			"kind": "SelectionSet",
			"selections": [{
				"kind": "Field",
				"name": {
					"kind": "Name",
					"value": "getPostDraftsCount"
				},
				"arguments": [{
					"kind": "Argument",
					"name": {
						"kind": "Name",
						"value": "filter"
					},
					"value": {
						"kind": "Variable",
						"name": {
							"kind": "Name",
							"value": "filter"
						}
					}
				}]
			}]
		}
	}]
};
const GetPostReactionDetailsDocument = {
	"kind": "Document",
	"definitions": [
		{
			"kind": "OperationDefinition",
			"operation": "query",
			"name": {
				"kind": "Name",
				"value": "GetPostReactionDetails"
			},
			"variableDefinitions": [
				{
					"kind": "VariableDefinition",
					"variable": {
						"kind": "Variable",
						"name": {
							"kind": "Name",
							"value": "cursor"
						}
					},
					"type": {
						"kind": "NamedType",
						"name": {
							"kind": "Name",
							"value": "String"
						}
					}
				},
				{
					"kind": "VariableDefinition",
					"variable": {
						"kind": "Variable",
						"name": {
							"kind": "Name",
							"value": "limit"
						}
					},
					"type": {
						"kind": "NamedType",
						"name": {
							"kind": "Name",
							"value": "Int"
						}
					},
					"defaultValue": {
						"kind": "IntValue",
						"value": "20"
					}
				},
				{
					"kind": "VariableDefinition",
					"variable": {
						"kind": "Variable",
						"name": {
							"kind": "Name",
							"value": "postId"
						}
					},
					"type": {
						"kind": "NonNullType",
						"type": {
							"kind": "NamedType",
							"name": {
								"kind": "Name",
								"value": "ID"
							}
						}
					}
				},
				{
					"kind": "VariableDefinition",
					"variable": {
						"kind": "Variable",
						"name": {
							"kind": "Name",
							"value": "type"
						}
					},
					"type": {
						"kind": "NamedType",
						"name": {
							"kind": "Name",
							"value": "ReactionTypeInput"
						}
					}
				}
			],
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "getPostReactionDetails"
					},
					"arguments": [
						{
							"kind": "Argument",
							"name": {
								"kind": "Name",
								"value": "cursor"
							},
							"value": {
								"kind": "Variable",
								"name": {
									"kind": "Name",
									"value": "cursor"
								}
							}
						},
						{
							"kind": "Argument",
							"name": {
								"kind": "Name",
								"value": "limit"
							},
							"value": {
								"kind": "Variable",
								"name": {
									"kind": "Name",
									"value": "limit"
								}
							}
						},
						{
							"kind": "Argument",
							"name": {
								"kind": "Name",
								"value": "postId"
							},
							"value": {
								"kind": "Variable",
								"name": {
									"kind": "Name",
									"value": "postId"
								}
							}
						},
						{
							"kind": "Argument",
							"name": {
								"kind": "Name",
								"value": "type"
							},
							"value": {
								"kind": "Variable",
								"name": {
									"kind": "Name",
									"value": "type"
								}
							}
						}
					],
					"selectionSet": {
						"kind": "SelectionSet",
						"selections": [{
							"kind": "FragmentSpread",
							"name": {
								"kind": "Name",
								"value": "PostReactionDetailRecordConnectionFields"
							}
						}]
					}
				}]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PageInfoFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PageInfo"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "endCursor"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "hasNextPage"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "totalCount"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "ReactionTypeFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "ReactionType"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "emojiValue"
					}
				}, {
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "nativeValue"
					}
				}]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "ProfileReferenceFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "Profile"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "username"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "displayName"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileEmoji"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileMediaId"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "ReactionDetailRecordFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "ReactionDetailRecord"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "accountId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "createdAt"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profile"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "ProfileReferenceFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "type"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "ReactionTypeFields"
								}
							}]
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostReactionDetailRecordConnectionFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PostReactionDetailRecordConnection"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "pageInfo"
					},
					"selectionSet": {
						"kind": "SelectionSet",
						"selections": [{
							"kind": "FragmentSpread",
							"name": {
								"kind": "Name",
								"value": "PageInfoFields"
							}
						}]
					}
				}, {
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "reactionRecords"
					},
					"selectionSet": {
						"kind": "SelectionSet",
						"selections": [{
							"kind": "FragmentSpread",
							"name": {
								"kind": "Name",
								"value": "ReactionDetailRecordFields"
							}
						}]
					}
				}]
			}
		}
	]
};
const GetPostReactionsDocument = {
	"kind": "Document",
	"definitions": [
		{
			"kind": "OperationDefinition",
			"operation": "query",
			"name": {
				"kind": "Name",
				"value": "GetPostReactions"
			},
			"variableDefinitions": [{
				"kind": "VariableDefinition",
				"variable": {
					"kind": "Variable",
					"name": {
						"kind": "Name",
						"value": "first"
					}
				},
				"type": {
					"kind": "NamedType",
					"name": {
						"kind": "Name",
						"value": "Int"
					}
				}
			}, {
				"kind": "VariableDefinition",
				"variable": {
					"kind": "Variable",
					"name": {
						"kind": "Name",
						"value": "postId"
					}
				},
				"type": {
					"kind": "NonNullType",
					"type": {
						"kind": "NamedType",
						"name": {
							"kind": "Name",
							"value": "ID"
						}
					}
				}
			}],
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "getPostReactions"
					},
					"arguments": [{
						"kind": "Argument",
						"name": {
							"kind": "Name",
							"value": "first"
						},
						"value": {
							"kind": "Variable",
							"name": {
								"kind": "Name",
								"value": "first"
							}
						}
					}, {
						"kind": "Argument",
						"name": {
							"kind": "Name",
							"value": "postId"
						},
						"value": {
							"kind": "Variable",
							"name": {
								"kind": "Name",
								"value": "postId"
							}
						}
					}],
					"selectionSet": {
						"kind": "SelectionSet",
						"selections": [{
							"kind": "FragmentSpread",
							"name": {
								"kind": "Name",
								"value": "PostReactionsConnectionFields"
							}
						}]
					}
				}]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "ReactionTypeFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "ReactionType"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "emojiValue"
					}
				}, {
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "nativeValue"
					}
				}]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "ReactionSummaryFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "ReactionSummary"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "count"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "isReactedByViewer"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "type"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "ReactionTypeFields"
								}
							}]
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostReactionsConnectionFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PostReactionsConnection"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "queryLimit"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "remainingCount"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "viewerId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "reactions"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "ReactionSummaryFields"
								}
							}]
						}
					}
				]
			}
		}
	]
};
const GetProfileTagByIdDocument = {
	"kind": "Document",
	"definitions": [
		{
			"kind": "OperationDefinition",
			"operation": "query",
			"name": {
				"kind": "Name",
				"value": "GetProfileTagById"
			},
			"variableDefinitions": [{
				"kind": "VariableDefinition",
				"variable": {
					"kind": "Variable",
					"name": {
						"kind": "Name",
						"value": "id"
					}
				},
				"type": {
					"kind": "NonNullType",
					"type": {
						"kind": "NamedType",
						"name": {
							"kind": "Name",
							"value": "ID"
						}
					}
				}
			}],
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "getProfileTagById"
					},
					"arguments": [{
						"kind": "Argument",
						"name": {
							"kind": "Name",
							"value": "id"
						},
						"value": {
							"kind": "Variable",
							"name": {
								"kind": "Name",
								"value": "id"
							}
						}
					}],
					"selectionSet": {
						"kind": "SelectionSet",
						"selections": [{
							"kind": "FragmentSpread",
							"name": {
								"kind": "Name",
								"value": "ProfileTagFields"
							}
						}]
					}
				}]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "ProfileReferenceFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "Profile"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "username"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "displayName"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileEmoji"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileMediaId"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "ProfileTagFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "ProfileTag"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "name"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "memberCount"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "AuthorID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "Author"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "ProfileReferenceFields"
								}
							}]
						}
					}
				]
			}
		}
	]
};
const GetProfileTagProfilesDocument = {
	"kind": "Document",
	"definitions": [
		{
			"kind": "OperationDefinition",
			"operation": "query",
			"name": {
				"kind": "Name",
				"value": "GetProfileTagProfiles"
			},
			"variableDefinitions": [
				{
					"kind": "VariableDefinition",
					"variable": {
						"kind": "Variable",
						"name": {
							"kind": "Name",
							"value": "cursor"
						}
					},
					"type": {
						"kind": "NamedType",
						"name": {
							"kind": "Name",
							"value": "String"
						}
					}
				},
				{
					"kind": "VariableDefinition",
					"variable": {
						"kind": "Variable",
						"name": {
							"kind": "Name",
							"value": "limit"
						}
					},
					"type": {
						"kind": "NamedType",
						"name": {
							"kind": "Name",
							"value": "Int"
						}
					}
				},
				{
					"kind": "VariableDefinition",
					"variable": {
						"kind": "Variable",
						"name": {
							"kind": "Name",
							"value": "tagId"
						}
					},
					"type": {
						"kind": "NonNullType",
						"type": {
							"kind": "NamedType",
							"name": {
								"kind": "Name",
								"value": "ID"
							}
						}
					}
				}
			],
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "getProfileTagProfiles"
					},
					"arguments": [
						{
							"kind": "Argument",
							"name": {
								"kind": "Name",
								"value": "cursor"
							},
							"value": {
								"kind": "Variable",
								"name": {
									"kind": "Name",
									"value": "cursor"
								}
							}
						},
						{
							"kind": "Argument",
							"name": {
								"kind": "Name",
								"value": "limit"
							},
							"value": {
								"kind": "Variable",
								"name": {
									"kind": "Name",
									"value": "limit"
								}
							}
						},
						{
							"kind": "Argument",
							"name": {
								"kind": "Name",
								"value": "tagId"
							},
							"value": {
								"kind": "Variable",
								"name": {
									"kind": "Name",
									"value": "tagId"
								}
							}
						}
					],
					"selectionSet": {
						"kind": "SelectionSet",
						"selections": [{
							"kind": "FragmentSpread",
							"name": {
								"kind": "Name",
								"value": "ProfileConnectionFields"
							}
						}]
					}
				}]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PageInfoFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PageInfo"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "endCursor"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "hasNextPage"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "totalCount"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "AspectRatioFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "AspectRatio"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "numerator"
					}
				}, {
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "denominator"
					}
				}]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "MediaFileMetadataFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "MediaFileMetadata"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "mediaId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profile"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "contentType"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "url"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "MediaMetadataFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "MediaMetadata"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "accountID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "aspectRatio"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "AspectRatioFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "blurHash"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "durationMs"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "files"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "MediaFileMetadataFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "status"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "type"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "BlockStatusInfoFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "BlockStatusInfo"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "blockStatus"
					}
				}, {
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "isBlocked"
					}
				}]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "ProfileFollowStatusFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "ProfileFollowStatus"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "followingLevel"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "isFollowedBy"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "isFollowing"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "ProfileReferenceFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "Profile"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "username"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "displayName"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileEmoji"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileMediaId"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostCollectionReferenceFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PostCollection"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "authorID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "coverMediaID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "createdAt"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "description"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "followLevel"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postCount"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "title"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "updatedAt"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "ProfileTagFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "ProfileTag"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "name"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "memberCount"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "AuthorID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "Author"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "ProfileReferenceFields"
								}
							}]
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "ProfileFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "Profile"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "username"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "displayName"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "bio"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "joinedAt"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "followerCount"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "followingCount"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "preferInteractionType"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileEmoji"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileMediaId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "viewerId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "blockingStatus"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "BlockStatusInfoFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "pinnedPostCollectionId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "pinnedPostCollection"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostCollectionReferenceFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileFollowStatus"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "ProfileFollowStatusFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileMedia"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "MediaMetadataFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "tags"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "ProfileTagFields"
								}
							}]
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "ProfileConnectionFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "ProfileConnection"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "edges"
					},
					"selectionSet": {
						"kind": "SelectionSet",
						"selections": [{
							"kind": "FragmentSpread",
							"name": {
								"kind": "Name",
								"value": "ProfileFields"
							}
						}]
					}
				}, {
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "pageInfo"
					},
					"selectionSet": {
						"kind": "SelectionSet",
						"selections": [{
							"kind": "FragmentSpread",
							"name": {
								"kind": "Name",
								"value": "PageInfoFields"
							}
						}]
					}
				}]
			}
		}
	]
};
const GetReactedPostsDocument = {
	"kind": "Document",
	"definitions": [
		{
			"kind": "OperationDefinition",
			"operation": "query",
			"name": {
				"kind": "Name",
				"value": "GetReactedPosts"
			},
			"variableDefinitions": [
				{
					"kind": "VariableDefinition",
					"variable": {
						"kind": "Variable",
						"name": {
							"kind": "Name",
							"value": "cursor"
						}
					},
					"type": {
						"kind": "NamedType",
						"name": {
							"kind": "Name",
							"value": "String"
						}
					}
				},
				{
					"kind": "VariableDefinition",
					"variable": {
						"kind": "Variable",
						"name": {
							"kind": "Name",
							"value": "limit"
						}
					},
					"type": {
						"kind": "NamedType",
						"name": {
							"kind": "Name",
							"value": "Int"
						}
					},
					"defaultValue": {
						"kind": "IntValue",
						"value": "20"
					}
				},
				{
					"kind": "VariableDefinition",
					"variable": {
						"kind": "Variable",
						"name": {
							"kind": "Name",
							"value": "reactionType"
						}
					},
					"type": {
						"kind": "NonNullType",
						"type": {
							"kind": "NamedType",
							"name": {
								"kind": "Name",
								"value": "ReactionTypeInput"
							}
						}
					}
				}
			],
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "getReactedPosts"
					},
					"arguments": [
						{
							"kind": "Argument",
							"name": {
								"kind": "Name",
								"value": "cursor"
							},
							"value": {
								"kind": "Variable",
								"name": {
									"kind": "Name",
									"value": "cursor"
								}
							}
						},
						{
							"kind": "Argument",
							"name": {
								"kind": "Name",
								"value": "limit"
							},
							"value": {
								"kind": "Variable",
								"name": {
									"kind": "Name",
									"value": "limit"
								}
							}
						},
						{
							"kind": "Argument",
							"name": {
								"kind": "Name",
								"value": "reactionType"
							},
							"value": {
								"kind": "Variable",
								"name": {
									"kind": "Name",
									"value": "reactionType"
								}
							}
						}
					],
					"selectionSet": {
						"kind": "SelectionSet",
						"selections": [{
							"kind": "FragmentSpread",
							"name": {
								"kind": "Name",
								"value": "FeedPostConnectionFields"
							}
						}]
					}
				}]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PageInfoFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PageInfo"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "endCursor"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "hasNextPage"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "totalCount"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "AspectRatioFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "AspectRatio"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "numerator"
					}
				}, {
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "denominator"
					}
				}]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "MediaFileMetadataFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "MediaFileMetadata"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "mediaId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profile"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "contentType"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "url"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "MediaMetadataFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "MediaMetadata"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "accountID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "aspectRatio"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "AspectRatioFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "blurHash"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "durationMs"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "files"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "MediaFileMetadataFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "status"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "type"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "ReactionTypeFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "ReactionType"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "emojiValue"
					}
				}, {
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "nativeValue"
					}
				}]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "ReactionSummaryFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "ReactionSummary"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "count"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "isReactedByViewer"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "type"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "ReactionTypeFields"
								}
							}]
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostReactionsConnectionFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PostReactionsConnection"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "queryLimit"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "remainingCount"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "viewerId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "reactions"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "ReactionSummaryFields"
								}
							}]
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostOperationPermissionFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PostOperationPermission"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "canComment"
					}
				}, {
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "canReact"
					}
				}]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostVisibilityFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PostVisibility"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "policy"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileTags"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "pushPolicy"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostOptionsFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PostOptions"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "commentPolicy"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "copyPolicy"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "reactionPolicy"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postVisibility"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostVisibilityFields"
								}
							}]
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "LinkPreviewFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "LinkPreview"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "Url"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "canonicalUrl"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "resourceType"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "summary"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "thumbnailUrl"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "title"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "ProfileReferenceFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "Profile"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "username"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "displayName"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileEmoji"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileMediaId"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostReferenceFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "Post"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "authorID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "content"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "createdAt"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "parentPostId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "commentCount"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostCollectionReferenceFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PostCollection"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "authorID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "coverMediaID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "createdAt"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "description"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "followLevel"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postCount"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "title"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "updatedAt"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "AttachmentIDFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "AttachmentID"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "type"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "embeddedCollectionId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "embeddedPostId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "embeddedProfileId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "linkUrl"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "mediaId"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "AttachmentFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "Attachment"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "type"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "linkPreview"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "LinkPreviewFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "media"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "MediaMetadataFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "embeddedProfile"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "ProfileReferenceFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "embeddedPost"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostReferenceFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "embeddedCollection"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostCollectionReferenceFields"
								}
							}]
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "Post"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "authorID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "content"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "createdAt"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "parentPostId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "commentCount"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "leafAncestorIds"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "rootAncestorIds"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "author"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "ProfileReferenceFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "attachmentIds"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "AttachmentIDFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "attachments"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "AttachmentFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postCollections"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostCollectionReferenceFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postOperationPermission"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostOperationPermissionFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postOptions"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostOptionsFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "reactions"
						},
						"arguments": [{
							"kind": "Argument",
							"name": {
								"kind": "Name",
								"value": "first"
							},
							"value": {
								"kind": "IntValue",
								"value": "20"
							}
						}],
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostReactionsConnectionFields"
								}
							}]
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "FeedPostEdgeFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "FeedPostEdge"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "id"
					}
				}, {
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "post"
					},
					"selectionSet": {
						"kind": "SelectionSet",
						"selections": [{
							"kind": "FragmentSpread",
							"name": {
								"kind": "Name",
								"value": "PostFields"
							}
						}]
					}
				}]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "FeedPostConnectionFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "FeedPostConnection"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "edges"
					},
					"selectionSet": {
						"kind": "SelectionSet",
						"selections": [{
							"kind": "FragmentSpread",
							"name": {
								"kind": "Name",
								"value": "FeedPostEdgeFields"
							}
						}]
					}
				}, {
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "pageInfo"
					},
					"selectionSet": {
						"kind": "SelectionSet",
						"selections": [{
							"kind": "FragmentSpread",
							"name": {
								"kind": "Name",
								"value": "PageInfoFields"
							}
						}]
					}
				}]
			}
		}
	]
};
const GetTopicFeedPostsDocument = {
	"kind": "Document",
	"definitions": [
		{
			"kind": "OperationDefinition",
			"operation": "query",
			"name": {
				"kind": "Name",
				"value": "GetTopicFeedPosts"
			},
			"variableDefinitions": [
				{
					"kind": "VariableDefinition",
					"variable": {
						"kind": "Variable",
						"name": {
							"kind": "Name",
							"value": "cursor"
						}
					},
					"type": {
						"kind": "NamedType",
						"name": {
							"kind": "Name",
							"value": "String"
						}
					}
				},
				{
					"kind": "VariableDefinition",
					"variable": {
						"kind": "Variable",
						"name": {
							"kind": "Name",
							"value": "limit"
						}
					},
					"type": {
						"kind": "NamedType",
						"name": {
							"kind": "Name",
							"value": "Int"
						}
					},
					"defaultValue": {
						"kind": "IntValue",
						"value": "20"
					}
				},
				{
					"kind": "VariableDefinition",
					"variable": {
						"kind": "Variable",
						"name": {
							"kind": "Name",
							"value": "topicId"
						}
					},
					"type": {
						"kind": "NonNullType",
						"type": {
							"kind": "NamedType",
							"name": {
								"kind": "Name",
								"value": "ID"
							}
						}
					}
				}
			],
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "getTopicFeedPosts"
					},
					"arguments": [
						{
							"kind": "Argument",
							"name": {
								"kind": "Name",
								"value": "cursor"
							},
							"value": {
								"kind": "Variable",
								"name": {
									"kind": "Name",
									"value": "cursor"
								}
							}
						},
						{
							"kind": "Argument",
							"name": {
								"kind": "Name",
								"value": "limit"
							},
							"value": {
								"kind": "Variable",
								"name": {
									"kind": "Name",
									"value": "limit"
								}
							}
						},
						{
							"kind": "Argument",
							"name": {
								"kind": "Name",
								"value": "topicId"
							},
							"value": {
								"kind": "Variable",
								"name": {
									"kind": "Name",
									"value": "topicId"
								}
							}
						}
					],
					"selectionSet": {
						"kind": "SelectionSet",
						"selections": [{
							"kind": "FragmentSpread",
							"name": {
								"kind": "Name",
								"value": "PostConnectionFields"
							}
						}]
					}
				}]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PageInfoFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PageInfo"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "endCursor"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "hasNextPage"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "totalCount"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "AspectRatioFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "AspectRatio"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "numerator"
					}
				}, {
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "denominator"
					}
				}]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "MediaFileMetadataFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "MediaFileMetadata"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "mediaId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profile"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "contentType"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "url"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "MediaMetadataFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "MediaMetadata"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "accountID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "aspectRatio"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "AspectRatioFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "blurHash"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "durationMs"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "files"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "MediaFileMetadataFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "status"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "type"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "ReactionTypeFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "ReactionType"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "emojiValue"
					}
				}, {
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "nativeValue"
					}
				}]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "ReactionSummaryFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "ReactionSummary"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "count"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "isReactedByViewer"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "type"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "ReactionTypeFields"
								}
							}]
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostReactionsConnectionFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PostReactionsConnection"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "queryLimit"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "remainingCount"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "viewerId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "reactions"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "ReactionSummaryFields"
								}
							}]
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostOperationPermissionFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PostOperationPermission"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "canComment"
					}
				}, {
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "canReact"
					}
				}]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostVisibilityFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PostVisibility"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "policy"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileTags"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "pushPolicy"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostOptionsFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PostOptions"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "commentPolicy"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "copyPolicy"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "reactionPolicy"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postVisibility"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostVisibilityFields"
								}
							}]
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "LinkPreviewFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "LinkPreview"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "Url"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "canonicalUrl"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "resourceType"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "summary"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "thumbnailUrl"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "title"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "ProfileReferenceFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "Profile"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "username"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "displayName"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileEmoji"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileMediaId"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostReferenceFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "Post"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "authorID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "content"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "createdAt"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "parentPostId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "commentCount"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostCollectionReferenceFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PostCollection"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "authorID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "coverMediaID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "createdAt"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "description"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "followLevel"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postCount"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "title"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "updatedAt"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "AttachmentIDFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "AttachmentID"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "type"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "embeddedCollectionId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "embeddedPostId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "embeddedProfileId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "linkUrl"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "mediaId"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "AttachmentFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "Attachment"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "type"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "linkPreview"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "LinkPreviewFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "media"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "MediaMetadataFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "embeddedProfile"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "ProfileReferenceFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "embeddedPost"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostReferenceFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "embeddedCollection"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostCollectionReferenceFields"
								}
							}]
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "Post"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "authorID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "content"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "createdAt"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "parentPostId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "commentCount"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "leafAncestorIds"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "rootAncestorIds"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "author"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "ProfileReferenceFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "attachmentIds"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "AttachmentIDFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "attachments"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "AttachmentFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postCollections"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostCollectionReferenceFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postOperationPermission"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostOperationPermissionFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postOptions"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostOptionsFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "reactions"
						},
						"arguments": [{
							"kind": "Argument",
							"name": {
								"kind": "Name",
								"value": "first"
							},
							"value": {
								"kind": "IntValue",
								"value": "20"
							}
						}],
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostReactionsConnectionFields"
								}
							}]
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostConnectionFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PostConnection"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "edges"
					},
					"selectionSet": {
						"kind": "SelectionSet",
						"selections": [{
							"kind": "FragmentSpread",
							"name": {
								"kind": "Name",
								"value": "PostFields"
							}
						}]
					}
				}, {
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "pageInfo"
					},
					"selectionSet": {
						"kind": "SelectionSet",
						"selections": [{
							"kind": "FragmentSpread",
							"name": {
								"kind": "Name",
								"value": "PageInfoFields"
							}
						}]
					}
				}]
			}
		}
	]
};
const GetTopicsDocument = {
	"kind": "Document",
	"definitions": [{
		"kind": "OperationDefinition",
		"operation": "query",
		"name": {
			"kind": "Name",
			"value": "GetTopics"
		},
		"variableDefinitions": [{
			"kind": "VariableDefinition",
			"variable": {
				"kind": "Variable",
				"name": {
					"kind": "Name",
					"value": "limit"
				}
			},
			"type": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "Int"
				}
			},
			"defaultValue": {
				"kind": "IntValue",
				"value": "20"
			}
		}],
		"selectionSet": {
			"kind": "SelectionSet",
			"selections": [{
				"kind": "Field",
				"name": {
					"kind": "Name",
					"value": "getTopics"
				},
				"arguments": [{
					"kind": "Argument",
					"name": {
						"kind": "Name",
						"value": "limit"
					},
					"value": {
						"kind": "Variable",
						"name": {
							"kind": "Name",
							"value": "limit"
						}
					}
				}],
				"selectionSet": {
					"kind": "SelectionSet",
					"selections": [{
						"kind": "FragmentSpread",
						"name": {
							"kind": "Name",
							"value": "TopicFields"
						}
					}]
				}
			}]
		}
	}, {
		"kind": "FragmentDefinition",
		"name": {
			"kind": "Name",
			"value": "TopicFields"
		},
		"typeCondition": {
			"kind": "NamedType",
			"name": {
				"kind": "Name",
				"value": "Topic"
			}
		},
		"selectionSet": {
			"kind": "SelectionSet",
			"selections": [
				{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "id"
					}
				},
				{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "emoji"
					}
				},
				{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "title"
					}
				}
			]
		}
	}]
};
const GetUnreadNotificationCountDocument = {
	"kind": "Document",
	"definitions": [{
		"kind": "OperationDefinition",
		"operation": "query",
		"name": {
			"kind": "Name",
			"value": "GetUnreadNotificationCount"
		},
		"selectionSet": {
			"kind": "SelectionSet",
			"selections": [{
				"kind": "Field",
				"name": {
					"kind": "Name",
					"value": "getUnreadNotificationCount"
				}
			}]
		}
	}]
};
const GetUserPostsDocument = {
	"kind": "Document",
	"definitions": [
		{
			"kind": "OperationDefinition",
			"operation": "query",
			"name": {
				"kind": "Name",
				"value": "GetUserPosts"
			},
			"variableDefinitions": [
				{
					"kind": "VariableDefinition",
					"variable": {
						"kind": "Variable",
						"name": {
							"kind": "Name",
							"value": "accountId"
						}
					},
					"type": {
						"kind": "NonNullType",
						"type": {
							"kind": "NamedType",
							"name": {
								"kind": "Name",
								"value": "ID"
							}
						}
					}
				},
				{
					"kind": "VariableDefinition",
					"variable": {
						"kind": "Variable",
						"name": {
							"kind": "Name",
							"value": "cursor"
						}
					},
					"type": {
						"kind": "NamedType",
						"name": {
							"kind": "Name",
							"value": "String"
						}
					}
				},
				{
					"kind": "VariableDefinition",
					"variable": {
						"kind": "Variable",
						"name": {
							"kind": "Name",
							"value": "limit"
						}
					},
					"type": {
						"kind": "NamedType",
						"name": {
							"kind": "Name",
							"value": "Int"
						}
					},
					"defaultValue": {
						"kind": "IntValue",
						"value": "20"
					}
				},
				{
					"kind": "VariableDefinition",
					"variable": {
						"kind": "Variable",
						"name": {
							"kind": "Name",
							"value": "postType"
						}
					},
					"type": {
						"kind": "NamedType",
						"name": {
							"kind": "Name",
							"value": "PostType"
						}
					},
					"defaultValue": {
						"kind": "EnumValue",
						"value": "POST"
					}
				}
			],
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "getUserPosts"
					},
					"arguments": [
						{
							"kind": "Argument",
							"name": {
								"kind": "Name",
								"value": "accountId"
							},
							"value": {
								"kind": "Variable",
								"name": {
									"kind": "Name",
									"value": "accountId"
								}
							}
						},
						{
							"kind": "Argument",
							"name": {
								"kind": "Name",
								"value": "cursor"
							},
							"value": {
								"kind": "Variable",
								"name": {
									"kind": "Name",
									"value": "cursor"
								}
							}
						},
						{
							"kind": "Argument",
							"name": {
								"kind": "Name",
								"value": "limit"
							},
							"value": {
								"kind": "Variable",
								"name": {
									"kind": "Name",
									"value": "limit"
								}
							}
						},
						{
							"kind": "Argument",
							"name": {
								"kind": "Name",
								"value": "postType"
							},
							"value": {
								"kind": "Variable",
								"name": {
									"kind": "Name",
									"value": "postType"
								}
							}
						}
					],
					"selectionSet": {
						"kind": "SelectionSet",
						"selections": [{
							"kind": "FragmentSpread",
							"name": {
								"kind": "Name",
								"value": "PostConnectionFields"
							}
						}]
					}
				}]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PageInfoFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PageInfo"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "endCursor"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "hasNextPage"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "totalCount"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "AspectRatioFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "AspectRatio"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "numerator"
					}
				}, {
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "denominator"
					}
				}]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "MediaFileMetadataFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "MediaFileMetadata"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "mediaId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profile"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "contentType"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "url"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "MediaMetadataFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "MediaMetadata"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "accountID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "aspectRatio"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "AspectRatioFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "blurHash"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "durationMs"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "files"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "MediaFileMetadataFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "status"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "type"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "ReactionTypeFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "ReactionType"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "emojiValue"
					}
				}, {
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "nativeValue"
					}
				}]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "ReactionSummaryFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "ReactionSummary"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "count"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "isReactedByViewer"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "type"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "ReactionTypeFields"
								}
							}]
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostReactionsConnectionFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PostReactionsConnection"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "queryLimit"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "remainingCount"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "viewerId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "reactions"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "ReactionSummaryFields"
								}
							}]
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostOperationPermissionFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PostOperationPermission"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "canComment"
					}
				}, {
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "canReact"
					}
				}]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostVisibilityFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PostVisibility"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "policy"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileTags"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "pushPolicy"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostOptionsFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PostOptions"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "commentPolicy"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "copyPolicy"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "reactionPolicy"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postVisibility"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostVisibilityFields"
								}
							}]
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "LinkPreviewFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "LinkPreview"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "Url"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "canonicalUrl"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "resourceType"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "summary"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "thumbnailUrl"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "title"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "ProfileReferenceFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "Profile"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "username"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "displayName"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileEmoji"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileMediaId"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostReferenceFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "Post"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "authorID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "content"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "createdAt"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "parentPostId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "commentCount"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostCollectionReferenceFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PostCollection"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "authorID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "coverMediaID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "createdAt"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "description"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "followLevel"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postCount"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "title"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "updatedAt"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "AttachmentIDFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "AttachmentID"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "type"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "embeddedCollectionId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "embeddedPostId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "embeddedProfileId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "linkUrl"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "mediaId"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "AttachmentFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "Attachment"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "type"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "linkPreview"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "LinkPreviewFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "media"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "MediaMetadataFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "embeddedProfile"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "ProfileReferenceFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "embeddedPost"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostReferenceFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "embeddedCollection"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostCollectionReferenceFields"
								}
							}]
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "Post"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "authorID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "content"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "createdAt"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "parentPostId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "commentCount"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "leafAncestorIds"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "rootAncestorIds"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "author"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "ProfileReferenceFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "attachmentIds"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "AttachmentIDFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "attachments"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "AttachmentFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postCollections"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostCollectionReferenceFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postOperationPermission"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostOperationPermissionFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postOptions"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostOptionsFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "reactions"
						},
						"arguments": [{
							"kind": "Argument",
							"name": {
								"kind": "Name",
								"value": "first"
							},
							"value": {
								"kind": "IntValue",
								"value": "20"
							}
						}],
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostReactionsConnectionFields"
								}
							}]
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostConnectionFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PostConnection"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "edges"
					},
					"selectionSet": {
						"kind": "SelectionSet",
						"selections": [{
							"kind": "FragmentSpread",
							"name": {
								"kind": "Name",
								"value": "PostFields"
							}
						}]
					}
				}, {
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "pageInfo"
					},
					"selectionSet": {
						"kind": "SelectionSet",
						"selections": [{
							"kind": "FragmentSpread",
							"name": {
								"kind": "Name",
								"value": "PageInfoFields"
							}
						}]
					}
				}]
			}
		}
	]
};
const GetUserReactionsDocument = {
	"kind": "Document",
	"definitions": [
		{
			"kind": "OperationDefinition",
			"operation": "query",
			"name": {
				"kind": "Name",
				"value": "GetUserReactions"
			},
			"variableDefinitions": [{
				"kind": "VariableDefinition",
				"variable": {
					"kind": "Variable",
					"name": {
						"kind": "Name",
						"value": "cursor"
					}
				},
				"type": {
					"kind": "NamedType",
					"name": {
						"kind": "Name",
						"value": "String"
					}
				}
			}, {
				"kind": "VariableDefinition",
				"variable": {
					"kind": "Variable",
					"name": {
						"kind": "Name",
						"value": "limit"
					}
				},
				"type": {
					"kind": "NamedType",
					"name": {
						"kind": "Name",
						"value": "Int"
					}
				},
				"defaultValue": {
					"kind": "IntValue",
					"value": "20"
				}
			}],
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "getUserReactions"
					},
					"arguments": [{
						"kind": "Argument",
						"name": {
							"kind": "Name",
							"value": "cursor"
						},
						"value": {
							"kind": "Variable",
							"name": {
								"kind": "Name",
								"value": "cursor"
							}
						}
					}, {
						"kind": "Argument",
						"name": {
							"kind": "Name",
							"value": "limit"
						},
						"value": {
							"kind": "Variable",
							"name": {
								"kind": "Name",
								"value": "limit"
							}
						}
					}],
					"selectionSet": {
						"kind": "SelectionSet",
						"selections": [{
							"kind": "FragmentSpread",
							"name": {
								"kind": "Name",
								"value": "UserReactionsStatisticsConnectionFields"
							}
						}]
					}
				}]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PageInfoFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PageInfo"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "endCursor"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "hasNextPage"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "totalCount"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "ReactionTypeFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "ReactionType"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "emojiValue"
					}
				}, {
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "nativeValue"
					}
				}]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "UserReactionStatisticsFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "UserReactionStatistics"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "count"
					}
				}, {
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "type"
					},
					"selectionSet": {
						"kind": "SelectionSet",
						"selections": [{
							"kind": "FragmentSpread",
							"name": {
								"kind": "Name",
								"value": "ReactionTypeFields"
							}
						}]
					}
				}]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "UserReactionsStatisticsConnectionFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "UserReactionsStatisticsConnection"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "pageInfo"
					},
					"selectionSet": {
						"kind": "SelectionSet",
						"selections": [{
							"kind": "FragmentSpread",
							"name": {
								"kind": "Name",
								"value": "PageInfoFields"
							}
						}]
					}
				}, {
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "reactions"
					},
					"selectionSet": {
						"kind": "SelectionSet",
						"selections": [{
							"kind": "FragmentSpread",
							"name": {
								"kind": "Name",
								"value": "UserReactionStatisticsFields"
							}
						}]
					}
				}]
			}
		}
	]
};
const ListProfileTagsDocument = {
	"kind": "Document",
	"definitions": [
		{
			"kind": "OperationDefinition",
			"operation": "query",
			"name": {
				"kind": "Name",
				"value": "ListProfileTags"
			},
			"variableDefinitions": [{
				"kind": "VariableDefinition",
				"variable": {
					"kind": "Variable",
					"name": {
						"kind": "Name",
						"value": "cursor"
					}
				},
				"type": {
					"kind": "NamedType",
					"name": {
						"kind": "Name",
						"value": "String"
					}
				}
			}, {
				"kind": "VariableDefinition",
				"variable": {
					"kind": "Variable",
					"name": {
						"kind": "Name",
						"value": "limit"
					}
				},
				"type": {
					"kind": "NamedType",
					"name": {
						"kind": "Name",
						"value": "Int"
					}
				}
			}],
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "listProfileTags"
					},
					"arguments": [{
						"kind": "Argument",
						"name": {
							"kind": "Name",
							"value": "cursor"
						},
						"value": {
							"kind": "Variable",
							"name": {
								"kind": "Name",
								"value": "cursor"
							}
						}
					}, {
						"kind": "Argument",
						"name": {
							"kind": "Name",
							"value": "limit"
						},
						"value": {
							"kind": "Variable",
							"name": {
								"kind": "Name",
								"value": "limit"
							}
						}
					}],
					"selectionSet": {
						"kind": "SelectionSet",
						"selections": [{
							"kind": "FragmentSpread",
							"name": {
								"kind": "Name",
								"value": "ProfileTagConnectionFields"
							}
						}]
					}
				}]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PageInfoFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PageInfo"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "endCursor"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "hasNextPage"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "totalCount"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "ProfileReferenceFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "Profile"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "username"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "displayName"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileEmoji"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileMediaId"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "ProfileTagFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "ProfileTag"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "name"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "memberCount"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "AuthorID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "Author"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "ProfileReferenceFields"
								}
							}]
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "ProfileTagConnectionFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "ProfileTagConnection"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "edges"
					},
					"selectionSet": {
						"kind": "SelectionSet",
						"selections": [{
							"kind": "FragmentSpread",
							"name": {
								"kind": "Name",
								"value": "ProfileTagFields"
							}
						}]
					}
				}, {
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "pageInfo"
					},
					"selectionSet": {
						"kind": "SelectionSet",
						"selections": [{
							"kind": "FragmentSpread",
							"name": {
								"kind": "Name",
								"value": "PageInfoFields"
							}
						}]
					}
				}]
			}
		}
	]
};
const NotificationReceivedDocument = {
	"kind": "Document",
	"definitions": [
		{
			"kind": "OperationDefinition",
			"operation": "subscription",
			"name": {
				"kind": "Name",
				"value": "NotificationReceived"
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "notificationReceived"
					},
					"selectionSet": {
						"kind": "SelectionSet",
						"selections": [{
							"kind": "FragmentSpread",
							"name": {
								"kind": "Name",
								"value": "NotificationFields"
							}
						}]
					}
				}]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "ReactionTypeFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "ReactionType"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "emojiValue"
					}
				}, {
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "nativeValue"
					}
				}]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "ProfileReferenceFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "Profile"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "username"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "displayName"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileEmoji"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileMediaId"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostReferenceFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "Post"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "authorID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "content"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "createdAt"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "parentPostId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "commentCount"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostCollectionReferenceFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PostCollection"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "authorID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "coverMediaID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "createdAt"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "description"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "followLevel"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postCount"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "title"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "updatedAt"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "NotificationFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "Notification"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "createdAt"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "isRead"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "message"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "type"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "relatedPostID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "relatedPostCollectionID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "sourceProfileID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "targetProfileID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "reaction"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "ReactionTypeFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "relatedPost"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostReferenceFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "relatedPostCollection"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostCollectionReferenceFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "sourceProfile"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "ProfileReferenceFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "targetProfile"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "ProfileReferenceFields"
								}
							}]
						}
					}
				]
			}
		}
	]
};
const PostCreatedByAuthorDocument = {
	"kind": "Document",
	"definitions": [
		{
			"kind": "OperationDefinition",
			"operation": "subscription",
			"name": {
				"kind": "Name",
				"value": "PostCreatedByAuthor"
			},
			"variableDefinitions": [{
				"kind": "VariableDefinition",
				"variable": {
					"kind": "Variable",
					"name": {
						"kind": "Name",
						"value": "authorId"
					}
				},
				"type": {
					"kind": "NonNullType",
					"type": {
						"kind": "NamedType",
						"name": {
							"kind": "Name",
							"value": "ID"
						}
					}
				}
			}, {
				"kind": "VariableDefinition",
				"variable": {
					"kind": "Variable",
					"name": {
						"kind": "Name",
						"value": "postType"
					}
				},
				"type": {
					"kind": "NamedType",
					"name": {
						"kind": "Name",
						"value": "PostType"
					}
				}
			}],
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "postCreatedByAuthor"
					},
					"arguments": [{
						"kind": "Argument",
						"name": {
							"kind": "Name",
							"value": "authorId"
						},
						"value": {
							"kind": "Variable",
							"name": {
								"kind": "Name",
								"value": "authorId"
							}
						}
					}, {
						"kind": "Argument",
						"name": {
							"kind": "Name",
							"value": "postType"
						},
						"value": {
							"kind": "Variable",
							"name": {
								"kind": "Name",
								"value": "postType"
							}
						}
					}],
					"selectionSet": {
						"kind": "SelectionSet",
						"selections": [{
							"kind": "FragmentSpread",
							"name": {
								"kind": "Name",
								"value": "PostFields"
							}
						}]
					}
				}]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "AspectRatioFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "AspectRatio"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "numerator"
					}
				}, {
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "denominator"
					}
				}]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "MediaFileMetadataFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "MediaFileMetadata"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "mediaId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profile"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "contentType"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "url"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "MediaMetadataFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "MediaMetadata"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "accountID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "aspectRatio"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "AspectRatioFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "blurHash"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "durationMs"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "files"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "MediaFileMetadataFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "status"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "type"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "ReactionTypeFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "ReactionType"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "emojiValue"
					}
				}, {
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "nativeValue"
					}
				}]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "ReactionSummaryFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "ReactionSummary"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "count"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "isReactedByViewer"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "type"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "ReactionTypeFields"
								}
							}]
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostReactionsConnectionFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PostReactionsConnection"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "queryLimit"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "remainingCount"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "viewerId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "reactions"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "ReactionSummaryFields"
								}
							}]
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostOperationPermissionFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PostOperationPermission"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "canComment"
					}
				}, {
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "canReact"
					}
				}]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostVisibilityFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PostVisibility"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "policy"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileTags"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "pushPolicy"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostOptionsFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PostOptions"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "commentPolicy"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "copyPolicy"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "reactionPolicy"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postVisibility"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostVisibilityFields"
								}
							}]
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "LinkPreviewFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "LinkPreview"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "Url"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "canonicalUrl"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "resourceType"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "summary"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "thumbnailUrl"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "title"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "ProfileReferenceFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "Profile"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "username"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "displayName"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileEmoji"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileMediaId"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostReferenceFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "Post"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "authorID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "content"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "createdAt"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "parentPostId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "commentCount"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostCollectionReferenceFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PostCollection"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "authorID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "coverMediaID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "createdAt"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "description"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "followLevel"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postCount"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "title"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "updatedAt"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "AttachmentIDFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "AttachmentID"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "type"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "embeddedCollectionId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "embeddedPostId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "embeddedProfileId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "linkUrl"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "mediaId"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "AttachmentFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "Attachment"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "type"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "linkPreview"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "LinkPreviewFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "media"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "MediaMetadataFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "embeddedProfile"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "ProfileReferenceFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "embeddedPost"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostReferenceFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "embeddedCollection"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostCollectionReferenceFields"
								}
							}]
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "Post"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "authorID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "content"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "createdAt"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "parentPostId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "commentCount"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "leafAncestorIds"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "rootAncestorIds"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "author"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "ProfileReferenceFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "attachmentIds"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "AttachmentIDFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "attachments"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "AttachmentFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postCollections"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostCollectionReferenceFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postOperationPermission"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostOperationPermissionFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postOptions"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostOptionsFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "reactions"
						},
						"arguments": [{
							"kind": "Argument",
							"name": {
								"kind": "Name",
								"value": "first"
							},
							"value": {
								"kind": "IntValue",
								"value": "20"
							}
						}],
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostReactionsConnectionFields"
								}
							}]
						}
					}
				]
			}
		}
	]
};
const PostCreatedInCollectionDocument = {
	"kind": "Document",
	"definitions": [
		{
			"kind": "OperationDefinition",
			"operation": "subscription",
			"name": {
				"kind": "Name",
				"value": "PostCreatedInCollection"
			},
			"variableDefinitions": [{
				"kind": "VariableDefinition",
				"variable": {
					"kind": "Variable",
					"name": {
						"kind": "Name",
						"value": "postCollectionID"
					}
				},
				"type": {
					"kind": "NonNullType",
					"type": {
						"kind": "NamedType",
						"name": {
							"kind": "Name",
							"value": "ID"
						}
					}
				}
			}],
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "postCreatedInCollection"
					},
					"arguments": [{
						"kind": "Argument",
						"name": {
							"kind": "Name",
							"value": "postCollectionID"
						},
						"value": {
							"kind": "Variable",
							"name": {
								"kind": "Name",
								"value": "postCollectionID"
							}
						}
					}],
					"selectionSet": {
						"kind": "SelectionSet",
						"selections": [{
							"kind": "FragmentSpread",
							"name": {
								"kind": "Name",
								"value": "PostFields"
							}
						}]
					}
				}]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "AspectRatioFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "AspectRatio"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "numerator"
					}
				}, {
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "denominator"
					}
				}]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "MediaFileMetadataFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "MediaFileMetadata"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "mediaId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profile"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "contentType"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "url"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "MediaMetadataFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "MediaMetadata"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "accountID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "aspectRatio"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "AspectRatioFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "blurHash"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "durationMs"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "files"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "MediaFileMetadataFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "status"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "type"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "ReactionTypeFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "ReactionType"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "emojiValue"
					}
				}, {
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "nativeValue"
					}
				}]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "ReactionSummaryFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "ReactionSummary"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "count"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "isReactedByViewer"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "type"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "ReactionTypeFields"
								}
							}]
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostReactionsConnectionFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PostReactionsConnection"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "queryLimit"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "remainingCount"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "viewerId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "reactions"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "ReactionSummaryFields"
								}
							}]
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostOperationPermissionFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PostOperationPermission"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "canComment"
					}
				}, {
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "canReact"
					}
				}]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostVisibilityFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PostVisibility"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "policy"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileTags"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "pushPolicy"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostOptionsFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PostOptions"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "commentPolicy"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "copyPolicy"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "reactionPolicy"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postVisibility"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostVisibilityFields"
								}
							}]
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "LinkPreviewFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "LinkPreview"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "Url"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "canonicalUrl"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "resourceType"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "summary"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "thumbnailUrl"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "title"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "ProfileReferenceFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "Profile"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "username"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "displayName"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileEmoji"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileMediaId"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostReferenceFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "Post"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "authorID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "content"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "createdAt"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "parentPostId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "commentCount"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostCollectionReferenceFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PostCollection"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "authorID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "coverMediaID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "createdAt"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "description"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "followLevel"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postCount"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "title"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "updatedAt"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "AttachmentIDFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "AttachmentID"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "type"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "embeddedCollectionId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "embeddedPostId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "embeddedProfileId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "linkUrl"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "mediaId"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "AttachmentFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "Attachment"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "type"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "linkPreview"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "LinkPreviewFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "media"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "MediaMetadataFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "embeddedProfile"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "ProfileReferenceFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "embeddedPost"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostReferenceFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "embeddedCollection"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostCollectionReferenceFields"
								}
							}]
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "Post"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "authorID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "content"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "createdAt"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "parentPostId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "commentCount"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "leafAncestorIds"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "rootAncestorIds"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "author"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "ProfileReferenceFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "attachmentIds"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "AttachmentIDFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "attachments"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "AttachmentFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postCollections"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostCollectionReferenceFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postOperationPermission"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostOperationPermissionFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postOptions"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostOptionsFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "reactions"
						},
						"arguments": [{
							"kind": "Argument",
							"name": {
								"kind": "Name",
								"value": "first"
							},
							"value": {
								"kind": "IntValue",
								"value": "20"
							}
						}],
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostReactionsConnectionFields"
								}
							}]
						}
					}
				]
			}
		}
	]
};
const PostDeletedDocument = {
	"kind": "Document",
	"definitions": [{
		"kind": "OperationDefinition",
		"operation": "subscription",
		"name": {
			"kind": "Name",
			"value": "PostDeleted"
		},
		"variableDefinitions": [{
			"kind": "VariableDefinition",
			"variable": {
				"kind": "Variable",
				"name": {
					"kind": "Name",
					"value": "postId"
				}
			},
			"type": {
				"kind": "NonNullType",
				"type": {
					"kind": "NamedType",
					"name": {
						"kind": "Name",
						"value": "ID"
					}
				}
			}
		}],
		"selectionSet": {
			"kind": "SelectionSet",
			"selections": [{
				"kind": "Field",
				"name": {
					"kind": "Name",
					"value": "postDeleted"
				},
				"arguments": [{
					"kind": "Argument",
					"name": {
						"kind": "Name",
						"value": "postId"
					},
					"value": {
						"kind": "Variable",
						"name": {
							"kind": "Name",
							"value": "postId"
						}
					}
				}]
			}]
		}
	}]
};
const PostUpdatedDocument = {
	"kind": "Document",
	"definitions": [
		{
			"kind": "OperationDefinition",
			"operation": "subscription",
			"name": {
				"kind": "Name",
				"value": "PostUpdated"
			},
			"variableDefinitions": [{
				"kind": "VariableDefinition",
				"variable": {
					"kind": "Variable",
					"name": {
						"kind": "Name",
						"value": "postId"
					}
				},
				"type": {
					"kind": "NonNullType",
					"type": {
						"kind": "NamedType",
						"name": {
							"kind": "Name",
							"value": "ID"
						}
					}
				}
			}],
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "postUpdated"
					},
					"arguments": [{
						"kind": "Argument",
						"name": {
							"kind": "Name",
							"value": "postId"
						},
						"value": {
							"kind": "Variable",
							"name": {
								"kind": "Name",
								"value": "postId"
							}
						}
					}],
					"selectionSet": {
						"kind": "SelectionSet",
						"selections": [{
							"kind": "FragmentSpread",
							"name": {
								"kind": "Name",
								"value": "PostFields"
							}
						}]
					}
				}]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "AspectRatioFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "AspectRatio"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "numerator"
					}
				}, {
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "denominator"
					}
				}]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "MediaFileMetadataFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "MediaFileMetadata"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "mediaId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profile"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "contentType"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "url"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "MediaMetadataFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "MediaMetadata"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "accountID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "aspectRatio"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "AspectRatioFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "blurHash"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "durationMs"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "files"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "MediaFileMetadataFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "status"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "type"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "ReactionTypeFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "ReactionType"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "emojiValue"
					}
				}, {
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "nativeValue"
					}
				}]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "ReactionSummaryFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "ReactionSummary"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "count"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "isReactedByViewer"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "type"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "ReactionTypeFields"
								}
							}]
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostReactionsConnectionFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PostReactionsConnection"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "queryLimit"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "remainingCount"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "viewerId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "reactions"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "ReactionSummaryFields"
								}
							}]
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostOperationPermissionFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PostOperationPermission"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "canComment"
					}
				}, {
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "canReact"
					}
				}]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostVisibilityFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PostVisibility"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "policy"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileTags"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "pushPolicy"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostOptionsFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PostOptions"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "commentPolicy"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "copyPolicy"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "reactionPolicy"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postVisibility"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostVisibilityFields"
								}
							}]
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "LinkPreviewFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "LinkPreview"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "Url"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "canonicalUrl"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "resourceType"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "summary"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "thumbnailUrl"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "title"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "ProfileReferenceFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "Profile"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "username"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "displayName"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileEmoji"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileMediaId"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostReferenceFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "Post"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "authorID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "content"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "createdAt"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "parentPostId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "commentCount"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostCollectionReferenceFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PostCollection"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "authorID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "coverMediaID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "createdAt"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "description"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "followLevel"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postCount"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "title"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "updatedAt"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "AttachmentIDFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "AttachmentID"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "type"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "embeddedCollectionId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "embeddedPostId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "embeddedProfileId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "linkUrl"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "mediaId"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "AttachmentFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "Attachment"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "type"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "linkPreview"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "LinkPreviewFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "media"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "MediaMetadataFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "embeddedProfile"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "ProfileReferenceFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "embeddedPost"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostReferenceFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "embeddedCollection"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostCollectionReferenceFields"
								}
							}]
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "Post"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "authorID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "content"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "createdAt"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "parentPostId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "commentCount"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "leafAncestorIds"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "rootAncestorIds"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "author"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "ProfileReferenceFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "attachmentIds"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "AttachmentIDFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "attachments"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "AttachmentFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postCollections"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostCollectionReferenceFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postOperationPermission"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostOperationPermissionFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postOptions"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostOptionsFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "reactions"
						},
						"arguments": [{
							"kind": "Argument",
							"name": {
								"kind": "Name",
								"value": "first"
							},
							"value": {
								"kind": "IntValue",
								"value": "20"
							}
						}],
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostReactionsConnectionFields"
								}
							}]
						}
					}
				]
			}
		}
	]
};
const ReplyCreatedUnderRootPostDocument = {
	"kind": "Document",
	"definitions": [
		{
			"kind": "OperationDefinition",
			"operation": "subscription",
			"name": {
				"kind": "Name",
				"value": "ReplyCreatedUnderRootPost"
			},
			"variableDefinitions": [{
				"kind": "VariableDefinition",
				"variable": {
					"kind": "Variable",
					"name": {
						"kind": "Name",
						"value": "rootPostId"
					}
				},
				"type": {
					"kind": "NonNullType",
					"type": {
						"kind": "NamedType",
						"name": {
							"kind": "Name",
							"value": "ID"
						}
					}
				}
			}],
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "replyCreatedUnderRootPost"
					},
					"arguments": [{
						"kind": "Argument",
						"name": {
							"kind": "Name",
							"value": "rootPostId"
						},
						"value": {
							"kind": "Variable",
							"name": {
								"kind": "Name",
								"value": "rootPostId"
							}
						}
					}],
					"selectionSet": {
						"kind": "SelectionSet",
						"selections": [{
							"kind": "FragmentSpread",
							"name": {
								"kind": "Name",
								"value": "PostFields"
							}
						}]
					}
				}]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "AspectRatioFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "AspectRatio"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "numerator"
					}
				}, {
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "denominator"
					}
				}]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "MediaFileMetadataFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "MediaFileMetadata"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "mediaId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profile"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "contentType"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "url"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "MediaMetadataFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "MediaMetadata"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "accountID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "aspectRatio"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "AspectRatioFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "blurHash"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "durationMs"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "files"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "MediaFileMetadataFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "status"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "type"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "ReactionTypeFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "ReactionType"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "emojiValue"
					}
				}, {
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "nativeValue"
					}
				}]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "ReactionSummaryFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "ReactionSummary"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "count"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "isReactedByViewer"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "type"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "ReactionTypeFields"
								}
							}]
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostReactionsConnectionFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PostReactionsConnection"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "queryLimit"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "remainingCount"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "viewerId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "reactions"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "ReactionSummaryFields"
								}
							}]
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostOperationPermissionFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PostOperationPermission"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [{
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "canComment"
					}
				}, {
					"kind": "Field",
					"name": {
						"kind": "Name",
						"value": "canReact"
					}
				}]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostVisibilityFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PostVisibility"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "policy"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileTags"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "pushPolicy"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostOptionsFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PostOptions"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "commentPolicy"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "copyPolicy"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "reactionPolicy"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postVisibility"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostVisibilityFields"
								}
							}]
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "LinkPreviewFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "LinkPreview"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "Url"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "canonicalUrl"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "resourceType"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "summary"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "thumbnailUrl"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "title"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "ProfileReferenceFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "Profile"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "username"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "displayName"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileEmoji"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "profileMediaId"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostReferenceFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "Post"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "authorID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "content"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "createdAt"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "parentPostId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "commentCount"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostCollectionReferenceFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "PostCollection"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "authorID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "coverMediaID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "createdAt"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "description"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "followLevel"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postCount"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "title"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "updatedAt"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "AttachmentIDFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "AttachmentID"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "type"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "embeddedCollectionId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "embeddedPostId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "embeddedProfileId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "linkUrl"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "mediaId"
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "AttachmentFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "Attachment"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "type"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "linkPreview"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "LinkPreviewFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "media"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "MediaMetadataFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "embeddedProfile"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "ProfileReferenceFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "embeddedPost"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostReferenceFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "embeddedCollection"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostCollectionReferenceFields"
								}
							}]
						}
					}
				]
			}
		},
		{
			"kind": "FragmentDefinition",
			"name": {
				"kind": "Name",
				"value": "PostFields"
			},
			"typeCondition": {
				"kind": "NamedType",
				"name": {
					"kind": "Name",
					"value": "Post"
				}
			},
			"selectionSet": {
				"kind": "SelectionSet",
				"selections": [
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "id"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "authorID"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "content"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "createdAt"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "parentPostId"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "commentCount"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "leafAncestorIds"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "rootAncestorIds"
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "author"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "ProfileReferenceFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "attachmentIds"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "AttachmentIDFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "attachments"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "AttachmentFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postCollections"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostCollectionReferenceFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postOperationPermission"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostOperationPermissionFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "postOptions"
						},
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostOptionsFields"
								}
							}]
						}
					},
					{
						"kind": "Field",
						"name": {
							"kind": "Name",
							"value": "reactions"
						},
						"arguments": [{
							"kind": "Argument",
							"name": {
								"kind": "Name",
								"value": "first"
							},
							"value": {
								"kind": "IntValue",
								"value": "20"
							}
						}],
						"selectionSet": {
							"kind": "SelectionSet",
							"selections": [{
								"kind": "FragmentSpread",
								"name": {
									"kind": "Name",
									"value": "PostReactionsConnectionFields"
								}
							}]
						}
					}
				]
			}
		}
	]
};
//#endregion
//#region src/generated/sdk.ts
function getSdk(requester) {
	return {
		GetAccountProfile(variables, options) {
			return requester(GetAccountProfileDocument, variables, options);
		},
		GetBlockedAccounts(variables, options) {
			return requester(GetBlockedAccountsDocument, variables, options);
		},
		GetCurrentAccount(variables, options) {
			return requester(GetCurrentAccountDocument, variables, options);
		},
		GetDiscussions(variables, options) {
			return requester(GetDiscussionsDocument, variables, options);
		},
		GetFeedPosts(variables, options) {
			return requester(GetFeedPostsDocument, variables, options);
		},
		GetFollowedAccounts(variables, options) {
			return requester(GetFollowedAccountsDocument, variables, options);
		},
		GetFollowedPostCollections(variables, options) {
			return requester(GetFollowedPostCollectionsDocument, variables, options);
		},
		GetFollowingAccounts(variables, options) {
			return requester(GetFollowingAccountsDocument, variables, options);
		},
		GetFollowingPosts(variables, options) {
			return requester(GetFollowingPostsDocument, variables, options);
		},
		GetHistoryPosts(variables, options) {
			return requester(GetHistoryPostsDocument, variables, options);
		},
		GetLinkPreview(variables, options) {
			return requester(GetLinkPreviewDocument, variables, options);
		},
		GetMedia(variables, options) {
			return requester(GetMediaDocument, variables, options);
		},
		GetMutualFollowers(variables, options) {
			return requester(GetMutualFollowersDocument, variables, options);
		},
		GetMyPostCollections(variables, options) {
			return requester(GetMyPostCollectionsDocument, variables, options);
		},
		GetNotifications(variables, options) {
			return requester(GetNotificationsDocument, variables, options);
		},
		GetPopularPosts(variables, options) {
			return requester(GetPopularPostsDocument, variables, options);
		},
		GetPost(variables, options) {
			return requester(GetPostDocument, variables, options);
		},
		GetPostCollection(variables, options) {
			return requester(GetPostCollectionDocument, variables, options);
		},
		GetPostCollectionsByAuthor(variables, options) {
			return requester(GetPostCollectionsByAuthorDocument, variables, options);
		},
		GetPostDraft(variables, options) {
			return requester(GetPostDraftDocument, variables, options);
		},
		GetPostDrafts(variables, options) {
			return requester(GetPostDraftsDocument, variables, options);
		},
		GetPostDraftsCount(variables, options) {
			return requester(GetPostDraftsCountDocument, variables, options);
		},
		GetPostReactionDetails(variables, options) {
			return requester(GetPostReactionDetailsDocument, variables, options);
		},
		GetPostReactions(variables, options) {
			return requester(GetPostReactionsDocument, variables, options);
		},
		GetProfileTagById(variables, options) {
			return requester(GetProfileTagByIdDocument, variables, options);
		},
		GetProfileTagProfiles(variables, options) {
			return requester(GetProfileTagProfilesDocument, variables, options);
		},
		GetReactedPosts(variables, options) {
			return requester(GetReactedPostsDocument, variables, options);
		},
		GetTopicFeedPosts(variables, options) {
			return requester(GetTopicFeedPostsDocument, variables, options);
		},
		GetTopics(variables, options) {
			return requester(GetTopicsDocument, variables, options);
		},
		GetUnreadNotificationCount(variables, options) {
			return requester(GetUnreadNotificationCountDocument, variables, options);
		},
		GetUserPosts(variables, options) {
			return requester(GetUserPostsDocument, variables, options);
		},
		GetUserReactions(variables, options) {
			return requester(GetUserReactionsDocument, variables, options);
		},
		ListProfileTags(variables, options) {
			return requester(ListProfileTagsDocument, variables, options);
		},
		NotificationReceived(variables, options) {
			return requester(NotificationReceivedDocument, variables, options);
		},
		PostCreatedByAuthor(variables, options) {
			return requester(PostCreatedByAuthorDocument, variables, options);
		},
		PostCreatedInCollection(variables, options) {
			return requester(PostCreatedInCollectionDocument, variables, options);
		},
		PostDeleted(variables, options) {
			return requester(PostDeletedDocument, variables, options);
		},
		PostUpdated(variables, options) {
			return requester(PostUpdatedDocument, variables, options);
		},
		ReplyCreatedUnderRootPost(variables, options) {
			return requester(ReplyCreatedUnderRootPostDocument, variables, options);
		}
	};
}
//#endregion
//#region src/client.ts
const DEFAULT_ENDPOINT = "https://beta.mosir.app/api/v1";
function createMosirClient(options) {
	const endpoint = options.endpoint ?? "https://beta.mosir.app/api/v1";
	const transport = new MosirTransport(options, endpoint);
	const requester = (document, variables, requestOptions) => transport.execute(document, variables, requestOptions);
	const sdk = getSdk(requester);
	return Object.assign({
		endpoint,
		token: options.token,
		request: transport.request.bind(transport),
		subscribe: transport.subscribe.bind(transport),
		execute: transport.execute.bind(transport),
		sdk,
		dispose: transport.dispose.bind(transport)
	}, sdk);
}
var MosirTransport = class {
	endpoint;
	token;
	graphQLClient;
	defaultHeaders;
	fetchImplementation;
	sseClient;
	constructor(options, endpoint) {
		this.endpoint = endpoint;
		this.token = options.token;
		this.defaultHeaders = options.headers;
		this.fetchImplementation = options.fetch;
		this.graphQLClient = new GraphQLClient(endpoint, { fetch: options.fetch });
		this.sseClient = this.createSseClient();
	}
	async request(document, variables, options) {
		if (getOperationType(document) === "subscription") throw new Error("Use subscribe(...) for subscription operations.");
		const requestOptions = {
			document,
			signal: options?.signal,
			requestHeaders: mergeHeaders(this.authHeaders, this.defaultHeaders, options?.headers)
		};
		if (variables !== void 0) requestOptions.variables = variables;
		return this.graphQLClient.request(requestOptions);
	}
	subscribe(document, variables, options) {
		if (getOperationType(document) !== "subscription") throw new Error("Use request(...) for query and mutation operations.");
		const request = {
			query: toQueryString(document),
			variables,
			operationName: getOperationName(document)
		};
		const client = options?.headers ? this.createSseClient(options.headers) : this.sseClient;
		return wrapSubscriptionIterator(client.iterate(request), () => {
			if (client !== this.sseClient) client.dispose();
		});
	}
	execute(document, variables, options) {
		return getOperationType(document) === "subscription" ? this.subscribe(document, variables, options) : this.request(document, variables, options);
	}
	dispose() {
		this.sseClient.dispose();
	}
	createSseClient(extraHeaders) {
		return createClient({
			url: this.endpoint,
			fetchFn: this.fetchImplementation,
			headers: async () => headersToRecord(mergeHeaders(this.authHeaders, this.defaultHeaders, extraHeaders))
		});
	}
	get authHeaders() {
		return { Authorization: `Bearer ${this.token}` };
	}
};
async function* wrapSubscriptionIterator(iterator, onFinally) {
	try {
		for await (const result of iterator) {
			if (result.errors?.length) throw new Error(result.errors.map((error) => error.message).join("\n"));
			if (result.data != null) yield result.data;
		}
	} finally {
		onFinally();
	}
}
function getOperationType(document) {
	const operation = getOperationAST(toDocumentNode(document), getOperationName(document));
	if (!operation) throw new Error("Unable to resolve GraphQL operation type. Provide a single named operation document.");
	return operation.operation;
}
function getOperationName(document) {
	return getOperationAST(toDocumentNode(document), void 0)?.name?.value;
}
function toDocumentNode(document) {
	if (typeof document === "string" || document instanceof String) return parse(String(document));
	return document;
}
function toQueryString(document) {
	if (typeof document === "string" || document instanceof String) return String(document);
	return print(document);
}
function mergeHeaders(...headersList) {
	const headers = new Headers();
	for (const headerSet of headersList) {
		if (!headerSet) continue;
		new Headers(headerSet).forEach((value, key) => {
			headers.set(key, value);
		});
	}
	return headers;
}
function headersToRecord(headers) {
	return Object.fromEntries(headers.entries());
}
//#endregion
export { AccountFieldsFragmentDoc, AspectRatioFieldsFragmentDoc, AttachmentFieldsFragmentDoc, AttachmentIdFieldsFragmentDoc, BlockStatusInfoFieldsFragmentDoc, DEFAULT_ENDPOINT, FeedPostConnectionFieldsFragmentDoc, FeedPostEdgeFieldsFragmentDoc, GetAccountProfileDocument, GetBlockedAccountsDocument, GetCurrentAccountDocument, GetDiscussionsDocument, GetFeedPostsDocument, GetFollowedAccountsDocument, GetFollowedPostCollectionsDocument, GetFollowingAccountsDocument, GetFollowingPostsDocument, GetHistoryPostsDocument, GetLinkPreviewDocument, GetMediaDocument, GetMutualFollowersDocument, GetMyPostCollectionsDocument, GetNotificationsDocument, GetPopularPostsDocument, GetPostCollectionDocument, GetPostCollectionsByAuthorDocument, GetPostDocument, GetPostDraftDocument, GetPostDraftsCountDocument, GetPostDraftsDocument, GetPostReactionDetailsDocument, GetPostReactionsDocument, GetProfileTagByIdDocument, GetProfileTagProfilesDocument, GetReactedPostsDocument, GetTopicFeedPostsDocument, GetTopicsDocument, GetUnreadNotificationCountDocument, GetUserPostsDocument, GetUserReactionsDocument, LinkPreviewFieldsFragmentDoc, ListProfileTagsDocument, MediaFileMetadataFieldsFragmentDoc, MediaMetadataFieldsFragmentDoc, MonoPostDraftFieldsFragmentDoc, NotificationConnectionFieldsFragmentDoc, NotificationFieldsFragmentDoc, NotificationReceivedDocument, PageInfoFieldsFragmentDoc, PostCollectionConnectionFieldsFragmentDoc, PostCollectionFieldsFragmentDoc, PostCollectionReferenceFieldsFragmentDoc, PostConnectionFieldsFragmentDoc, PostCreatedByAuthorDocument, PostCreatedInCollectionDocument, PostDeletedDocument, PostDraftConnectionFieldsFragmentDoc, PostDraftFieldsFragmentDoc, PostFieldsFragmentDoc, PostOperationPermissionFieldsFragmentDoc, PostOptionsFieldsFragmentDoc, PostReactionDetailRecordConnectionFieldsFragmentDoc, PostReactionsConnectionFieldsFragmentDoc, PostReferenceFieldsFragmentDoc, PostUpdatedDocument, PostVisibilityFieldsFragmentDoc, ProfileConnectionFieldsFragmentDoc, ProfileFieldsFragmentDoc, ProfileFollowStatusFieldsFragmentDoc, ProfileReferenceFieldsFragmentDoc, ProfileTagConnectionFieldsFragmentDoc, ProfileTagFieldsFragmentDoc, ReactionDetailRecordFieldsFragmentDoc, ReactionSummaryFieldsFragmentDoc, ReactionTypeFieldsFragmentDoc, ReplyCreatedUnderRootPostDocument, TopicFieldsFragmentDoc, UserReactionStatisticsFieldsFragmentDoc, UserReactionsStatisticsConnectionFieldsFragmentDoc, createMosirClient, getSdk };

//# sourceMappingURL=index.js.map