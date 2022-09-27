function defineSuit(card) {
    let x = card.substr(-1)
    if( x === '♣') {
      return 'clubs';
    }
    if(x === '♦') {
      return 'diamonds';
    }
     if(x === '♥') {
      return 'hearts'
    }
     if(x === '♠') {
      return 'spades'
    }
  }
  