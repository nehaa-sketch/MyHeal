import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, MutationRef, MutationPromise } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface CreateUserData {
  user_insert: User_Key;
}

export interface GetUserData {
  user?: {
    id: UUIDString;
    email: string;
    displayName?: string | null;
  } & User_Key;
}

export interface ListLogEntriesData {
  logEntries: ({
    id: UUIDString;
    logType: string;
    loggedAt: TimestampString;
    exerciseDurationMinutes?: number | null;
    waterAmountMl?: number | null;
  } & LogEntry_Key)[];
}

export interface LogEntry_Key {
  id: UUIDString;
  __typename?: 'LogEntry_Key';
}

export interface PauseSchedule_Key {
  id: UUIDString;
  __typename?: 'PauseSchedule_Key';
}

export interface ReminderSetting_Key {
  id: UUIDString;
  __typename?: 'ReminderSetting_Key';
}

export interface UpdateDailyGoalsData {
  user_update?: User_Key | null;
}

export interface UpdateDailyGoalsVariables {
  exerciseGoal?: number | null;
  waterGoal?: number | null;
}

export interface User_Key {
  id: UUIDString;
  __typename?: 'User_Key';
}

interface CreateUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<CreateUserData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): MutationRef<CreateUserData, undefined>;
  operationName: string;
}
export const createUserRef: CreateUserRef;

export function createUser(): MutationPromise<CreateUserData, undefined>;
export function createUser(dc: DataConnect): MutationPromise<CreateUserData, undefined>;

interface GetUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetUserData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetUserData, undefined>;
  operationName: string;
}
export const getUserRef: GetUserRef;

export function getUser(): QueryPromise<GetUserData, undefined>;
export function getUser(dc: DataConnect): QueryPromise<GetUserData, undefined>;

interface UpdateDailyGoalsRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars?: UpdateDailyGoalsVariables): MutationRef<UpdateDailyGoalsData, UpdateDailyGoalsVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars?: UpdateDailyGoalsVariables): MutationRef<UpdateDailyGoalsData, UpdateDailyGoalsVariables>;
  operationName: string;
}
export const updateDailyGoalsRef: UpdateDailyGoalsRef;

export function updateDailyGoals(vars?: UpdateDailyGoalsVariables): MutationPromise<UpdateDailyGoalsData, UpdateDailyGoalsVariables>;
export function updateDailyGoals(dc: DataConnect, vars?: UpdateDailyGoalsVariables): MutationPromise<UpdateDailyGoalsData, UpdateDailyGoalsVariables>;

interface ListLogEntriesRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListLogEntriesData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListLogEntriesData, undefined>;
  operationName: string;
}
export const listLogEntriesRef: ListLogEntriesRef;

export function listLogEntries(): QueryPromise<ListLogEntriesData, undefined>;
export function listLogEntries(dc: DataConnect): QueryPromise<ListLogEntriesData, undefined>;

