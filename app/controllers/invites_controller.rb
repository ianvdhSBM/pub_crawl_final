class InvitesController < ApplicationController
  def invite_user
    unless params[:email].nil?
      user = User.find_by(email: params[:email])
      if user
        invitee = Invitee.new(crawl_id: params[:crawl_id], user_id: user.id)
        render nothing: true if invitee.save
      end
    end
  end

  def get_invites
  end
end
