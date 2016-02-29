class InvitesController < ApplicationController
  def invite_user
    user = User.find_by
    render nothing: true, status: 200
  end

  def get_invites
  end
end
