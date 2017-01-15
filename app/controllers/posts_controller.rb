class PostsController < ApplicationController
  
  before_action :require_user, only: [:new, :create, :upvote, :downvote]
  
  def index
    @posts = Post.all
  end 

  def show
    @post = Post.find(params[:id])
  end
  
  def new
    @post = Post.new
  end
  
  def create
    @post = Post.new(post_params)
    @post[:author] = current_user.username
    @post[:score] = '0'
    if @post.save
      redirect_to '/i/'+@post.sub+'/'+@post.id.to_s
    else
      redirect_to '/error'
    end
  end
  
  def upvote
    @post = Post.find(params[:id])
    score = @post.score.to_i
    id = @post.id.to_s
    if id.in?(current_user.upvoted) then
      current_user.upvoted.delete(id)
      score -= 1
    elsif id.in?(current_user.downvoted) then
      current_user.downvoted.delete(id)
      current_user.upvoted.push(id)
      score += 2
    else
      current_user.upvoted.push(id)
      score += 1
    end
    @post.score = score.to_s
    @post.save
    current_user.save
  end 
  
  def downvote
    @post = Post.find(params[:id])
    id = @post.id.to_s
    score = @post.score.to_i
    if id.in?(current_user.upvoted) then
      current_user.upvoted.delete(id)
      current_user.downvoted.push(id)
      score -= 2
    elsif id.in?(current_user.downvoted) then
      current_user.downvoted.delete(id)
      score += 1
    else
      current_user.downvoted.push(id)
      score -= 1
    end
    @post.score = score.to_s
    @post.save
    current_user.save
  end  
  
  def subindex
    @posts = Post.where(sub: params[:sub])
  end
  
  private
  def post_params
    params.require(:post).permit(:title, :content, :sub, :imge)
  end
  
end
