const TEXTS = [
    'Go!',
    '1',
    '2',
    '3',
  ];
  
  class chrystalActions {
    constructor() {
      const clickHandler = () => {
        this.addListeners();
        this.startTimer();
        
        this.button.removeEventListener('click', clickHandler);
      }
  
      this.currIndex = 0;
      this.button = document.querySelector('.chrystal__content');
      this.text = this.button.querySelector('.chrystal__text');
      this.bgWrapper = document.querySelector('.container');
      this.button.addEventListener('click', clickHandler);
    }
    
    addListeners() {
      this.button.addEventListener('mouseover', () => {
        this.bgWrapper.style.backgroundColor = '#6495ed';
      });
      
      this.button.addEventListener('mouseout', () => {
        this.bgWrapper.style.backgroundColor = '#fff9f8';
      });
    }
    
    startTimer() {
      const displayNextWord = () => {
        this.currIndex = (this.currIndex + 1) % 4;
        this.text.innerText = TEXTS[this.currIndex % 4];
        if (this.currIndex === 0) {
          setTimeout(displayNextWord, 2000);
        } else {
          setTimeout(displayNextWord, 1000);
        }
      }
      
      setTimeout(displayNextWord, 10);
    }
  }
  

export default chrystalActions;