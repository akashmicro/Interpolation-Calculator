import type { QueryKey, UseMutationOptions, UseMutationResult, UseQueryOptions, UseQueryResult } from '@tanstack/react-query';
import type { ErrorResponse, HealthStatus, InterpolationInput, InterpolationResult } from './api.schemas';
import { customFetch } from '../custom-fetch';
import type { ErrorType, BodyType } from '../custom-fetch';
type AwaitedInput<T> = PromiseLike<T> | T;
type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;
type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1];
export declare const getHealthCheckUrl: () => string;
/**
 * Returns server health status
 * @summary Health check
 */
export declare const healthCheck: (options?: Parameters<typeof customFetch>[1]) => Promise<HealthStatus>;
export declare const getHealthCheckQueryKey: () => readonly ["/api/healthz"];
export declare const getHealthCheckQueryOptions: <TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData> & {
    queryKey: QueryKey;
};
export type HealthCheckQueryResult = NonNullable<Awaited<ReturnType<typeof healthCheck>>>;
export type HealthCheckQueryError = ErrorType<unknown>;
/**
 * @summary Health check
 */
export declare function useHealthCheck<TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getCalculateInterpolationUrl: () => string;
/**
 * Validates equally spaced input data and returns the selected Newton forward or backward calculation.
 * @summary Calculate a Newton interpolation
 */
export declare const calculateInterpolation: (interpolationInput: InterpolationInput, options?: Parameters<typeof customFetch>[1]) => Promise<InterpolationResult>;
export declare const getCalculateInterpolationMutationOptions: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof calculateInterpolation>>, TError, {
        data: BodyType<InterpolationInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof calculateInterpolation>>, TError, {
    data: BodyType<InterpolationInput>;
}, TContext>;
export type CalculateInterpolationMutationResult = NonNullable<Awaited<ReturnType<typeof calculateInterpolation>>>;
export type CalculateInterpolationMutationBody = BodyType<InterpolationInput>;
export type CalculateInterpolationMutationError = ErrorType<ErrorResponse>;
/**
* @summary Calculate a Newton interpolation
*/
export declare const useCalculateInterpolation: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof calculateInterpolation>>, TError, {
        data: BodyType<InterpolationInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof calculateInterpolation>>, TError, {
    data: BodyType<InterpolationInput>;
}, TContext>;
export {};
//# sourceMappingURL=api.d.ts.map