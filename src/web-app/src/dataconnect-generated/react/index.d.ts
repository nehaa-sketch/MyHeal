import { CreateUserData, GetUserData, UpdateDailyGoalsData, UpdateDailyGoalsVariables, ListLogEntriesData } from '../';
import { UseDataConnectQueryResult, useDataConnectQueryOptions, UseDataConnectMutationResult, useDataConnectMutationOptions} from '@tanstack-query-firebase/react/data-connect';
import { UseQueryResult, UseMutationResult} from '@tanstack/react-query';
import { DataConnect } from 'firebase/data-connect';
import { FirebaseError } from 'firebase/app';


export function useCreateUser(options?: useDataConnectMutationOptions<CreateUserData, FirebaseError, void>): UseDataConnectMutationResult<CreateUserData, undefined>;
export function useCreateUser(dc: DataConnect, options?: useDataConnectMutationOptions<CreateUserData, FirebaseError, void>): UseDataConnectMutationResult<CreateUserData, undefined>;

export function useGetUser(options?: useDataConnectQueryOptions<GetUserData>): UseDataConnectQueryResult<GetUserData, undefined>;
export function useGetUser(dc: DataConnect, options?: useDataConnectQueryOptions<GetUserData>): UseDataConnectQueryResult<GetUserData, undefined>;

export function useUpdateDailyGoals(options?: useDataConnectMutationOptions<UpdateDailyGoalsData, FirebaseError, UpdateDailyGoalsVariables | void>): UseDataConnectMutationResult<UpdateDailyGoalsData, UpdateDailyGoalsVariables>;
export function useUpdateDailyGoals(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateDailyGoalsData, FirebaseError, UpdateDailyGoalsVariables | void>): UseDataConnectMutationResult<UpdateDailyGoalsData, UpdateDailyGoalsVariables>;

export function useListLogEntries(options?: useDataConnectQueryOptions<ListLogEntriesData>): UseDataConnectQueryResult<ListLogEntriesData, undefined>;
export function useListLogEntries(dc: DataConnect, options?: useDataConnectQueryOptions<ListLogEntriesData>): UseDataConnectQueryResult<ListLogEntriesData, undefined>;
