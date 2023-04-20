export class PostDto {
  title: string;
  subtitle: string;
  content: string;
  category: string;
  author: string;
}

/*
 export type PostCreateInput = {
    id?: string
    title: string
    subtitle: string
    content: string
    createdAt?: Date | string
    updatedAt: Date | string
    author: UserCreateNestedOneWithoutPostsInput
    tags?: TagCreateNestedManyWithoutPostsInput
*/
