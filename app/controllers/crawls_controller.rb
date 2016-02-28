class CrawlsController < ApplicationController
  before_action :authenticate_user!, except: [:index, :show]
  def index
    # @crawls = Crawl.all
    @crawls = Crawl.includes(hops: :bar)
    @tags = Tag.order(:name)
    # render component: 'Crawls', props: { crawls: @crawls }
  end

  def show
    @crawl = Crawl.find_by(id: params[:id])
    @reviews = Review.all
    @users = User.all
    current_user ? @user = current_user : nil
  end

  def new
    @crawl = Crawl.new
    @tags = Tag.order(:name)
  end

  def edit
    @crawl = Crawl.find_by(id: params[:id])
  end

  def create
    @crawl = Crawl.new(crawl_params)
    @crawl.user_id = current_user.id
    params[:bar_names].each_with_index do |bar,index|
      unless bar.nil?
        b = Bar.find_by(name: bar)
        @crawl.hops << Hop.new(position: index + 1, bar: b)
      end
    end

    params[:tags].each {|tag_id| @crawl.tags << Tag.find_by(id: tag_id)}


    if @crawl.save
      redirect_to root_path
    else
      render "new"
    end
  end

  def update
    @crawl = Crawl.find_by(id: params[:id])

    @crawl.update_attributes(crawl_params)
  end

  def destroy
    @crawl = Crawl.find_by(id: params[:id])
    if @crawl.destroy
      # code here
    else
      # code here
    end
  end

  private

  def crawl_params
    params.require(:crawl).permit(:name, :description)
  end

end
