import { PageInfo } from '@public-gateway/types'
import { Field, ObjectType } from '@nestjs/graphql'

import { Project } from './Project'

@ObjectType()
export class ProjectsList {
  @Field(type => [Project])
  rows: Project[]

  @Field(type => PageInfo)
  pageInfo: PageInfo
}
