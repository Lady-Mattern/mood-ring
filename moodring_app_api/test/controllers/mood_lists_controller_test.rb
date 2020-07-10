require 'test_helper'

class MoodListsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @mood_list = mood_lists(:one)
  end

  test "should get index" do
    get mood_lists_url, as: :json
    assert_response :success
  end

  test "should create mood_list" do
    assert_difference('MoodList.count') do
      post mood_lists_url, params: { mood_list: { audio: @mood_list.audio, img: @mood_list.img, mood: @mood_list.mood, title: @mood_list.title } }, as: :json
    end

    assert_response 201
  end

  test "should show mood_list" do
    get mood_list_url(@mood_list), as: :json
    assert_response :success
  end

  test "should update mood_list" do
    patch mood_list_url(@mood_list), params: { mood_list: { audio: @mood_list.audio, img: @mood_list.img, mood: @mood_list.mood, title: @mood_list.title } }, as: :json
    assert_response 200
  end

  test "should destroy mood_list" do
    assert_difference('MoodList.count', -1) do
      delete mood_list_url(@mood_list), as: :json
    end

    assert_response 204
  end
end
