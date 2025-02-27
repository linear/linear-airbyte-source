export type Issue = {
  id: string;
  createdAt: string;
  updatedAt: string;
  archivedAt: null | string;
  number: number;
  title: string;
  priority: number;
  estimate?: null | string;
  boardOrder?: number;
  sortOrder?: number;
  startedAt?: null | string;
  completedAt?: null | string;
  canceledAt?: null | string;
  autoClosedAt?: null | string;
  autoArchivedAt?: null | string;
  dueDate?: null | string;
  trashed?: null | string;
  snoozedUntilAt?: null | string;
  labelIds: string[];
  teamId: string;
  cycleId?: null | string;
  projectId?: null | string;
  projectMilestoneId?: null | string;
  subscriberIds?: string[];
  previousIdentifiers?: string[];
  creatorId: string;
  assigneeId: string;
  snoozedById?: null | string;
  issueImportId?: null | string;
  stateId?: string;
  parentId?: null | string;
  subIssueSortOrder?: null | string;
  sourceMetadata?: null | string;
  documentVersion?: number;
};

export type Organization = {
  id: string;
  createdAt: string;
  updatedAt: string;
  archivedAt?: null | string;
  name: string;
  urlKey: string;
  logoUrl?: string;
  periodUploadVolume?: number;
  gitBranchFormat?: null | string;
  gitLinkbackMessagesEnabled?: boolean;
  gitPublicLinkbackMessagesEnabled?: boolean;
  roadmapEnabled?: boolean;
  samlEnabled?: boolean;
  allowedAuthServices?: unknown[];
  deletionRequestedAt?: null | string;
  reducedPersonalInformation?: boolean;
  enabled: boolean;
  deletionRequestedById?: null | string;
  serviceId?: string;
  linearPreviewFlags?: {
    [k: string]: unknown;
  };
};

export interface Team {
  id?: string;
  createdAt?: string;
  updatedAt?: string;
  archivedAt?: null | string;
  name?: string;
  key?: string;
  description?: null | string;
  icon?: string;
  color?: string;
  organizationId?: string;
  cyclesEnabled?: boolean;
  cycleStartDay?: number;
  cycleDuration?: number;
  cycleCooldownTime?: number;
  cycleIssueAutoAssignStarted?: boolean;
  cycleIssueAutoAssignCompleted?: boolean;
  cycleLockToActive?: boolean;
  upcomingCycleCount?: number;
  timezone?: string;
  inviteHash?: string;
  issueEstimationType?: string;
  issueOrderingNoPriorityFirst?: boolean;
  issueEstimationAllowZero?: boolean;
  issueSortOrderDefaultToBottom?: boolean;
  issueEstimationExtended?: boolean;
  defaultIssueEstimate?: number;
  triageEnabled?: boolean;
  defaultIssueStateId?: string;
  defaultTemplateForMembersId?: null | string;
  defaultTemplateForNonMembersId?: null | string;
  triageIssueStateId?: null | string;
  private?: boolean;
  draftWorkflowStateId?: null | string;
  startWorkflowStateId?: string;
  reviewWorkflowStateId?: null | string;
  mergeWorkflowStateId?: string;
  groupIssueHistory?: boolean;
  slackNewIssue?: boolean;
  slackIssueComments?: boolean;
  slackIssueStatuses?: boolean;
  autoClosePeriod?: number;
  autoCloseStateId?: string;
  autoArchivePeriod?: number;
  markedAsDuplicateWorkflowStateId?: null | string;
}

export interface IssueHistory {
  id?: string;
  createdAt?: string;
  updatedAt?: string;
  archivedAt?: null | string;
  issueId?: string;
  actorId?: string;
  source?: null | string;
  updatedDescription?: null | string;
  fromTitle?: null | string;
  toTitle?: null | string;
  fromAssigneeId?: null | string;
  toAssigneeId?: null | string;
  fromPriority?: null | string;
  toPriority?: null | string;
  fromTeamId?: null | string;
  toTeamId?: null | string;
  fromParentId?: null | string;
  toParentId?: null | string;
  fromStateId?: null | string;
  toStateId?: null | string;
  fromCycleId?: null | string;
  toCycleId?: null | string;
  fromProjectId?: null | string;
  toProjectId?: null | string;
  fromEstimate?: null | string;
  toEstimate?: null | string;
  archived?: null | string;
  trashed?: null | string;
  issueImportId?: null | string;
  attachmentId?: null | string;
  addedLabelIds?: null | string;
  removedLabelIds?: null | string;
  relationChanges?: null | string;
  autoClosed?: boolean;
  autoArchived?: boolean;
  fromDueDate?: null | string;
  toDueDate?: null | string;
}

export interface IssueLabel {
  id?: string;
  createdAt?: string;
  updatedAt?: string;
  archivedAt?: null | string;
  name?: string;
  description?: null | string;
  color?: string;
  organizationId?: string;
  teamId?: null | string;
  creatorId?: null | string;
}

export interface Project {
  id?: string;
  statusId?: string;
  createdAt?: string;
  updatedAt?: string;
  archivedAt?: null | string;
  name?: string;
  description?: string;
  slugId?: string;
  icon?: null | string;
  color?: string;
  state?: string;
  teamIds?: string[];
  creatorId?: string;
  leadId?: null | string;
  memberIds?: string[];
  organizationId?: string;
  lastProjectUpdatePromptAt?: null | string;
  startDate?: string;
  targetDate?: string;
  startedAt?: string;
  completedAt?: null | string;
  canceledAt?: null | string;
  autoArchivedAt?: null | string;
  sortOrder?: number;
  issueCountHistory?: number[];
  completedIssueCountHistory?: number[];
  scopeHistory?: number[];
  completedScopeHistory?: number[];
  slackNewIssue?: boolean;
  slackIssueComments?: boolean;
  slackIssueStatuses?: boolean;
}

export interface ProjectMilestone {
  name?: string;
  id?: string;
  createdAt?: string;
  updatedAt?: string;
  archivedAt?: null | string;
  targetDate?: null | string;
  projectId?: string;
}

export interface Initiative {
  name?: string;
  id?: string;
  slugId?: string;
  createdAt?: string;
  updatedAt?: string;
  archivedAt?: null | string;
  targetDate?: null | string;
  targetDateResolution?: null | string;
  icon?: null | string;
  color?: null | string;
  description?: null | string;
  creatorId?: null | string;
  ownerId?: null | string;
  organizationId?: string;
  status?: string;
}

export interface InitiativeToProject {
  id?: string;
  createdAt?: string;
  updatedAt?: string;
  archivedAt?: null | string;
  initiativeId?: string;
  projectId?: string;
}

export interface EntityExternalLink {
  id?: string;
  createdAt?: string;
  updatedAt?: string;
  archivedAt?: null | string;
  url?: string;
  label?: string;
  creatorId?: string;
  projectId?: string;
  initiativeId?: string;
}

export interface ProjectUpdate {
  id?: string;
  createdAt?: string;
  updatedAt?: string;
  archivedAt?: null | string;
  projectId?: string;
  health?: string;
  userId?: string;
  editedAt?: string;
  reactionData?: unknown[];
  bodyData?: string;
}

export interface TeamKey {
  id?: string;
  createdAt?: string;
  updatedAt?: string;
  archivedAt?: null | string;
  name?: string;
  teamId?: string;
}

export interface TeamMembership {
  id?: string;
  createdAt?: string;
  updatedAt?: string;
  archivedAt?: null | string;
  userId?: string;
  teamId?: string;
  owner?: boolean;
}

export interface User {
  id?: string;
  createdAt?: string;
  updatedAt?: string;
  archivedAt?: null | string;
  name?: string;
  displayName?: string;
  email?: string;
  avatarUrl?: string;
  disableReason?: null | string;
  inviteHash?: string;
  description?: null | string;
  statusEmoji?: null | string;
  statusLabel?: null | string;
  statusUntilAt?: null | string;
  timezone?: string;
  organizationId?: string;
  userAccountId?: string;
  alternativeEmails?: unknown[];
  gitHubUserId?: null | string;
  externalUserMapping?: {
    [k: string]: unknown;
  };
  external?: boolean;
  role?: string;
  active?: boolean;
}

export interface IssueRelation {
  id?: string;
  createdAt?: string;
  updatedAt?: string;
  archivedAt?: null;
  type?: string;
  issueId?: string;
  relatedIssueId?: string;
}

export interface Attachment {
  id?: string;
  createdAt?: string;
  updatedAt?: string;
  archivedAt?: null | string;
  title?: string;
  subtitle?: string;
  url?: string;
  creatorId?: string;
  issueId?: string;
  metadata?: {
    [k: string]: unknown;
  };
  source?: {
    [k: string]: unknown;
  };
  groupBySource?: boolean;
  iconUploadId?: null | string;
  sourceMetadata?: null | {
    [k: string]: unknown;
  };
}

export interface AuditEntry {
  id?: string;
  createdAt?: string;
  updatedAt?: string;
  archivedAt?: null | string;
  type?: string;
  organizationId?: string;
  actorId?: string;
  ip?: string;
  countryCode?: null | string;
  metadata?: {
    [k: string]: unknown;
  };
  userId?: null | string;
  [k: string]: unknown;
}

export interface Comment {
  id?: string;
  createdAt?: string;
  updatedAt?: string;
  archivedAt?: null | string;
  resolvedAt?: null | string;
  issueId?: string;
  parentId?: null | string;
  userId?: null | string;
  resolvingUserId?: null | string;
  resolvingCommentId?: null | string;
  editedAt?: string;
  attachmentId?: null | string;
  sourceMetadata?: null | {
    [k: string]: unknown;
  };
  bodyData?: string;
  reactionData?: {
    [k: string]: unknown;
  }[];
}

export interface Cycle {
  id?: string;
  createdAt?: string;
  updatedAt?: string;
  archivedAt?: null | string;
  number?: number;
  name?: null | string;
  startsAt?: string;
  endsAt?: string;
  completedAt?: null | string;
  autoArchivedAt?: null | string;
  issueCountHistory?: number[];
  completedIssueCountHistory?: number[];
  scopeHistory?: number[];
  completedScopeHistory?: number[];
  teamId?: string;
  uncompletedIssuesUponCloseIds?: number[];
}

export interface WorkflowState {
  id?: string;
  createdAt?: string;
  updatedAt?: string;
  archivedAt?: null | string;
  name?: string;
  color?: string;
  description?: null | string;
  position?: number;
  type?: string;
  teamId?: string;
}

export interface ProjectStatus {
  id?: string;
  createdAt?: string;
  updatedAt?: string;
  archivedAt?: null | string;
  name?: string;
  color?: string;
  description?: null | string;
  position?: number;
  type?: string;
  organizationId?: string;
  indefinite?: boolean;
}

export interface Document {
  id?: string;
  createdAt?: string;
  updatedAt?: string;
  archivedAt?: null | string;
  title?: string;
  icon?: string;
  color?: string;
  creatorId?: string;
  updatedById?: string;
  projectId?: null | string;
  slugId?: string;
}

export interface DocumentContent {
  id?: string;
  organizationId: string;
  content?: string;
  issueId?: string;
  projectId?: string;
  documentId?: string;
  projectMilestoneId?: string;
  createdAt?: string;
  updatedAt?: string;
  archivedAt?: null | string;
}

export interface Customer {
  id?: string;
  createdAt: string;
  updatedAt: string;
  archivedAt?: null | string;
  organizationId: string;
  name: string;
  domains: string[];
  externalIds: string[];
  statusId: string;
  tierId?: string;
  logoUrl?: string;
  slackChannelId?: string;
  slugId: string;
  revenue?: number;
  size?: number;
}

export interface CustomerNeed {
  id: string;
  createdAt: string;
  updatedAt: string;
  archivedAt?: null | string;
  organizationId: string;
  customerId?: string;
  issueId?: string;
  projectId?: string;
  attachmentId?: string;
}
