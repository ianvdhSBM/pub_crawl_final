class UsersController < ApplicationController

  def show
    @user = User.find_by(id: params[:id])
    @tags = Tag.order(:name)
    @current_user = current_user
  end

  def new
    @user = User.new
  end

  def edit
    @user = User.find_by(id: params[:id])
  end

  def create
    @user = User.new(user_params)

    if @user.save
      # code here
    else
      # code here
    end
  end

  def update
    @user = User.find_by(id: params[:id])

    @user.update_attributes(user_params)
  end

  def destroy
    @user = User.find_by(id: params[:id])
    if @user.destroy
      # code here
    else
      # code here
    end
  end

  private

  def user_params
    params.require(:user).permit(:firstname, :lastname, :image, :email, :encrypted_password)
  end

end
