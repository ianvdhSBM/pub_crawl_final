class ReviewsController < ApplicationController

  before_filter :load_crawl
  protect_from_forgery :except => [:create]

  def new
    @review = @crawl.reviews.new
  end

  def create
    @review = @crawl.reviews.new(rating: params[:rating], comment: params[:comment])
    @review.user_id = current_user.id

    if @review.save
      render nothing: true
    else
      # render :new
    end
  end

  protected

  def load_crawl
    @crawl = Crawl.find(params[:crawl_id])
  end

  def review_params
    params.require(:review).permit(:rating, :comment)
  end

end
