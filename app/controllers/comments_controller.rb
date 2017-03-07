class CommentsController < ApplicationController

  before_action :require_user, only: [:create, :upvote, :downvote]

  def create
    @comment = Comment.new(comment_params)
    @comment[:author] = current_user.username
    @comment[:score] = '0'
    if @comment.parent == '0' then
      @comment.layer = '0'
    else
      parent = Comment.find(@comment.parent)
      layer = parent.layer.to_i
      layer += 1
      @comment.layer = layer.to_s
    end
    @comment.save
    
    
    @post = Post.find(@comment.post)
    @post.comments.push(@comment.id)
    @post.save
    
    if @comment.layer != '0' then
      @parentuser = User.find_by_username(Comment.find(@comment.parent).author)
    else
      @parentuser = User.find_by_username(@post.author)
    end
    @parentuser.replies.push(@comment.id)
    @parentuser.notifications += 1
    @parentuser.save
    
    respond_to do |format|
        format.html { redirect_to '/i/'+@post.sub+'/'+@post.id.to_s} 
        format.js { render :layout => false } # see note 2
    end
  end
  
  def upvote
    @comment = Comment.find(params[:id])
    score = @comment.score.to_i
    id = @comment.id.to_s
    if id.in?(current_user.upvoted_c) then
      current_user.upvoted_c.delete(id)
      score -= 1
    elsif id.in?(current_user.downvoted_c) then
      current_user.downvoted_c.delete(id)
      current_user.upvoted_c.push(id)
      score += 2
    else
      current_user.upvoted_c.push(id)
      score += 1
    end
    @comment.score = score.to_s
    @comment.save
    current_user.save
  end 
  
  def downvote
    @comment = Comment.find(params[:id])
    id = @comment.id.to_s
    score = @comment.score.to_i
    if id.in?(current_user.upvoted_c) then
      current_user.upvoted_c.delete(id)
      current_user.downvoted_c.push(id)
      score -= 2
    elsif id.in?(current_user.downvoted_c) then
      current_user.downvoted_c.delete(id)
      score += 1
    else
      current_user.downvoted_c.push(id)
      score -= 1
    end
    @comment.score = score.to_s
    @comment.save
    current_user.save
  end  
  
  private
  def comment_params
    params.require(:comment).permit(:text, :parent, :post, :sub)
  end
  
end
