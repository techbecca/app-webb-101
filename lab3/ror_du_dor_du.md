## LAB3 notification solution
```javascript
notifyAction(action) {
      /*
      action structure:
      {
        type: 'ACTION_TYPE',
        data: {} (optional)
      */
      if (action.type === 'SOLVED') {
          this.domManager.setScore(++this.score);
      }
        console.log("matched", action);
    }
```
