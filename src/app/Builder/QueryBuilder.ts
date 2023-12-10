import { FilterQuery, Query } from 'mongoose'

class QueryBuilder<T> {
  public queryModel: Query<T[], T>
  public query: Record<string, unknown>

  constructor(queryModel: Query<T[], T>, query: Record<string, unknown>) {
    this.queryModel = queryModel
    this.query = query
  }

  search(searchableFields: string[]) {
    const searchTerm = this?.query?.searchTerm as string

    if (searchTerm) {
      const regexPattern = new RegExp(searchTerm, 'i')

      const searchQuery = {
        $or: searchableFields.map((field) => ({
          [field]: regexPattern,
        })),
      }

      //   searchQuery.$or.forEach((element, index) => {
      //     console.log(`$or[${index}]}`, element)
      //   })

      this.queryModel = this.queryModel.find(searchQuery as FilterQuery<T>)
    }

    return this
  }

  filter() {
    const queryObj = { ...this.query }
    const excludeQuery = ['searchTerm', 'sort', 'limit', 'page', 'fields']
    excludeQuery.map((queryEl) => delete queryObj[queryEl])

    // console.log(this.query, queryObj, 'From filter')

    this.queryModel = this.queryModel.find(queryObj as FilterQuery<T>)

    return this
  }

  sort() {
    const sort =
      (this?.query?.fields as string)?.split(',')?.join(' ') || '-createdAt'
    this.queryModel = this.queryModel.sort(sort as string)

    return this
  }

  pagination() {
    const limit = Number(this?.query?.limit)
    const page = Number(this.query?.page)
    const skip = (page - 1) * limit

    this.queryModel = this.queryModel.skip(skip)
    this.queryModel = this.queryModel.limit(limit)

    return this
  }

  fields() {
    const fields =
      (this?.query?.fields as string)?.split(',')?.join(' ') || '-__v'
    this.queryModel = this.queryModel.select(fields)

    return this
  }
}

export default QueryBuilder
