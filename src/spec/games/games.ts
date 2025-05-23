/**
 * Generated by orval v7.8.0 🍺
 * Do not edit manually.
 * PokéAPI
 * All the Pokémon data you'll ever need in one place, easily accessible through a modern free open-source RESTful API.

## What is this?

This is a full RESTful API linked to an extensive database detailing everything about the Pokémon main game series.

We've covered everything from Pokémon to Berry Flavors.

## Where do I start?

We have awesome [documentation](https://pokeapi.co/docs/v2) on how to use this API. It takes minutes to get started.

This API will always be publicly available and will never require any extensive setup process to consume.

Created by [**Paul Hallett**](https://github.com/phalt) and other [**PokéAPI contributors***](https://github.com/PokeAPI/pokeapi#contributing) around the world. Pokémon and Pokémon character names are trademarks of Nintendo.
    
 * OpenAPI spec version: 2.7.0
 */
import {
  useQuery
} from '@tanstack/react-query';
import type {
  DataTag,
  DefinedInitialDataOptions,
  DefinedUseQueryResult,
  QueryClient,
  QueryFunction,
  QueryKey,
  UndefinedInitialDataOptions,
  UseQueryOptions,
  UseQueryResult
} from '@tanstack/react-query';

import type {
  GenerationDetail,
  GenerationListParams,
  PaginatedGenerationSummaryList,
  PaginatedPokedexSummaryList,
  PaginatedVersionGroupSummaryList,
  PaginatedVersionSummaryList,
  PokedexDetail,
  PokedexListParams,
  VersionDetail,
  VersionGroupDetail,
  VersionGroupListParams,
  VersionListParams
} from '.././model';





/**
 * A generation is a grouping of the Pokémon games that separates them based on the Pokémon they include. In each generation, a new set of Pokémon, Moves, Abilities and Types that did not exist in the previous generation are released.
 * @summary List genrations
 */
export type generationListResponse200 = {
  data: PaginatedGenerationSummaryList
  status: 200
}
    
export type generationListResponseComposite = generationListResponse200;
    
export type generationListResponse = generationListResponseComposite & {
  headers: Headers;
}

export const getGenerationListUrl = (params?: GenerationListParams,) => {
  const normalizedParams = new URLSearchParams();

  Object.entries(params || {}).forEach(([key, value]) => {
    
    if (value !== undefined) {
      normalizedParams.append(key, value === null ? 'null' : value.toString())
    }
  });

  const stringifiedParams = normalizedParams.toString();

  return stringifiedParams.length > 0 ? `https://pokeapi.co/api/v2/generation/?${stringifiedParams}` : `https://pokeapi.co/api/v2/generation/`
}

export const generationList = async (params?: GenerationListParams, options?: RequestInit): Promise<generationListResponse> => {
  
  const res = await fetch(getGenerationListUrl(params),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: generationListResponse['data'] = body ? JSON.parse(body) : {}

  return { data, status: res.status, headers: res.headers } as generationListResponse
}



export const getGenerationListQueryKey = (params?: GenerationListParams,) => {
    return [`https://pokeapi.co/api/v2/generation/`, ...(params ? [params]: [])] as const;
    }

    
export const getGenerationListQueryOptions = <TData = Awaited<ReturnType<typeof generationList>>, TError = unknown>(params?: GenerationListParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof generationList>>, TError, TData>>, fetch?: RequestInit}
) => {

const {query: queryOptions, fetch: fetchOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGenerationListQueryKey(params);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof generationList>>> = ({ signal }) => generationList(params, { signal, ...fetchOptions });

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof generationList>>, TError, TData> & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GenerationListQueryResult = NonNullable<Awaited<ReturnType<typeof generationList>>>
export type GenerationListQueryError = unknown


export function useGenerationList<TData = Awaited<ReturnType<typeof generationList>>, TError = unknown>(
 params: undefined |  GenerationListParams, options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof generationList>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof generationList>>,
          TError,
          Awaited<ReturnType<typeof generationList>>
        > , 'initialData'
      >, fetch?: RequestInit}
 , queryClient?: QueryClient
  ):  DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGenerationList<TData = Awaited<ReturnType<typeof generationList>>, TError = unknown>(
 params?: GenerationListParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof generationList>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof generationList>>,
          TError,
          Awaited<ReturnType<typeof generationList>>
        > , 'initialData'
      >, fetch?: RequestInit}
 , queryClient?: QueryClient
  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGenerationList<TData = Awaited<ReturnType<typeof generationList>>, TError = unknown>(
 params?: GenerationListParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof generationList>>, TError, TData>>, fetch?: RequestInit}
 , queryClient?: QueryClient
  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary List genrations
 */

export function useGenerationList<TData = Awaited<ReturnType<typeof generationList>>, TError = unknown>(
 params?: GenerationListParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof generationList>>, TError, TData>>, fetch?: RequestInit}
 , queryClient?: QueryClient 
 ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {

  const queryOptions = getGenerationListQueryOptions(params,options)

  const query = useQuery(queryOptions , queryClient) as  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



/**
 * A generation is a grouping of the Pokémon games that separates them based on the Pokémon they include. In each generation, a new set of Pokémon, Moves, Abilities and Types that did not exist in the previous generation are released.
 * @summary Get genration
 */
export type generationRetrieveResponse200 = {
  data: GenerationDetail
  status: 200
}
    
export type generationRetrieveResponseComposite = generationRetrieveResponse200;
    
export type generationRetrieveResponse = generationRetrieveResponseComposite & {
  headers: Headers;
}

export const getGenerationRetrieveUrl = (id: string,) => {


  

  return `https://pokeapi.co/api/v2/generation/${id}/`
}

export const generationRetrieve = async (id: string, options?: RequestInit): Promise<generationRetrieveResponse> => {
  
  const res = await fetch(getGenerationRetrieveUrl(id),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: generationRetrieveResponse['data'] = body ? JSON.parse(body) : {}

  return { data, status: res.status, headers: res.headers } as generationRetrieveResponse
}



export const getGenerationRetrieveQueryKey = (id: string,) => {
    return [`https://pokeapi.co/api/v2/generation/${id}/`] as const;
    }

    
export const getGenerationRetrieveQueryOptions = <TData = Awaited<ReturnType<typeof generationRetrieve>>, TError = unknown>(id: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof generationRetrieve>>, TError, TData>>, fetch?: RequestInit}
) => {

const {query: queryOptions, fetch: fetchOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGenerationRetrieveQueryKey(id);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof generationRetrieve>>> = ({ signal }) => generationRetrieve(id, { signal, ...fetchOptions });

      

      

   return  { queryKey, queryFn, enabled: !!(id), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof generationRetrieve>>, TError, TData> & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type GenerationRetrieveQueryResult = NonNullable<Awaited<ReturnType<typeof generationRetrieve>>>
export type GenerationRetrieveQueryError = unknown


export function useGenerationRetrieve<TData = Awaited<ReturnType<typeof generationRetrieve>>, TError = unknown>(
 id: string, options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof generationRetrieve>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof generationRetrieve>>,
          TError,
          Awaited<ReturnType<typeof generationRetrieve>>
        > , 'initialData'
      >, fetch?: RequestInit}
 , queryClient?: QueryClient
  ):  DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGenerationRetrieve<TData = Awaited<ReturnType<typeof generationRetrieve>>, TError = unknown>(
 id: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof generationRetrieve>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof generationRetrieve>>,
          TError,
          Awaited<ReturnType<typeof generationRetrieve>>
        > , 'initialData'
      >, fetch?: RequestInit}
 , queryClient?: QueryClient
  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useGenerationRetrieve<TData = Awaited<ReturnType<typeof generationRetrieve>>, TError = unknown>(
 id: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof generationRetrieve>>, TError, TData>>, fetch?: RequestInit}
 , queryClient?: QueryClient
  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary Get genration
 */

export function useGenerationRetrieve<TData = Awaited<ReturnType<typeof generationRetrieve>>, TError = unknown>(
 id: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof generationRetrieve>>, TError, TData>>, fetch?: RequestInit}
 , queryClient?: QueryClient 
 ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {

  const queryOptions = getGenerationRetrieveQueryOptions(id,options)

  const query = useQuery(queryOptions , queryClient) as  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



/**
 * A Pokédex is a handheld electronic encyclopedia device; one which is capable of recording and retaining information of the various Pokémon in a given region with the exception of the national dex and some smaller dexes related to portions of a region. See [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Pokedex) for greater detail.
 * @summary List pokedex
 */
export type pokedexListResponse200 = {
  data: PaginatedPokedexSummaryList
  status: 200
}
    
export type pokedexListResponseComposite = pokedexListResponse200;
    
export type pokedexListResponse = pokedexListResponseComposite & {
  headers: Headers;
}

export const getPokedexListUrl = (params?: PokedexListParams,) => {
  const normalizedParams = new URLSearchParams();

  Object.entries(params || {}).forEach(([key, value]) => {
    
    if (value !== undefined) {
      normalizedParams.append(key, value === null ? 'null' : value.toString())
    }
  });

  const stringifiedParams = normalizedParams.toString();

  return stringifiedParams.length > 0 ? `https://pokeapi.co/api/v2/pokedex/?${stringifiedParams}` : `https://pokeapi.co/api/v2/pokedex/`
}

export const pokedexList = async (params?: PokedexListParams, options?: RequestInit): Promise<pokedexListResponse> => {
  
  const res = await fetch(getPokedexListUrl(params),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: pokedexListResponse['data'] = body ? JSON.parse(body) : {}

  return { data, status: res.status, headers: res.headers } as pokedexListResponse
}



export const getPokedexListQueryKey = (params?: PokedexListParams,) => {
    return [`https://pokeapi.co/api/v2/pokedex/`, ...(params ? [params]: [])] as const;
    }

    
export const getPokedexListQueryOptions = <TData = Awaited<ReturnType<typeof pokedexList>>, TError = unknown>(params?: PokedexListParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof pokedexList>>, TError, TData>>, fetch?: RequestInit}
) => {

const {query: queryOptions, fetch: fetchOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getPokedexListQueryKey(params);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof pokedexList>>> = ({ signal }) => pokedexList(params, { signal, ...fetchOptions });

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof pokedexList>>, TError, TData> & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type PokedexListQueryResult = NonNullable<Awaited<ReturnType<typeof pokedexList>>>
export type PokedexListQueryError = unknown


export function usePokedexList<TData = Awaited<ReturnType<typeof pokedexList>>, TError = unknown>(
 params: undefined |  PokedexListParams, options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof pokedexList>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof pokedexList>>,
          TError,
          Awaited<ReturnType<typeof pokedexList>>
        > , 'initialData'
      >, fetch?: RequestInit}
 , queryClient?: QueryClient
  ):  DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function usePokedexList<TData = Awaited<ReturnType<typeof pokedexList>>, TError = unknown>(
 params?: PokedexListParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof pokedexList>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof pokedexList>>,
          TError,
          Awaited<ReturnType<typeof pokedexList>>
        > , 'initialData'
      >, fetch?: RequestInit}
 , queryClient?: QueryClient
  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function usePokedexList<TData = Awaited<ReturnType<typeof pokedexList>>, TError = unknown>(
 params?: PokedexListParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof pokedexList>>, TError, TData>>, fetch?: RequestInit}
 , queryClient?: QueryClient
  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary List pokedex
 */

export function usePokedexList<TData = Awaited<ReturnType<typeof pokedexList>>, TError = unknown>(
 params?: PokedexListParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof pokedexList>>, TError, TData>>, fetch?: RequestInit}
 , queryClient?: QueryClient 
 ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {

  const queryOptions = getPokedexListQueryOptions(params,options)

  const query = useQuery(queryOptions , queryClient) as  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



/**
 * A Pokédex is a handheld electronic encyclopedia device; one which is capable of recording and retaining information of the various Pokémon in a given region with the exception of the national dex and some smaller dexes related to portions of a region. See [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Pokedex) for greater detail.
 * @summary Get pokedex
 */
export type pokedexRetrieveResponse200 = {
  data: PokedexDetail
  status: 200
}
    
export type pokedexRetrieveResponseComposite = pokedexRetrieveResponse200;
    
export type pokedexRetrieveResponse = pokedexRetrieveResponseComposite & {
  headers: Headers;
}

export const getPokedexRetrieveUrl = (id: string,) => {


  

  return `https://pokeapi.co/api/v2/pokedex/${id}/`
}

export const pokedexRetrieve = async (id: string, options?: RequestInit): Promise<pokedexRetrieveResponse> => {
  
  const res = await fetch(getPokedexRetrieveUrl(id),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: pokedexRetrieveResponse['data'] = body ? JSON.parse(body) : {}

  return { data, status: res.status, headers: res.headers } as pokedexRetrieveResponse
}



export const getPokedexRetrieveQueryKey = (id: string,) => {
    return [`https://pokeapi.co/api/v2/pokedex/${id}/`] as const;
    }

    
export const getPokedexRetrieveQueryOptions = <TData = Awaited<ReturnType<typeof pokedexRetrieve>>, TError = unknown>(id: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof pokedexRetrieve>>, TError, TData>>, fetch?: RequestInit}
) => {

const {query: queryOptions, fetch: fetchOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getPokedexRetrieveQueryKey(id);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof pokedexRetrieve>>> = ({ signal }) => pokedexRetrieve(id, { signal, ...fetchOptions });

      

      

   return  { queryKey, queryFn, enabled: !!(id), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof pokedexRetrieve>>, TError, TData> & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type PokedexRetrieveQueryResult = NonNullable<Awaited<ReturnType<typeof pokedexRetrieve>>>
export type PokedexRetrieveQueryError = unknown


export function usePokedexRetrieve<TData = Awaited<ReturnType<typeof pokedexRetrieve>>, TError = unknown>(
 id: string, options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof pokedexRetrieve>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof pokedexRetrieve>>,
          TError,
          Awaited<ReturnType<typeof pokedexRetrieve>>
        > , 'initialData'
      >, fetch?: RequestInit}
 , queryClient?: QueryClient
  ):  DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function usePokedexRetrieve<TData = Awaited<ReturnType<typeof pokedexRetrieve>>, TError = unknown>(
 id: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof pokedexRetrieve>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof pokedexRetrieve>>,
          TError,
          Awaited<ReturnType<typeof pokedexRetrieve>>
        > , 'initialData'
      >, fetch?: RequestInit}
 , queryClient?: QueryClient
  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function usePokedexRetrieve<TData = Awaited<ReturnType<typeof pokedexRetrieve>>, TError = unknown>(
 id: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof pokedexRetrieve>>, TError, TData>>, fetch?: RequestInit}
 , queryClient?: QueryClient
  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary Get pokedex
 */

export function usePokedexRetrieve<TData = Awaited<ReturnType<typeof pokedexRetrieve>>, TError = unknown>(
 id: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof pokedexRetrieve>>, TError, TData>>, fetch?: RequestInit}
 , queryClient?: QueryClient 
 ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {

  const queryOptions = getPokedexRetrieveQueryOptions(id,options)

  const query = useQuery(queryOptions , queryClient) as  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



/**
 * Versions of the games, e.g., Red, Blue or Yellow.
 * @summary List versions
 */
export type versionListResponse200 = {
  data: PaginatedVersionSummaryList
  status: 200
}
    
export type versionListResponseComposite = versionListResponse200;
    
export type versionListResponse = versionListResponseComposite & {
  headers: Headers;
}

export const getVersionListUrl = (params?: VersionListParams,) => {
  const normalizedParams = new URLSearchParams();

  Object.entries(params || {}).forEach(([key, value]) => {
    
    if (value !== undefined) {
      normalizedParams.append(key, value === null ? 'null' : value.toString())
    }
  });

  const stringifiedParams = normalizedParams.toString();

  return stringifiedParams.length > 0 ? `https://pokeapi.co/api/v2/version/?${stringifiedParams}` : `https://pokeapi.co/api/v2/version/`
}

export const versionList = async (params?: VersionListParams, options?: RequestInit): Promise<versionListResponse> => {
  
  const res = await fetch(getVersionListUrl(params),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: versionListResponse['data'] = body ? JSON.parse(body) : {}

  return { data, status: res.status, headers: res.headers } as versionListResponse
}



export const getVersionListQueryKey = (params?: VersionListParams,) => {
    return [`https://pokeapi.co/api/v2/version/`, ...(params ? [params]: [])] as const;
    }

    
export const getVersionListQueryOptions = <TData = Awaited<ReturnType<typeof versionList>>, TError = unknown>(params?: VersionListParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof versionList>>, TError, TData>>, fetch?: RequestInit}
) => {

const {query: queryOptions, fetch: fetchOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getVersionListQueryKey(params);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof versionList>>> = ({ signal }) => versionList(params, { signal, ...fetchOptions });

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof versionList>>, TError, TData> & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type VersionListQueryResult = NonNullable<Awaited<ReturnType<typeof versionList>>>
export type VersionListQueryError = unknown


export function useVersionList<TData = Awaited<ReturnType<typeof versionList>>, TError = unknown>(
 params: undefined |  VersionListParams, options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof versionList>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof versionList>>,
          TError,
          Awaited<ReturnType<typeof versionList>>
        > , 'initialData'
      >, fetch?: RequestInit}
 , queryClient?: QueryClient
  ):  DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useVersionList<TData = Awaited<ReturnType<typeof versionList>>, TError = unknown>(
 params?: VersionListParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof versionList>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof versionList>>,
          TError,
          Awaited<ReturnType<typeof versionList>>
        > , 'initialData'
      >, fetch?: RequestInit}
 , queryClient?: QueryClient
  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useVersionList<TData = Awaited<ReturnType<typeof versionList>>, TError = unknown>(
 params?: VersionListParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof versionList>>, TError, TData>>, fetch?: RequestInit}
 , queryClient?: QueryClient
  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary List versions
 */

export function useVersionList<TData = Awaited<ReturnType<typeof versionList>>, TError = unknown>(
 params?: VersionListParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof versionList>>, TError, TData>>, fetch?: RequestInit}
 , queryClient?: QueryClient 
 ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {

  const queryOptions = getVersionListQueryOptions(params,options)

  const query = useQuery(queryOptions , queryClient) as  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



/**
 * Versions of the games, e.g., Red, Blue or Yellow.
 * @summary Get version
 */
export type versionRetrieveResponse200 = {
  data: VersionDetail
  status: 200
}
    
export type versionRetrieveResponseComposite = versionRetrieveResponse200;
    
export type versionRetrieveResponse = versionRetrieveResponseComposite & {
  headers: Headers;
}

export const getVersionRetrieveUrl = (id: string,) => {


  

  return `https://pokeapi.co/api/v2/version/${id}/`
}

export const versionRetrieve = async (id: string, options?: RequestInit): Promise<versionRetrieveResponse> => {
  
  const res = await fetch(getVersionRetrieveUrl(id),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: versionRetrieveResponse['data'] = body ? JSON.parse(body) : {}

  return { data, status: res.status, headers: res.headers } as versionRetrieveResponse
}



export const getVersionRetrieveQueryKey = (id: string,) => {
    return [`https://pokeapi.co/api/v2/version/${id}/`] as const;
    }

    
export const getVersionRetrieveQueryOptions = <TData = Awaited<ReturnType<typeof versionRetrieve>>, TError = unknown>(id: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof versionRetrieve>>, TError, TData>>, fetch?: RequestInit}
) => {

const {query: queryOptions, fetch: fetchOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getVersionRetrieveQueryKey(id);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof versionRetrieve>>> = ({ signal }) => versionRetrieve(id, { signal, ...fetchOptions });

      

      

   return  { queryKey, queryFn, enabled: !!(id), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof versionRetrieve>>, TError, TData> & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type VersionRetrieveQueryResult = NonNullable<Awaited<ReturnType<typeof versionRetrieve>>>
export type VersionRetrieveQueryError = unknown


export function useVersionRetrieve<TData = Awaited<ReturnType<typeof versionRetrieve>>, TError = unknown>(
 id: string, options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof versionRetrieve>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof versionRetrieve>>,
          TError,
          Awaited<ReturnType<typeof versionRetrieve>>
        > , 'initialData'
      >, fetch?: RequestInit}
 , queryClient?: QueryClient
  ):  DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useVersionRetrieve<TData = Awaited<ReturnType<typeof versionRetrieve>>, TError = unknown>(
 id: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof versionRetrieve>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof versionRetrieve>>,
          TError,
          Awaited<ReturnType<typeof versionRetrieve>>
        > , 'initialData'
      >, fetch?: RequestInit}
 , queryClient?: QueryClient
  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useVersionRetrieve<TData = Awaited<ReturnType<typeof versionRetrieve>>, TError = unknown>(
 id: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof versionRetrieve>>, TError, TData>>, fetch?: RequestInit}
 , queryClient?: QueryClient
  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary Get version
 */

export function useVersionRetrieve<TData = Awaited<ReturnType<typeof versionRetrieve>>, TError = unknown>(
 id: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof versionRetrieve>>, TError, TData>>, fetch?: RequestInit}
 , queryClient?: QueryClient 
 ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {

  const queryOptions = getVersionRetrieveQueryOptions(id,options)

  const query = useQuery(queryOptions , queryClient) as  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



/**
 * Version groups categorize highly similar versions of the games.
 * @summary List version groups
 */
export type versionGroupListResponse200 = {
  data: PaginatedVersionGroupSummaryList
  status: 200
}
    
export type versionGroupListResponseComposite = versionGroupListResponse200;
    
export type versionGroupListResponse = versionGroupListResponseComposite & {
  headers: Headers;
}

export const getVersionGroupListUrl = (params?: VersionGroupListParams,) => {
  const normalizedParams = new URLSearchParams();

  Object.entries(params || {}).forEach(([key, value]) => {
    
    if (value !== undefined) {
      normalizedParams.append(key, value === null ? 'null' : value.toString())
    }
  });

  const stringifiedParams = normalizedParams.toString();

  return stringifiedParams.length > 0 ? `https://pokeapi.co/api/v2/version-group/?${stringifiedParams}` : `https://pokeapi.co/api/v2/version-group/`
}

export const versionGroupList = async (params?: VersionGroupListParams, options?: RequestInit): Promise<versionGroupListResponse> => {
  
  const res = await fetch(getVersionGroupListUrl(params),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: versionGroupListResponse['data'] = body ? JSON.parse(body) : {}

  return { data, status: res.status, headers: res.headers } as versionGroupListResponse
}



export const getVersionGroupListQueryKey = (params?: VersionGroupListParams,) => {
    return [`https://pokeapi.co/api/v2/version-group/`, ...(params ? [params]: [])] as const;
    }

    
export const getVersionGroupListQueryOptions = <TData = Awaited<ReturnType<typeof versionGroupList>>, TError = unknown>(params?: VersionGroupListParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof versionGroupList>>, TError, TData>>, fetch?: RequestInit}
) => {

const {query: queryOptions, fetch: fetchOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getVersionGroupListQueryKey(params);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof versionGroupList>>> = ({ signal }) => versionGroupList(params, { signal, ...fetchOptions });

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof versionGroupList>>, TError, TData> & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type VersionGroupListQueryResult = NonNullable<Awaited<ReturnType<typeof versionGroupList>>>
export type VersionGroupListQueryError = unknown


export function useVersionGroupList<TData = Awaited<ReturnType<typeof versionGroupList>>, TError = unknown>(
 params: undefined |  VersionGroupListParams, options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof versionGroupList>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof versionGroupList>>,
          TError,
          Awaited<ReturnType<typeof versionGroupList>>
        > , 'initialData'
      >, fetch?: RequestInit}
 , queryClient?: QueryClient
  ):  DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useVersionGroupList<TData = Awaited<ReturnType<typeof versionGroupList>>, TError = unknown>(
 params?: VersionGroupListParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof versionGroupList>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof versionGroupList>>,
          TError,
          Awaited<ReturnType<typeof versionGroupList>>
        > , 'initialData'
      >, fetch?: RequestInit}
 , queryClient?: QueryClient
  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useVersionGroupList<TData = Awaited<ReturnType<typeof versionGroupList>>, TError = unknown>(
 params?: VersionGroupListParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof versionGroupList>>, TError, TData>>, fetch?: RequestInit}
 , queryClient?: QueryClient
  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary List version groups
 */

export function useVersionGroupList<TData = Awaited<ReturnType<typeof versionGroupList>>, TError = unknown>(
 params?: VersionGroupListParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof versionGroupList>>, TError, TData>>, fetch?: RequestInit}
 , queryClient?: QueryClient 
 ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {

  const queryOptions = getVersionGroupListQueryOptions(params,options)

  const query = useQuery(queryOptions , queryClient) as  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



/**
 * Version groups categorize highly similar versions of the games.
 * @summary Get version group
 */
export type versionGroupRetrieveResponse200 = {
  data: VersionGroupDetail
  status: 200
}
    
export type versionGroupRetrieveResponseComposite = versionGroupRetrieveResponse200;
    
export type versionGroupRetrieveResponse = versionGroupRetrieveResponseComposite & {
  headers: Headers;
}

export const getVersionGroupRetrieveUrl = (id: string,) => {


  

  return `https://pokeapi.co/api/v2/version-group/${id}/`
}

export const versionGroupRetrieve = async (id: string, options?: RequestInit): Promise<versionGroupRetrieveResponse> => {
  
  const res = await fetch(getVersionGroupRetrieveUrl(id),
  {      
    ...options,
    method: 'GET'
    
    
  }
)

  const body = [204, 205, 304].includes(res.status) ? null : await res.text()
  const data: versionGroupRetrieveResponse['data'] = body ? JSON.parse(body) : {}

  return { data, status: res.status, headers: res.headers } as versionGroupRetrieveResponse
}



export const getVersionGroupRetrieveQueryKey = (id: string,) => {
    return [`https://pokeapi.co/api/v2/version-group/${id}/`] as const;
    }

    
export const getVersionGroupRetrieveQueryOptions = <TData = Awaited<ReturnType<typeof versionGroupRetrieve>>, TError = unknown>(id: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof versionGroupRetrieve>>, TError, TData>>, fetch?: RequestInit}
) => {

const {query: queryOptions, fetch: fetchOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getVersionGroupRetrieveQueryKey(id);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof versionGroupRetrieve>>> = ({ signal }) => versionGroupRetrieve(id, { signal, ...fetchOptions });

      

      

   return  { queryKey, queryFn, enabled: !!(id), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof versionGroupRetrieve>>, TError, TData> & { queryKey: DataTag<QueryKey, TData, TError> }
}

export type VersionGroupRetrieveQueryResult = NonNullable<Awaited<ReturnType<typeof versionGroupRetrieve>>>
export type VersionGroupRetrieveQueryError = unknown


export function useVersionGroupRetrieve<TData = Awaited<ReturnType<typeof versionGroupRetrieve>>, TError = unknown>(
 id: string, options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof versionGroupRetrieve>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof versionGroupRetrieve>>,
          TError,
          Awaited<ReturnType<typeof versionGroupRetrieve>>
        > , 'initialData'
      >, fetch?: RequestInit}
 , queryClient?: QueryClient
  ):  DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useVersionGroupRetrieve<TData = Awaited<ReturnType<typeof versionGroupRetrieve>>, TError = unknown>(
 id: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof versionGroupRetrieve>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof versionGroupRetrieve>>,
          TError,
          Awaited<ReturnType<typeof versionGroupRetrieve>>
        > , 'initialData'
      >, fetch?: RequestInit}
 , queryClient?: QueryClient
  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
export function useVersionGroupRetrieve<TData = Awaited<ReturnType<typeof versionGroupRetrieve>>, TError = unknown>(
 id: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof versionGroupRetrieve>>, TError, TData>>, fetch?: RequestInit}
 , queryClient?: QueryClient
  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> }
/**
 * @summary Get version group
 */

export function useVersionGroupRetrieve<TData = Awaited<ReturnType<typeof versionGroupRetrieve>>, TError = unknown>(
 id: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof versionGroupRetrieve>>, TError, TData>>, fetch?: RequestInit}
 , queryClient?: QueryClient 
 ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {

  const queryOptions = getVersionGroupRetrieveQueryOptions(id,options)

  const query = useQuery(queryOptions , queryClient) as  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



