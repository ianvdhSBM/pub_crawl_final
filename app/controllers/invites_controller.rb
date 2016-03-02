class InvitesController < ApplicationController
  def invite_user
    unless params[:email].nil?
      user = User.find_by(email: params[:email])
      if user
        invitee = Invitee.new(crawl_id: params[:crawl_id], user_id: user.id)
        if invitee.save
          render nothing: true
        else
          render nothing: true, status: 500
        end

      end
    end
  end

  def get_invites
  end
end
