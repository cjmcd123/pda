### Testing task 1:

# Carry out static testing on the code below.
# Comment on any errors that you see below.
```ruby
### Testing task 2 code:

# Carry out dynamic testing on the code below.
# Correct the errors below that you spotted in task 1.

require_relative('card.rb')

class CardGame


  def checkforAce(card)
    if card.value = 1
      # two equals signs needed for the logic statement
      return true
    else
      return false
    end
  end

  dif highest_card(card1 card2)
  # no method declared should be "def" not "dif"
  # no comma between card1 & card2
  if card1.value > card2.value
    return card.name
    # should be card1 or card2
  else
    card2
    # should be "card2.name" to match the first half of the if statement
  end
  # should probably have a result for a draw
end
end
# extraneous end statement

def self.cards_total(cards)
  total
  # improperly declared variable
  for card in cards
    total += card.value
    return "You have a total of" + total
    # missing space after "of" so the printed statement is legible
    # can't add an integer into a string (need .to_s after total)
    # return statement should be outside of the for loop else it will be printed with every card in cards
  end
end

# missing end statement
```
