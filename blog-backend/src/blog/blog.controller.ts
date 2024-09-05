import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  NotFoundException,
  Param,
  Post,
  Put,
  Query,
  Res,
} from '@nestjs/common';
import { BlogService } from './blog.service';
import { CreatePostDTO } from './dto/create-post.dto';
import { ValidateObjectId } from './shared/pipes/validate-object-id.pipes';

@Controller('blog')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @Get('posts')
  async getPosts(@Res() res): Promise<any> {
    const posts = await this.blogService.getPosts();

    return res.status(HttpStatus.OK).json(posts);
  }

  @Get('post/:postID')
  async getPost(
    @Res() res,
    @Param('postID', new ValidateObjectId()) postID: string,
  ): Promise<any> {
    const post = await this.blogService.getPost(postID);
    if (!post) throw new NotFoundException('Post does not exists!');
    return res.status(HttpStatus.OK).json(post);
  }

  @Post('/post')
  async addPost(
    @Res() res,
    @Body() createPostDTO: CreatePostDTO,
  ): Promise<any> {
    const newPost = await this.blogService.addPost(createPostDTO);

    return res.status(HttpStatus.CREATED).json({
      message: 'Post has been submitted successfully!',
      post: newPost,
    });
  }

  @Put('/edit')
  async editPost(
    @Res() resizeBy,
    @Query('postID', new ValidateObjectId()) postID: string,
    @Body() createPostDTO: CreatePostDTO,
  ): Promise<any> {
    const editedPost = await this.blogService.editPost(postID, createPostDTO);
    if (!editedPost) throw new NotFoundException('Post does not exist!');
    return resizeBy.status(HttpStatus.OK).json({
      message: 'Post has been successfully updated',
      post: editedPost,
    });
  }

  @Delete('/delete')
  async deletePost(
    @Res() res,
    @Query('postID', new ValidateObjectId()) postID: string,
  ) {
    const deletedPost = await this.blogService.deletePost(postID);
    if (!deletedPost) throw new NotFoundException('Post does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'Post has been deleted',
      post: deletedPost,
    });
  }
}
