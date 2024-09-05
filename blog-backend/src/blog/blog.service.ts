import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Post } from './interfaces/post.interface';
import { CreatePostDTO } from './dto/create-post.dto';

@Injectable()
export class BlogService {
  constructor(@InjectModel('Post') private readonly postModel: Model<Post>) {}

  async getPosts(): Promise<Post[]> {
    return await this.postModel.find().exec();
  }

  async getPost(postID: string): Promise<Post> {
    const post = await this.postModel.findById(postID).exec();

    if (!post) throw new NotFoundException('Post not Found');

    return post;
  }

  async addPost(createPostDTO: CreatePostDTO): Promise<Post> {
    const newPost = new this.postModel(createPostDTO);
    return await newPost.save();
  }

  async editPost(postID: string, createPostDTO: CreatePostDTO): Promise<Post> {
    const editedPost = await this.postModel
      .findByIdAndUpdate(postID, createPostDTO, { new: true })
      .exec();
    if (!editedPost) throw new NotFoundException('Post not Found');
    return editedPost;
  }

  async deletePost(postID: string): Promise<any> {
    const deletedPost = await this.postModel.findByIdAndDelete(postID).exec();
    if (!deletedPost) throw new NotFoundException('Post not found');
    return deletedPost;
  }
}
