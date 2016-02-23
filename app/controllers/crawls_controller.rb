class CrawlsController < ApplicationController

  def index
    @crawls = Crawl.all
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
    bar_names = params["crawl"].delete("bar_names")
    byebug
    hops = []
    bar_names.each_with_index do |bar,index|
      b = Bar.find_by(name: bar)
      unless b
        #handle bar not found
      else
        hops << Hop.new(position: index + 1, bar: b)
      end
    end
    @crawl = Crawl.new(crawl_params)

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
