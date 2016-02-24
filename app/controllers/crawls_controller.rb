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
    bar_names = params["bar_names"]
    hops = []
    bar_names.each_with_index do |bar,index|
      unless bar.nil?
        b = Bar.find_by(name: bar)
        hops << Hop.new(position: index + 1, bar: b)
      end
    end
    @crawl = Crawl.new(crawl_params)
    hops.each {|hop| @crawl.hops << hop}

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
