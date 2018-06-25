require("minitest/autorun")
require("minitest/rg")
require_relative("./testing_task_2.rb")
require_relative("./card.rb")

class SpecTest < MiniTest::Test

  def setup()
    @card1 = Card.new("Hearts", 6)
    @card2 = Card.new("Clubs", 8)
    @card3 = Card.new("Diamonds", 1)
    @cards = [@card1,@card2, @card3]
    @game = CardGame.new(@cards)
  end

  def test_card_value()
    assert_equal(6, @card1.value)
  end

  def test_card_name()
    assert_equal("8 of Clubs", @card2.name)
  end

  def test_is_card_ace()
    result = @game.checkforAce(@card3)
    assert_equal(true, result)
  end

  def test_highest_card_card1()
    result = @game.highest_card(@card1, @card3)
    assert_equal("6 of Hearts", result)
  end

  def test_highest_card_card2()
    result = @game.highest_card(@card1, @card2)
    assert_equal("8 of Clubs", result)
  end

  def test_total_of_cards()
    assert_equal("You have a total of 15", CardGame.cards_total(@cards))
  end
end
