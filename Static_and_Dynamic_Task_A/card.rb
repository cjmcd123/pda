
class Card
  attr_reader :suit, :value

def initialize(suit, value)
  @suit = suit
  @value = value;
end

def name()
  return @value.to_s + " of " + @suit
end
end
