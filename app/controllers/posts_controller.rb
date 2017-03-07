class PostsController < ApplicationController
  
  before_action :require_user, only: [:new, :create, :upvote, :downvote, :comment]
  
  def index
    @posts = Post.all
  end 

  def show
    @post = Post.find(params[:id])
    @stuff = @post.imge.split(' ')
    @content = @post.content.split('(newpar)');
  end
  
  def new
    @post = Post.new
  end
  
  def create
    @post = Post.new(post_params)
    @post[:author] = current_user.username
    @post[:score] = '0'
    if @post.title.length > 1 then
      if @post.save
        redirect_to '/i/'+@post.sub+'/'+@post.id.to_s
      else
        redirect_to '/error'
      end
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
  
  def comment
    @comment = params.require(:comment).permit(:text, :parent, :p_id, :sub)
    @post = Post.find(@comment[:p_id])
    @comment[:author] = current_user.username
    @comment[:score] = 0
    @comment[:id] = @post[:comments].length
    @post[:comments].push(@comment)
    @post.save
  end
  
  def subindexnew
    @subi = params[:sub]
    @posts = Post.where(sub: params[:sub])
    @posts = @posts.order(:created_at).limit(1000)
    @posts.reverse_order!
    @totalposts = @posts.length
    if params.has_key?(:page) then
      @page = params[:page]
      @page = @page.to_i-1
      @posts = @posts[@page*11 .. (@page*11)+10]
    else
      @posts = @posts[0 .. 10]
    end
  end
  
  def subindex
    @subi = params[:sub]
    @posts = Post.where(sub: params[:sub])
    if params.has_key?(:time) then
      @time = params[:time]
    else
      @time = 'week'
    end
    @timet = @time
    @times = {'today' => 1.day, 'week' => 1.week, 'year' => 1.year, 'alltime' => 1000.years}
    @time = @times[@time]
    @posts = @posts.where(created_at: (Time.now - @time)..Time.now)
    @posts = @posts.sort_by { |a| -(a.score.to_i) }
    @totalposts = @posts.length
    if params.has_key?(:page) then
      @page = params[:page]
      @page = @page.to_i-1
      @posts = @posts[@page*11 .. (@page*11)+10]
    else
      @posts = @posts[0 .. 10]
    end
  end
  
  def delete
    @post = Post.find(params[:id])
    if current_user.username == @post.author then
      @post.destroy
    end
    redirect_to '/'
  end
  
  def top
    if params.has_key?(:time) then
      @time = params[:time]
    else
      @time = 'week'
    end
    @timet = @time
    @times = {'today' => 1.day, 'week' => 1.week, 'year' => 1.year, 'alltime' => 1000.years}
    @time = @times[@time]
    @posts = Post.where(created_at: (Time.now - @time)..Time.now)
    @posts = @posts.sort_by { |a| -(a.score.to_i) }
    @totalposts = @posts.length
    if params.has_key?(:page) then
      @page = params[:page]
      @page = @page.to_i-1
      @posts = @posts[@page*11 .. (@page*11)+10]
    else
      @posts = @posts[0 .. 10]
    end
  end
  
  def newest
    @posts = Post.order(:created_at).limit(1000)
    @posts.reverse_order!
    @totalposts = @posts.length
    if params.has_key?(:page) then
      @page = params[:page]
      @page = @page.to_i-1
      @posts = @posts[@page*11 .. (@page*11)+10]
    else
      @posts = @posts[0 .. 10]
    end
  end

  
  private
  def post_params
    params.require(:post).permit(:title, :content, :sub, :imge)
  end
  
end
