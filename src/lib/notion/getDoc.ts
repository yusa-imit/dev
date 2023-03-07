import {
  type QueryDatabaseResponse,
  type QueryDatabaseParameters,
  type PageObjectResponse,
  type PartialPageObjectResponse,
} from "@notionhq/client/build/src/api-endpoints"
import { notionClient } from "./notionClient"
import { notionEnv } from "./notionEnv"

export async function getDoc(
  query: Omit<QueryDatabaseParameters, "database_id">
): Promise<QueryDatabaseResponse> {
  try {
    return await notionClient.databases.query({
      database_id: notionEnv.NOTION_DB_ID,
      ...query,
    })
  } catch (error) {
    return error
  }
}

export async function getDocBySlug(slug: string) {
  return await getDoc({
    filter: {
      property: "slug",
      rich_text: {
        equals: slug,
      },
    },
  })
}

export async function getDocsByPage(
  size: number = 10,
  page: number = 1,
  filter?: QueryDatabaseParameters["filter"]
): Promise<Array<PageObjectResponse | PartialPageObjectResponse>> {
  let cursor: undefined | string
  let curPage = 1
  let data = null
  while (curPage <= page) {
    const ret = await getDoc({
      sorts: [{ property: "modified", direction: "descending" }],
      filter,
      page_size: size,
      start_cursor: cursor,
    })
    cursor = ret.next_cursor
    curPage++
    data = ret.results
  }
  return data
}
