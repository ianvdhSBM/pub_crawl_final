require 'test_helper'

class InviteControllerTest < ActionController::TestCase
  test "should get invite_user" do
    get :invite_user
    assert_response :success
  end

end
