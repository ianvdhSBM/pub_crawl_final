class CrawlsController < ApplicationController

  def index
    # @crawls = Crawl.all
    @crawls = Crawl.includes(hops: :bar)
    # render component: 'Crawls', props: { crawls: @crawls }
  end

  def show
    @crawl = Crawl.find_by(id: params[:id])
  end

  def new
    @crawl = Crawl.new
  end

  def edit
    @crawl = Crawl.find_by(id: params[:id])
  end

  def create
    @crawl = Crawl.new

    if @crawl.save
      # code here
    else
      # code here
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
