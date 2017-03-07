class UsersController < ApplicationController
  
  def new
    @user = User.new
  end
  
  def create
    @user = User.new(user_params)
    if @user.save
      session[:user_id] = @user.id
      redirect_to '/'
    else
      redirect_to '/signup'
    end
  end
  
  def themes
  
  end
  
  def rules
  
  end
  
  def cookies
  
  end
  
  def contact
  
  end
  
  def help
  
  end
  
  def 
  
  def messages
    current_user.notifications = 0
    current_user.save
    @comments = Comment.where(id: current_user.replies)
    @comments = @comments.order(:created_at)
    @comments.reverse_order!
  end
  
  def show
    @user = User.find_by_username(params[:username])
    @posts = Post.where(author: @user.username)
  end
  
  def updateset
    current_user.background = params[:user][:background]
    current_user.main_color = params[:user][:main_color]
    current_user.snd_color = params[:user][:snd_color]
    current_user.save
    redirect_to '/'
  end
  
  private
  def user_params
    params.require(:user).permit(:username, :email, :password)
  end
  
end
