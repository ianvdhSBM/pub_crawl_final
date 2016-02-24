class BarsController < ApplicationController

  def index
    @bars = Bar.all
    # render component: 'Bars', props: { bars: @bars }
  end

  def show
    @bar = Bar.find_by(id: params[:id])
    # render component: 'Bar', props: { bar: @bar }
  end

  def new
    @bar = Bar.new
  end

  def edit
    @bar = Bar.find_by(id: params[:id])
  end

  def create
    @bar = Bar.new

    if @bar.save
      # code here
    else
      # code here
    end
  end

  def update
    @bar = Bar.find_by(id: params[:id])

    @bar.update_attributes(bar_params)
  end

  def destroy
    @bar = Bar.find_by(id: params[:id])
    if @bar.destroy
      # code here
    else
      # code here
    end
  end

  def autocomplete
    @bars = Bar.where("name LIKE ?", "#{params[:query]}%").pluck(:name)
  end

  private

  def bar_params
    params.require(:bar).permit(:name, :address, :city, :province, :web_site, :phone_number, :price)
  end

end
